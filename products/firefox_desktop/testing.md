# Testing Firefox Desktop

## Which build should I test?

As a localizer you work against Aurora, which means you should be testing a localized build of Firefox Developer Edition provided directly by Mozilla.

You can download the build from the [Pre-release download page](https://www.mozilla.org/firefox/channel/#developer) or directly [via FTP](http://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-aurora-l10n/) (search for your locale code and operative system).

Why Developer Edition? Because it’s updated every day, which means that you can fix an error and verify if the correction was effective the day after. It’s definitely a good approach to use this version as your main browser.

At the same time, you, or someone in your team, should be testing also Beta and Release, to make sure updates don’t introduce issues.

## How to test

Here are some tips on how to test Firefox once installed in your computer.

### Create a new profile

From time to time [create a new profile](https://support.mozilla.org/kb/profile-manager-create-and-remove-firefox-profiles):
* To test that the **default searchplugins are still relevant and work as expected**.
* To check messages and pages displayed on first run.
* To test dialogs and preferences at the default size.

### Search for untranslated strings

* Open all the voices available in the main menu and check that they’re properly localized. If you opted to keep Developer Tools in English, the choice should be consistent across the browser.
* Check the "hamburger" menu for cut strings (unfortunately you’ll need to abbreviate some of them, if they’re not intelligible). Then choose to customize the menu and make sure everything is properly localized.
* Open Preferences/Options and navigate through all tabs, try to open all dialogs like `Exceptions…`. Make also sure to select the `Custom settings` option for History in the Privacy panel.
* Log in with you Firefox Account and make sure that all preferences and dialogs are properly localized.
* Check for untranslated strings and errors in the Library (Bookmarks->View all bookmarks…).
* Open a new *Private Window* and check the content of the page.
* Type `about:support` in the address bar, press Enter, and check for errors or missing translations.
* Check the error pages for [malware](http://www.itisatrap.org/firefox/its-an-attack.html), [unwanted software](http://www.itisatrap.org/firefox/unwanted.html), [deceptive website](http://www.itisatrap.org/firefox/its-a-trap.html).
* Check permissions dialogs on [this test website](http://permission.site/).
* Visit secure and unsecure website, and check the **i** panel near the URL.
* Right click on a page and verify all panels in the `View Page Info` dialog.

#### Testing webextension permissions dialog

Create a new profile and open `about:config` in your browser:
* Right click on the list of available keys and create a new boolean key `extensions.webextPermissionPrompts` set to `true`.
* Search for the key `xpinstall.signatures.required` and set it to `false`. This will allow installing unsigned add-ons.
* Open [this link](files/webext_permissions.xpi), select **Download** and save the file on your computer.
* Drag the .xpi file on your browser’s window to display the dialog (you don’t need to actually install it).

### Test accesskeys and shortcuts

You can test accesskeys only on Windows and Linux, since they’re not available in OS X.
If your locale uses a non Latin alphabet and opted to keep the English accesskeys, you don’t have anything to check. If you’re localizing accesskeys, you should check that:
* Accesskeys use letters available in the associated label, and are not displayed between parenthesis at the end of the label itself.
* There are no conflicts, which means there are no items in the same menu or preference panel using the same letter.

For shortcuts, you should test at least the [most common ones](https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly). You should never change a shortcut, unless that combination of keys is not available in the keyboard layout commonly used for your locale. For example, in the Italian keyboard the character `[` is available pressing `Alt` and `è`. A shortcut based on `Shift + [` would never work, because it would be read as `Alt + Shift + è`.

### Test the installer on windows

Download the installer version and make sure that everything is working correctly. In the [FTP folder](http://archive.mozilla.org/pub/firefox/nightly/latest-mozilla-aurora-l10n/) you have both the Full Installer and the Stub Installer (downloading the package from Internet). You should test both at least once.,

## Firefox Health Report

If you have just finished localizing Firefox Health Report, you’ll need to change a key in about:config in order to test against the stage server.
1. Type `about:config` in the address bar, press Enter.

2. Search for the key `datareporting.healthreport.about.reportUrl`.

3. Set the value to `https://fhr-dev.allizom.org/%LOCALE%/v4/`.

4. Type about:healthreport in the address bar and check that everything is correctly localized.
