# Testing Firefox Desktop

<!-- toc -->

## Which build should I test?

As a localizer you will work against Nightly, which means you should be testing a localized build of Firefox Nightly provided directly by Mozilla.

You can download the build from the [pre-release download page](https://www.mozilla.org/firefox/channel/#nightly), the [download page](https://www.mozilla.org/firefox/nightly/all/) for all systems and locales, or directly [via FTP](http://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central-l10n/) (search for your locale code and operative system).

Why Nightly? Because it’s updated twice every day, which means that you can fix an error and verify if the correction was effective within a few hours. It’s definitely a good approach to use this version as your main browser.

At the same time, you, or someone in your team, should be testing also Beta and Release, to make sure updates don’t introduce issues.

### Building a localized version of Firefox

If you’re interested in building a localized version of Firefox from source code, please follow the [official instructions](https://firefox-source-docs.mozilla.org/build/buildsystem/locales.html) available in Mozilla Source Tree Docs. Note that you will need to set up the [build environment](https://firefox-source-docs.mozilla.org/setup/index.html) on your system.

## How to test

Here are some tips on how to test Firefox once installed in your computer.

### Create a new profile

From time to time [create a new profile](https://support.mozilla.org/kb/profile-manager-create-and-remove-firefox-profiles):
* To test that the **default searchplugins are still relevant and work as expected**.
* To check messages and pages displayed on first run.
* To test dialogs and preferences at the default size.

### Search for untranslated strings

* Open all the items available in the main menu and check that they’re properly localized. If you opted to keep Developer Tools in English, the language should be consistent across all the developer tools.
* Check the “hamburger” menu, making sure to inspect subpanels for items displaying the `>` symbol.
* Open Preferences/Options and navigate through all panels, try to open all dialogs like `Exceptions…`. Make also sure to select the `Custom settings` option for History in the Privacy panel.
* Log in with you Firefox Account and make sure that all preferences and dialogs are properly localized.
* Check for untranslated strings and errors in the *Library* (Bookmarks->View all bookmarks…).
* Open a new *Private Window* and check the content of the page.
* Type `about:support` in the address bar, press Enter, and check for errors or missing translations.
* Check the error pages for [malware](http://www.itisatrap.org/firefox/its-an-attack.html), [unwanted software](http://www.itisatrap.org/firefox/unwanted.html), [deceptive website](http://www.itisatrap.org/firefox/its-a-trap.html), [harmful website](http://www.itisatrap.org/firefox/harmful.html). All strings are also visible in `about:blocked`.
* Check permissions dialogs on [this test website](http://permission.site/).
* Visit secure and unsecure websites, and check the panel displayed when clicking the lock icon.
* Check the Protections panel displayed when clicking the shield icon in the address bar, and the `about:protections` page for the *Protections Report*.
* Right click on a page and verify all panels in the `View Page Info` dialog.
* Enable login saving in *Logins & Passwords*, make sure that `about:logins` is correctly localized and works as expected.

### Test the New Tab page and Contextual Feature Recommendations

First of all, make sure that everything is correctly translated in `about:newtab`. That’s the default page displayed when opening a new tab in Firefox.

In order to test other features available for New Tab, it’s necessary to enable a *devtools* option: open `about:config`, search for `browser.newtabpage.activity-stream.asrouter.devtoolsEnabled` and set it to `true`. After that, in the top right corner of the New Tab page a small wrench icon will be displayed.

For example, the *AS Router Admin* page can be used to test contextual feature recommendations (CFR):
* In the *Messages* section, select to show message for *cfr*.
* Click the *Show* button in one of the available options.

The suggestions is displayed at the end of the address bar (first as a bulb icon, then as a “suggestion” tag). Clicking the blue tag will display a doorhanger.

### Test webextension permissions dialog

Create a new profile and open `about:config` in your browser:
* Right click on the list of available keys and create a new boolean key `extensions.webextPermissionPrompts` set to `true`.
* Search for the key `xpinstall.signatures.required` and set it to `false`. This will allow installing unsigned add-ons.
* Open [this link](https://github.com/mozilla-l10n/localizer-documentation/blob/main/src/products/firefox_desktop/files/webext_permissions.zip), select **Download** and save the file on your computer.
* Extract the archive.
* Drag each (one by one) of the .xpi files on your browser’s window to display the dialog (you don’t need to actually install it).

### Test accesskeys and shortcuts

You can test accesskeys only on Windows and Linux, since they’re not available in OS X.

If your locale uses a non Latin alphabet and opted to keep the English accesskeys, you don’t have anything to check. If you’re localizing accesskeys, you should check that:
* Accesskeys use letters available in the associated label, and are not displayed between parenthesis at the end of the label itself.
* There are no conflicts, which means there are no items in the same menu or preference panel using the same letter. Starting from Firefox 56, it’s not possible to avoid conflicts in preferences: the guideline in that case is to reduce to a minimum the number of times the same letter is used within a panel.

For shortcuts, you should test at least the [most common ones](https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly). You should never change a shortcut, unless that combination of keys is not available in the keyboard layout commonly used for your locale. For example, in the Italian keyboard the character `[` is available pressing `Alt` and `è`. A shortcut based on `Shift + [` would never work, because it would be read as `Alt + Shift + è`.

Transvision has a QA view to check both [accesskeys](https://transvision.mozfr.org/accesskeys/) and [keyboard shortcuts](https://transvision.mozfr.org/commandkeys/) for each locale.

### Test certificate error pages

There are several certificate error pages in Firefox, the message displayed can vary depending on the error being bypassable or not:
* SEC_ERROR_UNKNOWN_ISSUER: [bypassable](https://untrusted-root.badssl.com), [not bypassable](https://a.subdomain.preloaded-hsts.badssl.com).
* SSL_ERROR_BAD_CERT_DOMAIN: [bypassable](https://wrong.host.badssl.com), [not bypassable](https://subdomain.preloaded-hsts.badssl.com).
* SEC_ERROR_EXPIRED_CERTIFICATE: [bypassable](https://expired.badssl.com).

Other test pages for certificates, both valid and invalid, are available at [https://badssl.com](https://badssl.com).

### Test the installer on Windows

Download the installer version and make sure that everything is working correctly. In the [FTP folder](http://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central-l10n/) you have both the Full Installer and the Stub Installer (downloading the package from Internet). You should test both at least once.,
