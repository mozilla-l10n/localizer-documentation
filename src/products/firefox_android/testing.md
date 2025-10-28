# Testing Firefox for Android

<!-- toc -->

Note: UI elements change over time. As a result some terms or element locations might differ from what’s described here. If you notice that something is significantly out of date, please [open an issue](https://github.com/mozilla-l10n/localizer-documentation/issues/new) so we can update this page.

This document provides an overview of frequent localization issues, recommended fixes, and specific Firefox for Android testing scenarios to help identify them. Depending on the issue, either a direct correction in Pontoon can be made, or you will need to file a bug as described below.

## Fixes in Pontoon

When issues can be fixed in [Pontoon](https://pontoon.mozilla.org/projects/), open the [Firefox for Android](https://pontoon.mozilla.org/projects/firefox-for-android/) project and pick your locale to find the specific string in Pontoon. Click on the top right of the page, where it says *All Strings*. Type the string into the search bar and press Enter, and click the magnifying glass icon to open filters and refine your search. Read more about search [here](https://mozilla-l10n.github.io/localizer-documentation/tools/pontoon/translation_workspace.html#string-list-and-search).

Note that while users with Translator or Manager permissions can edit strings directly, contributors can only submit a suggestion. For more information, see [this section](https://mozilla-l10n.github.io/localizer-documentation/tools/pontoon/translate.html) on translating in Pontoon.

## Fixes in Bugzilla

If an issue cannot be fixed in Pontoon, you will have to open a bug in Bugzilla in Firefox for Android [here](https://bugzilla.mozilla.org/enter_bug.cgi?product=Firefox%20for%20Android&component=L10N) (under the L10N under *Component)*. Note that you will need to log in or create a [Bugzilla](https://bugzilla.mozilla.org/home) account to file a bug.

Whenever in doubt, contact the current localization mobile ePM ([list](l10n_project_managers.md) of localization project managers).

## Pre-requisites for testing

### Download Nightly

If you have an Android device, it’s best to test Firefox with Nightly builds ([download](https://play.google.com/store/apps/details?id=org.mozilla.fenix)), as they are updated each day with the latest translations. Change the device’s system language in Android settings, or switch the in-app language from Firefox Nightly’s *Settings* (three dot menu \-\> *Settings* \-\> *Language*).

### Install Android Studio Code

If you do not have an Android device, or if your Nightly build contains data you do not want to lose, you can use Android Studio Code on your PC to test the browser, including localized onboarding screens. Here are the instructions to set it up:

1. [Download](https://developer.android.com/studio) Android Studio Code (it's free).
2. Install and run. Create an empty project (*File \-\> New \-\> New Project \-\> Empty activity)*.
3. On the right-hand side of the Android Studio interface, look for the *Device Manager* icon (hover over icons to find it). If you don’t see it, open it from the top menu: *View* \-\> *Tool Windows* \-\> *Device Manager*.
4. Then, you can add a virtual device (such as Pixel 9a) by clicking on the “+” icon to the top-right corner of where the code shows. Then choose *Create Virtual Device*.
5. Now you can run a new virtual device: click the play icon next to your virtual device name. After a few moments, an Android phone window should appear.
6. Log into your Google account and install [Firefox Nightly](https://play.google.com/store/apps/details?id=org.mozilla.fenix) from the Google Play Store.
7. You can then change Firefox for Android languages just like you would in a regular device: either change the device’s system language in Android settings, or switch in-app language from Firefox Nightly’s settings.

## Common localization issues

Here is a non-exhaustive list of common localization issues a localizer can encounter, along with ways to resolve them. Please keep these common issues in mind while performing localization testing.

### Truncation/Overlap

Truncation happens when text is cut off because it doesn’t fit within the space allowed in the user interface. This is common on mobile devices, where space is limited.

Overlap occurs when text expands and pushes parts of the user interface, causing them to overlap with other UI elements.

There are two ways that this can be fixed:

* The localizer can try shortening the translation in Pontoon, but this doesn’t always solve the issue. If that’s the case, the best solution is to file a bug as explained in the [point above](#fixes-in-bugzilla).
* A developer can expand the UI to accommodate longer translations or enable text wrapping. Here again, a bug needs to be filed as [explained above](#fixes-in-bugzilla).

### Language quality

Language quality issues happen when a translation sounds unnatural or includes grammatical errors, incorrect terminology, awkward phrasing, or inconsistent tone.

These issues can be fixed in [Pontoon](https://pontoon.mozilla.org/projects/firefox-for-android/) directly ([see this section](#fixes-in-pontoon) for more info).

### Untranslated content

If anything appears untranslated, but you know the string has been translated in Pontoon, [file a bug](#fixes-in-bugzilla). This may be due to strings being hardcoded, or an issue with importing translations back into the Firefox for Android repository.

However, untranslated content can also appear because of the delay between when strings land in Nightly and when translations are imported back into the app. Before filing a bug, wait until the next day as the following Nightly build should include the updated translations.

### Font support

Font support issues happen when a font used in the app doesn’t display certain characters or glyphs correctly. This can include missing letters, broken accents, or symbols that appear as boxes or question marks.

This will need an engineering fix. Follow the steps to file a bug as described in the [section above](#fixes-in-bugzilla).

## Testing key UI elements

### Onboarding flows

The onboarding flow is displayed only with a fresh profile. It can be triggered either by clearing the app’s data/storage through *Settings → Apps → Firefox → Storage & cache*, or more quickly by long-pressing the Firefox icon and selecting *App info → Storage & cache*. It’s important to note that this action will **remove all your existing data**.

Localization can be tested by changing the device language and then launching Firefox with a fresh profile. If you do not want to lose your data on Nightly, you can use Android Studio Code as described in the [instructions above](#install-android-studio-code). Note that it’s currently not possible to test the onboarding screens in a language not supported by Android.

### Home screen

This is the page you see right after completing the onboarding flow, when opening a new tab, or when no tabs are open. It usually shows *Shortcuts*, *Jump back in* (tabs), *Recently visited* (websites), *Collections* and *Stories* (note that *Stories* are enabled only for a subset of locales). Some sections only appear after you’ve visited a few websites — the more you browse, the more content you’ll see here. Please note that certain parts of the interface may appear in English because they display actual page titles from visited websites, and the language shown depends on the content source.

Be sure to tap `Show all` wherever it appears. Try saving tabs to collections, and review each element displayed there. Note that the mask icon at the top of the screen can be tapped and will take you to Private Browsing mode.

Always verify every interactive element in the UI you’re viewing — and do this throughout the app.

### Address bar

Tap the search plugin logo, and check that everything in the interface is localized. Note the names displayed near each icon in the list will reflect the name of the search engine, so they will be in English unless it’s a local search engine.

Check that the text inside the address bar is localized. When you have tabs open, you’ll see the number of tabs displayed next to the address bar — tap it too. Move through the interface and tap all elements that can be tapped, including those in the three-dot menu at the bottom of the screen.

Navigate to a website, and tap everywhere you can within the address bar, including any submenus that appear.

### Settings menu

Tap the three dot menu located either on the top right of the UI, or the bottom right of the UI, depending on the preference selected (note that for Right-to-Left languages, elements appear to the left). Check the menu displayed.

Then tap on *Settings* and scroll through the menu all the way down, checking that all text appears correctly translated.

Check all subsections within the *Settings* menu, including any areas you can open inside it. If you can change preferences or tap different options, do so — it may trigger notifications you’ll need to review.

### Extensions

Tap the three dot menu → *Extensions*. Install an extension. Check the *Extension* menus and sub-menus. While extensions themselves are not necessarily translated, any other elements or text that appear there should be.

Tap to install an extension, and observe the notification that briefly appears before leading you to a more permanent one. Everything except the extension name should be localized. After adding the extension, note the confirmation notification that appears, then return to the *Extensions* menu and check that the *Enabled* string for the new extension(s) is localized.

### Snackbars, notifications, error messages

For the purposes of this document, snackbars, notifications, and error messages are grouped together, as they often appear in similar ways. Note that this list is not exhaustive. If you come across other scenarios, [file an issue](https://github.com/mozilla-l10n/localizer-documentation/issues/new).

Note: Snackbars are in-app and temporary (e.g. *Tab closed* or *Bookmark added*), while notifications are persistent and visible until a user clicks on an action such as *OK* or *Back* (e.g. *Download complete*).

Pay attention to messages displayed when you perform the following actions:

* add/delete bookmarks
* delete items from history
* create/rename a *Collection*
* add items to a *Collection*
* download a file
* open a private tab
* close a tab
* choose to move tabs to “*inactive*” from the *Tabs* menu in *Settings*. Check back in two weeks as the “inactive tabs” tray will appear (accessed via the tab icon beside the address bar)
* long-press an image to download it
* tap the *Share* button beneath an image
* sign in to an account, such as Google
* tap *Save* under an image, once you are logged into a Google account
* long-press a link within a webpage
* disable Wi-Fi and try using the app
* crash the browser: type `about:crashcontent` in the address bar
