# Testing Focus for iOS and Focus for Android for a new release

Given Focus for iOS and Focus for Android have very similar test procedures, this document will cover both at once. Please note that in certain markets, the app is named “Klar”. For the sake of simplicity, we will only call out the name “Focus” in this document.

Localizers currently mostly rely on screenshots for testing Focus for iOS. Latest information and updates about testing are provided on the [l10n Discourse Channel](https://discourse.mozilla.org/c/l10n/), which you should follow if you are working on localizing any of the existing Mozilla products.
Links to iOS screenshots are also provided under the Resources section [in Pontoon](https://pontoon.mozilla.org/projects/focus-for-ios/), at the top of the project page.
For Focus for Android and iOS, there are also links to testing builds, if they are currently available.

## Testing with screenshots (currently available for Focus for iOS only)

Screenshots are provided by the mobile teams for iOS and appear under the Resources section in Pontoon or in the l10n Discourse channel (see above point for more details).

## Test builds

There are a few iterations of Nightly localized builds being created for Focus for Android, but they are not updated daily yet. The link appears under the Resources section [in Pontoon](https://pontoon.mozilla.org/projects/focus-for-android/). At this point, they are not yet automatically updated once installed.

For Focus for iOS Nightly builds, check as well under the Resources section [in Pontoon](https://pontoon.mozilla.org/projects/focus-for-ios/), at the top of the project page - or reach out directly to the mobile project manager (currently delphine at mozilla dot com) to be added to the TestFlight system.

For Focus for iOS, please note an iOS device running v13.6 or above is needed. For Focus for Android, an Android device running v5.0 or above is needed.

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

Unless there are visible l10n errors upon review of the locale’s screenshots (e.g., significant truncation, text overflow, encoding, etc.) - and besides what
may have already been reported to the mobile team to correct - we will ship any locale that has started to localize (this applies to both Focus products).

Focus for Android issues [can be filed here](https://github.com/mozilla-mobile/focus-android/issues/).<br/>
Focus for iOS issues [can be filed here](https://github.com/mozilla-mobile/focus-ios/issues).

Details about any major updates concerning these products are always announced on the [[l10n Discourse Channel](https://discourse.mozilla.org/c/l10n/) - and are reflected in this document as well.
