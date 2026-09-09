const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/openpgp-ByQpE-bo.js","assets/rolldown-runtime-B_qr_iJn.js"])))=>i.map(i=>d[i]);
import { n as __exportAll, r as __toESM } from "./rolldown-runtime-B_qr_iJn.js";
import { _ as i$1, a as c$1, c as e$2, d as r, f as n$1, g as b, h as D, i as l, l as n, m as i, n as n$2, o, p as t, r as o$1, s as c, t as e$1, u as e } from "./lit-CSY1oXsL.js";
import { n as require_css, r as RRule, t as PostalMime } from "./vendor-BBc1LW0a.js";
import { a as index_default, c as getMarkRange, i as index_default$1, n as Color, o as Editor, r as TextStyle, s as Extension, t as BubbleMenu } from "./editor-ChHr_Gm8.js";
//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/plugin-registry.ts
var PluginRegistry = class {
	constructor() {
		this.navTabs = [];
		this.settingsTabs = [];
		this.routes = [];
		this.hooks = /* @__PURE__ */ new Map();
		this.enabledPlugins = null;
	}
	setEnabledPlugins(plugins) {
		this.enabledPlugins = new Set(plugins);
		window.dispatchEvent(new CustomEvent("plugins-updated"));
	}
	registerHook(hookName, handler) {
		if (!this.hooks.has(hookName)) this.hooks.set(hookName, []);
		this.hooks.get(hookName).push(handler);
	}
	async invokeHookAsync(hookName, payload) {
		const handlers = this.hooks.get(hookName) || [];
		return await Promise.all(handlers.map((handler) => handler(payload)));
	}
	invokeHook(hookName, payload) {
		const handlers = this.hooks.get(hookName) || [];
		const results = [];
		handlers.forEach((handler) => {
			try {
				results.push(handler(payload));
			} catch (e) {
				console.error(`Error in hook ${hookName}:`, e);
			}
		});
		return results;
	}
	registerNavTab(tab) {
		if (!this.navTabs.find((t) => t.id === tab.id)) this.navTabs.push(tab);
	}
	getNavTabs() {
		let tabs = this.navTabs;
		if (this.enabledPlugins !== null) tabs = tabs.filter((t) => {
			const pluginName = t.pluginId || t.id;
			return this.enabledPlugins.has(pluginName);
		});
		return tabs.slice().sort((a, b) => (a.order || 999) - (b.order || 999));
	}
	registerSettingsTab(tab) {
		if (!this.settingsTabs.find((t) => t.id === tab.id)) this.settingsTabs.push(tab);
	}
	getSettingsTabs() {
		if (this.enabledPlugins !== null) return this.settingsTabs.filter((t) => {
			const pluginName = t.pluginId || t.id;
			return this.enabledPlugins.has(pluginName);
		});
		return this.settingsTabs;
	}
	registerRoute(route) {
		if (!this.routes.find((r) => r.path === route.path)) this.routes.push(route);
	}
	getRoutes() {
		return this.routes;
	}
};
var registry = new PluginRegistry();
//#endregion
//#region ../plugins/caldav/frontend/i18n/en.ts
var en_exports$4 = /* @__PURE__ */ __exportAll({ default: () => en_default$4 });
var en_default$4 = { calendar: {
	months: {
		"0": "January",
		"1": "February",
		"2": "March",
		"3": "April",
		"4": "May",
		"5": "June",
		"6": "July",
		"7": "August",
		"8": "September",
		"9": "October",
		"10": "November",
		"11": "December"
	},
	monthsShort: {
		"0": "Jan",
		"1": "Feb",
		"2": "Mar",
		"3": "Apr",
		"4": "May",
		"5": "Jun",
		"6": "Jul",
		"7": "Aug",
		"8": "Sep",
		"9": "Oct",
		"10": "Nov",
		"11": "Dec"
	},
	days: {
		"0": "Sunday",
		"1": "Monday",
		"2": "Tuesday",
		"3": "Wednesday",
		"4": "Thursday",
		"5": "Friday",
		"6": "Saturday"
	},
	daysShort: {
		"0": "Sun",
		"1": "Mon",
		"2": "Tue",
		"3": "Wed",
		"4": "Thu",
		"5": "Fri",
		"6": "Sat"
	},
	daysNarrow: {
		"0": "S",
		"1": "M",
		"2": "T",
		"3": "W",
		"4": "T",
		"5": "F",
		"6": "S"
	},
	title: "Calendar",
	myCalendars: "My Calendars",
	addEvent: "Add Event",
	rename: "Rename",
	delete: "Delete",
	addCalendar: "Add Calendar",
	renameCalendar: "Rename Calendar",
	deleteCalendar: "Delete Calendar",
	calendarName: "Calendar Name",
	searchResults: "Search Results",
	noResults: "No events found matching your search.",
	day: "Day",
	week: "Week",
	month: "Month",
	year: "Year",
	today: "Today",
	allDay: "All Day",
	noTitle: "(No title)",
	location: "Location",
	notes: "Notes",
	editEvent: "Edit Event",
	deleteEvent: "Delete Event",
	newEvent: "New Event",
	summary: "Summary",
	eventTitle: "Event title",
	calendar: "Calendar",
	startDate: "Start Date",
	endDate: "End Date",
	time: "Time",
	addLocation: "Add location",
	addDescription: "Add description",
	description: "Description",
	moreEvents: "+{count} more",
	repeat: "Repeat",
	repeatNone: "Do not repeat",
	repeatDaily: "Daily",
	repeatWeekly: "Weekly",
	repeatMonthly: "Monthly",
	repeatYearly: "Yearly",
	repeatCustom: "Custom"
} };
//#endregion
//#region ../plugins/carddav/frontend/i18n/en.ts
var en_exports$3 = /* @__PURE__ */ __exportAll({ default: () => en_default$3 });
var en_default$3 = { contacts: {
	unnamedContact: "Unnamed Contact",
	title: "Contacts",
	allContacts: "All Contacts",
	favorites: "Favorites",
	addContact: "Add Contact",
	createCategory: "Create Category",
	categoryName: "Category Name",
	renameCategory: "Rename Category",
	deleteCategory: "Delete Category",
	deleteCategoryConfirm: "Are you sure you want to delete the category '{category}'? This will remove it from all contacts. No contacts will be deleted.",
	rename: "Rename",
	delete: "Delete",
	create: "Create",
	add: "Add",
	newCategory: "New Category",
	refreshContacts: "Refresh Contacts",
	sortZa: "Sort Z-A",
	sortAz: "Sort A-Z",
	filterStarred: "Filter Starred",
	uncategorized: "Uncategorized",
	addToCategory: "Add to Category",
	deleteContact: "Delete Contact",
	deleteContactConfirm: "Are you sure you want to delete this contact?",
	editContact: "Edit Contact",
	save: "Save",
	cancel: "Cancel",
	noContacts: "No contacts found",
	selectContact: "Select a contact to view details",
	selectedContacts: "{count} contacts selected",
	clearSelection: "Clear selection",
	selectAll: "Select All",
	clearSearch: "Clear Search",
	searchContacts: "Search contacts...",
	details: "Details",
	notes: "Notes",
	name: "Name",
	nickname: "Nickname",
	organization: "Organization",
	titleField: "Title",
	email: "Email",
	phone: "Phone",
	address: "Address",
	url: "URL",
	birthday: "Birthday",
	back: "Back",
	toggleStar: "Toggle Star",
	publicKey: "Public Key"
} };
//#endregion
//#region ../plugins/gpg/frontend/i18n/en.ts
var en_exports$2 = /* @__PURE__ */ __exportAll({ default: () => en_default$2 });
var en_default$2 = {
	settings: { gpg: "GPG Keys" },
	gpg: {
		toggleEncryption: "Toggle GPG Encryption",
		decryptedSuccess: "The content of this message was end-to-end encrypted with GPG.",
		decryptedFailed: "This message is encrypted but no matching private key is found on server to decrypt it.",
		passphraseRequired: "GPG Passphrase Required",
		passphraseSetTitle: "Set GPG Passphrase",
		passphraseConfirmTitle: "Confirm GPG Passphrase",
		passphrasePrompt: "Please enter your passphrase to unlock your private key.",
		passphraseLockPrompt: "Please enter a new passphrase to encrypt your private key.",
		passphraseConfirmPrompt: "Please re-enter your passphrase to confirm.",
		passphrase: "Passphrase",
		cancel: "Cancel",
		unlock: "Unlock",
		lock: "Set Passphrase",
		confirm: "Confirm",
		yourGpgKey: "Your GPG Key",
		keyStoredSecurely: "You have a GPG keypair stored securely on the server. The private key is encrypted with your passphrase.",
		publicKey: "Public Key",
		purgeKeys: "Purge Keypair",
		generateNewKeypair: "Generate New Keypair",
		enableEncryptionDesc: "To enable end-to-end encryption between contacts that support it, you'll need a GPG keypair.",
		noKeyPresent: "No key present",
		passphraseRequiredLabel: "Passphrase (Required)",
		generateKeysBtn: "Generate Keys",
		importExistingKeys: "Import Existing GPG Keypair",
		publicKeyBlock: "Public Key Block",
		privateKeyBlock: "Private Key Block",
		importUnencryptedDesc: "Paste your public and private key blocks, e.g. from \"gpg --armor --export-secret-keys\". If the private key is passphrase-protected, you'll be asked for its current passphrase, then to set a new one.",
		importIncorrectPassphrase: "Incorrect passphrase for the private key. Please try again.",
		importKeysBtn: "Import Keys",
		purgeConfirm: "Are you sure you want to permanently delete your GPG keys from the server? Past encrypted emails will become unreadable.",
		passphraseMissing: "Passphrase is required to encrypt your new private key.",
		importMissing: "Both public and private blocks are required for import.",
		generateFailed: "Failed to generate keys: {error}",
		importFailed: "Import failed: {error}",
		importFailedTitle: "Import Failed",
		passphraseMismatch: "Passphrases do not match. Please try again.",
		missingPublicKeys: "Cannot encrypt: Missing public keys for:\n{keys}",
		attachmentsNotEncryptable: "Attachments cannot be encrypted with inline PGP and would be sent unencrypted. Remove the attachments, or turn off encryption to send them."
	}
};
//#endregion
//#region ../plugins/managesieve/frontend/i18n/en.ts
var en_exports$1 = /* @__PURE__ */ __exportAll({ default: () => en_default$1 });
var en_default$1 = {
	"settings": { "categories": { "filters": "Filters" } },
	"managesieve": {
		"title": "Filters",
		"description": "Add custom rules on how messages are processed and filed.",
		"tabs": { "switchToRaw": "Raw Editor" },
		"warningRawSwitchTitle": "Switch to Raw Mode",
		"warningRawSwitchConfirm": "Switch",
		"warningRawSwitch": "Switching to raw mode means the script will no longer be editable visually. Continue?",
		"toast": {
			"saved": "Rules saved and activated.",
			"deactivated": "Rules deactivated.",
			"valid": "Script is valid!",
			"networkError": "Network error occurred."
		},
		"visual": {
			"newRule": "New Rule",
			"noRules": "No rules defined.",
			"saveFilters": "Save",
			"deleteRule": "Delete Rule",
			"remove": "Remove",
			"add": "Add",
			"if": "IF",
			"all": "ALL",
			"any": "ANY",
			"ofTheFollowing": "of the following conditions match",
			"then": "THEN",
			"actions": {
				"fileinto": "Move to folder",
				"discard": "Discard (Delete)",
				"redirect": "Redirect to email",
				"stop": "Stop evaluating rules"
			},
			"fields": {
				"subject": "Subject",
				"from": "From",
				"to": "To",
				"body": "Body",
				"size": "Size",
				"emailAddress": "Email Address"
			},
			"operators": {
				"contains": "Contains",
				"not_contains": "Does not contain",
				"is": "Is exactly",
				"not_is": "Is not exactly",
				"over": "Over",
				"under": "Under"
			}
		},
		"raw": {
			"validate": "Validate",
			"save": "Save"
		}
	}
};
//#endregion
//#region ../plugins/password/frontend/i18n/en.ts
var en_exports = /* @__PURE__ */ __exportAll({ default: () => en_default });
var en_default = { settings: {
	categories: { password: "Password" },
	password: {
		title: "Password",
		changePassword: "Change Password",
		changePasswordDesc: "Update your account password.",
		oldPassword: "Current Password",
		newPassword: "New Password",
		confirmPassword: "Confirm New Password",
		updatePassword: "Update Password",
		fillAllFields: "Please fill in all fields.",
		passwordMismatch: "New passwords do not match."
	}
} };
//#endregion
//#region src/i18n/en.ts
var en$1 = {
	tags: {
		important: "Important",
		work: "Work",
		personal: "Personal",
		todo: "To Do",
		later: "Later"
	},
	settings: {
		title: "Settings",
		categories: {
			general: "General",
			identity: "Identity",
			reading: "Reading & Composing",
			appearance: "Appearance",
			localization: "Localization",
			accounts: "Linked Accounts",
			accountsDesc: "Pre-authorized accounts for quick switching between.",
			webauthn: "2FA / WebAuthn"
		},
		loading: "Loading...",
		placeholderName: "Your Name",
		placeholderReplyTo: "reply@example.com",
		general: {
			checkMailInterval: "Check mail interval",
			checkMailIntervalDesc: "How often to automatically check for new mail.",
			autoLogout: "Auto-logout",
			autoLogoutDesc: "Automatically log out after inactivity.",
			desktopNotifications: "Enable Desktop Notifications",
			soundNotifications: "Play sound notification on new messages",
			everyMinute: "Every minute",
			every5Minutes: "Every 5 minutes",
			every15Minutes: "Every 15 minutes",
			every30Minutes: "Every 30 minutes",
			never: "Never",
			minutes15: "15 minutes",
			minutes30: "30 minutes",
			hour1: "1 hour",
			hours2: "2 hours",
			hours6: "6 hours"
		},
		identity: {
			displayName: "Display Name",
			displayNameDesc: "The name shown to recipients when you send an email.",
			signature: "Signature",
			signatureDesc: "Appended to the end of your sent messages.",
			replyTo: "Reply-To Address",
			replyToDesc: "Optional: specify a different address for replies.",
			bccMyself: "Always BCC myself on outgoing mail"
		},
		reading: {
			messagesPerPage: "Messages per page",
			preferredView: "Preferred View",
			preferredViewDesc: "How to display messages that have both HTML and Plain Text.",
			showRemoteContent: "Show Remote Content",
			composeFormat: "Compose Format",
			html: "HTML",
			plainText: "Plain Text",
			alwaysAsk: "Always ask",
			alwaysLoad: "Always load",
			richText: "Rich Text (HTML)",
			markReadTimeout: "Mark as Read",
			markReadImmediately: "Immediately",
			markRead1s: "After 1 second",
			markRead3s: "After 3 seconds",
			markRead5s: "After 5 seconds",
			markRead10s: "After 10 seconds",
			markReadNever: "Never mark automatically",
			messageSortCriteria: "Message Sort Criteria",
			messageSortCriteriaDesc: "Choose whether to sort by the original received date or by folder filing date.",
			sortUid: "Folder Filing Date",
			sortDate: "Received Date",
			enableThreading: "Use threading",
			themeIframeContent: "Apply theme to HTML messages content"
		},
		appearance: {
			colorTheme: "Color Theme",
			colorThemeDesc: "Select your preferred color palette.",
			themeMode: "Theme Mode",
			themeModeDesc: "Choose light, dark, or system auto.",
			layoutMode: "Layout Mode",
			layoutModeDesc: "Choose how you want your mailbox to be laid out.",
			listDensity: "List Density",
			listDensityDesc: "Adjust the spacing and compactness of the message list.",
			light: "Light",
			dark: "Dark",
			systemAuto: "System Auto",
			vertical: "Vertical (3 Panes)",
			horizontal: "Horizontal (Top/Bottom)",
			fullScreen: "Full Screen (Hide list when reading)",
			loose: "Loose",
			normal: "Normal",
			compact: "Compact",
			ultraCompact: "Ultra Compact"
		},
		localization: {
			language: "Language",
			timeFormat: "Time Format",
			dateFormat: "Date Format",
			format12h: "12-hour (AM/PM)",
			format24h: "24-hour",
			english: "English",
			german: "Deutsch",
			italian: "Italiano",
			spanish: "Español",
			serbian: "Српски",
			serbianLatin: "Srpski (Latinica)",
			french: "Français",
			portuguese: "Português"
		}
	},
	linkedAccounts: {
		description: "Connect another account to quickly switch between them without logging out.",
		noAccounts: "No linked accounts.",
		remove: "Remove",
		addTitle: "Link Account",
		linkAccount: "Link Account",
		addedSuccess: "Account linked successfully.",
		addError: "Failed to add account. Please check the credentials.",
		removeConfirm: "Are you sure you want to remove this linked account?",
		removedSuccess: "Account removed.",
		removeError: "Failed to remove account.",
		switchError: "Failed to switch account. The password might have changed."
	},
	webauthn: {
		title: "Security Key Verification",
		instruction: "Please use your security key to complete login.",
		not_supported: "WebAuthn is not supported in your browser.",
		requesting: "Requesting authentication...",
		waiting_for_key: "Waiting for security key...",
		verifying: "Verifying...",
		success: "Verification successful, redirecting...",
		verify_btn: "Verify Identity",
		verifying_btn: "Verifying...",
		back_to_login: "Back to Login",
		key_name_placeholder: "Device name (e.g. YubiKey)",
		name_key_title: "Name Security Key",
		name_key_label: "Device Name",
		add_key: "Add Security Key",
		trust_linked: "Trust Linked Accounts",
		trust_linked_desc: "If enabled, you can switch to this account from a linked account without providing a 2FA credential again.",
		trust_linked_checkbox: "Allow switching to this account without 2FA",
		confirm_remove: "Are you sure you want to remove this security key?",
		errors: {
			begin_failed: "Failed to initiate authentication.",
			invalid_options: "Invalid authentication options received.",
			verification_failed: "Verification failed. Please try again.",
			register_failed: "There was an error registering your security key. Please try again.",
			remove_failed: "Failed to remove the security key.",
			general: "An error occurred."
		},
		settings: {
			group_desc: "Secure your account with a hardware security key or biometrics.",
			keys_title: "Security Keys",
			noKeys: "No registered keys.",
			added: "Added",
			remove_btn: "Remove"
		}
	},
	print: { loading: "Loading print view..." },
	login: {
		subtitle: "Sign in to your webmail.",
		emailPlaceholder: "Email Address",
		passwordPlaceholder: "Password",
		keepMeSignedIn: "Keep me signed in",
		signIn: "Sign In",
		tooManyAttempts: "Too many login attempts",
		loginFailed: "Login failed. Please check your credentials.",
		networkError: "Network error occurred. Please try again.",
		pleaseWait: "Please wait",
		wait: "Wait",
		signedOut: "You have been signed out.",
		sessionExpired: "Your session has expired. Please sign in again.",
		inactivitySignedOut: "You've been signed out due to inactivity."
	},
	folderList: {
		compose: "Compose",
		inbox: "Inbox",
		drafts: "Drafts",
		sent: "Sent",
		archive: "Archive",
		spam: "Spam",
		junk: "Junk",
		trash: "Trash",
		title: "Folders",
		rename: "Rename",
		delete: "Delete",
		createFolder: "Create Folder",
		renameFolder: "Rename Folder",
		deleteFolder: "Delete Folder",
		deleteFolderConfirm: "Are you sure you want to delete \"{folder}\"? All messages inside will be permanently deleted.",
		expandSidebar: "Expand sidebar",
		collapseSidebar: "Collapse sidebar",
		moveToTrash: "Move to Trash",
		moveToTrashConfirm: "Are you sure you want to move \"{folder}\" to the Trash?",
		createSubfolder: "Create subfolder",
		createSubfolderUnder: "Create Subfolder under \"{folder}\""
	},
	messageList: {
		selectAll: "Select all messages",
		checkNew: "Check for new messages",
		sortDesc: "Sort descending by date",
		sortAsc: "Sort ascending by date",
		filterStarred: "Filter by starred",
		filterUnread: "Filter by unread",
		noMessages: "No messages",
		loading: "Loading...",
		unknownSender: "Unknown Sender",
		unknown: "Unknown",
		noSubject: "(No Subject)",
		hasAttachments: "Has attachments",
		replied: "Replied",
		forwarded: "Forwarded",
		searchResultsFor: "Search results for:",
		clearSearch: "Clear search",
		searchAllMailboxes: "Search All",
		totalMessagesIn: "{count} total messages in {folder}",
		deleteAllNow: "Delete All Now",
		emptyMailboxTitle: "Empty {folder}",
		emptyMailboxConfirm: "Are you sure you want to permanently delete all {count} messages in {folder}? This action cannot be undone.",
		emptyingMailbox: "Emptying mailbox...",
		mailboxEmptied: "Mailbox emptied successfully.",
		emptyMailboxFailed: "Failed to empty mailbox. Make sure it is Trash or Junk."
	},
	composer: {
		attachmentsWait: "Please wait for attachments to finish uploading before sending.",
		sending: "Message is being sent...",
		undo: "Undo",
		sendError: "Failed to send message: {error}"
	},
	messageComposer: {
		fontSize: "Font Size",
		small: "Small",
		normal: "Normal",
		large: "Large",
		huge: "Huge",
		bold: "Bold",
		italic: "Italic",
		underline: "Underline",
		textColor: "Text Color",
		align: "Align",
		left: "Left",
		center: "Center",
		right: "Right",
		numberedList: "Numbered List",
		bulletedList: "Bulleted List",
		indentMore: "Indent More",
		indentLess: "Indent Less",
		moreFormatting: "More Formatting",
		undo: "Undo",
		redo: "Redo",
		quote: "Quote",
		strikethrough: "Strikethrough",
		clearFormatting: "Clear Formatting",
		goToLink: "Go to link:",
		change: "Change",
		remove: "Remove",
		text: "Text",
		link: "Link",
		apply: "Apply",
		writeMessage: "Write your message..."
	},
	floatingComposer: {
		discardDraftTitle: "Discard Draft?",
		discardDraftMessage: "Are you sure you want to discard this draft? This action cannot be undone.",
		discard: "Discard",
		dropFiles: "Drop files here to attach",
		newMessage: "New Message",
		saving: "Saving...",
		autosaved: "Autosaved",
		restore: "Restore",
		minimize: "Minimize",
		expand: "Expand",
		saveAndClose: "Save & close",
		to: "To",
		cc: "Cc",
		bcc: "Bcc",
		subject: "Subject",
		toggleFormatting: "Toggle Formatting Options",
		attachFiles: "Attach Files",
		insertLink: "Insert Link",
		insertEmoji: "Insert Emoji",
		send: "Send",
		linkUrl: "Link URL",
		linkUrlPlaceholder: "https://example.com",
		displayText: "Display Text",
		displayTextPlaceholder: "My Website",
		apply: "Apply",
		uploadFailed: "Failed to upload attachment: {error}",
		unknownError: "Unknown error"
	},
	messageReader: {
		tags: "Tags",
		removeAllTags: "Remove all tags",
		removeTag: "Remove tag",
		selectMessage: "Select a message to read",
		messagesSelected: "messages selected",
		back: "Back",
		reply: "Reply",
		replyAll: "Reply All",
		forward: "Forward",
		to: "To:",
		cc: "Cc:",
		date: "Date:",
		undisclosed: "Undisclosed",
		loadingMessage: "Loading message...",
		remoteContentWarning: "This message contains remote content. For your privacy, it has been blocked.",
		loadRemoteContent: "Load remote content",
		isDraft: "This is a draft message.",
		editDraft: "Edit Draft",
		noRecipients: "(No Recipients)",
		discardDraft: "Discard Draft",
		noReadableText: "This message contains no readable text, only attachments.",
		attachments: "Attachments",
		downloadAllAttachments: "Download all attachments",
		unknownAttachment: "Unknown attachment",
		archive: "Archive",
		reportSpam: "Report Spam",
		notSpam: "Not Spam",
		delete: "Delete",
		deleteConfirmSingle: "Are you sure you want to permanently delete this message? This action cannot be undone.",
		deleteConfirmMultiple: "Are you sure you want to permanently delete these messages? This action cannot be undone.",
		markUnread: "Mark as unread",
		markRead: "Mark as read",
		star: "Star",
		moveTo: "Copy/Move to...",
		print: "Print",
		showPlaintext: "Show plaintext",
		showHtml: "Show HTML",
		downloadMessage: "Download message",
		showOriginal: "Show original",
		verifiedSender: "Verified Sender",
		unverifiedSender: "Unverified Sender",
		clickToExpand: "Click to expand message content"
	},
	originalMessage: {
		title: "Original Message",
		loading: "Loading original message...",
		errorMissingParams: "Missing mailbox or uid parameters",
		errorFailedToFetch: "Failed to fetch original message",
		messageId: "Message ID",
		createdAt: "Created at",
		from: "From",
		to: "To",
		subject: "Subject",
		spf: "SPF",
		dkim: "DKIM",
		dmarc: "DMARC",
		truncatedInfo: "Message is too large to display fully. Showing the first 64KB. Please use \"Download Original\" to view the entire message.",
		downloadOriginal: "Download Original",
		copyClipboard: "Copy to clipboard",
		copiedTruncated: "Copied truncated content to clipboard.",
		copied: "Copied to clipboard.",
		copyFailed: "Failed to copy to clipboard.",
		none: "NONE",
		pass: "PASS",
		fail: "FAIL"
	},
	folderSelector: {
		filter: "Filter folders...",
		noResults: "No matching folders",
		actionMove: "Move to",
		actionCopy: "Copy to"
	},
	attachment: { remove: "Remove" },
	navigation: {
		messages: "Messages",
		contacts: "Contacts",
		calendar: "Calendar"
	},
	userMenu: {
		settings: "Settings",
		signOut: "Sign Out",
		profileOptions: "Profile options"
	},
	pagination: {
		previousPage: "Previous page",
		nextPage: "Next page",
		zeroMessages: "0 messages"
	},
	toast: {
		messagePermanentlyDeleted: "Message permanently deleted",
		draftDiscarded: "Draft discarded",
		folderRenamed: "Folder renamed",
		folderMovedToTrash: "Folder moved to Trash",
		folderPermanentlyDeleted: "Folder permanently deleted",
		undo: "Undo",
		dismiss: "Dismiss",
		messageMovedToArchive: "Message moved to Archive",
		messagesMovedToArchive: "{count} messages moved to Archive",
		messageMovedToSpam: "Message moved to Spam",
		messagesMovedToSpam: "{count} messages moved to Spam",
		messageMovedToInbox: "Message moved to Inbox",
		messagesMovedToInbox: "{count} messages moved to Inbox",
		messageMovedToTrash: "Message moved to Trash",
		messagesMovedToTrash: "{count} messages moved to Trash",
		messageMovedToFolder: "Message moved to {folder}",
		messagesMovedToFolder: "{count} messages moved to {folder}",
		messageCopiedToFolder: "Message copied to {folder}",
		messagesCopiedToFolder: "{count} messages copied to {folder}",
		draftsDiscarded: "{count} drafts discarded",
		messagesPermanentlyDeleted: "{count} messages permanently deleted"
	},
	mailboxPage: {
		mailboxNotFound: "Mailbox not found",
		newMessages: "New Messages",
		newMessagesSingleBody: "You have 1 new message",
		newMessagesMultiBody: "You have {count} new messages",
		newMessagesInInbox: "New messages in Inbox",
		newMessagesAvailable: "New messages available",
		open: "Open",
		refresh: "Refresh",
		permanentlyDelete: "Permanently Delete?",
		deletePermanently: "Delete Permanently",
		undo: "Undo"
	},
	offline: {
		title: "Connection Lost",
		description: "Network connectivity lost",
		tryingAgain: "Trying again in {seconds} seconds..."
	},
	general: {
		error: "Error",
		cancel: "Cancel",
		save: "Save",
		optional: "Optional",
		delete: "Delete"
	}
};
//#endregion
//#region src/utils/logger.ts
var Logger = {
	debug: (...args) => {},
	info: (...args) => {
		console.info("[INFO]", ...args);
	},
	warn: (...args) => {
		console.warn("[WARN]", ...args);
	},
	error: (...args) => {
		console.error("[ERROR]", ...args);
	}
};
//#endregion
//#region \0vite/preload-helper.js
var scriptRel = "modulepreload";
var assetsURL = function(dep) {
	return "/" + dep;
};
var seen = {};
var __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (deps && deps.length > 0) {
		const links = document.getElementsByTagName("link");
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises) {
			return Promise.all(promises.map((p) => Promise.resolve(p).then((value) => ({
				status: "fulfilled",
				value
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		promise = allSettled(deps.map((dep) => {
			dep = assetsURL(dep, importerUrl);
			if (dep in seen) return;
			seen[dep] = true;
			const isCss = dep.endsWith(".css");
			const cssSelector = isCss ? "[rel=\"stylesheet\"]" : "";
			if (!!importerUrl) for (let i = links.length - 1; i >= 0; i--) {
				const link = links[i];
				if (link.href === dep && (!isCss || link.rel === "stylesheet")) return;
			}
			else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
			const link = document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err) {
		const e = new Event("vite:preloadError", { cancelable: true });
		e.payload = err;
		window.dispatchEvent(e);
		if (!e.defaultPrevented) throw err;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};
//#endregion
//#region src/store/i18n-store.ts
function deepMerge(target, source) {
	if (typeof target !== "object" || target === null) return source;
	if (typeof source !== "object" || source === null) return target;
	const output = { ...target };
	Object.keys(source).forEach((key) => {
		if (typeof source[key] === "object" && source[key] !== null && !Array.isArray(source[key])) if (!(key in target)) output[key] = source[key];
		else output[key] = deepMerge(target[key], source[key]);
		else output[key] = source[key];
	});
	return output;
}
var pluginEnLocales = /* @__PURE__ */ Object.assign({
	"../../../plugins/caldav/frontend/i18n/en.ts": en_exports$4,
	"../../../plugins/carddav/frontend/i18n/en.ts": en_exports$3,
	"../../../plugins/gpg/frontend/i18n/en.ts": en_exports$2,
	"../../../plugins/managesieve/frontend/i18n/en.ts": en_exports$1,
	"../../../plugins/password/frontend/i18n/en.ts": en_exports
});
var combinedEn = { ...en$1 };
for (const path in pluginEnLocales) {
	const module = pluginEnLocales[path];
	const pluginDict = module.default || module["en"] || {};
	combinedEn = deepMerge(combinedEn, pluginDict);
}
var en = combinedEn;
var I18nStore = class extends EventTarget {
	constructor() {
		super();
		this.language = "en";
		this.dictionary = en;
	}
	async setLanguage(lang) {
		if (this.language === lang) return;
		this.language = lang;
		try {
			if (lang === "en") this.dictionary = en;
			else {
				let newDict = {};
				const importFn = (/* @__PURE__ */ Object.assign({
					"../i18n/de.ts": () => __vitePreload(() => import("./de-BUF9mdv5.js"), []),
					"../i18n/es.ts": () => __vitePreload(() => import("./es-D48U0pMV.js"), []),
					"../i18n/fr.ts": () => __vitePreload(() => import("./fr-CL54n6ub.js"), []),
					"../i18n/it.ts": () => __vitePreload(() => import("./it-Usw9lnPE.js"), []),
					"../i18n/pt.ts": () => __vitePreload(() => import("./pt-BM4ghne8.js"), []),
					"../i18n/rs.ts": () => __vitePreload(() => import("./rs-_iaDVjFW.js"), []),
					"../i18n/sr.ts": () => __vitePreload(() => import("./sr-ywIzd57n.js"), [])
				}))[`../i18n/${lang}.ts`];
				if (importFn) {
					const module = await importFn();
					newDict = module.default || module[lang];
				} else throw new Error(`Locale file not found for ${lang}`);
				const pluginLocales = /* @__PURE__ */ Object.assign({
					"../../../plugins/caldav/frontend/i18n/de.ts": () => __vitePreload(() => import("./de-tTHufvRa.js"), []),
					"../../../plugins/caldav/frontend/i18n/es.ts": () => __vitePreload(() => import("./es-DAsfltt8.js"), []),
					"../../../plugins/caldav/frontend/i18n/fr.ts": () => __vitePreload(() => import("./fr-cac4kuSl.js"), []),
					"../../../plugins/caldav/frontend/i18n/it.ts": () => __vitePreload(() => import("./it-DxRqWEew.js"), []),
					"../../../plugins/caldav/frontend/i18n/pt.ts": () => __vitePreload(() => import("./pt-ClVGhPeA.js"), []),
					"../../../plugins/caldav/frontend/i18n/rs.ts": () => __vitePreload(() => import("./rs-Dkn5S201.js"), []),
					"../../../plugins/caldav/frontend/i18n/sr.ts": () => __vitePreload(() => import("./sr-D76AEumE.js"), []),
					"../../../plugins/carddav/frontend/i18n/de.ts": () => __vitePreload(() => import("./de-CKJ2KKc3.js"), []),
					"../../../plugins/carddav/frontend/i18n/es.ts": () => __vitePreload(() => import("./es-JJHkkiTI.js"), []),
					"../../../plugins/carddav/frontend/i18n/fr.ts": () => __vitePreload(() => import("./fr-3Stz53qL.js"), []),
					"../../../plugins/carddav/frontend/i18n/it.ts": () => __vitePreload(() => import("./it-PmOPlczB.js"), []),
					"../../../plugins/carddav/frontend/i18n/pt.ts": () => __vitePreload(() => import("./pt-gvHwKOPZ.js"), []),
					"../../../plugins/carddav/frontend/i18n/rs.ts": () => __vitePreload(() => import("./rs-Dn4eD_ZI.js"), []),
					"../../../plugins/carddav/frontend/i18n/sr.ts": () => __vitePreload(() => import("./sr-C4TTpopT.js"), []),
					"../../../plugins/gpg/frontend/i18n/de.ts": () => __vitePreload(() => import("./de-B5XKuoPz.js"), []),
					"../../../plugins/gpg/frontend/i18n/es.ts": () => __vitePreload(() => import("./es-zqnMgCze.js"), []),
					"../../../plugins/gpg/frontend/i18n/fr.ts": () => __vitePreload(() => import("./fr-B0q2X84J.js"), []),
					"../../../plugins/gpg/frontend/i18n/it.ts": () => __vitePreload(() => import("./it-G8tV-Vhs.js"), []),
					"../../../plugins/gpg/frontend/i18n/pt.ts": () => __vitePreload(() => import("./pt-CWfi9ieG.js"), []),
					"../../../plugins/gpg/frontend/i18n/rs.ts": () => __vitePreload(() => import("./rs-BlNBbb-m.js"), []),
					"../../../plugins/gpg/frontend/i18n/sr.ts": () => __vitePreload(() => import("./sr-CX8mY4Fo.js"), []),
					"../../../plugins/managesieve/frontend/i18n/de.ts": () => __vitePreload(() => import("./de-Cfyv-P31.js"), []),
					"../../../plugins/managesieve/frontend/i18n/es.ts": () => __vitePreload(() => import("./es-2vkfjcMt.js"), []),
					"../../../plugins/managesieve/frontend/i18n/fr.ts": () => __vitePreload(() => import("./fr-B9A6ofmK.js"), []),
					"../../../plugins/managesieve/frontend/i18n/it.ts": () => __vitePreload(() => import("./it-Dwtj2qHP.js"), []),
					"../../../plugins/managesieve/frontend/i18n/pt.ts": () => __vitePreload(() => import("./pt-hEmOp5Gm.js"), []),
					"../../../plugins/managesieve/frontend/i18n/rs.ts": () => __vitePreload(() => import("./rs-DzT4e6Ni.js"), []),
					"../../../plugins/managesieve/frontend/i18n/sr.ts": () => __vitePreload(() => import("./sr-2Ug_pIHW.js"), []),
					"../../../plugins/password/frontend/i18n/de.ts": () => __vitePreload(() => import("./de-Dc0MrI7J.js"), []),
					"../../../plugins/password/frontend/i18n/es.ts": () => __vitePreload(() => import("./es-BuPWljvH.js"), []),
					"../../../plugins/password/frontend/i18n/fr.ts": () => __vitePreload(() => import("./fr-CoaGybsu.js"), []),
					"../../../plugins/password/frontend/i18n/it.ts": () => __vitePreload(() => import("./it-RTh9EUkP.js"), []),
					"../../../plugins/password/frontend/i18n/pt.ts": () => __vitePreload(() => import("./pt-VQQNfTi_.js"), []),
					"../../../plugins/password/frontend/i18n/rs.ts": () => __vitePreload(() => import("./rs-Dyw0Xfwv.js"), []),
					"../../../plugins/password/frontend/i18n/sr.ts": () => __vitePreload(() => import("./sr-Chm22Wwi.js"), [])
				});
				const pluginPromises = [];
				for (const path in pluginLocales) if (path.endsWith(`/${lang}.ts`)) pluginPromises.push(pluginLocales[path]());
				const pluginModules = await Promise.all(pluginPromises);
				for (const module of pluginModules) {
					const pluginDict = module.default || module[lang] || {};
					newDict = deepMerge(newDict, pluginDict);
				}
				this.dictionary = newDict;
			}
		} catch (e) {
			Logger.error(`Failed to load language module for ${lang}`, e);
			this.dictionary = en;
		}
		this.dispatchEvent(new CustomEvent("change"));
	}
	getLanguage() {
		return this.language;
	}
	getIntlLanguage() {
		if (this.language === "rs") return "sr-Latn";
		if (this.language === "sr") return "sr-Cyrl";
		return this.language;
	}
	t(key, params) {
		const keys = key.split(".");
		let result = this.dictionary;
		for (const k of keys) {
			if (result === void 0 || result === null) break;
			result = result[k];
		}
		if (typeof result !== "string") {
			let enResult = en;
			for (const k of keys) {
				if (enResult === void 0 || enResult === null) break;
				enResult = enResult[k];
			}
			result = typeof enResult === "string" ? enResult : key;
		}
		if (typeof result === "string" && params) return result.replace(/\{(\w+)\}/g, (match, paramKey) => {
			return params[paramKey] !== void 0 ? String(params[paramKey]) : match;
		});
		return result;
	}
};
var i18nContext = n("i18n-store");
//#endregion
//#region src/store/themes.ts
var THEME_BUNDLES = {
	"default-light": {
		id: "default-light",
		name: "Default Light",
		isDark: false,
		colors: {
			"bg-primary": "#ffffff",
			"bg-secondary": "#f9fafb",
			"bg-tertiary": "#f3f4f6",
			"bg-selected": "#eff6ff",
			"bg-starred": "#2563eb0f",
			"text-primary": "#111827",
			"text-sender-read": "#202020",
			"text-secondary": "#4b5563",
			"text-muted": "#9ca3af",
			"border-color": "#e5e7eb",
			"accent-color": "#2563eb",
			"accent-hover": "#1d4ed8",
			"accent-light": "#dbeafe",
			"success": "#10b981",
			"warning": "#f59e0b",
			"error": "#ef4444",
			"hover-color": "#f3f4f6"
		}
	},
	"default-dark": {
		id: "default-dark",
		name: "Default Dark",
		isDark: true,
		colors: {
			"bg-primary": "#1f2937",
			"bg-secondary": "#111827",
			"bg-tertiary": "#374151",
			"bg-selected": "#1e3a8a",
			"bg-starred": "#3b82f615",
			"text-primary": "#f9fafb",
			"text-sender-read": "#e5e7eb",
			"text-secondary": "#d1d5db",
			"text-muted": "#9ca3af",
			"border-color": "#374151",
			"accent-color": "#3b82f6",
			"accent-hover": "#60a5fa",
			"accent-light": "#1e3a8a",
			"success": "#10b981",
			"warning": "#f59e0b",
			"error": "#ef4444",
			"hover-color": "rgba(255, 255, 255, 0.1)"
		}
	},
	"nord-light": {
		id: "nord-light",
		name: "Nord Light",
		isDark: false,
		colors: {
			"bg-primary": "#eceff4",
			"bg-secondary": "#e5e9f0",
			"bg-tertiary": "#d8dee9",
			"bg-selected": "#81a1c133",
			"bg-starred": "#5e81ac15",
			"text-primary": "#2e3440",
			"text-sender-read": "#3b4252",
			"text-secondary": "#3b4252",
			"text-muted": "#4c566a",
			"border-color": "#d8dee9",
			"accent-color": "#5e81ac",
			"accent-hover": "#81a1c1",
			"accent-light": "#81a1c133",
			"success": "#a3be8c",
			"warning": "#ebcb8b",
			"error": "#bf616a",
			"hover-color": "rgba(0, 0, 0, 0.05)"
		}
	},
	"nord-dark": {
		id: "nord-dark",
		name: "Nord Dark",
		isDark: true,
		colors: {
			"bg-primary": "#2e3440",
			"bg-secondary": "#3b4252",
			"bg-tertiary": "#434c5e",
			"bg-selected": "#81a1c133",
			"bg-starred": "#88c0d015",
			"text-primary": "#eceff4",
			"text-sender-read": "#e5e9f0",
			"text-secondary": "#e5e9f0",
			"text-muted": "#d8dee9",
			"border-color": "#434c5e",
			"accent-color": "#88c0d0",
			"accent-hover": "#81a1c1",
			"accent-light": "#81a1c133",
			"success": "#a3be8c",
			"warning": "#ebcb8b",
			"error": "#bf616a",
			"hover-color": "rgba(255, 255, 255, 0.1)"
		}
	},
	"ocean-light": {
		id: "ocean-light",
		name: "Ocean Light",
		isDark: false,
		colors: {
			"bg-primary": "#f8fafc",
			"bg-secondary": "#f1f5f9",
			"bg-tertiary": "#e2e8f0",
			"bg-selected": "#e0f2fe",
			"bg-starred": "#0ea5e915",
			"text-primary": "#0f172a",
			"text-sender-read": "#1e293b",
			"text-secondary": "#334155",
			"text-muted": "#64748b",
			"border-color": "#cbd5e1",
			"accent-color": "#0ea5e9",
			"accent-hover": "#0284c7",
			"accent-light": "#e0f2fe",
			"success": "#10b981",
			"warning": "#f59e0b",
			"error": "#ef4444",
			"hover-color": "rgba(0, 0, 0, 0.05)"
		}
	},
	"ocean-dark": {
		id: "ocean-dark",
		name: "Ocean Dark",
		isDark: true,
		colors: {
			"bg-primary": "#0f172a",
			"bg-secondary": "#1e293b",
			"bg-tertiary": "#334155",
			"bg-selected": "#0c4a6e",
			"bg-starred": "#38bdf815",
			"text-primary": "#f8fafc",
			"text-sender-read": "#e2e8f0",
			"text-secondary": "#cbd5e1",
			"text-muted": "#94a3b8",
			"border-color": "#334155",
			"accent-color": "#38bdf8",
			"accent-hover": "#0ea5e9",
			"accent-light": "#0c4a6e",
			"success": "#10b981",
			"warning": "#f59e0b",
			"error": "#ef4444",
			"hover-color": "rgba(255, 255, 255, 0.1)"
		}
	}
};
//#endregion
//#region src/store/settings-store.ts
var DEFAULT_SETTINGS = {
	themeMode: "auto",
	colorFamily: "default",
	layoutMode: "vertical",
	densityMode: "compact",
	sidebarCollapsed: false,
	enableThreading: true,
	themeIframeContent: false,
	checkMailInterval: 5,
	autoLogout: 30,
	desktopNotifications: false,
	soundNotifications: true,
	name: "",
	signature: "",
	replyTo: "",
	bccMyself: false,
	messagesPerPage: 50,
	preferredView: "html",
	markReadTimeout: 0,
	showRemoteContent: "ask",
	composeFormat: "html",
	undoTimeout: 0,
	language: "en",
	hourFormat: "24",
	dateFormat: "YYYY-MM-DD",
	sortOrder: "desc",
	messageSortCriteria: "date",
	maxAttachmentMiB: 32,
	customMailboxOrder: []
};
var SettingsStore = class extends EventTarget {
	constructor() {
		super();
		this.initialFetchCompleted = false;
		this.state = this.loadSettings();
		this.applyTheme();
		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
			if (this.state.themeMode === "auto") this.applyTheme();
		});
		window.addEventListener("session-cleared", () => {
			this.initialFetchCompleted = false;
			this.state = this.loadSettings();
			this.applyTheme();
			this.notify();
		});
		window.addEventListener("user-logged-in", () => {
			this.initializeSession();
		});
		this.initializeSession();
	}
	async initializeSession() {
		this.initialFetchCompleted = false;
		const isLoggedIn = document.cookie.split(";").some((c) => c.trim().startsWith("alps_logged_in=1"));
		const hasLoginToken = document.cookie.split(";").some((c) => c.trim().startsWith("alps_has_login_token=1"));
		if (!isLoggedIn && !hasLoginToken) {
			await this._fetchBackendSettings();
			return;
		}
		try {
			const response = await fetch("/session");
			if (response.ok) {
				const data = await response.json();
				const username = data.Username || data.username;
				if (username) {
					this.state = this.loadSettings(username);
					this.applyTheme();
					this.notify();
				}
			}
		} catch (e) {
			Logger.error("Failed to fetch session username during initialization", e);
		}
		await this._fetchBackendSettings();
	}
	loadSettings(username) {
		const userKey = username ? `alps_settings_${username}` : null;
		const storedUser = userKey ? localStorage.getItem(userKey) : null;
		let userSettings = {};
		if (storedUser) try {
			userSettings = JSON.parse(storedUser);
		} catch (e) {
			Logger.error("Failed to parse user settings", e);
		}
		const storedGlobal = localStorage.getItem("alps_settings");
		let globalSettings = {};
		if (storedGlobal) try {
			globalSettings = JSON.parse(storedGlobal);
		} catch (e) {
			Logger.error("Failed to parse global settings", e);
		}
		const mergedState = {
			...DEFAULT_SETTINGS,
			themeMode: userSettings.themeMode ?? globalSettings.themeMode ?? DEFAULT_SETTINGS.themeMode,
			colorFamily: userSettings.colorFamily ?? globalSettings.colorFamily ?? DEFAULT_SETTINGS.colorFamily,
			layoutMode: userSettings.layoutMode ?? globalSettings.layoutMode ?? DEFAULT_SETTINGS.layoutMode,
			densityMode: userSettings.densityMode ?? globalSettings.densityMode ?? DEFAULT_SETTINGS.densityMode,
			enableThreading: userSettings.enableThreading ?? globalSettings.enableThreading ?? DEFAULT_SETTINGS.enableThreading,
			themeIframeContent: userSettings.themeIframeContent ?? globalSettings.themeIframeContent ?? DEFAULT_SETTINGS.themeIframeContent,
			customMailboxOrder: userSettings.customMailboxOrder ?? globalSettings.customMailboxOrder ?? DEFAULT_SETTINGS.customMailboxOrder,
			language: userSettings.language ?? globalSettings.language ?? DEFAULT_SETTINGS.language,
			loginUsername: username
		};
		if (storedUser) Object.assign(mergedState, userSettings);
		return mergedState;
	}
	saveSettings() {
		const username = this.state.loginUsername;
		if (username) localStorage.setItem(`alps_settings_${username}`, JSON.stringify(this.state));
		const globalSettings = {
			themeMode: this.state.themeMode,
			colorFamily: this.state.colorFamily,
			language: this.state.language,
			layoutMode: this.state.layoutMode,
			densityMode: this.state.densityMode,
			enableThreading: this.state.enableThreading,
			themeIframeContent: this.state.themeIframeContent
		};
		localStorage.setItem("alps_settings", JSON.stringify(globalSettings));
	}
	notify() {
		this.dispatchEvent(new CustomEvent("change"));
	}
	getState() {
		return this.state;
	}
	async updateSettings(updates) {
		const oldUsername = this.state.loginUsername;
		const newUsername = updates.loginUsername;
		if (newUsername !== void 0 && newUsername !== oldUsername) this.state = {
			...this.loadSettings(newUsername),
			...updates
		};
		else this.state = {
			...this.state,
			...updates
		};
		this.saveSettings();
		if (updates.themeMode !== void 0 || updates.colorFamily !== void 0) this.applyTheme();
		this.notify();
		const backendUpdates = { ...updates };
		delete backendUpdates.loginUsername;
		if (Object.keys(backendUpdates).length > 0) return this._saveBackendSettings(this.state);
	}
	async _fetchBackendSettings() {
		const isLoggedIn = document.cookie.split(";").some((c) => c.trim().startsWith("alps_logged_in=1"));
		const hasLoginToken = document.cookie.split(";").some((c) => c.trim().startsWith("alps_has_login_token=1"));
		if (!isLoggedIn && !hasLoginToken) {
			if (!window.location.hash.startsWith("#/login")) window.dispatchEvent(new CustomEvent("auth-error"));
			this.initialFetchCompleted = true;
			return;
		}
		let needBackendSave = false;
		try {
			const response = await fetch("/settings");
			if (response.status === 401) {
				window.dispatchEvent(new CustomEvent("auth-error"));
				return;
			}
			if (response.ok) {
				const data = await response.json();
				const updates = {};
				if (data.MaxAttachmentMiB !== void 0) updates.maxAttachmentMiB = data.MaxAttachmentMiB;
				if (data.HasThreadCapability !== void 0) {
					updates.hasThreadCapability = data.HasThreadCapability;
					if (data.HasThreadCapability === false) updates.enableThreading = false;
				}
				if (data.HasESearchCapability !== void 0) updates.hasESearchCapability = data.HasESearchCapability;
				if (data && data.Settings) {
					const s = data.Settings;
					if (s.ui) {
						const ui = s.ui;
						if (ui.themeMode && (ui.themeMode !== "auto" || !this.state.themeMode || this.state.themeMode === "auto")) updates.themeMode = ui.themeMode;
						if (ui.colorFamily && (ui.colorFamily !== "default" || !this.state.colorFamily || this.state.colorFamily === "default")) updates.colorFamily = ui.colorFamily;
						if (ui.layoutMode) updates.layoutMode = ui.layoutMode;
						if (ui.densityMode) updates.densityMode = ui.densityMode;
						if (ui.sidebarCollapsed !== void 0) updates.sidebarCollapsed = ui.sidebarCollapsed;
						if (ui.enableThreading !== void 0) updates.enableThreading = ui.enableThreading;
						if (ui.themeIframeContent !== void 0) updates.themeIframeContent = ui.themeIframeContent;
						if (ui.customMailboxOrder !== void 0) updates.customMailboxOrder = ui.customMailboxOrder;
					}
					if (s.check_mail_interval !== void 0 && s.check_mail_interval !== 0) updates.checkMailInterval = s.check_mail_interval;
					if (s.auto_logout !== void 0) updates.autoLogout = s.auto_logout;
					if (s.desktop_notifications !== void 0) updates.desktopNotifications = s.desktop_notifications;
					if (s.sound_notifications !== void 0) updates.soundNotifications = s.sound_notifications;
					if (s.from !== void 0) updates.name = s.from;
					if (s.signature !== void 0) updates.signature = s.signature;
					if (s.reply_to !== void 0) updates.replyTo = s.reply_to;
					if (s.bcc_myself !== void 0) updates.bccMyself = s.bcc_myself;
					if (s.messages_per_page !== void 0 && s.messages_per_page !== 0) updates.messagesPerPage = s.messages_per_page;
					if (s.preferred_view !== void 0 && s.preferred_view !== "") updates.preferredView = s.preferred_view;
					if (s.mark_read_timeout !== void 0) updates.markReadTimeout = s.mark_read_timeout;
					if (s.show_remote_content !== void 0 && s.show_remote_content !== "") updates.showRemoteContent = s.show_remote_content;
					if (s.compose_format !== void 0 && s.compose_format !== "") updates.composeFormat = s.compose_format;
					if (s.undo_timeout !== void 0) updates.undoTimeout = s.undo_timeout;
					if (s.language !== void 0 && s.language !== "") updates.language = s.language;
					if (s.hour_format !== void 0 && s.hour_format !== "") updates.hourFormat = s.hour_format;
					if (s.date_format !== void 0 && s.date_format !== "") updates.dateFormat = s.date_format;
					if (s.sort_order !== void 0 && s.sort_order !== "") updates.sortOrder = s.sort_order;
					if (s.message_sort_criteria !== void 0 && s.message_sort_criteria !== "") updates.messageSortCriteria = s.message_sort_criteria;
					if (!s.language) needBackendSave = true;
					if (Object.keys(updates).length > 0) {
						this.state = {
							...this.state,
							...updates
						};
						this.saveSettings();
						this.applyTheme();
						this.notify();
					}
				}
			}
		} catch (e) {
			Logger.error("Failed to fetch backend settings", e);
		} finally {
			this.initialFetchCompleted = true;
		}
		if (needBackendSave) await this._saveBackendSettings(this.state);
	}
	async _saveBackendSettings(state) {
		if (!this.initialFetchCompleted) return;
		try {
			if ((await fetch("/settings", {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					ui: {
						themeMode: state.themeMode,
						colorFamily: state.colorFamily,
						layoutMode: state.layoutMode,
						sidebarCollapsed: state.sidebarCollapsed,
						enableThreading: state.enableThreading,
						themeIframeContent: state.themeIframeContent,
						customMailboxOrder: state.customMailboxOrder
					},
					check_mail_interval: Number(state.checkMailInterval) || 0,
					auto_logout: Number(state.autoLogout) || 0,
					desktop_notifications: Boolean(state.desktopNotifications),
					sound_notifications: Boolean(state.soundNotifications),
					from: state.name,
					signature: state.signature,
					reply_to: state.replyTo,
					bcc_myself: Boolean(state.bccMyself),
					messages_per_page: Number(state.messagesPerPage) || 50,
					preferred_view: state.preferredView,
					mark_read_timeout: Number(state.markReadTimeout) || 0,
					show_remote_content: state.showRemoteContent,
					compose_format: state.composeFormat,
					undo_timeout: Number(state.undoTimeout) || 0,
					language: state.language,
					hour_format: state.hourFormat,
					date_format: state.dateFormat,
					sort_order: state.sortOrder,
					message_sort_criteria: state.messageSortCriteria
				})
			})).status === 401) window.dispatchEvent(new CustomEvent("auth-error"));
		} catch (e) {
			Logger.error("Failed to save backend settings", e);
		}
	}
	applyTheme() {
		let isDark = false;
		if (this.state.themeMode === "dark") isDark = true;
		else if (this.state.themeMode === "auto") isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (isDark) document.body.classList.add("theme-dark");
		else document.body.classList.remove("theme-dark");
		const theme = THEME_BUNDLES[`${this.state.colorFamily}-${isDark ? "dark" : "light"}`] || THEME_BUNDLES[`default-${isDark ? "dark" : "light"}`];
		if (theme) for (const [key, value] of Object.entries(theme.colors)) document.documentElement.style.setProperty(`--${key}`, value);
	}
};
var settingsContext = n("settings-store");
function clearSessionSettings(clearAuthCookies = true) {
	const stored = localStorage.getItem("alps_settings");
	if (stored) try {
		const parsed = JSON.parse(stored);
		const preserved = {};
		if (parsed.themeMode) preserved.themeMode = parsed.themeMode;
		if (parsed.colorFamily) preserved.colorFamily = parsed.colorFamily;
		if (parsed.language) preserved.language = parsed.language;
		if (parsed.layoutMode) preserved.layoutMode = parsed.layoutMode;
		if (parsed.densityMode) preserved.densityMode = parsed.densityMode;
		if (parsed.enableThreading !== void 0) preserved.enableThreading = parsed.enableThreading;
		if (parsed.themeIframeContent !== void 0) preserved.themeIframeContent = parsed.themeIframeContent;
		localStorage.setItem("alps_settings", JSON.stringify(preserved));
	} catch (e) {
		Logger.error("Failed to clear and preserve global settings", e);
		localStorage.removeItem("alps_settings");
	}
	if (!clearAuthCookies) return;
	const cookieSuffix = "; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict" + (window.location.protocol === "https:" ? "; Secure" : "");
	document.cookie = "alps_logged_in=" + cookieSuffix;
	document.cookie = "alps_has_login_token=" + cookieSuffix;
}
//#endregion
//#region src/utils/fetch-utils.ts
/**
* Encodes a value for use as a single path segment in a backend URL when the
* value may itself contain the `/` character — e.g. an IMAP mailbox name like
* Gmail's `[Gmail]/All Mail`, or a CardDAV/CalDAV object path (`.../uid.vcf`).
*
* Go's net/http.ServeMux decodes `%2F` back to `/` before routing, which would
* split a single-segment `{param}` wildcard and make the request 404. We
* therefore double-encode: the extra layer survives ServeMux's one decode as a
* literal `%2F` (so the segment is not split), and the backend handler undoes it
* with a single `url.PathUnescape`. This is a no-op for values without special
* characters. See GitHub issue #4.
*
* Only use this for a URL *path segment*; values sent in a request body or query
* string must be sent verbatim, not double-encoded.
*/
function encodePathParam(value) {
	return encodeURIComponent(encodeURIComponent(value));
}
async function fetchWithTimeout(url, options = {}, timeoutMs = 25e3) {
	const controller = new AbortController();
	const id = setTimeout(() => controller.abort(), timeoutMs);
	try {
		const response = await fetch(url, {
			...options,
			signal: controller.signal
		});
		if (response.status === 502 || response.status === 503 || response.status === 504) window.dispatchEvent(new CustomEvent("network-error"));
		return response;
	} catch (error) {
		if (error instanceof TypeError || error.name === "AbortError") window.dispatchEvent(new CustomEvent("network-error"));
		throw error;
	} finally {
		clearTimeout(id);
	}
}
//#endregion
//#region ../plugins/caldav/frontend/calendar-service.ts
var CALENDAR_COLORS = [
	"#2563eb",
	"#16a34a",
	"#d97706",
	"#dc2626",
	"#9333ea",
	"#0891b2",
	"#db2777",
	"#ea580c"
];
function getCalendarColor(identifier) {
	let hash = 0;
	for (let i = 0; i < identifier.length; i++) hash = identifier.charCodeAt(i) + ((hash << 5) - hash);
	return CALENDAR_COLORS[Math.abs(hash) % CALENDAR_COLORS.length];
}
function isAllDayEvent(startStr, endStr) {
	const isStartAllDay = startStr.endsWith("T00:00:00Z") || startStr.endsWith("T00:00:00.000Z") || startStr.length === 10;
	const isEndAllDay = endStr.endsWith("T00:00:00Z") || endStr.endsWith("T00:00:00.000Z") || endStr.length === 10;
	return isStartAllDay && isEndAllDay;
}
var CalendarService = class {
	async fetchCalendars() {
		const response = await fetch("/calendar/calendars");
		if (!response.ok) throw new Error("Failed to fetch calendars");
		return response.json();
	}
	async fetchEvents(start, end, query) {
		const params = new URLSearchParams();
		params.append("start", start.toISOString());
		params.append("end", end.toISOString());
		if (query) params.append("query", query);
		const response = await fetch(`/calendar/events?${params.toString()}`);
		if (!response.ok) throw new Error("Failed to fetch events");
		return response.json();
	}
	async createCalendar(name) {
		const response = await fetch("/calendar/calendars", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name })
		});
		if (!response.ok) throw new Error("Failed to create calendar");
		return response.json();
	}
	async renameCalendar(path, name) {
		const encodedPath = encodePathParam(path);
		const response = await fetch(`/calendar/calendars/${encodedPath}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name })
		});
		if (!response.ok) throw new Error("Failed to rename calendar");
		return response.json();
	}
	async deleteCalendar(path) {
		const encodedPath = encodePathParam(path);
		const response = await fetch(`/calendar/calendars/${encodedPath}`, { method: "DELETE" });
		if (!response.ok) throw new Error("Failed to delete calendar");
		return response.json();
	}
	async createEvent(event) {
		const response = await fetch("/calendar/events", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(event)
		});
		if (!response.ok) throw new Error("Failed to create event");
		return response.json();
	}
	async updateEvent(path, event) {
		const encodedPath = encodePathParam(path);
		const response = await fetch(`/calendar/events/${encodedPath}/edit`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(event)
		});
		if (!response.ok) throw new Error("Failed to update event");
		return response.json();
	}
	async deleteEvent(path) {
		const encodedPath = encodePathParam(path);
		const response = await fetch(`/calendar/events/${encodedPath}`, { method: "DELETE" });
		if (!response.ok) throw new Error("Failed to delete event");
		return response.json();
	}
};
var calendarService = new CalendarService();
//#endregion
//#region src/utils/folders.ts
var FOLDER_INBOX = "INBOX";
var FOLDER_DRAFTS = "Drafts";
var FOLDER_SENT = "Sent";
var FOLDER_ARCHIVE = "Archive";
var FOLDER_ARCHIVES = "Archives";
var FOLDER_SPAM = "Spam";
var FOLDER_JUNK = "Junk";
var FOLDER_TRASH = "Trash";
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
function encodeMailboxPath(name) {
	return encodeURIComponent(encodeURIComponent(name));
}
var ATTR_TO_ROLE = {
	"\\inbox": "inbox",
	"\\drafts": "drafts",
	"\\sent": "sent",
	"\\archive": "archive",
	"\\junk": "junk",
	"\\trash": "trash",
	"\\all": "all"
};
var NAME_TO_ROLE = {
	[FOLDER_INBOX.toLowerCase()]: "inbox",
	[FOLDER_DRAFTS.toLowerCase()]: "drafts",
	[FOLDER_SENT.toLowerCase()]: "sent",
	[FOLDER_ARCHIVE.toLowerCase()]: "archive",
	[FOLDER_ARCHIVES.toLowerCase()]: "archive",
	[FOLDER_SPAM.toLowerCase()]: "junk",
	[FOLDER_JUNK.toLowerCase()]: "junk",
	[FOLDER_TRASH.toLowerCase()]: "trash"
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
function mailboxRole(mb) {
	if (!mb) return null;
	const lowerAttrs = (Array.isArray(mb.Attrs) ? mb.Attrs : []).map((a) => typeof a === "string" ? a.toLowerCase() : "");
	for (const a of lowerAttrs) {
		const role = ATTR_TO_ROLE[a];
		if (role) return role;
	}
	if (lowerAttrs.includes("\\noselect") || lowerAttrs.includes("\\nonexistent")) return null;
	return NAME_TO_ROLE[(mb.Name || mb.Mailbox || "").toLowerCase()] ?? null;
}
/**
* Resolves the role of a mailbox identified by name, preferring the special-use
* attributes of the matching entry in `mailboxes` (when available) and falling
* back to the well-known English name otherwise.
*/
function mailboxRoleByName(name, mailboxes = []) {
	if (!name) return null;
	const mb = (mailboxes || []).find((m) => (m?.Name || m?.Mailbox) === name);
	if (mb) return mailboxRole(mb);
	return NAME_TO_ROLE[name.toLowerCase()] ?? null;
}
function mailboxAccountFromName(name) {
	if (name === "INBOX") return null;
	const parts = name.split("#");
	if (parts.length == 1) return null;
	if (parts[0] == "INBOX") return parts[1];
	else return parts[0];
}
function findMailboxNameByRole(role, name, mailboxes, fallback) {
	console.log("findMailboxNameByRole", role, name, mailboxes, fallback);
	if (!name) {
		console.log("findMailboxNameByRole: no name");
		return fallback;
	}
	const account = mailboxAccountFromName(name);
	if (account === null) {
		console.log("findMailboxNameByRole: no account");
		const mb = (mailboxes || []).filter((m) => mailboxAccountFromName(m.Name || m.Mailbox || "") === null).find((m) => mailboxRole(m) === role);
		return mb ? mb.Name || mb.Mailbox || fallback : fallback;
	} else {
		console.log("findMailboxNameByRole: found account", account);
		const mb = (mailboxes || []).filter((m) => mailboxAccountFromName(m.Name || m.Mailbox || "") === account).find((m) => mailboxRole(m) === role);
		fallback = account + "#" + fallback;
		return mb ? mb.Name || mb.Mailbox || fallback : fallback;
	}
}
function folderCanBeDeleted(name) {
	if (/^(trash|junk|spam|deleted items)$/i.test(name)) {
		console.log("Trash test", name, "TRUE 1", "simple name matches trash names");
		return true;
	}
	let parts = name.split("#");
	if (parts.length == 1) {
		console.log("Trash test", name, "FALSE 1", parts);
		return false;
	}
	if (!parts[0].startsWith("@")) {
		console.log("Trash test", name, "FALSE 2", parts[0]);
		return false;
	}
	if (/^(trash|junk|spam|deleted items)$/i.test(parts[1])) {
		console.log("Trash test", name, "TRUE 2", "base name matches trash names");
		return true;
	}
	console.log("Trash test", name, "FALSE 3", parts);
	return false;
}
//#endregion
//#region src/utils/ui.ts
function renderIcon(name) {
	return b`
    <svg class="icon">
      <use href="/assets/icons/sprite.svg?v=11#${name}"></use>
    </svg>
  `;
}
function getAvatarColor(identifier) {
	if (!identifier) return "#78909c";
	const colors = [
		"#ef5350",
		"#ec407a",
		"#ab47bc",
		"#7e57c2",
		"#5c6bc0",
		"#42a5f5",
		"#29b6f6",
		"#26c6da",
		"#26a69a",
		"#66bb6a",
		"#9ccc65",
		"#d4e157",
		"#ffca28",
		"#ffa726",
		"#ff7043",
		"#8d6e63",
		"#78909c"
	];
	let hash = 0;
	for (let i = 0; i < identifier.length; i++) hash = identifier.charCodeAt(i) + ((hash << 5) - hash);
	return colors[Math.abs(hash) % colors.length];
}
function formatDateList(dateInput, dateFormatStr = "YYYY-MM-DD", hourFormatStr = "12") {
	if (!dateInput) return "";
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
	const now = /* @__PURE__ */ new Date();
	if (date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear()) return date.toLocaleTimeString(void 0, {
		hour: "2-digit",
		minute: "2-digit",
		hour12: hourFormatStr === "12"
	});
	if (date.getFullYear() !== now.getFullYear()) {
		const y = date.getFullYear();
		const m = String(date.getMonth() + 1).padStart(2, "0");
		const d = String(date.getDate()).padStart(2, "0");
		if (dateFormatStr === "YYYY-MM-DD") return `${y}-${m}-${d}`;
		if (dateFormatStr === "MM/DD/YYYY") return `${m}/${d}/${y}`;
		if (dateFormatStr === "DD.MM.YYYY") return `${d}.${m}.${y}`;
		return date.toLocaleDateString(void 0, {
			year: "numeric",
			month: "short",
			day: "numeric"
		});
	}
	return date.toLocaleDateString(void 0, {
		month: "short",
		day: "numeric"
	});
}
function formatFullDate(dateInput, dateFormatStr = "YYYY-MM-DD", hourFormatStr = "12") {
	if (!dateInput) return "";
	const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
	const y = date.getFullYear();
	const m = String(date.getMonth() + 1).padStart(2, "0");
	const d = String(date.getDate()).padStart(2, "0");
	let datePart = `${y}-${m}-${d}`;
	if (dateFormatStr === "MM/DD/YYYY") datePart = `${m}/${d}/${y}`;
	else if (dateFormatStr === "DD.MM.YYYY") datePart = `${d}.${m}.${y}`;
	const timePart = date.toLocaleTimeString(void 0, {
		hour: "2-digit",
		minute: "2-digit",
		hour12: hourFormatStr === "12"
	});
	return `${datePart} ${timePart}`;
}
function getMailboxLabel(name, i18nStore) {
	if (!name) return "";
	const stdMap = {
		[FOLDER_INBOX]: i18nStore?.t("folderList.inbox"),
		[FOLDER_DRAFTS]: i18nStore?.t("folderList.drafts"),
		[FOLDER_SENT]: i18nStore?.t("folderList.sent"),
		[FOLDER_ARCHIVE]: i18nStore?.t("folderList.archive"),
		[FOLDER_ARCHIVES]: i18nStore?.t("folderList.archive"),
		[FOLDER_SPAM]: i18nStore?.t("folderList.spam"),
		[FOLDER_JUNK]: i18nStore?.t("folderList.junk"),
		[FOLDER_TRASH]: i18nStore?.t("folderList.trash")
	};
	if (stdMap[name]) return stdMap[name];
	const parts = name.split(/[.\/]/);
	return parts[parts.length - 1] || name;
}
function formatSize(bytes) {
	if (!bytes || bytes === 0) return "0 B";
	const k = 1024;
	const sizes = [
		"B",
		"KB",
		"MB",
		"GB"
	];
	const i = Math.floor(Math.log(bytes) / Math.log(k));
	return Math.round(bytes / Math.pow(k, i)) + " " + sizes[i];
}
var freemailDomains = new Set([
	"gmail.com",
	"yahoo.com",
	"hotmail.com",
	"outlook.com",
	"icloud.com",
	"me.com",
	"mac.com",
	"aol.com",
	"proton.me",
	"protonmail.com",
	"live.com",
	"msn.com",
	"pm.me",
	"yandex.ru",
	"mail.ru",
	"gmx.de",
	"web.de",
	"t-online.de",
	"orange.fr",
	"free.fr"
]);
function getBimiAvatarUrl(domain) {
	if (!domain) return "";
	const d = domain.toLowerCase();
	return !freemailDomains.has(d) ? `/bimi/avatar?domain=${encodeURIComponent(d)}` : "";
}
/**
* Calculates the absolute minimum width a flex container needs to display its inflexible contents.
* It forces the container to 0 width, letting flex layout compress flexible items, 
* and reads the scrollWidth of the remaining unshrinkable items.
*/
function getFlexContainerMinWidth(container) {
	if (!container) return 0;
	const origWidth = container.style.width;
	container.style.width = "0px";
	const scrollW = container.scrollWidth;
	container.style.width = origWidth;
	return scrollW;
}
//#endregion
//#region \0@oxc-project+runtime@0.127.0/helpers/decorate.js
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}
//#endregion
//#region src/components/alps-icon-btn.ts
var AlpsIconBtn = class AlpsIconBtn extends i {
	constructor(..._args) {
		super(..._args);
		this.icon = "";
		this.title = "";
		this.disabled = false;
		this.active = false;
		this.spinning = false;
	}
	static {
		this.styles = i$1`
    :host {
      display: inline-flex;
      line-height: 0;
    }

    button {
      background: transparent;
      border: none;
      color: inherit;
      cursor: pointer;
      padding: var(--btn-icon-padding, 6px);
      border-radius: var(--btn-radius, 4px);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      margin: 0;
      line-height: 0;
      aspect-ratio: 1 / 1;
      box-sizing: border-box;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    @media (hover: hover) {
      button:hover:not(:disabled) {
        background: var(--btn-hover-bg, var(--hover-color, rgba(0, 0, 0, 0.05)));
      }
      button:hover:not(:disabled) .icon {
        color: var(--text-primary);
      }
    }

    :host([active]) button {
      background: var(--btn-hover-bg, var(--hover-color, rgba(0, 0, 0, 0.05)));
    }
    :host([active]) .icon {
      color: var(--text-primary);
    }

    .icon {
      width: var(--btn-icon-size, 18px);
      height: var(--btn-icon-size, 18px);
      fill: currentColor;
      color: var(--btn-color, var(--text-muted));
      transition: color 0.2s;
    }

    .spinning .icon {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
	}
	_handleAnimationIteration() {
		this.dispatchEvent(new Event("animationiteration", {
			bubbles: true,
			composed: true
		}));
	}
	render() {
		return b`
      <button 
        type="button"
        title=${this.title}
        ?disabled=${this.disabled}
        class=${this.spinning ? "spinning" : ""}
        part="button"
        @animationiteration=${this._handleAnimationIteration}
      >
        ${this.icon ? renderIcon(this.icon) : b`<slot></slot>`}
      </button>
    `;
	}
};
__decorate([n$1({ type: String })], AlpsIconBtn.prototype, "icon", void 0);
__decorate([n$1({ type: String })], AlpsIconBtn.prototype, "title", void 0);
__decorate([n$1({ type: Boolean })], AlpsIconBtn.prototype, "disabled", void 0);
__decorate([n$1({
	type: Boolean,
	reflect: true
})], AlpsIconBtn.prototype, "active", void 0);
__decorate([n$1({ type: Boolean })], AlpsIconBtn.prototype, "spinning", void 0);
AlpsIconBtn = __decorate([t("alps-icon-btn")], AlpsIconBtn);
//#endregion
//#region src/components/alps-sidebar.ts
var sidebarLayoutStyles = i$1`
  .app-container {
    display: flex;
    flex: 1;
    overflow: hidden;
    position: relative;
  }
  .app-container.collapsed {
    --sidebar-width: 64px;
  }
  alps-sidebar.desktop-sidebar {
    width: var(--sidebar-width, 250px);
    flex-shrink: 0;
    transition: width 0.2s, z-index 0s 0.2s;
    position: relative;
    z-index: 20;
  }
  alps-sidebar.desktop-sidebar[collapsed]:hover {
    transition: width 0.2s, z-index 0s 0s;
  }
  .app-container.dragging alps-sidebar.desktop-sidebar {
    transition: none;
  }
  .sidebar-wrapper {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: transparent;
  }
  .sidebar-wrapper.collapsed .sidebar-content {
    opacity: 0.5;
    overflow-y: hidden;
    pointer-events: none;
  }
  .sidebar-header {
    padding: 0 12px;
    gap: 8px;
    background-color: transparent;
    z-index: 10;
  }
  .sidebar-wrapper.collapsed .sidebar-header,
  :host([collapsed]) .sidebar-header {
    padding: 0 14px !important;
    justify-content: flex-start;
  }
  .sidebar-scroll-content {
    width: calc(max(100%, 215px));
    margin-left: calc(min(0px, (100% - 215px) * 50 / 167));
  }
`;
var AlpsSidebar = class AlpsSidebar extends i {
	constructor(..._args) {
		super(..._args);
		this.isMobile = false;
		this.isOpen = false;
		this.collapsed = false;
		this.suppressHover = false;
		this.isHovered = false;
		this.width = 250;
		this.hideFooterDivider = false;
		this.showMobileBack = false;
		this.isDragging = false;
	}
	static {
		this.styles = i$1`
    :host {
      display: block;
      position: relative;
      height: 100%;
      z-index: 10;
      transition: z-index 0s 0.2s;
    }

    :host([collapsed][ishovered]:not([suppresshover])) {
      z-index: 30 !important;
      transition: z-index 0s 0s;
    }

    .sidebar {
      background-color: var(--bg-secondary, #f3f4f6);
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      position: relative;
      z-index: 10;
      box-sizing: border-box;
      border-right: 1px solid var(--border-color, #e5e7eb);
      box-shadow: rgba(95, 95, 95, 0) 4px 0 4px -2px;
      transition: width 0.2s, box-shadow 0.2s, z-index 0s 0.2s;
    }

    .sidebar.dragging {
      transition: none !important;
    }

    :host(:not([collapsed])) .sidebar {
      width: var(--sidebar-width-expanded, 250px);
    }

    :host([collapsed]:not([ishovered])) .sidebar,
    :host([collapsed][suppresshover]) .sidebar {
      border-right: none;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      box-shadow: rgba(95, 95, 95, 0) 4px 0 4px -2px;
    }

    :host([collapsed][ishovered]:not([suppresshover])) .sidebar {
      width: var(--sidebar-width-expanded, 250px);
      box-shadow: rgba(95, 95, 95, 0.1) 4px 0 4px -2px;
      z-index: 30;
      transition: width 0.2s, box-shadow 0.2s, z-index 0s 0s;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
    }

    .sidebar-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 0;
      overflow: hidden;
    }

    /* Mobile overrides */
    :host(.mobile-sidebar) {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      z-index: 100;
    }
    
    :host(.mobile-sidebar) .sidebar {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 280px;
      z-index: 100;
      pointer-events: auto;
      transform: translateX(-100%);
      transition: transform 0.25s cubic-bezier(0, 0, 0.2, 1);
      box-shadow: rgba(95, 95, 95, 0.1) 4px 0 4px -2px;
    }

    :host(.mobile-sidebar.open) .sidebar {
      transform: translateX(0);
    }

    .mobile-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparent;
      z-index: 99;
      pointer-events: none;
    }

    :host(.mobile-sidebar.open) .mobile-backdrop {
      pointer-events: auto;
    }

    .sidebar-resizer {
      position: absolute;
      top: 0;
      right: -3px;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 50;
    }
    .sidebar-resizer::after {
      content: '';
      position: absolute;
      background: transparent;
      transition: background 0.2s;
      width: 3px;
      top: 0;
      bottom: 0;
      left: 1px;
    }
    .sidebar-resizer:hover::after, .sidebar-resizer.dragging::after {
      background: var(--accent-color, #005A9E);
    }

    /* Do not show resizer on mobile or when collapsed */
    :host([collapsed]) .sidebar-resizer,
    :host(.mobile-sidebar) .sidebar-resizer {
      display: none;
    }

    .sidebar-footer {
      padding: 0 16px;
      height: 57px;
      box-sizing: border-box;
      flex-shrink: 0;
      border-top: 1px solid var(--border-color, #e5e7eb);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 8px;
      background: var(--bg-secondary, #f9fafb);
    }
    .footer-divider {
      width: 1px;
      height: 20px;
      background: var(--border-color, #e5e7eb);
      margin: 0 4px;
      flex-shrink: 0;
    }

    :host([collapsed]:not([ishovered])) .footer-divider,
    :host([collapsed]:not([ishovered])) ::slotted([slot="footer-actions"]) {
      display: none;
    }

    .mobile-return-btn {
      background: transparent;
      border: none;
      color: var(--text-primary);
      font-weight: 500;
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px;
      border-radius: 6px;
      font-family: inherit;
    }
    .mobile-return-btn:hover {
      background: var(--hover-color, #e5e7eb);
    }
    .mobile-return-btn svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }
  `;
	}
	startResize(e) {
		if (this.isMobile || this.collapsed) return;
		e.preventDefault();
		this.isDragging = true;
		this.dispatchEvent(new CustomEvent("drag-start"));
		const startX = e.clientX;
		const startWidth = this.width;
		const onMouseMove = (moveEvent) => {
			let newWidth = startWidth + (moveEvent.clientX - startX);
			this.dispatchEvent(new CustomEvent("sidebar-resize", { detail: {
				newWidth,
				clientX: moveEvent.clientX
			} }));
		};
		const onMouseUp = () => {
			this.isDragging = false;
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
			this.dispatchEvent(new CustomEvent("drag-end"));
		};
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);
	}
	render() {
		return b`
      <div class="mobile-backdrop" @click=${() => this.dispatchEvent(new CustomEvent("close-sidebar"))}></div>
      <aside class="sidebar ${this.isDragging ? "dragging" : ""}" part="sidebar" style="--sidebar-width-expanded: ${this.width}px">
        <div class="sidebar-content">
          <slot></slot>
        </div>
        <div class="sidebar-footer">
          ${this.isMobile && this.showMobileBack ? b`
            <button class="mobile-return-btn" @click=${() => window.location.hash = ""}>
              ${renderIcon("arrowLeft")} <span class="return-text">${this.i18nStore?.t("messageReader.back") || "Back"}</span>
            </button>
          ` : !this.isMobile ? b`
            <alps-icon-btn 
              class="collapse-btn"
              icon="sidebar"
              title=${this.collapsed ? this.i18nStore?.t("folderList.expandSidebar") : this.i18nStore?.t("folderList.collapseSidebar")}
              @click=${() => this.dispatchEvent(new CustomEvent("toggle-collapse"))}
              style="--btn-padding: 8px; --icon-size: 20px;"
            ></alps-icon-btn>
          ` : ""}
          ${!this.hideFooterDivider && (!this.isMobile || this.showMobileBack) ? b`<div class="footer-divider"></div>` : ""}
          <div style="display: flex; flex: 1; justify-content: flex-start;">
            <slot name="footer-actions"></slot>
          </div>
        </div>
      </aside>
      <div class="sidebar-resizer ${this.isDragging ? "dragging" : ""}" @mousedown=${this.startResize}></div>
    `;
	}
};
__decorate([c({ context: i18nContext })], AlpsSidebar.prototype, "i18nStore", void 0);
__decorate([n$1({ type: Boolean })], AlpsSidebar.prototype, "isMobile", void 0);
__decorate([n$1({ type: Boolean })], AlpsSidebar.prototype, "isOpen", void 0);
__decorate([n$1({
	type: Boolean,
	reflect: true
})], AlpsSidebar.prototype, "collapsed", void 0);
__decorate([n$1({
	type: Boolean,
	reflect: true
})], AlpsSidebar.prototype, "suppressHover", void 0);
__decorate([n$1({
	type: Boolean,
	reflect: true
})], AlpsSidebar.prototype, "isHovered", void 0);
__decorate([n$1({ type: Number })], AlpsSidebar.prototype, "width", void 0);
__decorate([n$1({ type: Boolean })], AlpsSidebar.prototype, "hideFooterDivider", void 0);
__decorate([n$1({ type: Boolean })], AlpsSidebar.prototype, "showMobileBack", void 0);
__decorate([r()], AlpsSidebar.prototype, "isDragging", void 0);
AlpsSidebar = __decorate([t("alps-sidebar")], AlpsSidebar);
//#endregion
//#region src/components/alps-toggle.ts
var AlpsToggle = class AlpsToggle extends i {
	constructor(..._args) {
		super(..._args);
		this.options = [];
		this.value = "";
	}
	static {
		this.styles = i$1`
    :host {
      display: inline-flex;
      background-color: var(--bg-secondary, #f3f4f6);
      border-radius: 6px;
      padding: 2px;
      border: 1px solid var(--border-color, #e5e7eb);
    }

    button {
      background: none;
      border: none;
      padding: 4px 16px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      color: var(--text-secondary, #4b5563);
      transition: all 0.2s;
    }

    button.active {
      background-color: var(--bg-primary, #ffffff);
      color: var(--text-primary, #111827);
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    :host([full-width]) {
      display: flex;
      width: 100%;
      box-sizing: border-box;
    }

    :host([full-width]) button {
      flex: 1;
    }
  `;
	}
	render() {
		return b`
      ${this.options.map((opt) => b`
        <button 
          class="${this.value === opt.value ? "active" : ""}" 
          @click=${() => this._select(opt.value)}
        >${opt.label}</button>
      `)}
    `;
	}
	_select(val) {
		if (this.value !== val) {
			this.value = val;
			this.dispatchEvent(new CustomEvent("change", { detail: { value: val } }));
		}
	}
};
__decorate([n$1({ type: Array })], AlpsToggle.prototype, "options", void 0);
__decorate([n$1({ type: String })], AlpsToggle.prototype, "value", void 0);
AlpsToggle = __decorate([t("alps-toggle")], AlpsToggle);
//#endregion
//#region src/components/alps-button.ts
var AlpsButton = class AlpsButton extends i {
	constructor(..._args) {
		super(..._args);
		this.variant = "normal";
		this.icon = "";
		this.disabled = false;
		this.spinning = false;
		this.type = "button";
		this.title = "";
		this.fullWidth = false;
		this.handleClick = (e) => {
			if (this.disabled || this.spinning) {
				e.preventDefault();
				e.stopPropagation();
				return;
			}
			if (this.type === "submit") {
				const form = this.closest("form");
				if (form) {
					e.preventDefault();
					form.requestSubmit();
				}
			} else if (this.type === "reset") {
				const form = this.closest("form");
				if (form) {
					e.preventDefault();
					form.reset();
				}
			}
		};
	}
	connectedCallback() {
		super.connectedCallback();
		this.addEventListener("click", this.handleClick);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.removeEventListener("click", this.handleClick);
	}
	static {
		this.styles = i$1`
    :host {
      display: inline-flex;
    }

    :host([full-width]) {
      display: flex;
      width: 100%;
    }

    :host([full-width]) button {
      width: 100%;
    }

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--btn-gap, 8px);
      font-family: inherit;
      font-size: var(--btn-font-size, 14px);
      font-weight: 500;
      border-radius: var(--btn-radius, 4px);
      padding: var(--btn-padding, 8px 16px);
      cursor: pointer;
      transition: all 0.2s ease;
      box-sizing: border-box;
      line-height: normal;
      outline: none;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    button:active:not(:disabled) {
      transform: scale(0.98);
    }

    /* Variant: Normal (Default) */
    :host([variant="normal"]) button {
      background-color: transparent;
      color: var(--text-primary, #111827);
      border: 1px solid var(--border-color, #e5e7eb);
    }
    
    @media (hover: hover) {
      :host([variant="normal"]) button:hover:not(:disabled) {
        background-color: var(--bg-tertiary, #f3f4f6);
      }
    }

    /* Variant: Primary */
    :host([variant="primary"]) button {
      background-color: var(--accent-color, #3b82f6);
      color: #ffffff;
      border: 1px solid transparent;
    }
    
    @media (hover: hover) {
      :host([variant="primary"]) button:hover:not(:disabled) {
        background-color: var(--accent-hover, #2563eb);
      }
    }

    /* Variant: Danger */
    :host([variant="danger"]) button {
      background-color: transparent;
      color: var(--error, #ef4444);
      border: 1px solid var(--border-color, #e5e7eb);
    }
    
    @media (hover: hover) {
      :host([variant="danger"]) button:hover:not(:disabled) {
        background-color: var(--hover-color, rgba(0, 0, 0, 0.05));
      }
    }

    /* Variant: Text */
    :host([variant="text"]) button {
      background-color: transparent;
      color: var(--text-muted, #6b7280);
      border: 1px solid transparent;
    }
    
    @media (hover: hover) {
      :host([variant="text"]) button:hover:not(:disabled) {
        color: var(--text-primary, #111827);
        background-color: var(--hover-color, rgba(0, 0, 0, 0.05));
      }
    }

    /* Icons and Spinners */
    .icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--btn-icon-size, 18px);
      height: var(--btn-icon-size, 18px);
    }

    .icon-container svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }

    .spinner {
      animation: spin 1s linear infinite;
      display: flex;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    /* Slot wrapper for proper alignment */
    .content {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
    }
  `;
	}
	render() {
		return b`
      <button 
        type=${this.type}
        title=${this.title}
        ?disabled=${this.disabled || this.spinning}
        part="button"
      >
        ${this.spinning ? b`
          <span class="icon-container spinner">
            ${renderIcon("edelweiss")}
          </span>
        ` : this.icon ? b`
          <span class="icon-container">
            ${renderIcon(this.icon)}
          </span>
        ` : ""}
        <span class="content"><slot></slot></span>
      </button>
    `;
	}
};
__decorate([n$1({
	type: String,
	reflect: true
})], AlpsButton.prototype, "variant", void 0);
__decorate([n$1({ type: String })], AlpsButton.prototype, "icon", void 0);
__decorate([n$1({
	type: Boolean,
	reflect: true
})], AlpsButton.prototype, "disabled", void 0);
__decorate([n$1({
	type: Boolean,
	reflect: true
})], AlpsButton.prototype, "spinning", void 0);
__decorate([n$1({ type: String })], AlpsButton.prototype, "type", void 0);
__decorate([n$1({ type: String })], AlpsButton.prototype, "title", void 0);
__decorate([n$1({
	type: Boolean,
	attribute: "full-width",
	reflect: true
})], AlpsButton.prototype, "fullWidth", void 0);
AlpsButton = __decorate([t("alps-button")], AlpsButton);
//#endregion
//#region src/components/alps-toolbar.ts
var AlpsToolbar = class AlpsToolbar extends i {
	constructor(..._args) {
		super(..._args);
		this.scrolled = false;
	}
	static {
		this.styles = i$1`
    :host {
      display: flex;
      align-items: center;
      height: 57px;
      box-sizing: border-box;
      flex-shrink: 0;
      border-bottom: 1px solid var(--border-color);
      transition: box-shadow 0.2s ease;
      position: relative;
      overflow: visible;
    }

    :host([scrolled]) {
      box-shadow: rgba(95, 95, 95, 0.1) 0 4px 4px -2px;
    }
  `;
	}
	render() {
		return b`<slot></slot>`;
	}
};
__decorate([n$1({
	type: Boolean,
	reflect: true
})], AlpsToolbar.prototype, "scrolled", void 0);
AlpsToolbar = __decorate([t("alps-toolbar")], AlpsToolbar);
//#endregion
//#region src/components/alps-create-button.ts
var AlpsCreateButton = class AlpsCreateButton extends i {
	constructor(..._args) {
		super(..._args);
		this.collapsed = false;
		this.icon = "plus";
		this.text = "";
		this.disabled = false;
		this.title = "";
	}
	static {
		this.styles = i$1`
    :host {
      display: block;
      width: 100%;
    }

    .create-btn {
      width: 100%;
      height: 36px;
      font-size: 14px;
      overflow: hidden;
      --btn-padding: 8px 16px;
      --btn-gap: 8px;
      transition: all 0.2s ease;
    }

    .create-btn::part(button) {
      width: 100%;
      height: 100%;
    }

    :host([collapsed]) .create-btn {
      --btn-padding: 8px;
      --btn-gap: 0px;
    }

    .create-text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: max-width 0.2s ease, opacity 0.2s ease, margin 0.2s ease;
      max-width: 150px;
      opacity: 1;
      display: inline-block;
    }

    :host([collapsed]) .create-text {
      max-width: 0;
      opacity: 0;
      margin-left: 0;
    }
  `;
	}
	render() {
		return b`
      <alps-button 
        variant="primary"
        icon="${this.icon}"
        class="create-btn"
        ?disabled=${this.disabled}
        title="${this.title}"
        @click=${() => {}}
      >
        <span class="create-text"><slot>${this.text}</slot></span>
      </alps-button>
    `;
	}
};
__decorate([n$1({ type: Boolean })], AlpsCreateButton.prototype, "collapsed", void 0);
__decorate([n$1({ type: String })], AlpsCreateButton.prototype, "icon", void 0);
__decorate([n$1({ type: String })], AlpsCreateButton.prototype, "text", void 0);
__decorate([n$1({ type: Boolean })], AlpsCreateButton.prototype, "disabled", void 0);
__decorate([n$1({ type: String })], AlpsCreateButton.prototype, "title", void 0);
AlpsCreateButton = __decorate([t("alps-create-button")], AlpsCreateButton);
//#endregion
//#region src/components/ui-modal.ts
var modalButtonStyles = i$1`
  .btn-cancel {
    background: transparent;
    border: none;
    color: var(--text-muted, #6b7280);
    font-family: inherit;
    font-size: 14px;
    cursor: pointer;
    font-weight: 500;
    padding: 8px 16px;
    transition: color 0.2s;
  }
  .btn-cancel:hover { color: var(--text-primary, #111827); }
  
  .btn-confirm {
    background-color: transparent;
    color: var(--text-primary, #111827);
    border: 1px solid var(--border-color, #e5e7eb);
    border-radius: 4px;
    font-family: inherit;
    padding: 8px 16px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
  }
  .btn-confirm:hover { 
    background-color: var(--bg-tertiary, #f3f4f6);
  }
  .btn-confirm.danger {
    color: var(--error, #ef4444);
    border-color: var(--error, #ef4444);
  }
  .btn-confirm.danger:hover {
    background-color: var(--error, #ef4444);
    color: #ffffff;
  }
`;
var UIModal = class UIModal extends i {
	constructor(..._args) {
		super(..._args);
		this.title = "";
		this.isDanger = false;
		this.dismissible = false;
		this.width = "400px";
		this._handleDialogClose = () => {
			this.dispatchEvent(new CustomEvent("cancel", {
				bubbles: true,
				composed: true
			}));
		};
	}
	static {
		this.styles = i$1`
    .modal-dialog {
      position: fixed;
      inset: 0;
      margin: 0;
      padding: 0;
      border: none;
      background: transparent;
      width: 100vw;
      height: 100vh;
      max-width: none;
      max-height: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .modal-dialog::backdrop {
      background: var(--modal-backdrop, rgba(255, 255, 255, 0.8));
    }

    .modal-card {
      background: var(--bg-primary, #ffffff);
      padding: 24px;
      border-radius: 8px;
      max-width: 100%;
      border: 1px solid var(--border-color, #e5e7eb);
      box-shadow: 0 8px 24px -6px rgba(0,0,0,0.15);
      font-family: inherit;
    }
    .modal-title {
      margin-top: 0;
      margin-bottom: 12px;
      font-size: 16px;
      font-weight: 500;
      color: var(--text-primary, #111827);
    }
    .modal-title.danger {
      color: var(--error, #ef4444);
    }
    .modal-body {
      margin-bottom: 24px;
      color: var(--text-secondary, #4b5563);
      line-height: 1.5;
      font-size: 14px;
    }
    .modal-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      align-items: center;
    }
  `;
	}
	firstUpdated() {
		const dialog = this.shadowRoot?.querySelector(".modal-dialog");
		if (dialog && !dialog.open) dialog.showModal();
	}
	_handleOverlayClick(e) {
		if (this.dismissible) {
			if (e.target === e.currentTarget) {
				e.stopPropagation();
				this.dispatchEvent(new CustomEvent("cancel", {
					bubbles: true,
					composed: true
				}));
			}
		} else e.stopPropagation();
	}
	render() {
		return b`
      <dialog class="modal-dialog" @pointerdown=${this._handleOverlayClick} @close=${this._handleDialogClose}>
        <div class="modal-card" style="width: ${this.width};" @pointerdown=${(e) => e.stopPropagation()}>
          <slot name="header">
            ${this.title ? b`<h3 class="modal-title ${this.isDanger ? "danger" : ""}">${this.title}</h3>` : ""}
          </slot>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-actions">
            <slot name="actions"></slot>
          </div>
        </div>
      </dialog>
    `;
	}
};
__decorate([n$1({ type: String })], UIModal.prototype, "title", void 0);
__decorate([n$1({ type: Boolean })], UIModal.prototype, "isDanger", void 0);
__decorate([n$1({ type: Boolean })], UIModal.prototype, "dismissible", void 0);
__decorate([n$1({ type: String })], UIModal.prototype, "width", void 0);
UIModal = __decorate([t("ui-modal")], UIModal);
//#endregion
//#region src/components/alps-input.ts
var AlpsInput = class AlpsInput extends i {
	constructor(..._args) {
		super(..._args);
		this.type = "text";
		this.value = "";
		this.placeholder = "";
		this.required = false;
		this.autocomplete = "";
		this.inputId = "";
		this.icon = "";
		this.clearable = false;
		this.autofocus = false;
		this.showPassword = false;
	}
	static {
		this.styles = i$1`
    :host {
      display: block;
      width: 100%;
      position: relative;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
    }

    input {
      width: 100%;
      height: 36px;
      padding: 0 12px;
      background: var(--alps-input-bg, var(--bg-primary, #ffffff));
      border: 1px solid var(--border-color, #e5e7eb);
      border-radius: var(--input-radius, 6px);
      color: var(--text-primary, #111827);
      font-family: var(--font-base, 'Inter', sans-serif);
      font-size: var(--input-font-size, 14px);
      transition: all 0.2s ease;
      box-sizing: border-box;
      outline: none;
    }

    /* Padding adjustments for icons */
    .has-left-icon input {
      padding-left: 36px;
    }

    .has-right-icon input {
      padding-right: 36px;
    }

    input:focus {
      border-color: var(--accent-color, #005A9E);
      box-shadow: 0 0 0 2px rgba(0, 90, 158, 0.2);
    }

    input::placeholder {
      color: var(--text-muted, #9ca3af);
    }

    .icon-left {
      position: absolute;
      left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      color: var(--text-muted, #9ca3af);
      pointer-events: none;
    }

    .icon-left svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }

    .action-btn {
      position: absolute;
      right: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      color: var(--text-muted, #9ca3af);
      cursor: pointer;
      background: transparent;
      border: none;
      padding: 0;
      border-radius: 4px;
      transition: color 0.2s ease, background 0.2s ease;
      outline: none;
    }

    .action-btn:hover {
      color: var(--text-primary, #111827);
      background: var(--bg-tertiary, #f3f4f6);
    }

    .action-btn svg {
      width: 16px;
      height: 16px;
      fill: currentColor;
    }
  `;
	}
	handleInput(e) {
		const target = e.target;
		this.value = target.value;
		this.dispatchEvent(new Event("input", {
			bubbles: true,
			composed: true
		}));
		this.dispatchEvent(new Event("change", {
			bubbles: true,
			composed: true
		}));
	}
	togglePassword() {
		this.showPassword = !this.showPassword;
	}
	handleClear() {
		this.value = "";
		this.dispatchEvent(new Event("input", {
			bubbles: true,
			composed: true
		}));
		this.dispatchEvent(new Event("change", {
			bubbles: true,
			composed: true
		}));
		this.dispatchEvent(new Event("clear", {
			bubbles: true,
			composed: true
		}));
	}
	handleKeyDown(e) {
		if (e.key === "Enter") {
			const form = this.closest("form");
			if (form) {
				e.preventDefault();
				form.requestSubmit();
			}
		}
	}
	checkValidity() {
		const input = this.shadowRoot?.querySelector("input");
		return input ? input.checkValidity() : true;
	}
	reportValidity() {
		const input = this.shadowRoot?.querySelector("input");
		return input ? input.reportValidity() : true;
	}
	focus() {
		const input = this.shadowRoot?.querySelector("input");
		if (input) input.focus();
	}
	render() {
		const isPasswordType = this.type === "password";
		const currentType = isPasswordType && this.showPassword ? "text" : this.type;
		const effectiveIcon = this.icon || (this.type === "email" ? "at" : "");
		return b`
      <div class="input-wrapper ${effectiveIcon ? "has-left-icon" : ""} ${(isPasswordType || this.clearable) && this.value ? "has-right-icon" : ""}">
        ${effectiveIcon ? b`
          <span class="icon-left">
            ${renderIcon(effectiveIcon)}
          </span>
        ` : ""}

        <input 
          id=${this.inputId || ""}
          type=${currentType} 
          .value=${this.value}
          placeholder=${this.placeholder}
          ?required=${this.required}
          ?autofocus=${this.autofocus}
          autocomplete=${this.autocomplete}
          @input=${this.handleInput}
          @change=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${isPasswordType && this.value ? b`
          <button 
            type="button" 
            class="action-btn" 
            @click=${this.togglePassword}
            title=${this.showPassword ? "Hide password" : "Show password"}
            tabindex="-1"
          >
            ${renderIcon(this.showPassword ? "eyeSlash" : "eye")}
          </button>
        ` : this.clearable && this.value ? b`
          <button 
            type="button" 
            class="action-btn" 
            @click=${this.handleClear}
            title="Clear"
            tabindex="-1"
          >
            ${renderIcon("x")}
          </button>
        ` : ""}
      </div>
    `;
	}
};
__decorate([n$1({ type: String })], AlpsInput.prototype, "type", void 0);
__decorate([n$1({ type: String })], AlpsInput.prototype, "value", void 0);
__decorate([n$1({ type: String })], AlpsInput.prototype, "placeholder", void 0);
__decorate([n$1({ type: Boolean })], AlpsInput.prototype, "required", void 0);
__decorate([n$1({ type: String })], AlpsInput.prototype, "autocomplete", void 0);
__decorate([n$1({ type: String })], AlpsInput.prototype, "inputId", void 0);
__decorate([n$1({ type: String })], AlpsInput.prototype, "icon", void 0);
__decorate([n$1({ type: Boolean })], AlpsInput.prototype, "clearable", void 0);
__decorate([n$1({ type: Boolean })], AlpsInput.prototype, "autofocus", void 0);
__decorate([r()], AlpsInput.prototype, "showPassword", void 0);
AlpsInput = __decorate([t("alps-input")], AlpsInput);
//#endregion
//#region src/components/alps-select.ts
var AlpsSelect = class AlpsSelect extends i {
	constructor(..._args) {
		super(..._args);
		this.value = "";
		this.options = [];
	}
	static {
		this.styles = i$1`
		:host {
			display: block;
			position: relative;
		}

		.select-wrapper {
			position: relative;
			display: flex;
			align-items: center;
			width: 100%;
		}

		select {
			width: 100%;
			height: 36px;
			padding: 0 36px 0 12px; /* Extra padding right for the custom caret */
			background: var(--alps-input-bg, var(--bg-primary, #ffffff));
			border: 1px solid var(--border-color, #e5e7eb);
			border-radius: var(--input-radius, 6px);
			color: var(--text-primary, #111827);
			font-family: var(--font-base, 'Inter', sans-serif);
			font-size: var(--input-font-size, 14px);
			transition: all 0.2s ease;
			box-sizing: border-box;
			outline: none;
			appearance: none;
			-webkit-appearance: none;
			-moz-appearance: none;
			cursor: pointer;
		}

		select:focus {
			border-color: var(--accent-color, #005A9E);
			box-shadow: 0 0 0 2px rgba(0, 90, 158, 0.2);
		}

		select:disabled {
			background: var(--bg-tertiary, #f3f4f6);
			cursor: not-allowed;
			opacity: 0.7;
		}

		.caret {
			position: absolute;
			right: 12px;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 16px;
			height: 16px;
			color: var(--text-muted, #9ca3af);
			pointer-events: none;
		}

		.caret svg {
			width: 100%;
			height: 100%;
		}
	`;
	}
	handleChange(e) {
		const target = e.target;
		this.value = target.value;
		this.dispatchEvent(new Event("change", {
			bubbles: true,
			composed: true
		}));
	}
	render() {
		return b`
			<div class="select-wrapper">
				<select .value=${this.value} @change=${this.handleChange}>
					${this.options.map((opt) => b`<option value=${opt.value} ?selected=${opt.value === this.value} ?disabled=${opt.disabled}>${opt.label}</option>`)}
				</select>
				<span class="caret">
					${renderIcon("caret-down")}
				</span>
			</div>
		`;
	}
};
__decorate([n$1({ type: String })], AlpsSelect.prototype, "value", void 0);
__decorate([n$1({ type: Array })], AlpsSelect.prototype, "options", void 0);
AlpsSelect = __decorate([t("alps-select")], AlpsSelect);
//#endregion
//#region ../plugins/caldav/frontend/calendar-event-modal.ts
var CalendarEventModal = class CalendarEventModal extends i {
	constructor(..._args) {
		super(..._args);
		this.calendars = [];
		this.open = false;
		this.summary = "";
		this.location = "";
		this.calendarPath = "";
		this.description = "";
		this.startDate = "";
		this.startTime = "";
		this.endDate = "";
		this.endTime = "";
		this.isAllDay = false;
		this.isSaving = false;
		this.rruleFreq = "";
		this.originalRRule = "";
	}
	static {
		this.styles = [modalButtonStyles, i$1`
            .form-group {
                margin-bottom: 16px;
            }
            .form-group label {
                display: block;
                font-size: 14px;
                font-weight: 500;
                margin-bottom: 6px;
                color: var(--text-primary, #111827);
            }
            .form-row {
                display: flex;
                gap: 12px;
            }
            .form-row > div {
                flex: 1;
            }
            alps-input {
                width: 100%;
            }
            textarea {
                width: 100%;
                box-sizing: border-box;
                padding: 8px 12px;
                border: 1px solid var(--border-color, #e5e7eb);
                border-radius: 4px;
                font-family: inherit;
                font-size: 14px;
                resize: vertical;
                min-height: 80px;
                background: var(--bg-primary, #ffffff);
                color: var(--text-primary, #111827);
            }
            textarea:focus {
                outline: none;
                border-color: var(--accent-color, #2563eb);
                box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
            }
        `];
	}
	updated(changedProperties) {
		if (changedProperties.has("open") && this.open) {
			const pad = (n) => n.toString().padStart(2, "0");
			if (this.event) {
				this.summary = this.event.summary || "";
				this.location = this.event.location || "";
				this.description = this.event.description || "";
				this.calendarPath = this.event.calendarPath || (this.calendars.length > 0 ? this.calendars[0].path : "");
				const isAllDay = isAllDayEvent(this.event.start, this.event.end);
				this.isAllDay = isAllDay;
				if (this.event.rrule) {
					this.originalRRule = this.event.rrule;
					if (this.event.rrule === "FREQ=DAILY") this.rruleFreq = "DAILY";
					else if (this.event.rrule === "FREQ=WEEKLY") this.rruleFreq = "WEEKLY";
					else if (this.event.rrule === "FREQ=MONTHLY") this.rruleFreq = "MONTHLY";
					else if (this.event.rrule === "FREQ=YEARLY") this.rruleFreq = "YEARLY";
					else this.rruleFreq = "CUSTOM";
				} else {
					this.originalRRule = "";
					this.rruleFreq = "";
				}
				if (isAllDay) {
					const start = new Date(this.event.start);
					this.startDate = `${start.getUTCFullYear()}-${pad(start.getUTCMonth() + 1)}-${pad(start.getUTCDate())}`;
					this.startTime = "00:00";
					const end = new Date(this.event.end);
					end.setUTCDate(end.getUTCDate() - 1);
					this.endDate = `${end.getUTCFullYear()}-${pad(end.getUTCMonth() + 1)}-${pad(end.getUTCDate())}`;
					this.endTime = "00:00";
				} else {
					const start = new Date(this.event.start);
					this.startDate = `${start.getFullYear()}-${pad(start.getMonth() + 1)}-${pad(start.getDate())}`;
					this.startTime = `${pad(start.getHours())}:${pad(start.getMinutes())}`;
					const end = new Date(this.event.end);
					this.endDate = `${end.getFullYear()}-${pad(end.getMonth() + 1)}-${pad(end.getDate())}`;
					this.endTime = `${pad(end.getHours())}:${pad(end.getMinutes())}`;
				}
			} else {
				this.summary = "";
				this.location = "";
				this.description = "";
				this.originalRRule = "";
				this.rruleFreq = "";
				this.calendarPath = this.calendars.length > 0 ? this.calendars[0].path : "";
				const start = this.initialDate ? new Date(this.initialDate) : /* @__PURE__ */ new Date();
				if (this.initialDate && start.getHours() === 0 && start.getMinutes() === 0) {
					this.isAllDay = true;
					this.startDate = `${start.getFullYear()}-${pad(start.getMonth() + 1)}-${pad(start.getDate())}`;
					this.startTime = "00:00";
					this.endDate = this.startDate;
					this.endTime = "00:00";
				} else {
					this.isAllDay = false;
					if (!this.initialDate) {
						start.setMinutes(0, 0, 0);
						start.setHours(start.getHours() + 1);
					}
					this.startDate = `${start.getFullYear()}-${pad(start.getMonth() + 1)}-${pad(start.getDate())}`;
					this.startTime = `${pad(start.getHours())}:${pad(start.getMinutes())}`;
					const end = new Date(start.getTime() + 3600 * 1e3);
					this.endDate = `${end.getFullYear()}-${pad(end.getMonth() + 1)}-${pad(end.getDate())}`;
					this.endTime = `${pad(end.getHours())}:${pad(end.getMinutes())}`;
				}
			}
		}
	}
	handleCancel() {
		this.open = false;
		this.dispatchEvent(new CustomEvent("close"));
	}
	async handleSave() {
		if (!this.summary.trim() || !this.startDate || !this.endDate) return;
		this.isSaving = true;
		try {
			let startISO;
			let endISO;
			if (this.isAllDay) {
				startISO = `${this.startDate}T00:00:00.000Z`;
				const endD = /* @__PURE__ */ new Date(`${this.endDate}T00:00:00.000Z`);
				endD.setUTCDate(endD.getUTCDate() + 1);
				endISO = endD.toISOString();
			} else {
				const startD = /* @__PURE__ */ new Date(`${this.startDate}T${this.startTime || "00:00"}`);
				const endD = /* @__PURE__ */ new Date(`${this.endDate}T${this.endTime || "00:00"}`);
				startISO = startD.toISOString();
				endISO = endD.toISOString();
			}
			let rruleStr = void 0;
			if (this.rruleFreq === "CUSTOM") rruleStr = this.originalRRule;
			else if (this.rruleFreq) rruleStr = `FREQ=${this.rruleFreq}`;
			const payload = {
				summary: this.summary,
				location: this.location,
				description: this.description,
				start: startISO,
				end: endISO,
				calendarPath: this.calendarPath,
				rrule: rruleStr
			};
			if (this.event && this.event.path) await calendarService.updateEvent(this.event.path, payload);
			else await calendarService.createEvent(payload);
			this.open = false;
			this.dispatchEvent(new CustomEvent("saved"));
		} catch (e) {
			console.error("Failed to save event", e);
		} finally {
			this.isSaving = false;
		}
	}
	render() {
		if (!this.open) return b``;
		return b`
            <ui-modal 
                title="${this.event ? this.i18nStore?.t("calendar.editEvent") : this.i18nStore?.t("calendar.newEvent")}" 
                width="450px"
                ?dismissible=${!this.isSaving}
                @cancel=${this.handleCancel}
            >
                <div class="form-group">
                    <label>${this.i18nStore?.t("calendar.summary")}</label>
                    <alps-input 
                        .value=${this.summary} 
                        @input=${(e) => this.summary = e.target.value}
                        placeholder=${this.i18nStore?.t("calendar.eventTitle")}
                    ></alps-input>
                </div>

                ${this.calendars.length > 1 ? b`
                    <div class="form-group">
                        <label>${this.i18nStore?.t("calendar.calendar")}</label>
                        <alps-select
                            .value=${this.calendarPath}
                            .options=${this.calendars.map((c) => ({
			value: c.path,
			label: c.name
		}))}
                            @change=${(e) => this.calendarPath = e.detail.value}
                            ?disabled=${!!this.event}
                        ></alps-select>
                    </div>
                ` : ""}

                <div class="form-row">
                    <div class="form-group">
                        <label>${this.i18nStore?.t("calendar.startDate")}</label>
                        <alps-input 
                            type="date"
                            .value=${this.startDate} 
                            @input=${(e) => this.startDate = e.target.value}
                        ></alps-input>
                    </div>
                    ${!this.isAllDay ? b`
                    <div class="form-group">
                        <label>${this.i18nStore?.t("calendar.time")}</label>
                        <alps-input 
                            type="time"
                            .value=${this.startTime} 
                            @input=${(e) => this.startTime = e.target.value}
                        ></alps-input>
                    </div>
                    ` : ""}
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label>${this.i18nStore?.t("calendar.endDate")}</label>
                        <alps-input 
                            type="date"
                            .value=${this.endDate} 
                            @input=${(e) => this.endDate = e.target.value}
                        ></alps-input>
                    </div>
                    ${!this.isAllDay ? b`
                    <div class="form-group">
                        <label>${this.i18nStore?.t("calendar.time")}</label>
                        <alps-input 
                            type="time"
                            .value=${this.endTime} 
                            @input=${(e) => this.endTime = e.target.value}
                        ></alps-input>
                    </div>
                    ` : ""}
                </div>

                <div class="form-group" style="display: flex; align-items: center; gap: 8px;">
                    <input type="checkbox" id="allday-checkbox" .checked=${this.isAllDay} @change=${(e) => this.isAllDay = e.target.checked}>
                    <label for="allday-checkbox" style="margin-bottom: 0; cursor: pointer;">${this.i18nStore?.t("calendar.allDay")}</label>
                </div>

                <div class="form-group">
                    <label>${this.i18nStore?.t("calendar.repeat")}</label>
                    <alps-select
                        .value=${this.rruleFreq}
                        .options=${[
			{
				value: "",
				label: this.i18nStore?.t("calendar.repeatNone")
			},
			{
				value: "DAILY",
				label: this.i18nStore?.t("calendar.repeatDaily")
			},
			{
				value: "WEEKLY",
				label: this.i18nStore?.t("calendar.repeatWeekly")
			},
			{
				value: "MONTHLY",
				label: this.i18nStore?.t("calendar.repeatMonthly")
			},
			{
				value: "YEARLY",
				label: this.i18nStore?.t("calendar.repeatYearly")
			},
			...this.rruleFreq === "CUSTOM" ? [{
				value: "CUSTOM",
				label: this.i18nStore?.t("calendar.repeatCustom")
			}] : []
		]}
                        @change=${(e) => this.rruleFreq = e.target.value}
                    ></alps-select>
                </div>

                <div class="form-group">
                    <label>${this.i18nStore?.t("calendar.location")}</label>
                    <alps-input 
                        .value=${this.location} 
                        @input=${(e) => this.location = e.target.value}
                        placeholder=${this.i18nStore?.t("calendar.addLocation")}
                    ></alps-input>
                </div>

                <div class="form-group">
                    <label>${this.i18nStore?.t("calendar.description")}</label>
                    <textarea 
                        .value=${this.description} 
                        @input=${(e) => this.description = e.target.value}
                        placeholder=${this.i18nStore?.t("calendar.addDescription")}
                    ></textarea>
                </div>

                <div slot="actions">
                    <alps-button variant="text" @click=${this.handleCancel} ?disabled=${this.isSaving}>
                        ${this.i18nStore?.t("general.cancel")}
                    </alps-button>
                    <alps-button variant="primary" @click=${this.handleSave} ?disabled=${this.isSaving || !this.summary} ?spinning=${this.isSaving}>
                        ${this.i18nStore?.t("general.save")}
                    </alps-button>
                </div>
            </ui-modal>
        `;
	}
};
__decorate([c({ context: i18nContext })], CalendarEventModal.prototype, "i18nStore", void 0);
__decorate([n$1({ type: Object })], CalendarEventModal.prototype, "event", void 0);
__decorate([n$1({ type: Object })], CalendarEventModal.prototype, "initialDate", void 0);
__decorate([n$1({ type: Array })], CalendarEventModal.prototype, "calendars", void 0);
__decorate([n$1({ type: Boolean })], CalendarEventModal.prototype, "open", void 0);
__decorate([r()], CalendarEventModal.prototype, "summary", void 0);
__decorate([r()], CalendarEventModal.prototype, "location", void 0);
__decorate([r()], CalendarEventModal.prototype, "calendarPath", void 0);
__decorate([r()], CalendarEventModal.prototype, "description", void 0);
__decorate([r()], CalendarEventModal.prototype, "startDate", void 0);
__decorate([r()], CalendarEventModal.prototype, "startTime", void 0);
__decorate([r()], CalendarEventModal.prototype, "endDate", void 0);
__decorate([r()], CalendarEventModal.prototype, "endTime", void 0);
__decorate([r()], CalendarEventModal.prototype, "isAllDay", void 0);
__decorate([r()], CalendarEventModal.prototype, "isSaving", void 0);
__decorate([r()], CalendarEventModal.prototype, "rruleFreq", void 0);
__decorate([r()], CalendarEventModal.prototype, "originalRRule", void 0);
CalendarEventModal = __decorate([t("calendar-event-modal")], CalendarEventModal);
//#endregion
//#region ../plugins/caldav/frontend/calendar-mini-month.ts
var CalendarMiniMonth = class CalendarMiniMonth extends i {
	constructor(..._args) {
		super(..._args);
		this.events = [];
		this.showTitle = false;
	}
	static {
		this.styles = i$1`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .year-month-title {
            color: var(--error, #ef4444);
            font-size: var(--mini-month-title-size, 16px);
            font-weight: 500;
            margin-bottom: 12px;
        }

        .mini-grid {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            grid-auto-rows: 1fr;
            gap: 2px;
            text-align: center;
            font-size: var(--mini-month-font-size, 12px);
            color: var(--text-secondary, #4b5563);
            flex: 1;
        }

        .mini-day-name {
            color: var(--text-muted, #6b7280);
            font-size: var(--mini-month-day-size, 11px);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .mini-day {
            border-radius: 4px;
            cursor: pointer;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .day-num {
            position: relative;
            line-height: 1;
        }

        .mini-day.weekend {
            opacity: 0.65;
        }

        .mini-day:hover {
            background-color: var(--bg-tertiary, #f3f4f6);
        }

        .mini-day.today {
            background-color: var(--error, #ef4444);
            color: #ffffff;
        }

        .mini-day.has-event .day-num::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: var(--text-secondary, #4b5563);
        }
        .mini-day.today.has-event .day-num::after {
            background-color: #ffffff;
        }
    `;
	}
	getMonthGrid() {
		const firstDay = new Date(this.year, this.month, 1);
		const lastDay = new Date(this.year, this.month + 1, 0);
		const grid = [];
		let current = new Date(firstDay);
		let dayOfWeek = current.getDay();
		if (dayOfWeek === 0) dayOfWeek = 7;
		current.setDate(current.getDate() - (dayOfWeek - 1));
		while (current <= lastDay || grid.length % 7 !== 0) {
			grid.push(new Date(current));
			current.setDate(current.getDate() + 1);
		}
		return grid;
	}
	hasEventsForDate(date) {
		if (!this.events || this.events.length === 0) return false;
		const dayStart = new Date(date);
		dayStart.setHours(0, 0, 0, 0);
		const dayEnd = new Date(date);
		dayEnd.setHours(23, 59, 59, 999);
		return this.events.some((e) => {
			if (isAllDayEvent(e.start, e.end)) {
				const startStr = e.start.split("T")[0];
				const endStr = e.end.split("T")[0];
				const startD = /* @__PURE__ */ new Date(startStr + "T00:00:00");
				const endD = /* @__PURE__ */ new Date(endStr + "T00:00:00");
				return startD <= dayStart && endD > dayStart;
			} else {
				const start = new Date(e.start);
				const end = new Date(e.end);
				if (end.getTime() === dayStart.getTime() && start.getTime() < end.getTime()) return false;
				return start <= dayEnd && end >= dayStart;
			}
		});
	}
	handleDateClick(d) {
		this.dispatchEvent(new CustomEvent("date-selected", {
			detail: { date: d },
			bubbles: true,
			composed: true
		}));
	}
	render() {
		const grid = this.getMonthGrid();
		const dayNames = Array.from({ length: 7 }, (_, i) => {
			const d = new Date(2021, 10, i + 1);
			return this.i18nStore?.t(`calendar.daysNarrow.${d.getDay()}`);
		});
		const today = /* @__PURE__ */ new Date();
		today.setHours(0, 0, 0, 0);
		const monthName = this.i18nStore?.t(`calendar.months.${this.month}`);
		return b`
            ${this.showTitle ? b`<div class="year-month-title">${monthName}</div>` : ""}
            <div class="mini-grid">
                ${dayNames.map((n) => b`<div class="mini-day-name">${n}</div>`)}
                ${grid.map((d) => {
			const isOtherMonth = d.getMonth() !== this.month;
			const isToday = d.getTime() === today.getTime();
			const hasEvent = this.hasEventsForDate(d);
			const isWeekend = d.getDay() === 0 || d.getDay() === 6;
			return b`
                        <div 
                            class="mini-day ${isToday ? "today" : ""} ${hasEvent ? "has-event" : ""} ${isWeekend ? "weekend" : ""}" 
                            style="${isOtherMonth ? "opacity: 0.3" : ""}"
                            @click=${() => this.handleDateClick(d)}
                        >
                            <span class="day-num">${d.getDate()}</span>
                        </div>
                    `;
		})}
            </div>
        `;
	}
};
__decorate([c({ context: i18nContext })], CalendarMiniMonth.prototype, "i18nStore", void 0);
__decorate([n$1({ type: Number })], CalendarMiniMonth.prototype, "year", void 0);
__decorate([n$1({ type: Number })], CalendarMiniMonth.prototype, "month", void 0);
__decorate([n$1({ type: Array })], CalendarMiniMonth.prototype, "events", void 0);
__decorate([n$1({ type: Boolean })], CalendarMiniMonth.prototype, "showTitle", void 0);
__decorate([n$1({ type: Object })], CalendarMiniMonth.prototype, "currentDate", void 0);
CalendarMiniMonth = __decorate([t("calendar-mini-month")], CalendarMiniMonth);
//#endregion
//#region src/components/alps-popup.ts
var popupStyles = i$1`
  .dropdown-header {
    padding: 12px 16px 8px;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-muted, #6b7280);
    margin-bottom: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .dropdown-item {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 8px 16px;
    font-size: 14px;
    color: var(--text-primary, #111827);
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: background-color 0.2s;
    white-space: nowrap;
    position: relative;
  }

  .dropdown-item:focus,
  .dropdown-item:focus-visible {
    z-index: 10;
  }

  .dropdown-item:hover:not(:disabled) {
    background-color: var(--bg-tertiary, #f3f4f6);
  }

  .dropdown-item:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .dropdown-item:first-of-type {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  .dropdown-item:last-of-type {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .dropdown-item.active {
    color: var(--text-primary, #111827);
    background-color: var(--bg-tertiary, #f3f4f6);
    font-weight: 600;
  }

  .dropdown-item.active svg {
    color: var(--text-primary, #111827);
  }

  .dropdown-item svg {
    width: 16px;
    height: 16px;
    fill: currentColor;
    color: var(--text-secondary, #4b5563);
    flex-shrink: 0;
  }

  .item-text {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .dropdown-divider {
    height: 1px;
    background: var(--border-color, #e5e7eb);
    margin: 4px 0;
  }
`;
var AlpsPopup = class AlpsPopup extends i {
	constructor(..._args) {
		super(..._args);
		this.align = "right";
		this.position = "bottom";
		this.triggerOn = "click";
		this.openState = false;
		this._handleDialogClick = (e) => {
			if (!this.openState) return;
			if (e.target === e.currentTarget) {
				e.stopPropagation();
				e.preventDefault();
				this.close();
			}
		};
		this._handleDialogClose = () => {
			if (this.openState) this.close();
		};
		this._handleDialogKeydown = (e) => {
			if (!this.openState) return;
			if (e.key === "ArrowDown" || e.key === "ArrowUp") {
				e.preventDefault();
				const focusable = this._getFocusableElements();
				if (focusable.length === 0) return;
				const active = this._getActiveElement();
				let index = focusable.findIndex((el) => el === active);
				if (e.key === "ArrowDown") index = index === -1 ? 0 : (index + 1) % focusable.length;
				else index = index === -1 ? focusable.length - 1 : (index - 1 + focusable.length) % focusable.length;
				focusable[index].focus();
			} else if (e.key === "Enter" || e.key === " ") {
				const active = this._getActiveElement();
				if (active && typeof active.click === "function") {
					e.preventDefault();
					active.click();
				}
			}
		};
		this._closeTimeout = null;
		this._handleMouseEnter = () => {
			if (this.triggerOn === "hover") {
				if (this._closeTimeout) {
					clearTimeout(this._closeTimeout);
					this._closeTimeout = null;
				}
				this.open();
			}
		};
		this._handleMouseLeave = () => {
			if (this.triggerOn === "hover") {
				if (this._closeTimeout) clearTimeout(this._closeTimeout);
				this._closeTimeout = setTimeout(() => {
					this.close();
					this._closeTimeout = null;
				}, 300);
			}
		};
		this._handleResize = () => {
			if (this.openState) this._updatePosition();
		};
	}
	static {
		this.styles = i$1`
    :host {
      display: inline-block;
      position: relative;
    }

    .popup-dialog {
      position: fixed;
      inset: 0;
      margin: 0;
      padding: 0;
      border: none;
      background: transparent;
      width: 100vw;
      height: 100vh;
      max-width: none;
      max-height: none;
      overflow: visible;
      pointer-events: none;
    }

    :host([triggerOn="click"]) .popup-dialog {
      pointer-events: auto;
    }

    .popup-dialog::backdrop {
      background: transparent;
    }

    .popup-content {
      position: absolute;
      pointer-events: auto;
      z-index: 40010;
      min-width: 160px;
      max-width: 320px;
      background: var(--bg-primary, #ffffff);
      border: 1px solid var(--border-color, #e5e7eb);
      border-radius: 6px;
      box-shadow: rgba(95, 95, 95, 0.15) 0 4px 12px 0px;
      padding: 4px 0;
      display: flex;
      flex-direction: column;
    }

    .popup-content::before,
    .popup-content::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      pointer-events: none;
    }

    .popup-content.position-bottom.align-right::before {
      top: -6px;
      right: var(--arrow-right, 10px);
      border-width: 0 6px 6px 6px;
      border-color: transparent transparent var(--border-color, #e5e7eb) transparent;
    }

    .popup-content.position-bottom.align-right::after {
      top: -5px;
      right: calc(var(--arrow-right, 10px) + 1px);
      border-width: 0 5px 5px 5px;
      border-color: transparent transparent var(--bg-primary, #ffffff) transparent;
    }

    .popup-content.position-bottom.align-left::before {
      top: -6px;
      left: var(--arrow-left, 10px);
      border-width: 0 6px 6px 6px;
      border-color: transparent transparent var(--border-color, #e5e7eb) transparent;
    }

    .popup-content.position-bottom.align-left::after {
      top: -5px;
      left: calc(var(--arrow-left, 10px) + 1px);
      border-width: 0 5px 5px 5px;
      border-color: transparent transparent var(--bg-primary, #ffffff) transparent;
    }

    .popup-content.position-top.align-right::before {
      bottom: -6px;
      right: var(--arrow-right, 10px);
      border-width: 6px 6px 0 6px;
      border-color: var(--border-color, #e5e7eb) transparent transparent transparent;
    }

    .popup-content.position-top.align-right::after {
      bottom: -5px;
      right: calc(var(--arrow-right, 10px) + 1px);
      border-width: 5px 5px 0 5px;
      border-color: var(--bg-primary, #ffffff) transparent transparent transparent;
    }

    .popup-content.position-top.align-left::before {
      bottom: -6px;
      left: var(--arrow-left, 10px);
      border-width: 6px 6px 0 6px;
      border-color: var(--border-color, #e5e7eb) transparent transparent transparent;
    }

    .popup-content.position-top.align-left::after {
      bottom: -5px;
      left: calc(var(--arrow-left, 10px) + 1px);
      border-width: 5px 5px 0 5px;
      border-color: var(--bg-primary, #ffffff) transparent transparent transparent;
    }

    /* Horizontal Left Position Arrow (points right, on the right border of popup) */
    .popup-content.position-left::before {
      right: -6px;
      top: var(--arrow-top, 10px);
      border-width: 6px 0 6px 6px;
      border-color: transparent transparent transparent var(--border-color, #e5e7eb);
    }
    .popup-content.position-left::after {
      right: -5px;
      top: calc(var(--arrow-top, 10px) + 1px);
      border-width: 5px 0 5px 5px;
      border-color: transparent transparent transparent var(--bg-primary, #ffffff);
    }

    /* Horizontal Right Position Arrow (points left, on the left border of popup) */
    .popup-content.position-right::before {
      left: -6px;
      top: var(--arrow-top, 10px);
      border-width: 6px 6px 6px 0;
      border-color: transparent var(--border-color, #e5e7eb) transparent transparent;
    }
    .popup-content.position-right::after {
      left: -5px;
      top: calc(var(--arrow-top, 10px) + 1px);
      border-width: 5px 5px 5px 0;
      border-color: transparent var(--bg-primary, #ffffff) transparent transparent;
    }

  `;
	}
	open() {
		this.openState = true;
		this.dispatchEvent(new CustomEvent("popup-open", {
			bubbles: true,
			composed: true
		}));
	}
	close() {
		this.openState = false;
		this.dispatchEvent(new CustomEvent("popup-close", {
			bubbles: true,
			composed: true
		}));
	}
	toggle(e) {
		if (this.triggerOn === "hover") {
			e.stopPropagation();
			return;
		}
		if (this.openState) this.close();
		else this.open();
	}
	_getActiveElement() {
		let active = document.activeElement;
		while (active?.shadowRoot && active.shadowRoot.activeElement) active = active.shadowRoot.activeElement;
		return active;
	}
	_getFocusableElements() {
		const slot = this.shadowRoot?.querySelector("slot:not([name])");
		if (!slot) return [];
		const elements = slot.assignedElements({ flatten: true });
		const focusable = [];
		const selector = "button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
		elements.forEach((el) => {
			if (el instanceof HTMLElement) {
				if (el.matches(selector)) focusable.push(el);
				const children = Array.from(el.querySelectorAll(selector));
				focusable.push(...children);
			}
		});
		return focusable;
	}
	updated(changedProperties) {
		super.updated(changedProperties);
		if (changedProperties.has("openState")) {
			const dialog = this.shadowRoot?.querySelector(".popup-dialog");
			if (this.openState) {
				if (dialog && !dialog.open) if (this.triggerOn === "hover") dialog.show();
				else dialog.showModal();
				this._updatePosition();
			} else if (dialog && dialog.open) {
				dialog.close();
				const triggerSlot = this.shadowRoot?.querySelector("slot[name=\"trigger\"]");
				if (triggerSlot) triggerSlot.assignedElements({ flatten: true }).forEach((el) => {
					if (el instanceof HTMLElement) el.blur();
				});
			}
		}
	}
	_updatePosition() {
		const trigger = this.shadowRoot?.querySelector(".trigger");
		const content = this.shadowRoot?.querySelector(".popup-content");
		if (!trigger || !content) return;
		const rect = trigger.getBoundingClientRect();
		const contentRect = content.getBoundingClientRect();
		let effectivePosition = this.position;
		let effectiveAlign = this.align;
		content.style.top = "";
		content.style.bottom = "";
		content.style.left = "";
		content.style.right = "";
		content.style.removeProperty("--arrow-right");
		content.style.removeProperty("--arrow-left");
		content.style.removeProperty("--arrow-top");
		content.style.removeProperty("--arrow-bottom");
		if (this.position === "left" || this.position === "right") {
			if (this.position === "right") {
				if (rect.right + 6 + contentRect.width > window.innerWidth && rect.left - 6 - contentRect.width >= 0) effectivePosition = "left";
			} else if (rect.left - 6 - contentRect.width < 0 && rect.right + 6 + contentRect.width <= window.innerWidth) effectivePosition = "right";
			if (this.align === "top") {
				if (rect.top + contentRect.height > window.innerHeight && rect.bottom - contentRect.height >= 0) effectiveAlign = "bottom";
			} else if (rect.bottom - contentRect.height < 0 && rect.top + contentRect.height <= window.innerHeight) effectiveAlign = "top";
			if (effectivePosition === "right") {
				content.style.left = `${rect.right + 6}px`;
				content.style.right = "auto";
			} else {
				content.style.right = `${window.innerWidth - rect.left + 6}px`;
				content.style.left = "auto";
			}
			const triggerCenterY = rect.top + rect.height / 2;
			if (effectiveAlign === "top") {
				let topOffset = rect.top - 4;
				if (topOffset + contentRect.height > window.innerHeight) topOffset = window.innerHeight - contentRect.height - 8;
				topOffset = Math.max(8, topOffset);
				content.style.top = `${topOffset}px`;
				content.style.bottom = "auto";
				const arrowTop = triggerCenterY - topOffset - 6;
				content.style.setProperty("--arrow-top", `${Math.max(10, Math.min(contentRect.height - 20, arrowTop))}px`);
			} else {
				let bottomOffset = window.innerHeight - rect.bottom - 4;
				if (bottomOffset + contentRect.height > window.innerHeight) bottomOffset = window.innerHeight - contentRect.height - 8;
				bottomOffset = Math.max(8, bottomOffset);
				content.style.bottom = `${bottomOffset}px`;
				content.style.top = "auto";
				const arrowTop = triggerCenterY - (window.innerHeight - bottomOffset - contentRect.height) - 6;
				content.style.setProperty("--arrow-top", `${Math.max(10, Math.min(contentRect.height - 20, arrowTop))}px`);
			}
		} else {
			if (this.position === "bottom") {
				if (rect.bottom + 8 + contentRect.height > window.innerHeight && rect.top - 8 - contentRect.height >= 0) effectivePosition = "top";
			} else if (rect.top - 8 - contentRect.height < 0 && rect.bottom + 8 + contentRect.height <= window.innerHeight) effectivePosition = "bottom";
			if (this.align === "right") {
				if (rect.right - contentRect.width < 0 && rect.left + contentRect.width <= window.innerWidth) effectiveAlign = "left";
			} else if (rect.left + contentRect.width > window.innerWidth && rect.right - contentRect.width >= 0) effectiveAlign = "right";
			if (effectivePosition === "bottom") {
				content.style.top = `${rect.bottom + 8}px`;
				content.style.bottom = "auto";
			} else {
				content.style.bottom = `${window.innerHeight - rect.top + 8}px`;
				content.style.top = "auto";
			}
			if (effectiveAlign === "right") {
				let rightOffset = window.innerWidth - rect.right;
				if (rightOffset + contentRect.width > window.innerWidth) rightOffset = window.innerWidth - contentRect.width - 8;
				rightOffset = Math.max(8, rightOffset);
				content.style.right = `${rightOffset}px`;
				content.style.left = "auto";
				const triggerCenter = rect.left + rect.width / 2;
				const arrowRight = window.innerWidth - rightOffset - triggerCenter - 6;
				content.style.setProperty("--arrow-right", `${Math.max(10, Math.min(contentRect.width - 20, arrowRight))}px`);
			} else {
				let leftOffset = rect.left;
				if (leftOffset + contentRect.width > window.innerWidth) leftOffset = window.innerWidth - contentRect.width - 8;
				leftOffset = Math.max(8, leftOffset);
				content.style.left = `${leftOffset}px`;
				content.style.right = "auto";
				const arrowLeft = rect.left + rect.width / 2 - leftOffset - 6;
				content.style.setProperty("--arrow-left", `${Math.max(10, Math.min(contentRect.width - 20, arrowLeft))}px`);
			}
		}
		content.classList.remove("position-top", "position-bottom", "position-left", "position-right", "align-left", "align-right", "align-top", "align-bottom");
		content.classList.add(`position-${effectivePosition}`, `align-${effectiveAlign}`);
	}
	connectedCallback() {
		super.connectedCallback();
		window.addEventListener("resize", this._handleResize, { passive: true });
		this.addEventListener("mouseenter", this._handleMouseEnter);
		this.addEventListener("mouseleave", this._handleMouseLeave);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		window.removeEventListener("resize", this._handleResize);
		this.removeEventListener("mouseenter", this._handleMouseEnter);
		this.removeEventListener("mouseleave", this._handleMouseLeave);
		if (this._closeTimeout) {
			clearTimeout(this._closeTimeout);
			this._closeTimeout = null;
		}
	}
	render() {
		return b`
      <div class="trigger" @click=${this.toggle}>
        <slot name="trigger"></slot>
      </div>
      
      <dialog class="popup-dialog" 
        @click=${this._handleDialogClick} 
        @contextmenu=${this._handleDialogClick} 
        @close=${this._handleDialogClose}
        @keydown=${this._handleDialogKeydown}>
        <div class="popup-content align-${this.align} position-${this.position}">
          <slot></slot>
        </div>
      </dialog>
    `;
	}
};
__decorate([n$1({ type: String })], AlpsPopup.prototype, "align", void 0);
__decorate([n$1({ type: String })], AlpsPopup.prototype, "position", void 0);
__decorate([n$1({
	type: String,
	reflect: true
})], AlpsPopup.prototype, "triggerOn", void 0);
__decorate([n$1({
	type: Boolean,
	reflect: true,
	attribute: "open"
})], AlpsPopup.prototype, "openState", void 0);
AlpsPopup = __decorate([t("alps-popup")], AlpsPopup);
//#endregion
//#region ../plugins/caldav/frontend/calendar-event-preview.ts
var CalendarEventPreview = class CalendarEventPreview extends i {
	static {
		this.styles = i$1`
        :host {
            display: block;
            padding: 12px;
            min-width: 280px;
            max-width: 320px;
            white-space: normal;
            cursor: default;
            box-sizing: border-box;
            background: var(--bg-primary, #ffffff);
            border-radius: 8px;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 4px 4px 12px 4px;
        }

        .title-container {
            display: flex;
            gap: 12px;
            align-items: flex-start;
        }

        .color-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-top: 5px;
            flex-shrink: 0;
        }

        .title {
            margin: 0;
            font-size: 16px;
            font-weight: 600;
            color: var(--text-primary, #111827);
            word-break: break-word;
            line-height: 1.4;
        }

        .edit-btn {
            --icon-size: 16px;
            color: var(--text-secondary, #6b7280);
            margin-left: 12px;
            flex-shrink: 0;
        }

        .card {
            background: var(--bg-secondary, #f3f4f6);
            border-radius: 8px;
            padding: 12px;
            margin-bottom: 8px;
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .card:last-child {
            margin-bottom: 0;
        }

        .card-row {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            font-weight: 500;
            color: var(--text-primary, #111827);
        }

        .card-row svg {
            width: 18px;
            height: 18px;
            fill: currentColor;
            color: var(--text-muted, #9ca3af);
        }

        .card-text {
            font-size: 13px;
            color: var(--text-secondary, #4b5563);
            margin-left: 22px;
            line-height: 1.4;
        }

        .card-label {
            font-size: 11px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: var(--text-muted, #9ca3af);
            margin-bottom: 2px;
        }

        .description-text {
            font-size: 13px;
            color: var(--text-primary, #111827);
            white-space: pre-wrap;
            line-height: 1.5;
        }

        .date-primary {
            font-size: 14px;
            font-weight: 500;
            color: var(--text-primary, #111827);
        }

        .date-secondary {
            font-size: 13px;
            color: var(--text-secondary, #4b5563);
        }
    `;
	}
	formatEventDate(dateStr, endStr) {
		const isAllDay = isAllDayEvent(dateStr, endStr);
		let d;
		if (isAllDay) d = /* @__PURE__ */ new Date(dateStr.split("T")[0] + "T00:00:00");
		else d = new Date(dateStr);
		return `${this.i18nStore?.t(`calendar.days.${d.getDay()}`)}, ${this.i18nStore?.t(`calendar.monthsShort.${d.getMonth()}`)} ${d.getDate()}, ${d.getFullYear()}`;
	}
	formatEventTimeRange(startStr, endStr) {
		const s = new Date(startStr);
		const e = new Date(endStr);
		if (isAllDayEvent(startStr, endStr)) return this.i18nStore?.t("calendar.allDay");
		const timeOptions = {
			hour: "numeric",
			minute: "2-digit"
		};
		if (s.toDateString() === e.toDateString()) return `${s.toLocaleTimeString(void 0, timeOptions)} - ${e.toLocaleTimeString(void 0, timeOptions)}`;
		return `${s.toLocaleTimeString(void 0, timeOptions)} - ${this.i18nStore?.t(`calendar.monthsShort.${e.getMonth()}`)} ${e.getDate()} ${e.toLocaleTimeString(void 0, timeOptions)}`;
	}
	handleEdit(ev) {
		ev.stopPropagation();
		const popup = this.closest("alps-popup");
		if (popup) popup.close();
		setTimeout(() => {
			this.dispatchEvent(new CustomEvent("edit-event", {
				detail: { event: this.event },
				bubbles: true,
				composed: true
			}));
		}, 10);
	}
	handleDelete(ev) {
		ev.stopPropagation();
		const popup = this.closest("alps-popup");
		if (popup) popup.close();
		setTimeout(() => {
			this.dispatchEvent(new CustomEvent("delete-event", {
				detail: { event: this.event },
				bubbles: true,
				composed: true
			}));
		}, 10);
	}
	render() {
		if (!this.event) return b``;
		const e = this.event;
		return b`
            <div class="header">
                <div class="title-container">
                    <div class="color-dot" style="background-color: ${e.color || "var(--accent-color, #2563eb)"}"></div>
                    <h3 class="title">${e.summary || this.i18nStore?.t("calendar.noTitle")}</h3>
                </div>
                <div style="display: flex; gap: 4px;">
                    <alps-icon-btn class="edit-btn" icon="pen" title=${this.i18nStore?.t("calendar.editEvent")} @click=${this.handleEdit}></alps-icon-btn>
                    <alps-icon-btn class="delete-btn" icon="trash" title=${this.i18nStore?.t("calendar.deleteEvent")} @click=${this.handleDelete} style="color: var(--error, #ef4444);"></alps-icon-btn>
                </div>
            </div>

            <div class="card">
                <div class="date-primary">${this.formatEventDate(e.start, e.end)}</div>
                <div class="date-secondary">${this.formatEventTimeRange(e.start, e.end)}</div>
            </div>

            ${e.location ? b`
            <div class="card">
                <div class="card-label">${this.i18nStore?.t("calendar.location")}</div>
                <div class="description-text">${e.location}</div>
            </div>` : ""}

            ${e.description ? b`
            <div class="card">
                <div class="card-label">${this.i18nStore?.t("calendar.notes")}</div>
                <div class="description-text">${e.description}</div>
            </div>` : ""}
        `;
	}
};
__decorate([c({ context: i18nContext })], CalendarEventPreview.prototype, "i18nStore", void 0);
__decorate([n$1({ type: Object })], CalendarEventPreview.prototype, "event", void 0);
CalendarEventPreview = __decorate([t("calendar-event-preview")], CalendarEventPreview);
//#endregion
//#region ../plugins/caldav/frontend/calendar-time-grid.ts
var CalendarTimeGrid = class CalendarTimeGrid extends i {
	constructor(..._args) {
		super(..._args);
		this.days = [];
		this.events = [];
		this.scrolled = false;
	}
	static {
		this.styles = i$1`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            background-color: var(--bg-primary, #ffffff);
        }

        .time-grid-container {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .header-wrapper {
            position: sticky;
            top: 0;
            z-index: 10;
            background: var(--bg-primary, #ffffff);
            transition: box-shadow 0.2s ease;
        }

        .header-wrapper.scrolled {
            box-shadow: rgba(95, 95, 95, 0.1) 0 4px 4px -2px;
        }

        .time-grid-header {
            display: flex;
            border-bottom: 1px solid var(--border-color, #e5e7eb);
            background: var(--bg-primary, #ffffff);
        }

        .time-axis-spacer {
            width: 60px;
            flex-shrink: 0;
            box-sizing: border-box;
            border-right: 1px solid var(--border-color, #e5e7eb);
        }

        .time-grid-days {
            flex: 1;
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: minmax(0, 1fr);
        }

        .time-grid-day-header {
            padding: 8px;
            text-align: center;
            box-sizing: border-box;
            border-right: 1px solid var(--border-color, #e5e7eb);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }
        .time-grid-day-header:last-child { border-right: none; }

        .time-grid-day-name {
            font-size: 11px;
            font-weight: 500;
            color: var(--text-secondary, #4b5563);
            text-transform: uppercase;
        }
        .time-grid-day-number {
            font-size: 20px;
            font-weight: 400;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            color: var(--text-primary, #111827);
        }
        .time-grid-day-number.today {
            background-color: var(--error, #ef4444);
            color: #ffffff;
        }

        .all-day-row {
            display: flex;
            border-bottom: 1px solid var(--border-color, #e5e7eb);
            min-height: 24px;
            background: var(--bg-primary, #ffffff);
        }

        .all-day-label {
            width: 60px;
            flex-shrink: 0;
            font-size: 11px;
            color: var(--text-muted, #6b7280);
            padding: 4px 8px;
            box-sizing: border-box;
            text-align: right;
            border-right: 1px solid var(--border-color, #e5e7eb);
        }

        .all-day-content {
            flex: 1;
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: minmax(0, 1fr);
        }
        .all-day-cell {
            border-right: 1px solid var(--border-color, #e5e7eb);
            padding: 2px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            gap: 2px;
        }
        .all-day-cell:last-child { border-right: none; }

        .time-grid-scroll {
            flex: 1;
            overflow-y: auto;
            overflow-x: hidden;
            position: relative;
        }

        .time-grid-body {
            display: flex;
            position: relative;
            min-height: 1152px; /* 24 hours * 48px */
            padding-top: 12px;
            padding-bottom: 24px;
        }

        .time-axis {
            width: 60px;
            flex-shrink: 0;
            box-sizing: border-box;
            border-right: 1px solid var(--border-color, #e5e7eb);
            position: relative;
        }

        .time-label {
            position: absolute;
            right: 8px;
            font-size: 11px;
            color: var(--text-muted, #6b7280);
            transform: translateY(-50%);
        }

        .time-grid-columns {
            flex: 1;
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: minmax(0, 1fr);
            position: relative;
            background-image: linear-gradient(to bottom, var(--border-color, #e5e7eb) 1px, transparent 1px);
            background-size: 100% 48px; /* 48px per hour */
        }

        .time-column {
            border-right: 1px solid var(--border-color, #e5e7eb);
            position: relative;
        }
        .time-column:last-child { border-right: none; }

        alps-popup.time-event-popup {
            position: absolute;
            left: 2px;
            right: 2px;
            display: block;
            z-index: 5;
        }
        .time-event {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: rgba(37, 99, 235, 0.9);
            color: #ffffff;
            border-radius: 4px;
            padding: 4px 6px;
            font-size: 11px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            cursor: pointer;
            box-sizing: border-box;
        }
        .time-event:hover {
            background-color: var(--accent-color, #2563eb);
        }
        .time-event-title {
            font-weight: 500;
            margin-bottom: 2px;
        }

        .event-chip {
            background-color: #f59e0b;
            color: #ffffff;
            font-size: 11px;
            padding: 2px 6px;
            border-radius: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: pointer;
            box-shadow: 0 1px 2px rgba(0,0,0,0.1);
            opacity: 0.9;
        }
        .event-chip:hover {
            opacity: 1;
        }
    `;
	}
	getEventsForDate(date, includeAllDay) {
		if (!this.events) return [];
		return this.events.filter((e) => {
			const isAllDay = isAllDayEvent(e.start, e.end);
			if (includeAllDay !== isAllDay) return false;
			const dayStart = new Date(date);
			dayStart.setHours(0, 0, 0, 0);
			const dayEnd = new Date(date);
			dayEnd.setHours(23, 59, 59, 999);
			if (isAllDay) {
				const startStr = e.start.split("T")[0];
				const endStr = e.end.split("T")[0];
				const startD = /* @__PURE__ */ new Date(startStr + "T00:00:00");
				const endD = /* @__PURE__ */ new Date(endStr + "T00:00:00");
				return startD <= dayStart && endD > dayStart;
			} else {
				const start = new Date(e.start);
				const end = new Date(e.end);
				if (end.getTime() === dayStart.getTime() && start.getTime() < end.getTime()) return false;
				return start <= dayEnd && end >= dayStart;
			}
		});
	}
	handleColumnClick(e, date) {
		const rect = e.currentTarget.getBoundingClientRect();
		const y = e.clientY - rect.top;
		const hour = Math.floor(y / 48);
		const newDate = new Date(date);
		newDate.setHours(hour, 0, 0, 0);
		this.dispatchEvent(new CustomEvent("create-event", {
			detail: { date: newDate },
			bubbles: true,
			composed: true
		}));
	}
	handleAllDayCellClick(date) {
		const newDate = new Date(date);
		newDate.setHours(0, 0, 0, 0);
		this.dispatchEvent(new CustomEvent("create-event", {
			detail: { date: newDate },
			bubbles: true,
			composed: true
		}));
	}
	handleScroll(e) {
		const target = e.target;
		this.scrolled = target.scrollTop > 0;
	}
	render() {
		const hours = Array.from({ length: 24 }, (_, i) => i);
		const today = /* @__PURE__ */ new Date();
		today.setHours(0, 0, 0, 0);
		return b`
            <div class="time-grid-container">
                <div class="time-grid-scroll" @scroll=${this.handleScroll}>
                    <div class="header-wrapper ${this.scrolled ? "scrolled" : ""}">
                        <div class="time-grid-header">
                            <div class="time-axis-spacer"></div>
                            <div class="time-grid-days">
                                ${this.days.map((d) => {
			const isToday = d.getTime() === today.getTime();
			return b`
                                        <div class="time-grid-day-header">
                                            <span class="time-grid-day-name">${this.i18nStore?.t(`calendar.daysShort.${d.getDay()}`)}</span>
                                            <span class="time-grid-day-number ${isToday ? "today" : ""}">${d.getDate()}</span>
                                        </div>
                                    `;
		})}
                            </div>
                        </div>

                        <div class="all-day-row">
                            <div class="all-day-label">${this.i18nStore?.t("calendar.allDay")?.toLowerCase()}</div>
                            <div class="all-day-content">
                                ${this.days.map((d) => {
			return b`
                                        <div class="all-day-cell" @click=${() => this.handleAllDayCellClick(d)} style="cursor: pointer;">
                                            ${this.getEventsForDate(d, true).map((e) => b`
                                                <alps-popup align="left" position="bottom" style="width: 100%; display: block;" @click=${(ev) => ev.stopPropagation()}>
                                                    <div slot="trigger"
                                                        class="event-chip" 
                                                        style=${e.color ? `background-color: ${e.color}` : ""}
                                                        title="${e.summary || this.i18nStore?.t("calendar.noTitle")}">
                                                        ${e.summary || this.i18nStore?.t("calendar.noTitle")}
                                                    </div>
                                                    <calendar-event-preview .event=${e}></calendar-event-preview>
                                                </alps-popup>
                                            `)}
                                        </div>
                                    `;
		})}
                            </div>
                        </div>
                    </div>

                    <div class="time-grid-body">
                        <div class="time-axis">
                            ${hours.map((h) => b`
                                <div class="time-label" style="top: ${h * 48}px">${h.toString().padStart(2, "0")}:00</div>
                            `)}
                        </div>
                        <div class="time-grid-columns">
                            ${this.days.map((d) => {
			const timedEvents = this.getEventsForDate(d, false);
			const dayStart = new Date(d);
			dayStart.setHours(0, 0, 0, 0);
			const dayEnd = new Date(d);
			dayEnd.setHours(23, 59, 59, 999);
			return b`
                                    <div class="time-column" @click=${(e) => this.handleColumnClick(e, d)} style="cursor: pointer;">
                                        ${timedEvents.map((e) => {
				const start = new Date(e.start);
				const end = new Date(e.end);
				const renderStart = start < dayStart ? dayStart : start;
				const renderEnd = end > dayEnd ? dayEnd : end;
				const top = renderStart.getHours() * 48 + renderStart.getMinutes() / 60 * 48;
				let height = (renderEnd.getTime() - renderStart.getTime()) / 1e3 / 60 / 60 * 48;
				if (height < 20) height = 20;
				if (top + height > 1152) height = 1152 - top;
				return b`
                                                <alps-popup 
                                                    class="time-event-popup"
                                                    align="left" position="bottom" 
                                                    style="top: ${top}px; height: ${height}px;"
                                                    @click=${(ev) => ev.stopPropagation()}>
                                                    <div slot="trigger"
                                                        class="time-event" 
                                                        style="${e.color ? `background-color: ${e.color}; border-color: ${e.color};` : ""}" 
                                                        title="${e.summary || this.i18nStore?.t("calendar.noTitle")}">
                                                        <div class="time-event-title">${e.summary || this.i18nStore?.t("calendar.noTitle")}</div>
                                                    </div>
                                                    <calendar-event-preview .event=${e}></calendar-event-preview>
                                                </alps-popup>
                                            `;
			})}
                                    </div>
                                `;
		})}
                        </div>
                    </div>
                </div>
            </div>
        `;
	}
};
__decorate([c({ context: i18nContext })], CalendarTimeGrid.prototype, "i18nStore", void 0);
__decorate([n$1({ type: Array })], CalendarTimeGrid.prototype, "days", void 0);
__decorate([n$1({ type: Array })], CalendarTimeGrid.prototype, "events", void 0);
__decorate([r()], CalendarTimeGrid.prototype, "scrolled", void 0);
CalendarTimeGrid = __decorate([t("calendar-time-grid")], CalendarTimeGrid);
//#endregion
//#region ../plugins/caldav/frontend/calendar-day-view.ts
var CalendarDayView = class CalendarDayView extends i {
	constructor(..._args) {
		super(..._args);
		this.events = [];
	}
	static {
		this.styles = i$1`
        :host {
            display: flex;
            height: 100%;
            width: 100%;
        }
    `;
	}
	render() {
		return b`
            <calendar-time-grid 
                .days=${[this.date]} 
                .events=${this.events}
            ></calendar-time-grid>
        `;
	}
};
__decorate([n$1({ type: Object })], CalendarDayView.prototype, "date", void 0);
__decorate([n$1({ type: Array })], CalendarDayView.prototype, "events", void 0);
CalendarDayView = __decorate([t("calendar-day-view")], CalendarDayView);
//#endregion
//#region ../plugins/caldav/frontend/calendar-week-view.ts
var CalendarWeekView = class CalendarWeekView extends i {
	constructor(..._args) {
		super(..._args);
		this.events = [];
	}
	static {
		this.styles = i$1`
        :host {
            display: flex;
            height: 100%;
            width: 100%;
        }
    `;
	}
	getWeekDays() {
		const days = [];
		const current = new Date(this.date);
		let dayOfWeek = current.getDay();
		if (dayOfWeek === 0) dayOfWeek = 7;
		current.setDate(current.getDate() - (dayOfWeek - 1));
		for (let i = 0; i < 7; i++) {
			days.push(new Date(current));
			current.setDate(current.getDate() + 1);
		}
		return days;
	}
	render() {
		return b`
            <calendar-time-grid 
                .days=${this.getWeekDays()} 
                .events=${this.events}
            ></calendar-time-grid>
        `;
	}
};
__decorate([n$1({ type: Object })], CalendarWeekView.prototype, "date", void 0);
__decorate([n$1({ type: Array })], CalendarWeekView.prototype, "events", void 0);
CalendarWeekView = __decorate([t("calendar-week-view")], CalendarWeekView);
//#endregion
//#region ../plugins/caldav/frontend/calendar-month-view.ts
var CalendarMonthView = class CalendarMonthView extends i {
	constructor(..._args) {
		super(..._args);
		this.events = [];
	}
	static {
		this.styles = i$1`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            background-color: var(--bg-primary, #ffffff);
        }

        .month-view {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .month-header {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            border-bottom: 1px solid var(--border-color, #e5e7eb);
            background: var(--bg-primary, #ffffff);
        }

        .month-header-cell {
            text-align: right;
            padding: 8px 12px;
            font-size: 13px;
            font-weight: 500;
            color: var(--text-secondary, #4b5563);
            border-right: 1px solid var(--border-color, #e5e7eb);
        }
        .month-header-cell:last-child { border-right: none; }

        .month-grid {
            flex: 1;
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            grid-auto-rows: 1fr;
            background: var(--border-color, #e5e7eb);
            gap: 1px;
            border-bottom: 1px solid var(--border-color, #e5e7eb);
        }

        .month-cell {
            background-color: var(--bg-primary, #ffffff);
            padding: 4px;
            display: flex;
            flex-direction: column;
            gap: 2px;
            overflow: hidden;
        }
        .month-cell.other-month {
            background-color: var(--bg-secondary, #f9fafb);
            opacity: 0.7;
        }

        .date-number {
            align-self: flex-end;
            font-size: 13px;
            font-weight: 500;
            margin-bottom: 4px;
            padding: 2px 6px;
            border-radius: 12px;
        }
        .date-number.today {
            background-color: var(--error, #ef4444);
            color: #ffffff;
        }

        .event-chip {
            background-color: var(--accent-color, #2563eb);
            color: #ffffff;
            font-size: 11px;
            padding: 2px 6px;
            border-radius: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            cursor: pointer;
            box-shadow: 0 1px 2px rgba(0,0,0,0.1);
            opacity: 0.9;
        }
        .event-chip:hover {
            opacity: 1;
        }
        .event-chip.all-day {
            background-color: #f59e0b;
        }
    `;
	}
	getMonthGrid() {
		const year = this.date.getFullYear();
		const month = this.date.getMonth();
		const firstDay = new Date(year, month, 1);
		const lastDay = new Date(year, month + 1, 0);
		const grid = [];
		let current = new Date(firstDay);
		let dayOfWeek = current.getDay();
		if (dayOfWeek === 0) dayOfWeek = 7;
		current.setDate(current.getDate() - (dayOfWeek - 1));
		while (current <= lastDay || grid.length % 7 !== 0) {
			grid.push(new Date(current));
			current.setDate(current.getDate() + 1);
		}
		return grid;
	}
	getEventsForDate(date, includeAllDay) {
		if (!this.events) return [];
		return this.events.filter((e) => {
			const isAllDay = isAllDayEvent(e.start, e.end);
			if (includeAllDay !== isAllDay) return false;
			const dayStart = new Date(date);
			dayStart.setHours(0, 0, 0, 0);
			const dayEnd = new Date(date);
			dayEnd.setHours(23, 59, 59, 999);
			if (isAllDay) {
				const startStr = e.start.split("T")[0];
				const endStr = e.end.split("T")[0];
				const startD = /* @__PURE__ */ new Date(startStr + "T00:00:00");
				const endD = /* @__PURE__ */ new Date(endStr + "T00:00:00");
				return startD <= dayStart && endD > dayStart;
			} else {
				const start = new Date(e.start);
				const end = new Date(e.end);
				if (end.getTime() === dayStart.getTime() && start.getTime() < end.getTime()) return false;
				return start <= dayEnd && end >= dayStart;
			}
		});
	}
	handleCellClick(date) {
		this.dispatchEvent(new CustomEvent("create-event", {
			detail: { date },
			bubbles: true,
			composed: true
		}));
	}
	render() {
		const grid = this.getMonthGrid();
		const dayNames = Array.from({ length: 7 }, (_, i) => {
			const d = new Date(2021, 10, i + 1);
			return this.i18nStore?.t(`calendar.daysShort.${d.getDay()}`);
		});
		const today = /* @__PURE__ */ new Date();
		today.setHours(0, 0, 0, 0);
		return b`
            <div class="month-view">
                <div class="month-header">
                    ${dayNames.map((n) => b`<div class="month-header-cell">${n}</div>`)}
                </div>
                <div class="month-grid">
                    ${grid.map((d) => {
			const isOtherMonth = d.getMonth() !== this.date.getMonth();
			const isToday = d.getTime() === today.getTime();
			const dayEvents = this.getEventsForDate(d, true).concat(this.getEventsForDate(d, false));
			return b`
                            <div class="month-cell ${isOtherMonth ? "other-month" : ""}" @click=${() => this.handleCellClick(d)} style="cursor: pointer;">
                                <div class="date-number ${isToday ? "today" : ""}">${d.getDate()}</div>
                                ${dayEvents.slice(0, 4).map((e) => b`
                                    <alps-popup align="left" position="bottom" style="width: 100%; display: block;" @click=${(ev) => ev.stopPropagation()}>
                                        <div slot="trigger"
                                            class="event-chip ${isAllDayEvent(e.start, e.end) ? "all-day" : ""}" 
                                            style=${e.color ? `background-color: ${e.color}` : ""}
                                            title="${e.summary || this.i18nStore?.t("calendar.noTitle")}">
                                            ${e.summary || this.i18nStore?.t("calendar.noTitle")}
                                        </div>
                                        <calendar-event-preview .event=${e}></calendar-event-preview>
                                    </alps-popup>
                                `)}
                                ${dayEvents.length > 4 ? b`<div style="font-size: 11px; color: var(--text-muted); padding-left: 4px;">${this.i18nStore?.t("calendar.moreEvents", { count: dayEvents.length - 4 })}</div>` : ""}
                            </div>
                        `;
		})}
                </div>
            </div>
        `;
	}
};
__decorate([c({ context: i18nContext })], CalendarMonthView.prototype, "i18nStore", void 0);
__decorate([n$1({ type: Object })], CalendarMonthView.prototype, "date", void 0);
__decorate([n$1({ type: Array })], CalendarMonthView.prototype, "events", void 0);
CalendarMonthView = __decorate([t("calendar-month-view")], CalendarMonthView);
//#endregion
//#region ../plugins/caldav/frontend/calendar-year-view.ts
var CalendarYearView = class CalendarYearView extends i {
	constructor(..._args) {
		super(..._args);
		this.events = [];
	}
	static {
		this.styles = i$1`
        :host {
            display: flex;
            height: 100%;
            width: 100%;
            background-color: var(--bg-primary, #ffffff);
        }

        .year-view {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-auto-rows: minmax(240px, 1fr);
            gap: 48px 36px;
            padding: 32px 64px;
            overflow-y: auto;
            height: 100%;
            width: 100%;
            box-sizing: border-box;

            /* Fluid typography for the mini-months inside the year view */
            --mini-month-font-size: clamp(12px, 1.2vw, 18px);
            --mini-month-title-size: clamp(16px, 1.5vw, 24px);
            --mini-month-day-size: clamp(11px, 1vw, 16px);
        }

        calendar-mini-month {
            padding: 12px;
            box-sizing: border-box;
        }

        @media (min-width: 600px) {
            .year-view { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 900px) {
            .year-view { grid-template-columns: repeat(3, 1fr); }
        }

        @media (min-width: 1200px) {
            .year-view { grid-template-columns: repeat(4, 1fr); }
        }
    `;
	}
	render() {
		return b`
            <div class="year-view">
                ${Array.from({ length: 12 }, (_, i) => i).map((month) => b`
                    <calendar-mini-month 
                        .year=${this.year} 
                        .month=${month} 
                        .events=${this.events}
                        .showTitle=${true}
                    ></calendar-mini-month>
                `)}
            </div>
        `;
	}
};
__decorate([n$1({ type: Number })], CalendarYearView.prototype, "year", void 0);
__decorate([n$1({ type: Array })], CalendarYearView.prototype, "events", void 0);
CalendarYearView = __decorate([t("calendar-year-view")], CalendarYearView);
//#endregion
//#region ../plugins/caldav/frontend/calendar-list-view.ts
var CalendarListView = class CalendarListView extends i {
	constructor(..._args) {
		super(..._args);
		this.events = [];
	}
	static {
		this.styles = i$1`
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            overflow-y: auto;
            background-color: var(--bg-primary, #ffffff);
            padding: 16px;
            box-sizing: border-box;
        }

        .list-container {
            max-width: 800px;
            margin: 0 auto;
            width: 100%;
        }

        .no-results {
            text-align: center;
            color: var(--text-muted, #6b7280);
            padding: 40px;
            font-size: 16px;
        }

        .event-item {
            display: flex;
            padding: 16px;
            border-bottom: 1px solid var(--border-color, #e5e7eb);
            cursor: pointer;
            transition: background-color 0.15s;
            align-items: flex-start;
            gap: 16px;
        }

        .event-item:hover {
            background-color: var(--bg-tertiary, #f3f4f6);
        }

        .event-date {
            width: 100px;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
        }

        .date-day {
            font-size: 18px;
            font-weight: 600;
            color: var(--text-primary);
        }

        .date-month {
            font-size: 14px;
            color: var(--text-secondary);
        }

        .date-time {
            font-size: 12px;
            color: var(--text-muted);
            margin-top: 4px;
        }

        .event-details {
            flex: 1;
            min-width: 0;
        }

        .event-title {
            font-size: 16px;
            font-weight: 500;
            color: var(--text-primary);
            margin: 0 0 4px 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .color-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            flex-shrink: 0;
        }

        .event-location {
            font-size: 14px;
            color: var(--text-secondary);
            display: flex;
            align-items: center;
            gap: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    `;
	}
	render() {
		if (this.events.length === 0) return b`
                <div class="list-container">
                    <div class="no-results">${this.i18nStore?.t("calendar.noResults")}</div>
                </div>
            `;
		return b`
            <div class="list-container">
                ${[...this.events].sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()).map((event) => {
			const startDate = new Date(event.start);
			const isAllDay = event.start.length === 10 || event.end.length === 10;
			return b`
                        <alps-popup align="left" position="bottom" style="width: 100%; display: block;" @click=${(ev) => ev.stopPropagation()}>
                            <div slot="trigger" class="event-item">
                                <div class="event-date">
                                    <span class="date-day">${startDate.getDate()}</span>
                                    <span class="date-month">${this.i18nStore?.t(`calendar.monthsShort.${startDate.getMonth()}`)} ${startDate.getFullYear()}</span>
                                    <span class="date-time">
                                        ${isAllDay ? this.i18nStore?.t("calendar.allDay") : startDate.toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit"
			})}
                                    </span>
                                </div>
                                <div class="event-details">
                                    <h3 class="event-title">
                                        <div class="color-dot" style="background-color: ${event.color || "#2563eb"}"></div>
                                        ${event.summary || this.i18nStore?.t("calendar.noTitle")}
                                    </h3>
                                    ${event.location ? b`
                                        <div class="event-location">
                                            📍 ${event.location}
                                        </div>
                                    ` : ""}
                                </div>
                            </div>
                            <calendar-event-preview .event=${event}></calendar-event-preview>
                        </alps-popup>
                    `;
		})}
            </div>
        `;
	}
};
__decorate([c({ context: i18nContext })], CalendarListView.prototype, "i18nStore", void 0);
__decorate([n$1({ type: Array })], CalendarListView.prototype, "events", void 0);
CalendarListView = __decorate([t("calendar-list-view")], CalendarListView);
//#endregion
//#region ../plugins/caldav/frontend/alps-sidebar-calendar.ts
var AlpsSidebarCalendar = class AlpsSidebarCalendar extends i {
	constructor(..._args) {
		super(..._args);
		this.selectedDate = /* @__PURE__ */ new Date();
		this.events = [];
		this.viewDate = /* @__PURE__ */ new Date();
	}
	static {
		this.styles = i$1`
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        .mini-calendar-wrapper {
            margin-top: auto;
            min-height: 220px;
            display: flex;
            flex-direction: column;
        }

        .mini-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
            font-weight: 500;
            font-size: 14px;
        }

        alps-icon-btn {
            --btn-padding: 4px;
        }
    `;
	}
	updated(changedProperties) {
		if (changedProperties.has("selectedDate") && this.selectedDate) this.viewDate = new Date(this.selectedDate);
	}
	changeMonth(delta) {
		const newDate = new Date(this.viewDate);
		newDate.setMonth(newDate.getMonth() + delta);
		this.viewDate = newDate;
	}
	render() {
		const year = this.viewDate.getFullYear();
		const month = this.viewDate.getMonth();
		return b`
            <div class="mini-calendar-wrapper">
                <div class="mini-header">
                    <alps-icon-btn icon="caretLeft" @click=${() => this.changeMonth(-1)}></alps-icon-btn>
                    <span>${this.i18nStore?.t(`calendar.months.${month}`)} ${year}</span>
                    <alps-icon-btn icon="caretRight" @click=${() => this.changeMonth(1)}></alps-icon-btn>
                </div>
                <calendar-mini-month
                    .year=${year}
                    .month=${month}
                    .events=${this.events}
                    .currentDate=${this.selectedDate}
                    @date-selected=${(e) => {
			this.dispatchEvent(new CustomEvent("date-selected", {
				detail: e.detail,
				bubbles: true,
				composed: true
			}));
		}}
                ></calendar-mini-month>
            </div>
        `;
	}
};
__decorate([c({ context: i18nContext })], AlpsSidebarCalendar.prototype, "i18nStore", void 0);
__decorate([n$1({ type: Object })], AlpsSidebarCalendar.prototype, "selectedDate", void 0);
__decorate([n$1({ type: Array })], AlpsSidebarCalendar.prototype, "events", void 0);
__decorate([r()], AlpsSidebarCalendar.prototype, "viewDate", void 0);
AlpsSidebarCalendar = __decorate([t("alps-sidebar-calendar")], AlpsSidebarCalendar);
//#endregion
//#region src/components/alps-nav-buttons.ts
var AlpsNavButtons = class AlpsNavButtons extends i {
	constructor(..._args) {
		super(..._args);
		this.label = "Today";
	}
	static {
		this.styles = i$1`
        :host {
            display: inline-flex;
        }

        .nav-buttons {
            display: flex;
            align-items: center;
        }

        .nav-buttons button {
            background: var(--bg-primary, #ffffff);
            border: 1px solid var(--border-color, #e5e7eb);
            padding: 6px 12px;
            cursor: pointer;
            font-size: 13px;
            font-weight: 500;
            color: var(--text-primary, #111827);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 30px;
            box-sizing: border-box;
            transition: background-color 0.2s;
        }

        .nav-buttons button svg {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }

        .nav-buttons button:first-child {
            border-radius: 6px 0 0 6px;
        }
        
        .nav-buttons button:last-child {
            border-radius: 0 6px 6px 0;
            border-left: none;
        }
        
        .nav-buttons button:nth-child(2) {
            border-left: none;
            padding-left: 16px;
            padding-right: 16px;
        }

        @media (hover: hover) {
            .nav-buttons button:hover {
                background-color: var(--bg-secondary, #f3f4f6);
            }
        }
    `;
	}
	handlePrevious() {
		this.dispatchEvent(new CustomEvent("previous", {
			bubbles: true,
			composed: true
		}));
	}
	handleNext() {
		this.dispatchEvent(new CustomEvent("next", {
			bubbles: true,
			composed: true
		}));
	}
	handleCenter() {
		this.dispatchEvent(new CustomEvent("center", {
			bubbles: true,
			composed: true
		}));
	}
	render() {
		return b`
            <div class="nav-buttons">
                <button @click=${this.handlePrevious} aria-label="Previous">
                    ${renderIcon("caretLeft")}
                </button>
                <button @click=${this.handleCenter}>
                    ${this.label}
                </button>
                <button @click=${this.handleNext} aria-label="Next">
                    ${renderIcon("caretRight")}
                </button>
            </div>
        `;
	}
};
__decorate([n$1({ type: String })], AlpsNavButtons.prototype, "label", void 0);
AlpsNavButtons = __decorate([t("alps-nav-buttons")], AlpsNavButtons);
//#endregion
//#region src/components/ui-prompt.ts
var UIPrompt = class UIPrompt extends i {
	constructor(..._args) {
		super(..._args);
		this.title = "Prompt";
		this.fields = [];
		this.confirmText = "Apply";
		this.cancelText = "Cancel";
		this.values = {};
	}
	static {
		this.styles = [modalButtonStyles, i$1`
      .field-group {
        margin-bottom: 16px;
      }
      .field-group:last-child {
        margin-bottom: 0;
      }
      .field-label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: var(--text-primary, #111827);
      }
      .field-input {
        margin-top: 8px;
      }
    `];
	}
	willUpdate(changedProperties) {
		if (changedProperties.has("fields")) {
			const initialValues = {};
			for (const f of this.fields) initialValues[f.id] = f.value || "";
			this.values = initialValues;
		}
	}
	firstUpdated() {
		setTimeout(() => {
			const inputToFocus = this.shadowRoot?.querySelector("alps-input[autofocus]");
			if (inputToFocus && typeof inputToFocus.focus === "function") inputToFocus.focus();
			else {
				const firstInput = this.shadowRoot?.querySelector("alps-input");
				if (firstInput && typeof firstInput.focus === "function") firstInput.focus();
			}
		}, 50);
	}
	_handleInput(e, id) {
		const el = e.target;
		this.values = {
			...this.values,
			[id]: el.value
		};
	}
	_handleKeyDown(e) {
		if (e.key === "Enter") {
			e.preventDefault();
			this._handleSubmit();
		}
	}
	_handleCancel() {
		this.dispatchEvent(new CustomEvent("cancel", {
			bubbles: true,
			composed: true
		}));
	}
	_handleSubmit() {
		this.dispatchEvent(new CustomEvent("submit", {
			detail: this.values,
			bubbles: true,
			composed: true
		}));
	}
	render() {
		return b`
      <ui-modal 
        .title=${this.title}
        @cancel=${this._handleCancel}>
        
        <div class="prompt-form">
          ${this.fields.map((f) => b`
            <div class="field-group">
              <label class="field-label" for=${f.id}>${f.label}</label>
              <alps-input 
                inputId=${f.id}
                class="field-input"
                type=${f.type || "text"}
                placeholder=${f.placeholder || ""}
                .value=${this.values[f.id] || ""}
                ?autofocus=${f.autofocus}
                @input=${(e) => this._handleInput(e, f.id)}
                @keydown=${this._handleKeyDown}
              ></alps-input>
            </div>
          `)}
        </div>
        
        <alps-button slot="actions" variant="text" @click=${this._handleCancel}>${this.cancelText}</alps-button>
        <alps-button slot="actions" variant="normal" @click=${this._handleSubmit}>${this.confirmText}</alps-button>
      </ui-modal>
    `;
	}
};
__decorate([n$1({ type: String })], UIPrompt.prototype, "title", void 0);
__decorate([n$1({ type: Array })], UIPrompt.prototype, "fields", void 0);
__decorate([n$1({ type: String })], UIPrompt.prototype, "confirmText", void 0);
__decorate([n$1({ type: String })], UIPrompt.prototype, "cancelText", void 0);
__decorate([r()], UIPrompt.prototype, "values", void 0);
UIPrompt = __decorate([t("ui-prompt")], UIPrompt);
//#endregion
//#region src/components/ui-confirm.ts
var UIConfirm = class UIConfirm extends i {
	constructor(..._args) {
		super(..._args);
		this.title = "Confirm";
		this.message = "Are you sure?";
		this.confirmText = "Confirm";
		this.cancelText = "Cancel";
		this.isDanger = false;
		this.dismissible = false;
	}
	static {
		this.styles = [modalButtonStyles];
	}
	_handleCancel(e) {
		e.stopPropagation();
		this.dispatchEvent(new CustomEvent("cancel", {
			bubbles: true,
			composed: true
		}));
	}
	_handleSecondary(e) {
		e.stopPropagation();
		this.dispatchEvent(new CustomEvent("secondary", {
			bubbles: true,
			composed: true
		}));
	}
	_handleConfirm(e) {
		e.stopPropagation();
		this.dispatchEvent(new CustomEvent("confirm", {
			bubbles: true,
			composed: true
		}));
	}
	render() {
		return b`
      <ui-modal 
        .title=${this.title}
        .isDanger=${this.isDanger}
        .dismissible=${this.dismissible}
        @cancel=${this._handleCancel}
      >
        <slot>${this.message}</slot>
        <alps-button slot="actions" variant="text" @click=${this._handleCancel}>${this.cancelText}</alps-button>
        ${this.secondaryText ? b`<alps-button slot="actions" variant="text" @click=${this._handleSecondary}>${this.secondaryText}</alps-button>` : ""}
        <alps-button slot="actions" variant=${this.isDanger ? "danger" : "normal"} @click=${this._handleConfirm}>
          ${this.confirmText}
        </alps-button>
      </ui-modal>
    `;
	}
};
__decorate([n$1({ type: String })], UIConfirm.prototype, "title", void 0);
__decorate([n$1({ type: String })], UIConfirm.prototype, "message", void 0);
__decorate([n$1({ type: String })], UIConfirm.prototype, "confirmText", void 0);
__decorate([n$1({ type: String })], UIConfirm.prototype, "cancelText", void 0);
__decorate([n$1({ type: String })], UIConfirm.prototype, "secondaryText", void 0);
__decorate([n$1({ type: Boolean })], UIConfirm.prototype, "isDanger", void 0);
__decorate([n$1({ type: Boolean })], UIConfirm.prototype, "dismissible", void 0);
UIConfirm = __decorate([t("ui-confirm")], UIConfirm);
//#endregion
//#region ../plugins/caldav/frontend/calendar-page.ts
var SIDEBAR_WIDTH_DEFAULT$1 = 250;
var SIDEBAR_WIDTH_MIN$1 = 150;
var SIDEBAR_WIDTH_MAX$1 = 500;
var SIDEBAR_COLLAPSE_THRESHOLD$1 = 120;
var CalendarPage = class CalendarPage extends i {
	constructor(..._args) {
		super(..._args);
		this.calendars = [];
		this.events = [];
		this.currentDate = /* @__PURE__ */ new Date();
		this.viewMode = "month";
		this.loading = true;
		this.isSpinning = false;
		this.error = "";
		this.modalOpen = false;
		this.activeCalendars = /* @__PURE__ */ new Set();
		this.searchQuery = "";
		this.sidebarWidth = 250;
		this.sidebarCollapsed = false;
		this.isSidebarHovered = false;
		this.isMobile = window.innerWidth <= 768;
		this.mobileSidebarOpen = false;
		this.promptOpen = false;
		this.promptFields = [{
			id: "name",
			label: "Calendar Name",
			autofocus: true
		}];
		this.syncIntervalTimer = null;
		this.promptMode = null;
		this.promptTarget = null;
		this.calendarToDelete = null;
		this.eventToDelete = null;
		this.activeKebabMenu = null;
		this.hoverTimeout = null;
		this.suppressSidebarHover = false;
		this.isSidebarDragging = false;
		this._handleSettingsChange = () => {
			if (this.settingsStore) {
				const state = this.settingsStore.getState();
				this.sidebarCollapsed = state.sidebarCollapsed;
				if (this.syncIntervalTimer) {
					clearInterval(this.syncIntervalTimer);
					this.syncIntervalTimer = null;
				}
				if (state.checkMailInterval && state.checkMailInterval > 0) {
					const ms = state.checkMailInterval * 60 * 1e3;
					this.syncIntervalTimer = setInterval(() => {
						this.fetchData();
					}, ms);
				}
			}
		};
		this.handleHashChange = () => {
			if (this.parseHash()) this.fetchData();
		};
		this.handleResize = () => {
			this.isMobile = window.innerWidth <= 768;
		};
		this.handleSpinIteration = () => {
			if (!this.loading) this.isSpinning = false;
		};
	}
	static {
		this.styles = [
			sidebarLayoutStyles,
			popupStyles,
			i$1`
        :host {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
        }

        .app-container.collapsed .main-content {
            box-shadow: rgba(95, 95, 95, 0.1) -4px 0 4px -2px;
            z-index: 25;
            border-left: 1px solid var(--border-color, #e5e7eb);
            position: relative;
        }

        .layout {
            display: flex;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: var(--bg-primary, #ffffff);
        }

        .sidebar-content {
            flex: 1;
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        .sidebar-scroll-content {
            padding: 16px;
            display: flex;
            flex-direction: column;
            height: 100%;
            box-sizing: border-box;
            gap: 24px;
        }

        .calendars-list {
            flex: 1;
            overflow-y: auto;
        }

        .calendars-list h3 {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-muted, #6b7280);
            margin: 0 0 12px 0;
        }

        .calendar-item {
            display: flex;
            align-items: center;
            position: relative;
            height: 36px;
            padding: 0 8px;
            box-sizing: border-box;
            border-radius: 6px;
            cursor: pointer;
            color: var(--text-primary);
            margin-bottom: 2px;
            user-select: none;
            transition: background 0.15s;
        }

        .calendar-item:hover {
            background-color: var(--bg-tertiary, #f3f4f6);
        }

        .calendar-item span {
            font-size: 14px;
            color: var(--text-primary, #111827);
            flex: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .calendar-checkbox {
            width: 16px;
            height: 16px;
            border-radius: 4px;
            border: 2px solid var(--cal-color);
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            background-color: transparent;
            margin-right: 8px;
            flex-shrink: 0;
        }

        .calendar-checkbox.checked {
            background-color: var(--cal-color);
        }

        .calendar-checkbox svg {
            width: 12px;
            height: 12px;
            color: #fff;
            fill: currentColor;
        }

        .sidebar-footer-btn {
            background: transparent;
            border: none;
            color: var(--text-primary);
            font-weight: 500;
            font-size: 14px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 8px;
            border-radius: 6px;
            width: 100%;
        }

        .sidebar-footer-btn:hover {
            background-color: var(--border-color, #e5e7eb);
        }

        .sidebar-footer-btn svg {
            width: 18px;
            height: 18px;
            color: var(--text-secondary, #4b5563);
        }

        .calendar-actions {
            display: none;
            align-items: center;
            margin-left: auto;
            margin-right: -4px;
        }

        @media (hover: hover) {
            .calendar-item:hover .calendar-actions {
                display: flex;
            }
        }
        .calendar-actions:focus-within,
        .calendar-actions.popup-open {
            display: flex;
        }
        
        .kebab-btn {
            --btn-padding: 8px;
        }

        .main-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            background-color: var(--bg-primary, #ffffff);
            justify-content: center;
        }

        .toolbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 57px;
            padding: 0 24px;
            box-sizing: border-box;
            border-bottom: 1px solid var(--border-color, #e5e7eb);
            flex-shrink: 0;
            background: var(--bg-primary, #ffffff);
        }

        .toolbar-left {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .toolbar-left h2 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }

        .toolbar-left .sub-title {
            font-weight: 300;
            color: var(--text-secondary, #4b5563);
        }

        .toolbar-center {
            flex: 1;
            display: flex;
            justify-content: center;
        }

        .toolbar-right {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            gap: 8px;
        }

        .mobile-bottom-header {
            height: 57px;
            box-sizing: border-box;
            padding: 0 12px;
            border-top: 1px solid var(--border-color, #e5e7eb);
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--bg-primary, #ffffff);
            flex-shrink: 0;
            position: relative;
            z-index: 10;
            box-shadow: rgba(95, 95, 95, 0.1) 0 -4px 4px -2px;
        }

        .mobile-bottom-actions {
            display: flex;
            width: 100%;
        }

        @media (max-width: 768px) {
            .toolbar {
                padding: 0 12px;
            }
            .toolbar-left {
                flex: 1;
                min-width: 0;
            }
            .toolbar-left h2 {
                font-size: 18px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .toolbar-left h2 .sub-title {
                display: none;
            }
            .toolbar-right {
                flex: unset;
                gap: 4px;
            }
        }

        .calendar-body {
            flex: 1;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            position: relative;
        }
    `
		];
	}
	async connectedCallback() {
		super.connectedCallback();
		window.addEventListener("resize", this.handleResize);
		window.addEventListener("hashchange", this.handleHashChange);
		if (this.settingsStore) {
			this.settingsStore.addEventListener("change", this._handleSettingsChange);
			this._handleSettingsChange();
		}
		this.parseHash();
		await this.fetchData();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		window.removeEventListener("resize", this.handleResize);
		window.removeEventListener("hashchange", this.handleHashChange);
		if (this.settingsStore) this.settingsStore.removeEventListener("change", this._handleSettingsChange);
		if (this.syncIntervalTimer) {
			clearInterval(this.syncIntervalTimer);
			this.syncIntervalTimer = null;
		}
	}
	parseHash() {
		const hash = window.location.hash;
		if (!hash.startsWith("#/calendar")) return false;
		const [pathStr, queryStr] = hash.substring(1).split("?");
		const parts = pathStr.split("/");
		let changed = false;
		if (parts.length >= 3) {
			const mode = parts[2];
			if ([
				"day",
				"week",
				"month",
				"year"
			].includes(mode)) {
				if (this.viewMode !== mode) {
					this.viewMode = mode;
					changed = true;
				}
			}
		}
		if (parts.length >= 4) {
			const dateStr = parts[3];
			let newDate = new Date(this.currentDate);
			if (this.viewMode === "year") {
				const y = parseInt(dateStr, 10);
				if (!isNaN(y)) newDate.setFullYear(y);
			} else if (this.viewMode === "month") {
				const [y, m] = dateStr.split("-");
				if (y && m) {
					newDate.setFullYear(parseInt(y, 10));
					newDate.setMonth(parseInt(m, 10) - 1);
					newDate.setDate(1);
				}
			} else {
				const [y, m, d] = dateStr.split("-");
				if (y && m && d) {
					newDate.setFullYear(parseInt(y, 10));
					newDate.setMonth(parseInt(m, 10) - 1);
					newDate.setDate(parseInt(d, 10));
				}
			}
			if (newDate.getFullYear() !== this.currentDate.getFullYear() || newDate.getMonth() !== this.currentDate.getMonth() || newDate.getDate() !== this.currentDate.getDate()) {
				this.currentDate = newDate;
				changed = true;
			}
		}
		let query = "";
		if (queryStr) query = new URLSearchParams("?" + queryStr).get("q") || "";
		if (this.searchQuery !== query) {
			this.searchQuery = query;
			changed = true;
		}
		if (pathStr === "/calendar" || pathStr === "/calendar/") {
			this.navigate(this.viewMode, this.currentDate, this.searchQuery);
			return false;
		}
		return changed;
	}
	navigate(mode, date, query = "") {
		const year = date.getFullYear();
		const month = String(date.getMonth() + 1).padStart(2, "0");
		const day = String(date.getDate()).padStart(2, "0");
		let hash = `#/calendar/${mode}`;
		if (mode === "year") hash += `/${year}`;
		else if (mode === "month") hash += `/${year}-${month}`;
		else hash += `/${year}-${month}-${day}`;
		if (query) hash += `?q=${encodeURIComponent(query)}`;
		if (window.location.hash !== hash) window.location.hash = hash;
		else this.fetchData();
	}
	handleSidebarMouseEnter() {
		if (this.sidebarCollapsed && !this.isSidebarDragging) {
			clearTimeout(this.hoverTimeout);
			this.hoverTimeout = setTimeout(() => {
				this.isSidebarHovered = true;
				this.suppressSidebarHover = false;
			}, 300);
		}
	}
	handleSidebarMouseLeave() {
		if (this.sidebarCollapsed) {
			clearTimeout(this.hoverTimeout);
			this.isSidebarHovered = false;
		}
	}
	async fetchData() {
		this.loading = true;
		this.isSpinning = true;
		this.error = "";
		try {
			const calRes = await calendarService.fetchCalendars();
			let start, end;
			const year = this.currentDate.getFullYear();
			const month = this.currentDate.getMonth();
			if (this.viewMode === "year") {
				start = new Date(year, 0, 1);
				end = new Date(year, 11, 31);
			} else if (this.viewMode === "month") {
				start = new Date(year, month, 1);
				end = new Date(year, month + 1, 0);
				start.setDate(start.getDate() - 14);
				end.setDate(end.getDate() + 14);
			} else if (this.viewMode === "week") {
				start = new Date(this.currentDate);
				start.setDate(start.getDate() - start.getDay() + 1);
				end = new Date(start);
				end.setDate(start.getDate() + 7);
			} else {
				start = new Date(this.currentDate);
				start.setHours(0, 0, 0, 0);
				end = new Date(this.currentDate);
				end.setHours(23, 59, 59, 999);
			}
			const rawEvents = (await calendarService.fetchEvents(start, end, this.searchQuery)).events || [];
			const expandedEvents = [];
			for (const ev of rawEvents) if (ev.rrule) try {
				const evStart = new Date(ev.start);
				const durationMs = new Date(ev.end).getTime() - evStart.getTime();
				const options = RRule.parseString(ev.rrule);
				options.dtstart = evStart;
				const occurrences = new RRule(options).between(start, end, true);
				for (const d of occurrences) expandedEvents.push({
					...ev,
					start: d.toISOString(),
					end: new Date(d.getTime() + durationMs).toISOString()
				});
			} catch (err) {
				console.error("Failed to parse rrule for event", ev.uid, err);
				expandedEvents.push(ev);
			}
			else expandedEvents.push(ev);
			this.events = expandedEvents.map((ev) => ({
				...ev,
				color: ev.color || getCalendarColor(ev.calendarPath || ev.path)
			}));
			this.calendars = calRes.calendars.map((c) => ({
				...c,
				color: c.color || getCalendarColor(c.path)
			}));
			if (this.activeCalendars.size === 0 && this.calendars.length > 0) this.activeCalendars = new Set(this.calendars.map((c) => c.path));
		} catch (e) {
			console.error(e);
			this.error = "Failed to load calendar data.";
		} finally {
			this.loading = false;
		}
	}
	changeDate(offset, forceMode) {
		const d = new Date(this.currentDate);
		const mode = forceMode || this.viewMode;
		if (mode === "year") d.setFullYear(d.getFullYear() + offset);
		else if (mode === "month") d.setMonth(d.getMonth() + offset);
		else if (mode === "week") d.setDate(d.getDate() + offset * 7);
		else d.setDate(d.getDate() + offset);
		this.navigate(mode, d);
	}
	openCreateModal(date) {
		this.selectedEvent = void 0;
		this.initialDate = date;
		this.modalOpen = true;
	}
	openEditModal(event) {
		this.selectedEvent = event;
		this.initialDate = void 0;
		this.modalOpen = true;
	}
	handleModalClose() {
		this.modalOpen = false;
		this.selectedEvent = void 0;
		this.initialDate = void 0;
	}
	async handleModalSaved() {
		this.modalOpen = false;
		this.selectedEvent = void 0;
		this.initialDate = void 0;
		await this.fetchData();
	}
	setViewMode(mode) {
		this.navigate(mode, this.currentDate);
	}
	handleDateSelected(date) {
		this.navigate("day", date);
	}
	handleAddCalendar() {
		this.promptFields = [{
			id: "name",
			label: this.i18nStore?.t("calendar.calendarName"),
			autofocus: true
		}];
		this.promptMode = "add";
		this.promptOpen = true;
	}
	handleRenameCalendar(calendar) {
		this.promptFields = [{
			id: "name",
			label: this.i18nStore?.t("calendar.calendarName"),
			value: calendar.name,
			autofocus: true
		}];
		this.promptMode = "rename";
		this.promptTarget = calendar;
		this.promptOpen = true;
	}
	handleDeleteCalendar(calendar) {
		this.calendarToDelete = calendar;
	}
	async _executeDeleteCalendar() {
		if (!this.calendarToDelete) return;
		const calendar = this.calendarToDelete;
		this.calendarToDelete = null;
		try {
			await calendarService.deleteCalendar(calendar.path);
			this.calendars = this.calendars.filter((c) => c.path !== calendar.path);
			if (this.activeCalendars.has(calendar.path)) {
				this.activeCalendars.delete(calendar.path);
				await this.fetchData();
			}
		} catch (err) {
			console.error("Failed to delete calendar", err);
		}
	}
	async _executeDeleteEvent() {
		if (!this.eventToDelete) return;
		const event = this.eventToDelete;
		this.eventToDelete = null;
		try {
			await calendarService.deleteEvent(event.path);
			await this.fetchData();
		} catch (err) {
			console.error("Failed to delete event", err);
		}
	}
	toggleCalendar(path) {
		const newSet = new Set(this.activeCalendars);
		if (newSet.has(path)) newSet.delete(path);
		else newSet.add(path);
		this.activeCalendars = newSet;
	}
	async handlePromptSubmit(e) {
		this.promptOpen = false;
		const name = e.detail.name;
		if (!name) return;
		try {
			if (this.promptMode === "add") await calendarService.createCalendar(name);
			else if (this.promptMode === "rename" && this.promptTarget) await calendarService.renameCalendar(this.promptTarget.path, name);
			await this.fetchData();
		} catch (err) {
			console.error("Failed to save calendar", err);
		}
	}
	handlePromptCancel() {
		this.promptOpen = false;
	}
	get username() {
		return this.settingsStore?.getState().loginUsername || "";
	}
	render() {
		const monthName = this.i18nStore?.t(`calendar.months.${this.currentDate.getMonth()}`);
		const year = this.currentDate.getFullYear();
		let title = "";
		if (this.searchQuery) title = this.i18nStore?.t("calendar.searchResults");
		else if (this.viewMode === "year") title = year.toString();
		else if (this.viewMode === "day") title = `${this.currentDate.getDate()} ${monthName}`;
		else title = monthName;
		const visibleEvents = this.events.filter((e) => this.activeCalendars.has(e.calendarPath));
		return b`
            <app-header 
                currentTab="calendar"
                .username=${this.username}
                .isMobile=${this.isMobile}
                .searchQuery=${this.searchQuery}
                @toggle-sidebar=${() => this.mobileSidebarOpen = !this.mobileSidebarOpen}
                @search-submit=${(e) => {
			this.navigate(this.viewMode, this.currentDate, e.detail.value);
		}}
            ></app-header>
            <div class="app-container ${this.sidebarCollapsed && !this.isMobile ? "collapsed" : ""} ${this.isSidebarDragging ? "dragging" : ""}" style="${!this.sidebarCollapsed && !this.isMobile ? `--sidebar-width: ${this.sidebarWidth}px;` : ""}">
                <div class="layout">
                    <alps-sidebar 
                        class="${this.isMobile ? "mobile-sidebar" : "desktop-sidebar"} ${this.mobileSidebarOpen ? "open" : ""}"
                        .isMobile=${this.isMobile}
                        .isOpen=${this.mobileSidebarOpen}
                        .collapsed=${this.sidebarCollapsed && !this.isMobile}
                        .isHovered=${this.isSidebarHovered}
                        .suppressHover=${this.suppressSidebarHover}
                        .width=${this.sidebarWidth}
                        @toggle-collapse=${() => {
			const newState = !this.sidebarCollapsed;
			this.sidebarCollapsed = newState;
			if (this.settingsStore) this.settingsStore.updateSettings({ sidebarCollapsed: newState });
		}}
                        @sidebar-resize=${(e) => {
			const newWidth = e.detail.newWidth;
			if (newWidth < SIDEBAR_COLLAPSE_THRESHOLD$1) {
				if (!this.sidebarCollapsed) {
					this.sidebarCollapsed = true;
					if (this.settingsStore) this.settingsStore.updateSettings({ sidebarCollapsed: true });
				}
				this.sidebarWidth = SIDEBAR_WIDTH_DEFAULT$1;
			} else {
				if (this.sidebarCollapsed) {
					this.sidebarCollapsed = false;
					if (this.settingsStore) this.settingsStore.updateSettings({ sidebarCollapsed: false });
				}
				this.sidebarWidth = Math.min(Math.max(newWidth, SIDEBAR_WIDTH_MIN$1), SIDEBAR_WIDTH_MAX$1);
			}
		}}
                        @drag-start=${() => this.isSidebarDragging = true}
                        @drag-end=${() => this.isSidebarDragging = false}
                        @close-sidebar=${() => this.mobileSidebarOpen = false}
                        @mouseenter=${() => this.handleSidebarMouseEnter()}
                        @mouseleave=${() => this.handleSidebarMouseLeave()}
                    >
                    <div class="sidebar-wrapper ${this.sidebarCollapsed && (!this.isSidebarHovered || this.suppressSidebarHover) && !this.isMobile ? "collapsed" : ""}">
                        <alps-toolbar class="sidebar-header">
                            <alps-create-button 
                                icon="calendarPlus" 
                                ?collapsed=${this.sidebarCollapsed && (!this.isSidebarHovered || this.suppressSidebarHover) && !this.isMobile}
                                @click=${() => this.openCreateModal()}
                            >${this.i18nStore?.t("calendar.addEvent")}</alps-create-button>
                        </alps-toolbar>
                        <div class="sidebar-content">
                            <div class="sidebar-scroll-content">
                                <div class="calendars-list">
                                    <h3>${this.i18nStore?.t("calendar.myCalendars")}</h3>
                                    ${this.calendars.map((c) => b`
                                        <div class="calendar-item" @click=${() => this.toggleCalendar(c.path)}>
                                            <div class="calendar-checkbox ${this.activeCalendars.has(c.path) ? "checked" : ""}" style="--cal-color: ${c.color}">
                                                ${this.activeCalendars.has(c.path) ? renderIcon("check") : ""}
                                            </div>
                                            <span>${c.name}</span>

                                            <div class="calendar-actions ${this.activeKebabMenu === c.path ? "popup-open" : ""}" @click=${(e) => e.stopPropagation()}>
                                                <alps-popup 
                                                    align="right" 
                                                    position="bottom"
                                                    @popup-open=${() => {
			this.activeKebabMenu = c.path;
		}}
                                                    @popup-close=${() => {
			if (this.activeKebabMenu === c.path) this.activeKebabMenu = null;
		}}
                                                >
                                                    <alps-icon-btn slot="trigger" class="kebab-btn" icon="dotsThreeCircleVertical"></alps-icon-btn>
                                                    <button class="dropdown-item" @click=${(e) => {
			const popup = e.target.closest("alps-popup");
			if (popup) popup.close();
			this.handleRenameCalendar(c);
		}}>
                                                        ${renderIcon("pen")} <span class="item-text">${this.i18nStore?.t("calendar.rename")}</span>
                                                    </button>
                                                    ${this.calendars.length > 1 && !(c.path === "default" || c.path.endsWith("/default") || c.path.endsWith("/default/")) ? b`
                                                        <button class="dropdown-item text-danger" @click=${(e) => {
			const popup = e.target.closest("alps-popup");
			if (popup) popup.close();
			this.handleDeleteCalendar(c);
		}}>
                                                            ${renderIcon("trash")} <span class="item-text">${this.i18nStore?.t("calendar.delete")}</span>
                                                        </button>
                                                    ` : ""}
                                                </alps-popup>
                                            </div>
                                        </div>
                                    `)}
                                </div>

                                <alps-sidebar-calendar
                                    .selectedDate=${this.currentDate}
                                    .events=${visibleEvents}
                                    @date-selected=${(e) => this.handleDateSelected(e.detail.date)}
                                ></alps-sidebar-calendar>
                            </div>
                        </div>
                    </div>
                    <alps-icon-btn slot="footer-actions" icon="calendarPlus" @click=${this.handleAddCalendar}></alps-icon-btn>
                </alps-sidebar>

                <div class="main-content">
                    <div class="toolbar">
                        <div class="toolbar-left">
                            <h2>${title} <span class="sub-title">${this.viewMode !== "year" ? year : ""}</span></h2>
                        </div>
                        ${!this.isMobile ? b`
                        <div class="toolbar-center">
                            <alps-toggle 
                                .options=${[
			{
				label: this.i18nStore?.t("calendar.day"),
				value: "day"
			},
			{
				label: this.i18nStore?.t("calendar.week"),
				value: "week"
			},
			{
				label: this.i18nStore?.t("calendar.month"),
				value: "month"
			},
			{
				label: this.i18nStore?.t("calendar.year"),
				value: "year"
			}
		]}
                                .value=${this.viewMode}
                                @change=${(e) => this.setViewMode(e.detail.value)}
                            ></alps-toggle>
                        </div>
                        ` : ""}
                        <div class="toolbar-right" style="display: flex; align-items: center; gap: 8px;">
                            <alps-icon-btn 
                                icon="arrowsClockwise" 
                                title="${this.i18nStore?.t("mailboxPage.refresh")}" 
                                ?spinning=${this.isSpinning}
                                @animationiteration=${this.handleSpinIteration}
                                @click=${this.fetchData}
                            ></alps-icon-btn>
                            <alps-nav-buttons 
                                label="${this.i18nStore?.t("calendar.today")}"
                                @previous=${() => this.changeDate(-1)}
                                @center=${() => {
			this.navigate(this.viewMode, /* @__PURE__ */ new Date());
		}}
                                @next=${() => this.changeDate(1)}
                            ></alps-nav-buttons>
                        </div>
                    </div>

                    <div class="calendar-body">
                        ${this.searchQuery ? b`
                            <calendar-list-view
                                .events=${visibleEvents}
                                @edit-event=${(e) => this.openEditModal(e.detail.event)}
                                @delete-event=${(e) => this.eventToDelete = e.detail.event}
                            ></calendar-list-view>
                        ` : b`
                            ${this.viewMode === "year" ? b`
                                <calendar-year-view 
                                .year=${year} 
                                .events=${visibleEvents}
                                @date-selected=${(e) => this.handleDateSelected(e.detail.date)}
                            ></calendar-year-view>
                        ` : ""}
                        ${this.viewMode === "month" ? b`
                            <calendar-month-view 
                                .date=${this.currentDate} 
                                .events=${visibleEvents}
                                @create-event=${(e) => this.openCreateModal(e.detail.date)}
                                @edit-event=${(e) => this.openEditModal(e.detail.event)}
                                @delete-event=${(e) => this.eventToDelete = e.detail.event}
                            ></calendar-month-view>
                        ` : ""}
                        ${this.viewMode === "week" ? b`
                            <calendar-week-view 
                                .date=${this.currentDate} 
                                .events=${visibleEvents}
                                @create-event=${(e) => this.openCreateModal(e.detail.date)}
                                @edit-event=${(e) => this.openEditModal(e.detail.event)}
                                @delete-event=${(e) => this.eventToDelete = e.detail.event}
                            ></calendar-week-view>
                        ` : ""}
                            ${this.viewMode === "day" ? b`
                                <calendar-day-view 
                                    .date=${this.currentDate} 
                                    .events=${visibleEvents}
                                    @create-event=${(e) => this.openCreateModal(e.detail.date)}
                                    @edit-event=${(e) => this.openEditModal(e.detail.event)}
                                    @delete-event=${(e) => this.eventToDelete = e.detail.event}
                                ></calendar-day-view>
                            ` : ""}
                        `}
                    </div>
                    ${this.isMobile ? b`
                        <div class="mobile-bottom-header">
                            <div class="mobile-bottom-actions">
                                <alps-toggle 
                                    full-width
                                    .options=${[
			{
				label: this.i18nStore?.t("calendar.day"),
				value: "day"
			},
			{
				label: this.i18nStore?.t("calendar.week"),
				value: "week"
			},
			{
				label: this.i18nStore?.t("calendar.month"),
				value: "month"
			},
			{
				label: this.i18nStore?.t("calendar.year"),
				value: "year"
			}
		]}
                                    .value=${this.viewMode}
                                    @change=${(e) => this.setViewMode(e.detail.value)}
                                ></alps-toggle>
                            </div>
                        </div>
                    ` : ""}
                </div>
            </div>

            <calendar-event-modal
                .open=${this.modalOpen}
                .event=${this.selectedEvent}
                .initialDate=${this.initialDate}
                .calendars=${this.calendars}
                @close=${this.handleModalClose}
                @saved=${this.handleModalSaved}
            ></calendar-event-modal>

            ${this.promptOpen ? b`
                <ui-prompt 
                    title="${this.promptMode === "add" ? this.i18nStore?.t("calendar.addCalendar") : this.i18nStore?.t("calendar.renameCalendar")}" 
                    .fields=${this.promptFields}
                    @submit=${this.handlePromptSubmit} 
                    @cancel=${this.handlePromptCancel}
                ></ui-prompt>
            ` : ""}

            ${this.calendarToDelete ? b`
                <ui-confirm
                    title="${this.i18nStore?.t("calendar.deleteCalendar")}"
                    message="Are you sure you want to delete the calendar &quot;${this.calendarToDelete.name}&quot;?"
                    confirmText="${this.i18nStore?.t("calendar.delete")}"
                    isDanger
                    @confirm=${this._executeDeleteCalendar}
                    @cancel=${() => this.calendarToDelete = null}
                ></ui-confirm>
            ` : ""}

            ${this.eventToDelete ? b`
                <ui-confirm
                    title="${this.i18nStore?.t("calendar.deleteEvent")}"
                    message="Are you sure you want to delete this event?"
                    confirmText="${this.i18nStore?.t("calendar.delete")}"
                    isDanger
                    @confirm=${this._executeDeleteEvent}
                    @cancel=${() => this.eventToDelete = null}
                ></ui-confirm>
            ` : ""}
        `;
	}
};
__decorate([c({ context: i18nContext })], CalendarPage.prototype, "i18nStore", void 0);
__decorate([c({ context: settingsContext })], CalendarPage.prototype, "settingsStore", void 0);
__decorate([r()], CalendarPage.prototype, "calendars", void 0);
__decorate([r()], CalendarPage.prototype, "events", void 0);
__decorate([r()], CalendarPage.prototype, "currentDate", void 0);
__decorate([r()], CalendarPage.prototype, "viewMode", void 0);
__decorate([r()], CalendarPage.prototype, "loading", void 0);
__decorate([r()], CalendarPage.prototype, "isSpinning", void 0);
__decorate([r()], CalendarPage.prototype, "error", void 0);
__decorate([r()], CalendarPage.prototype, "modalOpen", void 0);
__decorate([r()], CalendarPage.prototype, "selectedEvent", void 0);
__decorate([r()], CalendarPage.prototype, "initialDate", void 0);
__decorate([r()], CalendarPage.prototype, "activeCalendars", void 0);
__decorate([r()], CalendarPage.prototype, "searchQuery", void 0);
__decorate([r()], CalendarPage.prototype, "sidebarWidth", void 0);
__decorate([r()], CalendarPage.prototype, "sidebarCollapsed", void 0);
__decorate([r()], CalendarPage.prototype, "isSidebarHovered", void 0);
__decorate([r()], CalendarPage.prototype, "isMobile", void 0);
__decorate([r()], CalendarPage.prototype, "mobileSidebarOpen", void 0);
__decorate([r()], CalendarPage.prototype, "promptOpen", void 0);
__decorate([r()], CalendarPage.prototype, "promptFields", void 0);
__decorate([r()], CalendarPage.prototype, "promptMode", void 0);
__decorate([r()], CalendarPage.prototype, "promptTarget", void 0);
__decorate([r()], CalendarPage.prototype, "calendarToDelete", void 0);
__decorate([r()], CalendarPage.prototype, "eventToDelete", void 0);
__decorate([r()], CalendarPage.prototype, "activeKebabMenu", void 0);
__decorate([r()], CalendarPage.prototype, "suppressSidebarHover", void 0);
__decorate([r()], CalendarPage.prototype, "isSidebarDragging", void 0);
CalendarPage = __decorate([t("calendar-page")], CalendarPage);
//#endregion
//#region ../plugins/caldav/frontend/index.ts
var frontend_exports$4 = /* @__PURE__ */ __exportAll({});
registry.registerRoute({
	path: "/calendar/*",
	component: "calendar-page"
});
registry.registerNavTab({
	id: "calendar",
	pluginId: "caldav",
	labelKey: "navigation.calendar",
	icon: "calendar",
	order: 20
});
//#endregion
//#region ../plugins/carddav/frontend/contacts-service.ts
var ContactsService = class {
	async fetchContacts(query = "") {
		const res = await fetchWithTimeout(query ? `/contacts?query=${encodeURIComponent(query)}` : "/contacts");
		if (!res.ok) throw new Error(`Failed to fetch contacts: ${res.statusText}`);
		return res.json();
	}
	async fetchContact(path) {
		const res = await fetchWithTimeout(`/contacts/${encodePathParam(path)}`);
		if (!res.ok) throw new Error(`Failed to fetch contact: ${res.statusText}`);
		return res.json();
	}
	async createContact(payload) {
		const res = await fetchWithTimeout("/contacts/create", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload)
		});
		if (!res.ok) throw new Error(`Failed to create contact: ${res.statusText}`);
		return res.json();
	}
	async updateContact(path, payload) {
		const res = await fetchWithTimeout(`/contacts/${encodePathParam(path)}/edit`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload)
		});
		if (!res.ok) throw new Error(`Failed to update contact: ${res.statusText}`);
		return res.json();
	}
	async deleteContact(path) {
		const res = await fetchWithTimeout(`/contacts/${encodePathParam(path)}`, { method: "DELETE" });
		if (!res.ok) throw new Error(`Failed to delete contact: ${res.statusText}`);
	}
	async bulkUpdateContacts(contacts) {
		const promises = contacts.map((contact) => {
			if (!contact.path) return Promise.resolve();
			return this.updateContact(contact.path, contact);
		});
		await Promise.all(promises);
	}
	async bulkDeleteContacts(paths) {
		const promises = paths.map((path) => this.deleteContact(path));
		await Promise.all(promises);
	}
};
var contactsService = new ContactsService();
//#endregion
//#region ../plugins/carddav/frontend/constants.ts
var CATEGORY_ALL_CONTACTS = "All Contacts";
var CATEGORY_FAVORITES = "Favorites";
//#endregion
//#region src/utils/message-cache.ts
var CACHE_PREFIX = "alps_msg_";
var TTL_MS = 1800 * 1e3;
var MessageCache = {
	get(mailbox, uid, preferredView = "html") {
		try {
			const key = `${CACHE_PREFIX}${mailbox}_${uid}_${preferredView}`;
			const itemStr = sessionStorage.getItem(key);
			if (!itemStr) return null;
			const item = JSON.parse(itemStr);
			if (Date.now() - item.timestamp > TTL_MS) {
				sessionStorage.removeItem(key);
				return null;
			}
			return item;
		} catch (e) {
			Logger.error("Failed to read message cache", e);
			return null;
		}
	},
	set(mailbox, uid, preferredView, data) {
		try {
			const key = `${CACHE_PREFIX}${mailbox}_${uid}_${preferredView}`;
			const item = {
				...data,
				timestamp: Date.now()
			};
			const stringified = JSON.stringify(item);
			if (stringified.length > 2 * 1024 * 1024) {
				console.warn(`Message ${uid} is too large to cache (${Math.round(stringified.length / 1024)}KB)`);
				return;
			}
			sessionStorage.setItem(key, stringified);
		} catch (e) {
			if (e instanceof DOMException && (e.name === "QuotaExceededError" || e.code === 22)) {
				console.warn("Session storage quota exceeded, clearing cache and retrying...");
				this.clear();
				try {
					const key = `${CACHE_PREFIX}${mailbox}_${uid}_${preferredView}`;
					const item = {
						...data,
						timestamp: Date.now()
					};
					sessionStorage.setItem(key, JSON.stringify(item));
				} catch (retryErr) {
					Logger.error("Failed to write message cache even after clearing", retryErr);
				}
			} else Logger.error("Failed to write message cache", e);
		}
	},
	clear() {
		try {
			const keysToRemove = [];
			for (let i = 0; i < sessionStorage.length; i++) {
				const key = sessionStorage.key(i);
				if (key && key.startsWith(CACHE_PREFIX)) keysToRemove.push(key);
			}
			keysToRemove.forEach((k) => sessionStorage.removeItem(k));
		} catch (e) {
			Logger.error("Failed to clear message cache", e);
		}
	}
};
//#endregion
//#region src/services/message-sync.ts
var MessageSyncService = class extends EventTarget {
	constructor(..._args) {
		super(..._args);
		this.interval = null;
		this.currentMailbox = FOLDER_INBOX;
		this.currentPage = 0;
		this.currentQuery = "";
		this.currentFetchId = 0;
	}
	/**
	* Updates the current context for background polling.
	*/
	setContext(mailbox, page, query = "") {
		this.currentMailbox = mailbox;
		this.currentPage = page;
		this.currentQuery = query;
	}
	/**
	* Starts background polling every N minutes.
	* If minutes <= 0, background polling is disabled.
	*/
	start(minutes = 5) {
		this.stop();
		if (minutes <= 0) return;
		const ms = minutes * 60 * 1e3;
		this.interval = setInterval(() => this.backgroundSync(), ms);
	}
	/**
	* Stops background polling.
	*/
	stop() {
		if (this.interval) {
			clearInterval(this.interval);
			this.interval = null;
		}
	}
	/**
	* Forces an immediate sync using the current context.
	*/
	sync() {
		this.fetch(this.currentMailbox, this.currentPage, this.currentQuery, true);
	}
	/**
	* Forces an immediate sync if the user is currently viewing the specified mailbox.
	*/
	syncIfViewing(mailbox) {
		if (this.currentMailbox === mailbox) this.sync();
	}
	/**
	* Fetches data immediately. Used for initial load, pagination, or manual refresh.
	*/
	async fetch(mailbox, page, query = "", checkStatus = false) {
		this.setContext(mailbox, page, query);
		const fetchId = ++this.currentFetchId;
		this.dispatchEvent(new CustomEvent("sync-start", { detail: { background: false } }));
		const startTime = Date.now();
		try {
			let url = `/mailboxes/${encodeMailboxPath(mailbox)}?page=${page}`;
			if (query) url += `&query=${encodeURIComponent(query)}`;
			if (checkStatus) url += `&refresh=true`;
			const response = await fetchWithTimeout(url);
			if (this.currentFetchId !== fetchId) return;
			if (response.status === 401) {
				this.dispatchEvent(new CustomEvent("auth-error"));
				window.dispatchEvent(new CustomEvent("auth-error"));
				return;
			}
			if (response.status === 404) {
				this.dispatchEvent(new CustomEvent("mailbox-not-found"));
				return;
			}
			const data = await response.json();
			if (this.currentFetchId !== fetchId) return;
			const elapsed = Date.now() - startTime;
			if (elapsed < 200) await new Promise((r) => setTimeout(r, 200 - elapsed));
			if (this.currentFetchId !== fetchId) return;
			this.dispatchEvent(new CustomEvent("sync-success", { detail: {
				data,
				background: false
			} }));
		} catch (err) {
			if (this.currentFetchId !== fetchId) return;
			Logger.error("Failed to fetch mailbox data", err);
			const elapsed = Date.now() - startTime;
			if (elapsed < 200) await new Promise((r) => setTimeout(r, 200 - elapsed));
			if (this.currentFetchId !== fetchId) return;
			this.dispatchEvent(new CustomEvent("sync-error", { detail: {
				error: err,
				background: false
			} }));
		}
	}
	/**
	* Background sync invoked by the interval.
	*/
	async backgroundSync() {
		try {
			if (this.currentMailbox !== "INBOX") await fetchWithTimeout(`/mailboxes/${FOLDER_INBOX}/status`).catch(() => {});
			await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(this.currentMailbox)}/status`);
			let url = `/mailboxes/${encodeMailboxPath(this.currentMailbox)}?page=${this.currentPage}`;
			if (this.currentQuery) url += `&query=${encodeURIComponent(this.currentQuery)}`;
			const response = await fetchWithTimeout(url);
			if (response.status === 401) {
				this.dispatchEvent(new CustomEvent("auth-error"));
				window.dispatchEvent(new CustomEvent("auth-error"));
				return;
			}
			const data = await response.json();
			this.dispatchEvent(new CustomEvent("sync-success", { detail: {
				data,
				background: true
			} }));
		} catch (err) {
			Logger.error("Background sync failed", err);
		}
	}
};
var messageSync = new MessageSyncService();
//#endregion
//#region src/utils/flags.ts
var FLAG_SEEN = "\\Seen";
var FLAG_FLAGGED = "\\Flagged";
var FLAG_ANSWERED = "\\Answered";
var FLAG_DELETED = "\\Deleted";
var FLAG_DRAFT = "\\Draft";
var FLAG_FORWARDED = "$Forwarded";
var FLAG_MDNSENT = "$MDNSent";
var FLAG_JUNK = "Junk";
var FLAG_NONJUNK = "NonJunk";
var FLAG_NOTJUNK = "NotJunk";
var FLAG_JUNK_STD = "$Junk";
var FLAG_NOTJUNK_STD = "$NotJunk";
var FLAG_PHISHING = "$Phishing";
var FLAG_SUBMITPENDING = "$SubmitPending";
var FLAG_SUBMITTED = "$Submitted";
function getMessageTags(flags, i18nStore) {
	if (!flags) return [];
	const ignoredFlags = new Set([
		FLAG_SEEN,
		FLAG_FLAGGED,
		FLAG_ANSWERED,
		FLAG_DELETED,
		FLAG_DRAFT,
		FLAG_FORWARDED,
		FLAG_MDNSENT,
		FLAG_JUNK,
		FLAG_NONJUNK,
		FLAG_NOTJUNK,
		FLAG_JUNK_STD,
		FLAG_NOTJUNK_STD,
		FLAG_PHISHING,
		FLAG_SUBMITPENDING,
		FLAG_SUBMITTED
	].map((f) => f.toLowerCase()));
	const tags = [];
	for (const flag of flags) {
		if (flag.startsWith("\\")) continue;
		if (ignoredFlags.has(flag.toLowerCase())) continue;
		tags.push({
			id: flag,
			name: getTagName(flag, i18nStore),
			color: getTagColor(flag)
		});
	}
	return tags.sort((a, b) => {
		const aIsPredef = a.id.toLowerCase().startsWith("$label");
		const bIsPredef = b.id.toLowerCase().startsWith("$label");
		if (aIsPredef && !bIsPredef) return -1;
		if (!aIsPredef && bIsPredef) return 1;
		return a.id.localeCompare(b.id);
	});
}
var PROTECTED_KEYWORDS = new Set([
	FLAG_FORWARDED,
	FLAG_MDNSENT,
	FLAG_SUBMITPENDING,
	FLAG_SUBMITTED
].map((f) => f.toLowerCase()));
function getRemovableTags(flags) {
	if (!flags) return [];
	return flags.filter((f) => !f.startsWith("\\") && !PROTECTED_KEYWORDS.has(f.toLowerCase()));
}
function getTagName(flag, i18nStore) {
	switch (flag.toLowerCase()) {
		case "$label1": return i18nStore?.t("tags.important") || "Important";
		case "$label2": return i18nStore?.t("tags.work") || "Work";
		case "$label3": return i18nStore?.t("tags.personal") || "Personal";
		case "$label4": return i18nStore?.t("tags.todo") || "To Do";
		case "$label5": return i18nStore?.t("tags.later") || "Later";
		default: return flag;
	}
}
function getTagColor(flag) {
	switch (flag.toLowerCase()) {
		case "$label1": return "#ef4444";
		case "$label2": return "#f97316";
		case "$label3": return "#22c55e";
		case "$label4": return "#3b82f6";
		case "$label5": return "#a855f7";
		default: return getStringColor(flag);
	}
}
function getStringColor(str) {
	let hash = 0;
	for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
	return `hsl(${Math.abs(hash) % 360}, 70%, 45%)`;
}
//#endregion
//#region src/services/message-operations.ts
var MessageOperationsService = class extends EventTarget {
	/**
	* Sets or toggles a flag on specified messages.
	* action: 'add', 'remove', or 'set'
	*/
	async setFlag(mailbox, uids, flags, action) {
		try {
			const res = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(mailbox)}/messages/flag`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					uids,
					flags,
					action
				})
			});
			if (res.status === 401) {
				this.dispatchEvent(new CustomEvent("auth-error"));
				window.dispatchEvent(new CustomEvent("auth-error"));
				return false;
			}
			return res.ok;
		} catch (err) {
			Logger.error("Failed to set flag", err);
			return false;
		}
	}
	/**
	* Toggles the starred state of a message and returns the updated message object.
	*/
	async toggleStar(mailbox, message) {
		const uid = message?.UID;
		if (!uid) return message;
		const isStarred = message.Flags?.includes(FLAG_FLAGGED);
		const flagAction = isStarred ? "remove" : "add";
		if (await this.setFlag(mailbox, [String(uid)], ["\\Flagged"], flagAction)) {
			const newMsg = { ...message };
			if (isStarred) newMsg.Flags = newMsg.Flags.filter((f) => f !== FLAG_FLAGGED);
			else newMsg.Flags = [...newMsg.Flags || [], FLAG_FLAGGED];
			return newMsg;
		}
		return message;
	}
	/**
	* Marks a message as unread by removing the \Seen flag.
	*/
	async markAsUnread(mailbox, message) {
		const uid = message?.UID;
		if (!uid) return false;
		if (await this.setFlag(mailbox, [String(uid)], ["\\Seen"], "remove")) return true;
		return false;
	}
	/**
	* Marks a message as read by adding the \Seen flag.
	*/
	async markAsRead(mailbox, message) {
		const uid = message?.UID;
		if (!uid) return message;
		if (message.Flags?.includes("\\Seen")) return message;
		if (await this.setFlag(mailbox, [String(uid)], ["\\Seen"], "add")) {
			const newMsg = { ...message };
			newMsg.Flags = [...newMsg.Flags || [], FLAG_SEEN];
			return newMsg;
		}
		return message;
	}
	/**
	* Permanently deletes multiple messages.
	*/
	async deleteMessages(mailbox, uids) {
		if (!uids || uids.length === 0) return false;
		try {
			const res = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(mailbox)}/messages`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ uids })
			});
			if (res.status === 401) {
				this.dispatchEvent(new CustomEvent("auth-error"));
				window.dispatchEvent(new CustomEvent("auth-error"));
				return false;
			}
			if (res.ok) {
				messageSync.sync();
				return true;
			}
			return false;
		} catch (err) {
			Logger.error("Failed to delete messages", err);
			return false;
		}
	}
	/**
	* Moves multiple messages to another mailbox.
	*/
	async moveMessages(mailbox, uids, to) {
		if (!uids || uids.length === 0) return { success: false };
		try {
			const res = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(mailbox)}/messages/move`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					uids,
					to
				})
			});
			if (res.status === 401) {
				this.dispatchEvent(new CustomEvent("auth-error"));
				window.dispatchEvent(new CustomEvent("auth-error"));
				return { success: false };
			}
			if (res.ok) {
				messageSync.sync();
				return {
					success: true,
					uidMapping: (await res.json()).uidMapping
				};
			}
			return { success: false };
		} catch (err) {
			Logger.error("Failed to move messages", err);
			return { success: false };
		}
	}
	/**
	* Copies multiple messages to another mailbox.
	*/
	async copyMessages(mailbox, uids, to) {
		if (!uids || uids.length === 0) return { success: false };
		try {
			const res = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(mailbox)}/messages/copy`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					uids,
					to
				})
			});
			if (res.status === 401) {
				this.dispatchEvent(new CustomEvent("auth-error"));
				window.dispatchEvent(new CustomEvent("auth-error"));
				return { success: false };
			}
			if (res.ok) {
				messageSync.sync();
				return { success: true };
			}
			return { success: false };
		} catch (err) {
			Logger.error("Failed to copy messages", err);
			return { success: false };
		}
	}
	/**
	* Marks multiple messages as read.
	*/
	async markMessagesAsRead(mailbox, uids) {
		if (!uids || uids.length === 0) return false;
		return await this.setFlag(mailbox, uids, [FLAG_SEEN], "add");
	}
	/**
	* Marks multiple messages as unread.
	*/
	async markMessagesAsUnread(mailbox, uids) {
		if (!uids || uids.length === 0) return false;
		return await this.setFlag(mailbox, uids, [FLAG_SEEN], "remove");
	}
	/**
	* Saves a composer instance as a draft on the server.
	*/
	async saveDraft(formData) {
		try {
			const res = await fetchWithTimeout("/messages", {
				method: "POST",
				body: formData
			});
			if (res.status === 401) {
				this.dispatchEvent(new CustomEvent("auth-error"));
				window.dispatchEvent(new CustomEvent("auth-error"));
				return null;
			}
			if (res.ok) {
				const data = await res.json();
				return {
					uid: data.draft_uid,
					mailbox: data.draft_mailbox,
					size: data.draft_size,
					attachments: data.attachments
				};
			}
			const err = await res.json();
			Logger.error("Failed to save draft:", err);
			return null;
		} catch (err) {
			Logger.error("Failed to save draft:", err);
			return null;
		}
	}
	/**
	* Sends a composer instance message.
	*/
	async sendDraft(formData) {
		try {
			const res = await fetchWithTimeout("/messages", {
				method: "POST",
				body: formData
			});
			if (res.status === 401) {
				this.dispatchEvent(new CustomEvent("auth-error"));
				window.dispatchEvent(new CustomEvent("auth-error"));
				return false;
			}
			if (res.ok) {
				messageSync.sync();
				return true;
			}
			const err = await res.json();
			throw new Error(err.error || "Failed to send message");
		} catch (err) {
			Logger.error("Failed to send message:", err);
			throw err;
		}
	}
};
var messageOperations = new MessageOperationsService();
//#endregion
//#region src/store/compose-store.ts
var isBlockedAddress = (addr) => {
	let rawEmail = addr.trim();
	if (rawEmail.endsWith(">")) {
		const startObj = rawEmail.lastIndexOf("<");
		if (startObj !== -1) rawEmail = rawEmail.substring(startObj + 1, rawEmail.length - 1);
	}
	const lowerEmail = rawEmail.toLowerCase();
	return lowerEmail.startsWith("noreply") || lowerEmail.startsWith("no-reply") || lowerEmail.startsWith("mailer-daemon");
};
var filterAddresses = (addrs) => {
	if (!addrs) return addrs;
	return addrs.filter((addr) => !isBlockedAddress(addr));
};
var ComposeStore = class extends EventTarget {
	constructor() {
		super();
		this.state = { activeComposers: [] };
		this.saveTimeout = null;
		this.state.activeComposers = this.loadDrafts();
	}
	loadDrafts() {
		try {
			const stored = localStorage.getItem("alps_compose_drafts");
			if (stored) return JSON.parse(stored).map((draft) => {
				const wasSending = draft.isSending;
				return {
					...draft,
					attachments: draft.attachments?.filter((att) => !att.uploading && att.uuid) || [],
					isSending: false,
					minimized: wasSending ? false : draft.minimized
				};
			});
		} catch (e) {
			Logger.error("Failed to parse compose drafts from localStorage", e);
		}
		return [];
	}
	saveDrafts() {
		try {
			localStorage.setItem("alps_compose_drafts", JSON.stringify(this.state.activeComposers));
		} catch (e) {
			Logger.error("Failed to save compose drafts to localStorage", e);
		}
	}
	debouncedSaveDrafts() {
		if (this.saveTimeout !== null) window.clearTimeout(this.saveTimeout);
		this.saveTimeout = window.setTimeout(() => {
			this.saveDrafts();
			this.saveTimeout = null;
		}, 500);
	}
	notify() {
		this.dispatchEvent(new CustomEvent("change"));
	}
	get stateCopy() {
		return { ...this.state };
	}
	getComposer(id) {
		return this.state.activeComposers.find((c) => c.id === id);
	}
	getState() {
		return this.state;
	}
	openComposer(initialData) {
		if (initialData?.draftUid) {
			const existing = this.state.activeComposers.find((c) => c.draftUid === initialData.draftUid);
			if (existing) {
				this.bringComposerToFront(existing.id);
				if (existing.minimized) this.updateComposer(existing.id, { minimized: false });
				return;
			}
		}
		const isMobile = window.innerWidth <= 768;
		if (isMobile && this.state.activeComposers.length >= 1) {
			const existingId = this.state.activeComposers[0].id;
			this.bringComposerToFront(existingId);
			return;
		}
		if (!isMobile && this.state.activeComposers.length >= 3) return;
		const id = "composer_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5);
		let defaultFormat = "html";
		let signature = "";
		try {
			const storedSettings = localStorage.getItem("alps_settings");
			if (storedSettings) {
				const parsed = JSON.parse(storedSettings);
				if (parsed.composeFormat === "text") defaultFormat = "text";
				if (parsed.signature) signature = parsed.signature;
			}
		} catch (e) {}
		let initialText = initialData?.text || "";
		let initialHtml = initialData?.html || "";
		if (signature && !initialData?.draftUid) {
			const sigText = `-- \n${signature}`;
			const sigHtml = `<div class="alps-signature">-- <br>${signature.replace(/\n/g, "<br>")}</div>`;
			initialText = `\n\n${sigText}\n${initialText}`;
			if (initialHtml || initialData?.text) initialHtml = `<br><br>${sigHtml}${initialHtml}`;
			else initialHtml = `<br><br>${sigHtml}`;
		}
		const newComposer = {
			id,
			minimized: false,
			expanded: false,
			dirty: false,
			subject: "",
			format: initialData?.format || defaultFormat,
			attachments: [],
			zIndex: 1e3 + this.state.activeComposers.length,
			...initialData,
			to: filterAddresses(initialData?.to) || [],
			cc: filterAddresses(initialData?.cc) || [],
			bcc: filterAddresses(initialData?.bcc) || [],
			text: initialText,
			html: initialHtml,
			initialText,
			initialHtml
		};
		this.state = {
			...this.state,
			activeComposers: [...this.state.activeComposers, newComposer]
		};
		this.saveDrafts();
		this.notify();
	}
	updateComposer(id, updates) {
		if (updates.to) updates.to = filterAddresses(updates.to);
		if (updates.cc) updates.cc = filterAddresses(updates.cc);
		if (updates.bcc) updates.bcc = filterAddresses(updates.bcc);
		const composers = this.state.activeComposers.map((c) => {
			if (c.id !== id) return c;
			let isDirtyUpdate = false;
			if ("subject" in updates && updates.subject !== c.subject) isDirtyUpdate = true;
			if ("to" in updates && JSON.stringify(updates.to || []) !== JSON.stringify(c.to || [])) isDirtyUpdate = true;
			if ("cc" in updates && JSON.stringify(updates.cc || []) !== JSON.stringify(c.cc || [])) isDirtyUpdate = true;
			if ("bcc" in updates && JSON.stringify(updates.bcc || []) !== JSON.stringify(c.bcc || [])) isDirtyUpdate = true;
			if ("attachments" in updates && updates.attachments !== c.attachments) isDirtyUpdate = true;
			if (!isDirtyUpdate && !c.dirty) {
				if ("text" in updates || "html" in updates) {
					const newText = "text" in updates ? updates.text || "" : c.text || "";
					const initialText = c.initialText || "";
					if (newText.trim() !== initialText.trim()) isDirtyUpdate = true;
				}
			} else if (!isDirtyUpdate && c.dirty) {}
			const newDirty = "dirty" in updates ? updates.dirty : isDirtyUpdate ? true : c.dirty;
			return {
				...c,
				...updates,
				dirty: newDirty
			};
		});
		this.state = {
			...this.state,
			activeComposers: composers
		};
		this.debouncedSaveDrafts();
		this.notify();
	}
	closeComposer(id) {
		this.state = {
			...this.state,
			activeComposers: this.state.activeComposers.filter((c) => c.id !== id)
		};
		this.saveDrafts();
		this.notify();
	}
	discardDraft(id) {
		const composer = this.state.activeComposers.find((c) => c.id === id);
		if (composer && composer.draftUid && composer.draftMailbox) messageOperations.deleteMessages(composer.draftMailbox, [String(composer.draftUid)]);
		this.closeComposer(id);
	}
	clearAllComposers() {
		this.state = {
			...this.state,
			activeComposers: []
		};
		this.saveDrafts();
		this.notify();
	}
	async saveAllDirtyDrafts() {
		const dirtyComposers = this.state.activeComposers.filter((c) => c.dirty);
		if (dirtyComposers.length > 0) for (const composer of dirtyComposers) {
			const hasRecipient = (composer.to?.length || 0) > 0 || (composer.cc?.length || 0) > 0 || (composer.bcc?.length || 0) > 0;
			const hasContent = !(composer.text?.trim() === composer.initialText?.trim()) || (composer.subject?.trim().length || 0) > 0;
			if (!hasRecipient && !hasContent && !(composer.attachments && composer.attachments.length > 0)) continue;
			const formData = new FormData();
			let bcc = [...composer.bcc || []];
			let replyToSetting = "";
			try {
				const storedSettings = localStorage.getItem("alps_settings");
				if (storedSettings) {
					const parsed = JSON.parse(storedSettings);
					if (parsed.bccMyself && parsed.loginUsername) {
						if (!bcc.includes(parsed.loginUsername)) bcc.push(parsed.loginUsername);
					}
					if (parsed.replyTo) replyToSetting = parsed.replyTo;
				}
			} catch (e) {}
			formData.append("to", (composer.to || []).join(", "));
			formData.append("cc", (composer.cc || []).join(", "));
			formData.append("bcc", bcc.join(", "));
			if (replyToSetting) formData.append("reply_to", replyToSetting);
			formData.append("subject", (composer.subject || "").trim());
			formData.append("text", composer.text || "");
			if (composer.html && composer.format === "html") formData.append("html", composer.html);
			formData.append("save_as_draft", "1");
			const attachments = composer.attachments || [];
			const uuids = attachments.map((a) => a.uuid).filter(Boolean).join(",");
			if (uuids) formData.append("attachment-uuids", uuids);
			const prev = attachments.map((a) => a.partPath).filter(Boolean).join(",");
			if (prev) formData.append("prev_attachments", prev);
			if (composer.draftMailbox) formData.append("draft_mailbox", composer.draftMailbox);
			if (composer.draftUid) formData.append("draft_uid", composer.draftUid);
			await messageOperations.saveDraft(formData);
		}
		this.state = {
			...this.state,
			activeComposers: []
		};
		this.saveDrafts();
		this.notify();
	}
	bringComposerToFront(id) {
		let maxZ = 1e3;
		this.state.activeComposers.forEach((c) => {
			if (c.zIndex && c.zIndex > maxZ) maxZ = c.zIndex;
		});
		this.updateComposer(id, { zIndex: maxZ + 1 });
	}
};
var composeContext = n("compose-store");
//#endregion
//#region src/utils/login-notice.ts
var STORAGE_KEY = "alps-login-notice";
function setLoginNotice(notice) {
	try {
		sessionStorage.setItem(STORAGE_KEY, notice);
	} catch {}
}
function takeLoginNotice() {
	try {
		const value = sessionStorage.getItem(STORAGE_KEY);
		if (value) sessionStorage.removeItem(STORAGE_KEY);
		return value || null;
	} catch {
		return null;
	}
}
//#endregion
//#region src/store/linked-accounts-store.ts
var LinkedAccountsStore = class extends EventTarget {
	constructor() {
		super();
		this.accounts = [];
		this.loading = false;
		this.initialized = false;
	}
	getAccounts() {
		return this.accounts;
	}
	isLoading() {
		return this.loading;
	}
	isInitialized() {
		return this.initialized;
	}
	async fetchAccounts() {
		this.loading = true;
		this.dispatchEvent(new Event("change"));
		try {
			const response = await fetch("/accounts");
			if (response.ok) {
				const data = await response.json();
				this.accounts = data.accounts || [];
				this.initialized = true;
			} else Logger.error("Failed to fetch linked accounts");
		} catch (error) {
			Logger.error("Error fetching linked accounts:", error);
		} finally {
			this.loading = false;
			this.dispatchEvent(new Event("change"));
		}
	}
	async addAccount(username, password, displayName = "") {
		const formData = new URLSearchParams();
		formData.append("username", username);
		formData.append("password", password);
		formData.append("display_name", displayName);
		const response = await fetch("/accounts", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: formData.toString()
		});
		if (!response.ok) {
			const data = await response.json().catch(() => ({}));
			throw new Error(data.error || "Failed to add linked account");
		}
		await this.fetchAccounts();
	}
	async removeAccount(username) {
		const response = await fetch(`/accounts/${encodeURIComponent(username)}`, { method: "DELETE" });
		if (!response.ok) {
			const data = await response.json().catch(() => ({}));
			throw new Error(data.error || "Failed to remove linked account");
		}
		await this.fetchAccounts();
	}
	async switchAccount(username) {
		const formData = new URLSearchParams();
		formData.append("username", username);
		const response = await fetch("/accounts/switch", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: formData.toString()
		});
		if (!response.ok) {
			const data = await response.json().catch(() => ({}));
			throw new Error(data.error || "Failed to switch account");
		}
		return await response.json();
	}
};
var linkedAccountsStore = new LinkedAccountsStore();
var linkedAccountsContext = n("alps-linked-accounts");
//#endregion
//#region src/components/alps-avatar.ts
var AlpsAvatar = class AlpsAvatar extends i {
	constructor(..._args) {
		super(..._args);
		this.name = "";
		this.email = "";
		this.src = "";
		this.size = 40;
		this.imageError = false;
		this._handleStoreChange = () => {
			this.requestUpdate();
		};
	}
	willUpdate(changedProperties) {
		if (changedProperties.has("src")) this.imageError = false;
	}
	connectedCallback() {
		super.connectedCallback();
		this.updateComplete.then(() => {
			this.settingsStore?.addEventListener("change", this._handleStoreChange);
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.settingsStore?.removeEventListener("change", this._handleStoreChange);
	}
	static {
		this.styles = i$1`
    :host {
      display: inline-block;
      flex-shrink: 0;
    }
    .avatar {
      border-radius: 50%;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      user-select: none;
      overflow: hidden; /* Ensure image doesn't overflow border-radius */
    }
    .avatar img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-color: white;
    }
  `;
	}
	getInitials(name) {
		if (!name) return "U";
		const parts = name.trim().split(/[\s.@]+/);
		if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
		return name.substring(0, 2).toUpperCase();
	}
	render() {
		const loginUser = this.settingsStore?.getState()?.loginUsername || "";
		const loginName = this.settingsStore?.getState()?.name || "";
		let isSelf = false;
		if (loginUser && this.email && this.email.toLowerCase() === loginUser.toLowerCase()) isSelf = true;
		else if (loginName && this.name && this.name.toLowerCase() === loginName.toLowerCase()) isSelf = true;
		else if (loginUser && this.name && this.name.toLowerCase() === loginUser.toLowerCase()) isSelf = true;
		const effectiveAvatarSeed = isSelf ? loginName || loginUser : this.email || this.name;
		const effectiveInitialsSeed = isSelf ? loginName || loginUser || this.name : this.name;
		const fontSize = Math.round(this.size / 2.3);
		return b`
      <div class="avatar" style="${o({
			width: `${this.size}px`,
			height: `${this.size}px`,
			fontSize: `${fontSize}px`,
			backgroundColor: getAvatarColor(effectiveAvatarSeed)
		})}">
        ${this.src && !this.imageError ? b`<img src="${this.src}" alt="${this.name}" @error="${() => this.imageError = true}" />` : this.getInitials(effectiveInitialsSeed)}
      </div>
    `;
	}
};
__decorate([c({ context: settingsContext })], AlpsAvatar.prototype, "settingsStore", void 0);
__decorate([n$1({ type: String })], AlpsAvatar.prototype, "name", void 0);
__decorate([n$1({ type: String })], AlpsAvatar.prototype, "email", void 0);
__decorate([n$1({ type: String })], AlpsAvatar.prototype, "src", void 0);
__decorate([n$1({ type: Number })], AlpsAvatar.prototype, "size", void 0);
__decorate([r()], AlpsAvatar.prototype, "imageError", void 0);
AlpsAvatar = __decorate([t("alps-avatar")], AlpsAvatar);
//#endregion
//#region src/components/user-profile-menu.ts
var UserProfileMenu = class UserProfileMenu extends i {
	constructor(..._args) {
		super(..._args);
		this.username = "";
		this.isMobile = false;
		this.currentTab = "messages";
		this._handleStoreChange = () => {
			this.requestUpdate();
		};
	}
	static {
		this.styles = [popupStyles, i$1`
    :host {
      display: block;
      position: relative;
    }

    .user-profile {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 0;
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--text-primary, #111827);
      user-select: none;
    }

    .user-text-container {
      display: flex;
      flex-direction: column;
      max-width: 180px;
    }

    .user-name-text {
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.2;
    }

    .user-address-text {
      font-size: 12px;
      font-weight: 400;
      color: var(--text-secondary, #6b7280);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.2;
      margin-top: 2px;
    }

    .item-text {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    @media (max-width: 768px) {
      .user-text-container {
        display: none;
      }
      
      .user-info {
        gap: 0;
      }
    }
  `];
	}
	connectedCallback() {
		super.connectedCallback();
		this.updateComplete.then(() => {
			this.i18nStore?.addEventListener("change", this._handleStoreChange);
			this.settingsStore?.addEventListener("change", this._handleStoreChange);
			this.linkedAccountsStore?.addEventListener("change", this._handleStoreChange);
			window.addEventListener("plugins-updated", this._handleStoreChange);
			if (this.linkedAccountsStore && !this.linkedAccountsStore.isInitialized()) this.linkedAccountsStore.fetchAccounts();
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.i18nStore?.removeEventListener("change", this._handleStoreChange);
		this.settingsStore?.removeEventListener("change", this._handleStoreChange);
		this.linkedAccountsStore?.removeEventListener("change", this._handleStoreChange);
		window.removeEventListener("plugins-updated", this._handleStoreChange);
	}
	_closePopup() {
		const popup = this.shadowRoot?.querySelector("alps-popup");
		if (popup) popup.close();
	}
	_handleSettings() {
		this._closePopup();
		this.dispatchEvent(new CustomEvent("open-settings", {
			bubbles: true,
			composed: true
		}));
	}
	_handleSignOut() {
		this._closePopup();
		this.dispatchEvent(new CustomEvent("sign-out", {
			bubbles: true,
			composed: true
		}));
	}
	_handleTabChange(tab) {
		this._closePopup();
		if (tab === "messages") {
			if (!window.location.hash.startsWith("#/mailbox/")) window.location.hash = "#/";
		} else window.location.hash = "#/" + tab;
		this.dispatchEvent(new CustomEvent("change-tab", {
			detail: { tab },
			bubbles: true,
			composed: true
		}));
	}
	async _handleSwitchAccount(username) {
		this._closePopup();
		const overlayContainer = document.createElement("div");
		document.body.appendChild(overlayContainer);
		D(b`
      <style>
        @keyframes global-spin { to { transform: rotate(360deg); } }
        .switch-overlay svg { width: 100%; height: 100%; fill: currentColor; }
      </style>
      <div id="switch-account-overlay" class="switch-overlay" style="position: fixed; inset: 0; background-color: var(--bg-primary, #ffffff); z-index: 999999; display: flex; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease-in;">
        <div style="display: inline-flex; width: 32px; height: 32px; animation: global-spin 1s linear infinite; color: var(--accent-color, #2563eb);">
          ${renderIcon("edelweiss")}
        </div>
      </div>
    `, overlayContainer);
		const overlayDiv = overlayContainer.querySelector("#switch-account-overlay");
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				if (overlayDiv) overlayDiv.style.opacity = "1";
			});
		});
		await new Promise((resolve) => setTimeout(resolve, 300));
		try {
			if ((await this.linkedAccountsStore.switchAccount(username)).requires_2fa) {
				window.location.hash = "#/login/webauthn";
				if (overlayDiv) overlayDiv.style.opacity = "0";
				setTimeout(() => overlayContainer.remove(), 300);
			} else {
				clearSessionSettings(false);
				sessionStorage.clear();
				window.location.reload();
			}
		} catch (e) {
			if (overlayDiv) overlayDiv.style.opacity = "0";
			setTimeout(() => overlayContainer.remove(), 300);
			window.dispatchEvent(new CustomEvent("show-toast", { detail: {
				message: e.message || this.i18nStore?.t("linkedAccounts.switchError"),
				duration: 5e3
			} }));
		}
	}
	render() {
		const displayName = this.settingsStore?.getState().name || this.username;
		return b`
      <div class="user-profile">
        <div class="user-info">
          <alps-avatar .name=${displayName} .size=${28}></alps-avatar>
          <div class="user-text-container">
            <span class="user-name-text">${displayName}</span>
            <span class="user-address-text">${this.username}</span>
          </div>
        </div>
        <alps-popup align="right">
          <alps-icon-btn
            slot="trigger"
            .icon=${"dotsThreeVertical"}
            title=${this.i18nStore?.t("userMenu.profileOptions")}
          ></alps-icon-btn>
          
          ${(() => {
			const accounts = this.linkedAccountsStore?.getAccounts() || [];
			if (accounts.length === 0) return "";
			return b`
              ${accounts.map((account) => b`
                <button class="dropdown-item" @click="${() => this._handleSwitchAccount(account.username)}">
                  <alps-avatar .name=${account.display_name || account.username} .size=${16} style="margin-right: 4px;"></alps-avatar>
                  <span class="item-text" style="font-weight: 500;" title="${account.username}">${account.display_name || account.username}</span>
                </button>
              `)}
              <div class="dropdown-divider"></div>
            `;
		})()}
          
          <button class="dropdown-item ${this.currentTab === "messages" ? "active" : ""}" @click="${() => this._handleTabChange("messages")}">
            ${renderIcon("envelopeSimple")} <span class="item-text">${this.i18nStore?.t("navigation.messages")}</span>
          </button>
          ${registry.getNavTabs().map((tab) => b`
            <button class="dropdown-item ${this.currentTab === tab.id ? "active" : ""}" @click="${() => this._handleTabChange(tab.id)}">
              ${renderIcon(tab.icon || "star")} <span class="item-text">${this.i18nStore?.t(tab.labelKey)}</span>
            </button>
          `)}
          <div class="dropdown-divider"></div>
          <button class="dropdown-item ${this.currentTab === "settings" ? "active" : ""}" @click="${this._handleSettings}">
            ${renderIcon("gear")} <span class="item-text">${this.i18nStore?.t("userMenu.settings")}</span>
          </button>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item" @click="${this._handleSignOut}">
            ${renderIcon("signOut")} <span class="item-text">${this.i18nStore?.t("userMenu.signOut")}</span>
          </button>
        </alps-popup>
      </div>
    `;
	}
};
__decorate([n$1({ type: String })], UserProfileMenu.prototype, "username", void 0);
__decorate([n$1({ type: Boolean })], UserProfileMenu.prototype, "isMobile", void 0);
__decorate([n$1({ type: String })], UserProfileMenu.prototype, "currentTab", void 0);
__decorate([c({ context: i18nContext })], UserProfileMenu.prototype, "i18nStore", void 0);
__decorate([c({ context: settingsContext })], UserProfileMenu.prototype, "settingsStore", void 0);
__decorate([c({ context: linkedAccountsContext })], UserProfileMenu.prototype, "linkedAccountsStore", void 0);
UserProfileMenu = __decorate([t("user-profile-menu")], UserProfileMenu);
//#endregion
//#region src/components/alps-header.ts
var AlpsHeader = class AlpsHeader extends i {
	constructor(..._args) {
		super(..._args);
		this.username = "";
		this.currentTab = "";
		this.isMobile = false;
		this.scrolled = false;
		this._handleStoreChange = () => {
			this.requestUpdate();
		};
	}
	connectedCallback() {
		super.connectedCallback();
		this.updateComplete.then(() => {
			this.i18nStore?.addEventListener("change", this._handleStoreChange);
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.i18nStore?.removeEventListener("change", this._handleStoreChange);
	}
	static {
		this.styles = i$1`
    :host {
      display: block;
      position: relative;
      width: 100%;
      height: 57px;
      box-sizing: border-box;
      background: var(--bg-primary, #ffffff);
      border-bottom: 1px solid var(--border-color, #e5e7eb);
      flex-shrink: 0;
      z-index: 20000;
      transition: box-shadow 0.2s ease;
    }

    :host([scrolled][ismobile]) {
      box-shadow: rgba(95, 95, 95, 0.1) 0 4px 4px -2px;
    }

    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      padding: 0 16px;
    }

    .left-section {
      display: flex;
      align-items: center;
      height: 100%;
      gap: 12px;
      flex-shrink: 0;
    }

    .center-section {
      flex: 1;
      display: flex;
      align-items: center;
      min-width: 0;
      margin: 0 24px;
    }

    :host([ismobile]) .center-section {
      margin: 0 8px;
    }

    .right-section {
      display: flex;
      align-items: center;
      gap: 16px;
      flex-shrink: 0;
    }

    ::slotted([slot="center"]) {
      width: 100%;
    }
  `;
	}
	handleSettings() {
		window.location.hash = "/settings";
	}
	async handleSignOut() {
		try {
			if (this.composeStore) await this.composeStore.saveAllDirtyDrafts();
			await fetch("/session", { method: "DELETE" });
			MessageCache.clear();
			clearSessionSettings();
			window.dispatchEvent(new CustomEvent("session-cleared"));
			setLoginNotice("signedOut");
			window.location.hash = "#/login";
		} catch (err) {
			Logger.error("Failed to sign out", err);
		}
	}
	render() {
		return b`
      <div class="header-container">
        <div class="left-section">
          ${this.isMobile ? b`
            <alps-icon-btn 
              title=${this.i18nStore?.t("messageList.menu")} 
              @click=${() => this.dispatchEvent(new CustomEvent("toggle-sidebar"))}
              icon="sidebar"
              style="--icon-size: 20px;"
            ></alps-icon-btn>
          ` : ""}
          <slot name="left"></slot>
        </div>

        <div class="center-section">
          <slot name="center"></slot>
        </div>

        <div class="right-section">
          <slot name="right-actions"></slot>
          ${this.username ? b`
            <user-profile-menu 
              .username=${this.username}
              .isMobile=${this.isMobile}
              .currentTab=${this.currentTab}
              @open-settings=${this.handleSettings}
              @sign-out=${this.handleSignOut}
            ></user-profile-menu>
          ` : ""}
        </div>
      </div>
    `;
	}
};
__decorate([n$1({ type: String })], AlpsHeader.prototype, "username", void 0);
__decorate([n$1({ type: String })], AlpsHeader.prototype, "currentTab", void 0);
__decorate([n$1({
	type: Boolean,
	reflect: true
})], AlpsHeader.prototype, "isMobile", void 0);
__decorate([n$1({
	type: Boolean,
	reflect: true
})], AlpsHeader.prototype, "scrolled", void 0);
__decorate([c({ context: i18nContext })], AlpsHeader.prototype, "i18nStore", void 0);
__decorate([c({ context: composeContext })], AlpsHeader.prototype, "composeStore", void 0);
AlpsHeader = __decorate([t("alps-header")], AlpsHeader);
//#endregion
//#region src/components/app-header.ts
var AppHeader = class AppHeader extends i {
	constructor(..._args) {
		super(..._args);
		this.username = "";
		this.currentTab = "messages";
		this.isMobile = false;
		this.currentMailbox = "";
		this.searchQuery = "";
		this.scrolled = false;
		this._handleStoreChange = () => {
			this.requestUpdate();
		};
		this._handleHashChange = () => {
			const hash = window.location.hash;
			if (hash.startsWith("#/contacts")) this.currentTab = "contacts";
			else if (hash.startsWith("#/settings")) this.currentTab = "settings";
			else {
				const pluginTab = registry.getNavTabs().find((tab) => hash.startsWith(`#/${tab.id}`));
				if (pluginTab) this.currentTab = pluginTab.id;
				else this.currentTab = "messages";
			}
		};
	}
	connectedCallback() {
		super.connectedCallback();
		this.updateComplete.then(() => {
			this.i18nStore?.addEventListener("change", this._handleStoreChange);
		});
		window.addEventListener("hashchange", this._handleHashChange);
		window.addEventListener("plugins-updated", this._handleStoreChange);
		this._handleHashChange();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.i18nStore?.removeEventListener("change", this._handleStoreChange);
		window.removeEventListener("hashchange", this._handleHashChange);
		window.removeEventListener("plugins-updated", this._handleStoreChange);
	}
	static {
		this.styles = i$1`
    :host {
      display: block;
      width: 100%;
    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
    }

    .logo svg {
      width: 28px;
      height: 28px;
    }

    .nav-tabs {
      display: flex;
      height: 100%;
      gap: 8px;
    }

    .nav-tab {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 12px;
      color: var(--text-secondary, #4b5563);
      font-weight: 500;
      font-size: 14px;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      transition: all 0.2s;
    }

    .nav-tab:hover {
      color: var(--text-primary, #111827);
    }

    .nav-tab.active {
      color: var(--accent-color, #2563eb);
      border-bottom-color: var(--accent-color, #2563eb);
    }

    .header-left-slot {
      display: flex;
      align-items: center;
      height: 100%;
      gap: 12px;
    }

    alps-input {
      flex: 1;
      --alps-input-bg: var(--bg-secondary, #f9fafb);
    }
  `;
	}
	handleTabClick(tab) {
		this.currentTab = tab;
		this.dispatchEvent(new CustomEvent("change-tab", { detail: { tab } }));
		if (tab === "messages") {
			if (!window.location.hash.startsWith("#/mailbox/")) window.location.hash = "#/";
		} else window.location.hash = "#/" + tab;
	}
	render() {
		return b`
      <alps-header 
        .username=${this.username} 
        .isMobile=${this.isMobile} 
        .currentTab=${this.currentTab}
        .scrolled=${this.scrolled}
        @toggle-sidebar=${() => this.dispatchEvent(new CustomEvent("toggle-sidebar"))}
      >
        <div slot="left" class="header-left-slot">
          ${!this.isMobile ? b`
            <div class="logo" title="Alps">
              ${renderIcon("edelweiss")}
            </div>
            <div class="nav-tabs">
              <div 
                class="nav-tab ${this.currentTab === "messages" ? "active" : ""}"
                @click=${() => this.handleTabClick("messages")}
                title=${this.i18nStore?.t("navigation.messages")}
              >
                ${this.i18nStore?.t("navigation.messages")}
              </div>
              ${registry.getNavTabs().map((tab) => b`
                <div 
                  class="nav-tab ${this.currentTab === tab.id ? "active" : ""}"
                  @click=${() => this.handleTabClick(tab.id)}
                  title=${this.i18nStore?.t(tab.labelKey) || tab.id}
                >
                  ${this.i18nStore?.t(tab.labelKey) || tab.id}
                </div>
              `)}
            </div>
          ` : ""}
        </div>

        <alps-input 
          slot="center"
          icon="magnifyingGlass"
          ?clearable=${true}
          .value=${this.searchQuery}
          .placeholder=${this.currentTab === "contacts" ? this.i18nStore?.t("contacts.title") || "Contacts" : this.currentTab === "calendar" ? this.i18nStore?.t("calendar.title") || "Search Calendar" : this.currentMailbox ? getMailboxLabel(this.currentMailbox, this.i18nStore) : this.i18nStore?.t("search.placeholder")}
          @keydown=${(e) => {
			if (e.key === "Enter") {
				e.preventDefault();
				this.dispatchEvent(new CustomEvent("search-submit", {
					detail: { value: e.target.value },
					bubbles: true,
					composed: true
				}));
			}
		}}
          @clear=${() => {
			this.dispatchEvent(new CustomEvent("search-submit", {
				detail: { value: "" },
				bubbles: true,
				composed: true
			}));
		}}
        ></alps-input>

        <div slot="right-actions">
        </div>
      </alps-header>
    `;
	}
};
__decorate([n$1({ type: String })], AppHeader.prototype, "username", void 0);
__decorate([n$1({ type: String })], AppHeader.prototype, "currentTab", void 0);
__decorate([n$1({ type: Boolean })], AppHeader.prototype, "isMobile", void 0);
__decorate([n$1({ type: String })], AppHeader.prototype, "currentMailbox", void 0);
__decorate([n$1({ type: String })], AppHeader.prototype, "searchQuery", void 0);
__decorate([n$1({ type: Boolean })], AppHeader.prototype, "scrolled", void 0);
__decorate([c({ context: i18nContext })], AppHeader.prototype, "i18nStore", void 0);
AppHeader = __decorate([t("app-header")], AppHeader);
//#endregion
//#region src/components/alps-loader.ts
var AlpsLoader = class AlpsLoader extends i {
	constructor(..._args) {
		super(..._args);
		this.text = "";
		this.fullHeight = false;
	}
	static {
		this.styles = i$1`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      color: currentColor;
    }
    
    :host([full-height]) {
      display: flex;
      height: 100%;
    }

    .spinner {
      animation: spin 1.5s linear infinite;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .spinner .icon {
      width: var(--loader-size, 32px);
      height: var(--loader-size, 32px);
    }

    @keyframes spin {
      100% { transform: rotate(360deg); }
    }
  `;
	}
	render() {
		return b`
      <div class="spinner">${renderIcon("edelweiss")}</div>
      ${this.text ? b`<span>${this.text}</span>` : ""}
    `;
	}
};
__decorate([n$1({ type: String })], AlpsLoader.prototype, "text", void 0);
__decorate([n$1({
	type: Boolean,
	attribute: "full-height"
})], AlpsLoader.prototype, "fullHeight", void 0);
AlpsLoader = __decorate([t("alps-loader")], AlpsLoader);
//#endregion
//#region src/components/alps-initial-loader.ts
var AlpsInitialLoader = class AlpsInitialLoader extends i {
	constructor(..._args) {
		super(..._args);
		this.hidden = false;
	}
	static {
		this.styles = i$1`
    :host {
      position: absolute;
      inset: 0;
      background: var(--bg-primary, #ffffff);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.5s ease-in-out, visibility 0.5s;
    }

    :host([hidden]) {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
  `;
	}
	render() {
		return b`<alps-loader></alps-loader>`;
	}
};
__decorate([n$1({
	type: Boolean,
	reflect: true
})], AlpsInitialLoader.prototype, "hidden", void 0);
AlpsInitialLoader = __decorate([t("alps-initial-loader")], AlpsInitialLoader);
//#endregion
//#region ../plugins/carddav/frontend/contacts-categories.ts
var AlpsContactsCategories = class AlpsContactsCategories extends i {
	constructor(..._args) {
		super(..._args);
		this.contacts = [];
		this.uniqueCategories = [];
		this.selectedCategory = "";
		this.filterQuery = "";
		this.sidebarCollapsed = false;
		this.isSidebarHovered = false;
		this.suppressSidebarHover = false;
		this.isMobile = false;
		this.activeKebabMenu = null;
		this.sidebarScrolled = false;
	}
	static {
		this.styles = [
			popupStyles,
			sidebarLayoutStyles,
			i$1`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1;
      width: 100%;
      min-height: 0;
      box-sizing: border-box;
    }
    .sidebar-wrapper {
      background-color: var(--bg-secondary, #f9fafb);
    }
    .sidebar-header {
      background-color: var(--bg-secondary, #f9fafb);
    }
    .sidebar-wrapper.collapsed .category-item {
      border-radius: 6px 0 0 6px;
    }
    .sidebar-content {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 8px;
    }
    .category-item {
      display: flex;
      align-items: center;
      position: relative;
      height: 36px;
      padding: 0 8px;
      box-sizing: border-box;
      border-radius: 6px;
      cursor: pointer;
      color: var(--text-primary);
      margin-bottom: 2px;
      user-select: none;
      transition: background 0.15s;
    }
    .category-item:hover {
      background: var(--hover-color, #e5e7eb);
    }
    .category-item.active {
      background: var(--bg-selected, #eff6ff);
      color: var(--accent-hover, #2563eb);
      font-weight: 600;
    }
    .category-name {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .category-actions {
      display: none;
      align-items: center;
      padding-left: 8px;
      margin-left: auto;
      margin-right: -4px;
    }
    .category-item.active .category-actions {
      display: none;
    }
    .category-badge {
      background: rgba(0,0,0,0.08);
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 600;
      color: var(--text-secondary);
    }
    
    .category-item.active .category-badge {
      background: rgba(255,255,255,0.2);
    }

    @media (hover: hover) {
      .category-item:hover .category-actions {
        display: flex;
      }
      .category-item.has-actions:hover .category-badge {
        display: none;
      }
    }
    .category-actions:focus-within,
    .category-actions.popup-open {
      display: flex;
    }
    .category-actions:focus-within ~ .category-badge,
    .category-actions.popup-open ~ .category-badge {
      display: none;
    }
    .category-icon {
      pointer-events: none;
      margin-right: 8px;
    }
    .kebab-btn {
      --btn-padding: 8px;
    }
  `
		];
	}
	handleSidebarScroll(e) {
		const isScrolled = e.target.scrollTop > 0;
		if (this.sidebarScrolled !== isScrolled) this.sidebarScrolled = isScrolled;
	}
	render() {
		return b`
      <div class="sidebar-wrapper ${this.sidebarCollapsed && !this.isMobile && (!this.isSidebarHovered || this.suppressSidebarHover) ? "collapsed" : ""}">
        <alps-toolbar class="sidebar-header" ?scrolled=${this.sidebarScrolled}>
          <alps-create-button 
            icon="userPlus" 
            ?collapsed=${this.sidebarCollapsed && !this.isMobile && (!this.isSidebarHovered || this.suppressSidebarHover)}
            @click=${() => this.dispatchEvent(new CustomEvent("create-contact"))}
          >${this.i18nStore?.t("contacts.addContact")}</alps-create-button>
        </alps-toolbar>
        
        <div class="sidebar-content" @scroll=${this.handleSidebarScroll}>
          <div class="sidebar-scroll-content">
            ${[
			CATEGORY_ALL_CONTACTS,
			CATEGORY_FAVORITES,
			...this.uniqueCategories.filter((c) => c !== CATEGORY_FAVORITES)
		].map((cat) => {
			const count = cat === "All Contacts" ? this.contacts.length : this.contacts.filter((c) => c.categories && c.categories.includes(cat)).length;
			const isSystem = cat === "All Contacts" || cat === "Favorites";
			return b`
                <div class="category-item ${cat === "All Contacts" ? !this.selectedCategory && !this.filterQuery ? "active" : "" : this.selectedCategory === cat ? "active" : ""} ${!isSystem ? "has-actions" : ""}"
                  @click=${() => this.dispatchEvent(new CustomEvent("select-category", { detail: { category: cat } }))}
                  draggable=${!isSystem ? "true" : "false"}
                  @dragstart=${(e) => {
				if (isSystem) return;
				e.dataTransfer?.setData("text/plain", cat);
				this.dispatchEvent(new CustomEvent("drag-start", { detail: { category: cat } }));
			}}
                  @dragend=${() => {
				if (isSystem) return;
				this.dispatchEvent(new CustomEvent("drag-end"));
			}}
                >
                  <alps-icon-btn class="category-icon" icon=${cat === "All Contacts" ? "users" : cat === "Favorites" ? "starFourFill" : "folderUser"}></alps-icon-btn>
                  <span class="category-name">${cat === "All Contacts" ? this.i18nStore?.t("contacts.allContacts") : cat === "Favorites" ? this.i18nStore?.t("contacts.favorites") : cat}</span>
                  
                  ${!isSystem ? b`
                    <div class="category-actions ${this.activeKebabMenu === cat ? "popup-open" : ""}" @click=${(e) => e.stopPropagation()}>
                      <alps-popup 
                        align="right" 
                        position="bottom"
                        @popup-open=${() => {
				this.activeKebabMenu = cat;
			}}
                        @popup-close=${() => {
				if (this.activeKebabMenu === cat) this.activeKebabMenu = null;
			}}
                      >
                        <alps-icon-btn slot="trigger" class="kebab-btn" icon="dotsThreeCircleVertical"></alps-icon-btn>
                        <button class="dropdown-item" @click=${(e) => {
				const popup = e.target.closest("alps-popup");
				if (popup) popup.close();
				this.dispatchEvent(new CustomEvent("rename-category", { detail: { category: cat } }));
			}}>
                          ${renderIcon("pen")} <span class="item-text">${this.i18nStore?.t("contacts.rename")}</span>
                        </button>
                        <button class="dropdown-item text-danger" @click=${(e) => {
				const popup = e.target.closest("alps-popup");
				if (popup) popup.close();
				this.dispatchEvent(new CustomEvent("delete-category", { detail: { category: cat } }));
			}}>
                          ${renderIcon("trash")} <span class="item-text">${this.i18nStore?.t("contacts.delete")}</span>
                        </button>
                      </alps-popup>
                    </div>
                  ` : ""}

                  ${count > 0 || cat === "Favorites" ? b`<div class="category-badge">${count}</div>` : ""}
                </div>
              `;
		})}
          </div>
        </div>
      </div>
    `;
	}
};
__decorate([c({ context: i18nContext })], AlpsContactsCategories.prototype, "i18nStore", void 0);
__decorate([n$1({ type: Array })], AlpsContactsCategories.prototype, "contacts", void 0);
__decorate([n$1({ type: Array })], AlpsContactsCategories.prototype, "uniqueCategories", void 0);
__decorate([n$1({ type: String })], AlpsContactsCategories.prototype, "selectedCategory", void 0);
__decorate([n$1({ type: String })], AlpsContactsCategories.prototype, "filterQuery", void 0);
__decorate([n$1({ type: Boolean })], AlpsContactsCategories.prototype, "sidebarCollapsed", void 0);
__decorate([n$1({ type: Boolean })], AlpsContactsCategories.prototype, "isSidebarHovered", void 0);
__decorate([n$1({ type: Boolean })], AlpsContactsCategories.prototype, "suppressSidebarHover", void 0);
__decorate([n$1({ type: Boolean })], AlpsContactsCategories.prototype, "isMobile", void 0);
__decorate([r()], AlpsContactsCategories.prototype, "activeKebabMenu", void 0);
__decorate([r()], AlpsContactsCategories.prototype, "sidebarScrolled", void 0);
AlpsContactsCategories = __decorate([t("alps-contacts-categories")], AlpsContactsCategories);
//#endregion
//#region src/services/mailbox-operations.ts
var MailboxOperationsService = class extends EventTarget {
	async createMailbox(name) {
		console.log("createMailbox", name);
		try {
			const formData = new URLSearchParams();
			formData.append("name", name);
			const res = await fetchWithTimeout("/mailboxes", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: formData.toString()
			});
			if (res.status === 401) {
				this.dispatchEvent(new CustomEvent("auth-error"));
				window.dispatchEvent(new CustomEvent("auth-error"));
				return false;
			}
			if (res.ok) {
				messageSync.sync();
				return true;
			}
			Logger.error("Create request failed", res);
			return false;
		} catch (err) {
			Logger.error("Failed to create mailbox", err);
			return false;
		}
	}
	async renameMailbox(oldName, newName) {
		console.log("renameMailbox", oldName, newName);
		try {
			const res = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(oldName)}/rename`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ new_name: newName })
			});
			if (res.status === 401) {
				this.dispatchEvent(new CustomEvent("auth-error"));
				window.dispatchEvent(new CustomEvent("auth-error"));
				return false;
			}
			if (res.ok) {
				messageSync.sync();
				return true;
			}
			Logger.error("Rename request failed", res);
			return false;
		} catch (err) {
			Logger.error("Failed to rename mailbox", err);
			return false;
		}
	}
	async deleteMailbox(name) {
		console.log("deleteMailbox", name);
		try {
			const res = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(name)}`, { method: "DELETE" });
			if (res.status === 401) {
				this.dispatchEvent(new CustomEvent("auth-error"));
				window.dispatchEvent(new CustomEvent("auth-error"));
				return false;
			}
			if (res.ok) {
				messageSync.sync();
				return true;
			}
			Logger.error("Delete request failed", res);
			return false;
		} catch (err) {
			Logger.error("Failed to delete mailbox", err);
			return false;
		}
	}
	async emptyMailbox(name) {
		console.log("emptyMailbox", name);
		try {
			const res = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(name)}/empty`, { method: "POST" });
			if (res.status === 401) {
				this.dispatchEvent(new CustomEvent("auth-error"));
				window.dispatchEvent(new CustomEvent("auth-error"));
				return false;
			}
			if (res.ok) {
				messageSync.sync();
				return true;
			}
			Logger.error("Empty request failed", res);
			return false;
		} catch (err) {
			Logger.error("Failed to empty mailbox", err);
			return false;
		}
	}
	async subscribeMailbox(name) {
		try {
			const res = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(name)}/subscribe`, { method: "PUT" });
			if (res.status === 401) {
				this.dispatchEvent(new CustomEvent("auth-error"));
				window.dispatchEvent(new CustomEvent("auth-error"));
				return false;
			}
			if (res.ok) {
				messageSync.sync();
				return true;
			}
			return false;
		} catch (err) {
			Logger.error("Failed to subscribe mailbox", err);
			return false;
		}
	}
	async unsubscribeMailbox(name) {
		try {
			const res = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(name)}/unsubscribe`, { method: "PUT" });
			if (res.status === 401) {
				this.dispatchEvent(new CustomEvent("auth-error"));
				window.dispatchEvent(new CustomEvent("auth-error"));
				return false;
			}
			if (res.ok) {
				messageSync.sync();
				return true;
			}
			return false;
		} catch (err) {
			Logger.error("Failed to unsubscribe mailbox", err);
			return false;
		}
	}
};
var mailboxOperations = new MailboxOperationsService();
//#endregion
//#region src/components/alps-tag.ts
var AlpsTag = class AlpsTag extends i {
	constructor(..._args) {
		super(..._args);
		this.name = "";
		this.color = "";
	}
	static {
		this.styles = i$1`
    :host {
      display: inline-flex;
    }

    .tag-pill {
      display: inline-flex;
      align-items: center;
      padding: 0 10px 0 6px;
      height: 18px;
      border-radius: 4px 0 0 4px;
      font-size: 10px;
      font-weight: 600;
      color: #fff;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 80px;
      line-height: 1;
      opacity: 0.9;
      clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 50%, calc(100% - 6px) 100%, 0 100%);
    }

    .tag-pill:hover {
      opacity: 1;
    }
  `;
	}
	render() {
		return b`
      <div class="tag-pill" style="background-color: ${this.color}" title=${this.name}>
        ${this.name}
      </div>
    `;
	}
};
__decorate([n$1({ type: String })], AlpsTag.prototype, "name", void 0);
__decorate([n$1({ type: String })], AlpsTag.prototype, "color", void 0);
AlpsTag = __decorate([t("alps-tag")], AlpsTag);
//#endregion
//#region src/components/alps-pagination.ts
var AlpsPagination = class AlpsPagination extends i {
	constructor(..._args) {
		super(..._args);
		this.currentPage = 0;
		this.totalItems = 0;
		this.itemsPerPage = 50;
		this._handleStoreChange = () => {
			this.requestUpdate();
		};
	}
	connectedCallback() {
		super.connectedCallback();
		this.updateComplete.then(() => {
			this.i18nStore?.addEventListener("change", this._handleStoreChange);
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.i18nStore?.removeEventListener("change", this._handleStoreChange);
	}
	static {
		this.styles = i$1`
    :host {
      display: flex;
      flex: 1;
      min-width: 0;
    }

    .pagination-container {
      display: flex;
      flex: 1;
      align-items: center;
      background: var(--bg-color);
      font-size: 13px;
      color: var(--text-muted);
      min-width: 0;
    }

    .pagination-controls {
      display: flex;
      gap: 8px;
      flex-shrink: 0;
    }

    .pagination-text {
      margin: 0 auto;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }


  `;
	}
	changePage(delta) {
		const newPage = this.currentPage + delta;
		if (newPage >= 0 && newPage < Math.ceil(this.totalItems / this.itemsPerPage)) this.dispatchEvent(new CustomEvent("change-page", {
			detail: { page: newPage },
			bubbles: true,
			composed: true
		}));
	}
	render() {
		const startIdx = this.currentPage * this.itemsPerPage + 1;
		const endIdx = Math.min((this.currentPage + 1) * this.itemsPerPage, this.totalItems);
		return b`
      <div class="pagination-container">
        <div class="pagination-text" title="${this.totalItems > 0 ? `${startIdx}-${endIdx}/${this.totalItems}` : this.i18nStore?.t("pagination.zeroMessages")}">
          ${this.totalItems > 0 ? b`${startIdx}-${endIdx}/${this.totalItems}` : this.i18nStore?.t("pagination.zeroMessages")}
        </div>
        <div class="pagination-controls">
          <alps-icon-btn 
            title=${this.i18nStore?.t("pagination.previousPage")} 
            ?disabled=${this.currentPage === 0} 
            @click=${() => this.changePage(-1)}
            icon="caretLeft"
            style="--icon-size: 16px;"
          ></alps-icon-btn>
          <alps-icon-btn 
            title=${this.i18nStore?.t("pagination.nextPage")} 
            ?disabled=${(this.currentPage + 1) * this.itemsPerPage >= this.totalItems || this.totalItems === 0} 
            @click=${() => this.changePage(1)}
            icon="caretRight"
            style="--icon-size: 16px;"
          ></alps-icon-btn>
        </div>
      </div>
    `;
	}
};
__decorate([n$1({ type: Number })], AlpsPagination.prototype, "currentPage", void 0);
__decorate([n$1({ type: Number })], AlpsPagination.prototype, "totalItems", void 0);
__decorate([n$1({ type: Number })], AlpsPagination.prototype, "itemsPerPage", void 0);
__decorate([c({ context: i18nContext })], AlpsPagination.prototype, "i18nStore", void 0);
AlpsPagination = __decorate([t("alps-pagination")], AlpsPagination);
//#endregion
//#region src/components/alps-banner.ts
var AlpsBanner = class AlpsBanner extends i {
	constructor(..._args) {
		super(..._args);
		this.variant = "info";
	}
	static {
		this.styles = i$1`
    :host {
      display: block;
      position: sticky;
      top: 0;
      z-index: 10;
    }

    .banner {
      padding: 6px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      min-height: 38px;
      box-sizing: border-box;
      font-size: 13px;
      border-bottom: 1px solid var(--border-color);
      background: var(--bg-primary, #ffffff);
      color: var(--text-primary, #111827);
      box-shadow: rgba(95, 95, 95, 0.1) 0 4px 4px -2px;
    }

    .content {
      display: flex;
      align-items: center;
      flex: 1;
      min-width: 0;
    }

    .actions {
      margin-left: 16px;
      flex-shrink: 0;
      display: flex;
      gap: 8px;
    }

    ::slotted(alps-button) {
      --btn-padding: 4px 10px;
      --btn-font-size: 12px;
    }

    @media (max-width: 768px) {
      .banner {
        font-size: 11px;
        padding: 6px 12px;
      }
      .content {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .actions {
        margin-left: 8px;
      }
    }
  `;
	}
	render() {
		return b`
      <div class="banner ${this.variant}">
        <div class="content">
          <slot></slot>
        </div>
        <div class="actions">
          <slot name="action"></slot>
        </div>
      </div>
    `;
	}
};
__decorate([n$1({
	type: String,
	reflect: true
})], AlpsBanner.prototype, "variant", void 0);
AlpsBanner = __decorate([t("alps-banner")], AlpsBanner);
//#endregion
//#region src/components/message-list.ts
var MessageList = class MessageList extends i {
	constructor(..._args) {
		super(..._args);
		this.messages = [];
		this.currentMailbox = "";
		this.currentMailboxRole = "";
		this.loading = false;
		this.selectedMessage = null;
		this.layoutMode = "vertical";
		this.isMobile = false;
		this.sidebarCollapsed = false;
		this.currentPage = 0;
		this.totalMessages = 0;
		this.messagesPerPage = 50;
		this.filterQuery = "";
		this.sortOrder = "desc";
		this.densityMode = "compact";
		this.selectedMessages = /* @__PURE__ */ new Set();
		this.syncing = false;
		this.isSpinning = false;
		this.isScrolled = false;
		this.isAtBottom = false;
		this.focusedIndex = -1;
		this.showEmptyConfirm = false;
		this.expandedThreads = /* @__PURE__ */ new Set();
		this._shouldScrollToTop = false;
		this._handleStoreChange = () => {
			this.requestUpdate();
		};
		this.handleSyncStart = () => {
			this.syncing = true;
			this.isSpinning = true;
		};
		this.handleSyncEnd = () => {
			this.syncing = false;
		};
		this.handleSpinIteration = () => {
			if (!this.syncing) this.isSpinning = false;
		};
		this.handleScroll = (e) => {
			this.checkScrollState(e.target);
		};
	}
	static {
		this.styles = i$1`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    
    .list-header {
      padding: 0 12px;
      gap: 12px;
      background: var(--bg-primary, #fff);
      overflow: hidden;
    }

    .select-all-checkbox {
      cursor: pointer;
    }
    
    .current-mailbox-label {
      font-weight: 600;
      font-size: 14px;
      color: var(--text-color);
      margin-left: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .mailbox-badge {
      display: inline-flex;
      align-items: center;
      background: var(--bg-tertiary, #f3f4f6);
      color: var(--text-secondary, #4b5563);
      font-size: 10px;
      font-weight: 500;
      padding: 1px 6px;
      border-radius: 4px;
      border: 1px solid var(--border-color, #e5e7eb);
      margin-right: 6px;
      flex-shrink: 0;
      text-transform: capitalize;
    }
    
    .list-content {
      flex: 1;
      overflow-y: auto;
      margin-bottom: -1px;
      position: relative;
      z-index: 1;
    }

    .message-item {
      padding: 12px;
      border-bottom: 1px solid var(--border-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 16px;
      transition: background 0.15s, padding 0.2s, gap 0.2s;
    }

    /* Density: Loose */
    :host(.density-loose) .message-item {
      padding: 16px 12px 16px 0;
      gap: 16px;
    }
    :host(.density-loose) .message-preview {
      -webkit-line-clamp: 3;
    }
    :host(.density-loose) .checkbox-col {
      margin-top: -16px;
      margin-bottom: -16px;
    }

    /* Density: Compact */
    :host(.density-compact) .message-item {
      padding: 8px 12px 8px 0;
      gap: 12px;
    }
    :host(.density-compact) .message-header-row {
      margin-bottom: 2px;
    }
    :host(.density-compact) .message-subject {
      font-size: 13px;
      margin-bottom: 2px;
    }
    :host(.density-compact) .message-preview {
      font-size: 12px;
      -webkit-line-clamp: 1;
    }
    :host(.density-compact) .checkbox-col {
      margin-top: -8px;
      margin-bottom: -8px;
    }

    /* Density: Ultra-compact */
    :host(.density-ultra-compact) .message-item {
      padding: 4px 12px 4px 0;
      gap: 12px;
    }
    :host(.density-ultra-compact) .message-subject {
      font-size: 13px;
      flex: 1;
      margin: 0;
    }
    :host(.density-ultra-compact) .message-sender {
      width: 120px;
      flex-shrink: 1;
      min-width: 80px;
    }
    :host(.density-ultra-compact) .checkbox-col {
      margin-top: -4px;
      margin-bottom: -4px;
    }

    @media (max-width: 768px) {
      :host(.density-ultra-compact) .message-sender {
        width: 80px;
        min-width: 60px;
      }
      :host(.density-ultra-compact) .message-item,
      :host(.density-compact) .message-item {
        padding: 12px;
      }
      :host(.density-loose) .message-item {
        padding: 16px 12px;
      }
    }

    .message-item:hover {
      background: var(--hover-color);
    }

    .message-item.unread {
      background: var(--bg-unread, rgba(234, 179, 8, 0.08));
    }

    .message-item.unread:hover {
      background: var(--bg-unread-hover, rgba(234, 179, 8, 0.12));
    }

    .message-item.starred .message-sender,
    .message-item.starred .message-subject {
      color: var(--accent-color);
      font-weight: 600;
    }

    .message-item.active {
      background: var(--bg-selected);
    }

    .message-item.active.unread {
      background: var(--bg-selected);
    }

    .message-item.active .message-preview,
    .message-item.active .message-date {
      color: var(--text-muted);
    }

    .list-content:focus {
      outline: none;
    }

    .list-content:focus-within .message-item.focused {
      outline: 2px solid var(--accent-color);
      outline-offset: -2px;
      z-index: 10;
      position: relative;
    }

    .message-item.unread .message-sender {
      font-weight: 700;
    }

    .message-item.unread .message-subject {
      font-weight: 700;
      color: var(--text-color);
    }

    .message-item.active.unread .message-subject {
      color: var(--text-color);
    }

    .message-details {
      flex: 1;
      min-width: 0;
    }

    .message-header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }

    .message-sender {
      font-weight: 450;
      color: var(--text-sender-read, #202020);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }

    .message-date {
      font-size: 12px;
      color: var(--text-muted);
      white-space: nowrap;
      margin-left: 8px;
      text-align: right;
      flex-shrink: 0;
    }

    .message-size {
      font-size: 11px;
      color: var(--text-muted);
      white-space: nowrap;
      margin-left: 8px;
      text-align: right;
      flex-shrink: 0;
    }

    .avatar-stack {
      display: flex;
      align-items: center;
      position: relative;
      flex-shrink: 0;
    }
    
    .avatar-wrapper {
      position: relative;
      border: 2px solid var(--bg-primary, #fff);
      border-radius: 50%;
      background: var(--bg-primary, #fff);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: border-color 0.15s, background-color 0.15s;
    }

    .message-item.active .avatar-wrapper {
      border-color: var(--bg-selected);
      background: var(--bg-selected);
    }
    
    .message-item.active.unread .avatar-wrapper {
      border-color: var(--bg-selected);
      background: var(--bg-selected);
    }

    .message-item.unread .avatar-wrapper {
      border-color: var(--bg-unread, rgba(234, 179, 8, 0.08));
      background: var(--bg-unread, rgba(234, 179, 8, 0.08));
    }

    .message-item:hover .avatar-wrapper {
      border-color: var(--hover-color);
      background: var(--hover-color);
    }

    .avatar-wrapper:not(:first-child) {
      margin-left: -8px;
    }

    .extra-count {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
      font-size: 11px;
      font-weight: 500;
      background: var(--bg-secondary, #f3f4f6) !important;
      border-radius: 50%;
      box-sizing: content-box;
    }

    .attachment-col {
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    }

    .message-subject {
      font-size: 14px;
      margin-bottom: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .message-preview {
      font-size: 13px;
      color: var(--text-muted);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .empty-state {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--text-muted);
    }

    alps-pagination {
      flex: 1;
      min-width: 0;
    }

    .loading-state {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      gap: 12px;
      color: var(--text-muted);
    }

    .header-divider {
      width: 1px;
      height: 20px;
      background: var(--border-color);
      margin: 0 4px;
    }

    .icon {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }
    
    .spinner {
      animation: spin 3s linear infinite;
      display: flex;
      margin-right: 8px;
    }
    
    .spinner .icon {
      width: 32px;
      height: 32px;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }



    .message-checkbox, .select-all-checkbox {
      cursor: pointer;
      opacity: 0.4;
      transition: opacity 0.2s;
    }

    .checkbox-col {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-left: 12px;
      padding-right: 6px;
      align-self: stretch;
      cursor: pointer;
    }

    .message-item:hover .message-checkbox,
    .message-checkbox:checked,
    .select-all-checkbox:hover,
    .select-all-checkbox:checked {
      opacity: 1;
    }

    .star-btn {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
      opacity: 0.3;
      color: var(--text-muted);
    }
    .star-btn:hover,    
    .star-btn.starred {
      opacity: 1;
    }
    .star-btn.starred {
      color: var(--accent-color);
    }
    .star-btn:hover {
      transform: scale(1.1);
    }
    
    .indicator-icon {
      display: flex;
      color: var(--text-muted);
    }
    .indicator-icon svg {
      width: 18px;
      height: 18px;
    }

    .message-indicators {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-shrink: 0;
    }

    .star-btn-wrapper-ultra {
      margin-right: 8px;
    }

    .indicators-wrapper-ultra {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-right: 4px;
    }

    .message-header-inner {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
      flex: 1;
      margin-right: 12px;
    }

    .message-header-inner .star-btn {
      flex-shrink: 0;
    }

    .message-subject-row {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
      overflow: hidden;
    }

    .message-subject-row .message-subject {
      margin-bottom: 0;
      flex: 1;
    }

    .indicators-wrapper {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-right: 6px;
      flex-shrink: 0;
    }

    .tag-pills {
      display: flex;
      flex-wrap: nowrap;
      gap: 4px;
      margin-right: 6px;
      overflow: hidden;
      flex-shrink: 0;
      align-items: center;
    }

    .mobile-bottom-header {
      height: 57px;
      box-sizing: border-box;
      padding: 0 12px;
      border-top: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: var(--bg-primary);
      flex-shrink: 0;
      position: relative;
      z-index: 10;
      box-shadow: rgba(95, 95, 95, 0.1) 0 -4px 4px -2px;
      transition: box-shadow 0.2s ease;
    }

    .mobile-bottom-header.at-bottom {
      box-shadow: none;
    }

    .mobile-bottom-actions {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .loading-overlay {
      opacity: 0.5;
      pointer-events: none;
      transition: opacity 0.2s ease-in-out;
    }

    .thread-count-caret-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--border-color, #e5e7eb);
      color: var(--text-muted, #4b5563);
      font-size: 10px;
      font-weight: 700;
      padding: 1px 5px;
      border-radius: 8px;
      line-height: 1;
      flex-shrink: 0;
    }
    
    .message-item.unread .thread-count-caret-badge {
      background: var(--accent-color, #eab308);
      color: #fff;
    }

    .caret-col {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      width: 44px;
      height: 100%;
      cursor: pointer;
      color: var(--text-muted);
      opacity: 0.6;
      transition: opacity 0.2s, color 0.2s;
      flex-shrink: 0;
    }
    .caret-col:hover {
      opacity: 1;
      color: var(--text-color);
    }
    .caret-col.empty {
      cursor: default;
      opacity: 0;
      pointer-events: none;
    }
    .caret-col svg {
      width: 14px;
      height: 14px;
    }

    .message-item.sub-message-item {
      background: var(--bg-secondary, #fafafa);
    }
    .message-item.sub-message-item.first-sub-item {
      box-shadow: inset rgba(95, 95, 95, 0.1) 0 4px 4px -2px;
    }
    .message-item.sub-message-item.last-sub-item {
      box-shadow: inset rgba(95, 95, 95, 0.1) 0 -4px 4px -2px;
    }
    .message-item.sub-message-item.first-sub-item.last-sub-item {
      box-shadow: inset rgba(95, 95, 95, 0.1) 0 4px 4px -2px,
                  inset rgba(95, 95, 95, 0.1) 0 -4px 4px -2px;
    }
    .message-item.sub-message-item:hover {
      background: var(--hover-color);
    }
    .message-item.sub-message-item.active {
      background: var(--bg-selected);
    }
  `;
	}
	get visibleMessages() {
		const list = [];
		for (const msg of this.messages || []) {
			list.push(msg);
			if (msg.SubMessages && msg.SubMessages.length > 0 && this.isThreadExpanded(String(msg.UID))) list.push(...msg.SubMessages);
		}
		return list;
	}
	isThreadExpanded(uid) {
		return this.expandedThreads.has(uid);
	}
	toggleThreadCollapse(e, uid) {
		e.stopPropagation();
		const newSet = new Set(this.expandedThreads);
		if (newSet.has(uid)) newSet.delete(uid);
		else newSet.add(uid);
		this.expandedThreads = newSet;
	}
	handleSelectAll(e) {
		if (e.target.checked) {
			const uids = this.visibleMessages.map((m) => String(m.UID));
			this.selectedMessages = new Set(uids);
		} else this.selectedMessages = /* @__PURE__ */ new Set();
		this.dispatchEvent(new CustomEvent("selection-changed", { detail: { selectedUids: this.selectedMessages } }));
	}
	handleSelectMessage(e, uid) {
		e.stopPropagation();
		const checked = e.target.checked;
		const newSet = new Set(this.selectedMessages);
		if (checked) newSet.add(uid);
		else newSet.delete(uid);
		this.selectedMessages = newSet;
		this.dispatchEvent(new CustomEvent("selection-changed", { detail: { selectedUids: this.selectedMessages } }));
	}
	connectedCallback() {
		super.connectedCallback();
		messageSync.addEventListener("sync-start", this.handleSyncStart);
		messageSync.addEventListener("sync-success", this.handleSyncEnd);
		messageSync.addEventListener("sync-error", this.handleSyncEnd);
		this.updateComplete.then(() => {
			this.i18nStore?.addEventListener("change", this._handleStoreChange);
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		messageSync.removeEventListener("sync-start", this.handleSyncStart);
		messageSync.removeEventListener("sync-success", this.handleSyncEnd);
		messageSync.removeEventListener("sync-error", this.handleSyncEnd);
		this.i18nStore?.removeEventListener("change", this._handleStoreChange);
	}
	willUpdate(changedProperties) {
		super.willUpdate(changedProperties);
		if (changedProperties.has("currentMailbox") || changedProperties.has("currentPage") || changedProperties.has("filterQuery") || changedProperties.has("sortOrder")) {
			if (this.selectedMessages.size > 0) {
				this.selectedMessages = /* @__PURE__ */ new Set();
				this.dispatchEvent(new CustomEvent("selection-changed", { detail: { selectedUids: this.selectedMessages } }));
			}
			this._shouldScrollToTop = true;
		}
		if (changedProperties.has("selectedMessage") || changedProperties.has("messages")) {
			if (changedProperties.has("messages") && this.messages) {
				if (this.selectedMessages.size > 0) {
					const availableUids = /* @__PURE__ */ new Set();
					for (const m of this.messages) {
						availableUids.add(String(m.UID));
						if (m.SubMessages) for (const sub of m.SubMessages) availableUids.add(String(sub.UID));
					}
					let changed = false;
					const newSet = /* @__PURE__ */ new Set();
					for (const uid of this.selectedMessages) if (availableUids.has(uid)) newSet.add(uid);
					else changed = true;
					if (changed) {
						this.selectedMessages = newSet;
						this.dispatchEvent(new CustomEvent("selection-changed", { detail: { selectedUids: this.selectedMessages } }));
					}
				}
			}
			if (this.selectedMessage) {
				if (this.messages) {
					let expandedChanged = false;
					const newSet = new Set(this.expandedThreads);
					for (const m of this.messages) if (m.SubMessages && m.SubMessages.some((s) => String(s.UID) === String(this.selectedMessage.UID))) {
						const uid = String(m.UID);
						if (!newSet.has(uid)) {
							newSet.add(uid);
							expandedChanged = true;
						}
					}
					if (expandedChanged) this.expandedThreads = newSet;
				}
				const visible = this.visibleMessages;
				if (visible.length > 0) {
					const idx = visible.findIndex((m) => String(m.UID) === String(this.selectedMessage.UID));
					if (idx !== -1) this.focusedIndex = idx;
				}
			}
		}
	}
	checkScrollState(target) {
		if (!target) return;
		const scrolled = target.scrollTop > 0;
		if (this.isScrolled !== scrolled) {
			this.isScrolled = scrolled;
			this.dispatchEvent(new CustomEvent("list-scrolled", { detail: { scrolled } }));
		}
		const atBottom = target.scrollHeight <= target.clientHeight || Math.ceil(target.scrollTop + target.clientHeight) >= target.scrollHeight;
		if (this.isAtBottom !== atBottom) this.isAtBottom = atBottom;
	}
	updated(changedProperties) {
		super.updated(changedProperties);
		if (changedProperties.has("densityMode")) {
			this.classList.remove("density-loose", "density-normal", "density-compact", "density-ultra-compact");
			this.classList.add(`density-${this.densityMode}`);
		}
		if (changedProperties.has("syncing") && this.syncing) this.isSpinning = true;
		if (changedProperties.has("selectedMessage") && this.selectedMessage) setTimeout(() => {
			const activeItem = this.renderRoot.querySelector(".list-content")?.querySelector(".message-item.active");
			if (activeItem) activeItem.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
		}, 50);
		if (this._shouldScrollToTop && (changedProperties.has("messages") || changedProperties.has("loading") && !this.loading)) {
			const listContent = this.renderRoot.querySelector(".list-content");
			if (listContent) listContent.scrollTop = 0;
			this._shouldScrollToTop = false;
		}
		const listContent = this.renderRoot.querySelector(".list-content");
		if (listContent) requestAnimationFrame(() => {
			this.checkScrollState(listContent);
		});
	}
	selectMessage(msg) {
		if (this.selectedMessages.size > 0) {
			this.selectedMessages = /* @__PURE__ */ new Set();
			this.dispatchEvent(new CustomEvent("selection-changed", { detail: { selectedUids: this.selectedMessages } }));
		}
		this.dispatchEvent(new CustomEvent("select-message", { detail: { message: msg } }));
	}
	handleKeyDown(e) {
		const visible = this.visibleMessages;
		if (!visible || visible.length === 0) return;
		if (e.key === "ArrowDown") {
			e.preventDefault();
			this.focusedIndex = Math.min(visible.length - 1, this.focusedIndex + 1);
			this.scrollToFocused();
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			this.focusedIndex = Math.max(0, this.focusedIndex - 1);
			this.scrollToFocused();
		} else if (e.key === "Enter") {
			e.preventDefault();
			if (this.focusedIndex >= 0 && this.focusedIndex < visible.length) this.selectMessage(visible[this.focusedIndex]);
		} else if (e.key === " ") {
			e.preventDefault();
			if (this.focusedIndex >= 0 && this.focusedIndex < visible.length) {
				const msg = visible[this.focusedIndex];
				const uid = String(msg.UID);
				const newSet = new Set(this.selectedMessages);
				if (newSet.has(uid)) newSet.delete(uid);
				else newSet.add(uid);
				this.selectedMessages = newSet;
				this.dispatchEvent(new CustomEvent("selection-changed", { detail: { selectedUids: this.selectedMessages } }));
				this.focusedIndex = Math.min(visible.length - 1, this.focusedIndex + 1);
				this.scrollToFocused();
			}
		}
	}
	async handleEmptyMailbox() {
		this.showEmptyConfirm = false;
		this.dispatchEvent(new CustomEvent("toast", {
			detail: {
				type: "info",
				message: this.i18nStore?.t("messageList.emptyingMailbox") || "Emptying mailbox..."
			},
			bubbles: true,
			composed: true
		}));
		if (await mailboxOperations.emptyMailbox(this.currentMailbox)) this.dispatchEvent(new CustomEvent("toast", {
			detail: {
				type: "success",
				message: this.i18nStore?.t("messageList.mailboxEmptied") || "Mailbox emptied successfully."
			},
			bubbles: true,
			composed: true
		}));
		else this.dispatchEvent(new CustomEvent("toast", {
			detail: {
				type: "error",
				message: this.i18nStore?.t("messageList.emptyMailboxFailed") || "Failed to empty mailbox. Make sure it is Trash or Junk."
			},
			bubbles: true,
			composed: true
		}));
	}
	scrollToFocused() {
		this.updateComplete.then(() => {
			const el = this.renderRoot.querySelector(".message-item.focused");
			if (el) el.scrollIntoView({ block: "nearest" });
		});
	}
	renderMessageItem(msg, isSubMessage = false, isFirstSub = false, isLastSub = false) {
		const isDraftOrSent = this.currentMailboxRole === "drafts" || this.currentMailboxRole === "sent" || this.currentMailbox === "Drafts" || this.currentMailbox === "Sent";
		let rawContacts = [];
		if (isDraftOrSent) {
			rawContacts = [...msg.Envelope?.To || [], ...msg.Envelope?.Cc || []];
			if (!rawContacts.length) rawContacts = msg.Envelope?.From || [];
		} else rawContacts = [
			...msg.Envelope?.From || [],
			...msg.Envelope?.To || [],
			...msg.Envelope?.Cc || []
		];
		const seenEmails = /* @__PURE__ */ new Set();
		let allContacts = [];
		for (const c of rawContacts) {
			const key = (c.Mailbox && c.Host ? `${c.Mailbox}@${c.Host}`.toLowerCase() : "") || c.Name || "unknown";
			if (key !== "unknown" && !seenEmails.has(key)) {
				seenEmails.add(key);
				allContacts.push(c);
			} else if (key === "unknown") allContacts.push(c);
		}
		const loginUser = this.settingsStore?.getState()?.loginUsername?.toLowerCase() || "";
		const isSelf = (c) => {
			const email = c.Mailbox && c.Host ? `${c.Mailbox}@${c.Host}`.toLowerCase() : "";
			if (loginUser && email === loginUser) return true;
			return false;
		};
		if (allContacts.length > 1) {
			const filtered = allContacts.filter((c) => !isSelf(c));
			if (filtered.length > 0) allContacts = filtered;
		}
		if (!allContacts.length) allContacts = [{}];
		const fallbackKey = isDraftOrSent ? "messageList.noRecipient" : "messageList.unknownSender";
		const senderName = allContacts.map((c) => {
			const addr = c.Mailbox && c.Host ? `${c.Mailbox}@${c.Host}` : "";
			return c.Name || addr || this.i18nStore?.t(fallbackKey) || this.i18nStore?.t("messageList.unknown");
		}).join(", ");
		const maxAvatars = this.isMobile ? 1 : 3;
		const displayAvatars = allContacts.slice(0, maxAvatars);
		const extraCount = allContacts.length - maxAvatars;
		const totalRendered = displayAvatars.length + (extraCount > 0 ? 1 : 0);
		const subject = msg.Envelope?.Subject || this.i18nStore?.t("messageList.noSubject");
		const dateFormat = this.settingsStore?.getState()?.dateFormat || "YYYY-MM-DD";
		const hourFormat = String(this.settingsStore?.getState()?.hourFormat || "12");
		const dateStr = msg.Envelope?.Date ? formatDateList(msg.Envelope.Date, dateFormat, hourFormat) : "";
		const msgSize = msg.RFC822Size || msg.Size;
		const sizeStr = msgSize ? formatSize(msgSize) : "";
		const isUnseen = !msg.Flags || !msg.Flags.includes("\\Seen");
		const isStarred = msg.Flags && msg.Flags.includes("\\Flagged");
		const isAnswered = msg.Flags && msg.Flags.includes("\\Answered");
		const isForwarded = msg.Flags && msg.Flags.includes("$Forwarded");
		const customTags = getMessageTags(msg.Flags, this.i18nStore);
		const avatarSize = this.densityMode === "loose" ? 48 : this.densityMode === "compact" ? 24 : 40;
		const hasSubMessages = msg.SubMessages && msg.SubMessages.length > 0;
		const expanded = this.isThreadExpanded(String(msg.UID));
		if (this.densityMode === "ultra-compact") return b`
      <div class="message-item ${isSubMessage ? "sub-message-item" : ""} ${isFirstSub ? "first-sub-item" : ""} ${isLastSub ? "last-sub-item" : ""} ${this.selectedMessages.size === 0 && this.selectedMessage?.UID === msg.UID || this.selectedMessages.has(String(msg.UID)) ? "active" : ""} ${isUnseen ? "unread" : ""} ${isStarred ? "starred" : ""} ${this.focusedIndex === this.visibleMessages.indexOf(msg) ? "focused" : ""}" @click=${() => this.selectMessage(msg)}>
        <div class="checkbox-col" @click=${(e) => {
			e.stopPropagation();
			const uid = String(msg.UID);
			const newSet = new Set(this.selectedMessages);
			if (newSet.has(uid)) newSet.delete(uid);
			else newSet.add(uid);
			this.selectedMessages = newSet;
			this.dispatchEvent(new CustomEvent("selection-changed", { detail: { selectedUids: this.selectedMessages } }));
		}}>
          <input type="checkbox" class="message-checkbox" 
            .checked=${this.selectedMessages.has(String(msg.UID))}
            @click=${(e) => e.stopPropagation()}
            @change=${(e) => this.handleSelectMessage(e, String(msg.UID))}>
        </div>

        <!-- Caret Toggle Button -->
        ${!isSubMessage && hasSubMessages ? b`
          <div class="caret-col" @click=${(e) => this.toggleThreadCollapse(e, String(msg.UID))}>
            ${renderIcon(expanded ? "caretDown" : "caretRight")}
            <span class="thread-count-caret-badge" title="${msg.ThreadCount} messages">${msg.ThreadCount}</span>
          </div>
        ` : isSubMessage ? b`<div class="caret-col empty"></div>` : ""}

        <div class="message-sender">${senderName}</div>
        <div @click=${(e) => this.toggleStar(e, msg)} class="star-btn ${isStarred ? "starred" : ""} star-btn-wrapper-ultra">
          ${renderIcon(isStarred ? "starFourFill" : "starFour")}
        </div>
        ${isAnswered || isForwarded ? b`
          <div class="indicators-wrapper-ultra">
            ${isAnswered ? b`<div class="indicator-icon" title=${this.i18nStore?.t("messageList.replied")}>${renderIcon("arrowBendUpLeft")}</div>` : ""}
            ${isForwarded ? b`<div class="indicator-icon" title=${this.i18nStore?.t("messageList.forwarded")}>${renderIcon("arrowBendUpRight")}</div>` : ""}
          </div>
        ` : ""}
        ${customTags.length > 0 ? b`
          <div class="tag-pills">
            ${customTags.map((tag) => b`
              <alps-tag .name=${tag.name} .color=${tag.color}></alps-tag>
            `)}
          </div>
        ` : ""}
        ${this.currentMailbox === "*" && msg.Mailbox ? b`
          <span class="mailbox-badge" title="Folder: ${msg.Mailbox}">${msg.Mailbox}</span>
        ` : ""}
        <div class="message-subject">
          ${subject}
        </div>
        <div class="message-indicators">
          <div class="attachment-col">
            ${msg.HasAttachments ? b`<div class="indicator-icon" title=${this.i18nStore?.t("messageList.hasAttachments")}>${renderIcon("paperclipHorizontal")}</div>` : ""}
          </div>
          <div class="message-date">${dateStr}</div>
        </div>
      </div>
      `;
		return b`
    <div class="message-item ${isSubMessage ? "sub-message-item" : ""} ${isFirstSub ? "first-sub-item" : ""} ${isLastSub ? "last-sub-item" : ""} ${this.selectedMessages.size === 0 && this.selectedMessage?.UID === msg.UID || this.selectedMessages.has(String(msg.UID)) ? "active" : ""} ${isUnseen ? "unread" : ""} ${isStarred ? "starred" : ""} ${this.focusedIndex === this.visibleMessages.indexOf(msg) ? "focused" : ""}" @click=${() => this.selectMessage(msg)}>
      <div class="checkbox-col" @click=${(e) => {
			e.stopPropagation();
			const uid = String(msg.UID);
			const newSet = new Set(this.selectedMessages);
			if (newSet.has(uid)) newSet.delete(uid);
			else newSet.add(uid);
			this.selectedMessages = newSet;
			this.dispatchEvent(new CustomEvent("selection-changed", { detail: { selectedUids: this.selectedMessages } }));
		}}>
        <input type="checkbox" class="message-checkbox" 
          .checked=${this.selectedMessages.has(String(msg.UID))}
          @click=${(e) => e.stopPropagation()}
          @change=${(e) => this.handleSelectMessage(e, String(msg.UID))}>
      </div>

      <!-- Caret Toggle Button -->
      ${!isSubMessage && hasSubMessages ? b`
        <div class="caret-col" @click=${(e) => this.toggleThreadCollapse(e, String(msg.UID))}>
          ${renderIcon(expanded ? "caretDown" : "caretRight")}
          <span class="thread-count-caret-badge" title="${msg.ThreadCount} messages">${msg.ThreadCount}</span>
        </div>
      ` : isSubMessage ? b`<div class="caret-col empty"></div>` : ""}

      <div class="avatar-stack">
        ${displayAvatars.map((c, idx) => {
			const addr = c.Mailbox && c.Host ? `${c.Mailbox}@${c.Host}` : "";
			const name = c.Name || addr || this.i18nStore?.t(fallbackKey) || this.i18nStore?.t("messageList.unknown");
			const bimiUrl = getBimiAvatarUrl(c.Host ? c.Host.toLowerCase() : "");
			return b`
            <div class="avatar-wrapper" style="z-index: ${totalRendered - idx};">
              <alps-avatar .name=${name} .email=${addr} .size=${avatarSize} .src=${bimiUrl}></alps-avatar>
            </div>
          `;
		})}
        ${extraCount > 0 ? b`
          <div class="avatar-wrapper extra-count" style="width: ${avatarSize}px; height: ${avatarSize}px; z-index: 0;">
            +${extraCount}
          </div>
        ` : ""}
      </div>
      <div class="message-details">
        <div class="message-header-row">
          <div class="message-header-inner">
            <div class="message-sender">${senderName}</div>
            <div @click=${(e) => this.toggleStar(e, msg)} class="star-btn ${isStarred ? "starred" : ""}">
              ${renderIcon(isStarred ? "starFourFill" : "starFour")}
            </div>
          </div>
          <div class="message-indicators">
            <div class="attachment-col">
              ${msg.HasAttachments ? b`<div class="indicator-icon" title=${this.i18nStore?.t("messageList.hasAttachments")}>${renderIcon("paperclipHorizontal")}</div>` : ""}
            </div>
            <div class="message-date">${dateStr}</div>
          </div>
        </div>
        <div class="message-subject-row">
          ${isAnswered || isForwarded ? b`
            <div class="indicators-wrapper">
              ${isAnswered ? b`<div class="indicator-icon" title=${this.i18nStore?.t("messageList.replied")}>${renderIcon("arrowBendUpLeft")}</div>` : ""}
              ${isForwarded ? b`<div class="indicator-icon" title=${this.i18nStore?.t("messageList.forwarded")}>${renderIcon("arrowBendUpRight")}</div>` : ""}
            </div>
          ` : ""}
          ${customTags.length > 0 ? b`
            <div class="tag-pills">
              ${customTags.map((tag) => b`
                <alps-tag .name=${tag.name} .color=${tag.color}></alps-tag>
              `)}
            </div>
          ` : ""}
          ${this.currentMailbox === "*" && msg.Mailbox ? b`
            <span class="mailbox-badge" title="Folder: ${msg.Mailbox}">${msg.Mailbox}</span>
          ` : ""}
          <div class="message-subject">
            ${subject}
          </div>
          ${sizeStr ? b`<div class="message-size">${sizeStr}</div>` : ""}
        </div>
      </div>
    </div>
    `;
	}
	toggleStar(e, msg) {
		e.stopPropagation();
		this.dispatchEvent(new CustomEvent("toggle-star-message", { detail: { message: msg } }));
	}
	render() {
		return b`
      ${!this.isMobile ? b`
        <alps-toolbar class="list-header" ?scrolled=${this.isScrolled}>
          <input type="checkbox" class="select-all-checkbox" title=${this.i18nStore?.t("messageList.selectAll")}
            .checked=${this.messages.length > 0 && this.selectedMessages.size === this.visibleMessages.length}
            @change=${this.handleSelectAll}>
          <alps-icon-btn 
            title=${this.i18nStore?.t("messageList.checkNew")}
            @click=${() => this.dispatchEvent(new CustomEvent("refresh"))}
            @animationiteration=${this.handleSpinIteration}
            ?spinning=${this.isSpinning}
            icon="arrowsClockwise"
          ></alps-icon-btn>
          <div class="header-divider"></div>
          <alps-icon-btn 
            title=${this.sortOrder === "asc" ? this.i18nStore?.t("messageList.sortDesc") : this.i18nStore?.t("messageList.sortAsc")}
            @click=${() => this.dispatchEvent(new CustomEvent("toggle-sort"))} 
            icon=${this.sortOrder === "asc" ? "sortAscending" : "sortDescending"}
          ></alps-icon-btn>
          <alps-icon-btn 
            @click=${() => this.dispatchEvent(new CustomEvent("toggle-filter-starred"))} 
            title=${this.i18nStore?.t("messageList.filterStarred")}
            icon=${this.filterQuery === "is:starred" ? "starFourFill" : "starFour"}
            ?active=${this.filterQuery === "is:starred"}
          ></alps-icon-btn>
          <alps-icon-btn 
            @click=${() => this.dispatchEvent(new CustomEvent("toggle-filter-unread"))} 
            title=${this.i18nStore?.t("messageList.filterUnread")}
            icon="envelopeUnread"
            ?active=${this.filterQuery === "is:unread"}
          ></alps-icon-btn>
          ${this.sidebarCollapsed ? b`
            <div class="current-mailbox-label">
              ${getMailboxLabel(this.currentMailbox, this.i18nStore)}
            </div>
          ` : ""}
          <alps-pagination 
            .currentPage=${this.currentPage} 
            .totalItems=${this.totalMessages} 
            .itemsPerPage=${this.messagesPerPage}>
          </alps-pagination>
        </alps-toolbar>
      ` : ""}
      <div class="list-content ${this.loading && this.messages.length > 0 ? "loading-overlay" : ""}" tabindex="0" @scroll=${this.handleScroll} @keydown=${this.handleKeyDown}>
        ${this.filterQuery ? b`
          <alps-banner>
            <span>${this.i18nStore?.t("messageList.searchResultsFor")} <strong>${this.filterQuery}</strong></span>
            ${this.currentMailbox !== "*" && this.settingsStore?.getState()?.hasESearchCapability ? b`
              <alps-button slot="action" variant="normal" @click=${() => this.dispatchEvent(new CustomEvent("search-submit", {
			detail: {
				value: this.filterQuery,
				global: true
			},
			bubbles: true,
			composed: true
		}))}>
                ${this.i18nStore?.t("messageList.searchAllMailboxes") || "Search All Mailboxes"}
              </alps-button>
            ` : ""}
            <alps-button slot="action" variant="normal" @click=${() => this.dispatchEvent(new CustomEvent("clear-search"))}>
              ${this.i18nStore?.t("messageList.clearSearch")}
            </alps-button>
          </alps-banner>
        ` : ""}
        ${!this.filterQuery && folderCanBeDeleted(this.currentMailbox) && this.totalMessages > 0 ? b`
          <alps-banner variant="warning">
            <span>${this.i18nStore?.t("messageList.totalMessagesIn")?.replace("{count}", String(this.totalMessages)).replace("{folder}", this.currentMailbox) || `${this.totalMessages} total messages in ${this.currentMailbox}`}</span>
            <alps-button slot="action" variant="normal" ?disabled=${this.selectedMessages.size > 0} @click=${() => this.showEmptyConfirm = true}>
              ${this.i18nStore?.t("messageList.deleteAllNow") || "Delete All Now"}
            </alps-button>
          </alps-banner>
        ` : ""}
        ${this.loading && this.messages.length === 0 ? b`
          <alps-loader full-height .text=${this.i18nStore?.t("messageList.loading") || "Loading..."}></alps-loader>
        ` : this.messages.length === 0 ? b`<div class="empty-state">${this.i18nStore?.t("messageList.noMessages")}</div>` : c$1(this.messages, (msg) => msg.UID, (msg) => b`
            ${this.renderMessageItem(msg, false)}
            ${msg.SubMessages && msg.SubMessages.length > 0 && this.isThreadExpanded(String(msg.UID)) ? msg.SubMessages.map((subMsg, idx) => this.renderMessageItem(subMsg, true, idx === 0, idx === msg.SubMessages.length - 1)) : ""}
          `)}
      </div>
      ${this.isMobile && this.messages.length > 0 ? b`
        <div class="mobile-bottom-header ${this.isAtBottom ? "at-bottom" : ""}">
          ${this.selectedMessages.size > 0 ? b`
            <slot name="mobile-bulk-actions"></slot>
          ` : b`
            <div class="mobile-bottom-actions">
              <input type="checkbox" class="select-all-checkbox" title=${this.i18nStore?.t("messageList.selectAll")}
                .checked=${this.messages.length > 0 && this.selectedMessages.size === this.visibleMessages.length}
                @change=${this.handleSelectAll}>
              <alps-icon-btn 
                title=${this.i18nStore?.t("messageList.checkNew")}
                @click=${() => this.dispatchEvent(new CustomEvent("refresh"))}
                @animationiteration=${this.handleSpinIteration}
                ?spinning=${this.isSpinning}
                icon="arrowsClockwise"
              ></alps-icon-btn>
              <div class="header-divider"></div>
              <alps-icon-btn 
                title=${this.sortOrder === "asc" ? this.i18nStore?.t("messageList.sortDesc") : this.i18nStore?.t("messageList.sortAsc")}
                @click=${() => this.dispatchEvent(new CustomEvent("toggle-sort"))} 
                icon=${this.sortOrder === "asc" ? "sortAscending" : "sortDescending"}
              ></alps-icon-btn>
              <alps-icon-btn 
                @click=${() => this.dispatchEvent(new CustomEvent("toggle-filter-starred"))} 
                title=${this.i18nStore?.t("messageList.filterStarred")}
                icon=${this.filterQuery === "is:starred" ? "starFourFill" : "starFour"}
                ?active=${this.filterQuery === "is:starred"}
              ></alps-icon-btn>
              <alps-icon-btn 
                @click=${() => this.dispatchEvent(new CustomEvent("toggle-filter-unread"))} 
                title=${this.i18nStore?.t("messageList.filterUnread")}
                icon="envelopeUnread"
                ?active=${this.filterQuery === "is:unread"}
              ></alps-icon-btn>
            </div>

            <alps-pagination 
              .currentPage=${this.currentPage} 
              .totalItems=${this.totalMessages} 
              .itemsPerPage=${this.messagesPerPage}>
            </alps-pagination>
          `}
        </div>
      ` : ""}
      ${this.showEmptyConfirm ? b`
        <ui-confirm
          title=${this.i18nStore?.t("messageList.emptyMailboxTitle")?.replace("{folder}", this.currentMailbox) || `Empty ${this.currentMailbox}`}
          message=${this.i18nStore?.t("messageList.emptyMailboxConfirm")?.replace("{folder}", this.currentMailbox).replace("{count}", String(this.totalMessages)) || `Are you sure you want to permanently delete all ${this.totalMessages} messages in ${this.currentMailbox}? This action cannot be undone.`}
          confirmText=${this.i18nStore?.t("messageList.deleteAllNow") || "Delete All Now"}
          .isDanger=${true}
          @confirm=${this.handleEmptyMailbox}
          @cancel=${() => this.showEmptyConfirm = false}
        ></ui-confirm>
      ` : ""}
    `;
	}
};
__decorate([c({ context: settingsContext })], MessageList.prototype, "settingsStore", void 0);
__decorate([c({ context: i18nContext })], MessageList.prototype, "i18nStore", void 0);
__decorate([n$1({ type: Array })], MessageList.prototype, "messages", void 0);
__decorate([n$1({ type: String })], MessageList.prototype, "currentMailbox", void 0);
__decorate([n$1({ type: String })], MessageList.prototype, "currentMailboxRole", void 0);
__decorate([n$1({ type: Boolean })], MessageList.prototype, "loading", void 0);
__decorate([n$1({ type: Object })], MessageList.prototype, "selectedMessage", void 0);
__decorate([n$1({ type: String })], MessageList.prototype, "layoutMode", void 0);
__decorate([n$1({ type: Boolean })], MessageList.prototype, "isMobile", void 0);
__decorate([n$1({ type: Boolean })], MessageList.prototype, "sidebarCollapsed", void 0);
__decorate([n$1({ type: Number })], MessageList.prototype, "currentPage", void 0);
__decorate([n$1({ type: Number })], MessageList.prototype, "totalMessages", void 0);
__decorate([n$1({ type: Number })], MessageList.prototype, "messagesPerPage", void 0);
__decorate([n$1({ type: String })], MessageList.prototype, "filterQuery", void 0);
__decorate([n$1({ type: String })], MessageList.prototype, "sortOrder", void 0);
__decorate([n$1({ type: String })], MessageList.prototype, "densityMode", void 0);
__decorate([n$1({ type: Object })], MessageList.prototype, "selectedMessages", void 0);
__decorate([n$1({ type: Boolean })], MessageList.prototype, "syncing", void 0);
__decorate([r()], MessageList.prototype, "isSpinning", void 0);
__decorate([r()], MessageList.prototype, "isScrolled", void 0);
__decorate([r()], MessageList.prototype, "isAtBottom", void 0);
__decorate([r()], MessageList.prototype, "focusedIndex", void 0);
__decorate([r()], MessageList.prototype, "showEmptyConfirm", void 0);
__decorate([r()], MessageList.prototype, "expandedThreads", void 0);
MessageList = __decorate([t("alps-message-list")], MessageList);
//#endregion
//#region ../plugins/carddav/frontend/contacts-list.ts
var AlpsContactsList = class AlpsContactsList extends i {
	constructor(..._args) {
		super(..._args);
		this.contacts = [];
		this.selectedCategory = "";
		this.filterQuery = "";
		this.sortOrder = "asc";
		this.showOnlyStarred = false;
		this.isMobile = false;
		this.densityMode = "compact";
		this.selectedContacts = /* @__PURE__ */ new Set();
		this.selectedContact = null;
		this.isSpinning = false;
		this.loading = false;
		this.listScrolled = false;
		this.focusedIndex = -1;
	}
	getFilteredContacts() {
		let filteredContacts = this.contacts.filter((c) => {
			if (this.selectedCategory) {
				if (!c.categories || !c.categories.includes(this.selectedCategory)) return false;
			}
			if (this.showOnlyStarred) {
				if (!c.categories || !c.categories.includes("Favorites")) return false;
			}
			if (this.filterQuery) {
				const query = this.filterQuery.toLowerCase();
				if (!(c.name || "").toLowerCase().includes(query) && !(c.email || "").toLowerCase().includes(query) && !(c.nickname || "").toLowerCase().includes(query) && !(c.organization || "").toLowerCase().includes(query)) return false;
			}
			return true;
		});
		filteredContacts.sort((a, b) => {
			const nameA = (a.name || a.email || "").toLowerCase();
			const nameB = (b.name || b.email || "").toLowerCase();
			if (nameA < nameB) return this.sortOrder === "asc" ? -1 : 1;
			if (nameA > nameB) return this.sortOrder === "asc" ? 1 : -1;
			return 0;
		});
		return filteredContacts;
	}
	willUpdate(changedProperties) {
		super.willUpdate(changedProperties);
		if (changedProperties.has("selectedContact") || changedProperties.has("contacts") || changedProperties.has("selectedCategory") || changedProperties.has("filterQuery") || changedProperties.has("sortOrder") || changedProperties.has("showOnlyStarred")) {
			const filtered = this.getFilteredContacts();
			if (this.selectedContact && filtered.length > 0) {
				const idx = filtered.findIndex((c) => c.path === this.selectedContact.path);
				if (idx !== -1) this.focusedIndex = idx;
				else this.focusedIndex = -1;
			} else this.focusedIndex = -1;
		}
	}
	updated(changedProperties) {
		super.updated(changedProperties);
		if (changedProperties.has("densityMode")) {
			this.classList.remove("density-loose", "density-normal", "density-compact", "density-ultra-compact");
			this.classList.add(`density-${this.densityMode}`);
		}
	}
	static {
		this.styles = [MessageList.styles, i$1`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: hidden;
      height: 100%;
    }
    .list-header {
      padding: 0 12px;
      gap: 12px;
      background: var(--bg-primary, #fff);
      z-index: 10;
      min-height: 48px;
    }
    .header-divider {
      width: 1px;
      height: 20px;
      background: var(--border-color);
      margin: 0 4px;
    }
    .empty-state {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--text-muted, #9ca3af);
    }
    .contact-item {
      padding: 12px;
      border-bottom: 1px solid var(--border-color);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 16px;
      transition: background 0.15s, padding 0.2s, gap 0.2s;
    }
    :host(.density-loose) .contact-item {
      padding: 16px 12px 16px 0;
      gap: 16px;
    }
    :host(.density-compact) .contact-item {
      padding: 8px 12px 8px 0;
      gap: 12px;
    }
    :host(.density-ultra-compact) .contact-item {
      padding: 4px 12px 4px 0;
      gap: 12px;
    }
    @media (max-width: 768px) {
      :host(.density-ultra-compact) .contact-item,
      :host(.density-compact) .contact-item {
        padding: 12px;
      }
      :host(.density-loose) .contact-item {
        padding: 16px 12px;
      }
    }
    .contact-item:hover {
      background: var(--hover-color);
    }
    .contact-item.active {
      background: var(--bg-selected);
    }
    .contact-item.starred .contact-sender,
    .contact-item.starred .contact-subject {
      color: var(--accent-color);
      font-weight: 600;
    }
    .list-content:focus {
      outline: none;
    }
    .list-content:focus-within .contact-item.focused {
      outline: 2px solid var(--accent-color);
      outline-offset: -2px;
      z-index: 10;
      position: relative;
    }
    .contact-item.active .avatar-wrapper {
      border-color: var(--bg-selected);
      background: var(--bg-selected);
    }
    .contact-item:hover .avatar-wrapper {
      border-color: var(--hover-color);
      background: var(--hover-color);
    }
    .contact-checkbox {
      cursor: pointer;
      opacity: 0.4;
      transition: opacity 0.2s;
    }
    .contact-item:hover .contact-checkbox,
    .contact-checkbox:checked {
      opacity: 1;
    }
    .contact-details {
      flex: 1;
      min-width: 0;
    }
    .contact-header-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }
    :host(.density-compact) .contact-header-row {
      margin-bottom: 2px;
    }
    .contact-header-inner {
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
      flex: 1;
      margin-right: 12px;
    }
    .contact-sender {
      font-weight: 450;
      color: var(--text-sender-read, #202020);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }
    :host(.density-ultra-compact) .contact-sender {
      width: 120px;
      flex-shrink: 1;
      min-width: 80px;
    }
    @media (max-width: 768px) {
      :host(.density-ultra-compact) .contact-sender {
        width: 80px;
        min-width: 60px;
      }
    }
    .contact-date {
      font-size: 12px;
      color: var(--text-muted);
      white-space: nowrap;
      margin-left: 8px;
      text-align: right;
      flex-shrink: 0;
    }
    .contact-item.active .contact-date {
      color: var(--text-muted);
    }
    .contact-subject-row {
      display: flex;
      align-items: center;
      margin-bottom: 4px;
      overflow: hidden;
    }
    .contact-subject {
      font-size: 14px;
      margin-bottom: 0;
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    :host(.density-compact) .contact-subject {
      font-size: 13px;
      margin-bottom: 2px;
    }
    :host(.density-ultra-compact) .contact-subject {
      font-size: 13px;
      flex: 1;
      margin: 0;
    }
  `];
	}
	formatRevision(rev) {
		if (!rev) return "";
		let d = rev;
		if (d.length === 16 && d.indexOf("-") === -1) d = `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}T${d.slice(9, 11)}:${d.slice(11, 13)}:${d.slice(13, 16)}`;
		const dateFormat = this.settingsStore?.getState()?.dateFormat || "YYYY-MM-DD";
		const hourFormat = String(this.settingsStore?.getState()?.hourFormat || "12");
		return formatDateList(new Date(d), dateFormat, hourFormat);
	}
	handleKeyDown(e) {
		const filtered = this.getFilteredContacts();
		if (filtered.length === 0) return;
		if (e.key === "ArrowDown") {
			e.preventDefault();
			this.focusedIndex = Math.min(filtered.length - 1, this.focusedIndex + 1);
			this.scrollToFocused();
		} else if (e.key === "ArrowUp") {
			e.preventDefault();
			this.focusedIndex = Math.max(0, this.focusedIndex - 1);
			this.scrollToFocused();
		} else if (e.key === "Enter") {
			e.preventDefault();
			if (this.focusedIndex >= 0 && this.focusedIndex < filtered.length) this.dispatchEvent(new CustomEvent("select-contact", { detail: { contact: filtered[this.focusedIndex] } }));
		} else if (e.key === " ") {
			e.preventDefault();
			if (this.focusedIndex >= 0 && this.focusedIndex < filtered.length) {
				const c = filtered[this.focusedIndex];
				if (!c.isTemporary) this.dispatchEvent(new CustomEvent("toggle-selection", { detail: {
					path: c.path,
					event: e
				} }));
				this.focusedIndex = Math.min(filtered.length - 1, this.focusedIndex + 1);
				this.scrollToFocused();
			}
		}
	}
	scrollToFocused() {
		this.updateComplete.then(() => {
			const el = this.renderRoot.querySelector(".contact-item.focused");
			if (el) el.scrollIntoView({ block: "nearest" });
		});
	}
	handleListScroll(e) {
		const isScrolled = e.target.scrollTop > 0;
		if (this.listScrolled !== isScrolled) {
			this.listScrolled = isScrolled;
			this.dispatchEvent(new CustomEvent("list-scrolled", { detail: { scrolled: isScrolled } }));
		}
	}
	render() {
		return b`
      ${!this.isMobile ? b`
        <alps-toolbar class="list-header" ?scrolled=${this.listScrolled}>
          <input type="checkbox" class="select-all-checkbox" title=${this.i18nStore?.t("messageList.selectAll")}
            .checked=${this.contacts.length > 0 && this.selectedContacts.size === this.contacts.length}
            @change=${(e) => this.dispatchEvent(new CustomEvent("select-all", { detail: { checked: e.target.checked } }))}>
          <alps-icon-btn 
            title="${this.i18nStore?.t("contacts.refreshContacts")}"
            @click=${() => this.dispatchEvent(new CustomEvent("refresh"))}
            @animationiteration=${() => this.dispatchEvent(new CustomEvent("spin-iteration"))}
            ?spinning=${this.isSpinning}
            icon="arrowsClockwise"
          ></alps-icon-btn>
          <div class="header-divider"></div>
          <alps-icon-btn 
            title=${this.sortOrder === "asc" ? this.i18nStore?.t("contacts.sortZa") : this.i18nStore?.t("contacts.sortAz")}
            @click=${() => this.dispatchEvent(new CustomEvent("sort-toggle"))} 
            icon=${this.sortOrder === "asc" ? "sortAscending" : "sortDescending"}
          ></alps-icon-btn>
          <alps-icon-btn 
            @click=${() => this.dispatchEvent(new CustomEvent("filter-star-toggle"))} 
            title="${this.i18nStore?.t("contacts.filterStarred")}"
            icon=${this.showOnlyStarred ? "starFourFill" : "starFour"}
            ?active=${this.showOnlyStarred}
          ></alps-icon-btn>
        </alps-toolbar>
      ` : ""}
      
      <div class="list-content" tabindex="0" @keydown=${this.handleKeyDown} @scroll=${this.handleListScroll} style="flex: 1; overflow-y: auto; transition: opacity 0.2s ease-in-out; opacity: ${this.loading && this.contacts.length > 0 ? .5 : 1}; pointer-events: ${this.loading ? "none" : "auto"};">
        ${this.loading && this.contacts.length === 0 ? b`<alps-loader full-height .text=${this.i18nStore?.t("messageList.loading")}></alps-loader>` : (() => {
			const filteredContacts = this.getFilteredContacts();
			return b`
              ${this.filterQuery ? b`
                <alps-banner>
                  <span>${this.i18nStore?.t("messageList.searchResultsFor")} <strong>${this.filterQuery}</strong></span>
                  <alps-button slot="action" variant="normal" @click=${() => this.dispatchEvent(new CustomEvent("clear-search"))}>
                    ${this.i18nStore?.t("messageList.clearSearch")}
                  </alps-button>
                </alps-banner>
              ` : ""}
              
              ${filteredContacts.length === 0 ? b`<div class="empty-state">${this.i18nStore?.t("contacts.noContacts")}</div>` : filteredContacts.map((c, index) => b`
                  <div class="contact-item ${this.selectedContact?.path === c.path || c.isTemporary && this.selectedContact?.isTemporary ? "active" : ""} ${this.selectedContacts.has(c.path) ? "selected" : ""} ${this.focusedIndex === index ? "focused" : ""}" @click=${() => this.dispatchEvent(new CustomEvent("select-contact", { detail: { contact: c } }))}>
                    ${!this.isMobile ? b`
                      <div class="checkbox-col" @click=${(e) => {
				if (c.isTemporary) {
					e.stopPropagation();
					return;
				}
				this.dispatchEvent(new CustomEvent("toggle-selection", { detail: {
					path: c.path,
					event: e
				} }));
			}}>
                        <input type="checkbox" class="contact-checkbox" 
                          ?disabled=${c.isTemporary}
                          .checked=${this.selectedContacts.has(c.path)}
                          @click=${(e) => e.stopPropagation()}
                          @change=${(e) => this.dispatchEvent(new CustomEvent("toggle-selection", { detail: {
				path: c.path,
				event: e
			} }))}>
                      </div>
                    ` : ""}
                    <div class="avatar-stack">
                      <div class="avatar-wrapper">
                        <alps-avatar .name=${c.name || c.email || "Unknown"} .email=${c.email} .src=${c.avatar || ""} .size=${this.densityMode === "loose" ? 48 : this.densityMode === "compact" ? 24 : 40}></alps-avatar>
                      </div>
                    </div>
                    <div class="contact-details">
                      <div class="contact-header-row">
                        <div class="contact-header-inner">
                          <div class="contact-sender">${c.name || c.email || this.i18nStore?.t("contacts.unnamedContact")}</div>
                          <div @click=${(e) => {
				e.stopPropagation();
				this.dispatchEvent(new CustomEvent("toggle-star", { detail: { contact: c } }));
			}} class="star-btn ${c.categories?.includes("Favorites") ? "starred" : ""}" style="${c.isTemporary ? "opacity: 0.5; pointer-events: none;" : ""}">
                            ${renderIcon(c.categories?.includes("Favorites") ? "starFourFill" : "starFour")}
                          </div>
                        </div>
                        ${c.revision ? b`<div class="contact-date">${this.formatRevision(c.revision)}</div>` : ""}
                      </div>
                      <div class="contact-subject-row">
                        <div class="contact-subject">
                          ${this.densityMode !== "ultra-compact" ? c.email || "" : ""}
                        </div>
                      </div>
                    </div>
                  </div>
                `)}
            `;
		})()}
      </div>
    `;
	}
};
__decorate([c({ context: i18nContext })], AlpsContactsList.prototype, "i18nStore", void 0);
__decorate([c({ context: settingsContext })], AlpsContactsList.prototype, "settingsStore", void 0);
__decorate([n$1({ type: Array })], AlpsContactsList.prototype, "contacts", void 0);
__decorate([n$1({ type: String })], AlpsContactsList.prototype, "selectedCategory", void 0);
__decorate([n$1({ type: String })], AlpsContactsList.prototype, "filterQuery", void 0);
__decorate([n$1({ type: String })], AlpsContactsList.prototype, "sortOrder", void 0);
__decorate([n$1({ type: Boolean })], AlpsContactsList.prototype, "showOnlyStarred", void 0);
__decorate([n$1({ type: Boolean })], AlpsContactsList.prototype, "isMobile", void 0);
__decorate([n$1({ type: String })], AlpsContactsList.prototype, "densityMode", void 0);
__decorate([n$1({ type: Object })], AlpsContactsList.prototype, "selectedContacts", void 0);
__decorate([n$1({ type: Object })], AlpsContactsList.prototype, "selectedContact", void 0);
__decorate([n$1({ type: Boolean })], AlpsContactsList.prototype, "isSpinning", void 0);
__decorate([n$1({ type: Boolean })], AlpsContactsList.prototype, "loading", void 0);
__decorate([n$1({ type: Boolean })], AlpsContactsList.prototype, "listScrolled", void 0);
__decorate([r()], AlpsContactsList.prototype, "focusedIndex", void 0);
AlpsContactsList = __decorate([t("alps-contacts-list")], AlpsContactsList);
//#endregion
//#region src/components/folder-list.ts
function makeNodeCompareFunc(override) {
	return function(a, b) {
		const idxA = override.indexOf(a.fullName);
		const idxB = override.indexOf(b.fullName);
		if (idxA !== -1 && idxB !== -1) return idxA - idxB;
		if (idxA !== -1) return -1;
		if (idxB !== -1) return 1;
		if (a.standardOrder >= 0 && b.standardOrder >= 0) return a.standardOrder - b.standardOrder;
		if (a.standardOrder >= 0) return -1;
		if (b.standardOrder >= 0) return 1;
		return a.name.localeCompare(b.name);
	};
}
var FolderList = class FolderList extends i {
	constructor(..._args) {
		super(..._args);
		this.mailboxes = [];
		this.currentMailbox = "";
		this.expandedFolders = /* @__PURE__ */ new Set();
		this.layoutMode = "vertical";
		this.syncing = false;
		this.collapsed = false;
		this.isScrolled = false;
		this.showCreatePrompt = false;
		this.showRenamePrompt = false;
		this.mailboxToRename = "";
		this.showDeleteConfirm = false;
		this.showMoveToTrashConfirm = false;
		this.mailboxToDelete = "";
		this.parentForNewFolder = "";
		this.activeKebabMenu = null;
		this.primaryFullNames = /* @__PURE__ */ new Set();
		this._handleStoreChange = () => {
			this.requestUpdate();
		};
		this.handleScroll = (e) => {
			const target = e.target;
			this.isScrolled = target.scrollTop > 0;
		};
	}
	willUpdate(changedProperties) {
		super.willUpdate(changedProperties);
	}
	connectedCallback() {
		super.connectedCallback();
		this.updateComplete.then(() => {
			if (this.composeStore) this.composeStore.addEventListener("change", this._handleStoreChange);
			if (this.i18nStore) this.i18nStore.addEventListener("change", this._handleStoreChange);
			if (this.settingsStore) this.settingsStore.addEventListener("change", this._handleStoreChange);
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.composeStore) this.composeStore.removeEventListener("change", this._handleStoreChange);
		this.i18nStore?.removeEventListener("change", this._handleStoreChange);
		this.settingsStore?.removeEventListener("change", this._handleStoreChange);
	}
	static {
		this.styles = [
			popupStyles,
			sidebarLayoutStyles,
			i$1`
    :host {
      display: flex;
      flex-direction: column;
      flex: 1;
      width: 100%;
      min-height: 0;
      box-sizing: border-box;
    }
    
    .sidebar-wrapper {
      background-color: var(--bg-secondary);
    }

    .sidebar-header {
      background-color: var(--bg-secondary);
    }

    .sidebar-content {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 8px;
    }

    :host([collapsed]) .sidebar-content {
      transition: opacity 0.2s ease;
    }

    .sidebar-wrapper.collapsed .folder-item {
      border-radius: 6px 0 0 6px;
    }

    .folder-item {
      display: flex;
      align-items: center;
      position: relative;
      height: 36px;
      padding: 0 4px;
      box-sizing: border-box;
      border-radius: 6px;
      cursor: pointer;
      color: var(--text-color);
      margin-bottom: 2px;
      user-select: none;
      transition: background 0.15s;
      gap: 4px;
    }

    @media (hover: hover) {
      .folder-item:hover {
        background: var(--hover-color);
      }
    }

    .folder-item.active {
      background: var(--bg-selected);
      color: var(--accent-hover);
      font-weight: 600;
    }

    .folder-item .icon {
      color: var(--text-muted);
    }
    
    .folder-name {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    
    .folder-badge {
      background: rgba(0,0,0,0.08);
      padding: 2px 8px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 600;
    }
    
    .folder-item.active .folder-badge {
      background: rgba(255,255,255,0.2);
    }

    .folder-children {
      margin-left: 12px;
    }

    .folder-actions {
      display: none;
      align-items: center;
      padding-left: 8px;
      margin-left: auto;      
    }

    .folder-item.active .folder-actions {
      display: none; /* Only show on hover for desktop */
    }

    @media (hover: hover) {
      .folder-item:hover .folder-actions {
        display: flex;
      }
      .folder-item.has-actions:hover .folder-badge {
        display: none;
      }
    }

    .folder-actions:focus-within,
    .folder-actions.popup-open {
      display: flex;
    }

    .folder-actions:focus-within ~ .folder-badge,
    .folder-actions.popup-open ~ .folder-badge {
      display: none;
    }

    @media (max-width: 768px) {
      .folder-item.active .folder-actions {
        display: flex;
        position: static;
        transform: none;
        background: transparent;
      }
      .folder-item.active .folder-badge {
        display: block; /* keep badge visible alongside actions on mobile */
      }
    }

    .sidebar-header-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 14px 4px 14px;
      font-size: 12px;
      text-transform: uppercase;
      font-weight: 600;
      color: var(--text-muted);
      letter-spacing: 0.5px;
    }

    .folder-separator {
      height: 1px;
      background: var(--border-color);
      margin: 8px 12px;
    }

    .icon-btn {
      background: transparent;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      padding: 4px;
      display: flex;
      align-items: center;
      border-radius: 4px;
    }
    
    .icon-btn:hover {
      background: var(--hover-color);
      color: var(--text-color);
    }

    .icon {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }

    .folder-icon {
      margin-right: 10px;
      font-size: 16px;
      display: flex;
      align-items: center;
    }

    /* Standard icon colors */
    .icon-inbox { color: var(--icon-inbox, #3b82f6); }
    .icon-sent { color: var(--icon-sent, #10b981); }
    .icon-drafts { color: var(--icon-drafts, #f59e0b); }
    .icon-spam { color: var(--icon-spam, #ef4444); }
    .icon-trash { color: var(--icon-trash, #6b7280); }
    .icon-archive { color: var(--icon-archive, #8b5cf6); }
    .icon-default { color: var(--icon-default, #9ca3af); }

    /* Submenu trigger styling inside popup trigger slot */
    .dropdown-item.submenu-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 8px 16px;
      box-sizing: border-box;
    }
    .dropdown-item.submenu-trigger .trigger-label {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 1;
    }
    .dropdown-item.submenu-trigger .caret-icon {
      margin-left: auto;
      color: var(--text-muted, #6b7280);
      display: flex;
      align-items: center;
    }
    .dropdown-item.submenu-trigger .caret-icon svg {
      width: 12px;
      height: 12px;
    }
  `
		];
	}
	toggleFolder(e, folderName) {
		if (e) e.stopPropagation();
		this.dispatchEvent(new CustomEvent("toggle-folder", { detail: { folderName } }));
	}
	selectMailbox(name) {
		this.dispatchEvent(new CustomEvent("select-mailbox", { detail: { name } }));
	}
	triggerCreateFolder() {
		this.parentForNewFolder = "";
		this.showCreatePrompt = true;
	}
	handleCreateSubmit(e) {
		let name = e.detail.name;
		if (name) {
			if (this.parentForNewFolder) {
				const parentMb = this.mailboxes.find((m) => (m.Name || m.Mailbox) === this.parentForNewFolder);
				let delimiter = ".";
				if (parentMb) {
					const delim = parentMb.Delimiter || parentMb.Delim;
					delimiter = typeof delim === "number" ? String.fromCharCode(delim) : delim || ".";
				}
				name = `${this.parentForNewFolder}${delimiter}${name}`;
				this.dispatchEvent(new CustomEvent("expand-folder", { detail: { folderName: this.parentForNewFolder } }));
			}
			mailboxOperations.createMailbox(name);
		}
		this.showCreatePrompt = false;
		this.parentForNewFolder = "";
	}
	async handleRenameSubmit(e) {
		const newName = e.detail.name;
		if (newName && this.mailboxToRename) {
			const oldName = this.mailboxToRename;
			this.showRenamePrompt = false;
			this.mailboxToRename = "";
			if (await mailboxOperations.renameMailbox(oldName, newName)) {
				if (this.currentMailbox === oldName) this.selectMailbox(newName);
				const undoFn = async () => {
					await mailboxOperations.renameMailbox(newName, oldName);
					if (this.currentMailbox === newName) this.selectMailbox(oldName);
				};
				this.dispatchEvent(new CustomEvent("toast", {
					detail: {
						message: this.i18nStore?.t("toast.folderRenamed"),
						actionLabel: this.i18nStore?.t("toast.undo"),
						actionFn: undoFn,
						duration: 5e3
					},
					bubbles: true,
					composed: true
				}));
			}
		} else {
			this.showRenamePrompt = false;
			this.mailboxToRename = "";
		}
	}
	async handleDeleteConfirm() {
		if (this.mailboxToDelete) {
			if (await mailboxOperations.deleteMailbox(this.mailboxToDelete)) {
				if (this.currentMailbox.startsWith(this.mailboxToDelete)) this.selectMailbox(FOLDER_INBOX);
				this.dispatchEvent(new CustomEvent("toast", {
					detail: {
						message: this.i18nStore?.t("toast.folderPermanentlyDeleted"),
						duration: 3e3
					},
					bubbles: true,
					composed: true
				}));
			}
		}
		this.showDeleteConfirm = false;
		this.mailboxToDelete = "";
	}
	async handleMoveToTrashConfirm() {
		if (this.mailboxToDelete) {
			const mb = this.mailboxes.find((m) => (m.Name || m.Mailbox) === this.mailboxToDelete);
			if (!mb) {
				console.log(`handleMoveToTrashConfirm: no mailbox found for ${this.mailboxToDelete}`);
				this.showMoveToTrashConfirm = false;
				this.mailboxToDelete = "";
				return;
			}
			const delim = mb.Delimiter || mb.Delim;
			const delimiter = typeof delim === "number" ? String.fromCharCode(delim) : delim || ".";
			const parts = this.mailboxToDelete.split(delimiter);
			const leafName = parts[parts.length - 1];
			const trashName = findMailboxNameByRole("trash", this.mailboxToDelete, this.mailboxes, "Trash");
			let candidateName = `${trashName}${delimiter}${leafName}`;
			let suffix = 1;
			while (this.mailboxes.some((m) => (m.Name || m.Mailbox) === candidateName)) {
				candidateName = `${trashName}${delimiter}${leafName} (${suffix})`;
				suffix++;
			}
			const newName = candidateName;
			if (await mailboxOperations.renameMailbox(this.mailboxToDelete, newName)) {
				if (this.currentMailbox.startsWith(this.mailboxToDelete)) this.selectMailbox(FOLDER_INBOX);
				const oldName = this.mailboxToDelete;
				const undoFn = async () => {
					await mailboxOperations.renameMailbox(newName, oldName);
				};
				this.dispatchEvent(new CustomEvent("toast", {
					detail: {
						message: this.i18nStore?.t("toast.folderMovedToTrash"),
						actionLabel: this.i18nStore?.t("toast.undo"),
						actionFn: undoFn,
						duration: 5e3
					},
					bubbles: true,
					composed: true
				}));
			}
		}
		this.showMoveToTrashConfirm = false;
		this.mailboxToDelete = "";
	}
	moveFolder(node, direction) {
		console.log("[moveFolder] Start:", node.fullName, direction);
		const siblings = Object.values(node.siblings);
		console.log("[moveFolder] Sibling custom folders found:", siblings);
		const customOrder = [...this.settingsStore?.getState()?.customMailboxOrder || []];
		siblings.sort(makeNodeCompareFunc(customOrder));
		console.log("[moveFolder] Sorted siblings:", siblings);
		const names = siblings.map((n) => n.fullName);
		const currentIndex = names.indexOf(node.fullName);
		if (currentIndex === -1) {
			console.error("[moveFolder] Folder not found in siblings!");
			return;
		}
		let newIndex = currentIndex;
		switch (direction) {
			case "top":
				newIndex = 0;
				break;
			case "up":
				newIndex = Math.max(0, currentIndex - 1);
				break;
			case "down":
				newIndex = Math.min(names.length - 1, currentIndex + 1);
				break;
			case "bottom":
				newIndex = names.length - 1;
				break;
		}
		console.log("[moveFolder] Shifting indexes:", {
			currentIndex,
			newIndex
		});
		if (newIndex === currentIndex) {
			console.log("[moveFolder] No index change needed.");
			return;
		}
		names.splice(currentIndex, 1);
		names.splice(newIndex, 0, node.fullName);
		console.log("[moveFolder] New siblings order:", names);
		const updatedOrder = customOrder.filter((name) => !names.includes(name));
		updatedOrder.push(...names);
		console.log("[moveFolder] Final updated customMailboxOrder settings state:", updatedOrder);
		this.settingsStore?.updateSettings({ customMailboxOrder: updatedOrder });
	}
	render() {
		const specialSlots = [
			{
				attr: "\\inbox",
				names: [FOLDER_INBOX],
				display: {
					icon: "tray",
					colorClass: "icon-inbox",
					label: this.i18nStore?.t("folderList.inbox")
				}
			},
			{
				attr: "\\drafts",
				names: [FOLDER_DRAFTS],
				display: {
					icon: "fileText",
					colorClass: "icon-drafts",
					label: this.i18nStore?.t("folderList.drafts")
				}
			},
			{
				attr: "\\sent",
				names: [FOLDER_SENT],
				display: {
					icon: "paperPlaneTilt",
					colorClass: "icon-sent",
					label: this.i18nStore?.t("folderList.sent")
				}
			},
			{
				attr: "\\archive",
				names: [FOLDER_ARCHIVE, FOLDER_ARCHIVES],
				display: {
					icon: "archiveBox",
					colorClass: "icon-archive",
					label: this.i18nStore?.t("folderList.archive")
				}
			},
			{
				attr: "\\junk",
				names: [FOLDER_JUNK, FOLDER_SPAM],
				display: {
					icon: "warningDiamond",
					colorClass: "icon-spam",
					label: this.i18nStore?.t("folderList.junk")
				}
			},
			{
				attr: "\\trash",
				names: [FOLDER_TRASH],
				display: {
					icon: "trash",
					colorClass: "icon-trash",
					label: this.i18nStore?.t("folderList.trash")
				}
			}
		];
		const stdMap = {
			[FOLDER_INBOX]: {
				icon: "tray",
				colorClass: "icon-inbox",
				label: this.i18nStore?.t("folderList.inbox")
			},
			[FOLDER_DRAFTS]: {
				icon: "fileText",
				colorClass: "icon-drafts",
				label: this.i18nStore?.t("folderList.drafts")
			},
			[FOLDER_SENT]: {
				icon: "paperPlaneTilt",
				colorClass: "icon-sent",
				label: this.i18nStore?.t("folderList.sent")
			},
			[FOLDER_ARCHIVE]: {
				icon: "archiveBox",
				colorClass: "icon-archive",
				label: this.i18nStore?.t("folderList.archive")
			},
			[FOLDER_ARCHIVES]: {
				icon: "archiveBox",
				colorClass: "icon-archive",
				label: this.i18nStore?.t("folderList.archive")
			},
			[FOLDER_SPAM]: {
				icon: "warningDiamond",
				colorClass: "icon-spam",
				label: this.i18nStore?.t("folderList.spam")
			},
			[FOLDER_JUNK]: {
				icon: "warningDiamond",
				colorClass: "icon-spam",
				label: this.i18nStore?.t("folderList.junk")
			},
			[FOLDER_TRASH]: {
				icon: "trash",
				colorClass: "icon-trash",
				label: this.i18nStore?.t("folderList.trash")
			}
		};
		const newAccount = (name) => {
			return {
				name,
				standardBySlot: /* @__PURE__ */ new Map()
			};
		};
		const root = {};
		const unified = newAccount("@unified");
		const accounts = /* @__PURE__ */ new Map();
		const getOrAddAccount = (name) => {
			let a = accounts.get(name);
			if (!a) {
				a = newAccount(name);
				accounts.set(name, a);
			}
			return a;
		};
		this.mailboxes.forEach((mb) => {
			const fullName = mb.Name || mb.Mailbox || "";
			const delim = mb.Delimiter || mb.Delim;
			const delimiter = typeof delim === "number" ? String.fromCharCode(delim) : delim || ".";
			const parts = fullName.split(delimiter);
			let currentLevel = root;
			let pathAcc = "";
			let account = unified;
			if (parts[0].startsWith("@")) account = getOrAddAccount(parts[0]);
			for (let i = 0; i < parts.length; i++) {
				const part = parts[i];
				pathAcc = i === 0 ? part : pathAcc + delimiter + part;
				if (!currentLevel[part]) currentLevel[part] = {
					account,
					name: part,
					fullName: pathAcc,
					children: {},
					siblings: currentLevel,
					standardOrder: -1
				};
				if (i === parts.length - 1) currentLevel[part].mb = mb;
				currentLevel = currentLevel[part].children;
			}
		});
		const normalizedAttrs = (node) => (node.mb?.Attrs || []).map((a) => typeof a === "string" ? a.toLowerCase() : "");
		const hasSlotAttr = (node, attr) => {
			const attrs = normalizedAttrs(node);
			return attrs.includes(attr) || attrs.includes("\\" + attr);
		};
		const slotIndexForNode = (node) => {
			const attrs = normalizedAttrs(node);
			for (let i = 0; i < specialSlots.length; i++) {
				const s = specialSlots[i];
				if (attrs.includes(s.attr) || attrs.includes("\\" + s.attr)) return i;
			}
			if (!!node.mb && !attrs.includes("\\noselect") && !attrs.includes("\\nonexistent")) {
				for (let i = 0; i < specialSlots.length; i++) if (specialSlots[i].names.includes(node.name)) return i;
			}
			return -1;
		};
		const customNodes = [];
		const assignSlots = (topLevel) => (node) => {
			if (node.name == node.account.name) {
				customNodes.push(node);
				Object.values(node.children).forEach(assignSlots(false));
				return;
			}
			const idx = slotIndexForNode(node);
			if (idx < 0) {
				if (topLevel) customNodes.push(node);
				return;
			}
			const standardBySlot = node.account.standardBySlot;
			const existing = standardBySlot.get(idx);
			if (!existing) {
				standardBySlot.set(idx, node);
				return;
			}
			const slotDef = specialSlots[idx];
			const nodeAttr = hasSlotAttr(node, slotDef.attr);
			const existingAttr = hasSlotAttr(existing, slotDef.attr);
			const nodeRank = slotDef.names.indexOf(node.name);
			const existingRank = slotDef.names.indexOf(existing.name);
			if (nodeAttr && !existingAttr || nodeAttr === existingAttr && nodeRank !== -1 && (existingRank === -1 || nodeRank < existingRank)) {
				standardBySlot.set(idx, node);
				if (topLevel) customNodes.push(existing);
			} else if (topLevel) customNodes.push(node);
		};
		Object.values(root).forEach(assignSlots(true));
		const standardNodes = [];
		unified.standardBySlot.forEach((node, index) => {
			node.primary = stdMap[node.name] || specialSlots[index].display;
			node.standardOrder = index;
			standardNodes.push(node);
		});
		this.primaryFullNames = new Set(standardNodes.map((n) => n.fullName));
		accounts.forEach((account) => {
			account.standardBySlot.forEach((node, index) => {
				node.primary = stdMap[node.name] || specialSlots[index].display;
				node.standardOrder = index;
			});
		});
		const renderNodeCompare = makeNodeCompareFunc(this.settingsStore?.getState()?.customMailboxOrder || []);
		customNodes.sort(renderNodeCompare);
		const renderTree = (nodes, depth = 0) => {
			return nodes.map((node) => {
				const hasChildren = Object.keys(node.children).length > 0;
				const isExpanded = this.expandedFolders.has(node.fullName);
				const isActive = this.currentMailbox === node.fullName;
				const hasActions = depth > 0 && !node.primary;
				let isFirst = false;
				let isLast = false;
				if (depth > 0) {
					const siblings = Object.values(node.siblings).filter((n) => !this.primaryFullNames.has(n.fullName));
					siblings.sort(renderNodeCompare);
					if (siblings.length > 0) {
						isFirst = node.fullName === siblings[0].fullName;
						isLast = node.fullName === siblings[siblings.length - 1].fullName;
					}
				}
				let icon = renderIcon("folder");
				let colorClass = "icon-default";
				let label = node.name;
				if (node.primary) {
					icon = renderIcon(node.primary.icon);
					colorClass = node.primary.colorClass;
					label = node.primary.label;
				}
				const unseenCount = node.mb?.Unseen || 0;
				const isNoSelect = (node.mb?.Attrs || []).some((a) => typeof a === "string" && a.toLowerCase() === "\\noselect");
				const handleClick = (e) => {
					if (isNoSelect) {
						if (hasChildren) this.toggleFolder(e, node.fullName);
					} else this.selectMailbox(node.fullName);
				};
				const isSpecial = node.primary;
				const isAccount = node.name.startsWith("@");
				const actions = [];
				if (!isSpecial) actions.push(b`
            <button class="dropdown-item" @click=${(e) => {
					const popup = e.target.closest("alps-popup");
					if (popup) popup.close();
					this.parentForNewFolder = node.fullName;
					this.showCreatePrompt = true;
				}}>
              ${renderIcon("folderPlus")} <span class="item-text">${this.i18nStore?.t("folderList.createSubfolder")}</span>
            </button>
          `);
				if (!isSpecial && !isAccount) actions.push(b`
            <button class="dropdown-item" @click=${(e) => {
					const popup = e.target.closest("alps-popup");
					if (popup) popup.close();
					this.mailboxToRename = node.fullName;
					this.showRenamePrompt = true;
				}}>
              ${renderIcon("pen")} <span class="item-text">${this.i18nStore?.t("folderList.rename")}</span>
            </button>
          `);
				if (!isSpecial && !isAccount) actions.push(b`
            <button class="dropdown-item" @click=${(e) => {
					const popup = e.target.closest("alps-popup");
					if (popup) popup.close();
					if (node.mb?.Subscribed) mailboxOperations.unsubscribeMailbox(node.fullName);
					else mailboxOperations.subscribeMailbox(node.fullName);
				}}>
              ${renderIcon(node.mb?.Subscribed ? "eyeSlash" : "eye")} <span class="item-text">${node.mb?.Subscribed ? "Unsubscribe" : "Subscribe"}</span>
            </button>
          `);
				if (actions.length > 0) actions.push(b`<div class="dropdown-divider"></div>`);
				actions.push(b`
            <alps-popup position="right" align="top" triggerOn="hover" @click=${(e) => e.stopPropagation()}>
              <button slot="trigger" class="dropdown-item submenu-trigger">
                <div class="trigger-label">
                  ${renderIcon("sortAscending")} <span class="item-text">Order</span>
                </div>
                <div class="caret-icon">${renderIcon("caretRight")}</div>
              </button>
              <button class="dropdown-item" ?disabled=${isFirst} @click=${(e) => {
					const popup = e.target.closest("alps-popup");
					if (popup) popup.close();
					const parentPopup = e.target.closest(".folder-actions")?.querySelector("alps-popup");
					if (parentPopup) parentPopup.close();
					this.moveFolder(node, "top");
				}}>
                ${renderIcon("caretDoubleUp")} <span class="item-text">Move to Top</span>
              </button>
              <button class="dropdown-item" ?disabled=${isFirst} @click=${(e) => {
					const popup = e.target.closest("alps-popup");
					if (popup) popup.close();
					const parentPopup = e.target.closest(".folder-actions")?.querySelector("alps-popup");
					if (parentPopup) parentPopup.close();
					this.moveFolder(node, "up");
				}}>
                ${renderIcon("caretUp")} <span class="item-text">Move Up</span>
              </button>
              <button class="dropdown-item" ?disabled=${isLast} @click=${(e) => {
					const popup = e.target.closest("alps-popup");
					if (popup) popup.close();
					const parentPopup = e.target.closest(".folder-actions")?.querySelector("alps-popup");
					if (parentPopup) parentPopup.close();
					this.moveFolder(node, "down");
				}}>
                ${renderIcon("caretDown")} <span class="item-text">Move Down</span>
              </button>
              <button class="dropdown-item" ?disabled=${isLast} @click=${(e) => {
					const popup = e.target.closest("alps-popup");
					if (popup) popup.close();
					const parentPopup = e.target.closest(".folder-actions")?.querySelector("alps-popup");
					if (parentPopup) parentPopup.close();
					this.moveFolder(node, "bottom");
				}}>
                ${renderIcon("caretDoubleDown")} <span class="item-text">Move to Bottom</span>
              </button>
            </alps-popup>
          `);
				if (!isAccount && !isSpecial) {
					if (actions.length > 0) actions.push(b`<div class="dropdown-divider"></div>`);
					actions.push(b`
            <button class="dropdown-item" @click=${(e) => {
						const popup = e.target.closest("alps-popup");
						if (popup) popup.close();
						this.mailboxToDelete = node.fullName;
						if (mailboxRole(node.mb) === "trash" || folderCanBeDeleted(node.fullName)) this.showDeleteConfirm = true;
						else this.showMoveToTrashConfirm = true;
					}}>
              ${renderIcon("trash")} <span class="item-text">${this.i18nStore?.t("folderList.delete")}</span>
            </button>
          `);
				}
				return b`
          <div 
            class="folder-item ${isActive ? "active" : ""} ${isNoSelect ? "no-select" : ""} ${hasActions ? "has-actions" : ""}"
            title=${label}
            @click=${handleClick}
          >
            <alps-icon-btn 
              class="folder-toggle-btn" 
              icon=${isExpanded ? "caretDown" : "caretRight"}
              style="visibility: ${hasChildren ? "visible" : "hidden"}; --btn-padding: 2px;" 
              @click=${(e) => {
					e.stopPropagation();
					if (hasChildren) this.toggleFolder(e, node.fullName);
				}}
            ></alps-icon-btn>
            
            <div class="folder-icon ${colorClass}">${icon}</div>
            <div class="folder-name">${label}</div>
            
            ${actions.length > 0 ? b`
              <div class="folder-actions ${this.activeKebabMenu === node.fullName ? "popup-open" : ""}" @click=${(e) => e.stopPropagation()}>
                <alps-popup 
                  align="right" 
                  position="bottom"
                  @popup-open=${() => {
					this.activeKebabMenu = node.fullName;
				}}
                  @popup-close=${() => {
					if (this.activeKebabMenu === node.fullName) this.activeKebabMenu = null;
				}}
                >
                  <alps-icon-btn slot="trigger" class="kebab-btn" icon="dotsThreeCircleVertical" style="--btn-padding: 8px;"></alps-icon-btn>
                  ${actions}
                </alps-popup>
              </div>
            ` : ""}

            ${unseenCount > 0 ? b`<div class="folder-badge">${unseenCount}</div>` : ""}
          </div>

          ${hasChildren && isExpanded ? b`
            <div class="folder-children">
              ${renderTree(Object.values(node.children).sort(renderNodeCompare), depth + 1)}
            </div>
          ` : ""}
        `;
			});
		};
		return b`
      <div class="sidebar-wrapper ${this.collapsed ? "collapsed" : ""}">
        <alps-toolbar class="sidebar-header" ?scrolled=${this.isScrolled}>
          <alps-create-button 
            icon="pen"
            ?disabled=${(this.composeStore?.getState()?.activeComposers?.length || 0) >= 3}
            title=${this.i18nStore?.t("folderList.compose")}
            ?collapsed=${this.hasAttribute("collapsed")}
            @click=${() => this.dispatchEvent(new CustomEvent("compose"))}
          >${this.i18nStore?.t("folderList.compose")}</alps-create-button>
        </alps-toolbar>
        <div class="sidebar-content" @scroll=${this.handleScroll}>
          <div class="sidebar-scroll-content">
            ${renderTree(standardNodes)}
            ${standardNodes.length > 0 && customNodes.length > 0 ? b`
              <div class="folder-separator"></div>
            ` : ""}
            <div class="sidebar-header-title">
              <span>${this.i18nStore?.t("folderList.title")}</span>
            </div>
            ${renderTree(customNodes)}
          </div>
        </div>
      </div>

      ${this.showCreatePrompt ? b`
        <ui-prompt
          title=${this.parentForNewFolder ? this.i18nStore?.t("folderList.createSubfolderUnder")?.replace("{folder}", this.parentForNewFolder) : this.i18nStore?.t("folderList.createFolder")}
          confirmText="Create"
          .fields=${[{
			id: "name",
			label: "Folder Name",
			autofocus: true
		}]}
          @submit=${this.handleCreateSubmit}
          @cancel=${() => {
			this.showCreatePrompt = false;
			this.parentForNewFolder = "";
		}}
        ></ui-prompt>
      ` : ""}

      ${this.showRenamePrompt ? b`
        <ui-prompt
          title="${this.i18nStore?.t("folderList.renameFolder")}"
          confirmText="Rename"
          .fields=${[{
			id: "name",
			label: "New Name",
			autofocus: true,
			value: this.mailboxToRename
		}]}
          @submit=${this.handleRenameSubmit}
          @cancel=${() => this.showRenamePrompt = false}
        ></ui-prompt>
      ` : ""}

      ${this.showMoveToTrashConfirm ? b`
        <ui-confirm
          title=${this.i18nStore?.t("folderList.moveToTrash")}
          message=${this.i18nStore?.t("folderList.moveToTrashConfirm")?.replace("{folder}", this.mailboxToDelete)}
          confirmText=${this.i18nStore?.t("folderList.moveToTrash")}
          isDanger=${false}
          @confirm=${this.handleMoveToTrashConfirm}
          @cancel=${() => this.showMoveToTrashConfirm = false}
        ></ui-confirm>
      ` : ""}

      ${this.showDeleteConfirm ? b`
        <ui-confirm
          title="${this.i18nStore?.t("folderList.deleteFolder")}"
          message=${this.i18nStore?.t("folderList.deleteFolderConfirm")?.replace("{folder}", this.mailboxToDelete)}
          confirmText="Delete"
          isDanger=${true}
          @confirm=${this.handleDeleteConfirm}
          @cancel=${() => this.showDeleteConfirm = false}
        ></ui-confirm>
      ` : ""}
    `;
	}
};
__decorate([c({ context: composeContext })], FolderList.prototype, "composeStore", void 0);
__decorate([c({ context: i18nContext })], FolderList.prototype, "i18nStore", void 0);
__decorate([c({ context: settingsContext })], FolderList.prototype, "settingsStore", void 0);
__decorate([n$1({ type: Array })], FolderList.prototype, "mailboxes", void 0);
__decorate([n$1({ type: String })], FolderList.prototype, "currentMailbox", void 0);
__decorate([n$1({ type: Object })], FolderList.prototype, "expandedFolders", void 0);
__decorate([n$1({ type: String })], FolderList.prototype, "layoutMode", void 0);
__decorate([n$1({ type: Boolean })], FolderList.prototype, "syncing", void 0);
__decorate([n$1({
	type: Boolean,
	reflect: true
})], FolderList.prototype, "collapsed", void 0);
__decorate([r()], FolderList.prototype, "isScrolled", void 0);
__decorate([r()], FolderList.prototype, "showCreatePrompt", void 0);
__decorate([r()], FolderList.prototype, "showRenamePrompt", void 0);
__decorate([r()], FolderList.prototype, "mailboxToRename", void 0);
__decorate([r()], FolderList.prototype, "showDeleteConfirm", void 0);
__decorate([r()], FolderList.prototype, "showMoveToTrashConfirm", void 0);
__decorate([r()], FolderList.prototype, "mailboxToDelete", void 0);
__decorate([r()], FolderList.prototype, "parentForNewFolder", void 0);
__decorate([r()], FolderList.prototype, "activeKebabMenu", void 0);
FolderList = __decorate([t("alps-folder-list")], FolderList);
//#endregion
//#region src/components/alps-recipient-pill.ts
var RecipientPill = class RecipientPill extends i {
	constructor(..._args) {
		super(..._args);
		this.name = "";
		this.address = "";
	}
	static {
		this.styles = i$1`
    :host {
      display: inline;
    }
    
    .recipient-link {
      display: inline;
      color: var(--text-color);
      text-decoration: none;
      cursor: pointer;
    }

    .recipient-link:hover {
      text-decoration: underline;
    }

    .recipient-name {
      font-weight: 500;
    }

    .recipient-address {
      color: var(--text-muted);
    }
  `;
	}
	handleClick() {
		this.composeStore.openComposer({ to: [this.address] });
	}
	render() {
		let displayName = this.name;
		if (displayName === this.address) displayName = "";
		if (displayName) return b`
        <a class="recipient-link" title="${this.address}" @click=${this.handleClick}>
          <span class="recipient-name">${displayName}</span>
          <span class="recipient-address">&lt;${this.address}&gt;</span>
        </a>
      `;
		else return b`
        <a class="recipient-link" title="${this.address}" @click=${this.handleClick}>
          ${this.address}
        </a>
      `;
	}
};
__decorate([c({ context: composeContext })], RecipientPill.prototype, "composeStore", void 0);
__decorate([n$1({ type: String })], RecipientPill.prototype, "name", void 0);
__decorate([n$1({ type: String })], RecipientPill.prototype, "address", void 0);
RecipientPill = __decorate([t("alps-recipient-pill")], RecipientPill);
//#endregion
//#region src/components/alps-attachment-pill.ts
var AttachmentPill = class AttachmentPill extends i {
	constructor(..._args) {
		super(..._args);
		this.attachment = null;
		this.downloadUrl = "";
		this.fallbackName = "Unknown attachment";
		this.removable = false;
		this.compact = false;
	}
	static {
		this.styles = i$1`
    .attachment-chip {
      display: inline-flex;
      align-items: center;
      width: 100%;
      min-width: 0;
      max-width: 100%;
      box-sizing: border-box;
      gap: 8px;
      padding: 6px 10px;
      border: 1px solid var(--border-color);
      border-radius: 6px;
      background: var(--bg-primary);
      color: var(--text-color);
      text-decoration: none;
      font-size: 13px;
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;
    }

    .progress-bar {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      background: var(--bg-selected);
      opacity: 0.3;
      transition: width 0.1s linear;
      pointer-events: none;
      z-index: 0;
    }

    .attachment-icon, .attachment-name, .attachment-size, .remove-btn {
      position: relative;
      z-index: 1;
    }

    :host([compact]) .attachment-chip {
      padding: 2px 4px;
      border-radius: 4px;
      gap: 6px;
    }

    .attachment-icon {
      color: var(--text-muted);
      flex-shrink: 0;
      display: flex;
    }

    .icon {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }

    :host([compact]) .icon {
      width: 16px;
      height: 16px;
    }

    .attachment-name {
      font-weight: 500;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    :host([compact]) .attachment-name {
      flex: 1 auto;
      font-size: 12px;
    }

    .attachment-size {
      font-size: 12px;
      color: var(--text-muted);
      flex-shrink: 0;
    }

    :host([compact]) .attachment-size {
      font-size: 11px;
    }

    .remove-btn {
      background: none;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3px;
      border-radius: 4px;
      margin-right: -4px;
    }

    .remove-btn:hover {
      color: var(--text-color);
    }

    .remove-btn .icon {
      width: 14px;
      height: 14px;
    }
  `;
	}
	_handleRemove(e) {
		e.preventDefault();
		e.stopPropagation();
		this.dispatchEvent(new CustomEvent("remove-attachment", {
			bubbles: true,
			composed: true,
			detail: { attachment: this.attachment }
		}));
	}
	render() {
		if (!this.attachment) return b``;
		const name = this.attachment.Filename || this.attachment.filename || this.attachment.name || this.fallbackName;
		const size = this.attachment.Size || this.attachment.size || 0;
		const uploading = this.attachment.uploading;
		const progress = this.attachment.progress || 0;
		const content = b`
      ${uploading ? b`<div class="progress-bar" style="width: ${progress}%"></div>` : ""}
      <div class="attachment-icon">${renderIcon("paperclipHorizontal")}</div>
      <span class="attachment-name">${name}</span>
      <span class="attachment-size">${uploading ? `${progress}% of ${formatSize(size)}` : formatSize(size)}</span>
      ${this.removable ? b`
        <button class="remove-btn" @click=${this._handleRemove} title="${this.i18nStore?.t("attachment.remove")}">
          ${renderIcon("x")}
        </button>
      ` : ""}
    `;
		if (this.downloadUrl) return b`
        <a href="${this.downloadUrl}" download="${name}" class="attachment-chip" title="${name}">
          ${content}
        </a>
      `;
		else return b`
        <div class="attachment-chip" title="${name}">
          ${content}
        </div>
      `;
	}
};
__decorate([c({ context: i18nContext })], AttachmentPill.prototype, "i18nStore", void 0);
__decorate([n$1({ type: Object })], AttachmentPill.prototype, "attachment", void 0);
__decorate([n$1({ type: String })], AttachmentPill.prototype, "downloadUrl", void 0);
__decorate([n$1({ type: String })], AttachmentPill.prototype, "fallbackName", void 0);
__decorate([n$1({ type: Boolean })], AttachmentPill.prototype, "removable", void 0);
__decorate([n$1({
	type: Boolean,
	reflect: true
})], AttachmentPill.prototype, "compact", void 0);
AttachmentPill = __decorate([t("alps-attachment-pill")], AttachmentPill);
//#endregion
//#region src/components/alps-attachment-list.ts
var AttachmentList = class AttachmentList extends i {
	constructor(..._args) {
		super(..._args);
		this.attachments = [];
		this.mailbox = FOLDER_INBOX;
		this.messageUid = "";
		this.removable = false;
		this.composerMode = false;
		this.attachmentsExpanded = true;
		this._handleStoreChange = () => {
			this.requestUpdate();
		};
	}
	connectedCallback() {
		super.connectedCallback();
		this.updateComplete.then(() => {
			this.i18nStore?.addEventListener("change", this._handleStoreChange);
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.i18nStore?.removeEventListener("change", this._handleStoreChange);
	}
	toggleAttachments() {
		this.attachmentsExpanded = !this.attachmentsExpanded;
	}
	_downloadAll(e) {
		e.stopPropagation();
		if (!this.attachments || this.attachments.length === 0 || !this.messageUid) return;
		let mbox = this.mailbox || "INBOX";
		if (!this.mailbox) {
			const hashMatch = window.location.hash.match(/^#\/mailbox\/([^/]+)/);
			if (hashMatch) mbox = decodeURIComponent(hashMatch[1]);
		}
		this.attachments.forEach((att, index) => {
			const partPathStr = Array.isArray(att.Path) ? att.Path.join(".") : att.Path;
			const downloadUrl = `/mailboxes/${encodeMailboxPath(mbox)}/messages/${this.messageUid}/raw?part=${partPathStr}`;
			setTimeout(() => {
				const a = document.createElement("a");
				a.href = downloadUrl;
				a.download = att.Filename || this.i18nStore?.t("messageReader.unknownAttachment") || "attachment";
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			}, index * 200);
		});
	}
	static {
		this.styles = i$1`
    :host {
      display: block;
      width: 100%;
    }

    .attachments-container {
      padding: 16px 24px;
      border-bottom: 1px solid var(--border-color);
      background: var(--bg-secondary);
      flex-shrink: 0;
      max-height: 30vh;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }

    .attachments-header {
      font-size: 13px;
      font-weight: 600;
      color: var(--text-muted);
      margin: 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }

    .attachments-title {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .attachments-header:hover {
      color: var(--text-color);
    }

    .icon {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }

    .attachments-header .icon {
      width: 16px;
      height: 16px;
      transition: transform 0.3s ease;
    }

    .attachments-actions {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .download-all-btn {
      width: 16px;
      height: 16px;
      fill: currentColor;
      transition: transform 0.2s ease, color 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
    }

    .download-all-btn:hover {
      color: var(--text-color);
      transform: translateY(-1px);
    }

    .attachments-wrapper {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s ease-out, margin 0.3s ease-out;
      margin: 0;
    }

    .attachments-wrapper.expanded {
      grid-template-rows: 1fr;
      margin-top: 12px;
    }

    .caret {
      transition: transform 0.3s ease;
    }

    .attachments-container.is-expanded .caret {
      transform: rotate(180deg);
    }

    .attachments-container.is-closed .caret {
      transform: rotate(0deg);
    }

    :host([composermode]) .attachments-container.is-expanded .caret {
      transform: rotate(0deg);
    }

    :host([composermode]) .attachments-container.is-closed .caret {
      transform: rotate(180deg);
    }

    .attachments-list {
      min-height: 0;
      overflow: hidden;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 12px;
    }

    :host([composermode]) .attachments-container {
      border-bottom: none;
      border-top: 1px solid var(--border-color);
      padding: 8px 16px;
    }

    :host([composermode]) .attachments-list {
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
      gap: 8px;
    }

    :host([composermode]) .attachments-header {
      font-size: 11px;
    }

    @media (max-width: 768px) {
      .attachments-container {
        border-bottom: none;
        border-top: 1px solid var(--border-color);
      }

      .attachments-container.is-expanded .caret {
        transform: rotate(0deg);
      }

      .attachments-container.is-closed .caret {
        transform: rotate(180deg);
      }

      .attachments-list {
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      }
    }
  `;
	}
	render() {
		if (!this.attachments || this.attachments.length === 0) return b``;
		return b`
      <div class="attachments-container ${this.attachmentsExpanded ? "is-expanded" : "is-closed"}">
        <div class="attachments-header" @click=${this.toggleAttachments}>
          <div class="attachments-title">
            <span>${this.i18nStore?.t("messageReader.attachments")} (${this.attachments.length})</span>
          </div>
          <div class="attachments-actions">
            ${!this.composerMode ? b`
              <div 
                class="download-all-btn" 
                title=${this.i18nStore?.t("messageReader.downloadAllAttachments")} 
                @click=${this._downloadAll}
              >
                ${renderIcon("downloadSimple")}
              </div>
            ` : ""}
            <div class="icon caret">
              ${renderIcon("caretDown")}
            </div>
          </div>
        </div>
        <div class="attachments-wrapper ${this.attachmentsExpanded ? "expanded" : ""}">
          <div class="attachments-list">
            ${this.attachments.map((att) => {
			let downloadUrl = "";
			if (this.messageUid) {
				const partPathStr = Array.isArray(att.Path) ? att.Path.join(".") : att.Path;
				let mbox = this.mailbox || "INBOX";
				if (!this.mailbox) {
					const hashMatch = window.location.hash.match(/^#\/mailbox\/([^/]+)/);
					if (hashMatch) mbox = decodeURIComponent(hashMatch[1]);
				}
				downloadUrl = `/mailboxes/${encodeMailboxPath(mbox)}/messages/${this.messageUid}/raw?part=${partPathStr}`;
			}
			return b`
                <alps-attachment-pill
                  .attachment=${att}
                  .downloadUrl=${downloadUrl}
                  .fallbackName=${this.i18nStore?.t("messageReader.unknownAttachment")}
                  .removable=${this.removable}
                  .compact=${this.composerMode}
                ></alps-attachment-pill>
              `;
		})}
          </div>
        </div>
      </div>
    `;
	}
};
__decorate([c({ context: i18nContext })], AttachmentList.prototype, "i18nStore", void 0);
__decorate([n$1({ type: Array })], AttachmentList.prototype, "attachments", void 0);
__decorate([n$1({ type: String })], AttachmentList.prototype, "mailbox", void 0);
__decorate([n$1({ type: String })], AttachmentList.prototype, "messageUid", void 0);
__decorate([n$1({ type: Boolean })], AttachmentList.prototype, "removable", void 0);
__decorate([n$1({
	type: Boolean,
	reflect: true
})], AttachmentList.prototype, "composerMode", void 0);
__decorate([r()], AttachmentList.prototype, "attachmentsExpanded", void 0);
AttachmentList = __decorate([t("alps-attachment-list")], AttachmentList);
//#endregion
//#region src/components/alps-folder-selector-popup.ts
var AlpsFolderSelectorPopup = class AlpsFolderSelectorPopup extends i {
	constructor(..._args) {
		super(..._args);
		this.mailboxes = [];
		this.currentMailbox = "";
		this.noActionBox = false;
		this.noSearchBox = false;
		this.filterQuery = "";
		this.isMove = true;
	}
	static {
		this.styles = i$1`
    :host {
      display: inline-block;
    }

    alps-popup {
      display: block;
      width: 100%;
    }

    .selector-container {
      display: flex;
      flex-direction: column;
      width: 240px;
    }

    .search-box {
      padding: 8px 12px;
      border-bottom: 1px solid var(--border-color, #e5e7eb);
    }

    .action-box {
      padding: 10px 12px 6px;
      border-bottom: 1px solid var(--border-color, #e5e7eb);
      background-color: var(--bg-secondary, #f9fafb);
      display: flex;
      flex-direction: row;
      gap: 16px;
      margin-top: -4px; /* offset popup padding at top */
      border-radius: 6px 6px 0 0;
    }

    .action-box label {
      font-size: 13px;
      font-weight: 500;
      color: var(--text-primary, #111827);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      user-select: none;
    }

    .search-input {
      width: 100%;
      padding: 6px 8px;
      border: 1px solid var(--border-color, #e5e7eb);
      border-radius: 4px;
      font-size: 13px;
      box-sizing: border-box;
      outline: none;
    }

    .search-input:focus {
      border-color: var(--accent-color, #005A9E);
    }

    .folder-list {
      max-height: 250px;
      overflow-y: auto;
      padding: 4px 0 0 0;
      margin-bottom: -4px; /* offset the bottom padding of the popup */
    }

    .folder-item {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
      height: 36px;
      padding: 0 12px;
      box-sizing: border-box;
      font-size: 13px;
      color: var(--text-primary, #111827);
      background: none;
      border: none;
      cursor: pointer;
      text-align: left;
      transition: background-color 0.2s;
    }

    .folder-item:hover {
      background-color: var(--hover-color, #f3f4f6);
    }

    .folder-item svg {
      width: 16px;
      height: 16px;
      fill: currentColor;
      color: var(--text-secondary, #4b5563);
      flex-shrink: 0;
    }

    .folder-name {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .no-results {
      padding: 12px;
      text-align: center;
      font-size: 13px;
      color: var(--text-muted, #6b7280);
      font-style: italic;
    }

    input[type="radio"] {
      cursor: pointer;
      margin: 0;
    }
  `;
	}
	_handleFilter(e) {
		const target = e.target;
		this.filterQuery = target.value.toLowerCase();
	}
	_handleSelect(folderName) {
		if (this.popup) this.popup.close();
		this.dispatchEvent(new CustomEvent("folder-selected", {
			detail: {
				folderName,
				isMove: this.isMove
			},
			bubbles: true,
			composed: true
		}));
	}
	_handlePopupToggle() {
		this.filterQuery = "";
		setTimeout(() => {
			if (this.filterInput) this.filterInput.focus();
		}, 50);
	}
	render() {
		const filteredFolders = this.mailboxes.map((mb) => mb.Name || mb.Mailbox || "").filter((name) => name !== "" && name !== this.currentMailbox).filter((name) => name.toLowerCase().includes(this.filterQuery));
		return b`
      <alps-popup align="right" @click=${this._handlePopupToggle}>
        <slot name="trigger" slot="trigger"></slot>
        
        <div class="selector-container" @click=${(e) => e.stopPropagation()}>
          ${this.noActionBox ? "" : b`
          <div class="action-box">
            <label>
              <input 
                type="radio" 
                name="folderAction"
                .checked=${this.isMove}
                @change=${() => this.isMove = true}
              />
              ${this.i18nStore?.t("folderSelector.actionMove")}
            </label>
            <label>
              <input 
                type="radio" 
                name="folderAction"
                .checked=${!this.isMove}
                @change=${() => this.isMove = false}
              />
              ${this.i18nStore?.t("folderSelector.actionCopy")}
            </label>
          </div>
          `}
          
          ${this.noSearchBox ? "" : b`
            <div class="search-box">
              <input 
                type="text" 
                class="search-input" 
                placeholder=${this.i18nStore?.t("folderSelector.filter")}
                .value=${this.filterQuery}
                @input=${this._handleFilter}
              />
            </div>
          `}
          
          <div class="folder-list">
            ${filteredFolders.length > 0 ? filteredFolders.map((folderName) => b`
              <button class="folder-item" @click=${() => this._handleSelect(folderName)}>
                ${renderIcon("folder")}
                <span class="folder-name">${folderName}</span>
              </button>
            `) : b`
              <div class="no-results">${this.i18nStore?.t("folderSelector.noResults")}</div>
            `}
          </div>
        </div>
      </alps-popup>
    `;
	}
};
__decorate([c({ context: i18nContext })], AlpsFolderSelectorPopup.prototype, "i18nStore", void 0);
__decorate([n$1({ type: Array })], AlpsFolderSelectorPopup.prototype, "mailboxes", void 0);
__decorate([n$1({ type: String })], AlpsFolderSelectorPopup.prototype, "currentMailbox", void 0);
__decorate([n$1({ type: Boolean })], AlpsFolderSelectorPopup.prototype, "noActionBox", void 0);
__decorate([n$1({ type: Boolean })], AlpsFolderSelectorPopup.prototype, "noSearchBox", void 0);
__decorate([r()], AlpsFolderSelectorPopup.prototype, "filterQuery", void 0);
__decorate([r()], AlpsFolderSelectorPopup.prototype, "isMove", void 0);
__decorate([e("alps-popup")], AlpsFolderSelectorPopup.prototype, "popup", void 0);
__decorate([e("input")], AlpsFolderSelectorPopup.prototype, "filterInput", void 0);
AlpsFolderSelectorPopup = __decorate([t("alps-folder-selector-popup")], AlpsFolderSelectorPopup);
//#endregion
//#region src/utils/html-sanitizer.ts
var import_css = /* @__PURE__ */ __toESM(require_css(), 1);
function findPartPathByCID(structure, cid, currentPath = "") {
	if (!structure) return null;
	const cleanCid = cid.replace(/^<|>$/g, "");
	if (structure.ID && structure.ID.replace(/^<|>$/g, "") === cleanCid) return currentPath || "1";
	if (structure.Children && Array.isArray(structure.Children)) for (let i = 0; i < structure.Children.length; i++) {
		const nextPath = currentPath ? `${currentPath}.${i + 1}` : `${i + 1}`;
		const found = findPartPathByCID(structure.Children[i], cid, nextPath);
		if (found) return found;
	}
	return null;
}
function processCSS(cssText, options) {
	if (!cssText) return cssText;
	try {
		const ast = import_css.parse(cssText, { silent: true });
		if (ast && ast.stylesheet && ast.stylesheet.rules) {
			const urlRegex = /url\(\s*(['"]?)(https?:\/\/[^'"\)]+)\1\s*\)/gi;
			const replaceUrl = (val) => {
				return val.replace(urlRegex, (_match, quote, url) => {
					if (options.onRemoteResourceBlocked) options.onRemoteResourceBlocked();
					if (!options.allowRemoteResources) return "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)";
					else {
						const q = quote || "\"";
						return `url(${q}/proxy?url=${encodeURIComponent(url)}${q})`;
					}
				});
			};
			const walkRules = (rules) => {
				for (let i = rules.length - 1; i >= 0; i--) {
					const rule = rules[i];
					if ([
						"rule",
						"font-face",
						"page",
						"keyframe"
					].includes(rule.type) && !rule.declarations) rule.declarations = [];
					if (["rule", "page"].includes(rule.type) && !rule.selectors) rule.selectors = [];
					if (rule.type === "keyframe" && !rule.values) rule.values = [];
					if (rule.type === "import") {
						const importRule = rule;
						if (importRule.import && importRule.import.match(/https?:\/\//i)) {
							if (options.onRemoteResourceBlocked) options.onRemoteResourceBlocked();
							if (!options.allowRemoteResources) {
								rules.splice(i, 1);
								continue;
							} else importRule.import = importRule.import.replace(/(url\(\s*)?(['"]?)(https?:\/\/[^'"\)]+)\2(\s*\))?/i, (_match, urlPrefix, quote, url, urlSuffix) => {
								const prefix = urlPrefix || "";
								const suffix = urlSuffix || "";
								const q = quote || "\"";
								return `${prefix}${q}/proxy?url=${encodeURIComponent(url)}${q}${suffix}`;
							});
						}
					} else if (rule.type === "font-face") {
						const fontRule = rule;
						if (fontRule.declarations) {
							let hasRemoteFont = false;
							for (const dec of fontRule.declarations) if (dec.type === "declaration" && dec.value?.match(urlRegex)) {
								if (options.onRemoteResourceBlocked) options.onRemoteResourceBlocked();
								hasRemoteFont = true;
							}
							if (hasRemoteFont && !options.allowRemoteResources) {
								rules.splice(i, 1);
								continue;
							}
						}
					}
					if (rule.declarations) {
						for (const dec of rule.declarations) if (dec.type === "declaration" && dec.value && dec.value.match(urlRegex)) dec.value = replaceUrl(dec.value);
					}
					if (rule.rules) walkRules(rule.rules);
				}
			};
			walkRules(ast.stylesheet.rules);
			return import_css.stringify(ast);
		}
	} catch (err) {
		console.warn("AST CSS parsing failed, falling back to regex sanitizer", err);
	}
	let modified = cssText;
	const importRegex = /@import\s+(?:url\(\s*)?(['"]?)(https?:\/\/[^'"\)]+)\1\s*\)?\s*;?/gi;
	const urlRegex = /url\(\s*(['"]?)(https?:\/\/[^'"\)]+)\1\s*\)/gi;
	if (modified.match(importRegex) || modified.match(urlRegex)) {
		if (options.onRemoteResourceBlocked) options.onRemoteResourceBlocked();
		if (!options.allowRemoteResources) {
			modified = modified.replace(importRegex, "");
			modified = modified.replace(/@font-face\s*\{[^{}]*\}/gi, (match) => {
				if (/url\(\s*['"]?https?:\/\//i.test(match)) return "";
				return match;
			});
			modified = modified.replace(urlRegex, "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)");
		} else {
			modified = modified.replace(importRegex, (_match, quote, url) => {
				const q = quote || "\"";
				return `@import url(${q}/proxy?url=${encodeURIComponent(url)}${q});`;
			});
			modified = modified.replace(urlRegex, (_match, quote, url) => {
				return `url(${quote}/proxy?url=${encodeURIComponent(url)}${quote})`;
			});
		}
	}
	return modified;
}
function sanitizeMessageHTML(rawHtml, options) {
	const doc = new DOMParser().parseFromString(rawHtml, "text/html");
	const base = doc.createElement("base");
	base.target = "_blank";
	doc.head.prepend(base);
	const csp = doc.createElement("meta");
	csp.httpEquiv = "Content-Security-Policy";
	csp.content = `script-src 'none'; img-src ${window.location.origin} data: blob: cid:; media-src ${window.location.origin} data: blob: cid:;`;
	doc.head.prepend(csp);
	const style = doc.createElement("style");
	style.textContent = `
    body { margin: 0; padding: 24px; box-sizing: border-box; font: 14px -apple-system, system-ui, 'Segoe UI', Roboto, sans-serif; overflow-x: auto; word-wrap: break-word; background-color: #ffffff; color: #000000; }
    @media (max-width: 768px) { body { padding: 16px !important; } }
    html:not(.x), body:not(.x) { height: auto !important; }
    p:first-child { margin-top: 0; }
    p:last-child { margin-bottom: 0; }
    a[href] { color: #3781b8; text-decoration: none; }
    a[href]:hover { text-decoration: underline; }
    blockquote[type='cite'] { margin: 0 0 0 0.8ex; border-left: 1px #ccc solid; padding-left: 1ex; }
    img { max-width: 100%; height: auto; }
  `;
	doc.head.prepend(style);
	doc.querySelectorAll("img").forEach((img) => {
		const src = img.getAttribute("src");
		if (!src) return;
		if (src.toLowerCase().startsWith("cid:")) {
			const cid = src.substring(4);
			if (options.messageStructure) {
				const partPath = findPartPathByCID(options.messageStructure, cid);
				if (partPath) img.src = `/mailboxes/${encodeMailboxPath(options.mailbox)}/messages/${options.messageUid}/raw?part=${partPath}`;
			}
		} else if (src.toLowerCase().startsWith("http://") || src.toLowerCase().startsWith("https://")) {
			if (options.onRemoteResourceBlocked) options.onRemoteResourceBlocked();
			if (!options.allowRemoteResources) {
				img.setAttribute("data-original-src", src);
				img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
				img.style.height = "0";
				img.style.width = "0";
			} else img.src = `/proxy?url=${encodeURIComponent(src)}`;
		}
	});
	doc.querySelectorAll("link[rel=\"stylesheet\"]").forEach((link) => {
		const href = link.getAttribute("href");
		if (href && (href.toLowerCase().startsWith("http://") || href.toLowerCase().startsWith("https://"))) {
			if (options.onRemoteResourceBlocked) options.onRemoteResourceBlocked();
			if (!options.allowRemoteResources) link.remove();
			else link.setAttribute("href", `/proxy?url=${encodeURIComponent(href)}`);
		}
	});
	doc.querySelectorAll("style").forEach((styleTag) => {
		if (styleTag.textContent) styleTag.textContent = processCSS(styleTag.textContent, options);
	});
	const urlRegex = /url\(\s*(['"]?)(https?:\/\/[^'"\)]+)\1\s*\)/gi;
	doc.querySelectorAll("[style]").forEach((el) => {
		let styleAttr = el.getAttribute("style");
		if (styleAttr && styleAttr.match(urlRegex)) {
			if (options.onRemoteResourceBlocked) options.onRemoteResourceBlocked();
			if (!options.allowRemoteResources) styleAttr = styleAttr.replace(urlRegex, "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)");
			else styleAttr = styleAttr.replace(urlRegex, (_match, quote, url) => {
				const q = quote || "\"";
				return `url(${q}/proxy?url=${encodeURIComponent(url)}${q})`;
			});
			el.setAttribute("style", styleAttr);
		}
	});
	return doc.documentElement.outerHTML;
}
//#endregion
//#region src/utils/email-quote.ts
function formatAddrs(addrs) {
	if (!addrs) return [];
	return addrs.map((a) => a.Name ? `${a.Name} <${a.Mailbox}@${a.Host}>` : `${a.Mailbox}@${a.Host}`);
}
function generateQuote(type, message, textBody, rawMessageHtml, hasHtml, dateFormat = "YYYY-MM-DD", hourFormat = "12") {
	const originalSubject = message?.Envelope?.Subject || "";
	let subject = originalSubject;
	if (type === "forward") subject = subject.toLowerCase().startsWith("fwd:") ? subject : `Fwd: ${subject}`;
	else subject = subject.toLowerCase().startsWith("re:") ? subject : `Re: ${subject}`;
	let to = [];
	let cc = [];
	if (type === "reply" || type === "replyAll") {
		const replyTo = message?.Envelope?.ReplyTo;
		const from = message?.Envelope?.From;
		to = [...formatAddrs(replyTo && replyTo.length > 0 ? replyTo : from)];
		if (type === "replyAll") {
			const originalTo = formatAddrs(message?.Envelope?.To) || [];
			const originalCc = formatAddrs(message?.Envelope?.Cc) || [];
			const allTo = new Set([...to, ...originalTo]);
			to = Array.from(allTo);
			cc = [...originalCc];
		}
	}
	const dateStr = message?.Envelope?.Date ? formatFullDate(message.Envelope.Date, dateFormat, hourFormat) : "";
	const sender = message?.Envelope?.From?.[0];
	const senderAddress = sender?.Mailbox && sender?.Host ? `${sender.Mailbox}@${sender.Host}` : "";
	const senderName = sender?.Name || senderAddress || "Unknown Sender";
	let quoteHeader = `On ${dateStr}, ${senderName} wrote:`;
	if (type === "forward") quoteHeader = `---------- Forwarded message ---------\nFrom: ${senderName} <${senderAddress}>\nDate: ${dateStr}\nSubject: ${originalSubject}\nTo: ${formatAddrs(message?.Envelope?.To).join(", ")}\n`;
	const quotedText = `\n\n${quoteHeader}\n` + textBody.split("\n").map((line) => `> ${line}`).join("\n");
	let quotedHtml = "";
	if (hasHtml && rawMessageHtml) if (type === "forward") quotedHtml = `<br><br><div class="gmail_quote"><div dir="ltr" class="gmail_attr">---------- Forwarded message ---------<br>From: ${senderName} &lt;${senderAddress}&gt;<br>Date: ${dateStr}<br>Subject: ${originalSubject}<br>To: ${formatAddrs(message?.Envelope?.To).join(", ")}<br></div><br>${rawMessageHtml}</div>`;
	else quotedHtml = `<br><br><div class="gmail_quote"><div dir="ltr" class="gmail_attr">On ${dateStr}, ${senderName} wrote:<br></div><blockquote class="gmail_quote" style="margin:0px 0px 0px 0.8ex;border-left:1px solid rgb(204,204,204);padding-left:1ex">${rawMessageHtml}</blockquote></div>`;
	else quotedHtml = `<br><br><div class="gmail_quote"><div dir="ltr" class="gmail_attr">${quoteHeader.replace(/\n/g, "<br>")}<br></div><blockquote class="gmail_quote" style="margin:0px 0px 0px 0.8ex;border-left:1px solid rgb(204,204,204);padding-left:1ex">${textBody.replace(/\n/g, "<br>")}</blockquote></div>`;
	return {
		subject,
		to,
		cc,
		quotedText,
		quotedHtml
	};
}
//#endregion
//#region src/utils/reader-utils.ts
function applyThemeToIframe(iframe, themeIframeContent) {
	if (!iframe.contentDocument || !iframe.contentDocument.body) return;
	const existing = iframe.contentDocument.getElementById("dark-mode-override");
	if (existing) existing.remove();
	if (!themeIframeContent) return;
	if (document.body.classList.contains("theme-dark")) {
		const bgPrimary = window.getComputedStyle(document.documentElement).getPropertyValue("--bg-primary").trim() || "#1f2937";
		const textPrimary = window.getComputedStyle(document.documentElement).getPropertyValue("--text-primary").trim() || "#f9fafb";
		const accentColor = window.getComputedStyle(document.documentElement).getPropertyValue("--accent-color").trim() || "#3b82f6";
		const border = window.getComputedStyle(document.documentElement).getPropertyValue("--border-color").trim() || "#374151";
		const style = iframe.contentDocument.createElement("style");
		style.id = "dark-mode-override";
		style.textContent = `
      html {
        color-scheme: dark !important;
      }
      body {
        background-color: ${bgPrimary} !important;
        color: ${textPrimary} !important;
      }
      /* Make all layout elements transparent so theme background shows through */
      table, tr, td, tbody, thead, div, p, span, section, article, header, footer, blockquote {
        background-color: transparent !important;
      }
      /* Ensure all standard text containers inherit readable text color */
      td, div, p, span, h1, h2, h3, h4, h5, h6, font {
        color: inherit !important;
      }
      /* Style links to use the theme's accent color */
      a {
        color: ${accentColor} !important;
      }
      /* Ensure list elements are clean and transparent */
      ul, ol, li {
        background-color: transparent !important;
        color: inherit !important;
      }
      /* Style horizontal rules/lines */
      hr {
        border-color: ${border} !important;
      }
    `;
		iframe.contentDocument.head.appendChild(style);
	}
}
function setupIframeSizing(iframe, themeIframeContent) {
	if (!iframe.contentDocument || !iframe.contentDocument.body) return;
	iframe.style.width = "100%";
	iframe.contentDocument.addEventListener("dragover", (ev) => ev.preventDefault());
	iframe.contentDocument.addEventListener("drop", (ev) => ev.preventDefault());
	applyThemeToIframe(iframe, themeIframeContent);
	if (iframe._ro) iframe._ro.disconnect();
	const doc = iframe.contentDocument;
	const measure = () => {
		if (!iframe.contentDocument) return;
		const html = iframe.contentDocument.documentElement;
		const body = iframe.contentDocument.body;
		const newHeight = Math.max(html?.scrollHeight || 0, body?.scrollHeight || 0);
		if (newHeight > 0) {
			const currentHeight = parseFloat(iframe.style.height) || 0;
			if (Math.abs(currentHeight - newHeight) > 2) iframe.style.height = `${Math.ceil(newHeight)}px`;
		}
	};
	measure();
	const ro = new ResizeObserver(() => measure());
	ro.observe(doc.body);
	ro.observe(doc.documentElement);
	iframe._ro = ro;
}
function htmlToPlainText(html) {
	if (!html) return "";
	const doc = new DOMParser().parseFromString(html, "text/html");
	doc.querySelectorAll("script, style, noscript, head, template").forEach((el) => el.remove());
	const blockTags = new Set([
		"p",
		"div",
		"br",
		"tr",
		"li",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"blockquote",
		"section",
		"article",
		"header",
		"footer",
		"pre",
		"table",
		"ul",
		"ol"
	]);
	let out = "";
	const walk = (node) => {
		for (const child of Array.from(node.childNodes)) if (child.nodeType === Node.TEXT_NODE) out += child.textContent || "";
		else if (child.nodeType === Node.ELEMENT_NODE) {
			const el = child;
			const tag = el.tagName.toLowerCase();
			if (tag === "br") {
				out += "\n";
				continue;
			}
			walk(el);
			if (blockTags.has(tag)) out += "\n";
		}
	};
	if (doc.body) walk(doc.body);
	return out.replace(/\n{3,}/g, "\n\n").trim();
}
function extractSnippet(content, mimeType, fallbackSnippet, clickToExpandText) {
	if (!content) return fallbackSnippet || clickToExpandText;
	let text = content;
	if (mimeType?.toLowerCase() === "text/html" || content.trim().startsWith("<") || /<\/[a-zA-Z]+>/.test(content) || /<[a-zA-Z]+[^>]*>/.test(content)) try {
		const doc = new DOMParser().parseFromString(content, "text/html");
		doc.querySelectorAll("style, script, head").forEach((s) => s.remove());
		const extractText = (node) => {
			if (node.nodeType === Node.TEXT_NODE) return node.textContent || "";
			if (node.nodeType === Node.ELEMENT_NODE) {
				const el = node;
				const tagName = el.tagName.toLowerCase();
				if (tagName === "br") return " ";
				let childText = "";
				for (let i = 0; i < el.childNodes.length; i++) childText += extractText(el.childNodes[i]);
				if ([
					"p",
					"div",
					"td",
					"tr",
					"th",
					"li",
					"h1",
					"h2",
					"h3",
					"h4",
					"h5",
					"h6",
					"section",
					"article",
					"blockquote",
					"ol",
					"ul",
					"header",
					"footer"
				].includes(tagName)) return " " + childText + " ";
				return childText;
			}
			return "";
		};
		text = extractText(doc.body || doc);
	} catch (e) {
		text = content.replace(/<[^>]*>/g, " ");
	}
	else text = content.replace(/[\r\n\t]+/g, " ");
	const trimmedText = text.replace(/\s+/g, " ").trim();
	if (trimmedText) {
		const snippet = trimmedText.substring(0, 100);
		if (trimmedText.length > 100) return snippet + "...";
		return snippet;
	} else if (fallbackSnippet) return fallbackSnippet.replace(/[\r\n\t\s]+/g, " ").trim();
	else return clickToExpandText;
}
//#endregion
//#region src/components/alps-thread-card.ts
var AlpsThreadCard = class AlpsThreadCard extends i {
	static {
		this.styles = i$1`
    :host {
      display: block;
      scroll-margin-top: 32px;
    }

    .thread-card {
      border: 1px solid var(--border-color);
      border-radius: 8px;
      background: var(--bg-primary, #fff);
      overflow: hidden;
      transition: box-shadow 0.2s ease;
    }

    .thread-card:hover {
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }

    .thread-card.expanded {
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }

    .thread-card-header {
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      user-select: none;
      background: var(--bg-primary, #fff);
      transition: background-color 0.2s ease;
    }

    .thread-card-header:hover {
      background: var(--bg-secondary, #fafafa);
    }

    .thread-card.expanded .thread-card-header {
      border-bottom: 1px solid var(--border-color);
      background: var(--bg-primary, #fff);
    }

    .thread-card-summary {
      display: flex;
      align-items: center;
      gap: 12px;
      flex: 1;
      min-width: 0;
    }

    .thread-card-sender {
      font-weight: 600;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 200px;
    }

    .avatar-container {
      position: relative;
      display: inline-flex;
    }

    .bimi-badge {
      position: absolute;
      bottom: -2px;
      right: -2px;
      color: var(--success, #10b981);
      background: var(--bg-primary, #ffffff);
      border-radius: 50%;
      width: 14px;
      height: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 0 1px var(--bg-primary, #ffffff);
    }

    .bimi-badge.bimi-failed-badge {
      color: var(--error, #ef4444);
    }

    .bimi-badge svg {
      width: 12px;
      height: 12px;
      fill: currentColor;
    }

    .thread-card-snippet {
      font-size: 13px;
      color: var(--text-muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
    }

    .thread-card-meta {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .thread-card-date {
      font-size: 12px;
      color: var(--text-muted);
      white-space: nowrap;
    }

    .thread-card-badge {
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 4px;
      background: var(--bg-secondary, #e5e7eb);
      color: var(--text-color, #374151);
      font-weight: 500;
      border: 1px solid var(--border-color);
    }

    .thread-card-body {
      padding: 0;
    }

    .thread-card .reader-meta {
      padding: 12px 16px;
      border-bottom: 1px solid var(--border-color);
      background: var(--bg-primary, #fff);
    }

    .thread-card alps-attachment-list {
      width: auto !important;
      display: block;
      margin: 0;
    }

    .thread-card alps-banner {
      width: auto !important;
      display: block;
    }

    .thread-card.unread {
      border-color: rgba(234, 179, 8, 0.4) !important;
      background: var(--bg-unread, rgba(234, 179, 8, 0.08));
    }

    .thread-card.unread .thread-card-header {
      background: var(--bg-unread, rgba(234, 179, 8, 0.08)) !important;
    }

    .thread-card.unread .thread-card-header:hover {
      background: var(--bg-unread-hover, rgba(234, 179, 8, 0.12)) !important;
    }

    .thread-card-sender.unread {
      font-weight: 700;
    }

    .reader-recipients-block {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .reader-recipients {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
    }

    .reader-recipients-label {
      color: var(--text-muted);
      width: 48px;
      flex-shrink: 0;
    }

    .reader-recipients-list {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      align-items: center;
    }

    .undisclosed-recipients {
      color: var(--text-muted);
      font-style: italic;
    }

    .message-content {
      position: relative;
    }

    .reader-content-wrapper {
      position: relative;
    }

    .reader-iframe {
      width: 100%;
      border: none;
      display: block;
      transition: height 0.1s ease;
      background: transparent;
    }

    .reader-empty-body {
      padding: 32px;
      text-align: center;
      color: var(--text-muted);
      font-style: italic;
      border: 1px dashed var(--border-color);
      border-radius: 8px;
    }

    .reader-text-wrapper {
      border: none;
      border-radius: 0;
      padding: 16px;
      background: transparent;
      overflow-x: auto;
    }

    .reader-preformatted {
      margin: 0;
      white-space: pre-wrap;
      word-wrap: break-word;
      font-family: inherit;
      font-size: 14px;
      line-height: 1.6;
      color: var(--text-primary);
    }

    .dropdown-item {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 8px 16px;
      border: none;
      background: transparent;
      font-size: 14px;
      text-align: left;
      cursor: pointer;
      color: var(--text-primary);
      transition: background-color 0.15s ease;
      box-sizing: border-box;
      gap: 12px;
    }

    .dropdown-item:hover {
      background-color: var(--bg-secondary);
    }

    .dropdown-item .icon {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      color: var(--text-muted);
    }

    .dropdown-divider {
      height: 1px;
      background-color: var(--border-color);
      margin: 4px 0;
    }

    .mobile-only {
      display: none;
    }

    @media (max-width: 768px) {
      .thread-card.expanded .thread-card-date {
        display: none;
      }
      .mobile-only {
        display: flex;
      }
    }
  `;
	}
	onIframeLoad(e) {
		const iframe = e.target;
		setupIframeSizing(iframe, this.settingsStore?.getState()?.themeIframeContent ?? false);
	}
	handleCardHeaderClick() {
		this.dispatchEvent(new CustomEvent("toggle-expansion", {
			detail: { item: this.item },
			bubbles: true,
			composed: true
		}));
	}
	_closePopup() {
		const popups = this.shadowRoot?.querySelectorAll("alps-popup");
		if (popups) popups.forEach((p) => p.close());
	}
	handleStarClick(e) {
		e.stopPropagation();
		this.dispatchEvent(new CustomEvent("toggle-star", {
			detail: { item: this.item },
			bubbles: true,
			composed: true
		}));
	}
	handleActionForItem(action) {
		this._closePopup();
		this.dispatchEvent(new CustomEvent("action-for-item", {
			detail: {
				action,
				item: this.item
			},
			bubbles: true,
			composed: true
		}));
	}
	handleDeleteItem() {
		this._closePopup();
		this.dispatchEvent(new CustomEvent("delete-item", {
			detail: { item: this.item },
			bubbles: true,
			composed: true
		}));
	}
	handleLoadRemoteResources() {
		this.dispatchEvent(new CustomEvent("load-remote-resources", {
			detail: { item: this.item },
			bubbles: true,
			composed: true
		}));
	}
	handleEditDraftClick() {
		this.dispatchEvent(new CustomEvent("edit-draft-for-item", {
			detail: { item: this.item },
			bubbles: true,
			composed: true
		}));
	}
	renderItemContent() {
		if (this.item.loading) return b`
        <div style="padding: 16px; display: flex; justify-content: center; align-items: center;">
          <alps-loader></alps-loader>
        </div>
      `;
		const msg = this.item.message || {};
		const dateFormat = this.settingsStore?.getState()?.dateFormat || "YYYY-MM-DD";
		const hourFormat = String(this.settingsStore?.getState()?.hourFormat || "12");
		const dateStr = msg.Envelope?.Date ? formatFullDate(msg.Envelope.Date, dateFormat, hourFormat) : "";
		return b`
      <div class="reader-meta">
        <div class="reader-recipients-block">
          <div class="reader-recipients">
            <span class="reader-recipients-label">${this.i18nStore?.t("messageReader.to")}</span>
            <div class="reader-recipients-list">
              ${msg.Envelope?.To && msg.Envelope.To.length > 0 ? msg.Envelope.To.map((t) => t.Mailbox && t.Host ? b`<alps-recipient-pill name="${t.Name || ""}" address="${t.Mailbox}@${t.Host}"></alps-recipient-pill>` : "") : b`<span class="undisclosed-recipients">${msg.Flags?.includes("\\Draft") ? this.i18nStore?.t("messageReader.noRecipients") : this.i18nStore?.t("messageReader.undisclosed")}</span>`}
            </div>
          </div>
          ${msg.Envelope?.Cc && msg.Envelope.Cc.length > 0 ? b`
            <div class="reader-recipients">
              <span class="reader-recipients-label">${this.i18nStore?.t("messageReader.cc")}</span>
              <div class="reader-recipients-list">
                ${msg.Envelope.Cc.map((t) => t.Mailbox && t.Host ? b`<alps-recipient-pill name="${t.Name || ""}" address="${t.Mailbox}@${t.Host}"></alps-recipient-pill>` : "")}
              </div>
            </div>
          ` : ""}
          
          <div class="reader-recipients mobile-only" style="margin-top: 4px;">
            <span class="reader-recipients-label">${this.i18nStore?.t("messageReader.date") || "Date:"}</span>
            <div class="reader-recipients-list">
              <span style="color: var(--text-primary);">${dateStr}</span>
            </div>
          </div>
        </div>
      </div>

      ${this.item.attachments && this.item.attachments.length > 0 ? b`
        <alps-attachment-list
          .attachments=${this.item.attachments}
          .mailbox=${this.item.mailbox}
          .messageUid=${msg.UID}
        ></alps-attachment-list>
      ` : ""}

      <div class="message-content">
        ${this.item.activeBanners && this.item.activeBanners.length > 0 ? b`
          ${this.item.activeBanners.map((banner) => banner)}
        ` : ""}
        ${this.item.hasRemoteResources && !this.item.allowRemoteResources ? b`
          <alps-banner style="margin-bottom: 12px;">
            <span>${this.i18nStore?.t("messageReader.remoteContentWarning")}</span>
            <alps-button slot="action" variant="normal" @click=${this.handleLoadRemoteResources}>${this.i18nStore?.t("messageReader.loadRemoteContent")}</alps-button>
          </alps-banner>
        ` : ""}
        ${msg.Flags?.includes("\\Draft") ? b`
          <alps-banner style="margin-bottom: 12px;">
            <span>${this.i18nStore?.t("messageReader.isDraft")}</span>
            <alps-button slot="action" variant="normal" @click=${this.handleEditDraftClick}>${this.i18nStore?.t("messageReader.editDraft")}</alps-button>
          </alps-banner>
        ` : ""}
        
        <div class="reader-content-wrapper">
          ${this.item.mimeType?.toLowerCase() === "text/html" ? b`
            <iframe 
              class="reader-iframe"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin"
              .srcdoc=${l(this.item.content)}
              @load=${this.onIframeLoad}
            ></iframe>
          ` : this.item.mimeType?.toLowerCase().startsWith("multipart/") || !this.item.content ? b`
            <div class="reader-empty-body">
              ${this.i18nStore?.t("messageReader.noReadableText")}
            </div>
          ` : b`
            <div class="reader-text-wrapper">
              <pre class="reader-preformatted">${this.item.content}</pre>
            </div>
          `}
        </div>
      </div>
    `;
	}
	render() {
		const msg = this.item.message || {};
		const sender = msg.Envelope?.From?.[0] || {};
		const senderAddress = sender.Mailbox && sender.Host ? `${sender.Mailbox}@${sender.Host}` : "";
		const senderName = sender.Name || senderAddress || this.i18nStore?.t("messageList.unknownSender");
		const dateFormat = this.settingsStore?.getState()?.dateFormat || "YYYY-MM-DD";
		const hourFormat = String(this.settingsStore?.getState()?.hourFormat || "12");
		const dateStr = msg.Envelope?.Date ? formatFullDate(msg.Envelope.Date, dateFormat, hourFormat) : "";
		const bimiUrl = getBimiAvatarUrl(sender.Host ? sender.Host.toLowerCase() : "");
		const isStarred = msg.Flags?.includes(FLAG_FLAGGED);
		const isUnread = !msg.Flags?.includes(FLAG_SEEN);
		const fallbackSnippet = msg.Snippet || "";
		const clickToExpandText = window.innerWidth <= 768 ? "" : this.i18nStore?.t("messageReader.clickToExpand") || "Click to expand message content";
		const snippet = this.item.expanded ? "" : extractSnippet(this.item.content, this.item.mimeType, fallbackSnippet, clickToExpandText);
		return b`
      <div class="thread-card ${this.item.expanded ? "expanded" : ""} ${isUnread ? "unread" : ""}">
        <div class="thread-card-header" @click=${this.handleCardHeaderClick}>
          <div class="thread-card-summary">
            <div class="avatar-container">
              <alps-avatar .name=${senderName} .email=${senderAddress} .size=${28} .src=${bimiUrl}></alps-avatar>
              ${msg.HasBimiPotential ? b`
                <div class="bimi-badge" title="${this.i18nStore?.t("messageReader.verifiedSender")}">
                  ${renderIcon("verifiedBadge")}
                </div>
              ` : msg.HasBimiFailed ? b`
                <div class="bimi-badge bimi-failed-badge" title="${this.i18nStore?.t("messageReader.unverifiedSender")}">
                  ${renderIcon("authFailedBadge")}
                </div>
              ` : ""}
            </div>
            <div class="thread-card-sender ${isUnread ? "unread" : ""}">${senderName}</div>
            ${!this.item.expanded ? b`<div class="thread-card-snippet">${snippet}</div>` : ""}
          </div>
          <div class="thread-card-meta">
            ${this.item.isSent ? b`<span class="thread-card-badge">${this.i18nStore?.t("folderList.sent") || "Sent"}</span>` : ""}
            ${this.item.mailbox !== this.mailbox && !this.item.isSent ? b`<span class="thread-card-badge">${this.item.mailbox}</span>` : ""}
            <div class="thread-card-date">${dateStr}</div>
            
            <alps-icon-btn
              style="--icon-size: 16px; --btn-padding: 4px;"
              title=${this.i18nStore?.t("messageReader.star") || "Star"}
              ?active=${isStarred}
              @click=${this.handleStarClick}
              icon=${isStarred ? "starFourFill" : "starFour"}
            ></alps-icon-btn>
            
            ${this.item.expanded ? b`
              <alps-icon-btn
                style="--icon-size: 16px; --btn-padding: 4px;"
                title=${this.i18nStore?.t("messageReader.reply") || "Reply"}
                @click=${(e) => {
			e.stopPropagation();
			this.handleActionForItem("reply");
		}}
                icon="arrowBendUpLeft"
              ></alps-icon-btn>
              
              <alps-popup align="right" class="card-more-menu" @click=${(e) => e.stopPropagation()}>
                <alps-icon-btn
                  slot="trigger"
                  style="--icon-size: 16px; --btn-padding: 4px;"
                  title=${this.i18nStore?.t("messageReader.moreOptions")}
                  icon="dotsThreeVertical"
                ></alps-icon-btn>
                <button class="dropdown-item" @click=${() => this.handleActionForItem("reply")}>
                  ${renderIcon("arrowBendUpLeft")} <span class="item-text">${this.i18nStore?.t("messageReader.reply")}</span>
                </button>
                <button class="dropdown-item" @click=${() => this.handleActionForItem("replyAll")}>
                  ${renderIcon("arrowBendDoubleUpLeft")} <span class="item-text">${this.i18nStore?.t("messageReader.replyAll")}</span>
                </button>
                <button class="dropdown-item" @click=${() => this.handleActionForItem("forward")}>
                  ${renderIcon("arrowBendUpRight")} <span class="item-text">${this.i18nStore?.t("messageReader.forward")}</span>
                </button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" @click=${() => this.handleActionForItem("print")}>
                  ${renderIcon("printer")} <span class="item-text">${this.i18nStore?.t("messageReader.print")}</span>
                </button>
                <button class="dropdown-item" @click=${() => this.handleDeleteItem()}>
                  ${renderIcon("trash")} <span class="item-text">${this.i18nStore?.t("messageReader.delete")}</span>
                </button>
              </alps-popup>
            ` : ""}
            
            <alps-icon-btn
              style="--icon-size: 16px; --btn-padding: 4px;"
              icon=${this.item.expanded ? "caretUp" : "caretDown"}
              title=${this.item.expanded ? "Collapse" : "Expand"}
            ></alps-icon-btn>
          </div>
        </div>
        
        ${this.item.expanded ? b`
          <div class="thread-card-body">
            ${this.renderItemContent()}
          </div>
        ` : ""}
      </div>
    `;
	}
};
__decorate([c({ context: settingsContext })], AlpsThreadCard.prototype, "settingsStore", void 0);
__decorate([c({ context: i18nContext })], AlpsThreadCard.prototype, "i18nStore", void 0);
__decorate([c({ context: composeContext })], AlpsThreadCard.prototype, "composeStore", void 0);
__decorate([n$1({ type: Object })], AlpsThreadCard.prototype, "item", void 0);
__decorate([n$1({ type: String })], AlpsThreadCard.prototype, "mailbox", void 0);
AlpsThreadCard = __decorate([t("alps-thread-card")], AlpsThreadCard);
//#endregion
//#region src/components/message-reader.ts
var MessageReader = class MessageReader extends i {
	constructor(..._args) {
		super(..._args);
		this.localPreferredView = null;
		this.hasHtml = false;
		this.hasText = false;
		this.mailbox = FOLDER_INBOX;
		this.message = null;
		this.messages = [];
		this.selectedUids = /* @__PURE__ */ new Set();
		this.allSelectedStarred = false;
		this.allSelectedUnread = false;
		this.commonTags = [];
		this.bulkProcessing = false;
		this.layoutMode = "vertical";
		this.mailboxes = [];
		this.content = "";
		this.mimeType = "";
		this.loading = false;
		this.activeBanners = [];
		this.attachments = [];
		this.allowRemoteResources = false;
		this.hasRemoteResources = false;
		this.rawMessageHtml = "";
		this.isScrolled = false;
		this.threadItems = [];
		this._isThread = false;
		this._deferPropertySync = false;
		this._handleExternalFlagsChanged = (e) => {
			const customE = e;
			if (!customE.detail) return;
			const { uids, flag, action } = customE.detail;
			if (!this.threadItems || this.threadItems.length === 0) return;
			let updated = false;
			for (let i = 0; i < this.threadItems.length; i++) {
				const item = this.threadItems[i];
				if (item.message && uids.includes(String(item.message.UID))) {
					const oldFlags = item.message.Flags || [];
					const hasFlag = oldFlags.includes(flag);
					if (action === "add" && !hasFlag) {
						this.threadItems[i] = {
							...item,
							message: {
								...item.message,
								Flags: [...oldFlags, flag]
							}
						};
						updated = true;
					} else if (action === "remove" && hasFlag) {
						this.threadItems[i] = {
							...item,
							message: {
								...item.message,
								Flags: oldFlags.filter((f) => f !== flag)
							}
						};
						updated = true;
					}
				}
			}
			if (updated) {
				this.threadItems = [...this.threadItems];
				this.requestUpdate();
				if (this.message && uids.includes(String(this.message.UID))) {
					const hasFlag = this.message.Flags?.includes(flag);
					if (action === "add" && !hasFlag) this.message.Flags = [...this.message.Flags || [], flag];
					else if (action === "remove" && hasFlag) this.message.Flags = this.message.Flags.filter((f) => f !== flag);
					this.message = { ...this.message };
				}
			}
		};
		this._handleSettingsChange = () => {
			this.applyThemeToAllIframes();
		};
		this.handleScroll = (e) => {
			const target = e.target;
			this.isScrolled = target.scrollTop > 0;
		};
	}
	/**
	* Closes the "More" actions popup menu if it is currently open.
	*/
	_closePopup() {
		const popups = this.shadowRoot?.querySelectorAll("alps-popup");
		if (popups) popups.forEach((p) => p.close());
	}
	/**
	* Handles user actions triggered from the toolbar or menus.
	* For compose actions (reply/forward), it gathers the message body and metadata,
	* generates a quoted reply block, and opens the composer.
	* 
	* @param action The specific action to perform (e.g., 'reply', 'archive', 'showPlaintext').
	* @param folder Optional folder name, used when moving a message to a specific folder.
	*/
	async _handleAction(action, folder) {
		if (action === "reply" || action === "replyAll" || action === "forward") {
			if (!this.message) return;
			this._closePopup();
			let textBody = "";
			if (this.mimeType === "text/plain") textBody = this.content;
			else {
				try {
					const textRes = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(this.mailbox)}/messages/${this.message.UID}?view=text`);
					if (textRes.ok) {
						const textData = await textRes.json();
						if (textData.Part && textData.RawText) textBody = textData.RawText;
					}
				} catch (e) {
					Logger.error("Failed to fetch text body for quote", e);
				}
				if (!textBody && this.rawMessageHtml) textBody = htmlToPlainText(this.rawMessageHtml);
			}
			const dateFormat = this.settingsStore?.getState()?.dateFormat || "YYYY-MM-DD";
			const hourFormat = String(this.settingsStore?.getState()?.hourFormat || "12");
			const { subject, to, cc, quotedText, quotedHtml } = generateQuote(action, this.message, textBody, this.rawMessageHtml, this.hasHtml, dateFormat, hourFormat);
			const attachments = action === "forward" ? this.attachments.map((a) => ({
				name: a.Filename || "attachment",
				size: a.Size || 0,
				type: a.MIMEType || "application/octet-stream",
				partPath: a.Path ? a.Path.join(".") : void 0
			})) : [];
			const inReplyTo = action === "reply" || action === "replyAll" ? this.message.Envelope?.MessageID || this.message.Envelope?.MessageId : void 0;
			this.composeStore.openComposer({
				subject,
				to,
				cc,
				text: quotedText,
				html: quotedHtml,
				format: this.settingsStore?.getState()?.composeFormat || "html",
				attachments,
				inReplyTo
			});
			return;
		}
		if (action === "showPlaintext") {
			this.localPreferredView = "text";
			if (this.message) this.fetchMessageBody(this.message);
			this._closePopup();
			return;
		}
		if (action === "showHtml") {
			this.localPreferredView = "html";
			if (this.message) this.fetchMessageBody(this.message);
			this._closePopup();
			return;
		}
		if (action === "print") {
			const remoteParam = this.allowRemoteResources ? "&remote=1" : "";
			window.open("#/print?mailbox=" + encodeURIComponent(this.mailbox) + "&uid=" + this.message.UID + remoteParam, "_blank");
			this._closePopup();
			return;
		}
		this._closePopup();
		this.dispatchEvent(new CustomEvent("action", { detail: {
			action,
			folder
		} }));
	}
	_handleTag(tag) {
		this._closePopup();
		const hasTag = this.selectedUids.size > 1 && !this.message ? this.commonTags?.some((f) => f.toLowerCase() === tag.toLowerCase()) : this.message?.Flags?.some((f) => f.toLowerCase() === tag.toLowerCase());
		this.dispatchEvent(new CustomEvent("action", { detail: {
			action: hasTag ? "removeTag" : "addTag",
			folder: tag
		} }));
	}
	_handleRemoveAllTags() {
		this._closePopup();
		const isBulk = this.selectedUids.size > 1 && !this.message;
		let tags;
		if (isBulk) {
			const set = /* @__PURE__ */ new Set();
			for (const m of this.messages) if (this.selectedUids.has(String(m.UID))) for (const t of getRemovableTags(m.Flags)) set.add(t);
			tags = [...set];
		} else tags = getRemovableTags(this.message?.Flags);
		if (tags.length === 0) return;
		this.dispatchEvent(new CustomEvent("action", { detail: {
			action: "removeTag",
			tags
		} }));
	}
	connectedCallback() {
		super.connectedCallback();
		window.addEventListener("external-message-flags-changed", this._handleExternalFlagsChanged);
		this.updateComplete.then(() => {
			this.settingsStore?.addEventListener("change", this._handleSettingsChange);
		});
	}
	disconnectedCallback() {
		this.settingsStore?.removeEventListener("change", this._handleSettingsChange);
		window.removeEventListener("external-message-flags-changed", this._handleExternalFlagsChanged);
		super.disconnectedCallback();
	}
	static {
		this.styles = [popupStyles, i$1`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .tags-popup .dropdown-item.active svg {
      margin-left: auto;
      color: var(--text-secondary, #9ca3af);
    }

    .toolbar {
      padding: 0 16px;
      gap: 12px;
      background: var(--bg-primary, #fff);
    }

    .desktop-attachments {
      display: block;
    }

    .mobile-attachments {
      display: none;
    }

    .toolbar-spacer {
      flex: 1;
    }

    .folder-selector {
      display: block;
      width: 100%;
    }

    .reader-header {
      padding: 16px;
      border-bottom: 1px solid var(--border-color);
    }

    .reader-subject {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
      display: flow-root;
      word-break: break-word;
    }

    .tag-pills {
      float: right;
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-left: 12px;
      margin-bottom: 4px;
    }

    .reader-meta {
      display: flex;
      flex-direction: column;
    }

    .reader-meta-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 14px;
      flex-shrink: 0;
    }

    .reader-sender-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    .reader-sender-left {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .avatar-container {
      position: relative;
      display: inline-flex;
    }

    .bimi-badge {
      position: absolute;
      bottom: -2px;
      right: -2px;
      color: var(--success, #10b981);
      background: var(--bg-primary, #ffffff);
      border-radius: 50%;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 0 1px var(--bg-primary, #ffffff);
    }

    .bimi-badge.bimi-failed-badge {
      color: var(--error, #ef4444);
    }

    .bimi-badge svg {
      width: 16px;
      height: 16px;
    }

    .reader-sender-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .reader-sender-name {
      font-weight: 600;
      font-size: 14px;
      line-height: 1.2;
    }

    .reader-recipients-block {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .reader-recipients {
      display: flex;
      align-items: baseline;
    }

    .reader-recipients-label {
      font-size: 14px;
      font-weight: 600;
      color: var(--text-color);
      width: 40px;
      text-align: right;
      margin-right: 16px;
      line-height: 1.5;
      flex-shrink: 0;
    }

    .reader-recipients-list {
      line-height: 1.5;
      font-size: 14px;
      flex: 1;
      min-width: 0;
    }

    alps-recipient-pill:not(:last-child)::after {
      content: ", ";
      color: var(--text-color);
      white-space: pre;
    }

    .reader-date {
      font-size: 13px;
      color: var(--text-muted);
    }

    .desktop-date-container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 4px;
    }

    .reader-size {
      font-size: 11px;
      color: var(--text-muted);
      white-space: nowrap;
    }

    .mobile-date-container {
      display: none;
    }

    .icon {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .spinner {
      animation: spin 3s linear infinite;
      display: flex;
      margin-right: 8px;
    }

    .spinner .icon {
      width: 32px;
      height: 32px;
    }

    .empty-reader-state {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
    }

    .bulk-spinner-container {
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 8px;
    }

    .spinner.bulk-spinner {
      margin: 0;
    }

    .toolbar-separator {
      width: 1px;
      height: 20px;
      background: var(--border-color);
      margin: 0 8px;
    }

    .mobile-spacer {
      display: none;
    }

    .mobile-only {
      display: none;
    }

    .undisclosed-recipients {
      color: var(--text-muted);
      font-size: 14px;
      margin-top: 4px;
    }

    .reader-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: auto;
      min-height: 0;
    }

    .loading-overlay {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    .loading-state {
      display: flex;
      align-items: center;
      color: var(--text-muted);
    }

    .reader-content-wrapper {
      flex: 1;
      min-height: 0;
    }

    .reader-iframe {
      width: 100%;
      min-height: 100%;
      border: none;
      display: block;
    }

    .reader-empty-body {
      padding: 24px;
      color: var(--text-muted);
      font-style: italic;
      text-align: center;
    }

    .reader-text-wrapper {
      padding: 24px;
    }

    .reader-preformatted {
      white-space: pre-wrap;
      font-family: inherit;
      margin: 0;
      color: inherit;
    }

    @media (max-width: 768px) {
      .desktop-only {
        display: none !important;
      }

      .desktop-spacer {
        display: none !important;
      }

      .mobile-spacer {
        flex: 1;
        display: block;
      }

      .toolbar-separator.mobile-only {
        display: block;
      }

      .reader-recipients.mobile-only {
        display: flex;
      }

      .desktop-attachments {
        display: none;
      }

      .mobile-attachments {
        display: block;
        flex-shrink: 0;
      }

      .reader-header {
        padding: 16px;
      }

      .reader-text-wrapper {
        padding: 16px;
      }

      .desktop-date {
        display: none;
      }

      .mobile-date-container {
        display: flex;
        flex-direction: column;
        margin-top: 4px;
      }

      .mobile-date {
        display: block;
        font-weight: normal;
        font-size: 13px;
        line-height: 1.2;
      }

      .mobile-size {
        font-size: 11px;
        color: var(--text-muted);
        line-height: 1.2;
        margin-top: 2px;
        font-weight: normal;
      }
    }

    .thread-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 16px;
    }

    .reader-header.thread-header-grouped {
      border-bottom: none;
      padding-bottom: 0;
    }
  `];
	}
	/**
	* Lifecycle method called by Lit before the component updates.
	* Intercepts changes to the 'message' or 'mailbox' properties to determine if the local state
	* (like view preferences) should be reset and the message body re-fetched from the backend.
	* 
	* @param changedProperties Map of properties that changed and their previous values.
	*/
	updated(changedProperties) {
		if (changedProperties.has("message") && this.message) setTimeout(() => {
			const cardId = `thread-card-${this.message?.UID}`;
			const el = this.shadowRoot?.getElementById(cardId);
			if (el) el.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}, 50);
	}
	willUpdate(changedProperties) {
		const messageChanged = changedProperties.has("message");
		const mailboxChanged = changedProperties.has("mailbox");
		const messagesListChanged = changedProperties.has("messages");
		if (messageChanged || mailboxChanged) {
			const oldMessage = changedProperties.get("message");
			const oldMailbox = changedProperties.has("mailbox") ? changedProperties.get("mailbox") : this.mailbox;
			if (!this.message) {
				this.localPreferredView = null;
				this.content = "";
				this.mimeType = "";
				this.rawMessageHtml = "";
				this.loading = false;
				this.allowRemoteResources = false;
				this.hasRemoteResources = false;
				this.hasHtml = false;
				this.hasText = false;
				this.activeBanners = [];
				this.threadItems = [];
			} else if (!oldMessage || oldMessage.UID !== this.message.UID || oldMailbox !== this.mailbox) {
				this.localPreferredView = null;
				this.fetchMessageBody(this.message, this.message._isAutosaveUpdate);
			} else {
				if (oldMessage) {
					if (oldMessage.HasBimiPotential && !this.message.HasBimiPotential) this.message = {
						...this.message,
						HasBimiPotential: true
					};
					if (oldMessage.HasBimiFailed && !this.message.HasBimiFailed) this.message = {
						...this.message,
						HasBimiFailed: true
					};
				}
				this.resolveThread(this.message);
				if (this.message._isAutosaveUpdate && oldMessage && this.message !== oldMessage) this.fetchMessageBody(this.message, true);
			}
		} else if (messagesListChanged && this.message) this.resolveThread(this.message);
	}
	/**
	* Allows the loading of remote resources (such as tracking pixels or external images)
	* for the currently viewed message. Re-sanitizes the raw HTML with the restriction lifted.
	*/
	loadRemoteResources() {
		this.allowRemoteResources = true;
		if (this.rawMessageHtml) this.content = sanitizeMessageHTML(this.rawMessageHtml, {
			mailbox: this.mailbox,
			messageUid: this.message?.UID,
			allowRemoteResources: this.allowRemoteResources,
			messageStructure: this.message?.BodyStructure,
			onRemoteResourceBlocked: () => {
				this.hasRemoteResources = true;
			}
		});
	}
	resolveThread(msg) {
		if (!msg) return;
		const enableThreading = this.settingsStore?.getState()?.enableThreading ?? true;
		let threadMessages = [];
		let rootMsg = null;
		if (enableThreading && this.messages && this.messages.length > 0) {
			const found = this.messages.find((m) => String(m.UID) === String(msg.UID));
			if (found) rootMsg = found;
			else for (const m of this.messages) if (m.SubMessages && m.SubMessages.find((s) => String(s.UID) === String(msg.UID))) {
				rootMsg = m;
				break;
			}
		}
		if (rootMsg) {
			threadMessages = [rootMsg, ...rootMsg.SubMessages || []];
			threadMessages.sort((a, b) => {
				return (a.Envelope?.Date ? new Date(a.Envelope.Date).getTime() : 0) - (b.Envelope?.Date ? new Date(b.Envelope.Date).getTime() : 0);
			});
		} else threadMessages = [msg];
		this._isThread = enableThreading && threadMessages.length > 1;
		const sentMailbox = this.getSentMailboxName();
		const oldItems = this.threadItems || [];
		this.threadItems = threadMessages.map((m) => {
			const isCurrent = String(m.UID) === String(msg.UID);
			const existing = oldItems.find((item) => String(item.message?.UID) === String(m.UID));
			if (existing) {
				const mergedMessage = {
					...m,
					Flags: m.Flags || existing.message.Flags || []
				};
				if (existing.message.HasBimiPotential) mergedMessage.HasBimiPotential = true;
				if (existing.message.HasBimiFailed) mergedMessage.HasBimiFailed = true;
				return {
					...existing,
					message: mergedMessage
				};
			}
			return {
				message: m,
				content: "",
				mimeType: "",
				loading: false,
				attachments: [],
				rawMessageHtml: "",
				hasHtml: false,
				hasText: false,
				activeBanners: [],
				allowRemoteResources: this.allowRemoteResources,
				hasRemoteResources: false,
				isSent: (this.mailbox || "").toLowerCase() === sentMailbox.toLowerCase() || (m.Mailbox || "").toLowerCase() === sentMailbox.toLowerCase(),
				mailbox: m.Mailbox || this.mailbox,
				expanded: isCurrent
			};
		});
	}
	async fetchMessageBody(msg, silent = false) {
		if (msg) msg._isAutosaveUpdate = false;
		if (this.message) this.message._isAutosaveUpdate = false;
		if (!silent) {
			this.content = "";
			this.mimeType = "";
			this.rawMessageHtml = "";
			this.loading = true;
			this.activeBanners = [];
			this.allowRemoteResources = this.settingsStore?.getState().showRemoteContent === "always";
			this.hasRemoteResources = false;
			this.threadItems = [];
		}
		this.resolveThread(msg);
		const primaryItem = this.threadItems.find((item) => String(item.message?.UID) === String(msg.UID)) || this.threadItems[0];
		if (primaryItem) {
			primaryItem.loading = !silent;
			primaryItem.expanded = true;
			this._deferPropertySync = false;
			this.fetchItemBody(primaryItem).then(() => {
				if (this.message?.UID !== msg.UID || this.mailbox !== msg.Mailbox) return;
				this.requestUpdate();
			});
		}
	}
	updateThreadItemReference(item) {
		if (!item.message) return;
		const idx = this.threadItems.findIndex((i) => String(i.message?.UID) === String(item.message?.UID));
		if (idx !== -1) {
			this.threadItems[idx] = { ...item };
			this.threadItems = [...this.threadItems];
		}
	}
	async fetchItemBody(item) {
		if (!item.message) return;
		const msg = item.message;
		const mailbox = item.mailbox;
		const preferredView = this.localPreferredView || this.settingsStore?.getState()?.preferredView || "html";
		try {
			const cached = MessageCache.get(mailbox, msg.UID.toString(), preferredView);
			if (cached) {
				item.attachments = cached.Attachments || [];
				item.hasHtml = cached.HasHTML || false;
				item.hasText = cached.HasText || false;
				if (cached.Message) item.message = {
					...msg,
					...cached.Message
				};
				if (cached.Part) {
					item.mimeType = cached.Part.MIMEType || cached.Part.MimeType || "text/plain";
					if (cached.RawHtml === void 0) {
						if (cached.RawText !== void 0) {
							item.content = cached.RawText;
							const payload = {
								content: item.content,
								isHtml: false,
								message: item.message,
								banners: [],
								i18nStore: this.i18nStore
							};
							const hookResults = await registry.invokeHookAsync("reader:content", payload);
							for (const res of hookResults) if (res && typeof res === "string") item.content = res;
							item.activeBanners = payload.banners || [];
							if (payload.isHtml) {
								item.mimeType = "text/html";
								item.hasHtml = true;
								item.content = sanitizeMessageHTML(item.content, {
									mailbox,
									messageUid: item.message?.UID,
									allowRemoteResources: item.allowRemoteResources,
									messageStructure: item.message?.BodyStructure,
									onRemoteResourceBlocked: () => {
										item.hasRemoteResources = true;
										if (String(item.message.UID) === String(this.message?.UID)) this.hasRemoteResources = true;
									}
								});
							}
						}
					} else {
						item.rawMessageHtml = cached.RawHtml;
						const payload = {
							content: item.rawMessageHtml,
							isHtml: true,
							message: item.message,
							banners: [],
							i18nStore: this.i18nStore
						};
						const hookResults = await registry.invokeHookAsync("reader:content", payload);
						for (const res of hookResults) if (res && typeof res === "string") item.rawMessageHtml = res;
						item.activeBanners = payload.banners || [];
						item.content = sanitizeMessageHTML(item.rawMessageHtml, {
							mailbox,
							messageUid: item.message?.UID,
							allowRemoteResources: item.allowRemoteResources,
							messageStructure: item.message?.BodyStructure,
							onRemoteResourceBlocked: () => {
								item.hasRemoteResources = true;
								if (String(item.message.UID) === String(this.message?.UID)) this.hasRemoteResources = true;
							}
						});
					}
				}
				item.loading = false;
				if (!this._deferPropertySync && String(item.message.UID) === String(this.message?.UID)) {
					this.content = item.content;
					this.mimeType = item.mimeType;
					this.rawMessageHtml = item.rawMessageHtml;
					this.attachments = item.attachments;
					this.hasHtml = item.hasHtml;
					this.hasText = item.hasText;
					this.activeBanners = item.activeBanners;
					this.allowRemoteResources = item.allowRemoteResources;
					this.hasRemoteResources = item.hasRemoteResources;
					this.loading = false;
					this.message = {
						...this.message,
						...item.message
					};
				}
				this.updateThreadItemReference(item);
				return;
			}
			const metadataRes = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(mailbox)}/messages/${msg.UID}?view=${preferredView}`);
			if (metadataRes.status === 401) {
				window.location.hash = "/login";
				return;
			}
			if (!metadataRes.ok) throw new Error("Failed to fetch metadata");
			const data = await metadataRes.json();
			item.attachments = data.Attachments || [];
			item.hasHtml = !!data.HasHTML;
			item.hasText = !!data.HasText;
			if (data.Message) item.message = {
				...item.message,
				...data.Message
			};
			let rawHtml;
			let rawText;
			const part = data.Part;
			if (part) {
				item.mimeType = part.MIMEType || part.MimeType || "text/plain";
				const partPathStr = Array.isArray(part.Path) ? part.Path.join(".") : part.Path;
				const rawRes = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(mailbox)}/messages/${msg.UID}/raw?part=${partPathStr}`);
				if (rawRes.status === 401) {
					window.location.hash = "/login";
					return;
				}
				if (rawRes.ok) if (item.mimeType.toLowerCase() === "text/html") {
					rawHtml = await rawRes.text();
					item.rawMessageHtml = rawHtml;
					const payload = {
						content: item.rawMessageHtml,
						isHtml: true,
						message: item.message,
						banners: [],
						i18nStore: this.i18nStore
					};
					const hookResults = await registry.invokeHookAsync("reader:content", payload);
					for (const res of hookResults) if (res && typeof res === "string") item.rawMessageHtml = res;
					item.activeBanners = payload.banners || [];
					item.content = sanitizeMessageHTML(item.rawMessageHtml, {
						mailbox,
						messageUid: item.message?.UID,
						allowRemoteResources: item.allowRemoteResources,
						messageStructure: item.message?.BodyStructure,
						onRemoteResourceBlocked: () => {
							item.hasRemoteResources = true;
							if (String(item.message.UID) === String(this.message?.UID)) this.hasRemoteResources = true;
						}
					});
				} else {
					rawText = await rawRes.text();
					item.content = rawText;
					const payload = {
						content: item.content,
						isHtml: false,
						message: item.message,
						banners: [],
						i18nStore: this.i18nStore
					};
					const hookResults = await registry.invokeHookAsync("reader:content", payload);
					for (const res of hookResults) if (res && typeof res === "string") item.content = res;
					item.activeBanners = payload.banners || [];
					if (payload.isHtml) {
						item.mimeType = "text/html";
						item.hasHtml = true;
						item.content = sanitizeMessageHTML(item.content, {
							mailbox,
							messageUid: item.message?.UID,
							allowRemoteResources: item.allowRemoteResources,
							messageStructure: item.message?.BodyStructure,
							onRemoteResourceBlocked: () => {
								item.hasRemoteResources = true;
								if (String(item.message.UID) === String(this.message?.UID)) this.hasRemoteResources = true;
							}
						});
					}
				}
			}
			MessageCache.set(mailbox, msg.UID.toString(), preferredView, {
				Message: data.Message,
				Part: data.Part,
				Attachments: data.Attachments,
				RawHtml: rawHtml,
				RawText: rawText,
				HasHTML: item.hasHtml,
				HasText: item.hasText
			});
		} catch (e) {
			Logger.error("Failed to fetch message:", e);
			item.content = "Error loading message.";
		} finally {
			item.loading = false;
			if (!this._deferPropertySync && String(item.message.UID) === String(this.message?.UID)) {
				this.content = item.content;
				this.mimeType = item.mimeType;
				this.rawMessageHtml = item.rawMessageHtml;
				this.attachments = item.attachments;
				this.hasHtml = item.hasHtml;
				this.hasText = item.hasText;
				this.activeBanners = item.activeBanners;
				this.allowRemoteResources = item.allowRemoteResources;
				this.hasRemoteResources = item.hasRemoteResources;
				this.loading = false;
				this.message = {
					...this.message,
					...item.message
				};
			}
			this.updateThreadItemReference(item);
		}
	}
	getSentMailboxName() {
		if (this.mailboxes && Array.isArray(this.mailboxes)) {
			for (const mb of this.mailboxes) {
				const name = mb.Name || mb.Mailbox;
				if (!name) continue;
				if ((mb.Attrs || []).some((a) => typeof a === "string" && (a.toLowerCase() === "\\sent" || a.toLowerCase() === "\\\\sent"))) return name;
			}
			const sentNames = [
				"sent",
				"sent messages",
				"sent items",
				"sent-mail"
			];
			for (const mb of this.mailboxes) {
				const name = mb.Name || mb.Mailbox;
				if (!name) continue;
				if (sentNames.includes(name.toLowerCase())) return name;
			}
		}
		return FOLDER_SENT;
	}
	async toggleItemExpansion(item) {
		item.expanded = !item.expanded;
		this.updateThreadItemReference(item);
		if (item.expanded && !item.content && !item.loading) {
			item.loading = true;
			this.updateThreadItemReference(item);
			await this.fetchItemBody(item);
		}
	}
	loadRemoteResourcesForItem(item) {
		item.allowRemoteResources = true;
		if (item.rawMessageHtml) {
			item.content = sanitizeMessageHTML(item.rawMessageHtml, {
				mailbox: item.mailbox,
				messageUid: item.message?.UID,
				allowRemoteResources: item.allowRemoteResources,
				messageStructure: item.message?.BodyStructure,
				onRemoteResourceBlocked: () => {
					item.hasRemoteResources = true;
				}
			});
			if (item === this.threadItems[0]) {
				this.content = item.content;
				this.allowRemoteResources = true;
			}
			this.updateThreadItemReference(item);
		}
	}
	async toggleItemStar(item) {
		if (!item.message) return;
		const isStarred = item.message.Flags?.includes(FLAG_FLAGGED);
		const op = isStarred ? "remove" : "add";
		if (isStarred) item.message.Flags = item.message.Flags.filter((f) => f !== FLAG_FLAGGED);
		else item.message.Flags = [...item.message.Flags || [], FLAG_FLAGGED];
		this.updateThreadItemReference(item);
		this.dispatchEvent(new CustomEvent("message-flags-changed", {
			detail: {
				uid: String(item.message.UID),
				flag: FLAG_FLAGGED,
				action: op
			},
			bubbles: true,
			composed: true
		}));
		try {
			if (!await messageOperations.setFlag(item.mailbox, [String(item.message.UID)], ["\\Flagged"], op)) {
				if (isStarred) item.message.Flags = [...item.message.Flags || [], FLAG_FLAGGED];
				else item.message.Flags = item.message.Flags.filter((f) => f !== FLAG_FLAGGED);
				this.updateThreadItemReference(item);
				this.dispatchEvent(new CustomEvent("message-flags-changed", {
					detail: {
						uid: String(item.message.UID),
						flag: FLAG_FLAGGED,
						action: isStarred ? "add" : "remove"
					},
					bubbles: true,
					composed: true
				}));
			} else if (String(item.message.UID) === String(this.message?.UID)) {
				this.message.Flags = item.message.Flags;
				this.requestUpdate();
			}
		} catch (err) {
			Logger.error("Failed to toggle star for thread item", err);
			if (isStarred) item.message.Flags = [...item.message.Flags || [], FLAG_FLAGGED];
			else item.message.Flags = item.message.Flags.filter((f) => f !== FLAG_FLAGGED);
			this.updateThreadItemReference(item);
			this.dispatchEvent(new CustomEvent("message-flags-changed", {
				detail: {
					uid: String(item.message.UID),
					flag: FLAG_FLAGGED,
					action: isStarred ? "add" : "remove"
				},
				bubbles: true,
				composed: true
			}));
		}
	}
	async deleteItem(item) {
		if (!item.message) return;
		if (!confirm(this.i18nStore?.t("messageReader.deleteConfirmSingle") || "Are you sure you want to permanently delete this message?")) return;
		try {
			if (await messageOperations.deleteMessages(item.mailbox, [String(item.message.UID)])) {
				const uidStr = String(item.message.UID);
				const isFirst = this.threadItems.length > 0 && String(this.threadItems[0].message?.UID) === uidStr;
				this.threadItems = this.threadItems.filter((i) => String(i.message?.UID) !== uidStr);
				this.requestUpdate();
				if (isFirst) this.dispatchEvent(new CustomEvent("action", { detail: { action: "delete" } }));
			}
		} catch (err) {
			Logger.error("Failed to delete thread item", err);
		}
	}
	async _handleActionForItem(action, item) {
		if (action === "reply" || action === "replyAll" || action === "forward") {
			let textBody = "";
			if (item.mimeType === "text/plain") textBody = item.content;
			else {
				try {
					const textRes = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(item.mailbox)}/messages/${item.message.UID}?view=text`);
					if (textRes.ok) {
						const textData = await textRes.json();
						if (textData.Part && textData.RawText) textBody = textData.RawText;
					}
				} catch (e) {
					Logger.error("Failed to fetch text body for quote", e);
				}
				if (!textBody && item.rawMessageHtml) textBody = htmlToPlainText(item.rawMessageHtml);
			}
			const dateFormat = this.settingsStore?.getState()?.dateFormat || "YYYY-MM-DD";
			const hourFormat = String(this.settingsStore?.getState()?.hourFormat || "12");
			const { subject, to, cc, quotedText, quotedHtml } = generateQuote(action, item.message, textBody, item.rawMessageHtml, item.hasHtml, dateFormat, hourFormat);
			const attachments = action === "forward" ? item.attachments.map((a) => ({
				name: a.Filename || "attachment",
				size: a.Size || 0,
				type: a.MIMEType || "application/octet-stream",
				partPath: a.Path ? a.Path.join(".") : void 0
			})) : [];
			const inReplyTo = action === "reply" || action === "replyAll" ? item.message.Envelope?.MessageID || item.message.Envelope?.MessageId : void 0;
			this.composeStore.openComposer({
				subject,
				to,
				cc,
				text: quotedText,
				html: quotedHtml,
				format: this.settingsStore?.getState()?.composeFormat || "html",
				attachments,
				inReplyTo
			});
			return;
		}
		if (action === "showPlaintext") {
			this.localPreferredView = "text";
			this.fetchItemBody(item);
			return;
		}
		if (action === "showHtml") {
			this.localPreferredView = "html";
			this.fetchItemBody(item);
			return;
		}
		if (action === "print") {
			const remoteParam = item.allowRemoteResources ? "&remote=1" : "";
			window.open("#/print?mailbox=" + encodeURIComponent(item.mailbox) + "&uid=" + item.message.UID + remoteParam, "_blank");
			return;
		}
	}
	applyThemeToIframe(iframe) {
		applyThemeToIframe(iframe, this.settingsStore?.getState()?.themeIframeContent ?? false);
	}
	applyThemeToAllIframes() {
		const iframes = this.shadowRoot?.querySelectorAll("iframe.reader-iframe");
		if (iframes) iframes.forEach((iframe) => this.applyThemeToIframe(iframe));
	}
	/**
	* Handles the load event of the message content iframe.
	* Injects a ResizeObserver into the iframe's document body to dynamically adjust
	* the iframe's height to match its content, avoiding nested scrollbars.
	* 
	* @param e The load event from the iframe.
	*/
	onIframeLoad(e) {
		const iframe = e.target;
		setupIframeSizing(iframe, this.settingsStore?.getState()?.themeIframeContent ?? false);
	}
	/**
	* Prepares the current message to be edited as a draft.
	* Gathers the draft's content, recipients, and attachments, then opens the composer pre-filled with this data.
	*/
	async _handleEditDraft(item) {
		const isItem = item && !(item instanceof Event);
		const msg = isItem ? item.message : this.message;
		const mailbox = isItem ? item.mailbox : this.mailbox;
		if (!msg) return;
		if (isItem && item && !item.content && !item.loading) {
			item.loading = true;
			this.updateThreadItemReference(item);
			await this.fetchItemBody(item);
		}
		const content = isItem && item ? item.content : this.content;
		const mimeType = isItem && item ? item.mimeType : this.mimeType;
		const rawMessageHtml = isItem && item ? item.rawMessageHtml : this.rawMessageHtml;
		const itemAttachments = isItem && item ? item.attachments : this.attachments;
		let textBody = "";
		if (mimeType === "text/plain") textBody = content;
		else {
			try {
				const textRes = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(mailbox)}/messages/${msg.UID}?view=text`);
				if (textRes.ok) {
					const textData = await textRes.json();
					if (textData.Part && textData.RawText) textBody = textData.RawText;
				}
			} catch (e) {
				Logger.error("Failed to fetch text body for draft", e);
			}
			if (!textBody) textBody = htmlToPlainText(rawMessageHtml);
		}
		const attachments = (itemAttachments || []).map((a) => ({
			name: a.Filename || "attachment",
			size: a.Size || 0,
			type: a.MIMEType || "application/octet-stream",
			partPath: a.Path ? a.Path.join(".") : void 0
		}));
		const formatAddrs = (addrs) => addrs ? addrs.map((a) => a.Name ? `${a.Name} <${a.Mailbox}@${a.Host}>` : `${a.Mailbox}@${a.Host}`) : [];
		this.composeStore.openComposer({
			draftUid: msg.UID.toString(),
			draftMailbox: mailbox,
			subject: msg.Envelope?.Subject || "",
			to: formatAddrs(msg.Envelope?.To),
			cc: formatAddrs(msg.Envelope?.Cc),
			bcc: formatAddrs(msg.Envelope?.Bcc),
			text: textBody,
			html: rawMessageHtml,
			format: this.settingsStore?.getState()?.composeFormat || "html",
			attachments
		});
	}
	renderThreadCard(item) {
		return b`
      <alps-thread-card
        id="thread-card-${item.message?.UID}"
        .item=${item}
        .mailbox=${this.mailbox}
        @toggle-expansion=${(e) => this.toggleItemExpansion(e.detail.item)}
        @load-remote-resources=${(e) => this.loadRemoteResourcesForItem(e.detail.item)}
        @toggle-star=${(e) => this.toggleItemStar(e.detail.item)}
        @delete-item=${(e) => this.deleteItem(e.detail.item)}
        @action-for-item=${(e) => this._handleActionForItem(e.detail.action, e.detail.item)}
        @edit-draft-for-item=${(e) => {
			this._handleEditDraft(e.detail.item);
		}}
      ></alps-thread-card>
    `;
	}
	render() {
		const isBulk = this.selectedUids && this.selectedUids.size > 0;
		const enableThreading = this.settingsStore?.getState()?.enableThreading ?? true;
		if (!this.message && !isBulk) return b`
        <div class="empty-reader-state">
          ${this.i18nStore?.t("messageReader.selectMessage")}
        </div>
      `;
		const currentView = this.localPreferredView || this.settingsStore?.getState()?.preferredView || "html";
		const msg = this.message || {};
		const customTags = getMessageTags(msg.Flags, this.i18nStore);
		const PREDEFINED_LABELS = new Set([
			"$label1",
			"$label2",
			"$label3",
			"$label4",
			"$label5"
		]);
		const otherTags = isBulk || !this.message ? [] : getRemovableTags(msg.Flags).filter((t) => !PREDEFINED_LABELS.has(t.toLowerCase()));
		const sender = msg.Envelope?.From?.[0] || {};
		const senderAddress = sender.Mailbox && sender.Host ? `${sender.Mailbox}@${sender.Host}` : "";
		const senderName = sender.Name || senderAddress || this.i18nStore?.t("messageList.unknownSender");
		const dateFormat = this.settingsStore?.getState()?.dateFormat || "YYYY-MM-DD";
		const hourFormat = String(this.settingsStore?.getState()?.hourFormat || "12");
		const dateStr = msg.Envelope?.Date ? formatFullDate(msg.Envelope.Date, dateFormat, hourFormat) : "";
		const bimiUrl = getBimiAvatarUrl(sender.Host ? sender.Host.toLowerCase() : "");
		const mbxLower = (this.mailbox || "").toLowerCase();
		const currentRole = mailboxRoleByName(this.mailbox || "", this.mailboxes);
		const isArchive = currentRole === "archive";
		const isJunk = currentRole === "junk";
		const isTrash = currentRole === "trash";
		const isDrafts = currentRole === "drafts";
		const isSent = mbxLower === this.getSentMailboxName().toLowerCase();
		return b`
      <alps-toolbar class="toolbar" ?scrolled=${this.isScrolled}>
        ${this.layoutMode === "full" ? b`
          <alps-icon-btn @click=${() => this.dispatchEvent(new CustomEvent("close"))} title=${this.i18nStore?.t("messageReader.back")} icon="arrowLeft"></alps-icon-btn>
          <div class="toolbar-separator desktop-only"></div>
        ` : ""}
        
        <div class="toolbar-spacer mobile-spacer"></div>
        
        ${!isArchive && !isTrash && !isDrafts ? b`
        <alps-icon-btn title=${this.i18nStore?.t("messageReader.archive")} @click=${() => this._handleAction("archive")} icon="archiveBox"></alps-icon-btn>
        ` : ""}
        ${!isJunk && !isTrash && !isDrafts && !isSent ? b`
        <alps-icon-btn class="desktop-only" title=${this.i18nStore?.t("messageReader.reportSpam")} @click=${() => this._handleAction("reportSpam")} icon="warningDiamond"></alps-icon-btn>
        ` : ""}
        ${isJunk ? b`
        <alps-icon-btn class="desktop-only" title=${this.i18nStore?.t("messageReader.notSpam")} @click=${() => this._handleAction("notSpam")} icon="notSpam"></alps-icon-btn>
        ` : ""}
        <alps-icon-btn title=${this.message?.Flags?.includes("\\Draft") || isDrafts ? this.i18nStore?.t("messageReader.discardDraft") : this.i18nStore?.t("messageReader.delete")} @click=${() => this._handleAction("delete")} icon="trash"></alps-icon-btn>
        <alps-folder-selector-popup
          class="desktop-only"
          .mailboxes=${this.mailboxes}
          .currentMailbox=${this.mailbox}
          @folder-selected=${(e) => this._handleAction(e.detail.isMove ? "moveTo" : "copyTo", e.detail.folderName)}
        >
          <alps-icon-btn slot="trigger" title=${this.i18nStore?.t("messageReader.moveTo")} icon="folderOpen"></alps-icon-btn>
        </alps-folder-selector-popup>
        
        <div class="toolbar-separator"></div>
        
        ${!isTrash && !isSent ? b`
        <alps-icon-btn title=${isBulk && this.allSelectedUnread || !isBulk && !this.message?.Flags?.includes("\\Seen") ? this.i18nStore?.t("messageReader.markRead") : this.i18nStore?.t("messageReader.markUnread")} @click=${() => this._handleAction("markUnread")} icon=${isBulk && this.allSelectedUnread || !isBulk && !this.message?.Flags?.includes("\\Seen") ? "envelopeOpen" : "envelopeUnread"}></alps-icon-btn>
        ` : ""}
        <alps-icon-btn class="desktop-only" ?active=${isBulk && this.allSelectedStarred || !isBulk && this.message?.Flags?.includes("\\Flagged")} title=${this.i18nStore?.t("messageReader.star")} @click=${() => this._handleAction("star")} icon=${isBulk && this.allSelectedStarred || !isBulk && this.message?.Flags?.includes("\\Flagged") ? "starFourFill" : "starFour"}></alps-icon-btn>
        
        <alps-popup align="left" class="tags-popup">
          <alps-icon-btn slot="trigger" class="desktop-only" title=${this.i18nStore?.t("messageReader.tags")} icon="tag"></alps-icon-btn>
          ${[
			"$label1",
			"$label2",
			"$label3",
			"$label4",
			"$label5"
		].map((tag) => {
			return b`
              <button class="dropdown-item ${(isBulk ? this.commonTags?.some((f) => f.toLowerCase() === tag.toLowerCase()) : this.message?.Flags?.some((f) => f.toLowerCase() === tag.toLowerCase())) ? "active" : ""}" @click=${() => this._handleTag(tag)}>
                <span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${getTagColor(tag)};margin-right:12px;opacity:0.9;"></span>
                <span class="item-text">${getTagName(tag, this.i18nStore)}</span>
              </button>
            `;
		})}
          ${otherTags.length ? b`
            <div class="dropdown-divider"></div>
            ${otherTags.map((tag) => b`
              <button class="dropdown-item active" title=${this.i18nStore?.t("messageReader.removeTag")} @click=${() => this._handleTag(tag)}>
                <span style="display:inline-block;width:12px;height:12px;border-radius:50%;background:${getTagColor(tag)};margin-right:12px;opacity:0.9;"></span>
                <span class="item-text">${getTagName(tag, this.i18nStore)}</span>
                ${renderIcon("x")}
              </button>
            `)}
          ` : ""}
          <div class="dropdown-divider"></div>
          <button class="dropdown-item text-danger" @click=${() => this._handleRemoveAllTags()}>
            <span class="item-text">${this.i18nStore?.t("messageReader.removeAllTags")}</span>
          </button>
        </alps-popup>

        <div class="toolbar-spacer desktop-spacer"></div>
        <div class="toolbar-separator mobile-only"></div>
          
          ${!isBulk ? b`
            ${this.message?.Flags?.includes("\\Draft") || isDrafts ? b`
              <alps-icon-btn title=${this.i18nStore?.t("messageReader.editDraft")} @click=${this._handleEditDraft} icon="pen"></alps-icon-btn>
            ` : b`
              <alps-icon-btn title=${this.i18nStore?.t("messageReader.reply")} @click=${() => this._handleAction("reply")} icon="arrowBendUpLeft"></alps-icon-btn>
            `}
            
            <alps-popup align="right" class="more-menu-popup">
              <alps-icon-btn slot="trigger" class="more-btn" title=${this.i18nStore?.t("messageReader.moreOptions")} icon="dotsThreeVertical"></alps-icon-btn>
            
            ${!(this.message?.Flags?.includes("\\Draft") || isDrafts) ? b`
            <button class="dropdown-item" @click=${() => this._handleAction("reply")}>
              ${renderIcon("arrowBendUpLeft")} <span class="item-text">${this.i18nStore?.t("messageReader.reply")}</span>
            </button>
            <button class="dropdown-item" @click=${() => this._handleAction("replyAll")}>
              ${renderIcon("arrowBendDoubleUpLeft")} <span class="item-text">${this.i18nStore?.t("messageReader.replyAll")}</span>
            </button>
            <button class="dropdown-item" @click=${() => this._handleAction("forward")}>
              ${renderIcon("arrowBendUpRight")} <span class="item-text">${this.i18nStore?.t("messageReader.forward")}</span>
            </button>
            <div class="dropdown-divider"></div>
            ` : ""}
            ${!isArchive && !isTrash && !isDrafts ? b`
            <button class="dropdown-item" @click=${() => this._handleAction("archive")}>
              ${renderIcon("archiveBox")} <span class="item-text">${this.i18nStore?.t("messageReader.archive")}</span>
            </button>
            ` : ""}
            ${!isJunk && !isTrash && !isDrafts && !isSent ? b`
            <button class="dropdown-item" @click=${() => this._handleAction("reportSpam")}>
              ${renderIcon("warningDiamond")} <span class="item-text">${this.i18nStore?.t("messageReader.reportSpam")}</span>
            </button>
            ` : ""}
            ${isJunk ? b`
            <button class="dropdown-item" @click=${() => this._handleAction("notSpam")}>
              ${renderIcon("notSpam")} <span class="item-text">${this.i18nStore?.t("messageReader.notSpam")}</span>
            </button>
            ` : ""}
            <button class="dropdown-item" @click=${() => this._handleAction("delete")}>
              ${renderIcon("trash")} <span class="item-text">${this.message?.Flags?.includes("\\Draft") || this.mailbox === "Drafts" || mailboxRoleByName(this.mailbox || "", this.mailboxes) === "drafts" ? this.i18nStore?.t("messageReader.discardDraft") : this.i18nStore?.t("messageReader.delete")}</span>
            </button>
            <alps-folder-selector-popup
              class="folder-selector"
              .mailboxes=${this.mailboxes}
              .currentMailbox=${this.mailbox}
              @folder-selected=${(e) => this._handleAction(e.detail.isMove ? "moveTo" : "copyTo", e.detail.folderName)}
            >
              <button slot="trigger" class="dropdown-item">
                ${renderIcon("folderOpen")} <span class="item-text">${this.i18nStore?.t("messageReader.moveTo")}</span>
              </button>
            </alps-folder-selector-popup>
            <div class="dropdown-divider"></div>
            ${!isTrash && !isSent ? b`
            <button class="dropdown-item" @click=${() => this._handleAction("markUnread")}>
              ${!this.message?.Flags?.includes("\\Seen") ? renderIcon("envelopeOpen") : renderIcon("envelopeUnread")} <span class="item-text">${!this.message?.Flags?.includes("\\Seen") ? this.i18nStore?.t("messageReader.markRead") : this.i18nStore?.t("messageReader.markUnread")}</span>
            </button>
            ` : ""}
            <button class="dropdown-item" @click=${() => this._handleAction("star")}>
              ${this.message?.Flags?.includes("\\Flagged") ? renderIcon("starFourFill") : renderIcon("starFour")} <span class="item-text">${this.i18nStore?.t("messageReader.star")}</span>
            </button>
            <div class="dropdown-divider"></div>
            <button class="dropdown-item" @click=${() => this._handleAction("print")}>
              ${renderIcon("printer")} <span class="item-text">${this.i18nStore?.t("messageReader.print")}</span>
            </button>
            <div class="dropdown-divider"></div>
            <button class="dropdown-item ${currentView === "text" ? "active" : ""}" ?disabled=${!this.hasText} @click=${() => this.hasText && this._handleAction("showPlaintext")}>
              ${renderIcon("textAlignLeft")}
              <span class="item-text">${this.i18nStore?.t("messageReader.showPlaintext")}</span>
            </button>
            <button class="dropdown-item ${currentView === "html" ? "active" : ""}" ?disabled=${!this.hasHtml} @click=${() => this.hasHtml && this._handleAction("showHtml")}>
              ${renderIcon("code")}
              <span class="item-text">${this.i18nStore?.t("messageReader.showHtml")}</span>
            </button>
            <div class="dropdown-divider"></div>
            <button class="dropdown-item" @click=${() => this._handleAction("downloadMessage")}>
              ${renderIcon("downloadSimple")} <span class="item-text">${this.i18nStore?.t("messageReader.downloadMessage")}</span>
            </button>
            <button class="dropdown-item" @click=${() => this._handleAction("showOriginal")}>
              ${renderIcon("codeBlock")} <span class="item-text">${this.i18nStore?.t("messageReader.showOriginal")}</span>
            </button>
          </alps-popup>
          ` : ""}
      </alps-toolbar>
      
      ${isBulk ? b`
        <div class="reader-body">
          <div class="empty-reader-state" style="flex-direction: column; gap: 16px;">
            ${this.bulkProcessing ? b`
              <div class="bulk-spinner-container">
                <alps-loader></alps-loader>
              </div>
            ` : b`
              <alps-icon-btn icon="envelopeSimple" style="pointer-events: none;"></alps-icon-btn>
            `}
            <span>${this.selectedUids.size} ${this.i18nStore?.t("messageReader.messagesSelected")}</span>
          </div>
        </div>
      ` : enableThreading && (this.threadItems.length > 1 || this._isThread) ? b`
        <div class="reader-body" @scroll=${this.handleScroll}>
          <div class="reader-header thread-header-grouped">
            <div class="reader-subject">
              ${customTags.length > 0 ? b`
                <div class="tag-pills">
                  ${customTags.map((tag) => b`
                    <alps-tag .name=${tag.name} .color=${tag.color}></alps-tag>
                  `)}
                </div>
              ` : ""}
              ${msg.Envelope?.Subject || this.i18nStore?.t("messageList.noSubject")}
            </div>
          </div>
          <div class="thread-container">
            ${this.threadItems.map((item) => this.renderThreadCard(item))}
          </div>
        </div>
      ` : b`
        <div class="reader-body" @scroll=${this.handleScroll}>
          <div class="reader-header">
          <div class="reader-subject">
            ${customTags.length > 0 ? b`
              <div class="tag-pills">
                ${customTags.map((tag) => b`
                  <alps-tag .name=${tag.name} .color=${tag.color}></alps-tag>
                `)}
              </div>
            ` : ""}

            ${msg.Envelope?.Subject || this.i18nStore?.t("messageList.noSubject")}
          </div>
          <div class="reader-meta">
            <div class="reader-sender-block">
              <div class="reader-sender-left">
                <div class="avatar-container">
                  <alps-avatar .name=${senderName} .email=${senderAddress} .size=${40} .src=${bimiUrl}></alps-avatar>
                  ${msg.HasBimiPotential ? b`
                    <div class="bimi-badge" title="${this.i18nStore?.t("messageReader.verifiedSender")}">
                      ${renderIcon("verifiedBadge")}
                    </div>
                  ` : msg.HasBimiFailed ? b`
                    <div class="bimi-badge bimi-failed-badge" title="${this.i18nStore?.t("messageReader.unverifiedSender")}">
                      ${renderIcon("authFailedBadge")}
                    </div>
                  ` : ""}
                </div>
                <div class="reader-sender-info">
                  ${sender.Name && sender.Name !== senderAddress ? b`<span class="reader-sender-name">${sender.Name}</span>` : ""}
                  ${senderAddress ? b`<alps-recipient-pill address="${senderAddress}"></alps-recipient-pill>` : b`<span class="reader-sender-name">${senderName}</span>`}
                </div>
              </div>
              <div class="desktop-date-container">
                <div class="reader-date desktop-date">${dateStr}</div>
                ${msg.RFC822Size ? b`<div class="reader-size desktop-only">${formatSize(msg.RFC822Size)}</div>` : ""}
              </div>
            </div>
            
            <div class="reader-recipients-block">
              <div class="reader-recipients">
                <span class="reader-recipients-label">${this.i18nStore?.t("messageReader.to")}</span>
                <div class="reader-recipients-list">
                  ${msg.Envelope?.To && msg.Envelope.To.length > 0 ? msg.Envelope.To.map((t) => t.Mailbox && t.Host ? b`<alps-recipient-pill name="${t.Name || ""}" address="${t.Mailbox}@${t.Host}"></alps-recipient-pill>` : "") : b`<span class="undisclosed-recipients">${msg.Flags?.includes("\\Draft") ? this.i18nStore?.t("messageReader.noRecipients") : this.i18nStore?.t("messageReader.undisclosed")}</span>`}
                </div>
              </div>
              ${msg.Envelope?.Cc && msg.Envelope.Cc.length > 0 ? b`
                <div class="reader-recipients">
                  <span class="reader-recipients-label">${this.i18nStore?.t("messageReader.cc")}</span>
                  <div class="reader-recipients-list">
                    ${msg.Envelope.Cc.map((t) => t.Mailbox && t.Host ? b`<alps-recipient-pill name="${t.Name || ""}" address="${t.Mailbox}@${t.Host}"></alps-recipient-pill>` : "")}
                  </div>
                </div>
              ` : ""}
              
              <div class="reader-recipients mobile-only">
                <span class="reader-recipients-label">${this.i18nStore?.t("messageReader.date") || "Date:"}</span>
                <div class="reader-recipients-list mobile-date-container" style="flex-direction: row; align-items: baseline; gap: 8px; margin-top: 0;">
                  <span class="reader-date mobile-date" style="color: var(--text-primary);">${dateStr}</span>
                  ${msg.RFC822Size ? b`<span class="reader-size mobile-size">(${formatSize(msg.RFC822Size)})</span>` : ""}
                </div>
              </div>
            </div>
          </div>
        </div>

        ${!this.loading && this.attachments && this.attachments.length > 0 ? b`
          <alps-attachment-list
            class="desktop-attachments"
            .attachments=${this.attachments}
            .mailbox=${this.mailbox}
            .messageUid=${msg.UID}
          ></alps-attachment-list>
        ` : ""}

        ${this.loading ? b`
          <div class="loading-overlay">
            <div class="loading-state">
              <alps-loader full-height .text=${this.i18nStore?.t("messageReader.loadingMessage") || "Loading message..."}></alps-loader>
            </div>
          </div>
        ` : b`
          <div class="message-content">
          ${this.activeBanners && this.activeBanners.length > 0 ? b`
            ${this.activeBanners.map((banner) => banner)}
          ` : ""}
          ${this.hasRemoteResources && !this.allowRemoteResources ? b`
            <alps-banner>
              <span>${this.i18nStore?.t("messageReader.remoteContentWarning")}</span>
              <alps-button slot="action" variant="normal" @click=${this.loadRemoteResources}>${this.i18nStore?.t("messageReader.loadRemoteContent")}</alps-button>
            </alps-banner>
          ` : ""}
          ${this.message?.Flags?.includes("\\Draft") ? b`
            <alps-banner>
              <span>${this.i18nStore?.t("messageReader.isDraft")}</span>
              <alps-button slot="action" variant="normal" @click=${this._handleEditDraft}>${this.i18nStore?.t("messageReader.editDraft")}</alps-button>
            </alps-banner>
          ` : ""}
          
          <div class="reader-content-wrapper">
            ${this.mimeType?.toLowerCase() === "text/html" ? b`
              <iframe 
                class="reader-iframe"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin"
                .srcdoc=${l(this.content)}
                @load=${this.onIframeLoad}
              ></iframe>
            ` : this.mimeType?.toLowerCase().startsWith("multipart/") || !this.content ? b`
              <div class="reader-empty-body">
                ${this.i18nStore?.t("messageReader.noReadableText")}
              </div>
            ` : b`
              <div class="reader-text-wrapper">
                <pre class="reader-preformatted">${this.content}</pre>
              </div>
            `}
          </div>

        `}
      </div>

      ${!this.loading && this.attachments && this.attachments.length > 0 ? b`
        <alps-attachment-list
          class="mobile-attachments"
          .attachments=${this.attachments}
          .mailbox=${this.mailbox}
          .messageUid=${msg.UID}
        ></alps-attachment-list>
      ` : ""}
      `}
    `;
	}
};
__decorate([c({ context: settingsContext })], MessageReader.prototype, "settingsStore", void 0);
__decorate([c({ context: i18nContext })], MessageReader.prototype, "i18nStore", void 0);
__decorate([c({ context: composeContext })], MessageReader.prototype, "composeStore", void 0);
__decorate([r()], MessageReader.prototype, "localPreferredView", void 0);
__decorate([r()], MessageReader.prototype, "hasHtml", void 0);
__decorate([r()], MessageReader.prototype, "hasText", void 0);
__decorate([n$1({ type: String })], MessageReader.prototype, "mailbox", void 0);
__decorate([n$1({ type: Object })], MessageReader.prototype, "message", void 0);
__decorate([n$1({ type: Array })], MessageReader.prototype, "messages", void 0);
__decorate([n$1({ type: Object })], MessageReader.prototype, "selectedUids", void 0);
__decorate([n$1({ type: Boolean })], MessageReader.prototype, "allSelectedStarred", void 0);
__decorate([n$1({ type: Boolean })], MessageReader.prototype, "allSelectedUnread", void 0);
__decorate([n$1({ type: Array })], MessageReader.prototype, "commonTags", void 0);
__decorate([n$1({ type: Boolean })], MessageReader.prototype, "bulkProcessing", void 0);
__decorate([n$1({ type: String })], MessageReader.prototype, "layoutMode", void 0);
__decorate([n$1({ type: Array })], MessageReader.prototype, "mailboxes", void 0);
__decorate([r()], MessageReader.prototype, "content", void 0);
__decorate([r()], MessageReader.prototype, "mimeType", void 0);
__decorate([r()], MessageReader.prototype, "loading", void 0);
__decorate([r()], MessageReader.prototype, "activeBanners", void 0);
__decorate([r()], MessageReader.prototype, "attachments", void 0);
__decorate([r()], MessageReader.prototype, "allowRemoteResources", void 0);
__decorate([r()], MessageReader.prototype, "hasRemoteResources", void 0);
__decorate([r()], MessageReader.prototype, "rawMessageHtml", void 0);
__decorate([r()], MessageReader.prototype, "isScrolled", void 0);
__decorate([r()], MessageReader.prototype, "threadItems", void 0);
__decorate([r()], MessageReader.prototype, "_isThread", void 0);
MessageReader = __decorate([t("alps-message-reader")], MessageReader);
//#endregion
//#region src/pages/mailbox-page.ts
var UNDO_TOAST_TIMEOUT_MS$1 = 1e4;
var SIDEBAR_WIDTH_DEFAULT = 250;
var SIDEBAR_WIDTH_MIN = 150;
var SIDEBAR_WIDTH_MAX = 500;
var SIDEBAR_WIDTH_COLLAPSED = 64;
var SIDEBAR_COLLAPSE_THRESHOLD = 120;
var MESSAGE_LIST_WIDTH_MIN = 380;
var MESSAGE_READER_WIDTH_MIN = 300;
var HEADER_HEIGHT = 57;
var HORIZONTAL_LIST_HEIGHT_MIN = 150;
var HORIZONTAL_LIST_HEIGHT_DEFAULT = 250;
var MailboxPage = class MailboxPage extends i {
	constructor(..._args) {
		super(..._args);
		this.showDeleteConfirm = false;
		this.pendingDeleteDetails = null;
		this.markReadTimer = null;
		this.notificationSound = new Audio("/assets/notify.wav");
		this.audioUnlocked = false;
		this.unlockAudio = () => {
			if (this.audioUnlocked) return;
			this.notificationSound.muted = true;
			this.notificationSound.play().then(() => {
				this.notificationSound.pause();
				this.notificationSound.currentTime = 0;
				this.audioUnlocked = true;
			}).catch(() => {}).finally(() => {
				this.notificationSound.muted = false;
			});
			document.removeEventListener("click", this.unlockAudio);
			document.removeEventListener("keydown", this.unlockAudio);
		};
		this.mailboxes = [];
		this.messages = [];
		this.currentMailbox = FOLDER_INBOX;
		this.loadingMessages = true;
		this.showInitialLoader = !window.alpsAppLoaded;
		this.selectedMessage = null;
		this.selectedUids = /* @__PURE__ */ new Set();
		this.layoutMode = "vertical";
		this.filterQuery = "";
		this.expandedFolders = new Set([FOLDER_INBOX]);
		this.username = "";
		this.currentPage = 0;
		this.totalMessages = 0;
		this.messagesPerPage = 50;
		this.resizerPositionX = SIDEBAR_WIDTH_DEFAULT + Math.max(MESSAGE_LIST_WIDTH_MIN, (window.innerWidth - SIDEBAR_WIDTH_DEFAULT) * .4);
		this.listHeight = Math.max(HORIZONTAL_LIST_HEIGHT_DEFAULT, (window.innerHeight - HEADER_HEIGHT) * .4);
		this.isSidebarDragging = false;
		this.isPaneDragging = false;
		this.sidebarWidth = SIDEBAR_WIDTH_DEFAULT;
		this.isSidebarHovered = false;
		this.hoverTimeout = null;
		this.densityMode = "compact";
		this.isSyncing = false;
		this.sidebarCollapsed = false;
		this.suppressSidebarHover = false;
		this.sortOrder = "desc";
		this.listScrolled = false;
		this.targetUid = null;
		this.isMobile = window.innerWidth <= 768;
		this.mobileSidebarOpen = false;
		this.bulkProcessing = false;
		this.computedMinListWidth = MESSAGE_LIST_WIDTH_MIN;
		this._mql = window.matchMedia("(max-width: 768px)");
		this._handleMediaQuery = (e) => {
			this.isMobile = e.matches;
			if (!this.isMobile) this.mobileSidebarOpen = false;
		};
		this.handleDraftAutosaved = (e) => {
			const { oldUid, newUid, mailbox, subject, hasAttachments, size } = e.detail;
			if (this.currentMailbox === mailbox && this.messages) {
				const parsedNewUid = Number(newUid);
				let found = false;
				if (oldUid) {
					const idx = this.messages.findIndex((m) => String(m.UID) === String(oldUid));
					if (idx !== -1) {
						const updated = [...this.messages];
						updated[idx] = {
							...updated[idx],
							UID: parsedNewUid,
							Size: size || updated[idx].Size,
							RFC822Size: size || updated[idx].RFC822Size,
							HasAttachments: hasAttachments,
							_isAutosaveUpdate: true,
							Envelope: {
								...updated[idx].Envelope,
								Subject: subject || updated[idx].Envelope?.Subject || "(No subject)"
							}
						};
						this.messages = updated;
						found = true;
						if (this.selectedMessage && String(this.selectedMessage.UID) === String(oldUid)) {
							this.selectedMessage = updated[idx];
							this.targetUid = String(parsedNewUid);
							let currentHash = window.location.hash;
							if (currentHash.includes(`/${oldUid}`)) currentHash = currentHash.replace(`/${oldUid}`, `/${parsedNewUid}`);
							else if (currentHash.includes(`uid=${oldUid}`)) currentHash = currentHash.replace(`uid=${oldUid}`, `uid=${parsedNewUid}`);
							window.history.replaceState(null, "", currentHash);
						}
					} else for (let i = 0; i < this.messages.length; i++) {
						const parent = this.messages[i];
						if (parent.SubMessages) {
							const subIdx = parent.SubMessages.findIndex((sm) => String(sm.UID) === String(oldUid));
							if (subIdx !== -1) {
								const updatedSubMessages = [...parent.SubMessages];
								updatedSubMessages[subIdx] = {
									...updatedSubMessages[subIdx],
									UID: parsedNewUid,
									Size: size || updatedSubMessages[subIdx].Size,
									RFC822Size: size || updatedSubMessages[subIdx].RFC822Size,
									HasAttachments: hasAttachments,
									_isAutosaveUpdate: true,
									Envelope: {
										...updatedSubMessages[subIdx].Envelope,
										Subject: subject || updatedSubMessages[subIdx].Envelope?.Subject || "(No subject)"
									}
								};
								const updatedMessages = [...this.messages];
								updatedMessages[i] = {
									...parent,
									SubMessages: updatedSubMessages
								};
								this.messages = updatedMessages;
								found = true;
								if (this.selectedMessage && String(this.selectedMessage.UID) === String(oldUid)) {
									this.selectedMessage = updatedSubMessages[subIdx];
									this.targetUid = String(parsedNewUid);
									let currentHash = window.location.hash;
									if (currentHash.includes(`/${oldUid}`)) currentHash = currentHash.replace(`/${oldUid}`, `/${parsedNewUid}`);
									else if (currentHash.includes(`uid=${oldUid}`)) currentHash = currentHash.replace(`uid=${oldUid}`, `uid=${parsedNewUid}`);
									window.history.replaceState(null, "", currentHash);
								}
								break;
							}
						}
					}
				}
				if (!found) {
					const draftName = this.settingsStore?.getState().name || this.username;
					const draftEmailParts = (this.username || "").split("@");
					const draftMailboxStr = draftEmailParts[0] || "";
					const draftHostStr = draftEmailParts[1] || "";
					const newDraft = {
						UID: parsedNewUid,
						Size: size || 0,
						RFC822Size: size || 0,
						HasAttachments: hasAttachments,
						Flags: [FLAG_SEEN, FLAG_DRAFT],
						_isAutosaveUpdate: true,
						Envelope: {
							Subject: subject || "(No subject)",
							Date: (/* @__PURE__ */ new Date()).toISOString(),
							From: [{
								Name: draftName,
								Mailbox: draftMailboxStr,
								Host: draftHostStr
							}]
						}
					};
					const filtered = this.messages.filter((m) => String(m.UID) !== String(oldUid) && String(m.UID) !== String(newUid));
					this.messages = [newDraft, ...filtered];
				}
			}
		};
		this._handleSettingsChange = () => {
			this._syncSettings();
		};
		this._handleI18nChange = () => {
			this.requestUpdate();
		};
		this.handleSyncStart = (e) => {
			const detail = e.detail;
			this.isSyncing = true;
			if (!detail.background) this.loadingMessages = true;
		};
		this.handleSyncSuccess = (e) => {
			this.isSyncing = false;
			const { data, background } = e.detail;
			if (data.Username) {
				this.username = data.Username;
				if (this.settingsStore.getState().loginUsername !== data.Username) this.settingsStore.updateSettings({ loginUsername: data.Username });
			}
			let isInitialLoad = this.mailboxes.length === 0;
			let soundTriggered = false;
			let notificationTriggered = false;
			let totalNewInboxMessages = 0;
			if (data.Mailboxes) {
				for (const mb of data.Mailboxes) {
					const mbName = mb.Name || mb.Mailbox;
					const oldMb = this.mailboxes.find((m) => (m.Name || m.Mailbox) === mbName);
					const prevTotal = oldMb ? oldMb.Total : void 0;
					if (prevTotal !== void 0 && mb.Total !== void 0 && mb.Total > prevTotal) {
						if (!isInitialLoad && background) {
							soundTriggered = true;
							if (mbName.toUpperCase() === "INBOX") {
								notificationTriggered = true;
								totalNewInboxMessages += mb.Total - prevTotal;
							}
						}
					}
				}
				this.mailboxes = data.Mailboxes;
			}
			if (soundTriggered && this.settingsStore.getState().soundNotifications) {
				this.notificationSound.currentTime = 0;
				this.notificationSound.play().catch((e) => {
					if (e.name !== "NotAllowedError") Logger.error("Failed to play sound notification:", e);
				});
			}
			if (notificationTriggered && this.settingsStore.getState().desktopNotifications && "Notification" in window && Notification.permission === "granted") {
				const title = this.i18nStore?.t("mailboxPage.newMessages");
				let body = totalNewInboxMessages === 1 ? this.i18nStore?.t("mailboxPage.newMessagesSingleBody") : (this.i18nStore?.t("mailboxPage.newMessagesMultiBody")).replace("{count}", String(totalNewInboxMessages));
				try {
					const notification = new Notification(title, {
						body,
						icon: "/apple-touch-icon.png",
						tag: "alps-new-message"
					});
					notification.onclick = () => {
						window.focus();
						notification.close();
						if (this.currentMailbox !== "INBOX") this.updateUrl("INBOX", 0, null);
						else {
							this.currentPage = 0;
							messageSync.fetch(this.currentMailbox, 0, this.filterQuery, false);
						}
					};
				} catch (e) {
					Logger.error("Failed to show desktop notification:", e);
				}
			}
			if (notificationTriggered && this.currentMailbox !== "INBOX") this.showGlobalToast(this.i18nStore?.t("mailboxPage.newMessagesInInbox"), this.i18nStore?.t("mailboxPage.open"), () => {
				this.updateUrl("INBOX", 0, null);
			}, 5e3);
			if (background && this.currentPage > 0) {
				if (data.Total !== void 0 && data.Total !== this.totalMessages) this.showGlobalToast(this.i18nStore?.t("mailboxPage.newMessagesAvailable"), this.i18nStore?.t("mailboxPage.refresh"), () => {
					this.currentPage = 0;
					messageSync.fetch(this.currentMailbox, this.currentPage, this.filterQuery, false);
				});
			} else {
				if (data.Page !== void 0) this.currentPage = data.Page;
				if (data.Total !== void 0) this.totalMessages = data.Total;
				if (data.MessagesPerPage !== void 0) this.messagesPerPage = data.MessagesPerPage;
				if (data.Messages) {
					this.messages = data.Messages;
					if (this.selectedMessage) {
						const updatedMsg = this.messages.find((m) => String(m.UID) === String(this.selectedMessage.UID));
						if (updatedMsg && updatedMsg.Flags) this.selectedMessage = {
							...this.selectedMessage,
							Flags: updatedMsg.Flags
						};
					}
				} else this.messages = [];
			}
			if (!background) {
				this.loadingMessages = false;
				this.applyTargetUid();
				if (this.showInitialLoader) setTimeout(() => {
					this.showInitialLoader = false;
					window.alpsAppLoaded = true;
				}, 100);
			}
		};
		this.handleSyncError = (e) => {
			this.isSyncing = false;
			const { background } = e.detail;
			if (!background) this.loadingMessages = false;
		};
		this.handleMailboxNotFound = () => {
			this.showGlobalToast(this.i18nStore.t("mailboxPage.mailboxNotFound"), "", void 0, 3e3);
			this.updateUrl(FOLDER_INBOX, 0, null, null);
		};
		this.handleHashChange = () => {
			const oldMailbox = this.currentMailbox;
			const oldPage = this.currentPage;
			const oldUid = this.targetUid;
			const oldFilter = this.filterQuery;
			this.extractMailboxFromHash();
			if (oldMailbox !== this.currentMailbox || oldPage !== this.currentPage || oldFilter !== this.filterQuery) {
				if (oldMailbox !== this.currentMailbox) {
					this.selectedMessage = null;
					this.currentPage = 0;
					this.selectedUids = /* @__PURE__ */ new Set();
					this.loadingMessages = true;
				} else if (oldFilter !== this.filterQuery) {
					this.loadingMessages = true;
					this.currentPage = 0;
				}
				messageSync.fetch(this.currentMailbox, this.currentPage, this.filterQuery, false);
			} else if (oldUid !== this.targetUid) this.applyTargetUid();
		};
		this.startResize = (e) => {
			e.preventDefault();
			this.isPaneDragging = true;
			this.updateComputedMinWidth();
			const onMouseMove = (moveEvent) => {
				if (this.layoutMode === "vertical") {
					const sidebarW = this.sidebarCollapsed ? SIDEBAR_WIDTH_COLLAPSED : this.sidebarWidth;
					const newX = Math.max(sidebarW + this.computedMinListWidth, Math.min(moveEvent.clientX, window.innerWidth - MESSAGE_READER_WIDTH_MIN));
					this.resizerPositionX = newX;
				} else if (this.layoutMode === "horizontal") this.listHeight = Math.max(HORIZONTAL_LIST_HEIGHT_MIN, Math.min(moveEvent.clientY - HEADER_HEIGHT, window.innerHeight - HORIZONTAL_LIST_HEIGHT_MIN));
			};
			const onMouseUp = () => {
				this.isPaneDragging = false;
				window.removeEventListener("mousemove", onMouseMove);
				window.removeEventListener("mouseup", onMouseUp);
			};
			window.addEventListener("mousemove", onMouseMove);
			window.addEventListener("mouseup", onMouseUp);
		};
	}
	static {
		this.styles = i$1`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
      height: 100dvh;
      width: 100vw;
      background-color: var(--bg-primary);
      color: var(--text-primary);
      overflow: hidden;
      font-size: 14px;
    }
    
    /* Layout Configurations */
    .app-container {
      display: flex;
      flex: 1;
      min-height: 0;
      width: 100%;
      position: relative;
    }

    /* Vertical: Sidebar (250px) | Message List (min 300px) | Reader (flex) */
    .layout-vertical alps-sidebar.desktop-sidebar { width: var(--sidebar-width, ${SIDEBAR_WIDTH_DEFAULT}px); flex-shrink: 0; }
    .layout-vertical .main-view { flex: 1; display: flex; flex-direction: row; min-width: 0; }
    .layout-vertical .message-list-pane { width: ${MESSAGE_LIST_WIDTH_MIN}px; flex-shrink: 0; border-right: 1px solid var(--border-color); }
    .layout-vertical .message-reader-pane { flex: 1; min-width: 0; }

    /* Horizontal: Sidebar (250px) | [ Message List (50%) / Reader (50%) ] */
    .layout-horizontal alps-sidebar.desktop-sidebar { width: var(--sidebar-width, ${SIDEBAR_WIDTH_DEFAULT}px); flex-shrink: 0; }
    .layout-horizontal .main-view { flex: 1; display: flex; flex-direction: column; min-width: 0; }
    .layout-horizontal .message-list-pane { flex-shrink: 0; border-bottom: 1px solid var(--border-color); }
    .layout-horizontal .message-reader-pane { flex: 1; min-height: 0; }

    /* Full: Sidebar (250px) | Message List OR Reader */
    .layout-full alps-sidebar.desktop-sidebar { width: var(--sidebar-width, ${SIDEBAR_WIDTH_DEFAULT}px); flex-shrink: 0; }
    .layout-full .main-view { flex: 1; display: flex; min-width: 0; }
    .layout-full .message-list-pane { flex: 1; min-width: 0; }
    .layout-full .message-reader-pane { flex: 1; min-width: 0; }
    .layout-full.reading .message-list-pane { display: none; }
    .layout-full:not(.reading) .message-reader-pane { display: none; }

    .desktop-sidebar.open {
      display: flex;
    }

    .mobile-bulk-actions-container {
      display: flex;
      gap: 8px;
      align-items: center;
      width: 100%;
    }

    .header-divider {
      width: 1px;
      height: 20px;
      background: var(--border-color);
      margin: 0 4px;
    }

    .mobile-bulk-actions-count {
      font-weight: 600;
      margin-left: 8px;
      margin-right: auto;
    }

    .pane {
      display: flex;
      flex-direction: column;
      background: var(--bg-primary);
      padding: 0;
    }
    
    .resizer {
      background: transparent;
      position: relative;
      z-index: 25;
      flex-shrink: 0;
    }

    .resizer::after {
      content: '';
      position: absolute;
      background: transparent;
      transition: background 0.2s;
    }

    .layout-vertical .resizer {
      width: 4px;
      margin: 0 -2px;
      cursor: col-resize;
    }

    .layout-vertical .resizer::after {
      width: 3px;
      top: 0;
      bottom: 0;
      left: 1px;
    }

    .layout-horizontal .resizer {
      height: 4px;
      margin: -2px 0;
      cursor: row-resize;
    }

    .layout-horizontal .resizer::after {
      height: 3px;
      left: 0;
      right: 0;
      top: 1px;
    }

    .resizer:hover, .resizer.dragging {
      z-index: 9999;
    }

    .resizer:hover::after, .resizer.dragging::after {
      background: var(--accent-color, #005A9E);
    }



    .app-container.dragging {
      user-select: none;
      pointer-events: none;
    }
    

    alps-sidebar.desktop-sidebar {
      transition: width 0.2s, z-index 0s 0.2s;
      position: relative;
      z-index: 20;
    }

    alps-sidebar.desktop-sidebar[collapsed]:hover {
      transition: width 0.2s, z-index 0s 0s;
    }

    .app-container.dragging alps-sidebar.desktop-sidebar {
      transition: none;
    }



    .app-container.collapsed {
      --sidebar-width: ${SIDEBAR_WIDTH_COLLAPSED}px;
    }

    .app-container.collapsed .message-list-pane {
      box-shadow: rgba(95, 95, 95, 0.1) -4px 0 4px -2px;
      z-index: 25;
      border-left: 1px solid var(--border-color);
    }



    `;
	}
	updateComputedMinWidth() {
		let minW = MESSAGE_LIST_WIDTH_MIN;
		const msgList = this.shadowRoot?.querySelector(".message-list-pane alps-message-list");
		if (msgList) {
			const header = msgList.shadowRoot?.querySelector(".list-header");
			if (header) {
				const scrollW = getFlexContainerMinWidth(header);
				minW = Math.max(MESSAGE_LIST_WIDTH_MIN, scrollW + 2);
			}
		}
		if (minW !== this.computedMinListWidth) {
			this.computedMinListWidth = minW;
			const sidebarW = this.sidebarCollapsed && !this.isMobile ? SIDEBAR_WIDTH_COLLAPSED : this.sidebarWidth;
			if (this.resizerPositionX - sidebarW < minW) this.resizerPositionX = sidebarW + minW;
		}
	}
	showGlobalToast(message, actionLabel = "", actionFn, duration = 3e3) {
		window.dispatchEvent(new CustomEvent("show-toast", { detail: {
			message,
			actionLabel,
			actionFn,
			duration
		} }));
	}
	get effectiveListWidth() {
		const sidebarW = this.sidebarCollapsed && !this.isMobile ? SIDEBAR_WIDTH_COLLAPSED : this.sidebarWidth;
		return Math.max(this.computedMinListWidth, this.resizerPositionX - sidebarW);
	}
	get allSelectedStarred() {
		if (this.selectedUids.size === 0) return false;
		for (const uid of this.selectedUids) {
			const msg = this.messages.find((m) => String(m.UID) === uid);
			if (!msg || !msg.Flags?.includes("\\Flagged")) return false;
		}
		return true;
	}
	get commonSelectedTags() {
		if (this.selectedUids.size === 0) return [];
		return [
			"$label1",
			"$label2",
			"$label3",
			"$label4",
			"$label5"
		].filter((label) => {
			for (const uid of this.selectedUids) {
				const msg = this.messages.find((m) => String(m.UID) === uid);
				if (!msg || !msg.Flags?.some((f) => f.toLowerCase() === label.toLowerCase())) return false;
			}
			return true;
		});
	}
	get allSelectedUnread() {
		if (this.selectedUids.size === 0) return false;
		for (const uid of this.selectedUids) {
			const msg = this.messages.find((m) => String(m.UID) === uid);
			if (msg && msg.Flags?.includes("\\Seen")) return false;
		}
		return true;
	}
	connectedCallback() {
		super.connectedCallback();
		this.extractMailboxFromHash();
		window.addEventListener("hashchange", this.handleHashChange);
		document.addEventListener("click", this.unlockAudio);
		document.addEventListener("keydown", this.unlockAudio);
		this._mql.addEventListener("change", this._handleMediaQuery);
		this._handleMediaQuery(this._mql);
		this.settingsStore.addEventListener("change", this._handleSettingsChange);
		this._syncSettings();
		messageSync.addEventListener("sync-start", this.handleSyncStart);
		messageSync.addEventListener("sync-success", this.handleSyncSuccess);
		messageSync.addEventListener("sync-error", this.handleSyncError);
		messageSync.addEventListener("mailbox-not-found", this.handleMailboxNotFound);
		window.addEventListener("draft-autosaved", this.handleDraftAutosaved);
		messageSync.fetch(this.currentMailbox, this.currentPage, this.filterQuery, true);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		window.removeEventListener("hashchange", this.handleHashChange);
		this._mql.removeEventListener("change", this._handleMediaQuery);
		document.removeEventListener("click", this.unlockAudio);
		document.removeEventListener("keydown", this.unlockAudio);
		this.settingsStore.removeEventListener("change", this._handleSettingsChange);
		this.i18nStore?.removeEventListener("change", this._handleI18nChange);
		messageSync.removeEventListener("sync-start", this.handleSyncStart);
		messageSync.removeEventListener("sync-success", this.handleSyncSuccess);
		messageSync.removeEventListener("sync-error", this.handleSyncError);
		messageSync.removeEventListener("mailbox-not-found", this.handleMailboxNotFound);
		window.removeEventListener("draft-autosaved", this.handleDraftAutosaved);
		messageSync.stop();
	}
	updated(changedProperties) {
		super.updated(changedProperties);
		if (changedProperties.has("sidebarCollapsed") || changedProperties.has("layoutMode") || changedProperties.has("currentMailbox") || changedProperties.has("isMobile") || changedProperties.has("mailboxes")) setTimeout(() => this.updateComputedMinWidth(), 0);
	}
	_syncSettings() {
		const state = this.settingsStore.getState();
		this.layoutMode = state.layoutMode;
		this.densityMode = state.densityMode;
		this.sortOrder = state.sortOrder || "desc";
		if (this.sidebarCollapsed !== state.sidebarCollapsed) this.sidebarCollapsed = state.sidebarCollapsed;
		if (state.messagesPerPage && state.messagesPerPage > 0) this.messagesPerPage = state.messagesPerPage;
		if (state.checkMailInterval !== void 0) messageSync.start(state.checkMailInterval);
	}
	openFolderPrompt() {
		const folderList = this.shadowRoot?.querySelector("alps-folder-list");
		if (folderList && typeof folderList.triggerCreateFolder === "function") folderList.triggerCreateFolder();
	}
	updateUrl(mailbox, page, uid, filterQuery = this.filterQuery) {
		let hash = `#/mailbox/${encodeURIComponent(mailbox)}`;
		const params = new URLSearchParams();
		if (page > 0) params.set("p", page.toString());
		if (uid) params.set("uid", uid);
		if (filterQuery) params.set("q", filterQuery);
		const qs = params.toString();
		if (qs) hash += "?" + qs;
		window.location.hash = hash;
	}
	extractMailboxFromHash() {
		let hash = window.location.hash;
		if (hash.startsWith("#/mailbox/")) {
			let pathPart = hash.substring(10);
			const qIndex = pathPart.indexOf("?");
			let queryString = "";
			if (qIndex !== -1) {
				queryString = pathPart.substring(qIndex + 1);
				pathPart = pathPart.substring(0, qIndex);
			}
			const parts = pathPart.split("/");
			this.currentMailbox = decodeURIComponent(parts[0]);
			const params = new URLSearchParams(queryString);
			if (parts.length > 1 && parts[1]) this.targetUid = parts[1];
			else this.targetUid = params.get("uid") || null;
			const pageParam = params.get("p");
			if (pageParam) this.currentPage = parseInt(pageParam, 10) || 0;
			else this.currentPage = 0;
			this.filterQuery = params.get("q") || "";
		} else {
			this.currentMailbox = FOLDER_INBOX;
			this.targetUid = null;
			this.currentPage = 0;
		}
	}
	async applyTargetUid() {
		if (!this.targetUid) {
			if (this.markReadTimer) {
				clearTimeout(this.markReadTimer);
				this.markReadTimer = null;
			}
			this.selectedMessage = null;
			return;
		}
		const currentTargetUid = this.targetUid;
		let msg = this.messages.find((m) => String(m.UID) === currentTargetUid);
		if (!msg && this.messages.length > 0) try {
			const metadataRes = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(this.currentMailbox)}/messages/${currentTargetUid}`);
			if (metadataRes.ok) {
				const data = await metadataRes.json();
				if (data.Message) msg = data.Message;
			}
		} catch (err) {
			Logger.error("Failed to fetch shifted message:", err);
		}
		if (this.targetUid !== currentTargetUid) return;
		if (msg) {
			if (this.selectedMessage?.UID !== msg.UID) {
				this.selectedMessage = msg;
				if (this.layoutMode === "full") this.expandedFolders.clear();
				this._scheduleMarkAsRead(msg);
			}
		} else if (this.messages.length > 0) {
			this.selectedMessage = null;
			this.updateUrl(this.currentMailbox, this.currentPage, null);
		}
	}
	async selectMessage(msg) {
		this.updateUrl(this.currentMailbox, this.currentPage, msg.UID);
	}
	_scheduleMarkAsRead(msg) {
		if (this.markReadTimer) {
			clearTimeout(this.markReadTimer);
			this.markReadTimer = null;
		}
		if (msg.Flags?.includes("\\Seen")) return;
		const timeoutSec = this.settingsStore?.getState().markReadTimeout ?? 0;
		if (timeoutSec < 0) return;
		if (timeoutSec === 0) this._doMarkAsRead(msg);
		else this.markReadTimer = setTimeout(() => {
			this._doMarkAsRead(msg);
		}, timeoutSec * 1e3);
	}
	updateLocalMessageFlags(uids, flag, action) {
		let updated = false;
		const newMessages = [...this.messages];
		for (let i = 0; i < newMessages.length; i++) {
			const msg = newMessages[i];
			if (uids.includes(String(msg.UID))) {
				const hasFlag = msg.Flags && msg.Flags.includes(flag);
				if (action === "add" && !hasFlag) {
					newMessages[i] = {
						...msg,
						Flags: [...msg.Flags || [], flag]
					};
					updated = true;
				} else if (action === "remove" && hasFlag) {
					newMessages[i] = {
						...msg,
						Flags: msg.Flags.filter((f) => f !== flag)
					};
					updated = true;
				}
			}
		}
		if (updated) {
			this.messages = newMessages;
			if (this.selectedMessage && uids.includes(String(this.selectedMessage.UID))) {
				const hasFlag = this.selectedMessage.Flags && this.selectedMessage.Flags.includes(flag);
				if (action === "add" && !hasFlag) this.selectedMessage.Flags = [...this.selectedMessage.Flags || [], flag];
				else if (action === "remove" && hasFlag) this.selectedMessage.Flags = this.selectedMessage.Flags.filter((f) => f !== flag);
				this.selectedMessage = { ...this.selectedMessage };
			}
		}
	}
	async _handleListToggleStar(e) {
		const msg = e.detail.message;
		const isStarred = msg.Flags && msg.Flags.includes("\\Flagged");
		const action = isStarred ? "remove" : "add";
		this.updateLocalMessageFlags([String(msg.UID)], FLAG_FLAGGED, action);
		try {
			if (!await messageOperations.setFlag(this.currentMailbox, [String(msg.UID)], ["\\Flagged"], action)) this.updateLocalMessageFlags([String(msg.UID)], FLAG_FLAGGED, isStarred ? "add" : "remove");
		} catch (err) {
			this.updateLocalMessageFlags([String(msg.UID)], FLAG_FLAGGED, isStarred ? "add" : "remove");
		}
	}
	async _doMarkAsRead(msg) {
		if (this.selectedMessage?.UID === msg.UID) {
			this.selectedMessage = await messageOperations.markAsRead(this.currentMailbox, msg);
			this.updateLocalMessageFlags([String(this.selectedMessage.UID)], FLAG_SEEN, "add");
		} else {
			const newMsg = await messageOperations.markAsRead(this.currentMailbox, msg);
			if (newMsg && newMsg.UID) this.updateLocalMessageFlags([String(newMsg.UID)], FLAG_SEEN, "add");
		}
	}
	async _handleReaderAction(e) {
		const action = e.detail.action;
		const isBulk = this.selectedUids && this.selectedUids.size > 0;
		const uidsArray = isBulk ? Array.from(this.selectedUids) : [];
		if (!isBulk && !this.selectedMessage?.UID) return;
		if (isBulk) this.bulkProcessing = true;
		try {
			const currentMsg = this.selectedMessage;
			const originalMailbox = this.currentMailbox;
			if (action === "star") if (isBulk) {
				const op = this.allSelectedStarred ? "remove" : "add";
				await messageOperations.setFlag(this.currentMailbox, uidsArray, [FLAG_FLAGGED], op);
				this.updateLocalMessageFlags(uidsArray, FLAG_FLAGGED, op);
			} else {
				this.selectedMessage = await messageOperations.toggleStar(this.currentMailbox, this.selectedMessage);
				this.updateLocalMessageFlags([String(this.selectedMessage.UID)], FLAG_FLAGGED, this.selectedMessage.Flags?.includes("\\Flagged") ? "add" : "remove");
			}
			else if (action === "addTag" || action === "removeTag") {
				const tags = e.detail.tags || (e.detail.folder ? [e.detail.folder] : []);
				if (!tags || tags.length === 0) return;
				const op = action === "addTag" ? "add" : "remove";
				if (isBulk) {
					await messageOperations.setFlag(this.currentMailbox, uidsArray, tags, op);
					for (const t of tags) this.updateLocalMessageFlags(uidsArray, t, op);
				} else {
					await messageOperations.setFlag(this.currentMailbox, [String(currentMsg.UID)], tags, op);
					for (const t of tags) this.updateLocalMessageFlags([String(currentMsg.UID)], t, op);
				}
				this.requestUpdate();
			} else if (action === "markUnread") {
				if (isBulk) {
					const op = this.allSelectedUnread ? "add" : "remove";
					await messageOperations.setFlag(this.currentMailbox, uidsArray, [FLAG_SEEN], op);
					this.updateLocalMessageFlags(uidsArray, FLAG_SEEN, op);
				} else if (!currentMsg?.Flags || !currentMsg.Flags.includes("\\Seen")) {
					this.selectedMessage = await messageOperations.markAsRead(this.currentMailbox, currentMsg);
					this.updateLocalMessageFlags([String(this.selectedMessage.UID)], FLAG_SEEN, "add");
				} else if (await messageOperations.markAsUnread(this.currentMailbox, currentMsg)) {
					this.updateLocalMessageFlags([String(currentMsg.UID)], FLAG_SEEN, "remove");
					this.selectedMessage = null;
					this.updateUrl(this.currentMailbox, this.currentPage, null);
				}
			} else if (action === "delete" || action === "archive" || action === "reportSpam" || action === "notSpam") {
				const currentRole = mailboxRoleByName(this.currentMailbox, this.mailboxes);
				const isTrash = currentRole === "trash";
				const isDrafts = currentRole === "drafts";
				const isSpam = currentRole === "junk";
				let moveResult = { success: false };
				let destinationFolder = findMailboxNameByRole("trash", this.currentMailbox, this.mailboxes, FOLDER_TRASH);
				if (action === "archive") destinationFolder = findMailboxNameByRole("archive", this.currentMailbox, this.mailboxes, FOLDER_ARCHIVE);
				if (action === "reportSpam") destinationFolder = findMailboxNameByRole("junk", this.currentMailbox, this.mailboxes, FOLDER_JUNK);
				if (action === "notSpam") destinationFolder = FOLDER_INBOX;
				if (action === "delete" && (isTrash || isDrafts || isSpam)) {
					this.pendingDeleteDetails = {
						isBulk,
						uidsArray,
						currentMsgUid: currentMsg?.UID,
						isTrash,
						isDrafts,
						isSpam
					};
					this.showDeleteConfirm = true;
					return;
				} else if (isBulk) moveResult = await messageOperations.moveMessages(this.currentMailbox, uidsArray, destinationFolder);
				else moveResult = await messageOperations.moveMessages(this.currentMailbox, [String(currentMsg.UID)], destinationFolder);
				if (moveResult.success) {
					if (isBulk) {
						this.selectedUids = /* @__PURE__ */ new Set();
						this.selectedMessage = null;
						this.updateUrl(this.currentMailbox, this.currentPage, null);
						this.requestUpdate();
					} else {
						this.selectedMessage = null;
						this.updateUrl(this.currentMailbox, this.currentPage, null);
					}
					let toastMessage = "";
					let undoFn;
					if (action === "archive") toastMessage = isBulk ? this.i18nStore?.t("toast.messagesMovedToArchive", { count: uidsArray.length }) : this.i18nStore?.t("toast.messageMovedToArchive");
					else if (action === "reportSpam") toastMessage = isBulk ? this.i18nStore?.t("toast.messagesMovedToSpam", { count: uidsArray.length }) : this.i18nStore?.t("toast.messageMovedToSpam");
					else if (action === "notSpam") toastMessage = isBulk ? this.i18nStore?.t("toast.messagesMovedToInbox", { count: uidsArray.length }) : this.i18nStore?.t("toast.messageMovedToInbox");
					else toastMessage = isBulk ? this.i18nStore?.t("toast.messagesMovedToTrash", { count: uidsArray.length }) : this.i18nStore?.t("toast.messageMovedToTrash");
					if (isBulk && moveResult.uidMapping) {
						const mappedUids = Object.values(moveResult.uidMapping);
						undoFn = async () => {
							try {
								const revertResult = await messageOperations.moveMessages(destinationFolder, mappedUids, originalMailbox);
								if (revertResult.success) {
									if (this.currentMailbox === originalMailbox && revertResult.uidMapping) {
										const newUids = new Set(this.selectedUids);
										Object.values(revertResult.uidMapping).forEach((uid) => newUids.add(uid));
										this.selectedUids = newUids;
										this.requestUpdate();
									}
								}
							} catch (err) {
								Logger.error("Undo failed", err);
							}
						};
					} else if (!isBulk && moveResult.uidMapping?.[String(currentMsg.UID)]) {
						const movedMsgMock = { UID: moveResult.uidMapping[String(currentMsg.UID)] };
						undoFn = async () => {
							try {
								const revertResult = await messageOperations.moveMessages(destinationFolder, [String(movedMsgMock.UID)], originalMailbox);
								if (revertResult.success) {
									const page = this.currentMailbox === originalMailbox ? this.currentPage : 0;
									if (revertResult.uidMapping?.[String(movedMsgMock.UID)]) this.updateUrl(originalMailbox, page, revertResult.uidMapping[String(movedMsgMock.UID)]);
									else this.updateUrl(originalMailbox, page, null);
								}
							} catch (err) {
								Logger.error("Undo failed", err);
							}
						};
					}
					this.showGlobalToast(toastMessage, undoFn ? this.i18nStore?.t("mailboxPage.undo") : "", undoFn, UNDO_TOAST_TIMEOUT_MS$1);
				}
			} else if (action === "moveTo" || action === "copyTo") {
				const destinationFolder = e.detail.folder;
				if (!destinationFolder) return;
				const isMove = action === "moveTo";
				let result = { success: false };
				if (isMove) if (isBulk) result = await messageOperations.moveMessages(this.currentMailbox, uidsArray, destinationFolder);
				else result = await messageOperations.moveMessages(this.currentMailbox, [String(currentMsg.UID)], destinationFolder);
				else if (isBulk) result = await messageOperations.copyMessages(this.currentMailbox, uidsArray, destinationFolder);
				else result = await messageOperations.copyMessages(this.currentMailbox, [String(currentMsg.UID)], destinationFolder);
				if (result.success) {
					if (isMove) if (isBulk) {
						this.selectedUids = /* @__PURE__ */ new Set();
						this.selectedMessage = null;
						this.updateUrl(this.currentMailbox, this.currentPage, null);
						this.requestUpdate();
					} else {
						this.selectedMessage = null;
						this.updateUrl(this.currentMailbox, this.currentPage, null);
					}
					let toastMessage = isMove ? isBulk ? this.i18nStore?.t("toast.messagesMovedToFolder", {
						count: uidsArray.length,
						folder: destinationFolder
					}) : this.i18nStore?.t("toast.messageMovedToFolder", { folder: destinationFolder }) : isBulk ? this.i18nStore?.t("toast.messagesCopiedToFolder", {
						count: uidsArray.length,
						folder: destinationFolder
					}) : this.i18nStore?.t("toast.messageCopiedToFolder", { folder: destinationFolder });
					let undoFn;
					if (isBulk && isMove && result.uidMapping) {
						const mappedUids = Object.values(result.uidMapping);
						undoFn = async () => {
							try {
								const revertResult = await messageOperations.moveMessages(destinationFolder, mappedUids, originalMailbox);
								if (revertResult.success) {
									if (this.currentMailbox === originalMailbox && revertResult.uidMapping) {
										const newUids = new Set(this.selectedUids);
										Object.values(revertResult.uidMapping).forEach((uid) => newUids.add(uid));
										this.selectedUids = newUids;
										this.requestUpdate();
									}
								}
							} catch (err) {
								Logger.error("Undo failed", err);
							}
						};
					} else if (!isBulk && isMove && result.uidMapping?.[String(currentMsg.UID)]) {
						const movedMsgMock = { UID: result.uidMapping[String(currentMsg.UID)] };
						undoFn = async () => {
							try {
								const revertResult = await messageOperations.moveMessages(destinationFolder, [String(movedMsgMock.UID)], originalMailbox);
								if (revertResult.success) {
									const page = this.currentMailbox === originalMailbox ? this.currentPage : 0;
									if (revertResult.uidMapping?.[String(movedMsgMock.UID)]) this.updateUrl(originalMailbox, page, revertResult.uidMapping[String(movedMsgMock.UID)]);
									else this.updateUrl(originalMailbox, page, null);
								}
							} catch (err) {
								Logger.error("Undo failed", err);
							}
						};
					}
					this.showGlobalToast(toastMessage, undoFn ? this.i18nStore?.t("mailboxPage.undo") : "", undoFn, UNDO_TOAST_TIMEOUT_MS$1);
				}
			} else if (action === "downloadMessage" && !isBulk) {
				const uid = currentMsg.UID;
				const url = `/mailboxes/${encodeMailboxPath(this.currentMailbox)}/messages/${uid}/raw`;
				const a = document.createElement("a");
				a.href = url;
				a.download = "";
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			} else if (action === "showOriginal" && !isBulk) {
				const url = `#/original?mailbox=${encodeURIComponent(this.currentMailbox)}&uid=${currentMsg.UID}`;
				window.open(url, "_blank");
			}
		} finally {
			if (isBulk) this.bulkProcessing = false;
		}
	}
	async _confirmDelete() {
		this.showDeleteConfirm = false;
		const details = this.pendingDeleteDetails;
		this.pendingDeleteDetails = null;
		if (!details) return;
		const { isBulk, uidsArray, currentMsgUid, isDrafts } = details;
		if (isBulk) this.bulkProcessing = true;
		try {
			let success = false;
			if (isBulk) success = await messageOperations.deleteMessages(this.currentMailbox, uidsArray);
			else success = await messageOperations.deleteMessages(this.currentMailbox, [String(currentMsgUid)]);
			if (success) {
				if (isBulk) {
					this.selectedUids = /* @__PURE__ */ new Set();
					this.selectedMessage = null;
					this.updateUrl(this.currentMailbox, this.currentPage, null);
					this.requestUpdate();
				} else {
					this.selectedMessage = null;
					this.updateUrl(this.currentMailbox, this.currentPage, null);
				}
				let toastMessage = "";
				if (isDrafts) toastMessage = isBulk ? this.i18nStore?.t("toast.draftsDiscarded", { count: uidsArray.length }) : this.i18nStore?.t("toast.draftDiscarded");
				else toastMessage = isBulk ? this.i18nStore?.t("toast.messagesPermanentlyDeleted", { count: uidsArray.length }) : this.i18nStore?.t("toast.messagePermanentlyDeleted");
				this.showGlobalToast(toastMessage, "", void 0, UNDO_TOAST_TIMEOUT_MS$1);
			}
		} finally {
			if (isBulk) this.bulkProcessing = false;
		}
	}
	_cancelDelete() {
		this.showDeleteConfirm = false;
		this.pendingDeleteDetails = null;
	}
	toggleFolder(folderPath, e) {
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
		const newSet = new Set(this.expandedFolders);
		if (newSet.has(folderPath)) newSet.delete(folderPath);
		else newSet.add(folderPath);
		this.expandedFolders = newSet;
	}
	render() {
		const effectiveLayoutMode = this.isMobile ? "full" : this.layoutMode;
		const isReadingFull = effectiveLayoutMode === "full" && this.selectedMessage !== null;
		return b`
      <alps-initial-loader ?hidden=${!this.showInitialLoader}></alps-initial-loader>
      <app-header 
        .username=${this.username}
        .isMobile=${this.isMobile}
        .currentMailbox=${this.currentMailbox}
        .searchQuery=${this.filterQuery}
        .scrolled=${this.listScrolled}
        @toggle-sidebar=${() => this.mobileSidebarOpen = !this.mobileSidebarOpen}
        @compose=${() => this.composeStore.openComposer()}
        @search-submit=${(e) => {
			const newFilter = e.detail.value;
			const mailbox = e.detail.global ? "*" : this.currentMailbox;
			this.updateUrl(mailbox, 0, null, newFilter);
		}}
      ></app-header>
      <div class="app-container layout-${effectiveLayoutMode} ${isReadingFull ? "reading" : ""} ${this.isPaneDragging || this.isSidebarDragging ? "dragging" : ""} ${this.sidebarCollapsed && !this.isMobile ? "collapsed" : ""} ${this.isMobile ? "mobile-view" : ""} ${this.suppressSidebarHover ? "suppress-sidebar-hover" : ""}" style="${!this.sidebarCollapsed && !this.isMobile ? `--sidebar-width: ${this.sidebarWidth}px;` : ""}">
        <alps-sidebar 
          class="${this.isMobile ? "mobile-sidebar" : "desktop-sidebar"} ${this.mobileSidebarOpen ? "open" : ""}"
          .isMobile=${this.isMobile}
          .isOpen=${this.mobileSidebarOpen}
          .isHovered=${this.isSidebarHovered}
          .suppressHover=${this.suppressSidebarHover}
          .collapsed=${this.sidebarCollapsed && !this.isMobile}
          .width=${this.sidebarWidth}
          @sidebar-resize=${(e) => {
			const newWidth = e.detail.newWidth;
			if (newWidth < SIDEBAR_COLLAPSE_THRESHOLD) {
				if (!this.sidebarCollapsed) this.settingsStore.updateSettings({ sidebarCollapsed: true });
				this.sidebarWidth = SIDEBAR_WIDTH_DEFAULT;
			} else {
				if (this.sidebarCollapsed) this.settingsStore.updateSettings({ sidebarCollapsed: false });
				this.sidebarWidth = Math.min(Math.max(newWidth, SIDEBAR_WIDTH_MIN), SIDEBAR_WIDTH_MAX);
				this.resizerPositionX = Math.max(this.resizerPositionX, this.sidebarWidth + MESSAGE_LIST_WIDTH_MIN);
			}
		}}
          @drag-start=${() => this.isSidebarDragging = true}
          @drag-end=${() => this.isSidebarDragging = false}
          @toggle-collapse=${() => this.settingsStore.updateSettings({ sidebarCollapsed: !this.sidebarCollapsed })}
          @close-sidebar=${() => this.mobileSidebarOpen = false}
          @mouseenter=${() => {
			if (this.hoverTimeout) {
				clearTimeout(this.hoverTimeout);
				this.hoverTimeout = null;
			}
			this.isSidebarHovered = true;
			this.suppressSidebarHover = false;
		}}
          @mouseleave=${() => {
			this.hoverTimeout = setTimeout(() => {
				this.isSidebarHovered = false;
			}, 300);
		}}
        >
          <alps-folder-list
            .mailboxes=${this.mailboxes}
            .currentMailbox=${this.currentMailbox}
            .expandedFolders=${this.expandedFolders}
            .layoutMode=${effectiveLayoutMode}
            .syncing=${this.isSyncing}
            ?collapsed=${this.sidebarCollapsed && !this.isMobile && !this.isSidebarHovered}
            @select-mailbox=${(e) => {
			if (this.currentMailbox === e.detail.name) {
				this.currentPage = 0;
				this.selectedMessage = null;
				this.filterQuery = "";
				this.loadingMessages = true;
				this.updateUrl(e.detail.name, 0, null);
				messageSync.fetch(this.currentMailbox, this.currentPage, this.filterQuery, false);
			} else {
				this.loadingMessages = true;
				this.filterQuery = "";
				this.selectedUids = /* @__PURE__ */ new Set();
				this.updateUrl(e.detail.name, 0, null);
			}
			if (this.sidebarCollapsed && !this.isMobile) this.suppressSidebarHover = true;
			if (this.isMobile) this.mobileSidebarOpen = false;
		}}
            @toggle-folder=${(e) => this.toggleFolder(e.detail.folderName, null)}
            @expand-folder=${(e) => {
			const newSet = new Set(this.expandedFolders);
			newSet.add(e.detail.folderName);
			this.expandedFolders = newSet;
		}}
            @compose=${() => {
			this.composeStore.openComposer();
			if (this.isMobile) this.mobileSidebarOpen = false;
		}}
            @toast=${(e) => this.showGlobalToast(e.detail.message, e.detail.actionLabel, e.detail.actionFn, e.detail.duration)}
          ></alps-folder-list>
          <alps-icon-btn 
            slot="footer-actions"
            class="new-folder-btn"
            icon="folderPlus"
            title="${this.i18nStore?.t("folderList.createFolder")}"
            @click=${this.openFolderPrompt}
            style="--btn-padding: 8px; --icon-size: 20px;"
          ></alps-icon-btn>
        </alps-sidebar>
        <div class="main-view">
          <div class="pane message-list-pane" style="position: relative; ${effectiveLayoutMode === "vertical" ? `width: ${this.effectiveListWidth}px; flex: none; ${this.isPaneDragging || this.isSidebarDragging ? "" : "transition: width 0.2s;"}` : effectiveLayoutMode === "horizontal" ? `height: ${this.listHeight}px; flex: none;` : ""}">

            <alps-message-list
              .messages=${this.messages}
              .currentMailbox=${this.currentMailbox}
              .currentMailboxRole=${mailboxRoleByName(this.currentMailbox, this.mailboxes) || ""}
              .sidebarCollapsed=${this.sidebarCollapsed && !this.isMobile}
              .loading=${this.loadingMessages}
              .selectedMessage=${this.selectedMessage}
              .selectedMessages=${this.selectedUids}
              .layoutMode=${effectiveLayoutMode}
              .isMobile=${this.isMobile}
              .currentPage=${this.currentPage}
              .totalMessages=${this.totalMessages}
              .messagesPerPage=${this.messagesPerPage}
              .densityMode=${this.densityMode}
              .filterQuery=${this.filterQuery}
              .sortOrder=${this.sortOrder}
              .syncing=${this.isSyncing}
              @refresh=${() => {
			this.currentPage = 0;
			messageSync.fetch(this.currentMailbox, this.currentPage, this.filterQuery, true);
		}}
              @toggle-sidebar=${() => this.mobileSidebarOpen = !this.mobileSidebarOpen}
              @compose=${() => this.composeStore.openComposer()}
              @select-message=${(e) => this.selectMessage(e.detail.message)}
              @change-page=${(e) => this.updateUrl(this.currentMailbox, e.detail.page, this.targetUid)}
              @list-scrolled=${(e) => this.listScrolled = e.detail.scrolled}
              @toggle-sort=${async () => {
			const newOrder = this.sortOrder === "asc" ? "desc" : "asc";
			this.messages = [];
			this.loadingMessages = true;
			await this.settingsStore.updateSettings({ sortOrder: newOrder });
			this.currentPage = 0;
			messageSync.fetch(this.currentMailbox, this.currentPage, this.filterQuery, false);
		}}
              @toggle-filter-starred=${() => {
			const newFilter = this.filterQuery === "is:starred" ? "" : "is:starred";
			this.updateUrl(this.currentMailbox, 0, null, newFilter);
		}}
              @toggle-filter-unread=${() => {
			const newFilter = this.filterQuery === "is:unread" ? "" : "is:unread";
			this.updateUrl(this.currentMailbox, 0, null, newFilter);
		}}
              @clear-search=${() => {
			const targetMailbox = this.currentMailbox === "*" ? FOLDER_INBOX : this.currentMailbox;
			this.updateUrl(targetMailbox, 0, null, "");
		}}
              @search-submit=${(e) => {
			const newFilter = e.detail.value;
			const mailbox = e.detail.global ? "*" : this.currentMailbox;
			this.updateUrl(mailbox, 0, null, newFilter);
		}}
              @selection-changed=${(e) => this.selectedUids = e.detail.selectedUids}
              @toggle-star-message=${this._handleListToggleStar}
            >
              <div slot="mobile-bulk-actions" class="mobile-bulk-actions-container">
                <alps-icon-btn title=${this.i18nStore?.t("general.cancel") || "Cancel"} @click=${() => {
			this.selectedUids = /* @__PURE__ */ new Set();
			this.requestUpdate();
		}} icon="arrowLeft"></alps-icon-btn>
                <span class="mobile-bulk-actions-count">${this.selectedUids.size}</span>
                ${![
			"trash",
			"drafts",
			"archive"
		].includes(this.currentMailbox.toLowerCase()) ? b`
                  <alps-icon-btn title=${this.i18nStore?.t("messageReader.archive")} @click=${() => this._handleReaderAction(new CustomEvent("action", { detail: { action: "archive" } }))} icon="archiveBox"></alps-icon-btn>
                ` : ""}
                <alps-icon-btn title=${this.i18nStore?.t("messageReader.delete")} @click=${() => this._handleReaderAction(new CustomEvent("action", { detail: { action: "delete" } }))} icon="trash"></alps-icon-btn>
                <div class="header-divider"></div>
                <alps-icon-btn title=${this.allSelectedUnread ? this.i18nStore?.t("messageReader.markRead") : this.i18nStore?.t("messageReader.markUnread")} @click=${() => this._handleReaderAction(new CustomEvent("action", { detail: { action: "markUnread" } }))} icon=${this.allSelectedUnread ? "envelopeOpen" : "envelopeUnread"}></alps-icon-btn>
                <alps-icon-btn title=${this.i18nStore?.t("messageReader.star")} @click=${() => this._handleReaderAction(new CustomEvent("action", { detail: { action: "star" } }))} icon=${this.allSelectedStarred ? "starFourFill" : "starFour"}></alps-icon-btn>
                <div class="header-divider"></div>
                <alps-folder-selector-popup
                  .mailboxes=${this.mailboxes}
                  .currentMailbox=${this.currentMailbox}
                  @folder-selected=${(e) => this._handleReaderAction(new CustomEvent("action", { detail: {
			action: e.detail.isMove ? "moveTo" : "copyTo",
			folder: e.detail.folderName
		} }))}
                >
                  <alps-icon-btn slot="trigger" title=${this.i18nStore?.t("messageReader.moveTo")} icon="folderOpen"></alps-icon-btn>
                </alps-folder-selector-popup>
              </div>
            </alps-message-list>
          </div>
          ${effectiveLayoutMode !== "full" ? b`
            <div class="resizer ${this.isPaneDragging ? "dragging" : ""}" @mousedown=${this.startResize}></div>
          ` : ""}
          <div class="pane message-reader-pane">
            <alps-message-reader
              .mailboxes=${this.mailboxes}
              .mailbox=${this.currentMailbox}
              .message=${this.selectedMessage}
              .messages=${this.messages}
              .layoutMode=${effectiveLayoutMode}
              .selectedUids=${this.selectedUids}
              .allSelectedStarred=${this.allSelectedStarred}
              .allSelectedUnread=${this.allSelectedUnread}
              .commonTags=${this.commonSelectedTags}
              .bulkProcessing=${this.bulkProcessing}
              @close=${() => {
			this.updateUrl(this.currentMailbox, this.currentPage, null);
		}}
              @action=${this._handleReaderAction}
              @message-flags-changed=${(e) => this.updateLocalMessageFlags([e.detail.uid], e.detail.flag, e.detail.action)}
            ></alps-message-reader>
          </div>
        </div>
      </div>
      ${this.showDeleteConfirm ? b`
        <ui-confirm
          title="${this.i18nStore?.t("mailboxPage.permanentlyDelete")}"
          message=${this.pendingDeleteDetails?.isBulk ? this.i18nStore?.t("messageReader.deleteConfirmMultiple") : this.i18nStore?.t("messageReader.deleteConfirmSingle")}
          confirmText=${this.i18nStore?.t("mailboxPage.deletePermanently")}
          cancelText=${this.i18nStore?.t("general.cancel")}
          .isDanger=${true}
          @confirm=${this._confirmDelete}
          @cancel=${this._cancelDelete}
        ></ui-confirm>
      ` : ""}
    `;
	}
};
__decorate([c({ context: composeContext })], MailboxPage.prototype, "composeStore", void 0);
__decorate([c({ context: settingsContext })], MailboxPage.prototype, "settingsStore", void 0);
__decorate([c({ context: i18nContext })], MailboxPage.prototype, "i18nStore", void 0);
__decorate([r()], MailboxPage.prototype, "showDeleteConfirm", void 0);
__decorate([r()], MailboxPage.prototype, "pendingDeleteDetails", void 0);
__decorate([r()], MailboxPage.prototype, "mailboxes", void 0);
__decorate([r()], MailboxPage.prototype, "messages", void 0);
__decorate([r()], MailboxPage.prototype, "currentMailbox", void 0);
__decorate([r()], MailboxPage.prototype, "loadingMessages", void 0);
__decorate([r()], MailboxPage.prototype, "showInitialLoader", void 0);
__decorate([r()], MailboxPage.prototype, "selectedMessage", void 0);
__decorate([r()], MailboxPage.prototype, "selectedUids", void 0);
__decorate([r()], MailboxPage.prototype, "layoutMode", void 0);
__decorate([r()], MailboxPage.prototype, "filterQuery", void 0);
__decorate([r()], MailboxPage.prototype, "expandedFolders", void 0);
__decorate([r()], MailboxPage.prototype, "username", void 0);
__decorate([r()], MailboxPage.prototype, "currentPage", void 0);
__decorate([r()], MailboxPage.prototype, "totalMessages", void 0);
__decorate([r()], MailboxPage.prototype, "messagesPerPage", void 0);
__decorate([r()], MailboxPage.prototype, "resizerPositionX", void 0);
__decorate([r()], MailboxPage.prototype, "listHeight", void 0);
__decorate([r()], MailboxPage.prototype, "isSidebarDragging", void 0);
__decorate([r()], MailboxPage.prototype, "isPaneDragging", void 0);
__decorate([r()], MailboxPage.prototype, "sidebarWidth", void 0);
__decorate([r()], MailboxPage.prototype, "isSidebarHovered", void 0);
__decorate([r()], MailboxPage.prototype, "densityMode", void 0);
__decorate([r()], MailboxPage.prototype, "isSyncing", void 0);
__decorate([r()], MailboxPage.prototype, "sidebarCollapsed", void 0);
__decorate([r()], MailboxPage.prototype, "suppressSidebarHover", void 0);
__decorate([r()], MailboxPage.prototype, "sortOrder", void 0);
__decorate([r()], MailboxPage.prototype, "listScrolled", void 0);
__decorate([r()], MailboxPage.prototype, "targetUid", void 0);
__decorate([r()], MailboxPage.prototype, "isMobile", void 0);
__decorate([r()], MailboxPage.prototype, "mobileSidebarOpen", void 0);
__decorate([r()], MailboxPage.prototype, "bulkProcessing", void 0);
__decorate([r()], MailboxPage.prototype, "computedMinListWidth", void 0);
MailboxPage = __decorate([t("mailbox-page")], MailboxPage);
//#endregion
//#region ../plugins/carddav/frontend/contacts-page.ts
var ContactsPage = class ContactsPage extends i {
	constructor(..._args) {
		super(..._args);
		this.contacts = [];
		this.sortOrder = "asc";
		this.showOnlyStarred = false;
		this.loading = true;
		this.isSpinning = false;
		this.showInitialLoader = !window.alpsAppLoaded;
		this.selectedContact = null;
		this.filterQuery = "";
		this.isEditing = false;
		this.saving = false;
		this.selectedCategory = "";
		this.showCreatePrompt = false;
		this.showDeleteConfirm = false;
		this.addedCategories = [];
		this.sidebarWidth = 250;
		this.listWidth = 380;
		this.sidebarCollapsed = false;
		this.isSidebarHovered = false;
		this.isMobile = window.innerWidth <= 768;
		this.mobileSidebarOpen = false;
		this.hoverTimeout = null;
		this.suppressSidebarHover = false;
		this.isSidebarDragging = false;
		this.isPaneDragging = false;
		this.densityMode = "compact";
		this.selectedContacts = /* @__PURE__ */ new Set();
		this.listScrolled = false;
		this.categoryToRename = null;
		this.categoryToDelete = null;
		this.syncIntervalTimer = null;
		this._handleSettingsChange = () => {
			if (this.settingsStore) {
				const state = this.settingsStore.getState();
				this.sidebarCollapsed = state.sidebarCollapsed;
				this.densityMode = state.densityMode || "compact";
				if (this.syncIntervalTimer) {
					clearInterval(this.syncIntervalTimer);
					this.syncIntervalTimer = null;
				}
				if (state.checkMailInterval && state.checkMailInterval > 0) {
					const ms = state.checkMailInterval * 60 * 1e3;
					this.syncIntervalTimer = setInterval(() => {
						this.fetchContacts();
					}, ms);
				}
			}
		};
		this._handleWindowResize = () => {
			this.isMobile = window.innerWidth <= 768;
		};
		this._handleHashChange = () => {
			this.contacts = this.contacts.filter((c) => !c.isTemporary);
			const match = window.location.hash.match(/^#\/contacts\/?([^\/]*)\/?(.*)$/);
			if (match) {
				const catParam = match[1] ? decodeURIComponent(match[1]) : "";
				const uidParam = match[2] ? decodeURIComponent(match[2]) : "";
				const newCategory = catParam === "all" || !catParam ? "" : catParam;
				if (this.selectedCategory !== newCategory) {
					this.selectedCategory = newCategory;
					this.selectedContacts = /* @__PURE__ */ new Set();
					if (this.isMobile) this.mobileSidebarOpen = false;
				}
				if (uidParam) {
					if ((this.selectedContact?.uid?.replace(/^urn:uuid:/, "") || this.selectedContact?.path) !== uidParam) {
						if (this.contacts.length === 0) return;
						const contact = this.contacts.find((c) => {
							return (c.uid?.replace(/^urn:uuid:/, "") || c.path) === uidParam;
						});
						if (contact) this.selectContact(contact, false);
					}
				} else {
					this.selectedContact = null;
					this.isEditing = false;
				}
			} else {
				this.selectedContact = null;
				this.isEditing = false;
			}
		};
		this.startResize = (e) => {
			e.preventDefault();
			this.isPaneDragging = true;
			const startX = e.clientX;
			const startWidth = this.listWidth;
			const onMouseMove = (moveEvent) => {
				const delta = moveEvent.clientX - startX;
				this.listWidth = Math.max(250, Math.min(800, startWidth + delta));
			};
			const onMouseUp = () => {
				this.isPaneDragging = false;
				window.removeEventListener("mousemove", onMouseMove);
				window.removeEventListener("mouseup", onMouseUp);
			};
			window.addEventListener("mousemove", onMouseMove);
			window.addEventListener("mouseup", onMouseUp);
		};
	}
	static {
		this.styles = [
			MailboxPage.styles,
			MessageList.styles,
			popupStyles,
			i$1`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100vw;
      background-color: var(--bg-primary, #ffffff);
      color: var(--text-primary);
      overflow: hidden;
    }
    .folder-name {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .contact-list-pane {
      background: var(--bg-primary, #ffffff);
      display: flex;
      flex-direction: column;
      position: relative;
      border-right: 1px solid var(--border-color, #e5e7eb);
    }
    .resizer {
      background: transparent;
      position: relative;
      z-index: 25;
      flex-shrink: 0;
      width: 4px;
      margin: 0 -2px;
      cursor: col-resize;
    }
    .resizer::after {
      content: '';
      position: absolute;
      background: transparent;
      transition: background 0.2s;
      width: 3px;
      top: 0;
      bottom: 0;
      left: 1px;
    }
    .resizer:hover, .resizer.dragging {
      z-index: 9999;
    }
    .resizer:hover::after, .resizer.dragging::after {
      background: var(--accent-color, #005A9E);
      width: 3px;
      left: 0;
    }
    .app-container.collapsed .contact-list-pane {
      box-shadow: rgba(95, 95, 95, 0.1) -4px 0 4px -2px;
      z-index: 25;
      border-left: 1px solid var(--border-color, #e5e7eb);
    }
    .contact-reader-pane {
      background: var(--bg-primary, #ffffff);
      padding: 0;
      overflow-y: auto;
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .contact-reader-pane alps-contact-view {
      flex: 1;
      width: 100%;
    }
    
    .app-container.mobile-view.reading .contact-list-pane {
      display: none !important;
    }
    .app-container.mobile-view:not(.reading) .contact-reader-pane {
      display: none !important;
    }

    .empty-state {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--text-muted, #9ca3af);
    }
    .contact-detail-header {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .contact-detail-email {
      font-size: 16px;
      color: var(--text-secondary, #4b5563);
      margin-bottom: 24px;
    }
    .contact-actions {
      display: flex;
      gap: 12px;
      margin-top: 24px;
    }
    .edit-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 400px;
    }
    .edit-textarea {
      width: 100%;
      min-height: 80px;
      padding: 8px 12px;
      border: 1px solid var(--border-color, #d1d5db);
      border-radius: 6px;
      font-family: inherit;
      font-size: 14px;
      resize: vertical;
      box-sizing: border-box;
    }
    .contact-details-grid {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 24px;
    }
    .detail-row {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .detail-label {
      font-size: 12px;
      font-weight: 600;
      color: var(--text-secondary, #6b7280);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .detail-value {
      font-size: 14px;
      color: var(--text-primary);
      white-space: pre-wrap;
    }

  `
		];
	}
	updated(changedProperties) {
		super.updated(changedProperties);
		if (changedProperties.has("densityMode")) {
			const mode = this.settingsStore?.getState().densityMode || "normal";
			this.dataset.density = mode;
			const messageListPane = this.shadowRoot?.querySelector(".contact-list-pane");
			if (messageListPane) {
				messageListPane.classList.remove("density-loose", "density-normal", "density-compact", "density-ultra-compact");
				messageListPane.classList.add(`density-${mode}`);
			}
		}
		if (changedProperties.has("loading") && this.loading) this.isSpinning = true;
	}
	handleSpinIteration() {
		if (!this.loading) this.isSpinning = false;
	}
	connectedCallback() {
		super.connectedCallback();
		this.showInitialLoader = !window.alpsAppLoaded;
		this.classList.add("density-compact");
		const savedCats = localStorage.getItem("contacts_categories_cache");
		if (savedCats) try {
			this.addedCategories = JSON.parse(savedCats);
		} catch (e) {}
		this.fetchContacts();
		window.addEventListener("resize", this._handleWindowResize);
		window.addEventListener("hashchange", this._handleHashChange);
		if (this.settingsStore) {
			this.settingsStore.addEventListener("change", this._handleSettingsChange);
			this._handleSettingsChange();
		}
		setTimeout(() => this._handleHashChange(), 0);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		window.removeEventListener("resize", this._handleWindowResize);
		window.removeEventListener("hashchange", this._handleHashChange);
		if (this.settingsStore) this.settingsStore.removeEventListener("change", this._handleSettingsChange);
		if (this.syncIntervalTimer) {
			clearInterval(this.syncIntervalTimer);
			this.syncIntervalTimer = null;
		}
	}
	get uniqueCategories() {
		const cats = new Set(this.addedCategories);
		for (const c of this.contacts) if (c.categories) for (const cat of c.categories) cats.add(cat);
		return Array.from(cats).sort((a, b) => a.localeCompare(b));
	}
	get username() {
		return this.settingsStore?.getState().loginUsername || "";
	}
	async fetchContacts() {
		this.loading = true;
		try {
			const data = await contactsService.fetchContacts(this.filterQuery);
			this.contacts = data.contacts || [];
			this._handleHashChange();
		} catch (e) {
			console.error("Failed to fetch contacts", e);
		} finally {
			this.loading = false;
			if (this.showInitialLoader) setTimeout(() => {
				this.showInitialLoader = false;
				window.alpsAppLoaded = true;
			}, 100);
		}
	}
	async selectContact(contact, updateHash = true) {
		if (contact.isTemporary) {
			this.selectedContact = contact;
			this.isEditing = true;
			return;
		}
		if (updateHash) {
			const catUrl = this.selectedCategory ? encodeURIComponent(this.selectedCategory) : "all";
			const cleanUid = contact.uid?.replace(/^urn:uuid:/, "") || contact.path;
			window.location.hash = `/contacts/${catUrl}/${encodeURIComponent(cleanUid)}`;
			return;
		}
		if (this.selectedContacts.size > 0) this.selectedContacts = /* @__PURE__ */ new Set();
		if (this.selectedContact?.path === contact.path) return;
		this.selectedContact = { ...contact };
		this.isEditing = false;
		try {
			const data = await contactsService.fetchContact(contact.path);
			if (this.selectedContact?.path === data.path) this.selectedContact = data;
		} catch (e) {
			console.error("Failed to fetch contact details", e);
		}
	}
	get allSelectedStarred() {
		if (this.selectedContacts.size === 0) return false;
		for (const path of this.selectedContacts) {
			const contact = this.contacts.find((c) => c.path === path);
			if (!contact || !contact.categories?.includes("Favorites")) return false;
		}
		return true;
	}
	async handleToggleStar(e, contact) {
		e.stopPropagation();
		if (contact.isTemporary) return;
		let categories = contact.categories ? [...contact.categories] : [];
		const isStarred = categories.includes(CATEGORY_FAVORITES);
		if (isStarred) categories = categories.filter((c) => c !== CATEGORY_FAVORITES);
		else categories.push(CATEGORY_FAVORITES);
		this.contacts = this.contacts.map((c) => c.path === contact.path ? {
			...c,
			categories
		} : c);
		try {
			const payload = {
				name: contact.name || "",
				email: contact.email || "",
				phone: contact.phone || "",
				organization: contact.organization || "",
				address: contact.address || "",
				birthday: contact.birthday || "",
				note: contact.note || "",
				url: contact.url || "",
				nickname: contact.nickname || "",
				categories
			};
			await contactsService.updateContact(contact.path, payload);
			if (this.selectedContact?.path === contact.path) this.selectedContact = {
				...this.selectedContact,
				categories
			};
		} catch (err) {
			console.error("Failed to toggle star:", err);
			if (isStarred) contact.categories.push(CATEGORY_FAVORITES);
			else contact.categories = contact.categories.filter((c) => c !== CATEGORY_FAVORITES);
			this.requestUpdate();
		}
	}
	handleSelectAll(e) {
		const customEvent = e;
		if (customEvent.detail ? customEvent.detail.checked : e.target.checked) {
			const filteredContacts = this.contacts.filter((c) => {
				if (this.selectedCategory) {
					if (!c.categories || !c.categories.includes(this.selectedCategory)) return false;
				}
				return true;
			});
			this.selectedContacts = new Set(filteredContacts.map((c) => c.path));
		} else this.selectedContacts = /* @__PURE__ */ new Set();
	}
	handleSelectContact(e, path) {
		e.stopPropagation();
		const newSet = new Set(this.selectedContacts);
		if (newSet.has(path)) newSet.delete(path);
		else newSet.add(path);
		this.selectedContacts = newSet;
	}
	handleCreateCategorySubmit(e) {
		const name = e.detail.name?.trim();
		if (name) {
			if (!this.addedCategories.includes(name)) {
				this.addedCategories = [...this.addedCategories, name];
				localStorage.setItem("contacts_categories_cache", JSON.stringify(this.addedCategories));
			}
		}
		this.showCreatePrompt = false;
	}
	handleCreateNew() {
		this.selectedContacts = /* @__PURE__ */ new Set();
		const newContact = {
			name: this.i18nStore?.t("contacts.unnamedContact"),
			categories: this.selectedCategory ? [this.selectedCategory] : [],
			isTemporary: true
		};
		this.contacts = this.contacts.filter((c) => !c.isTemporary);
		this.contacts = [newContact, ...this.contacts];
		this.selectedContact = newContact;
		this.isEditing = true;
	}
	async handleRenameCategorySubmit(e) {
		const newName = e.detail.name?.trim();
		if (!newName || !this.categoryToRename || newName === this.categoryToRename) {
			this.categoryToRename = null;
			return;
		}
		const oldName = this.categoryToRename;
		this.categoryToRename = null;
		if (this.addedCategories.includes(oldName)) {
			this.addedCategories = this.addedCategories.map((c) => c === oldName ? newName : c);
			localStorage.setItem("contacts_categories_cache", JSON.stringify(this.addedCategories));
		}
		if (this.selectedCategory === oldName) {
			this.selectedCategory = newName;
			window.location.hash = `/contacts/${encodeURIComponent(newName)}`;
		}
		const contactsToUpdate = this.contacts.filter((c) => c.categories?.includes(oldName));
		if (contactsToUpdate.length > 0) {
			this.saving = true;
			try {
				const contactsToModify = contactsToUpdate.map((contact) => {
					const categories = contact.categories.map((c) => c === oldName ? newName : c);
					return {
						...contact,
						categories
					};
				});
				await contactsService.bulkUpdateContacts(contactsToModify);
				this.fetchContacts();
			} catch (e) {
				console.error("Error renaming category", e);
			} finally {
				this.saving = false;
			}
		}
	}
	async handleDeleteCategorySubmit() {
		if (!this.categoryToDelete) return;
		const oldName = this.categoryToDelete;
		this.categoryToDelete = null;
		if (this.addedCategories.includes(oldName)) {
			this.addedCategories = this.addedCategories.filter((c) => c !== oldName);
			localStorage.setItem("contacts_categories_cache", JSON.stringify(this.addedCategories));
		}
		if (this.selectedCategory === oldName) {
			this.selectedCategory = "";
			window.location.hash = `/contacts/all`;
		}
		const contactsToUpdate = this.contacts.filter((c) => c.categories?.includes(oldName));
		if (contactsToUpdate.length > 0) {
			this.saving = true;
			try {
				const contactsToModify = contactsToUpdate.map((contact) => {
					const categories = contact.categories.filter((c) => c !== oldName);
					return {
						...contact,
						categories
					};
				});
				await contactsService.bulkUpdateContacts(contactsToModify);
				this.fetchContacts();
			} catch (e) {
				console.error("Error deleting category", e);
			} finally {
				this.saving = false;
			}
		}
	}
	handleEdit() {
		this.isEditing = true;
	}
	handleCancelEdit() {
		this.isEditing = false;
		if (this.selectedContact?.isTemporary) {
			this.selectedContact = null;
			this.contacts = this.contacts.filter((c) => !c.isTemporary);
			if (!this.selectedCategory) window.location.hash = `/contacts/all`;
		}
	}
	async handleSave(payload) {
		this.saving = true;
		try {
			if (payload.categories && typeof payload.categories === "string") payload.categories = payload.categories.split(",").map((c) => c.trim()).filter((c) => c);
			else payload.categories = [];
			let data;
			if (this.selectedContact && !this.selectedContact.isTemporary) data = await contactsService.updateContact(this.selectedContact.path, payload);
			else data = await contactsService.createContact(payload);
			const savedContact = {
				...payload,
				path: data.path || (this.selectedContact && !this.selectedContact.isTemporary ? this.selectedContact.path : "")
			};
			const contactIndex = this.contacts.findIndex((c) => this.selectedContact && (c.path === this.selectedContact.path || c.isTemporary && this.selectedContact.isTemporary));
			if (contactIndex > -1) {
				this.contacts[contactIndex] = {
					...this.contacts[contactIndex],
					...savedContact
				};
				delete this.contacts[contactIndex].isTemporary;
				this.contacts = [...this.contacts];
			} else this.contacts = [savedContact, ...this.contacts];
			this.selectedContact = {
				...this.selectedContact,
				...savedContact
			};
			delete this.selectedContact.isTemporary;
		} catch (e) {
			console.error("Error saving contact", e);
		} finally {
			this.saving = false;
		}
	}
	handleSaveEvent(e) {
		this.handleSave(e.detail);
	}
	async handleToggleStarEvent() {
		const pathsToUpdate = this.selectedContacts.size > 1 ? Array.from(this.selectedContacts) : [this.selectedContact?.path].filter(Boolean);
		if (pathsToUpdate.length === 0) return;
		const isStarred = pathsToUpdate.length > 1 ? this.allSelectedStarred : this.contacts.find((c) => c.path === pathsToUpdate[0])?.categories?.includes("Favorites") || false;
		this.saving = true;
		try {
			const contactsToModify = pathsToUpdate.map((path) => {
				const contactIndex = this.contacts.findIndex((c) => c.path === path);
				if (contactIndex === -1) return;
				const contact = this.contacts[contactIndex];
				let categories = contact.categories ? [...contact.categories] : [];
				if (isStarred) categories = categories.filter((c) => c !== CATEGORY_FAVORITES);
				else if (!categories.includes("Favorites")) categories.push(CATEGORY_FAVORITES);
				this.contacts[contactIndex] = {
					...contact,
					categories
				};
				if (this.selectedContact?.path === path) this.selectedContact = {
					...this.selectedContact,
					categories
				};
				return {
					...contact,
					categories
				};
			}).filter(Boolean);
			this.contacts = [...this.contacts];
			await contactsService.bulkUpdateContacts(contactsToModify);
		} catch (e) {
			console.error("Error toggling star", e);
		} finally {
			this.saving = false;
		}
	}
	handleDelete() {
		this.showDeleteConfirm = true;
	}
	async confirmDelete() {
		this.showDeleteConfirm = false;
		this.saving = true;
		try {
			const pathsToDelete = this.selectedContacts.size > 1 ? Array.from(this.selectedContacts) : [this.selectedContact?.path].filter(Boolean);
			await contactsService.bulkDeleteContacts(pathsToDelete);
			this.selectedContact = null;
			if (this.selectedContacts.size > 1) this.selectedContacts = /* @__PURE__ */ new Set();
			this.isEditing = false;
			this.fetchContacts();
		} catch (e) {
			console.error("Error deleting contacts", e);
			alert("Failed to delete one or more contacts");
		} finally {
			this.saving = false;
		}
	}
	async handleUpdateCategories(e) {
		let cat = e.detail.category;
		if (typeof cat === "string") cat = cat.trim();
		if (cat && !this.addedCategories.includes(cat)) {
			this.addedCategories = [...this.addedCategories, cat];
			localStorage.setItem("contacts_categories_cache", JSON.stringify(this.addedCategories));
		}
		const pathsToUpdate = this.selectedContacts.size > 1 ? Array.from(this.selectedContacts) : [this.selectedContact?.path].filter(Boolean);
		if (pathsToUpdate.length === 0) return;
		this.saving = true;
		try {
			const contactsToModify = pathsToUpdate.map((path) => {
				const contactIndex = this.contacts.findIndex((c) => c.path === path);
				if (contactIndex === -1) return;
				const contact = this.contacts[contactIndex];
				let categories = contact.categories ? [...contact.categories] : [];
				if (cat === "") categories = [];
				else if (categories.includes(cat)) categories = categories.filter((c) => c !== cat);
				else categories.push(cat);
				this.contacts[contactIndex] = {
					...contact,
					categories
				};
				if (this.selectedContact?.path === path) this.selectedContact = {
					...this.selectedContact,
					categories
				};
				return {
					...contact,
					categories
				};
			}).filter(Boolean);
			await contactsService.bulkUpdateContacts(contactsToModify);
			this.contacts = [...this.contacts];
			if (this.selectedContact && this.selectedContacts.size <= 1 && this.selectedCategory !== "") {
				if (!this.selectedContact.categories?.includes(this.selectedCategory)) {
					const uid = this.selectedContact.uid?.replace(/^urn:uuid:/, "") || this.selectedContact.path;
					if (uid) window.location.hash = `#/contacts/all/${encodeURIComponent(uid)}`;
				}
			}
			if (this.selectedCategory !== "" && this.selectedCategory !== "All Contacts") this.fetchContacts();
		} catch (e) {
			console.error("Error updating categories", e);
		} finally {
			this.saving = false;
		}
	}
	render() {
		return b`
      ${this.showDeleteConfirm ? b`
        <ui-confirm
          title="${this.i18nStore?.t("contacts.deleteContact")}"
          message="${this.i18nStore?.t("contacts.deleteContactConfirm")}"
          confirmText="${this.i18nStore?.t("contacts.delete")}"
          isDanger
          @confirm=${this.confirmDelete}
          @cancel=${() => this.showDeleteConfirm = false}
        ></ui-confirm>
      ` : ""}
      <alps-initial-loader ?hidden=${!this.showInitialLoader}></alps-initial-loader>
      <app-header 
        currentTab="contacts"
        .username=${this.username}
        .isMobile=${this.isMobile}
        .searchQuery=${this.filterQuery}
        .scrolled=${this.listScrolled}
        @toggle-sidebar=${() => this.mobileSidebarOpen = !this.mobileSidebarOpen}
        @search-submit=${(e) => {
			this.filterQuery = e.detail.value;
			this.fetchContacts();
		}}
      ></app-header>
      <div class="app-container layout-vertical ${this.sidebarCollapsed && !this.isMobile ? "collapsed" : ""} ${this.isPaneDragging || this.isSidebarDragging ? "dragging" : ""} ${this.isMobile ? "mobile-view" : ""} ${this.suppressSidebarHover ? "suppress-sidebar-hover" : ""} ${this.isMobile && this.selectedContact ? "reading" : ""}" style="${!this.sidebarCollapsed && !this.isMobile ? `--sidebar-width: ${this.sidebarWidth}px;` : ""}">
        <alps-sidebar 
          class="${this.isMobile ? "mobile-sidebar" : "desktop-sidebar"} ${this.mobileSidebarOpen ? "open" : ""}"
          .isMobile=${this.isMobile}
          .isOpen=${this.mobileSidebarOpen}
          .isHovered=${this.isSidebarHovered}
          .suppressHover=${this.suppressSidebarHover}
          .width=${this.sidebarWidth}
          .collapsed=${this.sidebarCollapsed && !this.isMobile}
          @sidebar-resize=${(e) => {
			const newWidth = e.detail.newWidth;
			if (newWidth < 120) {
				if (!this.sidebarCollapsed) this.settingsStore?.updateSettings({ sidebarCollapsed: true });
				this.sidebarWidth = 250;
			} else {
				if (this.sidebarCollapsed) this.settingsStore?.updateSettings({ sidebarCollapsed: false });
				this.sidebarWidth = Math.min(Math.max(newWidth, 150), 500);
			}
		}}
          @drag-start=${() => this.isSidebarDragging = true}
          @drag-end=${() => this.isSidebarDragging = false}
          @toggle-collapse=${() => this.settingsStore?.updateSettings({ sidebarCollapsed: !this.sidebarCollapsed })}
          @close-sidebar=${() => this.mobileSidebarOpen = false}
          @mouseenter=${() => {
			if (this.hoverTimeout) {
				clearTimeout(this.hoverTimeout);
				this.hoverTimeout = null;
			}
			this.isSidebarHovered = true;
			this.suppressSidebarHover = false;
		}}
          @mouseleave=${() => {
			this.hoverTimeout = setTimeout(() => {
				this.isSidebarHovered = false;
			}, 300);
		}}
        >
          <alps-contacts-categories
            .contacts=${this.contacts}
            .uniqueCategories=${this.uniqueCategories}
            .selectedCategory=${this.selectedCategory}
            .filterQuery=${this.filterQuery}
            .sidebarCollapsed=${this.sidebarCollapsed}
            .isSidebarHovered=${this.isSidebarHovered}
            .suppressSidebarHover=${this.suppressSidebarHover}
            .isMobile=${this.isMobile}
            @create-contact=${this.handleCreateNew}
            @select-category=${(e) => {
			this.filterQuery = "";
			const cat = e.detail.category;
			if (cat === "All Contacts") window.location.hash = `/contacts/all`;
			else window.location.hash = `/contacts/${encodeURIComponent(cat)}`;
		}}
            @drag-start=${() => {
			this.isSidebarDragging = true;
			this.suppressSidebarHover = true;
		}}
            @drag-end=${() => {
			this.isSidebarDragging = false;
			if (this.isMobile) this.mobileSidebarOpen = false;
			else this.suppressSidebarHover = true;
		}}
            @rename-category=${(e) => {
			this.categoryToRename = e.detail.category;
		}}
            @delete-category=${(e) => {
			this.categoryToDelete = e.detail.category;
		}}
          ></alps-contacts-categories>
          
          <alps-icon-btn 
            slot="footer-actions"
            class="new-folder-btn"
            icon="folderPlus"
            title="${this.i18nStore?.t("contacts.createCategory")}"
            @click=${() => this.showCreatePrompt = true}
            style="--btn-padding: 8px; --icon-size: 20px;"
          ></alps-icon-btn>
        </alps-sidebar>
        <div class="main-view">
          <div class="contact-list-pane" style="width: ${this.isMobile ? "100%" : this.listWidth + "px"}; display: flex; flex-direction: column; flex-shrink: 0;">
            <alps-contacts-list
              .contacts=${this.contacts}
              .selectedCategory=${this.selectedCategory}
              .filterQuery=${this.filterQuery}
              .sortOrder=${this.sortOrder}
              .showOnlyStarred=${this.showOnlyStarred}
              .isMobile=${this.isMobile}
              .densityMode=${this.densityMode}
              .selectedContacts=${this.selectedContacts}
              .selectedContact=${this.selectedContact}
              .isSpinning=${this.isSpinning}
              .loading=${this.loading}
              .listScrolled=${this.listScrolled}
              @select-contact=${(e) => this.selectContact(e.detail.contact)}
              @toggle-star=${(e) => this.handleToggleStar(new Event(""), e.detail.contact)}
              @select-all=${this.handleSelectAll}
              @toggle-selection=${(e) => this.handleSelectContact(e.detail.event, e.detail.path)}
              @refresh=${() => this.fetchContacts()}
              @spin-iteration=${this.handleSpinIteration}
              @sort-toggle=${() => this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc"}
              @filter-star-toggle=${() => this.showOnlyStarred = !this.showOnlyStarred}
              @clear-search=${() => {
			this.filterQuery = "";
			this.fetchContacts();
			const appHeader = document.querySelector("app-header");
			if (appHeader) appHeader.shadowRoot?.querySelector("alps-input")?.shadowRoot?.querySelector("input")?.setAttribute("value", "");
		}}
              @list-scrolled=${(e) => this.listScrolled = e.detail.scrolled}
            ></alps-contacts-list>
          </div>
          ${!this.isMobile ? b`<div class="resizer ${this.isPaneDragging ? "dragging" : ""}" @mousedown=${this.startResize}></div>` : ""}
          <div class="contact-reader-pane" style="padding: 0; flex: 1;">
            <alps-contact-view
              .contact=${this.selectedContact}
              .selectedCount=${this.selectedContacts.size}
              .allSelectedStarred=${this.allSelectedStarred}
              .isEditing=${this.isEditing}
              .saving=${this.saving}
              .uniqueCategories=${this.uniqueCategories}
              .isMobile=${this.isMobile}
              @save=${this.handleSaveEvent}
              @delete=${this.handleDelete}
              @cancel-edit=${this.handleCancelEdit}
              @edit=${this.handleEdit}
              @toggle-star=${this.handleToggleStarEvent}
              @update-categories=${this.handleUpdateCategories}
              @list-scrolled=${(e) => this.listScrolled = e.detail.scrolled}
              @close=${() => {
			this.selectedContact = null;
			this.isEditing = false;
			window.location.hash = `/contacts/${encodeURIComponent(this.selectedCategory || "all")}`;
		}}
            ></alps-contact-view>
          </div>
        </div>
      </div>
      
      ${this.showCreatePrompt ? b`
        <ui-prompt
          title="${this.i18nStore?.t("contacts.createCategory")}"
          confirmText="${this.i18nStore?.t("contacts.create")}"
          .fields=${[{
			id: "name",
			label: this.i18nStore?.t("contacts.categoryName"),
			autofocus: true
		}]}
          @submit=${this.handleCreateCategorySubmit}
          @cancel=${() => this.showCreatePrompt = false}
        ></ui-prompt>
      ` : ""}

      ${this.categoryToRename !== null ? b`
        <ui-prompt
          title="${this.i18nStore?.t("contacts.renameCategory")}"
          confirmText="${this.i18nStore?.t("contacts.rename")}"
          .fields=${[{
			id: "name",
			label: this.i18nStore?.t("contacts.categoryName"),
			value: this.categoryToRename,
			autofocus: true
		}]}
          @submit=${this.handleRenameCategorySubmit}
          @cancel=${() => this.categoryToRename = null}
        ></ui-prompt>
      ` : ""}

      ${this.categoryToDelete !== null ? b`
        <ui-confirm
          title="${this.i18nStore?.t("contacts.deleteCategory")}"
          message="${this.i18nStore?.t("contacts.deleteCategoryConfirm", { category: this.categoryToDelete })}"
          confirmText="${this.i18nStore?.t("contacts.delete")}"
          isDanger
          @confirm=${this.handleDeleteCategorySubmit}
          @cancel=${() => this.categoryToDelete = null}
        ></ui-confirm>
      ` : ""}
    `;
	}
};
__decorate([c({ context: i18nContext })], ContactsPage.prototype, "i18nStore", void 0);
__decorate([c({ context: settingsContext })], ContactsPage.prototype, "settingsStore", void 0);
__decorate([r()], ContactsPage.prototype, "contacts", void 0);
__decorate([r()], ContactsPage.prototype, "sortOrder", void 0);
__decorate([r()], ContactsPage.prototype, "showOnlyStarred", void 0);
__decorate([r()], ContactsPage.prototype, "loading", void 0);
__decorate([r()], ContactsPage.prototype, "isSpinning", void 0);
__decorate([r()], ContactsPage.prototype, "showInitialLoader", void 0);
__decorate([r()], ContactsPage.prototype, "selectedContact", void 0);
__decorate([r()], ContactsPage.prototype, "filterQuery", void 0);
__decorate([r()], ContactsPage.prototype, "isEditing", void 0);
__decorate([r()], ContactsPage.prototype, "saving", void 0);
__decorate([r()], ContactsPage.prototype, "selectedCategory", void 0);
__decorate([r()], ContactsPage.prototype, "showCreatePrompt", void 0);
__decorate([r()], ContactsPage.prototype, "showDeleteConfirm", void 0);
__decorate([r()], ContactsPage.prototype, "addedCategories", void 0);
__decorate([r()], ContactsPage.prototype, "sidebarWidth", void 0);
__decorate([r()], ContactsPage.prototype, "listWidth", void 0);
__decorate([r()], ContactsPage.prototype, "sidebarCollapsed", void 0);
__decorate([r()], ContactsPage.prototype, "isSidebarHovered", void 0);
__decorate([r()], ContactsPage.prototype, "isMobile", void 0);
__decorate([r()], ContactsPage.prototype, "mobileSidebarOpen", void 0);
__decorate([r()], ContactsPage.prototype, "suppressSidebarHover", void 0);
__decorate([r()], ContactsPage.prototype, "isSidebarDragging", void 0);
__decorate([r()], ContactsPage.prototype, "isPaneDragging", void 0);
__decorate([r()], ContactsPage.prototype, "densityMode", void 0);
__decorate([r()], ContactsPage.prototype, "selectedContacts", void 0);
__decorate([r()], ContactsPage.prototype, "listScrolled", void 0);
__decorate([r()], ContactsPage.prototype, "categoryToRename", void 0);
__decorate([r()], ContactsPage.prototype, "categoryToDelete", void 0);
ContactsPage = __decorate([t("contacts-page")], ContactsPage);
//#endregion
//#region ../plugins/carddav/frontend/contact-view.ts
var AlpsContactView = class AlpsContactView extends i {
	constructor(..._args) {
		super(..._args);
		this.contact = null;
		this.isEditing = false;
		this.saving = false;
		this.uniqueCategories = [];
		this.isMobile = false;
		this.selectedCount = 0;
		this.allSelectedStarred = false;
		this.scrolled = false;
		this.editForm = {};
		this.isDirty = false;
		this.newCategoryName = "";
		this.saveTimeout = null;
	}
	handleAddCategory() {
		const name = this.newCategoryName.trim();
		if (name) {
			this.dispatchEvent(new CustomEvent("update-categories", {
				detail: { category: name },
				bubbles: true,
				composed: true
			}));
			this.newCategoryName = "";
			const popup = this.shadowRoot?.querySelector("alps-popup");
			if (popup) popup.close();
		}
	}
	static {
		this.styles = [popupStyles, i$1`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: var(--bg-primary, #ffffff);
    }
    
    .toolbar {
      padding: 0 16px;
      gap: 12px;
      background: var(--bg-primary, #fff);
      border-bottom: 1px solid var(--border-color, #e5e7eb);
      z-index: 10;
    }

    .toolbar-spacer {
      flex: 1;
    }

    .toolbar-separator {
      width: 1px;
      height: 20px;
      background: var(--border-color);
      margin: 0 8px;
    }
    
    .desktop-only {
      display: block;
    }
    @media (max-width: 768px) {
      .desktop-only {
        display: none !important;
      }
    }

    .content {
      flex: 1;
      padding: 24px;
      overflow-y: auto;
    }

    .empty-state {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--text-muted, #9ca3af);
    }

    .contact-detail-header {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 24px;
      text-align: center;
    }
    .contact-detail-email {
      font-size: 16px;
      color: var(--text-secondary, #4b5563);
      margin-bottom: 24px;
    }
    .edit-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 400px;
      width: 100%;
      margin: 0 auto;
    }
    .edit-textarea {
      width: 100%;
      min-height: 80px;
      padding: 8px 12px;
      border: 1px solid var(--border-color, #d1d5db);
      border-radius: 6px;
      font-family: inherit;
      font-size: 14px;
      resize: vertical;
      box-sizing: border-box;
    }
    .view-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 32px;
    }
    .view-name {
      font-size: 24px;
      font-weight: 600;
      margin-top: 16px;
      margin-bottom: 4px;
      text-align: center;
      color: var(--text-primary);
    }
    .view-organization {
      font-size: 14px;
      color: var(--text-secondary, #6b7280);
      margin-bottom: 12px;
      text-align: center;
    }
    .view-categories {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
    }
    .category-pill {
      background: var(--bg-selected, #eff6ff);
      color: var(--accent-hover, #2563eb);
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 12px;
      font-weight: 500;
    }
    .view-details {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 400px;
      width: 100%;
      margin: 0 auto;
    }
    .detail-group {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .detail-group:not(:last-child) {
      border-bottom: 1px solid var(--border-color, #e5e7eb);
      padding-bottom: 16px;
    }
    .group-label {
      font-size: 11px;
      font-weight: 400;
      color: var(--text-muted, #9ca3af);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .group-value {
      font-size: 15px;
      color: var(--text-primary);
      word-break: break-word;
      white-space: pre-wrap;
    }
    .group-value a {
      color: var(--accent-hover, #2563eb);
      text-decoration: none;
    }
    .group-value a:hover {
      text-decoration: underline;
    }
    .view-categories alps-button {
      --btn-padding: 2px 8px;
    }

    .dropdown-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `];
	}
	updated(changedProperties) {
		if (changedProperties.has("contact") || changedProperties.has("isEditing")) {
			if (this.contact && this.isEditing && (!this.editForm || this.editForm.path !== this.contact.path)) {
				this.editForm = { ...this.contact };
				this.isDirty = false;
				if (Array.isArray(this.editForm.categories)) this.editForm.categories = this.editForm.categories.join(", ");
			}
		}
	}
	debouncedSave() {
		if (this.saveTimeout) clearTimeout(this.saveTimeout);
		this.saveTimeout = setTimeout(() => {
			this.handleSave();
		}, 500);
	}
	handleInput(field, value) {
		this.editForm = {
			...this.editForm,
			[field]: value
		};
		this.isDirty = true;
		this.debouncedSave();
	}
	handleSave() {
		this.dispatchEvent(new CustomEvent("save", {
			detail: this.editForm,
			bubbles: true,
			composed: true
		}));
	}
	renderDetailRow(label, value) {
		if (!value) return "";
		let content = b`${value}`;
		if (label === "Email Address") content = b`<a href="mailto:${value}" @click=${(e) => {
			e.preventDefault();
			const formattedEmail = this.contact?.name ? `"${this.contact.name}" <${value}>` : value;
			this.composeStore?.openComposer({ to: [formattedEmail] });
		}}>${value}</a>`;
		else if (label === "Phone") content = b`<a href="tel:${value}">${value}</a>`;
		else if (label === "URL") content = b`<a href=${value.startsWith("http") ? value : `https://${value}`} target="_blank" rel="noopener noreferrer">${value}</a>`;
		return b`
      <div class="detail-group">
        <div class="group-label">${label}</div>
        <div class="group-value">${content}</div>
      </div>
    `;
	}
	get isStarred() {
		if (this.selectedCount > 1) return this.allSelectedStarred;
		return this.contact?.categories?.includes("Favorites") || false;
	}
	get formattedBirthday() {
		if (!this.contact?.birthday) return "";
		const d = new Date(this.contact.birthday);
		if (isNaN(d.getTime())) return this.contact.birthday;
		return formatFullDate(d, this.settingsStore?.getState()?.dateFormat || "YYYY-MM-DD", "24").split(" ")[0];
	}
	render() {
		if (!this.contact && !this.isEditing && this.selectedCount === 0) return b`
        <div class="empty-state">${this.i18nStore?.t("contacts.selectContact")}</div>
      `;
		return b`
      <alps-toolbar class="toolbar" ?scrolled=${this.scrolled}>
        ${this.isMobile ? b`
          <alps-icon-btn @click=${() => this.dispatchEvent(new CustomEvent("close"))} title="${this.i18nStore?.t("contacts.back")}" icon="arrowLeft"></alps-icon-btn>
          <div class="toolbar-separator"></div>
        ` : ""}

        <alps-icon-btn title="${this.i18nStore?.t("contacts.delete")}" @click=${() => this.dispatchEvent(new CustomEvent("delete"))} icon="trash" ?disabled=${this.contact?.isTemporary}></alps-icon-btn>
        
        <alps-popup align="right" @popup-close=${() => {}}>
          <alps-icon-btn slot="trigger" title="${this.i18nStore?.t("contacts.addToCategory")}" icon="folderOpen" ?disabled=${this.contact?.isTemporary}></alps-icon-btn>
          
          <div style="padding: 8px; display: flex; gap: 8px; cursor: default; min-width: 200px;" @click=${(e) => e.stopPropagation()}>
            <input 
              type="text" 
              placeholder="${this.i18nStore?.t("contacts.newCategory") || "New Category"}" 
              .value=${this.newCategoryName} 
              @input=${(e) => this.newCategoryName = e.target.value}
              @keydown=${(e) => {
			if (e.key === "Enter") {
				e.preventDefault();
				this.handleAddCategory();
			}
		}}
              style="flex: 1; padding: 4px 8px; border: 1px solid var(--border-color, #e5e7eb); border-radius: 4px; font-size: 13px; outline: none; min-width: 0; background: var(--bg-primary, #ffffff); color: var(--text-primary);">
            <alps-button variant="normal" @click=${this.handleAddCategory} style="--btn-padding: 4px 12px; --btn-font-size: 13px;">${this.i18nStore?.t("contacts.add") || "Add"}</alps-button>
          </div>
          
          ${this.contact?.categories && this.contact.categories.length > 0 || this.uniqueCategories.length > 0 ? b`<div class="dropdown-divider"></div>` : ""}

          ${this.uniqueCategories.map((cat) => {
			const isActive = this.contact?.categories?.includes(cat);
			return b`
              <button class="dropdown-item ${isActive ? "active" : ""}" @click=${(e) => {
				e.stopPropagation();
				this.dispatchEvent(new CustomEvent("update-categories", {
					detail: { category: cat },
					bubbles: true,
					composed: true
				}));
			}}>
                ${isActive ? renderIcon("check") : b`<div style="width: 16px;"></div>`}
                <span class="item-text">${cat}</span>
              </button>
            `;
		})}

          ${this.contact?.categories && this.contact.categories.length > 0 ? b`
            ${this.uniqueCategories.length > 0 ? b`<div class="dropdown-divider"></div>` : ""}
            <button class="dropdown-item" @click=${() => {
			this.dispatchEvent(new CustomEvent("update-categories", {
				detail: { category: "" },
				bubbles: true,
				composed: true
			}));
			const popup = this.shadowRoot?.querySelector("alps-popup");
			if (popup) popup.close();
		}}>
              <span class="item-text" style="font-weight: 500;">${this.i18nStore?.t("contacts.uncategorized")}</span>
            </button>
          ` : ""}
        </alps-popup>

        <div class="toolbar-separator"></div>
        
        <alps-icon-btn 
          title="${this.i18nStore?.t("contacts.toggleStar")}" 
          @click=${() => this.dispatchEvent(new CustomEvent("toggle-star"))} 
          icon=${this.isStarred ? "starFourFill" : "starFour"}
          ?active=${this.isStarred}
          ?disabled=${this.contact?.isTemporary}
        ></alps-icon-btn>
        
        <div class="toolbar-spacer"></div>
        
        ${this.selectedCount > 0 ? "" : b`
          <alps-icon-btn 
            title=${this.isEditing ? this.i18nStore?.t("contacts.cancel") : this.i18nStore?.t("contacts.editContact")} 
            @click=${() => {
			if (this.isEditing) {
				if (this.saveTimeout) clearTimeout(this.saveTimeout);
				if (this.contact?.isTemporary && !this.isDirty) {} else this.handleSave();
				this.dispatchEvent(new CustomEvent("cancel-edit"));
			} else this.dispatchEvent(new CustomEvent("edit"));
		}} 
            icon="pen"
            ?active=${this.isEditing}
          ></alps-icon-btn>
        `}
      </alps-toolbar>

      <div class="content" @scroll=${(e) => {
			const isScrolled = e.target.scrollTop > 0;
			if (this.scrolled !== isScrolled) this.scrolled = isScrolled;
		}}>
        ${this.selectedCount > 0 ? b`
          <div class="empty-state" style="flex-direction: column; gap: 16px;">
            <alps-icon-btn icon="users" style="pointer-events: none; margin-right: 8px;"></alps-icon-btn>
            <span>${this.i18nStore?.t("contacts.selectedContacts", { count: this.selectedCount })}</span>
          </div>
        ` : b`
        <div class="view-header">
          <alps-avatar .name=${this.isEditing ? this.editForm.name || this.editForm.email || "Unknown" : this.contact?.name || this.contact?.email || "Unknown"} .email=${this.isEditing ? this.editForm.email : this.contact?.email} .src=${this.contact?.avatar || ""} .size=${100}></alps-avatar>
        </div>

        ${this.isEditing ? b`
          <div class="edit-form">
            <alps-input 
              placeholder="${this.i18nStore?.t("contacts.name")}" 
              .value=${this.editForm.name || ""} 
              @input=${(e) => this.handleInput("name", e.target.value)}>
            </alps-input>
            <alps-input placeholder="${this.i18nStore?.t("contacts.nickname")}" .value=${this.editForm.nickname || ""} @input=${(e) => this.handleInput("nickname", e.target.value)}></alps-input>
            <alps-input placeholder="${this.i18nStore?.t("contacts.organization")}" .value=${this.editForm.organization || ""} @input=${(e) => this.handleInput("organization", e.target.value)}></alps-input>
            <alps-input placeholder="${this.i18nStore?.t("contacts.titleField")}" .value=${this.editForm.title || ""} @input=${(e) => this.handleInput("title", e.target.value)}></alps-input>
            <alps-input 
              placeholder="${this.i18nStore?.t("contacts.email")}" 
              type="email"
              .value=${this.editForm.email || ""} 
              @input=${(e) => this.handleInput("email", e.target.value)}>
            </alps-input>
            <alps-input placeholder="${this.i18nStore?.t("contacts.phone")}" .value=${this.editForm.phone || ""} @input=${(e) => this.handleInput("phone", e.target.value)}></alps-input>
            <alps-input placeholder="${this.i18nStore?.t("contacts.address")}" .value=${this.editForm.address || ""} @input=${(e) => this.handleInput("address", e.target.value)}></alps-input>
            <alps-input placeholder="${this.i18nStore?.t("contacts.url")}" type="url" .value=${this.editForm.url || ""} @input=${(e) => this.handleInput("url", e.target.value)}></alps-input>
            <alps-input placeholder="${this.i18nStore?.t("contacts.birthday")}" type="date" .value=${this.editForm.birthday || ""} @input=${(e) => this.handleInput("birthday", e.target.value)}></alps-input>
            <textarea class="edit-textarea" placeholder="${this.i18nStore?.t("contacts.notes")}" .value=${this.editForm.note || ""} @input=${(e) => this.handleInput("note", e.target.value)}></textarea>
            <textarea class="edit-textarea" placeholder="${this.i18nStore?.t("contacts.publicKey") || "GPG Public Key Block"}" .value=${this.editForm.public_key || ""} @input=${(e) => this.handleInput("public_key", e.target.value)} style="font-family: monospace; white-space: pre;"></textarea>
          </div>
        ` : b`
          <div class="view-header" style="margin-top: -32px;">
            <div class="view-name">
              ${this.contact.name || this.contact.email || this.i18nStore?.t("contacts.unnamedContact") || "Unnamed Contact"} ${this.contact.nickname ? `(${this.contact.nickname})` : ""}
            </div>
            ${this.contact.organization || this.contact.title ? b`
              <div class="view-organization">
                ${[this.contact.title, this.contact.organization].filter(Boolean).join(", ")}
              </div>
            ` : ""}
            ${this.contact.categories && this.contact.categories.length > 0 ? b`
              <div class="view-categories">
                ${this.contact.categories.map((cat) => b`<span class="category-pill">${cat}</span>`)}
              </div>
            ` : ""}
          </div>
          <div class="view-details">
            ${this.renderDetailRow(this.i18nStore?.t("contacts.email"), this.contact.email)}
            ${this.renderDetailRow(this.i18nStore?.t("contacts.phone"), this.contact.phone)}
            ${this.renderDetailRow(this.i18nStore?.t("contacts.address"), this.contact.address)}
            ${this.renderDetailRow(this.i18nStore?.t("contacts.birthday"), this.formattedBirthday)}
            ${this.renderDetailRow(this.i18nStore?.t("contacts.url"), this.contact.url)}
            ${this.renderDetailRow(this.i18nStore?.t("contacts.notes"), this.contact.note)}
            ${this.renderDetailRow(this.i18nStore?.t("contacts.publicKey") || "Public Key", this.contact.public_key)}
          </div>
        `}
        `}
      </div>
    `;
	}
};
__decorate([n$1({ type: Object })], AlpsContactView.prototype, "contact", void 0);
__decorate([n$1({ type: Boolean })], AlpsContactView.prototype, "isEditing", void 0);
__decorate([n$1({ type: Boolean })], AlpsContactView.prototype, "saving", void 0);
__decorate([n$1({ type: Array })], AlpsContactView.prototype, "uniqueCategories", void 0);
__decorate([n$1({ type: Boolean })], AlpsContactView.prototype, "isMobile", void 0);
__decorate([n$1({ type: Number })], AlpsContactView.prototype, "selectedCount", void 0);
__decorate([n$1({ type: Boolean })], AlpsContactView.prototype, "allSelectedStarred", void 0);
__decorate([r()], AlpsContactView.prototype, "scrolled", void 0);
__decorate([c({ context: i18nContext })], AlpsContactView.prototype, "i18nStore", void 0);
__decorate([c({ context: composeContext })], AlpsContactView.prototype, "composeStore", void 0);
__decorate([c({
	context: settingsContext,
	subscribe: true
})], AlpsContactView.prototype, "settingsStore", void 0);
__decorate([r()], AlpsContactView.prototype, "editForm", void 0);
__decorate([r()], AlpsContactView.prototype, "isDirty", void 0);
__decorate([r()], AlpsContactView.prototype, "newCategoryName", void 0);
AlpsContactView = __decorate([t("alps-contact-view")], AlpsContactView);
//#endregion
//#region ../plugins/carddav/frontend/index.ts
var frontend_exports$3 = /* @__PURE__ */ __exportAll({});
registry.registerRoute({
	path: "/contacts/*",
	component: "contacts-page"
});
registry.registerNavTab({
	id: "contacts",
	pluginId: "carddav",
	labelKey: "navigation.contacts",
	icon: "users",
	order: 10
});
registry.registerHook("composer:send", async ({ recipients }) => {
	if (!recipients || !Array.isArray(recipients)) return;
	for (const addr of recipients) {
		let email = addr;
		let name = "";
		const match = addr.match(/^(.*?)\s*<([^>]+)>$/);
		if (match && match[2]) {
			name = match[1].replace(/^["']|["']$/g, "").trim();
			email = match[2];
		} else email = email.trim();
		try {
			await contactsService.createContact({
				name,
				email
			});
		} catch (e) {
			console.error("Failed to auto-save contact", e);
		}
	}
});
registry.registerHook("composer:suggest", async ({ query }) => {
	try {
		return ((await contactsService.fetchContacts(query)).contacts || []).map((c) => ({
			name: c.name || "",
			address: c.email || ""
		})).filter((c) => c.address);
	} catch (e) {
		console.error("Failed to fetch contact suggestions", e);
		return [];
	}
});
//#endregion
//#region src/components/alps-setting-group.ts
var AlpsSettingGroup = class AlpsSettingGroup extends i {
	constructor(..._args) {
		super(..._args);
		this.label = "";
		this.description = "";
	}
	static {
		this.styles = i$1`
    :host {
      display: block;
      width: 100%;
      max-width: 600px;
      margin-bottom: 36px;
    }

    .setting-label {
      display: block;
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--text-primary);
    }

    .setting-description {
      font-size: 13px;
      color: var(--text-muted);
      margin-top: 4px;
      line-height: 1.4;
      margin-bottom: 12px;
    }

    .slot-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  `;
	}
	render() {
		return b`
      ${this.label ? b`<label class="setting-label">${this.label}</label>` : ""}
      ${this.description ? b`<div class="setting-description">${this.description}</div>` : ""}
      <div class="slot-container">
        <slot></slot>
      </div>
    `;
	}
};
__decorate([n$1({ type: String })], AlpsSettingGroup.prototype, "label", void 0);
__decorate([n$1({ type: String })], AlpsSettingGroup.prototype, "description", void 0);
AlpsSettingGroup = __decorate([t("alps-setting-group")], AlpsSettingGroup);
//#endregion
//#region ../plugins/gpg/frontend/gpg-crypto.ts
function promptForPassphrase(errorMsg, i18nStore) {
	return new Promise((resolve) => {
		const prompt = document.createElement("ui-prompt");
		prompt.title = i18nStore?.t("gpg.passphraseRequired");
		prompt.confirmText = i18nStore?.t("gpg.unlock");
		prompt.cancelText = i18nStore?.t("general.cancel");
		let label = i18nStore?.t("gpg.passphrasePrompt");
		if (errorMsg) label += ` (Error: ${errorMsg})`;
		prompt.fields = [{
			id: "passphrase",
			label,
			type: "password",
			placeholder: i18nStore?.t("gpg.passphrase"),
			autofocus: true
		}];
		const cleanup = () => {
			if (prompt.parentNode) prompt.parentNode.removeChild(prompt);
		};
		prompt.addEventListener("submit", (e) => {
			resolve(e.detail.passphrase);
			cleanup();
		});
		prompt.addEventListener("cancel", () => {
			resolve(null);
			cleanup();
		});
		document.body.appendChild(prompt);
	});
}
var cachedPrivateKey = null;
function clearCachedPrivateKey() {
	cachedPrivateKey = null;
	try {
		sessionStorage.removeItem("gpg_private_key");
	} catch (e) {}
}
async function getPrivateKey(openpgp, i18nStore) {
	if (cachedPrivateKey) return cachedPrivateKey;
	const res = await fetchWithTimeout("/gpg/keys");
	if (!res.ok) throw new Error("Failed to fetch GPG keyring.");
	const keyring = await res.json();
	if (!keyring.encrypted_private_key) throw new Error("No private key found on server. Please generate one in Settings.");
	const privateKey = await openpgp.readPrivateKey({ armoredKey: keyring.encrypted_private_key });
	if (!privateKey.isDecrypted()) {
		let errorMsg;
		let pass = await promptForPassphrase(errorMsg, i18nStore);
		while (pass !== null) try {
			cachedPrivateKey = await openpgp.decryptKey({
				privateKey,
				passphrase: pass
			});
			return cachedPrivateKey;
		} catch (e) {
			errorMsg = "Incorrect passphrase: " + e.message;
			pass = await promptForPassphrase(errorMsg, i18nStore);
		}
		throw new Error("Passphrase prompt cancelled.");
	} else {
		cachedPrivateKey = privateKey;
		return cachedPrivateKey;
	}
}
async function handlePresend(payload) {
	const { instance, formData, composer } = payload;
	if (!instance.encryptGpg) return formData;
	if (!!(formData.get("attachment-uuids") || formData.get("prev_attachments"))) {
		const msg = composer?.i18nStore?.t("gpg.attachmentsNotEncryptable");
		alert(msg || "Attachments cannot be encrypted with inline PGP and would be sent unencrypted. Remove the attachments, or turn off encryption to send them.");
		return false;
	}
	try {
		const openpgp = await __vitePreload(() => import("./openpgp-ByQpE-bo.js").then((n) => n.t), __vite__mapDeps([0,1]));
		const to = instance.to || [];
		const cc = instance.cc || [];
		const bcc = instance.bcc || [];
		const recipients = [
			...to,
			...cc,
			...bcc
		];
		if (recipients.length === 0) return formData;
		const publicKeys = [];
		const missingKeys = [];
		let userEmails = [];
		try {
			const storedSettings = localStorage.getItem("alps_settings");
			if (storedSettings) {
				const parsed = JSON.parse(storedSettings);
				if (parsed.loginUsername) userEmails.push(parsed.loginUsername);
				if (parsed.identities) parsed.identities.forEach((i) => {
					if (i.email) userEmails.push(i.email);
				});
			}
		} catch (e) {}
		for (const email of recipients) {
			const cleanEmail = email.includes("<") ? email.split("<")[1].split(">")[0].trim() : email.trim();
			if (userEmails.includes(cleanEmail)) continue;
			const contactsList = (await contactsService.fetchContacts(cleanEmail)).contacts || [];
			let keyFound = false;
			for (const c of contactsList) if (c.public_key) {
				const key = await openpgp.readKey({ armoredKey: c.public_key });
				publicKeys.push(key);
				keyFound = true;
				break;
			}
			if (!keyFound) missingKeys.push(email);
		}
		if (missingKeys.length > 0) {
			const msgTemplate = composer.i18nStore?.t("gpg.missingPublicKeys");
			alert(msgTemplate ? msgTemplate.replace("{keys}", missingKeys.join("\\n")) : `Cannot encrypt: Missing public keys for:\n${missingKeys.join("\\n")}`);
			return false;
		}
		const privateKey = await getPrivateKey(openpgp, composer.i18nStore);
		const myPubKey = privateKey.toPublic();
		publicKeys.push(myPubKey);
		let textContent = formData.get("text") || "";
		let htmlContent = formData.get("html") || "";
		let msgToEncrypt = "";
		if (instance.format === "html" && htmlContent) msgToEncrypt = htmlContent;
		else msgToEncrypt = textContent;
		const message = await openpgp.createMessage({ text: msgToEncrypt });
		const encrypted = await openpgp.encrypt({
			message,
			encryptionKeys: publicKeys,
			signingKeys: privateKey,
			format: "armored"
		});
		formData.set("text", encrypted);
		formData.set("html", "");
		return formData;
	} catch (e) {
		alert("GPG Encryption failed: " + e.message);
		return false;
	}
}
async function handleReaderContent(payload) {
	if (typeof payload.content === "string" && payload.content.includes("-----BEGIN PGP MESSAGE-----")) try {
		const openpgp = await __vitePreload(() => import("./openpgp-ByQpE-bo.js").then((n) => n.t), __vite__mapDeps([0,1]));
		const blockStart = payload.content.indexOf("-----BEGIN PGP MESSAGE-----");
		const blockEnd = payload.content.indexOf("-----END PGP MESSAGE-----") + 25;
		if (blockStart === -1 || blockEnd <= blockStart) return payload.content;
		const armoredBlock = payload.content.substring(blockStart, blockEnd);
		const privateKey = await getPrivateKey(openpgp, payload.i18nStore);
		const message = await openpgp.readMessage({ armoredMessage: armoredBlock });
		const { data: decrypted } = await openpgp.decrypt({
			message,
			decryptionKeys: privateKey,
			format: "utf8"
		});
		let decryptedHtml = String(decrypted);
		if (!(decryptedHtml.includes("<html") || decryptedHtml.includes("<body") || decryptedHtml.includes("<p>") || decryptedHtml.includes("<div") || decryptedHtml.includes("<br"))) decryptedHtml = decryptedHtml.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>");
		const replaced = payload.content.substring(0, blockStart) + decryptedHtml + payload.content.substring(blockEnd);
		payload.banners = payload.banners || [];
		payload.banners.push(b`
              <alps-banner variant="info">
                <span style="display: flex; align-items: center; gap: 8px;">
                  <span style="display: flex; width: 16px; height: 16px;">${renderIcon("lock")}</span>
                  <span>${payload.i18nStore?.t("gpg.decryptedSuccess")}</span>
                </span>
              </alps-banner>
            `);
		payload.isHtml = true;
		return replaced;
	} catch (e) {
		console.error("Decryption failed:", e);
		payload.banners = payload.banners || [];
		payload.banners.push(b`
              <alps-banner variant="error">
                <span style="display: flex; align-items: center; gap: 8px;">
                  <span style="display: flex; width: 16px; height: 16px;">${renderIcon("lock")}</span>
                  <span>${payload.i18nStore?.t("gpg.decryptedFailed")}</span>
                </span>
              </alps-banner>
            `);
		return payload.content;
	}
	return payload.content;
}
//#endregion
//#region ../plugins/gpg/frontend/gpg-settings.ts
var AlpsGpgSettings = class AlpsGpgSettings extends i {
	constructor(..._args) {
		super(..._args);
		this.loading = true;
		this.generating = false;
		this.importing = false;
		this.importError = "";
		this.keyring = null;
		this.pubKeyInput = "";
		this.privKeyInput = "";
		this.viewState = "default";
		this.showPassphrasePrompt = false;
		this.passphrasePromptMode = "lock";
		this.showPurgeConfirm = false;
		this.resolvePassphrase = null;
		this.resolveError = null;
	}
	static {
		this.styles = i$1`
        :host {
            display: block;
        }
        .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-bottom: 16px;
        }
        label {
            font-size: 14px;
            font-weight: 500;
        }
        textarea {
            width: 100%;
            height: 150px;
            padding: 12px;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            font-family: monospace;
            font-size: 12px;
            box-sizing: border-box;
            background: var(--bg-secondary);
            color: var(--text-color);
        }
        .actions {
            display: flex;
            gap: 12px;
        }
        .key-info {
            font-family: monospace;
            background: var(--bg-secondary);
            padding: 16px;
            border-radius: 4px;
            word-break: break-all;
            white-space: pre-wrap;
            font-size: 12px;
        }
        .empty-state {
            color: var(--text-muted);
            font-style: italic;
            padding: 16px 0;
            text-align: left;
        }
    `;
	}
	async connectedCallback() {
		super.connectedCallback();
		await this.fetchKeys();
	}
	async fetchKeys() {
		this.loading = true;
		try {
			const res = await fetchWithTimeout("/gpg/keys");
			if (res.ok) {
				const data = await res.json();
				if (data.public_key) this.keyring = data;
				else this.keyring = null;
			}
		} catch (e) {
			console.error(e);
		} finally {
			this.loading = false;
		}
	}
	promptForPassphrase(mode = "lock") {
		this.passphrasePromptMode = mode;
		this.showPassphrasePrompt = true;
		return new Promise((resolve) => {
			this.resolvePassphrase = resolve;
		});
	}
	showErrorDialog(msg) {
		this.importError = msg;
		return new Promise((resolve) => {
			this.resolveError = resolve;
		});
	}
	clearError() {
		this.importError = "";
		if (this.resolveError) {
			this.resolveError();
			this.resolveError = null;
		}
	}
	async getConfirmedPassphrase() {
		while (true) {
			const pass = await this.promptForPassphrase("lock");
			if (!pass) return null;
			const passConfirm = await this.promptForPassphrase("confirm");
			if (!passConfirm) return null;
			if (pass === passConfirm) return pass;
			else await this.showErrorDialog(this.i18nStore?.t("gpg.passphraseMismatch"));
		}
	}
	handlePassphraseSubmit(pass) {
		if (this.resolvePassphrase) {
			this.resolvePassphrase(pass);
			this.resolvePassphrase = null;
		}
		this.showPassphrasePrompt = false;
	}
	handlePassphraseCancel() {
		if (this.resolvePassphrase) {
			this.resolvePassphrase(null);
			this.resolvePassphrase = null;
		}
		this.showPassphrasePrompt = false;
	}
	async generateKeys() {
		const pass = await this.getConfirmedPassphrase();
		if (!pass) return;
		this.generating = true;
		try {
			const { privateKey, publicKey } = await (await __vitePreload(() => import("./openpgp-ByQpE-bo.js").then((n) => n.t), __vite__mapDeps([0,1]))).generateKey({
				type: "ecc",
				curve: "curve25519",
				userIDs: [{
					name: "ALPS User",
					email: ""
				}],
				passphrase: pass
			});
			await fetchWithTimeout("/gpg/keys", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					public_key: publicKey,
					encrypted_private_key: privateKey
				})
			});
			await this.fetchKeys();
		} catch (e) {
			alert(this.i18nStore?.t("gpg.generateFailed", { error: e.message }));
		} finally {
			this.generating = false;
		}
	}
	async importKeys() {
		if (!this.pubKeyInput || !this.privKeyInput) {
			this.importError = this.i18nStore?.t("gpg.importMissing");
			return;
		}
		this.importing = true;
		let openpgp;
		let privateKeyObj;
		try {
			openpgp = await __vitePreload(() => import("./openpgp-ByQpE-bo.js").then((n) => n.t), __vite__mapDeps([0,1]));
			await openpgp.readKey({ armoredKey: this.pubKeyInput });
			privateKeyObj = await openpgp.readPrivateKey({ armoredKey: this.privKeyInput });
		} catch (e) {
			this.importing = false;
			this.importError = this.i18nStore?.t("gpg.importFailed", { error: e.message });
			return;
		}
		this.importing = false;
		if (!privateKeyObj.isDecrypted()) {
			let currentPass = await this.promptForPassphrase("unlock");
			while (currentPass !== null) try {
				privateKeyObj = await openpgp.decryptKey({
					privateKey: privateKeyObj,
					passphrase: currentPass
				});
				break;
			} catch {
				await this.showErrorDialog(this.i18nStore?.t("gpg.importIncorrectPassphrase"));
				currentPass = await this.promptForPassphrase("unlock");
			}
			if (!privateKeyObj.isDecrypted()) return;
		}
		const pass = await this.getConfirmedPassphrase();
		if (!pass) return;
		this.importing = true;
		try {
			const encryptedPrivateKey = await openpgp.encryptKey({
				privateKey: privateKeyObj,
				passphrase: pass
			});
			await fetchWithTimeout("/gpg/keys", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					public_key: this.pubKeyInput,
					encrypted_private_key: encryptedPrivateKey
				})
			});
			this.pubKeyInput = "";
			this.privKeyInput = "";
			this.viewState = "default";
			await this.fetchKeys();
		} catch (e) {
			this.importError = this.i18nStore?.t("gpg.importFailed", { error: e.message });
		} finally {
			this.importing = false;
		}
	}
	async purgeKeys() {
		this.loading = true;
		this.showPurgeConfirm = false;
		await fetchWithTimeout("/gpg/keys", { method: "DELETE" });
		this.keyring = null;
		clearCachedPrivateKey();
		this.loading = false;
	}
	render() {
		if (this.loading || this.generating) return b`<alps-loader full-height .text=${this.generating ? "Generating keypair..." : "Loading..."}></alps-loader>`;
		return b`
            ${this.keyring ? b`
                <alps-setting-group label="${this.i18nStore?.t("settings.gpg")}" description="${this.i18nStore?.t("gpg.keyStoredSecurely")}">
                    <div class="key-info">${this.keyring.public_key}</div>

                    <div class="actions">
                        <alps-button variant="danger" @click=${() => this.showPurgeConfirm = true}>${this.i18nStore?.t("gpg.purgeKeys")}</alps-button>
                    </div>
                </alps-setting-group>
            ` : this.viewState === "import" ? b`
                <alps-setting-group label="${this.i18nStore?.t("gpg.importExistingKeys")}">
                    <alps-setting-group description="${this.i18nStore?.t("gpg.importUnencryptedDesc")}" style="margin-bottom: 24px;"></alps-setting-group>
                    
                    <alps-setting-group label="${this.i18nStore?.t("gpg.publicKeyBlock")}" style="margin-bottom: 24px;">
                        <textarea .value=${this.pubKeyInput} @input=${(e) => this.pubKeyInput = e.target.value}></textarea>
                    </alps-setting-group>

                    <alps-setting-group label="${this.i18nStore?.t("gpg.privateKeyBlock")}" style="margin-bottom: 24px;">
                        <textarea .value=${this.privKeyInput} @input=${(e) => this.privKeyInput = e.target.value}></textarea>
                    </alps-setting-group>

                    <div class="actions">
                        <alps-button variant="primary" ?disabled=${!this.pubKeyInput || !this.privKeyInput} ?spinning=${this.importing} @click=${this.importKeys}>${this.i18nStore?.t("general.save")}</alps-button>
                        <alps-button variant="normal" @click=${() => this.viewState = "default"}>${this.i18nStore?.t("general.cancel")}</alps-button>
                    </div>
                </alps-setting-group>
            ` : b`
                <alps-setting-group label="${this.i18nStore?.t("settings.gpg")}" description="${this.i18nStore?.t("gpg.enableEncryptionDesc")}">
                    <div class="empty-state">${this.i18nStore?.t("gpg.noKeyPresent")}</div>
                    <div class="actions">
                        <alps-button variant="primary" @click=${this.generateKeys}>${this.i18nStore?.t("gpg.generateNewKeypair")}</alps-button>
                        <alps-button variant="normal" @click=${() => this.viewState = "import"}>${this.i18nStore?.t("gpg.importExistingKeys")}</alps-button>
                    </div>
                </alps-setting-group>
            `}

            ${this.showPassphrasePrompt ? b`
                <ui-prompt
                    title="${this.passphrasePromptMode === "unlock" ? this.i18nStore?.t("gpg.passphraseRequired") : this.passphrasePromptMode === "confirm" ? this.i18nStore?.t("gpg.passphraseConfirmTitle") : this.i18nStore?.t("gpg.passphraseSetTitle")}"
                    confirmText="${this.passphrasePromptMode === "unlock" ? this.i18nStore?.t("gpg.unlock") : this.passphrasePromptMode === "confirm" ? this.i18nStore?.t("gpg.confirm") : this.i18nStore?.t("gpg.lock")}"
                    cancelText="${this.i18nStore?.t("general.cancel")}"
                    .fields=${[{
			id: "passphrase",
			label: this.passphrasePromptMode === "unlock" ? this.i18nStore?.t("gpg.passphrasePrompt") : this.passphrasePromptMode === "confirm" ? this.i18nStore?.t("gpg.passphraseConfirmPrompt") : this.i18nStore?.t("gpg.passphraseLockPrompt"),
			type: "password",
			placeholder: this.i18nStore?.t("gpg.passphrase"),
			autofocus: true
		}]}
                    @submit=${(e) => this.handlePassphraseSubmit(e.detail.passphrase)}
                    @cancel=${this.handlePassphraseCancel}
                ></ui-prompt>
            ` : ""}
            ${this.importError ? b`
                <ui-modal title="${this.i18nStore?.t("gpg.importFailedTitle")}" @cancel=${this.clearError}>
                    <div style="padding: 16px; white-space: pre-wrap; font-family: monospace; font-size: 13px;">${this.importError}</div>
                    <alps-button slot="actions" @click=${this.clearError}>OK</alps-button>
                </ui-modal>
            ` : ""}

            ${this.showPurgeConfirm ? b`
                <ui-confirm
                    title="${this.i18nStore?.t("gpg.purgeKeys")}"
                    message="${this.i18nStore?.t("gpg.purgeConfirm")}"
                    confirmText="${this.i18nStore?.t("gpg.purgeKeys")}"
                    cancelText="${this.i18nStore?.t("general.cancel")}"
                    isDanger
                    @confirm=${this.purgeKeys}
                    @cancel=${() => this.showPurgeConfirm = false}
                ></ui-confirm>
            ` : ""}
        `;
	}
};
__decorate([c({
	context: i18nContext,
	subscribe: true
})], AlpsGpgSettings.prototype, "i18nStore", void 0);
__decorate([r()], AlpsGpgSettings.prototype, "loading", void 0);
__decorate([r()], AlpsGpgSettings.prototype, "generating", void 0);
__decorate([r()], AlpsGpgSettings.prototype, "importing", void 0);
__decorate([r()], AlpsGpgSettings.prototype, "importError", void 0);
__decorate([r()], AlpsGpgSettings.prototype, "keyring", void 0);
__decorate([r()], AlpsGpgSettings.prototype, "pubKeyInput", void 0);
__decorate([r()], AlpsGpgSettings.prototype, "privKeyInput", void 0);
__decorate([r()], AlpsGpgSettings.prototype, "viewState", void 0);
__decorate([r()], AlpsGpgSettings.prototype, "showPassphrasePrompt", void 0);
__decorate([r()], AlpsGpgSettings.prototype, "passphrasePromptMode", void 0);
__decorate([r()], AlpsGpgSettings.prototype, "showPurgeConfirm", void 0);
AlpsGpgSettings = __decorate([t("alps-gpg-settings")], AlpsGpgSettings);
//#endregion
//#region ../plugins/gpg/frontend/index.ts
var frontend_exports$2 = /* @__PURE__ */ __exportAll({});
registry.registerSettingsTab({
	id: "gpg",
	labelKey: "settings.gpg",
	icon: "key",
	component: "alps-gpg-settings"
});
registry.registerHook("composer:toolbar", (payload) => {
	const instance = payload.instance;
	const composer = payload.composer;
	const isEncrypted = instance.encryptGpg || false;
	return b`
        <alps-icon-btn 
            title="${composer.i18nStore?.t("gpg.toggleEncryption")}" 
            icon="lock"
            ?active=${isEncrypted}
            @click=${() => {
		composer.composeStore.updateComposer(instance.id, { encryptGpg: !isEncrypted });
	}}>
        </alps-icon-btn>
    `;
});
registry.registerHook("composer:presend", handlePresend);
registry.registerHook("reader:content", handleReaderContent);
//#endregion
//#region ../plugins/managesieve/frontend/sieve-compiler.ts
var SieveCompiler = class {
	static extractVisualState(script) {
		const match = script.match(/^# ALPS_VISUAL_STATE: (.*)$/m);
		if (!match) return null;
		try {
			return JSON.parse(atob(match[1]));
		} catch (e) {
			return null;
		}
	}
	static compile(state) {
		if (state.rules.length === 0) return "";
		const requiredExts = /* @__PURE__ */ new Set();
		for (const rule of state.rules) {
			for (const action of rule.actions) if (action.type === "fileinto") {
				requiredExts.add("fileinto");
				requiredExts.add("mailbox");
			}
			for (const cond of rule.conditions) if (cond.field.toLowerCase() === "body") requiredExts.add("body");
		}
		let script = "";
		if (requiredExts.size > 0) script += `require [${Array.from(requiredExts).map((e) => `"${e}"`).join(", ")}];\n\n`;
		script += `# ALPS_VISUAL_STATE: ${btoa(JSON.stringify(state))}\n\n`;
		for (const rule of state.rules) {
			if (rule.conditions.length === 0 || rule.actions.length === 0) continue;
			const conditionsSieve = rule.conditions.map((c) => this.compileCondition(c));
			let ifStatement = "";
			if (conditionsSieve.length === 1) ifStatement = `if ${conditionsSieve[0]}`;
			else if (rule.matchType === "all") ifStatement = `if allof (${conditionsSieve.join(", ")})`;
			else ifStatement = `if anyof (${conditionsSieve.join(", ")})`;
			script += `${ifStatement} {\n`;
			for (const action of rule.actions) script += `  ${this.compileAction(action)}\n`;
			script += `}\n\n`;
		}
		return script;
	}
	static compileCondition(c) {
		const field = c.field.toLowerCase();
		if (field === "size") return `size :${c.operator} ${c.value}`;
		if (field === "body") return `body :text :${c.operator === "contains" ? "contains" : "is"} "${c.value.replace(/"/g, "\\\"")}"`;
		let op = "";
		let matchType = "";
		if (c.operator === "contains") {
			op = "";
			matchType = ":contains";
		} else if (c.operator === "not_contains") {
			op = "not ";
			matchType = ":contains";
		} else if (c.operator === "is") {
			op = "";
			matchType = ":is";
		} else if (c.operator === "not_is") {
			op = "not ";
			matchType = ":is";
		}
		return `${op}header ${matchType} "${c.field}" "${c.value.replace(/"/g, "\\\"")}"`;
	}
	static compileAction(a) {
		switch (a.type) {
			case "fileinto": return `fileinto :create "${a.value}";`;
			case "discard": return `discard;`;
			case "redirect": return `redirect "${a.value}";`;
			case "stop": return `stop;`;
		}
		return "";
	}
};
//#endregion
//#region ../plugins/managesieve/frontend/managesieve-service.ts
var ManageSieveService = class {
	async fetchScript() {
		const res = await fetchWithTimeout("/managesieve/script");
		if (!res.ok) throw new Error(`Failed to fetch script: ${res.statusText}`);
		return res.json();
	}
	async saveScript(script, method = "PUT") {
		const res = await fetchWithTimeout("/managesieve/script", {
			method,
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ content: script })
		});
		const data = await res.json();
		if (!res.ok) throw new Error(data.error || "Failed to save script");
		return data;
	}
	async validateScript(script) {
		const res = await fetchWithTimeout("/managesieve/validate", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ content: script })
		});
		const data = await res.json();
		if (!res.ok) throw new Error(data.error || "Validation failed");
		return data;
	}
	async fetchFolders() {
		const res = await fetchWithTimeout("/mailboxes/INBOX");
		if (!res.ok) throw new Error(`Failed to fetch mailboxes: ${res.statusText}`);
		return res.json();
	}
};
var managesieveService = new ManageSieveService();
//#endregion
//#region ../plugins/managesieve/frontend/raw-editor.ts
var RawEditor = class RawEditor extends i {
	constructor(..._args) {
		super(..._args);
		this.initialScript = null;
		this.isDirty = false;
		this.script = "";
		this.isValidating = false;
		this.isSaving = false;
	}
	static {
		this.styles = i$1`
		.editor-container {
			display: flex;
			flex-direction: column;
			gap: 16px;
			width: 100%;
			height: 400px;
			margin-top: 12px;
		}

		.code-area {
			position: relative;
			flex: 1;
			width: 100%;
			border: 1px solid var(--border-color, #ccc);
			border-radius: var(--input-radius, 6px);
			background-color: var(--bg-primary, #fff);
			overflow: hidden;
		}
		.highlight-layer, textarea {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			padding: 12px;
			margin: 0;
			border: none;
			font-family: monospace;
			font-size: 14px;
			line-height: 1.5;
			box-sizing: border-box;
			white-space: pre-wrap;
			word-wrap: break-word;
			overflow-y: auto;
			tab-size: 4;
		}
		.highlight-layer {
			color: var(--text-primary, #000);
			z-index: 1;
			pointer-events: none;
		}
		textarea {
			color: transparent;
			background: transparent;
			caret-color: var(--text-primary, #000);
			z-index: 2;
			resize: none;
			outline: none;
		}
		
		.sieve-keyword { color: #d73a49; font-weight: 600; }
		.sieve-operator { color: #005cc5; font-weight: 600; }
		.sieve-string { color: #032f62; }
		.sieve-comment { color: #6a737d; font-style: italic; }
		
		@media (prefers-color-scheme: dark) {
			.sieve-keyword { color: #ff7b72; }
			.sieve-operator { color: #79c0ff; }
			.sieve-string { color: #a5d6ff; }
			.sieve-comment { color: #8b949e; }
		}

		.actions {
			display: flex;
			gap: 12px;
			align-items: center;
		}
	`;
	}
	willUpdate(changedProperties) {
		if (changedProperties.has("script")) {
			if (this.initialScript === null) this.initialScript = this.script;
			this.isDirty = this.script !== this.initialScript;
		}
	}
	highlight(code) {
		if (!code) return "";
		let html_str = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
		html_str = html_str.replace(/(#.*|\/\*[\s\S]*?\*\/)|("[^"\\]*(?:\\.[^"\\]*)*")|\b(require|if|else|elsif|stop|fileinto|keep|discard|redirect)\b|\b(anyof|allof|not|contains|is|matches|over|under)\b/gi, (match, comment, str, keyword, operator) => {
			if (comment) return `<span class="sieve-comment">${comment}</span>`;
			if (str) return `<span class="sieve-string">${str}</span>`;
			if (keyword) return `<span class="sieve-keyword">${keyword}</span>`;
			if (operator) return `<span class="sieve-operator">${operator}</span>`;
			return match;
		});
		if (html_str.endsWith("\n")) html_str += " ";
		return o$1(html_str);
	}
	handleScroll(e) {
		const target = e.target;
		const layer = this.shadowRoot?.querySelector(".highlight-layer");
		if (layer) {
			layer.scrollTop = target.scrollTop;
			layer.scrollLeft = target.scrollLeft;
		}
	}
	handleInput(e) {
		const target = e.target;
		this.script = target.value;
		this.dispatchEvent(new CustomEvent("script-changed", { detail: { script: this.script } }));
	}
	async validate() {
		this.isValidating = true;
		try {
			await managesieveService.validateScript(this.script);
			window.dispatchEvent(new CustomEvent("show-toast", { detail: {
				message: this.i18nStore.t("managesieve.toast.valid"),
				timeout: 3e3
			} }));
		} catch (e) {
			window.dispatchEvent(new CustomEvent("show-toast", { detail: {
				message: e.message || this.i18nStore.t("managesieve.toast.networkError"),
				timeout: 5e3,
				type: "error"
			} }));
		} finally {
			this.isValidating = false;
		}
	}
	async save() {
		this.isSaving = true;
		try {
			await managesieveService.saveScript(this.script, "PUT");
			this.initialScript = this.script;
			this.isDirty = false;
			const msgKey = this.script.trim() === "" ? "managesieve.toast.deactivated" : "managesieve.toast.saved";
			window.dispatchEvent(new CustomEvent("show-toast", { detail: {
				message: this.i18nStore.t(msgKey),
				timeout: 3e3
			} }));
		} catch (e) {
			window.dispatchEvent(new CustomEvent("show-toast", { detail: {
				message: e.message || this.i18nStore.t("managesieve.toast.networkError"),
				timeout: 5e3,
				type: "error"
			} }));
		} finally {
			this.isSaving = false;
		}
	}
	render() {
		return b`
			<div class="editor-container">
				<div class="code-area">
					<div class="highlight-layer">${this.highlight(this.script)}</div>
					<textarea .value=${this.script} @input=${this.handleInput} @scroll=${this.handleScroll} spellcheck="false"></textarea>
				</div>
				<div class="actions">
					<alps-button variant="text" ?spinning=${this.isValidating} ?disabled=${this.isSaving} @click=${this.validate}>
						${this.i18nStore.t("managesieve.raw.validate")}
					</alps-button>
					<div style="flex: 1;"></div>
					<alps-button variant="primary" ?spinning=${this.isSaving} ?disabled=${this.isValidating || !this.isDirty} @click=${this.save}>
						${this.i18nStore.t("managesieve.raw.save")}
					</alps-button>
				</div>
			</div>
		`;
	}
};
__decorate([r()], RawEditor.prototype, "isDirty", void 0);
__decorate([c({ context: i18nContext })], RawEditor.prototype, "i18nStore", void 0);
__decorate([n$1({ type: String })], RawEditor.prototype, "script", void 0);
__decorate([r()], RawEditor.prototype, "isValidating", void 0);
__decorate([r()], RawEditor.prototype, "isSaving", void 0);
RawEditor = __decorate([t("alps-raw-editor")], RawEditor);
//#endregion
//#region ../plugins/managesieve/frontend/visual-editor.ts
var VisualEditor = class VisualEditor extends i {
	constructor(..._args) {
		super(..._args);
		this.isSaving = false;
		this.initialSnapshot = "";
		this.state = { rules: [] };
		this.folders = [];
	}
	willUpdate(changedProperties) {
		if (changedProperties.has("state") && this.initialSnapshot === "") this.initialSnapshot = JSON.stringify(this.state);
	}
	get isDirty() {
		return this.initialSnapshot !== "" && this.initialSnapshot !== JSON.stringify(this.state);
	}
	markClean() {
		this.initialSnapshot = JSON.stringify(this.state);
		this.requestUpdate();
	}
	static {
		this.styles = i$1`
		.editor-container {
			display: flex;
			flex-direction: column;
			gap: 24px;
			margin-top: 12px;
		}
		.rule-card {
			position: relative;
			border-radius: 8px;
			padding: 16px;
			background: var(--bg-secondary);
			display: flex;
			flex-direction: column;
			gap: 12px;
		}
		.rule-header {
			position: absolute;
			top: 16px;
			right: 16px;
			display: flex;
			align-items: center;
		}
		.condition-row, .action-row {
			display: flex;
			gap: 8px;
			align-items: center;
		}
		.row-label {
			width: 80px;
			font-weight: 600;
			font-size: 13px;
			color: var(--text-secondary);
			text-align: right;
		}
		.row-content {
			display: flex;
			align-items: center;
			gap: 8px;
		}
		.row-text {
			color: var(--text-secondary);
			font-size: 13px;
			font-weight: 400;
		}
		.flex-1 {
			flex: 1;
		}
		.connector {
			display: flex;
			justify-content: center;
			color: var(--text-muted);
			opacity: 0.5;
			padding: 8px 0;
			margin-left: 40px;
		}
		.connector-icon {
			fill: none;
			color: currentColor;
		}
		.actions-container {
			display: flex;
			gap: 16px;
			justify-content: flex-end;
		}
		.empty-state {
			color: var(--text-muted);
			font-style: italic;
			padding: 16px 0;
			text-align: left;
		}
	`;
	}
	addRule() {
		this.state = {
			...this.state,
			rules: [...this.state.rules, {
				id: Math.random().toString(36).substring(7),
				matchType: "all",
				conditions: [{
					field: "Subject",
					operator: "contains",
					value: ""
				}],
				actions: [{
					type: "fileinto",
					value: this.folders[0] || "INBOX"
				}]
			}]
		};
		this.notifyChange();
	}
	deleteRule(index) {
		const newRules = [...this.state.rules];
		newRules.splice(index, 1);
		this.state = {
			...this.state,
			rules: newRules
		};
		this.notifyChange();
	}
	updateRule(index, updates) {
		const newRules = [...this.state.rules];
		newRules[index] = {
			...newRules[index],
			...updates
		};
		this.state = {
			...this.state,
			rules: newRules
		};
		this.notifyChange();
	}
	addCondition(ruleIndex, insertAt) {
		const rule = this.state.rules[ruleIndex];
		const newCond = {
			field: "Subject",
			operator: "contains",
			value: ""
		};
		const newConditions = [...rule.conditions];
		if (insertAt !== void 0) newConditions.splice(insertAt, 0, newCond);
		else newConditions.push(newCond);
		this.updateRule(ruleIndex, { conditions: newConditions });
	}
	deleteCondition(ruleIndex, condIndex) {
		const newConditions = [...this.state.rules[ruleIndex].conditions];
		newConditions.splice(condIndex, 1);
		this.updateRule(ruleIndex, { conditions: newConditions });
	}
	updateCondition(ruleIndex, condIndex, updates) {
		const newConditions = [...this.state.rules[ruleIndex].conditions];
		const currentCond = newConditions[condIndex];
		if (updates.field && updates.field !== currentCond.field) {
			if (updates.field === "Size") {
				if (currentCond.operator !== "over" && currentCond.operator !== "under") updates.operator = "over";
			} else if (currentCond.operator === "over" || currentCond.operator === "under") updates.operator = "contains";
		}
		newConditions[condIndex] = {
			...currentCond,
			...updates
		};
		this.updateRule(ruleIndex, { conditions: newConditions });
	}
	addAction(ruleIndex, insertAt) {
		const rule = this.state.rules[ruleIndex];
		const newAct = {
			type: "fileinto",
			value: this.folders[0] || "INBOX"
		};
		const newActions = [...rule.actions];
		if (insertAt !== void 0) newActions.splice(insertAt, 0, newAct);
		else newActions.push(newAct);
		this.updateRule(ruleIndex, { actions: newActions });
	}
	deleteAction(ruleIndex, actionIndex) {
		const newActions = [...this.state.rules[ruleIndex].actions];
		newActions.splice(actionIndex, 1);
		this.updateRule(ruleIndex, { actions: newActions });
	}
	updateAction(ruleIndex, actionIndex, updates) {
		const newActions = [...this.state.rules[ruleIndex].actions];
		newActions[actionIndex] = {
			...newActions[actionIndex],
			...updates
		};
		this.updateRule(ruleIndex, { actions: newActions });
	}
	notifyChange() {
		this.dispatchEvent(new CustomEvent("state-changed", { detail: { state: this.state } }));
	}
	save() {
		this.dispatchEvent(new CustomEvent("save-requested"));
	}
	render() {
		return b`
			<div class="editor-container">
				${this.state.rules.length === 0 ? b`
					<div class="empty-state">${this.i18nStore.t("managesieve.visual.noRules")}</div>
				` : this.state.rules.map((rule, rIdx) => b`
					<div class="rule-card">
						<div class="rule-header">
							<alps-icon-btn icon="x" title=${this.i18nStore.t("managesieve.visual.deleteRule")} @click=${() => this.deleteRule(rIdx)}></alps-icon-btn>
						</div>

						<div class="condition-row">
							<div class="row-label">${this.i18nStore.t("managesieve.visual.if")}</div>
							<div class="row-content">
								<alps-select 
									.value=${rule.matchType}
									.options=${[{
			value: "all",
			label: this.i18nStore.t("managesieve.visual.all")
		}, {
			value: "any",
			label: this.i18nStore.t("managesieve.visual.any")
		}]}
									@change=${(e) => this.updateRule(rIdx, { matchType: e.target.value })}>
								</alps-select>
								<span class="row-text">${this.i18nStore.t("managesieve.visual.ofTheFollowing")}</span>
							</div>
						</div>
						

						${rule.conditions.map((cond, cIdx) => b`
							<div class="condition-row">
								<div class="row-label"></div>
								<alps-select 
									.value=${cond.field}
									.options=${[
			{
				value: "Subject",
				label: this.i18nStore.t("managesieve.visual.fields.subject")
			},
			{
				value: "From",
				label: this.i18nStore.t("managesieve.visual.fields.from")
			},
			{
				value: "To",
				label: this.i18nStore.t("managesieve.visual.fields.to")
			},
			{
				value: "Body",
				label: this.i18nStore.t("managesieve.visual.fields.body")
			},
			{
				value: "Size",
				label: this.i18nStore.t("managesieve.visual.fields.size")
			}
		]}
									@change=${(e) => this.updateCondition(rIdx, cIdx, { field: e.target.value })}>
								</alps-select>
								<alps-select 
									.value=${cond.operator}
									.options=${cond.field === "Size" ? [{
			value: "over",
			label: this.i18nStore.t("managesieve.visual.operators.over")
		}, {
			value: "under",
			label: this.i18nStore.t("managesieve.visual.operators.under")
		}] : [
			{
				value: "contains",
				label: this.i18nStore.t("managesieve.visual.operators.contains")
			},
			{
				value: "not_contains",
				label: this.i18nStore.t("managesieve.visual.operators.not_contains")
			},
			{
				value: "is",
				label: this.i18nStore.t("managesieve.visual.operators.is")
			},
			{
				value: "not_is",
				label: this.i18nStore.t("managesieve.visual.operators.not_is")
			}
		]}
									@change=${(e) => this.updateCondition(rIdx, cIdx, { operator: e.target.value })}>
								</alps-select>
								<alps-input class="flex-1" .value=${cond.value} @input=${(e) => this.updateCondition(rIdx, cIdx, { value: e.target.value })}></alps-input>
								${rule.conditions.length > 1 ? b`<alps-icon-btn icon="minus-square" title=${this.i18nStore.t("managesieve.visual.remove")} @click=${() => this.deleteCondition(rIdx, cIdx)}></alps-icon-btn>` : ""}
								<alps-icon-btn icon="plus-square" title=${this.i18nStore.t("managesieve.visual.add")} @click=${() => this.addCondition(rIdx, cIdx + 1)}></alps-icon-btn>
							</div>
						`)}

						<div class="connector">
							<svg width="24" height="24" class="connector-icon"><use href="/assets/icons/sprite.svg?v=10#arrow-fat-lines-down"></use></svg>
						</div>

						${rule.actions.map((act, aIdx) => b`
							<div class="action-row">
								<div class="row-label">
									${aIdx === 0 ? this.i18nStore.t("managesieve.visual.then") : ""}
								</div>
								<alps-select 
									.value=${act.type}
									.options=${[
			{
				value: "fileinto",
				label: this.i18nStore.t("managesieve.visual.actions.fileinto")
			},
			{
				value: "redirect",
				label: this.i18nStore.t("managesieve.visual.actions.redirect")
			},
			{
				value: "discard",
				label: this.i18nStore.t("managesieve.visual.actions.discard")
			},
			{
				value: "stop",
				label: this.i18nStore.t("managesieve.visual.actions.stop")
			}
		]}
									@change=${(e) => this.updateAction(rIdx, aIdx, {
			type: e.target.value,
			value: ""
		})}>
								</alps-select>
								${act.type === "fileinto" ? b`
									<alps-select 
										class="flex-1" 
										.value=${act.value || ""}
										.options=${[...this.folders.map((f) => ({
			value: f,
			label: f
		}))]}
										@change=${(e) => this.updateAction(rIdx, aIdx, { value: e.target.value })}>
									</alps-select>
								` : act.type === "redirect" ? b`
									<alps-input type="email" class="flex-1" placeholder=${this.i18nStore.t("managesieve.visual.fields.emailAddress")} .value=${act.value || ""} @input=${(e) => this.updateAction(rIdx, aIdx, { value: e.target.value })}></alps-input>
								` : ""}
								${rule.actions.length > 1 ? b`<alps-icon-btn icon="minus-square" title=${this.i18nStore.t("managesieve.visual.remove")} @click=${() => this.deleteAction(rIdx, aIdx)}></alps-icon-btn>` : ""}
								${act.type !== "stop" ? b`<alps-icon-btn icon="plus-square" title=${this.i18nStore.t("managesieve.visual.add")} @click=${() => this.addAction(rIdx, aIdx + 1)}></alps-icon-btn>` : ""}
							</div>
						`)}

					</div>
				`)}
				
				<div class="actions-container" >
					<alps-button variant="normal" @click=${this.addRule}>${this.i18nStore.t("managesieve.visual.newRule")}</alps-button>
					${this.state.rules.length > 0 ? b`<alps-button variant="text" @click=${() => this.dispatchEvent(new CustomEvent("switch-raw-requested"))}>${this.i18nStore.t("managesieve.tabs.switchToRaw")}</alps-button>` : ""}
					<div class="flex-1"></div>
					${this.isDirty ? b`<alps-button variant="primary" ?spinning=${this.isSaving} ?disabled=${this.isSaving} @click=${this.save}>${this.i18nStore.t("managesieve.visual.saveFilters")}</alps-button>` : ""}
				</div>
			</div>
		`;
	}
};
__decorate([n$1({ type: Boolean })], VisualEditor.prototype, "isSaving", void 0);
__decorate([r()], VisualEditor.prototype, "initialSnapshot", void 0);
__decorate([c({
	context: i18nContext,
	subscribe: true
})], VisualEditor.prototype, "i18nStore", void 0);
__decorate([n$1({ type: Object })], VisualEditor.prototype, "state", void 0);
__decorate([n$1({ type: Array })], VisualEditor.prototype, "folders", void 0);
VisualEditor = __decorate([t("alps-visual-editor")], VisualEditor);
//#endregion
//#region ../plugins/managesieve/frontend/managesieve-page.ts
var ManageSievePage = class ManageSievePage extends i {
	constructor(..._args) {
		super(..._args);
		this.mode = "visual";
		this.script = "";
		this.visualState = { rules: [] };
		this.folders = [];
		this.isLoading = true;
		this.isSaving = false;
		this.showSwitchRawConfirm = false;
	}
	static {
		this.styles = i$1`
		.container {
			display: flex;
			flex-direction: column;
			gap: 20px;
			padding-bottom: 32px;
		}
		.switch-btn-container {
			margin-top: 16px;
			padding-top: 16px;
			border-top: 1px solid var(--border-color, #eee);
		}
	`;
	}
	connectedCallback() {
		super.connectedCallback();
		this.fetchScript();
		this.fetchFolders();
	}
	async fetchScript() {
		try {
			const data = await managesieveService.fetchScript();
			this.script = data.content || "";
			if (this.script.trim() === "") {
				this.mode = "visual";
				this.visualState = { rules: [] };
			} else {
				const parsed = SieveCompiler.extractVisualState(this.script);
				if (parsed) {
					this.visualState = parsed;
					this.mode = "visual";
				} else this.mode = "raw";
			}
		} catch (e) {
			console.error("Failed to fetch Sieve script", e);
			this.visualState = { rules: [] };
			this.mode = "visual";
		} finally {
			this.isLoading = false;
		}
	}
	async fetchFolders() {
		try {
			const data = await managesieveService.fetchFolders();
			if (data && data.Mailboxes) this.folders = data.Mailboxes.map((m) => m.Name || m.Mailbox).filter(Boolean);
		} catch (e) {
			console.error("Failed to fetch folders", e);
		}
	}
	handleVisualStateChange(e) {
		this.visualState = e.detail.state;
	}
	handleRawScriptChange(e) {
		this.script = e.detail.script;
	}
	switchToRaw() {
		this.showSwitchRawConfirm = true;
	}
	confirmSwitchToRaw() {
		this.script = SieveCompiler.compile(this.visualState);
		this.mode = "raw";
		this.showSwitchRawConfirm = false;
	}
	async saveVisual() {
		this.isSaving = true;
		try {
			const compiled = SieveCompiler.compile(this.visualState);
			this.script = compiled;
			await managesieveService.saveScript(compiled, "PUT");
			const msgKey = compiled.trim() === "" ? "managesieve.toast.deactivated" : "managesieve.toast.saved";
			window.dispatchEvent(new CustomEvent("show-toast", { detail: {
				message: this.i18nStore.t(msgKey),
				timeout: 3e3
			} }));
			const editor = this.shadowRoot?.querySelector("alps-visual-editor");
			if (editor && editor.markClean) editor.markClean();
		} catch (e) {
			window.dispatchEvent(new CustomEvent("show-toast", { detail: {
				message: e.message || this.i18nStore.t("managesieve.toast.networkError"),
				timeout: 5e3,
				type: "error"
			} }));
		} finally {
			this.isSaving = false;
		}
	}
	render() {
		return b`
			<div class="container">
				<alps-setting-group label="${this.i18nStore.t("managesieve.title")}" description="${this.i18nStore.t("managesieve.description")}">
					${this.isLoading ? b`
						<div style="display: flex; justify-content: center; align-items: center; min-height: 300px;">
							<alps-loader></alps-loader>
						</div>
					` : this.mode === "visual" ? b`
						<alps-visual-editor 
							.isSaving=${this.isSaving} 
							.state=${this.visualState} 
							.folders=${this.folders}
							@state-changed=${this.handleVisualStateChange}
							@save-requested=${this.saveVisual}
							@switch-raw-requested=${this.switchToRaw}
						></alps-visual-editor>
					` : b`
						<alps-raw-editor 
							.script=${this.script}
							@script-changed=${this.handleRawScriptChange}
						></alps-raw-editor>
					`}
				</alps-setting-group>
			</div>

			${this.showSwitchRawConfirm ? b`
				<ui-confirm
					title=${this.i18nStore.t("managesieve.warningRawSwitchTitle")}
					message="${this.i18nStore.t("managesieve.warningRawSwitch")}"
					confirmText=${this.i18nStore.t("managesieve.warningRawSwitchConfirm")}
					isDanger=${true}
					@confirm=${this.confirmSwitchToRaw}
					@cancel=${() => this.showSwitchRawConfirm = false}
				></ui-confirm>
			` : ""}
		`;
	}
};
__decorate([c({
	context: i18nContext,
	subscribe: true
})], ManageSievePage.prototype, "i18nStore", void 0);
__decorate([r()], ManageSievePage.prototype, "mode", void 0);
__decorate([r()], ManageSievePage.prototype, "script", void 0);
__decorate([r()], ManageSievePage.prototype, "visualState", void 0);
__decorate([r()], ManageSievePage.prototype, "folders", void 0);
__decorate([r()], ManageSievePage.prototype, "isLoading", void 0);
__decorate([r()], ManageSievePage.prototype, "isSaving", void 0);
__decorate([r()], ManageSievePage.prototype, "showSwitchRawConfirm", void 0);
ManageSievePage = __decorate([t("alps-managesieve-page")], ManageSievePage);
//#endregion
//#region ../plugins/managesieve/frontend/index.ts
var frontend_exports$1 = /* @__PURE__ */ __exportAll({});
registry.registerSettingsTab({
	id: "managesieve",
	labelKey: "settings.categories.filters",
	icon: "sieve",
	component: "alps-managesieve-page"
});
//#endregion
//#region ../plugins/password/frontend/password-settings.ts
var PasswordSettings = class PasswordSettings extends i {
	constructor(..._args) {
		super(..._args);
		this.passwordForm = {
			old: "",
			new: "",
			confirm: ""
		};
		this.isSubmitting = false;
	}
	static {
		this.styles = i$1`
		input[type="password"] {
			width: 100%;
			box-sizing: border-box;
			padding: var(--input-padding, 8px 12px);
			border: 1px solid var(--border-color);
			border-radius: var(--input-radius, 6px);
			background-color: var(--bg-primary);
			color: var(--text-primary);
			font-size: var(--input-font-size, 14px);
			outline: none;
			font-family: var(--font-base);
		}

		input:focus {
			border-color: var(--accent-color, #2563eb);
			box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
		}
	`;
	}
	handlePasswordFormChange(e, field) {
		const target = e.target;
		this.passwordForm = {
			...this.passwordForm,
			[field]: target.value
		};
	}
	async submitPasswordChange() {
		if (!this.passwordForm.old || !this.passwordForm.new || !this.passwordForm.confirm) {
			window.dispatchEvent(new CustomEvent("show-toast", { detail: {
				message: this.i18nStore?.t("settings.password.fillAllFields"),
				timeout: 3e3
			} }));
			return;
		}
		if (this.passwordForm.new !== this.passwordForm.confirm) {
			window.dispatchEvent(new CustomEvent("show-toast", { detail: {
				message: this.i18nStore?.t("settings.password.passwordMismatch"),
				timeout: 3e3
			} }));
			return;
		}
		this.isSubmitting = true;
		try {
			const response = await fetch("/password/change", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					old_password: this.passwordForm.old,
					password: this.passwordForm.new
				})
			});
			const data = await response.json();
			if (response.ok) {
				window.dispatchEvent(new CustomEvent("show-toast", { detail: {
					message: data.message || "Password successfully changed.",
					timeout: 3e3
				} }));
				this.passwordForm = {
					old: "",
					new: "",
					confirm: ""
				};
			} else window.dispatchEvent(new CustomEvent("show-toast", { detail: {
				message: data.error || "Failed to change password.",
				timeout: 3e3
			} }));
		} catch (e) {
			window.dispatchEvent(new CustomEvent("show-toast", { detail: {
				message: "Network error occurred.",
				timeout: 3e3
			} }));
		} finally {
			this.isSubmitting = false;
		}
	}
	render() {
		return b`
			<alps-setting-group label="${this.i18nStore?.t("settings.password.changePassword")}" description="${this.i18nStore?.t("settings.password.changePasswordDesc")}">
					<alps-input type="password" icon="key"
							placeholder="${this.i18nStore?.t("settings.password.oldPassword")}" 
							.value=${this.passwordForm.old} 
							@input=${(e) => this.handlePasswordFormChange(e, "old")}
					></alps-input>
					<alps-input type="password" icon="key"
							placeholder="${this.i18nStore?.t("settings.password.newPassword")}" 
							.value=${this.passwordForm.new} 
							@input=${(e) => this.handlePasswordFormChange(e, "new")}
					></alps-input>
					<alps-input type="password" icon="key"
							placeholder="${this.i18nStore?.t("settings.password.confirmPassword")}" 
							.value=${this.passwordForm.confirm} 
							@input=${(e) => this.handlePasswordFormChange(e, "confirm")}
					></alps-input>
					
					<alps-button 
						variant="normal"
						style="align-self: flex-start;"
						?disabled=${this.isSubmitting || !this.passwordForm.old || !this.passwordForm.new || !this.passwordForm.confirm}
						?spinning=${this.isSubmitting}
						@click=${this.submitPasswordChange}>
						${this.i18nStore?.t("settings.password.updatePassword")}
					</alps-button>
			</alps-setting-group>			
	`;
	}
};
__decorate([c({ context: i18nContext })], PasswordSettings.prototype, "i18nStore", void 0);
__decorate([r()], PasswordSettings.prototype, "passwordForm", void 0);
__decorate([r()], PasswordSettings.prototype, "isSubmitting", void 0);
PasswordSettings = __decorate([t("alps-password-settings")], PasswordSettings);
//#endregion
//#region ../plugins/password/frontend/index.ts
var frontend_exports = /* @__PURE__ */ __exportAll({});
registry.registerSettingsTab({
	id: "password",
	labelKey: "settings.categories.password",
	icon: "password",
	component: "alps-password-settings"
});
//#endregion
//#region src/router.ts
var Router = class {
	constructor(routes, fallback, onChange) {
		this.routes = routes;
		this.fallback = fallback;
		this.currentPath = this.getHashPath();
		window.addEventListener("hashchange", () => {
			this.currentPath = this.getHashPath();
			onChange();
		});
	}
	getHashPath() {
		const hash = window.location.hash;
		if (!hash || hash === "#") return "/";
		return hash.substring(1).split("?")[0];
	}
	navigate(path) {
		window.location.hash = path;
	}
	render() {
		if (this.routes[this.currentPath]) return this.routes[this.currentPath]();
		for (const route in this.routes) if (route.endsWith("/*") && this.currentPath.startsWith(route.replace("/*", ""))) return this.routes[route]();
		return this.fallback();
	}
};
//#endregion
//#region src/components/alps-auth-card.ts
var AlpsAuthCard = class AlpsAuthCard extends i {
	constructor(..._args) {
		super(..._args);
		this.icon = "";
		this.title = "";
		this.subtitle = "";
	}
	static {
		this.styles = i$1`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      background: var(--bg-secondary, #f9fafb);
      position: relative;
    }

    .card {
      position: relative;
      z-index: 1;
      background: var(--bg-primary, #ffffff);
      border: 1px solid var(--border-color, #e5e7eb);
      padding: 32px;
      border-radius: var(--radius-lg, 8px);
      box-shadow: rgba(95, 95, 95, 0.15) 0 4px 12px 0px;
      width: 100%;
      max-width: 360px;
      color: var(--text-primary, #111827);
    }

    .logo-container {
      display: flex;
      justify-content: center;
      margin-bottom: 12px;
    }

    .logo-container svg {
      width: var(--auth-card-icon-size, 40px);
      height: var(--auth-card-icon-size, 40px);
      fill: var(--auth-card-icon-color, currentColor);
    }

    h1 {
      margin-top: 0;
      margin-bottom: 4px;
      text-align: center;
      font-family: var(--font-heading, 'Inter', sans-serif);
      font-size: 28px;
      font-weight: 700;
      color: var(--text-primary, #111827);
    }

    p.subtitle {
      text-align: center;
      color: var(--text-secondary, #4b5563);
      margin-bottom: 24px;
      font-size: 14px;
      line-height: 1.5;
    }

    @media (max-width: 640px) {
      :host {
        background: var(--bg-primary, #ffffff);
      }
      
      .card {
        border: none;
        box-shadow: none;
      }
    }
  `;
	}
	render() {
		return b`
      <div class="card">
        ${this.icon ? b`
          <div class="logo-container">
            ${renderIcon(this.icon)}
          </div>
        ` : ""}
        ${this.title ? b`<h1>${this.title}</h1>` : ""}
        ${this.subtitle ? b`<p class="subtitle">${this.subtitle}</p>` : ""}
        
        <slot></slot>
      </div>
    `;
	}
};
__decorate([n$1({ type: String })], AlpsAuthCard.prototype, "icon", void 0);
__decorate([n$1({ type: String })], AlpsAuthCard.prototype, "title", void 0);
__decorate([n$1({ type: String })], AlpsAuthCard.prototype, "subtitle", void 0);
AlpsAuthCard = __decorate([t("alps-auth-card")], AlpsAuthCard);
//#endregion
//#region src/pages/login-page.ts
var LoginPage = class LoginPage extends i {
	constructor(..._args) {
		super(..._args);
		this.notice = null;
		this.username = "";
		this.password = "";
		this.rememberMe = false;
		this.error = "";
		this.isSubmitting = false;
		this.retryAfter = 0;
		this.isRateLimited = false;
		this._handleI18nChange = () => {
			this.requestUpdate();
		};
	}
	static {
		this.styles = i$1`
    .form-group {
      margin-bottom: 16px;
      position: relative;
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
    }

    .native-input {
      width: 100%;
      height: 36px;
      padding: 0 12px;
      background: var(--alps-input-bg, var(--bg-primary, #ffffff));
      border: 1px solid var(--border-color, #e5e7eb);
      border-radius: var(--input-radius, 6px);
      color: var(--text-primary, #111827);
      font-family: var(--font-base, 'Inter', sans-serif);
      font-size: var(--input-font-size, 14px);
      transition: all 0.2s ease;
      box-sizing: border-box;
      outline: none;
    }

    .has-left-icon .native-input {
      padding-left: 36px;
    }

    .native-input:focus {
      border-color: var(--accent-color, #005A9E);
      box-shadow: 0 0 0 2px rgba(0, 90, 158, 0.2);
    }

    .native-input::placeholder {
      color: var(--text-muted, #9ca3af);
    }

    .icon-left {
      position: absolute;
      left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      color: var(--text-muted, #9ca3af);
      pointer-events: none;
    }

    .icon-left svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }

    .checkbox-group {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }

    .checkbox-group label {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 14px;
      color: var(--text-secondary, #4b5563);
      user-select: none;
    }

    .checkbox-group input[type="checkbox"] {
      width: 16px;
      height: 16px;
      margin: 0;
      margin-right: 8px;
      cursor: pointer;
      accent-color: var(--accent-color, #2563eb);
    }

    .error-container {
      border-radius: var(--radius-md, 6px);
      padding: 8px 12px;
      margin-bottom: 24px;
      animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
    }

    .error-text {
      color: var(--error, #ef4444);
      font-size: 14px;
      margin: 0;
      text-align: center;
    }

    .notice-container {
      border-radius: var(--radius-md, 6px);
      padding: 8px 12px;
      margin-bottom: 24px;
      background: var(--bg-tertiary, rgba(0, 0, 0, 0.04));
      border: 1px solid var(--border-color, #e5e7eb);
    }

    .notice-text {
      color: var(--text-secondary, #4b5563);
      font-size: 14px;
      margin: 0;
      text-align: center;
    }

    @keyframes shake {
      10%, 90% { transform: translate3d(-1px, 0, 0); }
      20%, 80% { transform: translate3d(2px, 0, 0); }
      30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
      40%, 60% { transform: translate3d(4px, 0, 0); }
    }

    .submit-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 36px;
      margin-top: 4px;
      gap: 8px;
      background-color: var(--accent-color, #3b82f6);
      color: #ffffff;
      border: 1px solid transparent;
      border-radius: var(--btn-radius, 4px);
      font-family: inherit;
      font-size: var(--btn-font-size, 14px);
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      box-sizing: border-box;
      outline: none;
    }

    .submit-btn:hover:not(:disabled) {
      background-color: var(--accent-hover, #2563eb);
    }

    .submit-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .submit-btn:active:not(:disabled) {
      transform: scale(0.98);
    }

    .spinner {
      animation: spin 1s linear infinite;
      display: flex;
      width: 18px;
      height: 18px;
    }

    .spinner svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }
  `;
	}
	connectedCallback() {
		super.connectedCallback();
		this.notice = takeLoginNotice();
		this.updateComplete.then(() => {
			this.i18nStore?.addEventListener("change", this._handleI18nChange);
		});
		if (this.composeStore) this.composeStore.clearAllComposers();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.i18nStore?.removeEventListener("change", this._handleI18nChange);
		if (this.retryCountdownInterval) clearInterval(this.retryCountdownInterval);
	}
	startRetryCountdown(seconds) {
		this.retryAfter = seconds;
		this.isRateLimited = true;
		if (this.retryCountdownInterval) clearInterval(this.retryCountdownInterval);
		this.retryCountdownInterval = setInterval(() => {
			this.retryAfter--;
			if (this.retryAfter <= 0) {
				this.isRateLimited = false;
				if (this.retryCountdownInterval) {
					clearInterval(this.retryCountdownInterval);
					this.retryCountdownInterval = void 0;
				}
			}
		}, 1e3);
	}
	formatRetryTime(seconds) {
		if (seconds < 60) return `${seconds} second${seconds !== 1 ? "s" : ""}`;
		const minutes = Math.ceil(seconds / 60);
		return `${minutes} minute${minutes !== 1 ? "s" : ""}`;
	}
	async handleSubmit(e) {
		e.preventDefault();
		if (this.isSubmitting) return;
		const form = this.shadowRoot?.querySelector("form");
		if (form && !form.checkValidity()) {
			form.reportValidity();
			return;
		}
		this.error = "";
		this.isSubmitting = true;
		try {
			await new Promise((resolve) => setTimeout(resolve, 600));
			const payload = {
				username: this.username,
				password: this.password,
				"remember-me": this.rememberMe ? "on" : ""
			};
			const response = await fetch("/session", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload)
			});
			const data = await response.json();
			if (response.ok) if (data.requires_2fa) {
				window.location.hash = "/login/webauthn";
				this.isSubmitting = false;
			} else {
				window.dispatchEvent(new CustomEvent("user-logged-in"));
				window.location.hash = "/mailbox/INBOX";
			}
			else {
				if (response.status === 429 && data.retry_after) {
					this.error = data.error || this.i18nStore?.t("login.tooManyAttempts");
					this.startRetryCountdown(data.retry_after);
				} else {
					this.error = data.error || this.i18nStore?.t("login.loginFailed");
					this.isRateLimited = false;
				}
				this.isSubmitting = false;
			}
		} catch (err) {
			this.error = this.i18nStore?.t("login.networkError");
			this.isSubmitting = false;
			this.isRateLimited = false;
		}
	}
	render() {
		return b`
      <alps-auth-card 
        icon="edelweiss" 
        title="Alps" 
        subtitle="${this.i18nStore?.t("login.subtitle")}">

        ${this.notice && !this.error ? b`
          <div class="notice-container">
            <p class="notice-text">${this.i18nStore?.t(`login.${this.notice}`)}</p>
          </div>
        ` : ""}

        ${this.error ? b`
          <div class="error-container">
            <p class="error-text">
              ${this.error}
              ${this.isRateLimited && this.retryAfter > 0 ? b`
                <br><strong>${this.i18nStore?.t("login.pleaseWait")} ${this.formatRetryTime(this.retryAfter)}</strong>
              ` : ""}
            </p>
          </div>
        ` : ""}

        <form @submit=${this.handleSubmit}>
          <div class="form-group">
            <div class="input-wrapper has-left-icon">
              <span class="icon-left">${renderIcon("at")}</span>
              <input 
                type="text" 
                id="username" 
                name="username"
                class="native-input"
                placeholder="${this.i18nStore?.t("login.emailPlaceholder")}"
                .value=${this.username}
                @input=${(e) => this.username = e.target.value}
                required
                autocomplete="username"
              />
            </div>
          </div>
          <div class="form-group">
            <div class="input-wrapper has-left-icon">
              <span class="icon-left">${renderIcon("key")}</span>
              <input 
                type="password" 
                id="password" 
                name="password"
                class="native-input"
                placeholder="${this.i18nStore?.t("login.passwordPlaceholder")}"
                .value=${this.password}
                @input=${(e) => this.password = e.target.value}
                required
                autocomplete="current-password"
              />
            </div>
          </div>
          <div class="checkbox-group">
            <label>
              <input 
                type="checkbox" 
                .checked=${this.rememberMe}
                @change=${(e) => this.rememberMe = e.target.checked}
              />
              ${this.i18nStore?.t("login.keepMeSignedIn")}
            </label>
          </div>
          <button 
            type="submit" 
            class="submit-btn"
            ?disabled=${this.isSubmitting || this.isRateLimited}>
            ${this.isSubmitting ? b`<alps-loader style="--loader-size: 16px;"></alps-loader>` : ""}
            <span>${this.isRateLimited ? `${this.i18nStore?.t("login.wait")} ${this.formatRetryTime(this.retryAfter)}` : this.i18nStore?.t("login.signIn")}</span>
          </button>
        </form>
      </alps-auth-card>
    `;
	}
};
__decorate([c({ context: i18nContext })], LoginPage.prototype, "i18nStore", void 0);
__decorate([r()], LoginPage.prototype, "notice", void 0);
__decorate([r()], LoginPage.prototype, "username", void 0);
__decorate([r()], LoginPage.prototype, "password", void 0);
__decorate([r()], LoginPage.prototype, "rememberMe", void 0);
__decorate([r()], LoginPage.prototype, "error", void 0);
__decorate([r()], LoginPage.prototype, "isSubmitting", void 0);
__decorate([r()], LoginPage.prototype, "retryAfter", void 0);
__decorate([r()], LoginPage.prototype, "isRateLimited", void 0);
__decorate([c({
	context: composeContext,
	subscribe: true
})], LoginPage.prototype, "composeStore", void 0);
LoginPage = __decorate([t("login-page")], LoginPage);
//#endregion
//#region src/components/alps-category-item.ts
var AlpsCategoryItem = class AlpsCategoryItem extends i {
	constructor(..._args) {
		super(..._args);
		this.active = false;
		this.icon = "";
	}
	static {
		this.styles = i$1`
    :host {
      display: flex;
      align-items: center;
      padding: 8px 16px;
      margin: 2px 12px;
      cursor: pointer;
      border-radius: 6px;
      color: var(--text-secondary);
      font-weight: 500;
      transition: background 0.15s;
      user-select: none;
      white-space: nowrap;
      overflow: hidden;
    }

    .category-icon {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      margin-right: 12px;
      opacity: 0.7;
    }

    :host([active]) .category-icon {
      opacity: 1;
    }

    .category-icon svg {
      width: 18px;
      height: 18px;
      fill: currentColor;
    }

    :host(:hover) {
      background: var(--hover-color);
      color: var(--text-primary);
    }

    :host([active]) {
      background: var(--bg-selected);
      color: var(--accent-hover);
      font-weight: 600;
    }

    .label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `;
	}
	render() {
		return b`
      ${this.icon ? b`
        <span class="category-icon">${renderIcon(this.icon)}</span>
      ` : ""}
      <span class="label"><slot></slot></span>
    `;
	}
};
__decorate([n$1({
	type: Boolean,
	reflect: true
})], AlpsCategoryItem.prototype, "active", void 0);
__decorate([n$1({ type: String })], AlpsCategoryItem.prototype, "icon", void 0);
AlpsCategoryItem = __decorate([t("alps-category-item")], AlpsCategoryItem);
//#endregion
//#region src/components/settings-accounts.ts
var SettingsAccounts = class SettingsAccounts extends i {
	constructor(..._args) {
		super(..._args);
		this.newUsername = "";
		this.newPassword = "";
		this.newDisplayName = "";
		this.isSubmitting = false;
		this.error = "";
		this.showAddForm = false;
		this._handleStoreChange = () => {
			this.requestUpdate();
		};
	}
	static {
		this.styles = i$1`
        :host {
            display: block;
        }
            
        .setting-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 16px;
            background: var(--bg-secondary);
            border-radius: 8px;
            margin-bottom: 8px;
        }

        .add-form {
            display: flex;
            flex-direction: column;
            gap: 16px;
            margin-top: 16px;
        }

        .form-row {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }

        .error-message {
            color: var(--danger-color, #dc2626);
            font-size: 13px;
            margin-top: 8px;
        }

        .empty-state {
            color: var(--text-muted);
            font-style: italic;
            padding: 16px 0;
            text-align: left;
        }
    `;
	}
	connectedCallback() {
		super.connectedCallback();
		this.updateComplete.then(() => {
			this.i18nStore?.addEventListener("change", this._handleStoreChange);
			this.linkedAccountsStore?.addEventListener("change", this._handleStoreChange);
			if (this.linkedAccountsStore && !this.linkedAccountsStore.isInitialized()) this.linkedAccountsStore.fetchAccounts();
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.i18nStore?.removeEventListener("change", this._handleStoreChange);
		this.linkedAccountsStore?.removeEventListener("change", this._handleStoreChange);
	}
	async handleAdd(e) {
		e.preventDefault();
		if (!this.newUsername || !this.newPassword) return;
		this.isSubmitting = true;
		this.error = "";
		try {
			await this.linkedAccountsStore.addAccount(this.newUsername, this.newPassword, this.newDisplayName);
			this.newUsername = "";
			this.newPassword = "";
			this.newDisplayName = "";
			this.showAddForm = false;
			window.dispatchEvent(new CustomEvent("show-toast", { detail: { message: this.i18nStore?.t("linkedAccounts.addedSuccess") } }));
		} catch (err) {
			this.error = err.message || this.i18nStore?.t("linkedAccounts.addError");
		} finally {
			this.isSubmitting = false;
		}
	}
	async handleRemove(username) {
		if (!confirm(this.i18nStore?.t("linkedAccounts.removeConfirm"))) return;
		try {
			await this.linkedAccountsStore.removeAccount(username);
			window.dispatchEvent(new CustomEvent("show-toast", { detail: { message: this.i18nStore?.t("linkedAccounts.removedSuccess") } }));
		} catch (err) {
			window.dispatchEvent(new CustomEvent("show-toast", { detail: { message: err.message || this.i18nStore?.t("linkedAccounts.removeError") } }));
		}
	}
	render() {
		const accounts = this.linkedAccountsStore?.getAccounts() || [];
		const isLoading = this.linkedAccountsStore?.isLoading();
		return b`
            <alps-setting-group 
                label="${this.i18nStore?.t("settings.categories.accounts")}"
                description="${this.i18nStore?.t("settings.categories.accountsDesc")}">
                
                <div class="account-list">
                    ${isLoading && !this.linkedAccountsStore.isInitialized() ? b`<div>${this.i18nStore?.t("settings.loading")}</div>` : accounts.length === 0 ? b`<div class="empty-state">${this.i18nStore?.t("linkedAccounts.noAccounts")}</div>` : accounts.map((account) => b`
                        <div class="setting-row">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <alps-avatar .name=${account.display_name || account.username} .size=${24}></alps-avatar>
                                <div style="display: flex; flex-direction: column; gap: 2px;">
                                    <strong>${account.display_name || account.username}</strong>
                                    ${account.display_name ? b`<div style="font-size: 13px; color: var(--text-secondary);">${account.username}</div>` : ""}
                                </div>
                            </div>
                            <div style="display: flex; align-items: center; gap: 16px;">
                                ${account.added_at && new Date(account.added_at).getFullYear() > 1970 ? b`
                                    <div style="font-size: 13px; color: var(--text-muted);">
                                        ${this.i18nStore?.t("webauthn.settings.added")} ${new Date(account.added_at).toLocaleString()}
                                    </div>
                                ` : ""}
                                <alps-icon-btn icon="trash" @click=${() => this.handleRemove(account.username)} title="${this.i18nStore?.t("linkedAccounts.remove")}"></alps-icon-btn>
                            </div>
                        </div>
                    `)}
                </div>

                ${!this.showAddForm ? b`
                    <alps-button variant="normal" @click=${() => this.showAddForm = true}>
                        ${this.i18nStore?.t("linkedAccounts.addTitle")}
                    </alps-button>
                ` : ""}
            </alps-setting-group>

            ${this.showAddForm ? b`
            <alps-setting-group 
                label="${this.i18nStore?.t("linkedAccounts.addTitle")}"
                description="${this.i18nStore?.t("linkedAccounts.description")}">
                <form class="add-form" style="margin-top: 0;" @submit=${this.handleAdd}>
                    <div class="form-row">
                        <alps-input 
                            type="email" 
                            placeholder="${this.i18nStore?.t("login.emailPlaceholder")}"
                            .value=${this.newUsername}
                            @input=${(e) => this.newUsername = e.target.value}
                            ?required=${true}
                        ></alps-input>
                    </div>
                    
                    <div class="form-row">
                        <alps-input 
                            type="password" icon="key"
                            placeholder="${this.i18nStore?.t("login.passwordPlaceholder")}"
                            .value=${this.newPassword}
                            @input=${(e) => this.newPassword = e.target.value}
                            ?required=${true}
                        ></alps-input>
                    </div>

                    <div class="form-row">
                        <alps-input 
                            type="text" icon="user"
                            placeholder="${this.i18nStore?.t("settings.identity.displayName")} (${this.i18nStore?.t("general.optional")})"
                            .value=${this.newDisplayName}
                            @input=${(e) => this.newDisplayName = e.target.value}
                        ></alps-input>
                    </div>

                    ${this.error ? b`<div class="error-message">${this.error}</div>` : ""}

                    <div style="display: flex; gap: 8px; margin-top: 8px;">
                        <alps-button variant="primary" ?disabled=${this.isSubmitting || !this.newUsername || !this.newPassword} ?spinning=${this.isSubmitting} @click=${this.handleAdd}>
                            ${this.i18nStore?.t("linkedAccounts.linkAccount")}
                        </alps-button>
                        <alps-button variant="text" @click=${(e) => {
			e.preventDefault();
			this.showAddForm = false;
		}}>
                            ${this.i18nStore?.t("general.cancel")}
                        </alps-button>
                    </div>
                </form>
            </alps-setting-group>
            ` : ""}
        `;
	}
};
__decorate([c({ context: i18nContext })], SettingsAccounts.prototype, "i18nStore", void 0);
__decorate([c({ context: linkedAccountsContext })], SettingsAccounts.prototype, "linkedAccountsStore", void 0);
__decorate([r()], SettingsAccounts.prototype, "newUsername", void 0);
__decorate([r()], SettingsAccounts.prototype, "newPassword", void 0);
__decorate([r()], SettingsAccounts.prototype, "newDisplayName", void 0);
__decorate([r()], SettingsAccounts.prototype, "isSubmitting", void 0);
__decorate([r()], SettingsAccounts.prototype, "error", void 0);
__decorate([r()], SettingsAccounts.prototype, "showAddForm", void 0);
SettingsAccounts = __decorate([t("settings-accounts")], SettingsAccounts);
//#endregion
//#region src/utils/webauthn-utils.ts
function base64urlToBuffer(base64url) {
	if (!base64url) throw new Error("base64url is null or undefined");
	const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
	const binary = atob(base64);
	const bytes = new Uint8Array(binary.length);
	for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
	return bytes.buffer;
}
function bufferToBase64url(buffer) {
	const bytes = new Uint8Array(buffer);
	let binary = "";
	for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
	return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
async function registerCredential(credentialCreationOptions) {
	credentialCreationOptions.publicKey.challenge = base64urlToBuffer(credentialCreationOptions.publicKey.challenge);
	credentialCreationOptions.publicKey.user.id = base64urlToBuffer(credentialCreationOptions.publicKey.user.id);
	if (credentialCreationOptions.publicKey.excludeCredentials) credentialCreationOptions.publicKey.excludeCredentials = credentialCreationOptions.publicKey.excludeCredentials.map((cred) => ({
		...cred,
		id: base64urlToBuffer(cred.id)
	}));
	const credential = await navigator.credentials.create(credentialCreationOptions);
	if (!credential) throw new Error("Credential creation failed or was cancelled.");
	const response = credential.response;
	const transports = response.getTransports ? response.getTransports() : [];
	return {
		id: credential.id,
		rawId: bufferToBase64url(credential.rawId),
		type: credential.type,
		response: {
			attestationObject: bufferToBase64url(response.attestationObject),
			clientDataJSON: bufferToBase64url(response.clientDataJSON)
		},
		transports
	};
}
async function authenticateCredential(credentialRequestOptions) {
	credentialRequestOptions.publicKey.challenge = base64urlToBuffer(credentialRequestOptions.publicKey.challenge);
	if (credentialRequestOptions.publicKey.allowCredentials) credentialRequestOptions.publicKey.allowCredentials = credentialRequestOptions.publicKey.allowCredentials.map((cred) => ({
		...cred,
		id: base64urlToBuffer(cred.id)
	}));
	const assertion = await navigator.credentials.get(credentialRequestOptions);
	if (!assertion) throw new Error("Assertion failed or was cancelled.");
	const response = assertion.response;
	return {
		id: assertion.id,
		rawId: bufferToBase64url(assertion.rawId),
		type: assertion.type,
		response: {
			authenticatorData: bufferToBase64url(response.authenticatorData),
			clientDataJSON: bufferToBase64url(response.clientDataJSON),
			signature: bufferToBase64url(response.signature),
			userHandle: response.userHandle ? bufferToBase64url(response.userHandle) : null
		}
	};
}
function isWebAuthnSupported() {
	return window.PublicKeyCredential !== void 0 && navigator.credentials !== void 0;
}
//#endregion
//#region src/components/alps-webauthn-settings.ts
var AlpsWebauthnSettings = class AlpsWebauthnSettings extends i {
	constructor(..._args) {
		super(..._args);
		this.data = null;
		this.error = "";
		this.loading = true;
		this.adding = false;
		this.showNamePrompt = false;
		this.pendingCredential = null;
		this.pendingDeleteId = null;
	}
	static {
		this.styles = i$1`
        :host { display: block; }
        .setting-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 16px;
            background: var(--bg-secondary);
            border-radius: 8px;
            margin-bottom: 8px;
        }
        .icon-container {
            display: flex;
            align-items: center;
            color: var(--text-secondary);
        }
        .icon-container svg {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }
        .cred-list { margin-top: 16px; }
        .alert { padding: 12px; border-radius: 6px; background: rgba(220, 38, 38, 0.1); color: var(--danger-color); margin-bottom: 12px; }
        .empty-state {
            color: var(--text-muted);
            font-style: italic;
            padding: 16px 0;
            text-align: left;
        }
    `;
	}
	connectedCallback() {
		super.connectedCallback();
		this.fetchData();
	}
	async fetchData() {
		try {
			this.loading = true;
			const res = await fetch("/settings/2fa");
			if (!res.ok) throw new Error("Failed to fetch settings");
			this.data = await res.json();
		} catch (e) {
			this.error = e.message;
		} finally {
			this.loading = false;
		}
	}
	async handleTrustToggle(e) {
		const target = e.target;
		await fetch("/settings/2fa/trust-linked-accounts", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ trust: target.checked })
		});
		this.fetchData();
	}
	async addCredential() {
		this.adding = true;
		this.error = "";
		try {
			const res = await fetch("/settings/2fa/begin", { method: "POST" });
			if (!res.ok) throw new Error(await res.text());
			const credential = await registerCredential(await res.json());
			this.pendingCredential = credential;
			this.showNamePrompt = true;
			this.adding = false;
		} catch (e) {
			if (e.name === "NotAllowedError" || e.message && e.message.includes("not allowed")) this.error = "";
			else this.error = this.i18nStore?.t("webauthn.errors.register_failed") || "There was an error registering your security key. Please try again.";
			this.adding = false;
		}
	}
	async _handlePromptSubmit(e) {
		const keyName = e.detail.keyName || "Security Key";
		this.showNamePrompt = false;
		const payload = {
			...this.pendingCredential,
			name: keyName
		};
		this.adding = true;
		this.error = "";
		try {
			const finishRes = await fetch("/settings/2fa/finish", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload)
			});
			if (!finishRes.ok) throw new Error(await finishRes.text());
			this.fetchData();
		} catch (err) {
			this.error = this.i18nStore?.t("webauthn.errors.register_failed") || "There was an error registering your security key. Please try again.";
		} finally {
			this.adding = false;
			this.pendingCredential = null;
		}
	}
	_handlePromptCancel() {
		this.showNamePrompt = false;
		this.pendingCredential = null;
	}
	removeCredential(id) {
		this.pendingDeleteId = id;
	}
	async executeRemoveCredential() {
		if (!this.pendingDeleteId) return;
		const id = this.pendingDeleteId;
		this.pendingDeleteId = null;
		try {
			this.error = "";
			const res = await fetch(`/settings/2fa/credential/${encodeURIComponent(id)}/delete`, { method: "POST" });
			if (!res.ok) throw new Error(await res.text());
			this.fetchData();
		} catch (err) {
			this.error = err.message || this.i18nStore?.t("webauthn.errors.remove_failed");
		}
	}
	render() {
		if (this.loading) return b`<div>Loading...</div>`;
		return b`
            ${this.showNamePrompt ? b`
                <ui-prompt 
                    title=${this.i18nStore?.t("webauthn.name_key_title")}
                    confirmText=${this.i18nStore?.t("general.save")}
                    cancelText=${this.i18nStore?.t("general.cancel")}
                    .fields=${[{
			id: "keyName",
			label: this.i18nStore?.t("webauthn.name_key_label"),
			placeholder: this.i18nStore?.t("webauthn.key_name_placeholder"),
			autofocus: true
		}]}
                    @submit=${this._handlePromptSubmit}
                    @cancel=${this._handlePromptCancel}
                ></ui-prompt>
            ` : ""}

            ${this.error ? b`
                <ui-modal 
                    title="${this.i18nStore?.t("general.error") || "Error"}" 
                    .isDanger=${true} 
                    .dismissible=${true}
                    @cancel=${() => this.error = ""}>
                    <div>${this.error}</div>
                    <div slot="actions">
                        <alps-button variant="normal" @click=${() => this.error = ""}>
                            ${this.i18nStore?.t("general.cancel") || "Close"}
                        </alps-button>
                    </div>
                </ui-modal>
            ` : ""}

            ${this.pendingDeleteId ? b`
                <ui-confirm
                    title="${this.i18nStore?.t("webauthn.settings.remove_btn") || "Remove Key"}"
                    message="${this.i18nStore?.t("webauthn.confirm_remove")}"
                    confirmText="${this.i18nStore?.t("general.delete") || "Delete"}"
                    cancelText="${this.i18nStore?.t("general.cancel")}"
                    isDanger
                    @confirm=${this.executeRemoveCredential}
                    @cancel=${() => this.pendingDeleteId = null}
                ></ui-confirm>
            ` : ""}

            <alps-setting-group 
                label="${this.i18nStore?.t("webauthn.settings.keys_title")}" 
                description="${this.i18nStore?.t("webauthn.settings.group_desc")}">

                <div class="cred-list" style="margin-top: 0;">
                    ${this.data?.credentialCount && this.data.credentialCount > 0 ? b`
                        ${this.data?.credentials.map((c) => b`
                            <div class="setting-row">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div class="icon-container">${renderIcon("fingerprint")}</div>
                                    <strong>${c.Name || "Security Key"}</strong>
                                </div>
                                <div style="display: flex; align-items: center; gap: 16px;">
                                    <div style="font-size: 13px; color: var(--text-muted);">${this.i18nStore?.t("webauthn.settings.added")} ${new Date(c.AddedAt).toLocaleString()}</div>
                                    <alps-icon-btn icon="trash" @click=${() => this.removeCredential(c.ID)} title=${this.i18nStore?.t("webauthn.settings.remove_btn") || "Remove"}></alps-icon-btn>
                                </div>
                            </div>
                        `)}
                    ` : b`<div class="empty-state">${this.i18nStore?.t("webauthn.settings.noKeys")}</div>`}
                    <alps-button variant="normal" style="margin-top: 12px;" @click=${this.addCredential} ?disabled=${this.adding} ?spinning=${this.adding}>
                        ${this.i18nStore?.t("webauthn.add_key")}
                    </alps-button>
                </div>
            </alps-setting-group>

            ${(this.data?.credentialCount ?? 0) > 0 ? b`
                <alps-setting-group label="${this.i18nStore?.t("webauthn.trust_linked")}" description="${this.i18nStore?.t("webauthn.trust_linked_desc")}">
                    <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 14px;">
                        <input type="checkbox" .checked=${this.data?.trustLinkedAccounts} @change=${this.handleTrustToggle}>
                        ${this.i18nStore?.t("webauthn.trust_linked_checkbox")}
                    </label>
                </alps-setting-group>
            ` : ""}
        `;
	}
};
__decorate([c({ context: i18nContext })], AlpsWebauthnSettings.prototype, "i18nStore", void 0);
__decorate([r()], AlpsWebauthnSettings.prototype, "data", void 0);
__decorate([r()], AlpsWebauthnSettings.prototype, "error", void 0);
__decorate([r()], AlpsWebauthnSettings.prototype, "loading", void 0);
__decorate([r()], AlpsWebauthnSettings.prototype, "adding", void 0);
__decorate([r()], AlpsWebauthnSettings.prototype, "showNamePrompt", void 0);
__decorate([r()], AlpsWebauthnSettings.prototype, "pendingCredential", void 0);
__decorate([r()], AlpsWebauthnSettings.prototype, "pendingDeleteId", void 0);
AlpsWebauthnSettings = __decorate([t("alps-webauthn-settings")], AlpsWebauthnSettings);
//#endregion
//#region src/pages/settings-page.ts
var SettingsPage = class SettingsPage extends i {
	constructor(..._args) {
		super(..._args);
		this.category = "general";
		this.isMobile = window.innerWidth <= 768;
		this.mobileSidebarOpen = false;
		this.username = "";
		this.isScrolled = false;
		this.sidebarWidth = 250;
		this.sidebarCollapsed = false;
		this.isSidebarDragging = false;
		this.isSidebarHovered = false;
		this.hoverTimeout = null;
		this.suppressSidebarHover = false;
		this._handleResize = () => {
			this.isMobile = window.innerWidth <= 768;
			if (!this.isMobile) this.mobileSidebarOpen = false;
		};
		this._handleScroll = (e) => {
			const target = e.target;
			this.isScrolled = target.scrollTop > 0;
		};
		this._handleSettingsChange = () => {
			this._syncState();
		};
		this._handleI18nChange = () => {
			this.requestUpdate();
		};
	}
	static {
		this.styles = [sidebarLayoutStyles, i$1`
    :host {
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100vw;
      background-color: var(--bg-primary);
      color: var(--text-primary);
      overflow: hidden;
      font-size: 14px;
    }

    .settings-title {
      font-weight: 500;
      font-size: 16px;
      color: var(--text-primary);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
    }

    .app-container.collapsed .main-view {
      box-shadow: rgba(95, 95, 95, 0.1) -4px 0 4px -2px;
      z-index: 25;
      border-left: 1px solid var(--border-color);
      position: relative;
    }

    .sidebar-wrapper.collapsed alps-category-item {
      border-radius: 6px 0 0 6px;
    }

    .sidebar-content {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      padding: 8px 0;
    }

    alps-sidebar::part(sidebar) {
      padding-top: 0;
    }

    .main-view {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      background: var(--bg-primary);
    }

    select {
      width: 100%;
      box-sizing: border-box;
      padding: var(--input-padding, 8px 12px);
      border: 1px solid var(--border-color);
      border-radius: var(--input-radius, 6px);
      background-color: var(--bg-primary);
      color: var(--text-primary);
      font-size: var(--input-font-size, 14px);
      outline: none;
    }

    select:focus, input:focus, textarea:focus {
      border-color: var(--accent-color, #2563eb);
      box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
    }

    input[type="text"], input[type="password"], input[type="number"], textarea {
      width: 100%;
      box-sizing: border-box;
      padding: var(--input-padding, 8px 12px);
      border: 1px solid var(--border-color);
      border-radius: var(--input-radius, 6px);
      background-color: var(--bg-primary);
      color: var(--text-primary);
      font-size: var(--input-font-size, 14px);
      outline: none;
      font-family: var(--font-base);
    }

    textarea {
      min-height: 80px;
      resize: vertical;
    }

    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      color: var(--text-primary);
      font-weight: 500;
    }

    input[type="checkbox"] {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }

    svg.icon {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    .header-icon-btn {
      background: none;
      border: none;
      cursor: pointer;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      padding: 4px;
    }
    
    .header-icon-btn svg {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    .header-left {
      display: flex;
      align-items: center;
    }

    .back-btn {
      gap: 6px;
      font-weight: 500;
      color: var(--text-primary);
      transition: color 0.2s;
    }
  `];
	}
	async connectedCallback() {
		super.connectedCallback();
		this.settingsStore.addEventListener("change", this._handleSettingsChange);
		this.i18nStore?.addEventListener("change", this._handleI18nChange);
		window.addEventListener("resize", this._handleResize);
		this._syncState();
		try {
			const response = await fetch("/session");
			if (response.ok) {
				const data = await response.json();
				if (data.Username) this.username = data.Username;
			}
		} catch (e) {
			Logger.error("Failed to fetch username in settings", e);
		}
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.settingsStore.removeEventListener("change", this._handleSettingsChange);
		this.i18nStore?.removeEventListener("change", this._handleI18nChange);
		window.removeEventListener("resize", this._handleResize);
	}
	_syncState() {
		this.settingsState = { ...this.settingsStore.getState() };
		this.sidebarCollapsed = this.settingsState.sidebarCollapsed || false;
	}
	getCategoryLabel(category) {
		switch (category) {
			case "general": return this.i18nStore?.t("settings.categories.general");
			case "identity": return this.i18nStore?.t("settings.categories.identity");
			case "webauthn": return this.i18nStore?.t("settings.categories.webauthn");
			case "accounts": return this.i18nStore?.t("settings.categories.accounts");
			case "reading": return this.i18nStore?.t("settings.categories.reading");
			case "appearance": return this.i18nStore?.t("settings.categories.appearance");
			case "localization": return this.i18nStore?.t("settings.categories.localization");
			default:
				const pluginTab = registry.getSettingsTabs().find((t) => t.id === category);
				if (pluginTab) return this.i18nStore?.t(pluginTab.labelKey);
				return category;
		}
	}
	selectCategory(category) {
		window.location.hash = `/settings/${category}`;
		if (this.isMobile) this.mobileSidebarOpen = false;
		if (this.sidebarCollapsed && !this.isMobile) this.suppressSidebarHover = true;
	}
	async handleUpdate(e, key) {
		const target = e.target;
		let val = target.value;
		if (target.type === "checkbox") {
			val = target.checked;
			if (key === "desktopNotifications" && val === true) {
				if ("Notification" in window && Notification.permission !== "granted" && Notification.permission !== "denied") {
					if (await Notification.requestPermission() !== "granted") {
						val = false;
						target.checked = false;
					}
				} else if ("Notification" in window && Notification.permission === "denied") {
					val = false;
					target.checked = false;
				}
			}
		} else if (target.type === "number" || [
			"checkMailInterval",
			"autoLogout",
			"messagesPerPage",
			"markReadTimeout",
			"undoTimeout"
		].includes(key)) {
			val = parseInt(target.value, 10);
			if (isNaN(val)) val = 0;
		}
		this.settingsStore.updateSettings({ [key]: val });
	}
	render() {
		return b`
      <alps-header 
        .username=${this.username}
        .isMobile=${this.isMobile}
        .scrolled=${this.isScrolled}
        currentTab="settings"
        @toggle-sidebar=${() => this.mobileSidebarOpen = !this.mobileSidebarOpen}
      >
        <div slot="left" class="header-left">
          ${!this.isMobile ? b`
            <button class="header-icon-btn back-btn" @click=${() => window.location.hash = ""} title=${this.i18nStore?.t("messageReader.back")}>
              ${renderIcon("arrowLeft")} ${this.i18nStore?.t("messageReader.back")}
            </button>
          ` : ""}
        </div>
        <div slot="center" class="settings-title">${this.i18nStore?.t("settings.title")} / ${this.getCategoryLabel(this.category)}</div>
      </alps-header>
      <div class="app-container ${this.sidebarCollapsed && !this.isMobile ? "collapsed" : ""} ${this.isSidebarDragging ? "dragging" : ""}" style="${!this.sidebarCollapsed && !this.isMobile ? `--sidebar-width: ${this.sidebarWidth}px;` : ""}">
        <alps-sidebar
          class="${this.isMobile ? "mobile-sidebar" : "desktop-sidebar"} ${this.mobileSidebarOpen ? "open" : ""}"
          .isMobile=${this.isMobile}
          .isOpen=${this.mobileSidebarOpen}
          .isHovered=${this.isSidebarHovered}
          .suppressHover=${this.suppressSidebarHover}
          .width=${this.sidebarWidth}
          .hideFooterDivider=${true}
          .showMobileBack=${true}
          .collapsed=${this.sidebarCollapsed && !this.isMobile}
          @sidebar-resize=${(e) => {
			const newWidth = e.detail.newWidth;
			if (newWidth < 120) {
				if (!this.sidebarCollapsed) this.settingsStore.updateSettings({ sidebarCollapsed: true });
				this.sidebarWidth = 250;
			} else {
				if (this.sidebarCollapsed) this.settingsStore.updateSettings({ sidebarCollapsed: false });
				this.sidebarWidth = Math.min(Math.max(newWidth, 150), 500);
			}
		}}
          @drag-start=${() => this.isSidebarDragging = true}
          @drag-end=${() => this.isSidebarDragging = false}
          @toggle-collapse=${() => this.settingsStore.updateSettings({ sidebarCollapsed: !this.sidebarCollapsed })}
          @mouseenter=${() => {
			if (this.hoverTimeout) {
				clearTimeout(this.hoverTimeout);
				this.hoverTimeout = null;
			}
			this.isSidebarHovered = true;
			this.suppressSidebarHover = false;
		}}
          @mouseleave=${() => {
			this.hoverTimeout = setTimeout(() => {
				this.isSidebarHovered = false;
			}, 300);
		}}
          @close-sidebar=${() => this.mobileSidebarOpen = false}
        >
          <div class="sidebar-wrapper ${this.sidebarCollapsed && (!this.isSidebarHovered || this.suppressSidebarHover) && !this.isMobile ? "collapsed" : ""}">
            <div class="sidebar-content">
              <div class="sidebar-scroll-content">
                <alps-category-item 
            ?active=${this.category === "general"}
            @click=${() => this.selectCategory("general")}
            icon="gear"
          >
            ${this.i18nStore?.t("settings.categories.general")}
          </alps-category-item>
          <alps-category-item 
            ?active=${this.category === "reading"}
            @click=${() => this.selectCategory("reading")}
            icon="bookOpen"
          >
            ${this.i18nStore?.t("settings.categories.reading")}
          </alps-category-item>
          <alps-category-item 
            ?active=${this.category === "appearance"}
            @click=${() => this.selectCategory("appearance")}
            icon="palette"
          >
            ${this.i18nStore?.t("settings.categories.appearance")}
          </alps-category-item>
          <alps-category-item 
            ?active=${this.category === "localization"}
            @click=${() => this.selectCategory("localization")}
            icon="globe"
          >
            ${this.i18nStore?.t("settings.categories.localization")}
          </alps-category-item>
          <alps-category-item 
            ?active=${this.category === "identity"}
            @click=${() => this.selectCategory("identity")}
            icon="user"
          >
            ${this.i18nStore?.t("settings.categories.identity")}
          </alps-category-item>
          <alps-category-item 
            ?active=${this.category === "accounts"}
            @click=${() => this.selectCategory("accounts")}
            icon="users"
          >
            ${this.i18nStore?.t("settings.categories.accounts")}
          </alps-category-item>
          <alps-category-item 
            ?active=${this.category === "webauthn"}
            @click=${() => this.selectCategory("webauthn")}
            icon="fingerprint"
          >
            ${this.i18nStore?.t("settings.categories.webauthn")}
          </alps-category-item>
          ${registry.getSettingsTabs().map((tab) => b`
            <alps-category-item 
              ?active=${this.category === tab.id}
              @click=${() => this.selectCategory(tab.id)}
              .icon=${tab.icon}
            >
              ${this.i18nStore?.t(tab.labelKey)}
            </alps-category-item>
          `)}
              </div>
            </div>
          </div>
        </alps-sidebar>
        
        <div class="main-view" @scroll=${this._handleScroll}>
          ${!this.settingsState ? b`<div>${this.i18nStore?.t("settings.loading")}</div>` : b`
            ${this.category === "general" ? this.renderGeneral() : ""}
            ${this.category === "identity" ? this.renderIdentity() : ""}
            ${this.category === "accounts" ? b`<settings-accounts></settings-accounts>` : ""}
            ${this.category === "webauthn" ? b`<alps-webauthn-settings></alps-webauthn-settings>` : ""}
            ${this.category === "reading" ? this.renderReading() : ""}
            ${this.category === "appearance" ? this.renderAppearance() : ""}
            ${this.category === "localization" ? this.renderLocalization() : ""}
            ${registry.getSettingsTabs().filter((tab) => tab.id === this.category).map((tab) => b`${o$1(`<${tab.component}></${tab.component}>`)}`)}
          `}
        </div>
      </div>
    `;
	}
	renderGeneral() {
		return b`
        <alps-setting-group label="${this.i18nStore?.t("settings.general.checkMailInterval")}" description="${this.i18nStore?.t("settings.general.checkMailIntervalDesc")}">
          <alps-select @change=${(e) => this.handleUpdate(e, "checkMailInterval")} .value=${this.settingsState.checkMailInterval.toString()}
            .options=${[
			{
				value: "1",
				label: this.i18nStore?.t("settings.general.everyMinute") || "1"
			},
			{
				value: "5",
				label: this.i18nStore?.t("settings.general.every5Minutes") || "5"
			},
			{
				value: "15",
				label: this.i18nStore?.t("settings.general.every15Minutes") || "15"
			},
			{
				value: "30",
				label: this.i18nStore?.t("settings.general.every30Minutes") || "30"
			}
		]}>
          </alps-select>
        </alps-setting-group>
        <alps-setting-group label="${this.i18nStore?.t("settings.general.autoLogout")}" description="${this.i18nStore?.t("settings.general.autoLogoutDesc")}">
          <alps-select @change=${(e) => this.handleUpdate(e, "autoLogout")} .value=${this.settingsState.autoLogout.toString()}
            .options=${[
			{
				value: "0",
				label: this.i18nStore?.t("settings.general.never") || "0"
			},
			{
				value: "15",
				label: this.i18nStore?.t("settings.general.minutes15") || "15"
			},
			{
				value: "30",
				label: this.i18nStore?.t("settings.general.minutes30") || "30"
			},
			{
				value: "60",
				label: this.i18nStore?.t("settings.general.hour1") || "60"
			},
			{
				value: "120",
				label: this.i18nStore?.t("settings.general.hours2") || "120"
			},
			{
				value: "360",
				label: this.i18nStore?.t("settings.general.hours6") || "360"
			}
		]}>
          </alps-select>
        </alps-setting-group>
        <alps-setting-group>
          <label class="checkbox-label">
            <input type="checkbox" 
                   ?checked=${this.settingsState.desktopNotifications} 
                   @change=${(e) => this.handleUpdate(e, "desktopNotifications")}>
            ${this.i18nStore?.t("settings.general.desktopNotifications")}
          </label>
        </alps-setting-group>
        <alps-setting-group>
          <label class="checkbox-label">
            <input type="checkbox" 
                   ?checked=${this.settingsState.soundNotifications} 
                   @change=${(e) => this.handleUpdate(e, "soundNotifications")}>
            ${this.i18nStore?.t("settings.general.soundNotifications")}
          </label>
        </alps-setting-group>
    `;
	}
	renderIdentity() {
		return b`
        <alps-setting-group label="${this.i18nStore?.t("settings.identity.displayName")}" description="${this.i18nStore?.t("settings.identity.displayNameDesc")}">
          <alps-input type="text" icon="user" .value=${this.settingsState.name || ""} @change=${(e) => this.handleUpdate(e, "name")} placeholder="${this.i18nStore?.t("settings.placeholderName")}"></alps-input>
        </alps-setting-group>
        <alps-setting-group label="${this.i18nStore?.t("settings.identity.signature")}" description="${this.i18nStore?.t("settings.identity.signatureDesc")}">
          <textarea @change=${(e) => this.handleUpdate(e, "signature")} .value=${this.settingsState.signature || ""}></textarea>
        </alps-setting-group>
        <alps-setting-group label="${this.i18nStore?.t("settings.identity.replyTo")}" description="${this.i18nStore?.t("settings.identity.replyToDesc")}">
          <alps-input type="email" .value=${this.settingsState.replyTo || ""} @change=${(e) => this.handleUpdate(e, "replyTo")} placeholder="${this.i18nStore?.t("settings.placeholderReplyTo")}"></alps-input>
        </alps-setting-group>
        <alps-setting-group>
          <label class="checkbox-label">
            <input type="checkbox" 
                   ?checked=${this.settingsState.bccMyself} 
                   @change=${(e) => this.handleUpdate(e, "bccMyself")}>
            ${this.i18nStore?.t("settings.identity.bccMyself")}
          </label>
        </alps-setting-group>
    `;
	}
	renderReading() {
		return b`
        <alps-setting-group label="${this.i18nStore?.t("settings.reading.messagesPerPage")}">
          <alps-select @change=${(e) => this.handleUpdate(e, "messagesPerPage")} .value=${this.settingsState.messagesPerPage.toString()}
            .options=${[
			{
				value: "25",
				label: "25"
			},
			{
				value: "50",
				label: "50"
			},
			{
				value: "100",
				label: "100"
			}
		]}>
          </alps-select>
        </alps-setting-group>
        <alps-setting-group>
          <label class="checkbox-label">
            <input type="checkbox" 
                   ?checked=${this.settingsState.enableThreading && this.settingsState.hasThreadCapability !== false} 
                   ?disabled=${this.settingsState.hasThreadCapability === false}
                   @change=${(e) => this.handleUpdate(e, "enableThreading")}>
            ${this.i18nStore?.t("settings.reading.enableThreading")}
            ${this.settingsState.hasThreadCapability === false ? b`
              <span style="font-size: 12px; color: var(--text-muted); font-weight: normal; margin-left: 4px;">
                (Not supported by your mail server)
              </span>
            ` : ""}
          </label>
        </alps-setting-group>
        <alps-setting-group label="${this.i18nStore?.t("settings.reading.preferredView")}" description="${this.i18nStore?.t("settings.reading.preferredViewDesc")}">
          <alps-select @change=${(e) => this.handleUpdate(e, "preferredView")} .value=${this.settingsState.preferredView}
            .options=${[{
			value: "html",
			label: this.i18nStore?.t("settings.reading.html") || "html"
		}, {
			value: "text",
			label: this.i18nStore?.t("settings.reading.plainText") || "text"
		}]}>
          </alps-select>
        </alps-setting-group>
        <alps-setting-group>
          <label class="checkbox-label">
            <input type="checkbox" 
                   ?checked=${this.settingsState.themeIframeContent} 
                   @change=${(e) => this.handleUpdate(e, "themeIframeContent")}>
            ${this.i18nStore?.t("settings.reading.themeIframeContent")}
          </label>
        </alps-setting-group>
        <alps-setting-group label="${this.i18nStore?.t("settings.reading.showRemoteContent")}">
          <alps-select @change=${(e) => this.handleUpdate(e, "showRemoteContent")} .value=${this.settingsState.showRemoteContent}
            .options=${[{
			value: "ask",
			label: this.i18nStore?.t("settings.reading.alwaysAsk") || "ask"
		}, {
			value: "always",
			label: this.i18nStore?.t("settings.reading.alwaysLoad") || "always"
		}]}>
          </alps-select>
        </alps-setting-group>
        <alps-setting-group label="${this.i18nStore?.t("settings.reading.markReadTimeout")}">
          <alps-select @change=${(e) => this.handleUpdate(e, "markReadTimeout")} .value=${this.settingsState.markReadTimeout.toString()}
            .options=${[
			{
				value: "0",
				label: this.i18nStore?.t("settings.reading.markReadImmediately") || "0"
			},
			{
				value: "1",
				label: this.i18nStore?.t("settings.reading.markRead1s") || "1"
			},
			{
				value: "3",
				label: this.i18nStore?.t("settings.reading.markRead3s") || "3"
			},
			{
				value: "5",
				label: this.i18nStore?.t("settings.reading.markRead5s") || "5"
			},
			{
				value: "10",
				label: this.i18nStore?.t("settings.reading.markRead10s") || "10"
			},
			{
				value: "-1",
				label: this.i18nStore?.t("settings.reading.markReadNever") || "-1"
			}
		]}>
          </alps-select>
        </alps-setting-group>
        <alps-setting-group label="${this.i18nStore?.t("settings.reading.composeFormat")}">
          <alps-select @change=${(e) => this.handleUpdate(e, "composeFormat")} .value=${this.settingsState.composeFormat}
            .options=${[{
			value: "html",
			label: this.i18nStore?.t("settings.reading.richText") || "html"
		}, {
			value: "text",
			label: this.i18nStore?.t("settings.reading.plainText") || "text"
		}]}>
          </alps-select>
        </alps-setting-group>
        <alps-setting-group label="${this.i18nStore?.t("settings.reading.messageSortCriteria")}" description="${this.i18nStore?.t("settings.reading.messageSortCriteriaDesc")}">
          <alps-select @change=${(e) => this.handleUpdate(e, "messageSortCriteria")} .value=${this.settingsState.messageSortCriteria}
            .options=${[{
			value: "date",
			label: this.i18nStore?.t("settings.reading.sortDate") || "date"
		}, {
			value: "uid",
			label: this.i18nStore?.t("settings.reading.sortUid") || "uid"
		}]}>
          </alps-select>
        </alps-setting-group>
    `;
	}
	renderAppearance() {
		return b`
        
        <alps-setting-group label="${this.i18nStore?.t("settings.appearance.colorTheme")}" description="${this.i18nStore?.t("settings.appearance.colorThemeDesc")}">
          <alps-select @change=${(e) => this.handleUpdate(e, "colorFamily")} .value=${this.settingsState.colorFamily}
            .options=${[
			{
				value: "default",
				label: "Alps"
			},
			{
				value: "nord",
				label: "Nord"
			},
			{
				value: "ocean",
				label: "Ocean"
			}
		]}>
          </alps-select>
        </alps-setting-group>

        <alps-setting-group label="${this.i18nStore?.t("settings.appearance.themeMode")}" description="${this.i18nStore?.t("settings.appearance.themeModeDesc")}">
          <alps-select @change=${(e) => this.handleUpdate(e, "themeMode")} .value=${this.settingsState.themeMode}
            .options=${[
			{
				value: "light",
				label: this.i18nStore?.t("settings.appearance.light") || "light"
			},
			{
				value: "dark",
				label: this.i18nStore?.t("settings.appearance.dark") || "dark"
			},
			{
				value: "auto",
				label: this.i18nStore?.t("settings.appearance.systemAuto") || "auto"
			}
		]}>
          </alps-select>
        </alps-setting-group>

        <alps-setting-group label="${this.i18nStore?.t("settings.appearance.layoutMode")}" description="${this.i18nStore?.t("settings.appearance.layoutModeDesc")}">
          <alps-select @change=${(e) => this.handleUpdate(e, "layoutMode")} .value=${this.settingsState.layoutMode}
            .options=${[
			{
				value: "vertical",
				label: this.i18nStore?.t("settings.appearance.vertical") || "vertical"
			},
			{
				value: "horizontal",
				label: this.i18nStore?.t("settings.appearance.horizontal") || "horizontal"
			},
			{
				value: "full",
				label: this.i18nStore?.t("settings.appearance.fullScreen") || "full"
			}
		]}>
          </alps-select>
        </alps-setting-group>

        <alps-setting-group label="${this.i18nStore?.t("settings.appearance.listDensity")}" description="${this.i18nStore?.t("settings.appearance.listDensityDesc")}">
          <alps-select @change=${(e) => this.handleUpdate(e, "densityMode")} .value=${this.settingsState.densityMode}
            .options=${[
			{
				value: "loose",
				label: this.i18nStore?.t("settings.appearance.loose") || "loose"
			},
			{
				value: "normal",
				label: this.i18nStore?.t("settings.appearance.normal") || "normal"
			},
			{
				value: "compact",
				label: this.i18nStore?.t("settings.appearance.compact") || "compact"
			},
			{
				value: "ultra-compact",
				label: this.i18nStore?.t("settings.appearance.ultraCompact") || "ultra-compact"
			}
		]}>
          </alps-select>
        </alps-setting-group>
    `;
	}
	renderLocalization() {
		return b`
        <alps-setting-group label="${this.i18nStore?.t("settings.localization.language")}">
          <alps-select @change=${(e) => this.handleUpdate(e, "language")} .value=${this.settingsState.language}
            .options=${[
			{
				value: "en",
				label: this.i18nStore?.t("settings.localization.english") || "en"
			},
			{
				value: "de",
				label: this.i18nStore?.t("settings.localization.german") || "de"
			},
			{
				value: "it",
				label: this.i18nStore?.t("settings.localization.italian") || "it"
			},
			{
				value: "es",
				label: this.i18nStore?.t("settings.localization.spanish") || "es"
			},
			{
				value: "rs",
				label: this.i18nStore?.t("settings.localization.serbian") || "rs"
			},
			{
				value: "sr",
				label: this.i18nStore?.t("settings.localization.serbianLatin") || "sr"
			},
			{
				value: "fr",
				label: this.i18nStore?.t("settings.localization.french") || "fr"
			},
			{
				value: "pt",
				label: this.i18nStore?.t("settings.localization.portuguese") || "pt"
			}
		]}>
          </alps-select>
        </alps-setting-group>
        <alps-setting-group label="${this.i18nStore?.t("settings.localization.timeFormat")}">
          <alps-select @change=${(e) => this.handleUpdate(e, "hourFormat")} .value=${this.settingsState.hourFormat}
            .options=${[{
			value: "12",
			label: this.i18nStore?.t("settings.localization.format12h") || "12"
		}, {
			value: "24",
			label: this.i18nStore?.t("settings.localization.format24h") || "24"
		}]}>
          </alps-select>
        </alps-setting-group>
        <alps-setting-group label="${this.i18nStore?.t("settings.localization.dateFormat")}">
          <alps-select @change=${(e) => this.handleUpdate(e, "dateFormat")} .value=${this.settingsState.dateFormat}
            .options=${[
			{
				value: "YYYY-MM-DD",
				label: "YYYY-MM-DD"
			},
			{
				value: "MM/DD/YYYY",
				label: "MM/DD/YYYY"
			},
			{
				value: "DD.MM.YYYY",
				label: "DD.MM.YYYY"
			}
		]}>
          </alps-select>
        </alps-setting-group>
    `;
	}
};
__decorate([c({ context: settingsContext })], SettingsPage.prototype, "settingsStore", void 0);
__decorate([c({ context: i18nContext })], SettingsPage.prototype, "i18nStore", void 0);
__decorate([n$1({ type: String })], SettingsPage.prototype, "category", void 0);
__decorate([r()], SettingsPage.prototype, "settingsState", void 0);
__decorate([r()], SettingsPage.prototype, "isMobile", void 0);
__decorate([r()], SettingsPage.prototype, "mobileSidebarOpen", void 0);
__decorate([r()], SettingsPage.prototype, "username", void 0);
__decorate([r()], SettingsPage.prototype, "isScrolled", void 0);
__decorate([r()], SettingsPage.prototype, "sidebarWidth", void 0);
__decorate([r()], SettingsPage.prototype, "sidebarCollapsed", void 0);
__decorate([r()], SettingsPage.prototype, "isSidebarDragging", void 0);
__decorate([r()], SettingsPage.prototype, "isSidebarHovered", void 0);
__decorate([r()], SettingsPage.prototype, "suppressSidebarHover", void 0);
SettingsPage = __decorate([t("settings-page")], SettingsPage);
//#endregion
//#region src/utils/email-parser.ts
async function parseEmailHeaders(rawEmail) {
	const email = await new PostalMime().parse(rawEmail);
	let bimiSelector = "default";
	const bimiHeader = email.headers?.find((h) => h.key.toLowerCase() === "bimi-selector");
	if (bimiHeader) {
		const sMatch = bimiHeader.value.match(/s=([^;\s]+)/i);
		if (sMatch) bimiSelector = sMatch[1].trim();
	}
	const fromAddress = email.from?.address || "";
	const result = {
		messageId: email.messageId || "",
		date: email.date || "",
		from: email.from ? email.from.name ? `${email.from.name} <${email.from.address || ""}>` : email.from.address || "" : "",
		fromAddress,
		to: email.to ? email.to.map((t) => t.name ? `${t.name} <${t.address}>` : t.address).join(", ") : "",
		subject: email.subject || "",
		spf: "none",
		spfDetail: "",
		dkim: "none",
		dkimDetail: "",
		dmarc: "none",
		dmarcDetail: "",
		bimiSelector,
		hasBimiPotential: false
	};
	const authHeaders = email.headers?.filter((h) => h.key.toLowerCase() === "authentication-results") || [];
	if (authHeaders.length > 0) {
		const authHeader = authHeaders[0];
		const fullHeader = authHeader.value.toLowerCase();
		let spfIp = "";
		const ipMatch = fullHeader.match(/smtp\.(?:remote|client)-ip=([0-9a-f\.:]+)/) || fullHeader.match(/designates ([0-9a-f\.:]+) as permitted sender/);
		if (ipMatch) spfIp = ipMatch[1];
		const parts = authHeader.value.split(";");
		for (const part of parts) {
			const p = part.trim().toLowerCase();
			if (p.startsWith("spf=")) {
				result.spf = p.split("=")[1].split(" ")[0];
				if (spfIp) result.spfDetail = `with IP address ${spfIp}`;
				else {
					const fromMatch = p.match(/smtp\.mailfrom=([^ \t]+)/) || p.match(/smtp\.helo=([^ \t]+)/);
					if (fromMatch) result.spfDetail = `with ${fromMatch[1]}`;
				}
			} else if (p.startsWith("dkim=")) {
				result.dkim = p.split("=")[1].split(" ")[0];
				const dMatch = p.match(/header\.d=([^ \t]+)/);
				if (dMatch) result.dkimDetail = `with domain ${dMatch[1]}`;
			} else if (p.startsWith("dmarc=")) {
				result.dmarc = p.split("=")[1].split(" ")[0];
				const fromMatch = p.match(/header\.from=([^ \t]+)/);
				if (fromMatch) result.dmarcDetail = `with domain ${fromMatch[1]}`;
			}
		}
	}
	result.hasBimiPotential = result.dmarc === "pass" && !!result.fromAddress;
	return result;
}
//#endregion
//#region src/pages/original-message-page.ts
var OriginalMessagePage = class OriginalMessagePage extends i {
	constructor(..._args) {
		super(..._args);
		this.rawText = "";
		this.parsedHeaders = null;
		this.loading = true;
		this.error = "";
		this.mailbox = "";
		this.uid = "";
		this.isTruncated = false;
		this._handleStoreChange = () => {
			this.requestUpdate();
		};
		this.MAX_DISPLAY_SIZE = 65536;
	}
	static {
		this.styles = i$1`
    :host {
      display: block;
      height: 100vh;
      overflow: auto;
      background: var(--bg-primary, #fff);
      color: var(--text-primary, #000);
      font-family: system-ui, -apple-system, sans-serif;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 24px;
      font-weight: 600;
    }
    .metadata-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
      background: var(--bg-secondary, #f9fafb);
      border: 1px solid var(--border-color, #e5e7eb);
      border-radius: 8px;
      overflow: hidden;
    }
    .metadata-table th,
    .metadata-table td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid var(--border-color, #e5e7eb);
      font-size: 14px;
    }
    .metadata-table th {
      width: 150px;
      font-weight: 600;
      color: var(--text-secondary, #4b5563);
      background: var(--bg-tertiary, #f3f4f6);
    }
    .metadata-table tr:last-child th,
    .metadata-table tr:last-child td {
      border-bottom: none;
    }
    .auth-pass { color: #059669; font-weight: 600; }
    .auth-fail { color: #dc2626; font-weight: 600; }
    .auth-none { color: var(--text-muted, #9ca3af); }

    .actions {
      display: flex;
      gap: 12px;
      margin-bottom: 24px;
    }
    .raw-content {
      background: var(--bg-secondary, #f9fafb);
      padding: 16px;
      border-radius: 8px;
      border: 1px solid var(--border-color, #e5e7eb);
      overflow-x: auto;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 13px;
      line-height: 1.5;
      white-space: pre-wrap;
      word-break: break-all;
    }
    alps-banner {
      position: static;
      margin-bottom: 24px;
      border-radius: 4px;
      overflow: hidden;
    }
    .auth-status-container {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .auth-status-detail {
      color: var(--text-muted, #6b7280);
      font-size: 13px;
    }
    .loading-state {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      gap: 12px;
      color: var(--text-muted, #6b7280);
      font-size: 14px;
    }
    .spinner {
      animation: spin 3s linear infinite;
      display: flex;
    }
    .spinner svg {
      width: 32px;
      height: 32px;
      fill: currentColor;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
	}
	connectedCallback() {
		super.connectedCallback();
		this.extractParams();
		if (this.mailbox && this.uid) this.fetchOriginal();
		else {
			this.error = this.i18nStore?.t("originalMessage.errorMissingParams");
			this.loading = false;
		}
		this.updateComplete.then(() => {
			this.i18nStore?.addEventListener("change", this._handleStoreChange);
		});
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.i18nStore?.removeEventListener("change", this._handleStoreChange);
	}
	extractParams() {
		const hash = window.location.hash;
		const qIndex = hash.indexOf("?");
		if (qIndex !== -1) {
			const params = new URLSearchParams(hash.substring(qIndex + 1));
			this.mailbox = params.get("mailbox") || "";
			this.uid = params.get("uid") || "";
		}
	}
	async fetchOriginal() {
		try {
			this.loading = true;
			const res = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(this.mailbox)}/messages/${this.uid}/raw?limit=${this.MAX_DISPLAY_SIZE}`);
			if (!res.ok) {
				if (res.status === 401) {
					window.location.hash = "#/login";
					return;
				}
				throw new Error(this.i18nStore?.t("originalMessage.errorFailedToFetch"));
			}
			this.rawText = await res.text();
			if (this.rawText.length >= this.MAX_DISPLAY_SIZE) this.isTruncated = true;
			this.parsedHeaders = await parseEmailHeaders(this.rawText);
		} catch (e) {
			this.error = e.message;
		} finally {
			this.loading = false;
		}
	}
	copyToClipboard() {
		navigator.clipboard.writeText(this.rawText).then(() => {
			alert(this.isTruncated ? this.i18nStore?.t("originalMessage.copiedTruncated") : this.i18nStore?.t("originalMessage.copied"));
		}).catch((err) => {
			Logger.error("Failed to copy: ", err);
			alert(this.i18nStore?.t("originalMessage.copyFailed"));
		});
	}
	renderAuthStatus(status, detail) {
		status = status.toLowerCase();
		let statusSpan = b`<span class="auth-none">${this.i18nStore?.t("originalMessage.none")}</span>`;
		if (status === "pass") statusSpan = b`<span class="auth-pass">${this.i18nStore?.t("originalMessage.pass")}</span>`;
		else if (status === "fail") statusSpan = b`<span class="auth-fail">${this.i18nStore?.t("originalMessage.fail")}</span>`;
		return b`
      <div class="auth-status-container">
        ${statusSpan}
        ${detail ? b`<span class="auth-status-detail">${detail}</span>` : ""}
      </div>
    `;
	}
	render() {
		if (this.loading) return b`
        <div class="loading-state">
          <alps-loader></alps-loader>
          <span>${this.i18nStore?.t("originalMessage.loading")}</span>
        </div>
      `;
		if (this.error) return b`
        <div class="container">
          <alps-banner>
            ${this.error}
          </alps-banner>
        </div>
      `;
		const downloadUrl = `/mailboxes/${encodeMailboxPath(this.mailbox)}/messages/${this.uid}/raw`;
		return b`
      <div class="container">
        <h1>${this.i18nStore?.t("originalMessage.title")}</h1>
        
        ${this.parsedHeaders ? b`
          <table class="metadata-table">
            <tbody>
              <tr>
                <th>${this.i18nStore?.t("originalMessage.messageId")}</th>
                <td>${this.parsedHeaders.messageId}</td>
              </tr>
              <tr>
                <th>${this.i18nStore?.t("originalMessage.createdAt")}</th>
                <td>${this.parsedHeaders.date}</td>
              </tr>
              <tr>
                <th>${this.i18nStore?.t("originalMessage.from")}</th>
                <td>${this.parsedHeaders.from}</td>
              </tr>
              <tr>
                <th>${this.i18nStore?.t("originalMessage.to")}</th>
                <td>${this.parsedHeaders.to}</td>
              </tr>
              <tr>
                <th>${this.i18nStore?.t("originalMessage.subject")}</th>
                <td>${this.parsedHeaders.subject}</td>
              </tr>
              <tr>
                <th>${this.i18nStore?.t("originalMessage.spf")}</th>
                <td>${this.renderAuthStatus(this.parsedHeaders.spf, this.parsedHeaders.spfDetail)}</td>
              </tr>
              <tr>
                <th>${this.i18nStore?.t("originalMessage.dkim")}</th>
                <td>${this.renderAuthStatus(this.parsedHeaders.dkim, this.parsedHeaders.dkimDetail)}</td>
              </tr>
              <tr>
                <th>${this.i18nStore?.t("originalMessage.dmarc")}</th>
                <td>${this.renderAuthStatus(this.parsedHeaders.dmarc, this.parsedHeaders.dmarcDetail)}</td>
              </tr>
            </tbody>
          </table>
        ` : ""}

        ${this.isTruncated ? b`
          <alps-banner>
            ${this.i18nStore?.t("originalMessage.truncatedInfo")}
          </alps-banner>
        ` : ""}

        <div class="actions">
          <alps-button variant="primary" icon="downloadSimple" @click=${() => {
			const a = document.createElement("a");
			a.href = downloadUrl;
			a.download = "original_message.eml";
			a.click();
		}}>
            ${this.i18nStore?.t("originalMessage.downloadOriginal")}
          </alps-button>
          ${!this.isTruncated ? b`
            <alps-button variant="normal" icon="copy" @click=${this.copyToClipboard}>
              ${this.i18nStore?.t("originalMessage.copyClipboard")}
            </alps-button>
          ` : ""}
        </div>

        <pre class="raw-content">${this.rawText}</pre>
      </div>
    `;
	}
};
__decorate([r()], OriginalMessagePage.prototype, "rawText", void 0);
__decorate([r()], OriginalMessagePage.prototype, "parsedHeaders", void 0);
__decorate([r()], OriginalMessagePage.prototype, "loading", void 0);
__decorate([r()], OriginalMessagePage.prototype, "error", void 0);
__decorate([r()], OriginalMessagePage.prototype, "mailbox", void 0);
__decorate([r()], OriginalMessagePage.prototype, "uid", void 0);
__decorate([r()], OriginalMessagePage.prototype, "isTruncated", void 0);
__decorate([c({ context: i18nContext })], OriginalMessagePage.prototype, "i18nStore", void 0);
OriginalMessagePage = __decorate([t("original-message-page")], OriginalMessagePage);
//#endregion
//#region src/pages/print-page.ts
var PrintPage = class PrintPage extends i {
	constructor(..._args) {
		super(..._args);
		this.loading = true;
		this.error = "";
		this.mailbox = "";
		this.uid = "";
		this.message = null;
		this.content = "";
		this.rawMessageHtml = "";
		this.mimeType = "text/plain";
		this.hasRemoteResources = false;
		this.allowRemoteResources = false;
		this.printTriggered = false;
	}
	static {
		this.styles = i$1`
    :host {
      display: block;
      min-height: 100vh;
      background: #fff;
      color: #000;
      font-family: Arial, sans-serif;
    }
    .print-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 24px;
    }
    .print-header {
      margin-bottom: 24px;
      text-align: left;
    }
    .print-header h2 {
      font-size: 20px;
      font-weight: normal;
      margin: 0 0 12px 0;
      color: #222;
    }
    .print-divider {
      border-bottom: 1px solid #ddd;
      margin-bottom: 12px;
    }
    .print-meta-row {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      margin-bottom: 4px;
    }
    .print-date {
      color: #666;
      margin-left: 16px;
      text-align: right;
      min-width: 150px;
    }
    .print-to-row {
      font-size: 13px;
      color: #444;
    }
    .print-cc {
      margin-top: 4px;
    }
    .print-divider-thick {
      border-bottom: 1px solid #eee;
      margin-top: 24px;
      margin-bottom: 24px;
    }
    .print-body {
      font-size: 14px;
    }
    .print-iframe {
      width: 100%;
      border: none;
      overflow: visible;
      display: block;
    }
    .loading-state, .error-state {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      color: var(--text-muted, #6b7280);
      font-size: 14px;
      gap: 12px;
    }
    .error-state {
      color: #dc2626;
      flex-direction: column;
    }
    .spinner {
      animation: spin 3s linear infinite;
      display: flex;
    }
    .spinner svg {
      width: 32px;
      height: 32px;
      fill: currentColor;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @media print {
      body { padding: 0 !important; margin: 0 !important; }
      .print-container { padding: 0; max-width: none; }
      alps-banner { display: none !important; }
    }
  `;
	}
	connectedCallback() {
		super.connectedCallback();
		this.allowRemoteResources = this.settingsStore.getState().showRemoteContent === "always";
		this.extractParams();
		if (this.mailbox && this.uid) this.fetchMessage();
		else {
			this.error = "Missing mailbox or uid parameters";
			this.loading = false;
		}
	}
	extractParams() {
		const hash = window.location.hash;
		const qIndex = hash.indexOf("?");
		if (qIndex !== -1) {
			const params = new URLSearchParams(hash.substring(qIndex + 1));
			this.mailbox = params.get("mailbox") || "";
			this.uid = params.get("uid") || "";
			if (params.get("remote") === "1") this.allowRemoteResources = true;
		}
	}
	async fetchMessage() {
		try {
			this.loading = true;
			const cached = MessageCache.get(this.mailbox, this.uid);
			if (cached && cached.Part) {
				this.message = cached.Message;
				this.mimeType = cached.Part.MIMEType || cached.Part.MimeType || "text/plain";
				if (cached.RawHtml !== void 0) {
					this.rawMessageHtml = cached.RawHtml;
					this.hasRemoteResources = false;
					this.content = sanitizeMessageHTML(this.rawMessageHtml, {
						mailbox: this.mailbox,
						messageUid: this.uid,
						allowRemoteResources: this.allowRemoteResources,
						messageStructure: this.message.BodyStructure,
						onRemoteResourceBlocked: () => {
							this.hasRemoteResources = true;
						}
					});
				} else if (cached.RawText !== void 0) this.content = cached.RawText;
				this.loading = false;
				return;
			}
			const res = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(this.mailbox)}/messages/${this.uid}`);
			if (!res.ok) {
				if (res.status === 401) {
					window.location.hash = "#/login";
					return;
				}
				throw new Error("Failed to fetch message metadata");
			}
			this.message = await res.json();
			await this.fetchMessageBody();
		} catch (e) {
			this.error = e.message;
		} finally {
			this.loading = false;
		}
	}
	findDisplayPart(structure, preferredView) {
		if (!structure) return null;
		if (structure.MIMEType && structure.MIMEType.toLowerCase().startsWith("multipart/")) {
			if (structure.MIMEType.toLowerCase() === "multipart/alternative") {
				let textPart = null;
				let htmlPart = null;
				for (const child of structure.Children || []) {
					if (child.MIMEType?.toLowerCase() === "text/plain") textPart = child;
					if (child.MIMEType?.toLowerCase() === "text/html") htmlPart = child;
				}
				if (preferredView === "html") return htmlPart || textPart || structure.Children[0];
				else return textPart || htmlPart || structure.Children[0];
			}
			for (const child of structure.Children || []) {
				const found = this.findDisplayPart(child, preferredView);
				if (found) return found;
			}
		}
		if (structure.MIMEType?.toLowerCase() === "text/html" || structure.MIMEType?.toLowerCase() === "text/plain") return structure;
		return null;
	}
	findPartPath(structure, targetPart, currentPath = "") {
		if (!structure) return null;
		if (structure === targetPart) return currentPath || "1";
		if (structure.Children && Array.isArray(structure.Children)) for (let i = 0; i < structure.Children.length; i++) {
			const nextPath = currentPath ? `${currentPath}.${i + 1}` : `${i + 1}`;
			const found = this.findPartPath(structure.Children[i], targetPart, nextPath);
			if (found) return found;
		}
		return null;
	}
	async fetchMessageBody() {
		if (!this.message || !this.message.BodyStructure) return;
		let partPath = "1";
		let targetPart = this.findDisplayPart(this.message.BodyStructure, "html");
		if (targetPart) {
			partPath = this.findPartPath(this.message.BodyStructure, targetPart) || "1";
			this.mimeType = targetPart.MIMEType || "text/plain";
		} else {
			this.mimeType = this.message.BodyStructure.MIMEType || "text/plain";
			if (this.mimeType.toLowerCase() === "text/plain" || this.mimeType.toLowerCase() === "text/html") partPath = "1";
			else this.mimeType = "multipart/mixed";
		}
		if (this.mimeType.toLowerCase().startsWith("multipart/")) {
			this.content = "";
			return;
		}
		const rawRes = await fetchWithTimeout(`/mailboxes/${encodeMailboxPath(this.mailbox)}/messages/${this.uid}/raw?part=${partPath}`);
		if (!rawRes.ok) throw new Error("Failed to fetch message body");
		if (this.mimeType.toLowerCase() === "text/html") {
			this.rawMessageHtml = await rawRes.text();
			this.hasRemoteResources = false;
			this.content = sanitizeMessageHTML(this.rawMessageHtml, {
				mailbox: this.mailbox,
				messageUid: this.uid,
				allowRemoteResources: this.allowRemoteResources,
				messageStructure: this.message.BodyStructure,
				onRemoteResourceBlocked: () => {
					this.hasRemoteResources = true;
				}
			});
		} else this.content = await rawRes.text();
	}
	loadRemoteResources() {
		this.allowRemoteResources = true;
		this.printTriggered = false;
		if (this.rawMessageHtml) this.content = sanitizeMessageHTML(this.rawMessageHtml, {
			mailbox: this.mailbox,
			messageUid: this.uid,
			allowRemoteResources: this.allowRemoteResources,
			messageStructure: this.message?.BodyStructure,
			onRemoteResourceBlocked: () => {
				this.hasRemoteResources = true;
			}
		});
	}
	updated(changedProperties) {
		if (changedProperties.has("content") && this.content && this.mimeType?.toLowerCase() !== "text/html") setTimeout(() => {
			window.print();
		}, 500);
	}
	onPrintIframeLoad(e) {
		const iframe = e.target;
		try {
			const doc = iframe.contentDocument;
			if (doc && doc.body) iframe.style.height = `${doc.body.scrollHeight}px`;
		} catch {}
		if (!this.printTriggered) {
			this.printTriggered = true;
			setTimeout(() => window.print(), 300);
		}
	}
	render() {
		if (this.loading) return b`
        <div class="loading-state">
          <alps-loader></alps-loader>
          <span>${this.i18nStore?.t("print.loading")}</span>
        </div>
      `;
		if (this.error) return b`
        <div class="error-state">
          <div>${renderIcon("warning")}</div>
          <span>${this.error}</span>
        </div>
      `;
		const msg = this.message;
		if (!msg) return b``;
		const subject = msg.Envelope?.Subject || this.i18nStore?.t("messageList.noSubject");
		const sender = msg.Envelope?.From?.[0] || {};
		const senderAddress = sender.Mailbox && sender.Host ? `${sender.Mailbox}@${sender.Host}` : "";
		const senderName = sender.Name || senderAddress || this.i18nStore?.t("messageList.unknownSender");
		const dateFormat = this.settingsStore?.getState()?.dateFormat || "YYYY-MM-DD";
		const hourFormat = String(this.settingsStore?.getState()?.hourFormat || "12");
		const dateStr = msg.Envelope?.Date ? formatFullDate(msg.Envelope.Date, dateFormat, hourFormat) : "";
		const toList = msg.Envelope?.To && msg.Envelope.To.length > 0 ? msg.Envelope.To.map((t) => t.Name ? `${t.Name} &lt;${t.Mailbox}@${t.Host}&gt;` : `${t.Mailbox}@${t.Host}`).join(", ") : this.i18nStore?.t("messageReader.undisclosed");
		let ccHtml = b``;
		if (msg.Envelope?.Cc && msg.Envelope.Cc.length > 0) {
			const ccList = msg.Envelope.Cc.map((t) => t.Name ? `${t.Name} &lt;${t.Mailbox}@${t.Host}&gt;` : `${t.Mailbox}@${t.Host}`).join(", ");
			ccHtml = b`<div class="print-cc"><strong>${this.i18nStore?.t("messageReader.cc")}</strong> ${ccList}</div>`;
		}
		let bodyTemplate;
		if (this.mimeType?.toLowerCase() === "text/html") bodyTemplate = b`<iframe
        class="print-iframe"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin"
        .srcdoc=${l(this.content)}
        @load=${this.onPrintIframeLoad}
      ></iframe>`;
		else if (this.mimeType?.toLowerCase().startsWith("multipart/")) bodyTemplate = b`<div style="font-style: italic; color: #666;">${this.i18nStore?.t("messageReader.noReadableText")}</div>`;
		else bodyTemplate = b`<pre style="white-space: pre-wrap; font-family: inherit; margin: 0;">${this.content}</pre>`;
		return b`
      ${this.hasRemoteResources && !this.allowRemoteResources ? b`
        <alps-banner>
          <span>${this.i18nStore.t("messageReader.remoteContentWarning")}</span>
          <alps-button slot="action" variant="normal" @click=${this.loadRemoteResources}>
            ${this.i18nStore.t("messageReader.loadRemoteContent")}
          </alps-button>
        </alps-banner>
      ` : ""}
      <div class="print-container">
        <div class="print-header">
          <h2>${subject}</h2>
          <div class="print-divider"></div>
          <div class="print-meta-row">
            <div><strong>${senderName}</strong> ${senderAddress ? `<${senderAddress}>` : ""}</div>
            <div class="print-date">${dateStr}</div>
          </div>
          <div class="print-to-row">
            <strong>${this.i18nStore?.t("messageReader.to")}</strong> ${toList}
            ${ccHtml}
          </div>
          <div class="print-divider-thick"></div>
        </div>
        <div class="print-body">
          ${bodyTemplate}
        </div>
      </div>
    `;
	}
};
__decorate([c({ context: settingsContext })], PrintPage.prototype, "settingsStore", void 0);
__decorate([c({ context: i18nContext })], PrintPage.prototype, "i18nStore", void 0);
__decorate([r()], PrintPage.prototype, "loading", void 0);
__decorate([r()], PrintPage.prototype, "error", void 0);
__decorate([r()], PrintPage.prototype, "mailbox", void 0);
__decorate([r()], PrintPage.prototype, "uid", void 0);
__decorate([r()], PrintPage.prototype, "message", void 0);
__decorate([r()], PrintPage.prototype, "content", void 0);
__decorate([r()], PrintPage.prototype, "rawMessageHtml", void 0);
__decorate([r()], PrintPage.prototype, "mimeType", void 0);
__decorate([r()], PrintPage.prototype, "hasRemoteResources", void 0);
__decorate([r()], PrintPage.prototype, "allowRemoteResources", void 0);
PrintPage = __decorate([t("print-page")], PrintPage);
//#endregion
//#region src/pages/login-webauthn-page.ts
var LoginWebAuthnPage = class LoginWebAuthnPage extends i {
	constructor(..._args) {
		super(..._args);
		this.statusMessage = "";
		this.statusType = "info";
		this.isLoading = false;
		this.isSuccess = false;
		this._handleI18nChange = () => {
			this.requestUpdate();
		};
	}
	static {
		this.styles = i$1`
    .status {
      margin-bottom: 24px;
      padding: 8px 12px;
      border-radius: var(--radius-md, 6px);
      font-size: 14px;
      text-align: center;
    }
    
    .status.error {
      background: var(--color-error-muted);
      color: var(--color-error);
      border: 1px solid var(--color-error-muted);
    }
    
    .status.info {
      background: var(--color-info-muted);
      color: var(--color-info);
      border: 1px solid var(--color-info-muted);
    }
    
    .status.success {
      background: var(--color-success-muted);
      color: var(--color-success);
      border: 1px solid var(--color-success-muted);
    }
    

  `;
	}
	connectedCallback() {
		super.connectedCallback();
		this.updateComplete.then(() => {
			this.i18nStore?.addEventListener("change", this._handleI18nChange);
		});
		if (!isWebAuthnSupported()) {
			this.statusMessage = this.i18nStore?.t("webauthn.not_supported");
			this.statusType = "error";
		} else setTimeout(() => {
			this._handleVerify();
		}, 300);
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.i18nStore?.removeEventListener("change", this._handleI18nChange);
	}
	async _handleVerify() {
		this.isLoading = true;
		this.statusMessage = this.i18nStore?.t("webauthn.requesting");
		this.statusType = "info";
		try {
			const beginResponse = await fetch("/webauthn/verify/begin", { method: "POST" });
			if (!beginResponse.ok) throw new Error(this.i18nStore?.t("webauthn.errors.begin_failed"));
			const credentialRequestOptions = await beginResponse.json();
			if (!credentialRequestOptions || !credentialRequestOptions.publicKey) throw new Error(this.i18nStore?.t("webauthn.errors.invalid_options"));
			this.statusMessage = this.i18nStore?.t("webauthn.waiting_for_key");
			const credential = await authenticateCredential(credentialRequestOptions);
			this.statusMessage = this.i18nStore?.t("webauthn.verifying");
			if ((await (await fetch("/webauthn/verify/finish", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(credential)
			})).json()).success) {
				this.statusMessage = this.i18nStore?.t("webauthn.success");
				this.statusType = "success";
				this.isSuccess = true;
				setTimeout(() => {
					window.location.href = "/#/mailbox/INBOX";
				}, 1e3);
			} else throw new Error(this.i18nStore?.t("webauthn.errors.verification_failed"));
		} catch (err) {
			this.statusMessage = err.message || this.i18nStore?.t("webauthn.errors.general");
			this.statusType = "error";
		} finally {
			this.isLoading = false;
		}
	}
	render() {
		return b`
      <alps-auth-card
        icon="fingerprint"
        title="${this.i18nStore?.t("webauthn.title")}"
        subtitle="${this.i18nStore?.t("webauthn.instruction")}"
        style="--auth-card-icon-color: var(--accent-color, #2563eb); --auth-card-icon-size: 64px;"
      >
        ${this.statusMessage ? b`
          <div class="status ${this.statusType}">
            ${this.statusMessage}
          </div>
        ` : ""}
        
        <alps-button 
          variant="primary"
          full-width
          style="height: 36px; margin-top: 4px;"
          @click=${this._handleVerify} 
          ?disabled=${this.isLoading || this.isSuccess || !isWebAuthnSupported()}
          ?spinning=${this.isLoading}
        >
          ${this.isLoading ? this.i18nStore?.t("webauthn.verifying_btn") : this.i18nStore?.t("webauthn.verify_btn")}
        </alps-button>
        
        <alps-button 
          variant="text"
          full-width
          style="height: 36px; margin-top: 8px;"
          @click=${() => window.location.hash = "#/login"}
        >
          ← ${this.i18nStore?.t("webauthn.back_to_login")}
        </alps-button>
      </alps-auth-card>
    `;
	}
};
__decorate([c({ context: i18nContext })], LoginWebAuthnPage.prototype, "i18nStore", void 0);
__decorate([r()], LoginWebAuthnPage.prototype, "statusMessage", void 0);
__decorate([r()], LoginWebAuthnPage.prototype, "statusType", void 0);
__decorate([r()], LoginWebAuthnPage.prototype, "isLoading", void 0);
__decorate([r()], LoginWebAuthnPage.prototype, "isSuccess", void 0);
LoginWebAuthnPage = __decorate([t("login-webauthn-page")], LoginWebAuthnPage);
//#endregion
//#region src/utils/attachment-utils.ts
var activeUploads = /* @__PURE__ */ new Map();
function abortUpload(tempId) {
	const xhr = activeUploads.get(tempId);
	if (xhr) {
		xhr.abort();
		activeUploads.delete(tempId);
	}
}
async function deleteAttachment(uuid) {
	try {
		await fetch(`/attachments/${uuid}`, { method: "DELETE" });
	} catch (err) {
		Logger.error("Failed to delete attachment from server:", err);
	}
}
function handleAttachClick(composerId, maxBytes, currentBytes, onFileAdded, onProgress, onComplete, onError) {
	const input = document.createElement("input");
	input.type = "file";
	input.multiple = true;
	input.onchange = (e) => {
		const files = Array.from(e.target.files || []);
		if (files.length === 0) return;
		uploadFiles(files, composerId, maxBytes, currentBytes, onFileAdded, onProgress, onComplete, onError);
	};
	input.click();
}
function uploadFiles(files, composerId, maxBytes, currentBytes, onFileAdded, onProgress, onComplete, onError) {
	let incomingBytes = 0;
	for (const file of files) incomingBytes += file.size;
	if (maxBytes > 0 && currentBytes + incomingBytes > maxBytes) {
		window.dispatchEvent(new CustomEvent("show-toast", { detail: {
			message: `Attachments exceed the maximum allowed size.`,
			duration: 5e3
		} }));
		return;
	}
	for (const file of files) {
		const tempId = Math.random().toString(36).substring(2, 15);
		onFileAdded(tempId, file);
		const formData = new FormData();
		formData.append("attachments", file);
		const xhr = new XMLHttpRequest();
		activeUploads.set(tempId, xhr);
		xhr.open("POST", `/attachments?composer_id=${encodeURIComponent(composerId)}`, true);
		xhr.upload.onprogress = (event) => {
			if (event.lengthComputable) onProgress(tempId, Math.round(event.loaded / event.total * 100));
		};
		xhr.onload = () => {
			activeUploads.delete(tempId);
			if (xhr.status >= 200 && xhr.status < 300) try {
				const data = JSON.parse(xhr.responseText);
				const uuids = Array.isArray(data) ? data : data.uuids || [];
				if (uuids.length > 0) onComplete(tempId, uuids);
				else onError(tempId, /* @__PURE__ */ new Error("No UUID returned from server"));
			} catch (err) {
				onError(tempId, err);
			}
			else try {
				const errorData = JSON.parse(xhr.responseText);
				onError(tempId, new Error(errorData.error || "Unknown error"));
			} catch (e) {
				onError(tempId, /* @__PURE__ */ new Error("Upload failed with status " + xhr.status));
			}
		};
		xhr.onerror = () => {
			activeUploads.delete(tempId);
			onError(tempId, /* @__PURE__ */ new Error("Network error during upload"));
		};
		xhr.onabort = () => {
			activeUploads.delete(tempId);
		};
		xhr.send(formData);
	}
}
//#endregion
//#region src/components/alps-address-input.ts
var AlpsAddressInput = class AlpsAddressInput extends i {
	constructor(..._args) {
		super(..._args);
		this.addresses = [];
		this.disabled = false;
		this.inputText = "";
		this.suggestions = [];
		this.focusedSuggestionIndex = -1;
		this._suggestionTimeout = null;
	}
	focus() {
		const input = this.shadowRoot?.querySelector("input");
		if (input) input.focus();
	}
	updated(changedProperties) {
		super.updated(changedProperties);
		if (changedProperties.has("focusedSuggestionIndex") && this.focusedSuggestionIndex >= 0) {
			const activeBtn = this.shadowRoot?.querySelector(".dropdown-item.active");
			if (activeBtn) activeBtn.scrollIntoView({ block: "nearest" });
		}
	}
	_isBlockedAddress(email) {
		let rawEmail = email.trim();
		if (rawEmail.endsWith(">")) {
			const startObj = rawEmail.lastIndexOf("<");
			if (startObj !== -1) rawEmail = rawEmail.substring(startObj + 1, rawEmail.length - 1);
		}
		const lowerEmail = rawEmail.toLowerCase();
		return lowerEmail.startsWith("noreply") || lowerEmail.startsWith("no-reply") || lowerEmail.startsWith("mailer-daemon");
	}
	_isValidEmail(email) {
		if (this._isBlockedAddress(email)) return false;
		const trimmed = email.trim();
		if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return true;
		if (/^.*?<[^\s@]+@[^\s@]+\.[^\s@]+>$/.test(trimmed)) return true;
		return false;
	}
	_displayAddr(addr) {
		const trimmed = addr.trim();
		if (trimmed.endsWith(">")) {
			const startObj = trimmed.lastIndexOf("<");
			if (startObj !== -1) {
				const namePart = trimmed.substring(0, startObj).trim();
				const emailPart = trimmed.substring(startObj + 1, trimmed.length - 1);
				return namePart.replace(/^["']|["']$/g, "").trim() || emailPart;
			}
		}
		return addr;
	}
	_handleInput(e) {
		const target = e.target;
		this.inputText = target.value;
		if (this._suggestionTimeout !== null) window.clearTimeout(this._suggestionTimeout);
		if (this.inputText.trim().length > 1) this._suggestionTimeout = window.setTimeout(async () => {
			try {
				const results = await registry.invokeHookAsync("composer:suggest", { query: this.inputText.trim() });
				this.suggestions = results.flat();
				this.focusedSuggestionIndex = -1;
			} catch (err) {
				console.error("Failed to get suggestions", err);
				this.suggestions = [];
				this.focusedSuggestionIndex = -1;
			}
		}, 300);
		else {
			this.suggestions = [];
			this.focusedSuggestionIndex = -1;
		}
	}
	_handleKeyDown(e) {
		const inputVal = this.inputText.trim();
		if (this.suggestions.length > 0) {
			if (e.key === "ArrowDown") {
				e.preventDefault();
				this.focusedSuggestionIndex = Math.min(this.focusedSuggestionIndex + 1, this.suggestions.length - 1);
				return;
			} else if (e.key === "ArrowUp") {
				e.preventDefault();
				this.focusedSuggestionIndex = Math.max(this.focusedSuggestionIndex - 1, -1);
				return;
			} else if (e.key === "Enter" && this.focusedSuggestionIndex >= 0) {
				e.preventDefault();
				const s = this.suggestions[this.focusedSuggestionIndex];
				const addr = s.name ? "\"" + s.name + "\" <" + s.address + ">" : s.address;
				this._addAddress(addr);
				return;
			} else if (e.key === "Escape") {
				e.preventDefault();
				this.suggestions = [];
				this.focusedSuggestionIndex = -1;
				return;
			}
		}
		if (e.key === "Enter" && inputVal) {
			e.preventDefault();
			if (this._isValidEmail(inputVal)) this._addAddress(inputVal);
		} else if ((e.key === " " || e.key === ",") && inputVal) {
			e.preventDefault();
			if (this._isValidEmail(inputVal)) this._addAddress(inputVal);
		} else if (e.key === "Backspace" && !this.inputText && this.addresses.length > 0) {
			const lastAddr = this.addresses[this.addresses.length - 1];
			this._removeAddress(lastAddr);
			this.inputText = lastAddr + " ";
		}
	}
	_addAddress(addr, restoreFocus = true) {
		if (!this.addresses.includes(addr)) {
			this.addresses = [...this.addresses, addr];
			this._notifyChange();
		}
		this.inputText = "";
		this.suggestions = [];
		this.focusedSuggestionIndex = -1;
		if (restoreFocus) this.focus();
	}
	_removeAddress(addrToRemove) {
		this.addresses = this.addresses.filter((addr) => addr !== addrToRemove);
		this._notifyChange();
	}
	_notifyChange() {
		this.dispatchEvent(new CustomEvent("addresses-changed", {
			detail: { addresses: this.addresses },
			bubbles: true,
			composed: true
		}));
	}
	_handleBlur() {
		setTimeout(() => {
			const inputVal = this.inputText.trim();
			if (inputVal && this._isValidEmail(inputVal)) this._addAddress(inputVal, false);
			this.suggestions = [];
			this.focusedSuggestionIndex = -1;
		}, 150);
	}
	static {
		this.styles = [popupStyles, i$1`
    :host {
      display: block;
      width: 100%;
      position: relative;
      font-family: inherit;
    }

    .address-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      min-height: 32px;
      cursor: text;
    }

    .pill {
      display: flex;
      align-items: center;
      background: var(--bg-selected);
      border: none;
      border-radius: 4px;
      padding: 2px 2px 2px 6px;
      font-size: 13px;
      font-weight: 600;
      color: var(--accent-hover);
      gap: 4px;
    }

    .pill-addr {
      font-size: 13px;
      line-height: 1;
    }

    .pill-remove {
      background: none;
      border: none;
      color: var(--accent-hover);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px;
      border-radius: 4px;
    }

    .pill-remove svg {
      width: 14px;
      height: 14px;
    }

    .pill-remove:hover {
      color: var(--text-color);
    }

    .input-container {
      flex: 1;
      min-width: 8px;
      position: relative;
    }

    .input-wrapper {
      width: 100%;
      display: flex;
    }

    .input-container:focus-within,
    .input-container.has-value {
      min-width: 144px;
    }

    .suggestions-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 40010;
      min-width: 200px;
      max-width: 320px;
      background: var(--bg-primary, #ffffff);
      border: 1px solid var(--border-color, #e5e7eb);
      border-radius: 6px;
      box-shadow: rgba(95, 95, 95, 0.15) 0 4px 12px 0px;
      padding: 4px 0;
      display: flex;
      flex-direction: column;
      margin-top: 4px;
      max-height: 250px;
      overflow-y: auto;
    }

    input {
      width: 100%;
      border: none;
      outline: none;
      font-size: 14px;
      color: var(--text-color);
      background: transparent;
      padding: 4px 0;
    }
  `];
	}
	render() {
		return b`
      <div class="address-container" @click=${this.focus}>
        ${this.addresses.map((addr) => b`
          <div class="pill" title=${addr}>
            <span class="pill-addr">${this._displayAddr(addr)}</span>
            <button class="pill-remove" @click=${() => this._removeAddress(addr)} ?disabled=${this.disabled}>
              ${renderIcon("x")}
            </button>
          </div>
        `)}
        
        <div class="input-container ${this.inputText.length > 0 ? "has-value" : ""}">
          <div class="input-wrapper">
            <input
              type="text"
              .value=${this.inputText}
              @input=${this._handleInput}
              @keydown=${this._handleKeyDown}
              @blur=${this._handleBlur}
              @click=${(e) => e.stopPropagation()}
              ?disabled=${this.disabled}
            />
          </div>
          ${this.suggestions.length > 0 ? b`
            <div class="suggestions-dropdown">
              ${this.suggestions.map((s, index) => b`
                <button class="dropdown-item ${index === this.focusedSuggestionIndex ? "active" : ""}"
                  @mousedown=${(e) => {
			e.preventDefault();
		}}
                  @click=${(e) => {
			e.preventDefault();
			e.stopPropagation();
			const addr = s.name ? "\"" + s.name + "\" <" + s.address + ">" : s.address;
			this._addAddress(addr);
		}}>
                  <span class="item-text"><b>${s.name}</b> &lt;${s.address}&gt;</span>
                </button>
              `)}
            </div>
          ` : ""}
        </div>
      </div>
    `;
	}
};
__decorate([n$1({ type: Array })], AlpsAddressInput.prototype, "addresses", void 0);
__decorate([n$1({ type: Boolean })], AlpsAddressInput.prototype, "disabled", void 0);
__decorate([r()], AlpsAddressInput.prototype, "inputText", void 0);
__decorate([r()], AlpsAddressInput.prototype, "suggestions", void 0);
__decorate([r()], AlpsAddressInput.prototype, "focusedSuggestionIndex", void 0);
AlpsAddressInput = __decorate([t("alps-address-input")], AlpsAddressInput);
//#endregion
//#region src/components/alps-message-composer.ts
var FontSize = Extension.create({
	name: "fontSize",
	addOptions() {
		return { types: ["textStyle"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { fontSize: {
				default: null,
				parseHTML: (element) => element.style.fontSize?.replace(/['"]+/g, ""),
				renderHTML: (attributes) => {
					if (!attributes.fontSize) return {};
					return { style: `font-size: ${attributes.fontSize}` };
				}
			} }
		}];
	},
	addCommands() {
		return {
			setFontSize: (fontSize) => ({ chain }) => {
				return chain().setMark("textStyle", { fontSize }).run();
			},
			unsetFontSize: () => ({ chain }) => {
				return chain().setMark("textStyle", { fontSize: null }).removeEmptyTextStyle().run();
			}
		};
	}
});
var Indent = Extension.create({
	name: "indent",
	addOptions() {
		return {
			types: [
				"paragraph",
				"heading",
				"blockquote"
			],
			minIndent: 0,
			maxIndent: 240,
			step: 40
		};
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { indent: {
				default: 0,
				parseHTML: (element) => {
					return parseInt(element.style.marginLeft, 10) || 0;
				},
				renderHTML: (attributes) => {
					if (!attributes.indent) return {};
					return { style: `margin-left: ${attributes.indent}px` };
				}
			} }
		}];
	},
	addCommands() {
		return {
			indent: () => ({ tr, state, dispatch, editor }) => {
				if (editor.can().sinkListItem("listItem")) return editor.chain().sinkListItem("listItem").run();
				let indentApplied = false;
				state.doc.nodesBetween(state.selection.from, state.selection.to, (node, pos) => {
					if (this.options.types.includes(node.type.name)) {
						const currentIndent = node.attrs.indent || 0;
						if (currentIndent < this.options.maxIndent) {
							if (dispatch) tr.setNodeMarkup(pos, null, {
								...node.attrs,
								indent: currentIndent + this.options.step
							});
							indentApplied = true;
						}
					}
				});
				return indentApplied;
			},
			outdent: () => ({ tr, state, dispatch, editor }) => {
				if (editor.can().liftListItem("listItem")) return editor.chain().liftListItem("listItem").run();
				let outdentApplied = false;
				state.doc.nodesBetween(state.selection.from, state.selection.to, (node, pos) => {
					if (this.options.types.includes(node.type.name)) {
						const currentIndent = node.attrs.indent || 0;
						if (currentIndent > this.options.minIndent) {
							if (dispatch) tr.setNodeMarkup(pos, null, {
								...node.attrs,
								indent: Math.max(this.options.minIndent, currentIndent - this.options.step)
							});
							outdentApplied = true;
						}
					}
				});
				return outdentApplied;
			}
		};
	}
});
var AlpsMessageComposer = class AlpsMessageComposer extends i {
	constructor(..._args) {
		super(..._args);
		this.isSending = false;
		this.text = "";
		this.htmlText = "";
		this.format = "text";
		this.attachments = [];
		this.bubbleMenuState = "view";
		this.activeLinkUrl = "";
		this.activeLinkText = "";
		this.replyInputRef = e$1();
		this.editorContainerRef = e$1();
		this.bubbleMenuRef = e$1();
		this._handleI18nChange = () => {
			this.requestUpdate();
		};
	}
	focusEditor() {
		if (this.format === "html" && this.editor && !this.editor.isDestroyed) this.editor.commands.focus("start");
		else if (this.replyInputRef.value) {
			this.replyInputRef.value.focus();
			this.replyInputRef.value.setSelectionRange(0, 0);
		}
	}
	hasSelection() {
		if (this.format === "html" && this.editor && !this.editor.isDestroyed) return !this.editor.state.selection.empty;
		const textarea = this.replyInputRef.value;
		if (textarea) return textarea.selectionStart !== textarea.selectionEnd;
		return false;
	}
	getSelectionText() {
		if (this.format === "html" && this.editor && !this.editor.isDestroyed) {
			if (this.editor.state.selection.empty) return "";
			const { from, to } = this.editor.state.selection;
			return this.editor.state.doc.textBetween(from, to, " ");
		}
		const textarea = this.replyInputRef.value;
		if (textarea) return textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
		return "";
	}
	getActiveLink() {
		if (this.format === "html" && this.editor && !this.editor.isDestroyed) {
			if (this.editor.isActive("link")) return this.editor.getAttributes("link").href || null;
		}
		return null;
	}
	_getLinkDetails() {
		if (!this.editor || this.editor.isDestroyed || !this.editor.isActive("link")) return {
			url: "",
			text: "",
			range: null
		};
		const url = this.editor.getAttributes("link").href || "";
		const range = getMarkRange(this.editor.state.selection.$from, this.editor.schema.marks.link);
		let text = "";
		if (range) text = this.editor.state.doc.textBetween(range.from, range.to, " ");
		return {
			url,
			text,
			range
		};
	}
	_enterEditMode() {
		const details = this._getLinkDetails();
		this.activeLinkUrl = details.url;
		this.activeLinkText = details.text;
		this.bubbleMenuState = "edit";
	}
	_applyBubbleLink(e) {
		e.preventDefault();
		const urlInput = this.shadowRoot?.querySelector("#bubbleUrl");
		const textInput = this.shadowRoot?.querySelector("#bubbleText");
		const newUrl = urlInput?.value || "";
		const newText = textInput?.value || "";
		if (!newUrl || !this.editor || this.editor.isDestroyed) return;
		const details = this._getLinkDetails();
		if (details.range) if (newText !== details.text) this.editor.chain().focus().setTextSelection({
			from: details.range.from,
			to: details.range.to
		}).insertContent(newText).setTextSelection({
			from: details.range.from,
			to: details.range.from + newText.length
		}).setLink({ href: newUrl }).run();
		else this.editor.chain().focus().setLink({ href: newUrl }).run();
		this.bubbleMenuState = "view";
	}
	get messageText() {
		return this.text;
	}
	get messageHtml() {
		return this.htmlText;
	}
	getAttachments() {
		return this.attachments;
	}
	connectedCallback() {
		super.connectedCallback();
		this.updateComplete.then(() => {
			this.i18nStore?.addEventListener("change", this._handleI18nChange);
		});
	}
	firstUpdated() {
		this.initEditor();
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.i18nStore?.removeEventListener("change", this._handleI18nChange);
		this.editor?.destroy();
	}
	updated(changedProperties) {
		if (changedProperties.has("isSending") && this.editor) this.editor.setEditable(!this.isSending, false);
		if (changedProperties.has("format")) {
			const oldFormat = changedProperties.get("format");
			if (oldFormat === "text" && this.format === "html") {
				if (this.editor && this.editor.getText() !== this.text) {
					const contentStr = this.text.split("\n").map((line) => `<p>${line}</p>`).join("");
					this.editor.commands.setContent(contentStr);
					this.htmlText = this.editor.getHTML();
				}
			} else if (oldFormat === "html" && this.format === "text") {
				if (this.editor) this.text = this.editor.getText();
			}
		}
	}
	initEditor() {
		if (!this.editorContainerRef.value) return;
		this.editor = new Editor({
			element: this.editorContainerRef.value,
			extensions: [
				index_default.configure({ link: { openOnClick: false } }),
				index_default$1.configure({ types: ["heading", "paragraph"] }),
				TextStyle,
				Color,
				FontSize,
				Indent,
				BubbleMenu.configure({
					element: this.bubbleMenuRef.value,
					options: { placement: "bottom" },
					shouldShow: ({ editor }) => {
						if (this.bubbleMenuState === "edit") return true;
						return editor.isActive("link");
					}
				})
			],
			content: this.htmlText || (this.format === "html" ? this.text.split("\n").map((line) => `<p>${line}</p>`).join("") : this.text),
			onUpdate: ({ editor }) => {
				if (this.format !== "html") return;
				this.htmlText = editor.getHTML();
				this.text = editor.getText();
				this.dispatchEvent(new CustomEvent("text-changed", {
					detail: {
						text: this.text,
						html: this.htmlText
					},
					bubbles: true,
					composed: true
				}));
			},
			onTransaction: ({ editor }) => {
				if (!editor.isActive("link") && this.bubbleMenuState === "edit") this.bubbleMenuState = "view";
				this.requestUpdate();
			}
		});
		this.editor.setEditable(!this.isSending);
		this.requestUpdate();
	}
	clear() {
		if (this.replyInputRef.value) this.replyInputRef.value.value = "";
		this.text = "";
		this.htmlText = "";
		if (this.editor && !this.editor.isDestroyed) this.editor.commands.clearContent();
		this.attachments = [];
		this.dispatchEvent(new CustomEvent("text-changed", {
			detail: {
				text: "",
				html: ""
			},
			bubbles: true,
			composed: true
		}));
	}
	insertFormatting(prefix, suffix = "") {
		if (this.format === "html" && this.editor && !this.editor.isDestroyed) {
			if (prefix === "**") this.editor.chain().focus().toggleBold().run();
			else if (prefix === "*") this.editor.chain().focus().toggleItalic().run();
			return;
		}
		const textarea = this.replyInputRef.value;
		if (!textarea) return;
		const start = textarea.selectionStart;
		const end = textarea.selectionEnd;
		const value = textarea.value;
		const selectedText = value.substring(start, end);
		if (selectedText.startsWith(prefix) && selectedText.endsWith(suffix) && selectedText.length >= prefix.length + suffix.length) {
			const newText = selectedText.substring(prefix.length, selectedText.length - suffix.length);
			textarea.setRangeText(newText, start, end, "select");
		} else if (start >= prefix.length && value.substring(start - prefix.length, start) === prefix && end + suffix.length <= value.length && value.substring(end, end + suffix.length) === suffix) textarea.setRangeText(selectedText, start - prefix.length, end + suffix.length, "select");
		else {
			textarea.setRangeText(prefix + selectedText + suffix, start, end, "select");
			if (start === end) {
				textarea.selectionStart = start + prefix.length;
				textarea.selectionEnd = start + prefix.length;
			}
		}
		this.text = textarea.value;
		if (this.editor && !this.editor.isDestroyed) this.htmlText = this.editor.getHTML();
		this.dispatchEvent(new CustomEvent("text-changed", {
			detail: {
				text: this.text,
				html: this.htmlText
			},
			bubbles: true,
			composed: true
		}));
		textarea.focus();
	}
	insertEmoji(emoji) {
		if (this.format === "html" && this.editor && !this.editor.isDestroyed) this.editor.chain().focus().insertContent(emoji).run();
		else {
			const textarea = this.replyInputRef.value;
			if (!textarea) return;
			const start = textarea.selectionStart;
			const end = textarea.selectionEnd;
			textarea.setRangeText(emoji, start, end, "end");
			this.text = textarea.value;
			if (this.editor && !this.editor.isDestroyed) this.htmlText = this.editor.getHTML();
			this.dispatchEvent(new CustomEvent("text-changed", {
				detail: {
					text: this.text,
					html: this.htmlText
				},
				bubbles: true,
				composed: true
			}));
			textarea.focus();
		}
	}
	_handleInput(e) {
		this.text = e.target.value;
		this.dispatchEvent(new CustomEvent("text-changed", {
			detail: {
				text: this.text,
				html: this.htmlText
			},
			bubbles: true,
			composed: true
		}));
	}
	static {
		this.styles = [popupStyles, i$1`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      min-height: 0;
    }

    .compose-area {
      flex: 1;
      display: flex;
      flex-direction: column;
      position: relative;
      min-height: 0;
    }

    .formatting-toolbar {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 8px 16px;
      border-bottom: 1px solid var(--border-color);
      background-color: var(--bg-primary);
      flex-wrap: wrap;
    }

    .formatting-toolbar .divider {
      width: 1px;
      height: 20px;
      background-color: var(--border-color);
      margin: 0 4px;
    }

    .reply-box {
      flex: 1;
      width: 100%;
      padding: 12px 16px;
      border: none;
      resize: none;
      font-family: inherit;
      font-size: 14px;
      color: var(--text-color);
      outline: none;
      box-sizing: border-box;
      background: transparent;
    }

    .editor-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      padding: 12px 16px;
      font-family: inherit;
      font-size: 14px;
      color: var(--text-color);
      min-height: 0;
    }

    .editor-container .ProseMirror {
      flex: 1;
      outline: none;
      white-space: pre-wrap;
    }

    .editor-container .ProseMirror p {
      margin: 0 0 1em 0;
    }

    .editor-container .ProseMirror a {
      color: var(--accent-color);
      cursor: pointer;
    }

    .editor-container .ProseMirror ul,
    .editor-container .ProseMirror ol {
      margin: 0 0 1em 0;
      padding-left: 1.5em;
    }

    .editor-container .ProseMirror blockquote {
      border-left: 3px solid var(--border-color, #e5e7eb);
      margin: 0 0 1em 0;
      padding-left: 1em;
      color: var(--text-muted, #6b7280);
    }

    .bubble-menu-container {
      visibility: hidden;
      opacity: 0;
      z-index: 50000;
      transition: opacity 0.2s, visibility 0.2s;
      position: absolute;
    }

    .bubble-menu-wrapper {
      background: var(--bg-primary, #ffffff);
      border: 1px solid var(--border-color, #e5e7eb);
      border-radius: 6px;
      box-shadow: rgba(95, 95, 95, 0.15) 0 4px 12px 0px;
      padding: 8px 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 13px;
      min-width: 200px;
    }

    .bubble-menu-wrapper .bubble-view {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--text-primary);
    }

    .bubble-menu-wrapper .bubble-view a {
      color: var(--accent-color, #005A9E);
      text-decoration: none;
      max-width: 150px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: inline-block;
      vertical-align: bottom;
    }

    .bubble-menu-wrapper .bubble-view a:hover {
      text-decoration: underline;
    }

    .bubble-menu-wrapper .divider {
      color: var(--border-color);
    }

    .bubble-menu-wrapper .bubble-btn {
      background: none;
      border: none;
      padding: 0;
      font-size: 13px;
      color: var(--accent-color, #005A9E);
      cursor: pointer;
    }

    .bubble-menu-wrapper .bubble-btn:hover {
      text-decoration: underline;
    }

    .bubble-menu-wrapper .bubble-edit {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .bubble-menu-wrapper .field-row {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .bubble-menu-wrapper .field-row label {
      font-size: 12px;
      font-weight: 500;
      color: var(--text-primary);
    }

    .bubble-menu-wrapper .field-row input {
      width: 100%;
      box-sizing: border-box;
      padding: 6px 8px;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      font-family: inherit;
      font-size: 13px;
    }

    .bubble-menu-wrapper .bubble-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      margin-top: 4px;
    }

    .hidden {
      display: none !important;
    }

    .mobile-only {
      display: none !important;
    }

    @media (max-width: 768px) {
      .desktop-only {
        display: none !important;
      }
      .mobile-only {
        display: flex !important;
      }
    }
  `];
	}
	renderFormattingToolbar() {
		if (!this.editor || this.format !== "html") return "";
		const currentSize = this.editor.getAttributes("textStyle").fontSize || "14px";
		let alignIcon = "textAlignLeft";
		const isCenter = this.editor.isActive({ textAlign: "center" });
		const isRight = this.editor.isActive({ textAlign: "right" });
		const isLeft = !isCenter && !isRight;
		if (isCenter) alignIcon = "textAlignCenter";
		if (isRight) alignIcon = "textAlignRight";
		return b`
      <div class="formatting-toolbar">
        <alps-popup align="left" class="size-popup">
          <alps-icon-btn slot="trigger" title=${this.i18nStore?.t("messageComposer.fontSize")} icon="textSize"></alps-icon-btn>
          <button class="dropdown-item ${currentSize === "10px" ? "active" : ""}" @click=${() => this.editor?.chain().focus().setFontSize("10px").run()}>${this.i18nStore?.t("messageComposer.small")}</button>
          <button class="dropdown-item ${currentSize === "14px" ? "active" : ""}" @click=${() => this.editor?.chain().focus().setFontSize("14px").run()}>${this.i18nStore?.t("messageComposer.normal")}</button>
          <button class="dropdown-item ${currentSize === "18px" ? "active" : ""}" @click=${() => this.editor?.chain().focus().setFontSize("18px").run()}>${this.i18nStore?.t("messageComposer.large")}</button>
          <button class="dropdown-item ${currentSize === "24px" ? "active" : ""}" @click=${() => this.editor?.chain().focus().setFontSize("24px").run()}>${this.i18nStore?.t("messageComposer.huge")}</button>
        </alps-popup>

        <div class="divider"></div>

        <alps-icon-btn ?active=${this.editor.isActive("bold")} @click=${() => this.editor?.chain().focus().toggleBold().run()} title=${this.i18nStore?.t("messageComposer.bold")} icon="textB"></alps-icon-btn>
        <alps-icon-btn ?active=${this.editor.isActive("italic")} @click=${() => this.editor?.chain().focus().toggleItalic().run()} title=${this.i18nStore?.t("messageComposer.italic")} icon="textItalic"></alps-icon-btn>
        <alps-icon-btn ?active=${this.editor.isActive("underline")} @click=${() => this.editor?.chain().focus().toggleUnderline().run()} title=${this.i18nStore?.t("messageComposer.underline")} icon="textUnderline"></alps-icon-btn>
        
        <alps-icon-btn 
          title=${this.i18nStore?.t("messageComposer.textColor")} 
          icon="textAUnderline" 
          @click=${(e) => {
			const input = e.currentTarget.nextElementSibling;
			if (input) input.click();
		}}>
        </alps-icon-btn>
        <input type="color" style="visibility: hidden; position: absolute; width: 0; height: 0;"
          .value=${this.editor.getAttributes("textStyle").color || "#000000"}
          @input=${(e) => this.editor?.chain().focus().setColor(e.target.value).run()} />

        <div class="divider"></div>

        <alps-popup align="left" class="align-popup">
          <alps-icon-btn slot="trigger" title=${this.i18nStore?.t("messageComposer.align")} icon="${alignIcon}"></alps-icon-btn>
          <button class="dropdown-item ${isLeft ? "active" : ""}" @click=${() => this.editor?.chain().focus().setTextAlign("left").run()}>
            ${renderIcon("textAlignLeft")} <span class="item-text">${this.i18nStore?.t("messageComposer.left")}</span>
          </button>
          <button class="dropdown-item ${isCenter ? "active" : ""}" @click=${() => this.editor?.chain().focus().setTextAlign("center").run()}>
            ${renderIcon("textAlignCenter")} <span class="item-text">${this.i18nStore?.t("messageComposer.center")}</span>
          </button>
          <button class="dropdown-item ${isRight ? "active" : ""}" @click=${() => this.editor?.chain().focus().setTextAlign("right").run()}>
            ${renderIcon("textAlignRight")} <span class="item-text">${this.i18nStore?.t("messageComposer.right")}</span>
          </button>
        </alps-popup>

        <div class="divider"></div>

        <alps-icon-btn class="desktop-only" ?active=${this.editor.isActive("orderedList")} @click=${() => this.editor?.chain().focus().toggleOrderedList().run()} title=${this.i18nStore?.t("messageComposer.numberedList")} icon="listNumbers"></alps-icon-btn>
        <alps-icon-btn ?active=${this.editor.isActive("bulletList")} @click=${() => this.editor?.chain().focus().toggleBulletList().run()} title=${this.i18nStore?.t("messageComposer.bulletedList")} icon="listBullets"></alps-icon-btn>
        <alps-icon-btn @click=${() => this.editor?.chain().focus().indent().run()} title=${this.i18nStore?.t("messageComposer.indentMore")} icon="textIndent"></alps-icon-btn>
        <alps-icon-btn class="desktop-only" @click=${() => this.editor?.chain().focus().outdent().run()} title=${this.i18nStore?.t("messageComposer.indentLess")} icon="textOutdent"></alps-icon-btn>
        
        <div class="divider"></div>
        <alps-popup align="right" class="more-formatting-popup">
          <alps-icon-btn slot="trigger" title=${this.i18nStore?.t("messageComposer.moreFormatting")} icon="dotsThreeVertical"></alps-icon-btn>
          <button class="dropdown-item" @click=${() => this.editor?.chain().focus().undo().run()}>
            ${renderIcon("arrowUUpLeft")} ${this.i18nStore?.t("messageComposer.undo")}
          </button>
          <button class="dropdown-item" @click=${() => this.editor?.chain().focus().redo().run()}>
            ${renderIcon("arrowUUpRight")} ${this.i18nStore?.t("messageComposer.redo")}
          </button>
          <div class="dropdown-divider mobile-only"></div>
          <button class="dropdown-item mobile-only ${this.editor.isActive("orderedList") ? "active" : ""}" @click=${() => this.editor?.chain().focus().toggleOrderedList().run()}>
            ${renderIcon("listNumbers")} ${this.i18nStore?.t("messageComposer.numberedList")}
          </button>
          <button class="dropdown-item mobile-only" @click=${() => this.editor?.chain().focus().outdent().run()}>
            ${renderIcon("textOutdent")} ${this.i18nStore?.t("messageComposer.indentLess")}
          </button>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item ${this.editor.isActive("blockquote") ? "active" : ""}" @click=${() => this.editor?.chain().focus().toggleBlockquote().run()}>
            ${renderIcon("textQuote")} ${this.i18nStore?.t("messageComposer.quote")}
          </button>
          <button class="dropdown-item ${this.editor.isActive("strike") ? "active" : ""}" @click=${() => this.editor?.chain().focus().toggleStrike().run()}>
            ${renderIcon("textStrikethrough")} ${this.i18nStore?.t("messageComposer.strikethrough")}
          </button>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item" @click=${() => this.editor?.chain().focus().clearNodes().unsetAllMarks().run()}>
            ${renderIcon("textClearFormat")} ${this.i18nStore?.t("messageComposer.clearFormatting")}
          </button>
        </alps-popup>
      </div>
    `;
	}
	render() {
		return b`
      <div class="compose-area">
        ${this.renderFormattingToolbar()}
        <div class="editor-container ${this.format === "html" ? "" : "hidden"}" ${n$2(this.editorContainerRef)}></div>
        
        <!-- Bubble Menu Container -->
        <div class="bubble-menu-container" ${n$2(this.bubbleMenuRef)} 
             @mousedown=${(e) => e.stopPropagation()} 
             @mouseup=${(e) => e.stopPropagation()} 
             @click=${(e) => e.stopPropagation()} 
             @touchstart=${(e) => e.stopPropagation()} 
             @touchend=${(e) => e.stopPropagation()}
             @pointerdown=${(e) => e.stopPropagation()}
             @pointerup=${(e) => e.stopPropagation()}>
          <div class="bubble-menu-wrapper">
            ${this.bubbleMenuState === "view" ? b`
              <div class="bubble-view" @mousedown=${(e) => e.preventDefault()}>
                <span class="link-label">${this.i18nStore?.t("messageComposer.goToLink")} <a href="${this._getLinkDetails().url}" target="_blank">${this._getLinkDetails().url}</a></span>
                <span class="divider">|</span>
                <button class="bubble-btn" @click=${(e) => {
			e.preventDefault();
			this._enterEditMode();
		}}>${this.i18nStore?.t("messageComposer.change")}</button>
                <span class="divider">|</span>
                <button class="bubble-btn" @click=${(e) => {
			e.preventDefault();
			this.editor?.chain().focus().unsetLink().run();
		}}>${this.i18nStore?.t("messageComposer.remove")}</button>
              </div>
            ` : b`
              <div class="bubble-edit">
                <div class="field-row">
                  <label>${this.i18nStore?.t("messageComposer.text")}</label>
                  <alps-input inputId="bubbleText" .value=${this.activeLinkText} @keydown=${(e) => {
			if (e.key === "Enter") this._applyBubbleLink(e);
			e.stopPropagation();
		}}></alps-input>
                </div>
                <div class="field-row">
                  <label>${this.i18nStore?.t("messageComposer.link")}</label>
                  <alps-input type="url" inputId="bubbleUrl" .value=${this.activeLinkUrl} @keydown=${(e) => {
			if (e.key === "Enter") this._applyBubbleLink(e);
			e.stopPropagation();
		}}></alps-input>
                </div>
                <div class="bubble-actions">
                  <alps-button variant="text" @click=${(e) => {
			e.preventDefault();
			this.bubbleMenuState = "view";
		}}>${this.i18nStore?.t("general.cancel")}</alps-button>
                  <alps-button variant="normal" @click=${this._applyBubbleLink}>${this.i18nStore?.t("messageComposer.apply")}</alps-button>
                </div>
              </div>
            `}
          </div>
        </div>
        <textarea
          ${n$2(this.replyInputRef)}
          class="reply-box ${this.format === "html" ? "hidden" : ""}"
          placeholder=${this.i18nStore?.t("messageComposer.writeMessage")}
          ?disabled=${this.isSending}
          .value=${this.text}
          @input=${this._handleInput}
        ></textarea>
      </div>
    `;
	}
};
__decorate([c({ context: i18nContext })], AlpsMessageComposer.prototype, "i18nStore", void 0);
__decorate([n$1({ type: Boolean })], AlpsMessageComposer.prototype, "isSending", void 0);
__decorate([n$1({ type: String })], AlpsMessageComposer.prototype, "text", void 0);
__decorate([n$1({ type: String })], AlpsMessageComposer.prototype, "htmlText", void 0);
__decorate([n$1({ type: String })], AlpsMessageComposer.prototype, "format", void 0);
__decorate([r()], AlpsMessageComposer.prototype, "attachments", void 0);
__decorate([r()], AlpsMessageComposer.prototype, "bubbleMenuState", void 0);
__decorate([r()], AlpsMessageComposer.prototype, "activeLinkUrl", void 0);
__decorate([r()], AlpsMessageComposer.prototype, "activeLinkText", void 0);
AlpsMessageComposer = __decorate([t("alps-message-composer")], AlpsMessageComposer);
//#endregion
//#region src/components/alps-emoji-selector-popup.ts
var AlpsEmojiSelectorPopup = class AlpsEmojiSelectorPopup extends i {
	constructor(..._args) {
		super(..._args);
		this.position = "bottom";
	}
	static {
		this.styles = i$1`
    :host {
      display: inline-block;
    }

    .selector-container {
      display: flex;
      flex-direction: column;
      width: 320px;
      height: 400px;
    }

    unicode-emoji-picker {
      width: 100%;
      height: 100%;
      --fill-color: var(--bg-primary, #ffffff);
      --text-color: var(--text-primary, #111827);
      --box-shadow: none;
      --border-radius: 0;
      
      /* Theme mappings */
      --filters-border-color: var(--border-color, #e5e7eb);
      --filter-fill-color-hover: var(--hover-color, #f3f4f6);
      --content-scrollbar-thumb-fill-color: var(--border-color, #e5e7eb);
      --content-scrollbar-thumb-fill-color-hover: var(--text-muted, #6b7280);
      --filter-active-marker-border-color: var(--accent-color, #005A9E);
      --title-bar-fill-color: var(--bg-primary, #ffffff);
      --search-input-border-color: var(--border-color, #e5e7eb);
      --search-input-border-color-hover: var(--accent-color, #005A9E);
      --emoji-border-color-hover: var(--hover-color, #f3f4f6);
      
      font-size: 16px;
    }

    /* Target specific parts of the picker to hide the top/bottom borders that popup might have */
  `;
	}
	_handleEmojiPick(e) {
		const emoji = e.detail.emoji;
		if (this.popup) this.popup.close();
		this.dispatchEvent(new CustomEvent("emoji-selected", {
			detail: { emoji },
			bubbles: true,
			composed: true
		}));
	}
	_handlePopupToggle() {}
	render() {
		return b`
      <alps-popup align="left" position="${this.position}" @click=${this._handlePopupToggle}>
        <slot name="trigger" slot="trigger"></slot>
        <div class="selector-container" @click=${(e) => e.stopPropagation()}>
          <unicode-emoji-picker
            filters-position="top"
            @emoji-pick=${this._handleEmojiPick}
          ></unicode-emoji-picker>
        </div>
      </alps-popup>
    `;
	}
};
__decorate([n$1({ type: String })], AlpsEmojiSelectorPopup.prototype, "position", void 0);
__decorate([e("alps-popup")], AlpsEmojiSelectorPopup.prototype, "popup", void 0);
AlpsEmojiSelectorPopup = __decorate([t("alps-emoji-selector-popup")], AlpsEmojiSelectorPopup);
//#endregion
//#region src/components/alps-floating-composer.ts
var UNDO_TOAST_TIMEOUT_MS = 5e3;
var AlpsFloatingComposer = class AlpsFloatingComposer extends i {
	constructor(..._args) {
		super(..._args);
		this.index = 0;
		this.totalOpen = 1;
		this.totalMinimized = 0;
		this.openIndex = 0;
		this.minimizedIndex = 0;
		this.showCc = false;
		this.showBcc = false;
		this.showDiscardConfirm = false;
		this.pendingDiscardType = null;
		this.windowWidth = window.innerWidth;
		this.windowHeight = window.innerHeight;
		this.isSaving = false;
		this.isDragOver = false;
		this.autoSaveTimer = null;
		this._handleI18nChange = () => {
			this.requestUpdate();
		};
		this._handleWindowDragOver = () => {
			if (this.isDragOver) this.isDragOver = false;
		};
		this._handleWindowDragLeave = (e) => {
			if (e.relatedTarget === null && this.isDragOver) this.isDragOver = false;
		};
		this._handleGlobalDropHandled = () => {
			if (this.isDragOver) this.isDragOver = false;
		};
		this._handleResize = () => {
			this.windowWidth = window.innerWidth;
			this.windowHeight = window.innerHeight;
		};
		this._wasActiveOnMousedown = false;
		this.linkPromptFields = [];
		this._handleDragOver = (e) => {
			if (this.instance.isSending || this.instance.minimized) return;
			e.preventDefault();
			e.stopPropagation();
			this.isDragOver = true;
		};
		this._handleDragLeave = (e) => {
			e.preventDefault();
			e.stopPropagation();
			this.isDragOver = false;
		};
		this._handleDrop = (e) => {
			if (this.instance.isSending || this.instance.minimized) return;
			e.preventDefault();
			e.stopPropagation();
			this.isDragOver = false;
			window.dispatchEvent(new CustomEvent("alps-composer-drop"));
			const files = Array.from(e.dataTransfer?.files || []);
			if (files.length > 0) this._startUpload(files);
		};
	}
	connectedCallback() {
		super.connectedCallback();
		window.addEventListener("resize", this._handleResize);
		window.addEventListener("dragover", this._handleWindowDragOver);
		window.addEventListener("dragleave", this._handleWindowDragLeave);
		window.addEventListener("alps-composer-drop", this._handleGlobalDropHandled);
		this.updateComplete.then(() => {
			this.i18nStore?.addEventListener("change", this._handleI18nChange);
		});
		if (this.instance.cc && this.instance.cc.length > 0) this.showCc = true;
		if (this.instance.bcc && this.instance.bcc.length > 0) this.showBcc = true;
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		window.removeEventListener("resize", this._handleResize);
		window.removeEventListener("dragover", this._handleWindowDragOver);
		window.removeEventListener("dragleave", this._handleWindowDragLeave);
		window.removeEventListener("alps-composer-drop", this._handleGlobalDropHandled);
		this.i18nStore?.removeEventListener("change", this._handleI18nChange);
		this._clearAutoSave();
	}
	firstUpdated() {
		setTimeout(() => {
			if (this.isConnected && this.composer && this.composer.focusEditor) this.composer.focusEditor();
		}, 100);
	}
	_clearAutoSave() {
		if (this.autoSaveTimer !== null) {
			window.clearTimeout(this.autoSaveTimer);
			this.autoSaveTimer = null;
		}
	}
	updated(changedProperties) {
		if (changedProperties.has("instance") && this.instance.dirty && !this.instance.isSending) this._scheduleAutoSave();
	}
	_scheduleAutoSave() {
		this._clearAutoSave();
		this.autoSaveTimer = window.setTimeout(() => {
			this._saveDraft();
		}, 3e3);
	}
	async _saveDraft() {
		const currentInstance = this.composeStore.getComposer(this.instance.id) || this.instance;
		if (currentInstance.isSending || this.isSaving) return;
		const hasRecipient = (currentInstance.to?.length || 0) > 0 || (currentInstance.cc?.length || 0) > 0 || (currentInstance.bcc?.length || 0) > 0;
		const hasAttachments = currentInstance.attachments && currentInstance.attachments.length > 0;
		const hasContent = !(currentInstance.text?.trim() === currentInstance.initialText?.trim()) || (currentInstance.subject?.trim().length || 0) > 0 || hasAttachments;
		if (!hasRecipient && !hasContent) return;
		this.isSaving = true;
		try {
			const sentUuids = (currentInstance.attachments || []).map((a) => a.uuid).filter(Boolean);
			const formData = this._buildFormData(currentInstance);
			formData.append("save_as_draft", "1");
			const result = await messageOperations.saveDraft(formData);
			if (result) {
				const oldUid = this.instance.draftUid;
				window.dispatchEvent(new CustomEvent("draft-autosaved", { detail: {
					oldUid,
					newUid: result.uid,
					mailbox: result.mailbox,
					subject: this.instance.subject,
					to: this.instance.to,
					cc: this.instance.cc,
					bcc: this.instance.bcc,
					size: result.size,
					hasAttachments: this.instance.attachments && this.instance.attachments.length > 0
				} }));
			}
			if (!this.isConnected) return;
			if (result) {
				const updates = {
					dirty: false,
					draftUid: result.uid,
					draftMailbox: result.mailbox
				};
				if (result.attachments) {
					const unsavedAttachments = (currentInstance.attachments || []).filter((a) => {
						if (a._tempId) return true;
						if (a.uuid && !sentUuids.includes(a.uuid)) return true;
						return false;
					});
					updates.attachments = [...result.attachments, ...unsavedAttachments];
				}
				this.composeStore.updateComposer(this.instance.id, updates);
				const latestComposer = this.composeStore.getComposer(this.instance.id);
				const hasUnsavedAttachments = (latestComposer?.attachments || []).some((a) => a.uuid && !sentUuids.includes(a.uuid));
				if (latestComposer?.dirty || hasUnsavedAttachments) this._scheduleAutoSave();
			}
		} finally {
			this.isSaving = false;
		}
	}
	_buildFormData(currentInstance) {
		const formData = new FormData();
		const to = currentInstance.to || [];
		const cc = currentInstance.cc || [];
		let bcc = [...currentInstance.bcc || []];
		let replyToSetting = "";
		try {
			const storedSettings = localStorage.getItem("alps_settings");
			if (storedSettings) {
				const parsed = JSON.parse(storedSettings);
				if (parsed.bccMyself && parsed.loginUsername) {
					if (!bcc.includes(parsed.loginUsername)) bcc.push(parsed.loginUsername);
				}
				if (parsed.replyTo) replyToSetting = parsed.replyTo;
			}
		} catch (e) {}
		const text = currentInstance.text || "";
		const subject = (currentInstance.subject || "").trim();
		formData.append("to", to.join(", "));
		formData.append("cc", cc.join(", "));
		formData.append("bcc", bcc.join(", "));
		if (replyToSetting) formData.append("reply_to", replyToSetting);
		formData.append("subject", subject);
		formData.append("text", text);
		if (currentInstance.format === "html" && currentInstance.html) formData.append("html", currentInstance.html);
		const attachments = currentInstance.attachments || [];
		const uuids = attachments.map((a) => a.uuid).filter(Boolean).join(",");
		if (uuids) formData.append("attachment-uuids", uuids);
		const prev = attachments.map((a) => a.partPath).filter(Boolean).join(",");
		if (prev) formData.append("prev_attachments", prev);
		if (currentInstance.draftMailbox) formData.append("draft_mailbox", currentInstance.draftMailbox);
		if (currentInstance.draftUid) formData.append("draft_uid", currentInstance.draftUid);
		if (currentInstance.inReplyTo) formData.append("in_reply_to", currentInstance.inReplyTo);
		return formData;
	}
	get composer() {
		return this.shadowRoot.querySelector("alps-message-composer");
	}
	_toggleMinimize() {
		this.composeStore.updateComposer(this.instance.id, {
			minimized: !this.instance.minimized,
			expanded: false
		});
	}
	_handleHeaderClick() {
		this.composeStore.bringComposerToFront(this.instance.id);
		if (this.instance.minimized) {
			this.composeStore.updateComposer(this.instance.id, { minimized: false });
			setTimeout(() => {
				if (this.isConnected && this.composer && this.composer.focusEditor) this.composer.focusEditor();
			}, 100);
		} else if (!this._wasActiveOnMousedown) setTimeout(() => {
			if (this.isConnected && this.composer && this.composer.focusEditor) this.composer.focusEditor();
		}, 100);
	}
	_toggleExpand() {
		this.composeStore.updateComposer(this.instance.id, {
			expanded: !this.instance.expanded,
			minimized: false
		});
	}
	_handleCloseClick() {
		if ((this.instance.attachments || []).some((a) => a.uploading)) {
			this.composeStore.updateComposer(this.instance.id, { closing: true });
			return;
		}
		if (this.instance.dirty) this._saveDraft();
		this.composeStore.closeComposer(this.instance.id);
	}
	_handleDiscardClick() {
		this._clearAutoSave();
		const isSaved = !!this.instance.draftUid;
		const isDirty = this.instance.dirty;
		const hasRecipient = (this.instance.to?.length || 0) > 0 || (this.instance.cc?.length || 0) > 0 || (this.instance.bcc?.length || 0) > 0;
		const hasAttachments = this.instance.attachments && this.instance.attachments.length > 0;
		const hasContent = !(this.instance.text?.trim() === this.instance.initialText?.trim()) || (this.instance.subject?.trim().length || 0) > 0 || hasAttachments;
		if (!(!hasRecipient && !hasContent) || isSaved || isDirty) {
			this.pendingDiscardType = "delete";
			this.showDiscardConfirm = true;
		} else this._performDiscard("delete");
	}
	async _confirmDiscard() {
		this.showDiscardConfirm = false;
		const type = this.pendingDiscardType;
		this.pendingDiscardType = null;
		this._performDiscard(type);
	}
	async _performDiscard(type) {
		if (type === "delete" && this.instance.draftUid && this.instance.draftMailbox) try {
			await messageOperations.deleteMessages(this.instance.draftMailbox, [String(this.instance.draftUid)]);
		} catch (e) {
			Logger.error("Failed to delete draft", e);
		}
		if (this.instance.attachments) {
			for (const att of this.instance.attachments) if (att._tempId) abortUpload(att._tempId);
			else if (att.uuid) deleteAttachment(att.uuid);
		}
		this.composeStore.closeComposer(this.instance.id);
	}
	_cancelDiscard() {
		this.showDiscardConfirm = false;
		this.pendingDiscardType = null;
		if (this.instance.dirty) this._scheduleAutoSave();
	}
	_bringToFront() {
		const composers = this.composeStore.getState().activeComposers;
		let maxZ = 1e3;
		composers.forEach((c) => {
			if (c.zIndex && c.zIndex > maxZ) maxZ = c.zIndex;
		});
		this._wasActiveOnMousedown = (this.instance.zIndex || 0) >= maxZ;
		this.composeStore.bringComposerToFront(this.instance.id);
	}
	_handleLinkClick() {
		if (!this.composer) return;
		if (this.composer.focusEditor) this.composer.focusEditor();
		const hasSelection = this.composer.hasSelection();
		const activeLink = this.composer.getActiveLink ? this.composer.getActiveLink() : null;
		if (activeLink) this.linkPromptFields = [{
			id: "url",
			label: this.i18nStore?.t("floatingComposer.linkUrl"),
			placeholder: this.i18nStore?.t("floatingComposer.linkUrlPlaceholder"),
			value: activeLink
		}];
		else {
			const selectedText = hasSelection && this.composer.getSelectionText ? this.composer.getSelectionText() : "";
			this.linkPromptFields = [{
				id: "text",
				label: this.i18nStore?.t("floatingComposer.displayText"),
				placeholder: this.i18nStore?.t("floatingComposer.displayTextPlaceholder"),
				value: selectedText
			}, {
				id: "url",
				label: this.i18nStore?.t("floatingComposer.linkUrl"),
				placeholder: this.i18nStore?.t("floatingComposer.linkUrlPlaceholder")
			}];
		}
		setTimeout(() => {
			(this.shadowRoot?.querySelectorAll("#linkPopup input")).forEach((input) => {
				input.value = this.linkPromptFields.find((f) => f.id === input.id)?.value || "";
			});
		}, 50);
	}
	_handleLinkSubmit() {
		const popup = this.shadowRoot?.querySelector("#linkPopup");
		if (popup) popup.close();
		if (!this.composer) return;
		const inputs = this.shadowRoot?.querySelectorAll("#linkPopup input");
		const values = {};
		inputs.forEach((input) => values[input.id] = input.value);
		const { text, url } = values;
		if (!url) return;
		if (this.instance.format === "html" && this.composer.editor) {
			const editor = this.composer.editor;
			if (text) editor.chain().focus().insertContent(`<a href="${url}">${text}</a>`).command(({ tr, dispatch }) => {
				if (dispatch) {
					if (editor.schema.marks.link) tr.removeStoredMark(editor.schema.marks.link);
				}
				return true;
			}).run();
			else {
				const endPos = editor.state.selection.to;
				editor.chain().focus().setLink({ href: url }).setTextSelection(endPos).command(({ tr, dispatch }) => {
					if (dispatch) {
						if (editor.schema.marks.link) tr.removeStoredMark(editor.schema.marks.link);
					}
					return true;
				}).run();
			}
		} else if (text) this.composer.insertFormatting("", `[${text}](${url})`);
		else this.composer.insertFormatting("[", `](${url})`);
	}
	async _handleSend() {
		if ((this.instance.attachments || []).some((a) => a.uploading)) {
			window.dispatchEvent(new CustomEvent("show-toast", { detail: {
				message: this.i18nStore?.t("composer.attachmentsWait"),
				duration: 3e3
			} }));
			return;
		}
		const text = this.instance.text || "";
		const to = this.instance.to || [];
		const cc = this.instance.cc || [];
		const bcc = this.instance.bcc || [];
		const allTo = [
			...to,
			...cc,
			...bcc
		];
		const subject = (this.instance.subject || "").trim();
		if (!text || allTo.length === 0 || !subject) return;
		this._clearAutoSave();
		this.composeStore.updateComposer(this.instance.id, {
			isSending: true,
			minimized: true
		});
		try {
			let undoFn;
			let sendNowFn;
			const sendPromise = new Promise((resolve) => {
				let timeoutId = window.setTimeout(() => {
					resolve(true);
				}, UNDO_TOAST_TIMEOUT_MS);
				undoFn = () => {
					window.clearTimeout(timeoutId);
					resolve(false);
				};
				sendNowFn = () => {
					window.clearTimeout(timeoutId);
					resolve(true);
				};
			});
			window.dispatchEvent(new CustomEvent("show-toast", { detail: {
				message: this.i18nStore?.t("composer.sending"),
				actionLabel: this.i18nStore?.t("composer.undo"),
				actionFn: () => {
					if (undoFn) undoFn();
				},
				dismissFn: () => {
					if (sendNowFn) sendNowFn();
				},
				duration: UNDO_TOAST_TIMEOUT_MS
			} }));
			if (!await sendPromise) {
				this.composeStore.updateComposer(this.instance.id, {
					isSending: false,
					minimized: false
				});
				this.composeStore.bringComposerToFront(this.instance.id);
				return;
			}
			const currentInstance = this.composeStore.getComposer(this.instance.id) || this.instance;
			let finalFormData = this._buildFormData(currentInstance);
			const presendResults = await registry.invokeHookAsync("composer:presend", {
				composer: this,
				formData: finalFormData,
				instance: currentInstance
			});
			let abortSend = false;
			for (const res of presendResults) if (res instanceof FormData) finalFormData = res;
			else if (res === false) abortSend = true;
			if (abortSend) {
				this.composeStore.updateComposer(this.instance.id, {
					isSending: false,
					minimized: false
				});
				this.composeStore.bringComposerToFront(this.instance.id);
				return;
			}
			await messageOperations.sendDraft(finalFormData);
			registry.invokeHook("composer:send", { recipients: allTo });
			if (currentInstance.draftMailbox) messageSync.fetch(currentInstance.draftMailbox, 0, "", false);
			this.composeStore.closeComposer(this.instance.id);
		} catch (err) {
			Logger.error("Failed to send message:", err);
			this.composeStore.updateComposer(this.instance.id, {
				isSending: false,
				minimized: false,
				expanded: false
			});
			this._bringToFront();
			window.dispatchEvent(new CustomEvent("show-toast", { detail: {
				message: this.i18nStore?.t("composer.sendError")?.replace("{error}", err.message),
				duration: 5e3
			} }));
		}
	}
	_toggleFormat() {
		const newFormat = (this.instance.format || "html") === "html" ? "text" : "html";
		this.composeStore.updateComposer(this.instance.id, { format: newFormat });
		requestAnimationFrame(() => {
			setTimeout(() => {
				if (this.isConnected && this.composer && this.composer.focusEditor) this.composer.focusEditor();
			}, 0);
		});
	}
	_handleAttachClick() {
		const maxBytes = (this.settingsStore?.getState()?.maxAttachmentMiB || 32) * 1024 * 1024;
		const currentBytes = (this.instance.attachments || []).reduce((sum, a) => sum + (a.size || 0), 0);
		handleAttachClick(this.instance.id, maxBytes, currentBytes, ...this._getUploadCallbacks());
	}
	_startUpload(files) {
		const maxBytes = (this.settingsStore?.getState()?.maxAttachmentMiB || 32) * 1024 * 1024;
		const currentBytes = (this.instance.attachments || []).reduce((sum, a) => sum + (a.size || 0), 0);
		uploadFiles(files, this.instance.id, maxBytes, currentBytes, ...this._getUploadCallbacks());
	}
	_getUploadCallbacks() {
		return [
			(tempId, file) => {
				const currentAttachments = this.composeStore.getComposer(this.instance.id)?.attachments || [];
				const newAttachment = {
					_tempId: tempId,
					filename: file.name,
					size: file.size,
					uploading: true,
					progress: 0
				};
				const attachments = [...currentAttachments, newAttachment];
				this.composeStore.updateComposer(this.instance.id, { attachments });
			},
			(tempId, progress) => {
				const attachments = [...this.composeStore.getComposer(this.instance.id)?.attachments || []];
				const idx = attachments.findIndex((a) => a._tempId === tempId);
				if (idx !== -1) {
					attachments[idx] = {
						...attachments[idx],
						progress
					};
					this.composeStore.updateComposer(this.instance.id, { attachments });
				}
			},
			(tempId, uuids) => {
				const attachments = [...this.composeStore.getComposer(this.instance.id)?.attachments || []];
				const idx = attachments.findIndex((a) => a._tempId === tempId);
				if (idx !== -1) {
					const newAtt = {
						...attachments[idx],
						uuid: uuids[0]
					};
					delete newAtt.uploading;
					delete newAtt.progress;
					delete newAtt._tempId;
					attachments[idx] = newAtt;
					this.composeStore.updateComposer(this.instance.id, { attachments });
					const latestComposer = this.composeStore.getComposer(this.instance.id);
					const stillUploading = (latestComposer?.attachments || []).some((a) => a.uploading);
					if (latestComposer?.closing && !stillUploading) this._saveDraft().then(() => {
						this.composeStore.closeComposer(this.instance.id);
					});
					else this._saveDraft();
				}
			},
			(tempId, err) => {
				Logger.error("Failed to upload attachment:", err);
				const attachments = [...this.composeStore.getComposer(this.instance.id)?.attachments || []];
				const idx = attachments.findIndex((a) => a._tempId === tempId);
				if (idx !== -1) {
					attachments.splice(idx, 1);
					this.composeStore.updateComposer(this.instance.id, { attachments });
				}
				const latestComposer = this.composeStore.getComposer(this.instance.id);
				const stillUploading = (latestComposer?.attachments || []).some((a) => a.uploading);
				if (latestComposer?.closing && !stillUploading) this._saveDraft().then(() => {
					this.composeStore.closeComposer(this.instance.id);
				});
				else if (!latestComposer?.closing) alert(this.i18nStore?.t("floatingComposer.uploadFailed", { error: err.message || this.i18nStore?.t("floatingComposer.unknownError") }));
			}
		];
	}
	_removeAttachment(index) {
		const attachments = [...this.instance.attachments || []];
		const removed = attachments.splice(index, 1)[0];
		if (removed?._tempId) abortUpload(removed._tempId);
		else if (removed?.uuid) deleteAttachment(removed.uuid);
		this.composeStore.updateComposer(this.instance.id, { attachments });
	}
	static {
		this.styles = i$1`
    :host {
      display: flex;
      flex-direction: column;
      position: fixed;
      transition: top 0.3s cubic-bezier(0.2, 0, 0, 1), left 0.3s cubic-bezier(0.2, 0, 0, 1), right 0.3s cubic-bezier(0.2, 0, 0, 1), bottom 0.3s cubic-bezier(0.2, 0, 0, 1), width 0.3s cubic-bezier(0.2, 0, 0, 1), height 0.3s cubic-bezier(0.2, 0, 0, 1);
    }

    ui-confirm, alps-popup {
      position: relative;
      z-index: 100;
    }
    
    .popup-form {
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      min-width: 240px;
      text-align: left;
    }
    .popup-form .field-group {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .popup-form label {
      font-size: 12px;
      font-weight: 500;
      color: var(--text-primary);
    }
    .popup-form input {
      width: 100%;
      box-sizing: border-box;
      padding: 6px 8px;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      font-family: inherit;
      font-size: 13px;
    }
    .popup-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      margin-top: 4px;
    }

    .window-frame {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      background: var(--bg-primary);
      border-radius: 8px 8px 0 0;      
      box-shadow: rgba(95, 95, 95, 0.15) 0 4px 12px 0px;
      border: 1px solid var(--border-color);
      overflow: hidden;
      position: relative;
      z-index: 1;
      transition: box-shadow 0.2s, border-color 0.2s;
    }

    .drag-overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(255, 255, 255, 0.85);
      z-index: 60;
      display: flex;
      padding: 16px;
      pointer-events: auto;
    }

    .drag-overlay * {
      pointer-events: none;
    }

    .drag-drop-zone {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 2px dashed var(--accent-color, #005A9E);
      border-radius: 8px;
      color: var(--accent-color, #005A9E);
      font-size: 16px;
      font-weight: 500;
      background: rgba(0, 90, 158, 0.05);
    }

    .drag-drop-zone svg {
      width: 48px;
      height: 48px;
      margin-bottom: 16px;
      fill: currentColor;
    }

    :host([expanded]) .window-frame,
    :host([minimized]) .window-frame {
      border-radius: 8px;
    }

    .sending-overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(255, 255, 255, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 50;
    }

    .spinner {
      display: inline-flex;
      width: 32px;
      height: 32px;
      animation: spin 1s linear infinite;
      color: var(--accent-color, #005A9E);
    }

    .spinner svg {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .backdrop {
      display: block;
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: var(--modal-backdrop, rgba(255, 255, 255, 0.8));
      z-index: 0;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    :host([expanded]) .backdrop {
      opacity: 1;
      pointer-events: auto;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 6px 6px 10px;
      background: var(--bg-secondary);
      border-bottom: 1px solid var(--border-color);
      color: var(--text-color);
      cursor: pointer;
      user-select: none;
    }

    .header-title {
      font-weight: 500;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
    }

    .header-actions {
      display: flex;
      gap: 4px;
    }

    .content {
      display: flex;
      flex-direction: column;
      flex: 1;
      background: var(--bg-primary);
      min-height: 0;
    }

    :host([minimized]) .content {
      display: none;
    }

    .field-row {
      display: flex;
      align-items: center;
      padding: 4px 16px;
      border-bottom: 1px solid var(--border-color);
    }

    .field-label {
      color: var(--text-muted);
      font-size: 14px;
      width: 40px;
    }

    .cc-bcc-toggles {
      display: flex;
      gap: 8px;
      color: var(--text-muted);
      font-size: 13px;
    }

    .cc-bcc-toggles span {
      cursor: pointer;
    }

    .cc-bcc-toggles span:hover {
      text-decoration: underline;
    }

    .field-input {
      flex: 1;
      border: none;
      outline: none;
      font-size: 14px;
      background: transparent;
      padding: 8px 0;
      color: var(--text-color);
    }

    .address-input {
      flex: 1;
    }

    .toolbar-actions {
      display: flex;
      gap: 4px;
    }

    .send-actions {
      display: flex;
      gap: 8px;
    }

    .remove-attachment-btn {
      padding: 0;
    }

    .send-row {
      padding: 8px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--bg-secondary);
      border-top: 1px solid var(--border-color);
    }

    .attachments-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 8px 16px 0;
    }

    .saving-indicator {
      font-size: 12px;
      color: var(--text-muted, #666);
      margin-right: 8px;
      align-self: center;
    }

    .composer-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-height: 0;
    }

    @media (max-width: 768px) {
      .window-frame {
        border-radius: 0;
      }
      .content {
        display: flex !important;
      }
      .header-actions alps-icon-btn[title="Minimize"],
      .header-actions alps-icon-btn[title="Expand"] {
        display: none;
      }
    }
  `;
	}
	render() {
		if (this.instance.closing) return b`<style>:host { display: none !important; }</style>`;
		const canSend = ((this.instance.to?.length || 0) > 0 || (this.instance.cc?.length || 0) > 0 || (this.instance.bcc?.length || 0) > 0) && (this.instance.text?.trim().length || 0) > 0;
		const minimizeWidth = 260;
		const gap = 16;
		const composerWidth = 470;
		let rightOffset;
		let bottomOffset;
		if (this.instance.minimized) {
			rightOffset = 24;
			bottomOffset = 24 + this.minimizedIndex * 40;
		} else {
			const reservedSpace = this.totalMinimized > 0 ? minimizeWidth + gap : 0;
			rightOffset = 24 + reservedSpace + this.openIndex * (composerWidth + gap);
			bottomOffset = 0;
			if (24 + reservedSpace + this.totalOpen * composerWidth > this.windowWidth && this.totalOpen > 1) {
				const availableWidth = this.windowWidth - composerWidth - 48 - reservedSpace;
				const overlapGap = availableWidth > 0 ? availableWidth / (this.totalOpen - 1) : 32;
				rightOffset = 24 + reservedSpace + this.openIndex * Math.min(overlapGap, composerWidth);
			}
		}
		let topPx, leftPx, widthPx, heightPx;
		const isMobile = this.windowWidth <= 768;
		if (this.showDiscardConfirm) {
			this.style.zIndex = "30000";
			if (isMobile) {
				widthPx = this.windowWidth;
				heightPx = this.windowHeight;
				leftPx = 0;
				topPx = 0;
				this.removeAttribute("expanded");
			} else if (this.instance.expanded) {
				widthPx = Math.min(this.windowWidth * .85, 800);
				heightPx = this.windowHeight * .8;
				leftPx = (this.windowWidth - widthPx) / 2;
				topPx = (this.windowHeight - heightPx) / 2;
				this.setAttribute("expanded", "");
			} else {
				widthPx = this.instance.minimized ? minimizeWidth : composerWidth;
				heightPx = this.instance.minimized ? 40 : 500;
				leftPx = this.windowWidth - rightOffset - widthPx;
				topPx = this.windowHeight - bottomOffset - heightPx;
				this.removeAttribute("expanded");
			}
		} else if (isMobile) {
			widthPx = this.windowWidth;
			heightPx = this.windowHeight;
			leftPx = 0;
			topPx = 0;
			this.style.zIndex = "30000";
			this.removeAttribute("expanded");
		} else if (this.instance.expanded) {
			widthPx = Math.min(this.windowWidth * .85, 800);
			heightPx = this.windowHeight * .8;
			leftPx = (this.windowWidth - widthPx) / 2;
			topPx = (this.windowHeight - heightPx) / 2;
			this.style.zIndex = "30000";
			this.setAttribute("expanded", "");
		} else {
			widthPx = this.instance.minimized ? minimizeWidth : composerWidth;
			heightPx = this.instance.minimized ? 40 : 500;
			leftPx = this.windowWidth - rightOffset - widthPx;
			topPx = this.windowHeight - bottomOffset - heightPx;
			this.style.zIndex = `${this.instance.zIndex || 1e3}`;
			this.removeAttribute("expanded");
		}
		if (isMobile) {
			this.style.width = "100%";
			this.style.height = "100dvh";
			this.style.left = "0";
			this.style.top = "0";
		} else {
			this.style.width = `${widthPx}px`;
			this.style.height = `${heightPx}px`;
			this.style.left = `${leftPx}px`;
			this.style.top = `${topPx}px`;
		}
		if (this.instance.minimized) this.setAttribute("minimized", "");
		else this.removeAttribute("minimized");
		return b`
      ${this.instance.expanded ? b`<div class="backdrop"></div>` : ""}
      
      ${this.showDiscardConfirm ? b`
        <ui-confirm
          title=${this.i18nStore?.t("floatingComposer.discardDraftTitle")}
          message=${this.i18nStore?.t("floatingComposer.discardDraftMessage")}
          confirmText=${this.i18nStore?.t("floatingComposer.discard")}
          cancelText=${this.i18nStore?.t("general.cancel")}
          .isDanger=${true}
          @confirm=${this._confirmDiscard}
          @cancel=${this._cancelDiscard}
        ></ui-confirm>
      ` : ""}

      <div class="window-frame ${this.isDragOver ? "drag-over" : ""}" 
           @mousedown=${this._bringToFront}
           @dragover=${this._handleDragOver}
           @drop=${this._handleDrop}>
        
        ${this.isDragOver && !this.instance.isSending ? b`
          <div class="drag-overlay" @dragleave=${this._handleDragLeave}>
            <div class="drag-drop-zone">
              <svg viewBox="0 0 256 256">
                <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216ZM128,112a8,8,0,0,0-8,8v44.69l-22.34-22.35a8,8,0,0,0-11.32,11.32l36,36a8,8,0,0,0,11.32,0l36-36a8,8,0,0,0-11.32-11.32L136,164.69V120A8,8,0,0,0,128,112Z"></path>
              </svg>
              <span>${this.i18nStore?.t("floatingComposer.dropFiles")}</span>
            </div>
          </div>
        ` : ""}

        ${this.instance.isSending ? b`
          <div class="sending-overlay">
            <alps-loader></alps-loader>
          </div>
        ` : ""}
        
        <div class="header" @click=${this._handleHeaderClick}>
          <div class="header-title">${this.instance.subject || this.i18nStore?.t("floatingComposer.newMessage")}</div>
          <div class="header-actions">
            ${this.isSaving ? b`<span class="saving-indicator">${this.i18nStore?.t("floatingComposer.saving")}</span>` : this.instance.draftUid && !this.instance.dirty ? b`<span class="saving-indicator">${this.i18nStore?.t("floatingComposer.autosaved")}</span>` : ""}
            <alps-icon-btn 
              title="${this.instance.minimized ? this.i18nStore?.t("floatingComposer.restore") : this.i18nStore?.t("floatingComposer.minimize")}" 
              icon="${this.instance.minimized ? "caretUp" : "composerMinimize"}"
              @click=${(e) => {
			e.stopPropagation();
			this._toggleMinimize();
		}}>
            </alps-icon-btn>
            <alps-icon-btn 
              title="${this.instance.expanded ? this.i18nStore?.t("floatingComposer.restore") : this.i18nStore?.t("floatingComposer.expand")}" 
              icon="${this.instance.expanded ? "arrowsInSimple" : "arrowsOutSimple"}"
              @click=${(e) => {
			e.stopPropagation();
			this._toggleExpand();
		}}>
            </alps-icon-btn>
            <alps-icon-btn 
              title="${this.i18nStore?.t("floatingComposer.saveAndClose")}" 
              icon="x"
              @click=${(e) => {
			e.stopPropagation();
			this._handleCloseClick();
		}}>
            </alps-icon-btn>
          </div>
        </div>

        <div class="content">
          <div class="field-row">
            <span class="field-label">${this.i18nStore?.t("floatingComposer.to")}</span>
            <alps-address-input 
              class="address-input"
              .addresses=${this.instance.to || []}
              @addresses-changed=${(e) => this.composeStore.updateComposer(this.instance.id, { to: e.detail.addresses })}
              ?disabled=${this.instance.isSending}
            ></alps-address-input>
            ${!this.showCc || !this.showBcc ? b`
              <div class="cc-bcc-toggles">
                ${!this.showCc ? b`<span @click=${() => this.showCc = true}>${this.i18nStore?.t("floatingComposer.cc")}</span>` : ""}
                ${!this.showBcc ? b`<span @click=${() => this.showBcc = true}>${this.i18nStore?.t("floatingComposer.bcc")}</span>` : ""}
              </div>
            ` : ""}
          </div>

          ${this.showCc ? b`
            <div class="field-row">
              <span class="field-label">${this.i18nStore?.t("floatingComposer.cc")}</span>
              <alps-address-input 
                class="address-input"
                .addresses=${this.instance.cc || []}
                @addresses-changed=${(e) => this.composeStore.updateComposer(this.instance.id, { cc: e.detail.addresses })}
                ?disabled=${this.instance.isSending}
              ></alps-address-input>
            </div>
          ` : ""}

          ${this.showBcc ? b`
            <div class="field-row">
              <span class="field-label">${this.i18nStore?.t("floatingComposer.bcc")}</span>
              <alps-address-input 
                class="address-input"
                .addresses=${this.instance.bcc || []}
                @addresses-changed=${(e) => this.composeStore.updateComposer(this.instance.id, { bcc: e.detail.addresses })}
                ?disabled=${this.instance.isSending}
              ></alps-address-input>
            </div>
          ` : ""}

          <div class="field-row">
            <input 
              class="field-input" 
              placeholder=${this.i18nStore?.t("floatingComposer.subject")} 
              .value=${this.instance.subject || ""}
              @input=${(e) => this.composeStore.updateComposer(this.instance.id, { subject: e.target.value })}
              ?disabled=${this.instance.isSending}
            />
          </div>

          <div class="composer-wrapper">
            <alps-message-composer
              .isSending=${this.instance.isSending}
              .text=${this.instance.text || ""}
              .htmlText=${this.instance.html || ""}
              .format=${this.instance.format || "html"}
              @text-changed=${(e) => this.composeStore.updateComposer(this.instance.id, {
			text: e.detail.text,
			html: e.detail.html
		})}
            ></alps-message-composer>
          </div>

          <alps-attachment-list
            .attachments=${this.instance.attachments || []}
            .removable=${true}
            .composerMode=${true}
            @remove-attachment=${(e) => {
			const idx = (this.instance.attachments || []).indexOf(e.detail.attachment);
			if (idx !== -1) this._removeAttachment(idx);
		}}
          ></alps-attachment-list>

          <div class="send-row">
            <div class="toolbar-actions">
              <alps-icon-btn 
                ?active=${(this.instance.format || "html") === "html"} 
                title=${this.i18nStore?.t("floatingComposer.toggleFormatting")} 
                icon="textAa"
                @click=${this._toggleFormat}>
              </alps-icon-btn>
              <alps-icon-btn 
                title=${this.i18nStore?.t("floatingComposer.attachFiles")} 
                icon="paperclip"
                @click=${this._handleAttachClick}>
              </alps-icon-btn>
              ${(this.instance.format || "html") === "html" ? b`
                <alps-popup id="linkPopup" align="left" position="top">
                  <alps-icon-btn slot="trigger" title=${this.i18nStore?.t("floatingComposer.insertLink")} icon="linkSimple" @mousedown=${(e) => e.preventDefault()} @click=${this._handleLinkClick}></alps-icon-btn>
                  <div class="popup-form" @keydown=${(e) => {
			if (e.key === "Enter") this._handleLinkSubmit();
		}}>
                    ${this.linkPromptFields.map((f) => b`
                      <div class="field-group">
                        <label for=${f.id}>${f.label}</label>
                        <alps-input inputId=${f.id} type="text" placeholder=${f.placeholder}></alps-input>
                      </div>
                    `)}
                    <div class="popup-actions">
                      <alps-button variant="text" @click=${() => (this.shadowRoot?.querySelector("#linkPopup"))?.close()}>${this.i18nStore?.t("general.cancel")}</alps-button>
                      <alps-button variant="normal" @click=${this._handleLinkSubmit}>${this.i18nStore?.t("floatingComposer.apply")}</alps-button>
                    </div>
                  </div>
                </alps-popup>
              ` : ""}
              
              ${registry.invokeHook("composer:toolbar", {
			composer: this,
			instance: this.instance
		})?.filter(Boolean)}
              
              <alps-emoji-selector-popup position="top" @emoji-selected=${(e) => this.composer?.insertEmoji(e.detail.emoji)}>
                <alps-icon-btn slot="trigger" title=${this.i18nStore?.t("floatingComposer.insertEmoji")} icon="smiley"></alps-icon-btn>
              </alps-emoji-selector-popup>
            </div>
            <div class="send-actions">
              <alps-button variant="text" @click=${(e) => {
			e.stopPropagation();
			this._handleDiscardClick();
		}}>
                ${this.i18nStore?.t("floatingComposer.discard")}
              </alps-button>
              <alps-button variant="primary" @click=${this._handleSend} ?disabled=${this.instance.isSending || !canSend}>
                ${this.i18nStore?.t("floatingComposer.send")}
              </alps-button>
            </div>
          </div>
        </div>
      </div>
    `;
	}
};
__decorate([c({ context: composeContext })], AlpsFloatingComposer.prototype, "composeStore", void 0);
__decorate([c({ context: i18nContext })], AlpsFloatingComposer.prototype, "i18nStore", void 0);
__decorate([c({ context: settingsContext })], AlpsFloatingComposer.prototype, "settingsStore", void 0);
__decorate([n$1({ type: Object })], AlpsFloatingComposer.prototype, "instance", void 0);
__decorate([n$1({ type: Number })], AlpsFloatingComposer.prototype, "index", void 0);
__decorate([n$1({ type: Number })], AlpsFloatingComposer.prototype, "totalOpen", void 0);
__decorate([n$1({ type: Number })], AlpsFloatingComposer.prototype, "totalMinimized", void 0);
__decorate([n$1({ type: Number })], AlpsFloatingComposer.prototype, "openIndex", void 0);
__decorate([n$1({ type: Number })], AlpsFloatingComposer.prototype, "minimizedIndex", void 0);
__decorate([r()], AlpsFloatingComposer.prototype, "showCc", void 0);
__decorate([r()], AlpsFloatingComposer.prototype, "showBcc", void 0);
__decorate([r()], AlpsFloatingComposer.prototype, "showDiscardConfirm", void 0);
__decorate([r()], AlpsFloatingComposer.prototype, "pendingDiscardType", void 0);
__decorate([r()], AlpsFloatingComposer.prototype, "windowWidth", void 0);
__decorate([r()], AlpsFloatingComposer.prototype, "windowHeight", void 0);
__decorate([r()], AlpsFloatingComposer.prototype, "isSaving", void 0);
__decorate([r()], AlpsFloatingComposer.prototype, "isDragOver", void 0);
__decorate([r()], AlpsFloatingComposer.prototype, "linkPromptFields", void 0);
AlpsFloatingComposer = __decorate([t("alps-floating-composer")], AlpsFloatingComposer);
//#endregion
//#region src/components/toast-notification.ts
var AlpsToast = class AlpsToast extends i {
	constructor(..._args) {
		super(..._args);
		this.show = false;
		this.message = "";
		this.actionLabel = "";
		this.timeout = 0;
		this._timer = null;
	}
	updated(changedProperties) {
		if (changedProperties.has("show")) {
			if (this.show && this.timeout > 0) {
				if (this._timer) clearTimeout(this._timer);
				this._timer = setTimeout(() => {
					this.dismiss();
				}, this.timeout);
			} else if (!this.show && this._timer) {
				clearTimeout(this._timer);
				this._timer = null;
			}
		}
	}
	dismiss() {
		if (this.onDismiss) this.onDismiss();
		this.close();
	}
	close() {
		this.show = false;
		this.dispatchEvent(new CustomEvent("dismiss"));
		this.onAction = void 0;
		this.onDismiss = void 0;
	}
	handleAction() {
		if (this.onAction) this.onAction();
		else this.dispatchEvent(new CustomEvent("action"));
		this.close();
	}
	static {
		this.styles = i$1`
    :host {
      display: block;
      transform: translateY(20px);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    :host([show]) {
      transform: translateY(0);
      opacity: 1;
      pointer-events: auto;
    }

    .toast-container {
      background: var(--toast-bg, rgba(0, 0, 0, 0.85));
      color: var(--toast-fg, #fff);
      border: 1px solid var(--toast-border, rgba(255, 255, 255, 0.1));
      border-radius: 6px;
      padding: 0 4px 0 16px;
      height: 36px;
      box-sizing: border-box;
      font-size: 13px;
      font-weight: 500;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      display: flex;
      align-items: center;
      gap: 8px;
      white-space: nowrap;
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
    }

    /* Action button is now an alps-button and styled via custom properties inline */
  `;
	}
	render() {
		return b`
      <div class="toast-container">
        <span>${this.message}</span>
        ${this.actionLabel ? b`
          <alps-button 
            variant="normal" 
            @click=${this.handleAction}
            style="--text-primary: var(--toast-fg, #fff); --border-color: currentColor; --bg-tertiary: rgba(255, 255, 255, 0.15); --btn-padding: 4px 10px; --btn-font-size: 12px;"
          >
            ${this.actionLabel}
          </alps-button>
        ` : ""}
        <alps-icon-btn 
          class="dismiss-btn" 
          icon="x" 
          aria-label="${this.i18nStore?.t("toast.dismiss")}" 
          @click=${this.dismiss}
          style="--btn-color: var(--toast-fg, rgba(255, 255, 255, 0.7)); --btn-hover-bg: rgba(255, 255, 255, 0.15); --text-primary: var(--toast-fg, #fff); --btn-icon-size: 16px;"
        ></alps-icon-btn>
      </div>
    `;
	}
};
__decorate([c({ context: i18nContext })], AlpsToast.prototype, "i18nStore", void 0);
__decorate([n$1({
	type: Boolean,
	reflect: true
})], AlpsToast.prototype, "show", void 0);
__decorate([n$1({ type: String })], AlpsToast.prototype, "message", void 0);
__decorate([n$1({ type: String })], AlpsToast.prototype, "actionLabel", void 0);
__decorate([n$1({ type: Object })], AlpsToast.prototype, "onAction", void 0);
__decorate([n$1({ type: Object })], AlpsToast.prototype, "onDismiss", void 0);
__decorate([n$1({ type: Number })], AlpsToast.prototype, "timeout", void 0);
AlpsToast = __decorate([t("alps-toast")], AlpsToast);
//#endregion
//#region src/services/auto-logout.ts
var AutoLogoutService = class {
	constructor() {
		this.events = [
			"mousedown",
			"mousemove",
			"keypress",
			"scroll",
			"touchstart"
		];
		this.logoutMinutes = 0;
		this.lastActivity = Date.now();
		this.lastPing = Date.now();
		this.checkInterval = null;
		this.handleActivity = () => {
			this.lastActivity = Date.now();
		};
	}
	setLogoutTime(minutes) {
		const wasActive = this.logoutMinutes > 0;
		this.logoutMinutes = minutes;
		const isActive = this.logoutMinutes > 0;
		if (isActive && !wasActive) {
			this.attachEvents();
			this.startInterval();
		} else if (!isActive && wasActive) {
			this.detachEvents();
			this.clearInterval();
		} else if (isActive && wasActive) this.lastActivity = Date.now();
	}
	attachEvents() {
		this.events.forEach((event) => document.addEventListener(event, this.handleActivity, { passive: true }));
		this.lastActivity = Date.now();
	}
	detachEvents() {
		this.events.forEach((event) => document.removeEventListener(event, this.handleActivity));
	}
	startInterval() {
		this.clearInterval();
		this.checkInterval = setInterval(() => this.checkTimeout(), 3e4);
	}
	clearInterval() {
		if (this.checkInterval) {
			clearInterval(this.checkInterval);
			this.checkInterval = null;
		}
	}
	checkTimeout() {
		if (this.logoutMinutes <= 0) return;
		if (window.location.hash === "#/login" || window.location.hash === "") {
			this.lastActivity = Date.now();
			return;
		}
		const msSinceActive = Date.now() - this.lastActivity;
		if (msSinceActive >= this.logoutMinutes * 60 * 1e3) this.logout();
		else if (msSinceActive < 300 * 1e3 && Date.now() - this.lastPing > 300 * 1e3) this.pingBackend();
	}
	async pingBackend() {
		this.lastPing = Date.now();
		try {
			await fetch("/session");
		} catch (err) {}
	}
	async logout() {
		this.clearInterval();
		this.detachEvents();
		if (this.onBeforeLogout) try {
			await this.onBeforeLogout();
		} catch (err) {
			Logger.error("Failed to run onBeforeLogout hook", err);
		}
		try {
			await fetch("/session", { method: "DELETE" });
			MessageCache.clear();
			clearSessionSettings();
			window.dispatchEvent(new CustomEvent("session-cleared"));
			setLoginNotice("inactivitySignedOut");
			window.location.hash = "#/login";
			this.lastActivity = Date.now();
			this.setLogoutTime(this.logoutMinutes);
		} catch (err) {
			Logger.error("Failed to auto sign out", err);
		}
	}
};
var autoLogoutService = new AutoLogoutService();
//#endregion
//#region src/components/app-root.ts
var DEFAULT_TOAST_TIMEOUT_MS = 3e3;
var AppRoot = class AppRoot extends i {
	constructor(..._args) {
		super(..._args);
		this.composeStore = new ComposeStore();
		this.settingsStore = new SettingsStore();
		this.i18nStore = new I18nStore();
		this.linkedAccountsStore = linkedAccountsStore;
		this.activeComposers = [];
		this.toasts = [];
		this.toastIdCounter = 0;
		this.isOffline = !navigator.onLine;
		this.offlineCountdown = 0;
		this.offlineInterval = null;
		this._handlePluginsUpdated = () => {
			this.requestUpdate();
		};
		this._handleGlobalDragOver = (e) => {
			e.preventDefault();
		};
		this._handleGlobalDrop = (e) => {
			e.preventDefault();
			window.dispatchEvent(new CustomEvent("alps-composer-drop"));
		};
		this._handleAuthError = () => {
			sessionStorage.clear();
			clearSessionSettings();
			window.dispatchEvent(new CustomEvent("session-cleared"));
			setLoginNotice("sessionExpired");
			window.location.hash = "#/login";
		};
		this._verifyConnectivity = async () => {
			if (!navigator.onLine) return false;
			try {
				const res = await fetch("/site.webmanifest", {
					method: "HEAD",
					cache: "no-store"
				});
				if (res.status === 502 || res.status === 503 || res.status === 504) return false;
				return true;
			} catch (e) {
				return false;
			}
		};
		this._handleOnlineEvent = async () => {
			if (await this._verifyConnectivity()) {
				this.isOffline = false;
				this._stopOfflineCountdown();
			} else this._handleOfflineEvent();
		};
		this._verifyingNetworkError = false;
		this._handleNetworkError = async () => {
			if (this.isOffline || this._verifyingNetworkError) return;
			this._verifyingNetworkError = true;
			try {
				if (!await this._verifyConnectivity()) this._handleOfflineEvent();
			} finally {
				this._verifyingNetworkError = false;
			}
		};
		this._handleOfflineEvent = () => {
			if (!this.isOffline) {
				this.isOffline = true;
				this.offlineCountdown = 10;
				this._startOfflineCountdown();
			}
		};
		this._isPinging = false;
		this._handleShowToast = (e) => {
			const id = ++this.toastIdCounter;
			const newToast = {
				id,
				message: e.detail.message,
				actionLabel: e.detail.actionLabel || "",
				actionFn: e.detail.actionFn,
				dismissFn: e.detail.dismissFn,
				timeout: e.detail.duration || DEFAULT_TOAST_TIMEOUT_MS,
				show: false
			};
			this.toasts = [...this.toasts, newToast];
			requestAnimationFrame(() => {
				this.toasts = this.toasts.map((t) => t.id === id ? {
					...t,
					show: true
				} : t);
			});
		};
		this._handleBeforeUnload = (e) => {
			if (this.activeComposers.some((c) => c.isSending)) {
				e.preventDefault();
				return "You have a message currently sending. Are you sure you want to leave?";
			}
		};
		this._handleComposeChange = () => {
			this.activeComposers = this.composeStore.getState().activeComposers;
		};
		this._handleSettingsChange = () => {
			const settings = this.settingsStore.getState();
			autoLogoutService.setLogoutTime(settings.autoLogout ?? 0);
			this.i18nStore.setLanguage(settings.language ?? "en");
		};
		this.mailboxPageTemplate = b`<mailbox-page></mailbox-page>`;
		this.router = new Router(this.getRoutes(), () => b`<div>404 Not Found</div>`, () => this.requestUpdate());
	}
	static {
		this.styles = i$1`
    :host {
      display: block;
      height: 100vh;
      height: 100dvh;
      width: 100vw;
    }

    .toast-stack {
      position: fixed;
      bottom: 24px;
      left: 24px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 8px;
      z-index: 50000;
      pointer-events: none;
    }
  `;
	}
	connectedCallback() {
		super.connectedCallback();
		const isLoggedIn = document.cookie.split(";").some((c) => c.trim().startsWith("alps_logged_in=1")) || document.cookie.split(";").some((c) => c.trim().startsWith("alps_has_login_token=1"));
		if (!isLoggedIn && !window.location.hash.startsWith("#/login")) window.location.hash = "#/login";
		this.composeStore.addEventListener("change", this._handleComposeChange);
		this.settingsStore.addEventListener("change", this._handleSettingsChange);
		this.activeComposers = this.composeStore.getState().activeComposers;
		const autoLogoutTime = this.settingsStore.getState().autoLogout ?? 0;
		autoLogoutService.setLogoutTime(autoLogoutTime);
		autoLogoutService.onBeforeLogout = async () => {
			await this.composeStore.saveAllDirtyDrafts();
		};
		const initialLang = this.settingsStore.getState().language ?? "en";
		this.i18nStore.setLanguage(initialLang);
		window.addEventListener("auth-error", this._handleAuthError);
		window.addEventListener("show-toast", this._handleShowToast);
		window.addEventListener("beforeunload", this._handleBeforeUnload);
		window.addEventListener("online", this._handleOnlineEvent);
		window.addEventListener("offline", this._handleOfflineEvent);
		window.addEventListener("network-error", this._handleNetworkError);
		window.addEventListener("dragover", this._handleGlobalDragOver);
		window.addEventListener("drop", this._handleGlobalDrop);
		window.addEventListener("plugins-updated", this._handlePluginsUpdated);
		if (this.isOffline) this._handleOfflineEvent();
		if (isLoggedIn) this._fetchSessionData();
	}
	async _fetchSessionData() {
		try {
			const response = await fetch("/session");
			if (response.ok) {
				const data = await response.json();
				if (data.EnabledPlugins) registry.setEnabledPlugins(data.EnabledPlugins);
			}
		} catch (e) {
			console.error("Failed to fetch session data", e);
		}
	}
	disconnectedCallback() {
		super.disconnectedCallback();
		this.composeStore.removeEventListener("change", this._handleComposeChange);
		this.settingsStore.removeEventListener("change", this._handleSettingsChange);
		window.removeEventListener("auth-error", this._handleAuthError);
		window.removeEventListener("show-toast", this._handleShowToast);
		window.removeEventListener("beforeunload", this._handleBeforeUnload);
		window.removeEventListener("online", this._handleOnlineEvent);
		window.removeEventListener("offline", this._handleOfflineEvent);
		window.removeEventListener("network-error", this._handleNetworkError);
		window.removeEventListener("dragover", this._handleGlobalDragOver);
		window.removeEventListener("drop", this._handleGlobalDrop);
		window.removeEventListener("plugins-updated", this._handlePluginsUpdated);
		this._stopOfflineCountdown();
	}
	_startOfflineCountdown() {
		this._stopOfflineCountdown();
		this.offlineInterval = window.setInterval(async () => {
			if (this.offlineCountdown > 1) this.offlineCountdown--;
			else {
				this.offlineCountdown = 10;
				if (this._isPinging) return;
				this._isPinging = true;
				try {
					if (await this._verifyConnectivity()) {
						this.isOffline = false;
						this._stopOfflineCountdown();
					}
				} finally {
					this._isPinging = false;
				}
			}
		}, 1e3);
	}
	_stopOfflineCountdown() {
		if (this.offlineInterval !== null) {
			clearInterval(this.offlineInterval);
			this.offlineInterval = null;
		}
	}
	_handleDismissToast(id) {
		this.toasts = this.toasts.map((t) => t.id === id ? {
			...t,
			show: false
		} : t);
		setTimeout(() => {
			this.toasts = this.toasts.filter((t) => t.id !== id);
		}, 300);
	}
	getRoutes() {
		const baseRoutes = {
			"/": () => this.mailboxPageTemplate,
			"/login": () => b`<login-page></login-page>`,
			"/mailbox/*": () => this.mailboxPageTemplate,
			"/settings": () => b`<settings-page category="general"></settings-page>`,
			"/settings/*": () => {
				const match = window.location.hash.match(/^#\/settings\/?(.*)$/);
				return b`<settings-page .category=${match && match[1] ? match[1].split("?")[0] : "general"}></settings-page>`;
			},
			"/original": () => b`<original-message-page></original-message-page>`,
			"/print": () => b`<print-page></print-page>`,
			"/login/webauthn": () => b`<login-webauthn-page></login-webauthn-page>`
		};
		registry.getRoutes().forEach((route) => {
			let cachedEl = null;
			baseRoutes[route.path] = () => {
				if (!cachedEl) cachedEl = document.createElement(route.component);
				return cachedEl;
			};
		});
		return baseRoutes;
	}
	render() {
		const totalOpen = this.activeComposers.filter((c) => !c.minimized).length;
		const totalMinimized = this.activeComposers.filter((c) => c.minimized).length;
		let openIndex = 0;
		let minimizedIndex = 0;
		return b`
      ${this.router.render()}
      
      ${this.activeComposers.map((composer, index) => {
			const isMinimized = composer.minimized;
			return b`
          <alps-floating-composer
            .instance=${composer}
            .index=${index}
            .totalOpen=${totalOpen}
            .totalMinimized=${totalMinimized}
            .openIndex=${isMinimized ? 0 : openIndex++}
            .minimizedIndex=${isMinimized ? minimizedIndex++ : 0}
          ></alps-floating-composer>
        `;
		})}
      
      <div class="toast-stack">
        ${this.toasts.map((toast) => b`
          <alps-toast
            .show=${toast.show}
            .message=${toast.message}
            .actionLabel=${toast.actionLabel}
            .onAction=${toast.actionFn}
            .onDismiss=${toast.dismissFn}
            .timeout=${toast.timeout}
            @dismiss=${() => this._handleDismissToast(toast.id)}
          ></alps-toast>
        `)}
      </div>

      ${this.isOffline ? b`
        <ui-modal title=${this.i18nStore.t("offline.title")} .dismissible=${false} width="400px">
          <div style="text-align: center; padding: 16px 0;">
            <svg style="width: 48px; height: 48px; color: var(--text-muted, #9ca3af); margin-bottom: 16px; fill: currentColor;">
              <use href="/assets/icons/sprite.svg?v=7#wifiSlash"></use>
            </svg>
            <div style="font-weight: 500; font-size: 16px; margin-bottom: 8px; color: var(--text-primary, #111827);">
              ${this.i18nStore.t("offline.description")}
            </div>
            <div style="color: var(--text-secondary, #4b5563); font-size: 14px;">
              ${this.i18nStore.t("offline.tryingAgain").replace("{seconds}", this.offlineCountdown.toString())}
            </div>
          </div>
        </ui-modal>
      ` : ""}
    `;
	}
};
__decorate([e$2({ context: composeContext })], AppRoot.prototype, "composeStore", void 0);
__decorate([e$2({ context: settingsContext })], AppRoot.prototype, "settingsStore", void 0);
__decorate([e$2({ context: i18nContext })], AppRoot.prototype, "i18nStore", void 0);
__decorate([e$2({ context: linkedAccountsContext })], AppRoot.prototype, "linkedAccountsStore", void 0);
__decorate([r()], AppRoot.prototype, "activeComposers", void 0);
__decorate([r()], AppRoot.prototype, "toasts", void 0);
__decorate([r()], AppRoot.prototype, "isOffline", void 0);
__decorate([r()], AppRoot.prototype, "offlineCountdown", void 0);
AppRoot = __decorate([t("app-root")], AppRoot);
//#endregion
//#region src/main.ts
var plugins = /* @__PURE__ */ Object.assign({
	"../../plugins/caldav/frontend/index.ts": frontend_exports$4,
	"../../plugins/carddav/frontend/index.ts": frontend_exports$3,
	"../../plugins/gpg/frontend/index.ts": frontend_exports$2,
	"../../plugins/managesieve/frontend/index.ts": frontend_exports$1,
	"../../plugins/password/frontend/index.ts": frontend_exports
});
Logger.info(`Loaded ${Object.keys(plugins).length} frontend plugins.`);
//#endregion
