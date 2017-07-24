# Testing Firefox for Android

## Testing on single-locale builds

Once you have localized [all the strings needed to complete the Firefox for Android project](localize_android.md), and your language is now up on single-locale builds, you should start testing! This is the moment to engage as much people as possible: have them use and check-out these builds regularly. The more eyes on them, the better.

First, authorize 3rd party app downloads from your Android phone’s settings. From your phone, download your locale from https://ftp.mozilla.org/pub/mobile/nightly/latest-mozilla-central-android-api-15-l10n/ by clicking on the most recent link with your locale code in it (Note: you may want to scroll down the page to make sure you are choosing the most recent build!)

Then, choose the .apk link out of the 3 possible options listed. Download should start and once the app is installed, you should be able to test your locale.

### What to look out for?

* Language quality.
* Truncated words (cut-off from screen).
* Anything that appears broken on the UI.
* Check out at all the main screens, UI, menus, tabs, new features, etc. Make sure these all look good, that everything is properly translated and appears as expected.
* Font support.
* Check that all searchplugins are working correctly.

It is strongly suggested to start using these builds on a daily basis, so that you can get into as many screens as possible and check that everything looks fine.

It is important that the people testing the localization be not only the one(s) who have localized. Ask other people from your community to help test in order to have fresh eyes looking at your work.

## Testing on multi-locale builds (shipping in Play Store)

Once the Fennec Project Manager (currently **delphine** at **mozilla** dot **com**) sees that you’ve done at least one cycle on a single-locale build, that nothing breaks during sign-offs, that you’ve continued keeping your work up to date, and that you have been TESTING it - l10n-drivers will consider adding your language to the multi-locale builds. This means that - congratulations! - your locale will now officially be shipping on Firefox for Android.

Once your locale is added to the multi-locale builds, it will "ride the trains" like for Firefox Desktop. It will first start shipping on Nightly on the Play Store, then once next merge day arrives it will ship on Beta, and again the following merge day, it will arrive on Release (cycles are usually 6 or 8 weeks). You can check all upcoming merge days on the [Rapid Release Calendar](https://wiki.mozilla.org/RapidRelease/Calendar).

Once you start shipping in the Play Store, it makes sense to stop testing on single-locale builds. It’s strongly suggested you now start testing and using the [Nightly Play Store version](https://play.google.com/store/apps/details?id=org.mozilla.fennec_aurora), since this is the branch that you localize and work on. Don’t be fooled by the "aurora" in that URL - it’s still redirecting to our Fennec Nightly builds. Note that it’s good to have other members in the community use the beta and release version too, in case anything breaks with updates. 

When testing the multi-locale build, keep in mind and look out for the same issues and aspects called out for the single-locale builds in the section above.

l10n-drivers send out regular reminders about merge days, android updates, schedule and important info on [dev.l10n mailing list](https://lists.mozilla.org/listinfo/dev-l10n). Please make sure you’re following this list closely so that you get regular updates about which part of the cycle you’re at, when you need to finish your work, and anything relevant to what you are doing.
