# Firefox for Android - How to localize

The release cycle for Firefox for Android is the same as Firefox for Desktop, which is generally 6 weeks - but can sometimes be 8 weeks.

You can see the [detailed schedule for each release here](https://wiki.mozilla.org/RapidRelease/Calendar).

*Merge day* is when localizations move to the next train - and the last day available to include localization updates to the next Beta version if you work on tools like Pontoon.

Note: please make sure that you’ve already localized mozilla.org before you start working on Firefox for Android or any other projects.

## The importance of regularly checking your dashboard

### Checking for errors and warnings

Please keep in mind during your entire localization process to regularly check [your locale’s team page](https://l10n.mozilla.org/teams/). You can just choose your locale from the list there, and bookmark it to easily access it in the future.

Once you are on your team page, under the section *Application & Sign-offs*, take a look at the *Translation Status* column. If you have any **errors**, they will show up in red there, while **warnings** will be displayed in orange. The number of missing strings will also appear in that same column. You can click on either of these links to see what’s going on behind these notifications.

If you notice any errors, they need to be fixed very quickly. This is extremely important because if you break something while your locale is shipping on multi-locale builds (so, the builds that actually ship on the Play Store), you will need to fix it as soon as possible since it breaks the build for everyone!

Checking your team page and dashboard regularly should be something you do from the very beginning when you start localizing a project, so that it becomes a habit. This helps reduce the chance of breaking the builds in the future, once your locale is actually shipping, and generally helps catch errors earlier on. It also gives you an overview of your locale’s health and status, and overall ensures you’re shipping a good quality localization.

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

Bugs will need to be filed by l10n-drivers, and done by following filing out the form here: https://l10n.mozilla.org/bugs/new-locale

Please read this [document](https://github.com/mozilla-l10n/documentation/blob/master/products/searchplugins/setup_searchplugins.md) for more details on how to add search plugins.

Once you have finished localization work on Android and your locale is up on single-locale builds, you may now move to [the testing phase](testing.md).
