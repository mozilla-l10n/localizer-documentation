# Testing on Focus for iOS and Focus for Android for a new release

Given Focus for iOS and Focus for Android have very similar test procedures, this document will cover both at once.

Localizers currently mostly rely on screenshots for testing. Latest information and updates about testing are provided on the [dev-l10n mailing list](https://lists.mozilla.org/listinfo/dev-l10n), which you should follow if you are working on l10n for any of the existing Mozilla products.

## Testing with screenshots

Screenshots are provided by the mobile teams and sent out on dev-l10n. The latest iterations can be found here: [Focus for Android](https://npark-mozilla.github.io/index.html). Focus for iOS (iPhone5) and Focus for iOS (iPhone7) screenshots [can be found here](https://github.com/5y/firefox-focus-ios).

## Test builds

While there are testing builds available via BuddyBuilds, the process is currently manual and localizers should reach out to the l10n mobile project manager in order to be added to these builds (currently **delphine** at **mozilla** dot **com**).<br/>
For Focus for iOS, please note an iOS device running v9 or above is needed. There is no specified version needed for Android.

There are Beta builds available for Focus Android now, that can be found by scrolling to the bottom of the [Focus for Android Play Store listing](https://play.google.com/store/apps/details?id=org.mozilla.focus&hl).

## Aspects to review

Here is a list of issues you should try to identify when testing the build:
* Language quality.
* Truncated words (cut-off from screen).
* Anything that appears broken on the UI.
* Check out all the main screens, UI, menus, tabs, new features, etc. Make sure these all look good, that everything is properly translated and appears as expected.
* Font support: once you start translating, you should check against the screenshots provided that the fonts used appear correctly.
* Untranslated content.

Concerning untranslated content on Focus for iOS: please note that we currently have two tiers of support in iOS. If your locale is only in the Tier 2 support (which corresponds to the languages under *Other Languages* in the iOS system settings), then it sometimes happens that menu items and dialogs, which are part of the OS itself, may not be localizable - and will therefore unfortunately appear in the primary OS language on the final UI.

## Locale sign-offs

L10n-drivers and the localization team will work together to determine if a locale can ship or not, for each release.

For mobile app projects (so all except Firefox for Android), all locales with complete translations and without errors on the [web dashboard](https://l10n.mozilla-community.org/webstatus/?product=focus-ios) at l10n deadline are considered for shipping. Additionally, they must have no visible l10n errors upon review of the locale’s screenshots (e.g., significant truncation, text overflow, encoding, etc.) besides what
may have already been reported to the mobile team to correct.

Focus for Android issues [can be filed here](https://github.com/mozilla-mobile/focus-android/issues/).<br/>
Focus for iOS issues [can be filed here](https://github.com/mozilla-mobile/focus-ios/issues).

Details concerning all this process are always announced on the [dev-l10n mailing list](https://lists.mozilla.org/listinfo/dev-l10n).
