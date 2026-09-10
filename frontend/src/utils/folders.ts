export const FOLDER_NONE = '-';
export const FOLDER_INBOX = 'INBOX';
export const FOLDER_DRAFTS = 'Drafts';
export const FOLDER_SENT = 'Sent';
export const FOLDER_ARCHIVE = 'Archive';
export const FOLDER_ARCHIVES = 'Archives';
export const FOLDER_SPAM = 'Spam';
export const FOLDER_JUNK = 'Junk';
export const FOLDER_TRASH = 'Trash';

/**
 * Encodes a mailbox name for use as a single path segment in a backend URL
 * (e.g. `/mailboxes/${encodeMailboxPath(name)}/status`).
 *
 * Mailbox names can contain the IMAP hierarchy delimiter, most notably Gmail's
 * special folders under `[Gmail]/` (e.g. `[Gmail]/All Mail`). Go's
 * net/http.ServeMux decodes `%2F` back to `/` before routing, which would split
 * the single-segment `{mbox}` wildcard and make the request 404. We therefore
 * double-encode the name: the extra layer survives ServeMux's decode as a
 * literal `%2F` (so the segment is not split), and the backend handlers undo it
 * with a single `url.PathUnescape`. This is a no-op for ordinary names.
 * See GitHub issue #4.
 *
 * Only use this for the mailbox *path segment*. Mailbox names sent in a request
 * body or query string (e.g. move/copy destination, rename target) must be sent
 * verbatim, not double-encoded.
 */
export function encodeMailboxPath(name: string): string {
  return encodeURIComponent(encodeURIComponent(name));
}

/**
 * The special-use role of a mailbox, independent of its (server- and
 * locale-specific) name.
 */
export type MailboxRole = 'inbox' | 'drafts' | 'sent' | 'archive' | 'junk' | 'trash' | 'all';

// IMAP special-use attribute -> role. Attribute values are matched
// case-insensitively and tolerate both single- ("\Sent") and double-escaped
// ("\\Sent") forms, since different layers of the stack escape them differently.
const ATTR_TO_ROLE: Record<string, MailboxRole> = {
  '\\inbox': 'inbox',
  '\\drafts': 'drafts',
  '\\sent': 'sent',
  '\\archive': 'archive',
  '\\junk': 'junk',
  '\\trash': 'trash',
  '\\all': 'all',
};

// Well-known English mailbox names -> role, used only as a fallback when the
// server does not advertise special-use attributes.
const NAME_TO_ROLE: Record<string, MailboxRole> = {
  [FOLDER_INBOX.toLowerCase()]: 'inbox',
  [FOLDER_DRAFTS.toLowerCase()]: 'drafts',
  [FOLDER_SENT.toLowerCase()]: 'sent',
  [FOLDER_ARCHIVE.toLowerCase()]: 'archive',
  [FOLDER_ARCHIVES.toLowerCase()]: 'archive',
  [FOLDER_SPAM.toLowerCase()]: 'junk',
  [FOLDER_JUNK.toLowerCase()]: 'junk',
  [FOLDER_TRASH.toLowerCase()]: 'trash',
};

/**
 * Determines the special-use role of a mailbox object (as sent by the backend,
 * carrying an `Attrs` string array and a `Name`/`Mailbox` field).
 *
 * The IMAP special-use attribute is authoritative; the English-name table is
 * only consulted as a fallback for servers that do not advertise attributes.
 * This is what lets Gmail's `[Gmail]/Sent Mail`, `[Gmail]/Trash`, etc. be
 * recognized even though their names are not the usual "Sent"/"Trash".
 * See GitHub issue #4 (secondary). Returns null when the mailbox is not special
 * (or is a \Noselect / \NonExistent placeholder).
 */
export function mailboxRole(mb: any): MailboxRole | null {
  if (!mb) return null;
  const attrs: any[] = Array.isArray(mb.Attrs) ? mb.Attrs : [];
  const lowerAttrs = attrs.map(a => (typeof a === 'string' ? a.toLowerCase() : ''));
  for (const a of lowerAttrs) {
    const role = ATTR_TO_ROLE[a];
    if (role) return role;
  }
  // Do not let non-selectable placeholders masquerade as a special mailbox.
  if (lowerAttrs.includes('\\noselect') || lowerAttrs.includes('\\nonexistent')) {
    return null;
  }
  const name: string = mb.Name || mb.Mailbox || '';
  return NAME_TO_ROLE[name.toLowerCase()] ?? null;
}

/**
 * Resolves the role of a mailbox identified by name, preferring the special-use
 * attributes of the matching entry in `mailboxes` (when available) and falling
 * back to the well-known English name otherwise.
 */
export function mailboxRoleByName(name: string, mailboxes: any[] = []): MailboxRole | null {
  if (!name) return null;
  const mb = (mailboxes || []).find(m => (m?.Name || m?.Mailbox) === name);
  if (mb) return mailboxRole(mb);
  return NAME_TO_ROLE[name.toLowerCase()] ?? null;
}

/**
 * Finds the actual name of the mailbox fulfilling a special-use role (e.g. the
 * real Trash mailbox), preferring the special-use attribute and falling back to
 * a well-known name. Returns `fallback` when no matching mailbox is found, so a
 * caller can still attempt a move/copy against the conventional name.
 */
export function findMailboxNameByRoleOld(role: MailboxRole, mailboxes: any[], fallback: string): string {
  const mb = (mailboxes || []).find(m => mailboxRole(m) === role);
  return mb ? (mb.Name || mb.Mailbox || fallback) : fallback;
}

export function mailboxAccountFromName(name: string): string | null {

  if (!name === null) return null;
  if (name === "INBOX") return null;
  const parts = name.split("#")
  if (parts.length == 1) return null;
  if (parts[0] == "INBOX") {
    return parts[1];
  } else {
    return parts[0];
  }
}

export function findMailboxNameByRole(role: MailboxRole, name: string, mailboxes: any[], fallback: string): string {

  if (!name) {
    return fallback;
  }
  const account = mailboxAccountFromName(name);
  if (account === null) {
    const related = (mailboxes || []).filter(m => mailboxAccountFromName(m.Name || m.Mailbox || "") === null);
    const mb = related.find(m => mailboxRole(m) === role);
    return mb ? (mb.Name || mb.Mailbox || fallback) : fallback;
  } else {
    const related = (mailboxes || []).filter(m => mailboxAccountFromName(m.Name || m.Mailbox || "") === account);
    const mb = related.find(m => mailboxRole(m) === role);
    fallback = account + "#" + fallback;
    return mb ? (mb.Name || mb.Mailbox || fallback) : fallback;
  }
}

export function folderCanBeDeleted(name: string): boolean {

  if (/^(trash|junk|spam|deleted items)$/i.test(name)) {
    return true;
  }
  let parts = name.split("#");
  if (parts.length == 1) {
    return false;
  }
  if (!parts[0].startsWith("@")) {
    return false;
  }
  if (/^(trash|junk|spam|deleted items)$/i.test(parts[1])) {
    return true;
  }
  return false
}