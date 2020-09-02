# Firefox for Android - How to localize

The release cycle for Firefox for Android is the same as Firefox for Desktop, which is generally 6 weeks - but can sometimes be 8 weeks.

You can see the [detailed schedule for each release here](https://wiki.mozilla.org/RapidRelease/Calendar).

*Merge day* is when localizations move to the next train - and the last day available to include localization updates to the next Beta version if you work on tools like Pontoon.

Note: please make sure that you’ve already localized mozilla.org before you start working on Firefox for Android or any other projects.

## Localize the Firefox for Android folder

* [Pontoon](https://pontoon.mozilla.org/projects/firefox-for-android/): choose your locale code from there.

Once you’ve finished covering this folder, please note you still have strings to translate. See below for more instructions.

## Localize the shared Firefox strings

In order to reach 100% completion on the Firefox for Android l10n project, you will have to localize the shared Firefox files (so, the ones common to Firefox Desktop and Android) as well. These are found in the Firefox folder:
* [Pontoon](https://pontoon.mozilla.org/projects/firefox/): choose your locale code from there. Localize all file paths that start with dom, netwerk, security, services and toolkit.

Once you’ve reached 100% completion for the shared strings: let the Fennec project manager know (currently **delphine** at **mozilla** dot **com**). A bug will be filed to add your locale to the single-locale builds.

These builds are available here: https://ftp.mozilla.org/pub/mobile/nightly/latest-mozilla-central-android-api-16-l10n/.
This means that you will be able to download a build on your Android device to test your locale. Please note that at this point, your locale still isn’t shipping on official Firefox for Android builds. That will come later.

## Considerations for brand new locales that have no Desktop version yet

If you have not already launched Firefox Desktop in your language, then you are probably missing some important pieces, such as search engines.

Bugs will need to be filed by l10n-drivers, and done by following filing out the form here: https://wiki.mozilla.org/index.php?title=L10n:Bugogram

Please read this [document](https://github.com/mozilla-l10n/documentation/blob/master/src/products/searchplugins/setup_searchplugins.md) for more details on how to add search plugins.

Once you have finished localization work on Android and your locale is up on single-locale builds, you may now move to [the testing phase](testing.md).
