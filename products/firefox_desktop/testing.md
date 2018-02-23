# Testing Firefox Desktop

<!-- toc -->

## Which build should I test?

As a localizer you will work against Nightly, which means you should be testing a localized build of Firefox Nightly provided directly by Mozilla.

You can download the build from the [pre-release download page](https://www.mozilla.org/firefox/channel/#nightly), the [download page](https://www.mozilla.org/firefox/nightly/all/) for all systems and locales, or directly [via FTP](http://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-central-l10n/) (search for your locale code and operative system).

Why Nightly? Because it’s updated every day, which means that you can fix an error and verify if the correction was effective the day after. It’s definitely a good approach to use this version as your main browser.

At the same time, you, or someone in your team, should be testing also Beta and Release, to make sure updates don’t introduce issues.

### Building a localized version of Firefox

If you’re interested in building a localized version of Firefox from source code, please follow the [official instructions](https://firefox-source-docs.mozilla.org/build/buildsystem/locales.html) available in Mozilla Source Tree Docs. Note that you will need to set up the [build environment](https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Build_Instructions/Simple_Firefox_build) on your system.

## How to test

Here are some tips on how to test Firefox once installed in your computer.

### Create a new profile

From time to time [create a new profile](https://support.mozilla.org/kb/profile-manager-create-and-remove-firefox-profiles):
* To test that the **default searchplugins are still relevant and work as expected**.
* To check messages and pages displayed on first run.
* To test dialogs and preferences at the default size.

### Search for untranslated strings

* Open all the voices available in the main menu and check that they’re properly localized. If you opted to keep Developer Tools in English, the choice should be consistent across the browser.
* Check the “hamburger” menu for cut strings (unfortunately you’ll need to abbreviate some of them, if they’re not intelligible). Then choose to customize the menu and make sure everything is properly localized.
* Open Preferences/Options and navigate through all tabs, try to open all dialogs like `Exceptions…`. Make also sure to select the `Custom settings` option for History in the Privacy panel.
* Log in with you Firefox Account and make sure that all preferences and dialogs are properly localized.
* Check for untranslated strings and errors in the Library (Bookmarks->View all bookmarks…).
* Open a new *Private Window* and check the content of the page.
* Type `about:support` in the address bar, press Enter, and check for errors or missing translations.
* Check the error pages for [malware](http://www.itisatrap.org/firefox/its-an-attack.html), [unwanted software](http://www.itisatrap.org/firefox/unwanted.html), [deceptive website](http://www.itisatrap.org/firefox/its-a-trap.html), [harmful website](http://www.itisatrap.org/firefox/harmful.html). All strings are also visible in `about:blocked`.
* Check permissions dialogs on [this test website](http://permission.site/).
* Visit secure and unsecure website, and check the **i** panel near the URL.
* Right click on a page and verify all panels in the `View Page Info` dialog.
* Test Form Autofill using these [test pages](https://luke-chang.github.io/autofill-demo/). Make sure that `Autofill addresses` and `Autofill credit cards` are enabled in Firefox settings (*Privacy & Security* panel). Note that `Form Autofill` can be localized, it’s not a brand name.

### Test webextension permissions dialog

Create a new profile and open `about:config` in your browser:
* Right click on the list of available keys and create a new boolean key `extensions.webextPermissionPrompts` set to `true`.
* Search for the key `xpinstall.signatures.required` and set it to `false`. This will allow installing unsigned add-ons.
* Open [this link](https://github.com/mozilla-l10n/localizer-documentation/blob/master/products/firefox_desktop/files/webext_permissions.xpi), select **Download** and save the file on your computer.
* Drag the .xpi file on your browser’s window to display the dialog (you don’t need to actually install it).

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

## Photon

Photon is the redesigned UI that will ship in Firefox 57:
* The hamburger menu will be replaced by a static dropdown menu. If you’re on Nightly and still see the old menu, make sure that `browser.photon.structure.enabled` is set to `true` in about:config (that’s the default value in Nightly 56 and later).
* Test the *Overflow menu*: the `>>` symbol will appear automatically in the main toolbar when resizing the window to a small width. You can then pin an element to it, or add/remove items from the toolbar directly from their context menu.
* Test the onboarding tour by clicking the small fox displayed in the left corner on the New tab page. There are also onboarding notifications, displayed at the bottom of the page: you can cycle through them by opening multiple new tabs in a row.
