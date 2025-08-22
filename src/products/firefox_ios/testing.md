# Testing on iOS for a new release

Localizers currently mostly rely on screenshots for testing. Latest information and updates about Firefox for iOS are generally announced in the [Localization Reports](https://blog.mozilla.org/l10n/category/l10n-reports/), which you should follow if you are working on localization for any of the existing Mozilla products.

## Testing with screenshots

Screenshots are currently provided by the iOS team, and the latest iterations can be found [here](https://firefox-ci-tc.services.mozilla.com/tasks/index/mobile.v2.firefox-ios.l10n-screenshots.latest). Once you find your locale in the list, you should choose and download the .zip file that contains your locale code. You can always find the link to screenshots in Pontoon within the Firefox for iOS `RESOURCES` section, located in the top-left corner of the page.

For every release, updated screenshots are provided twice: one week after string freeze (date shown on the current Nightly page) and one week before the Release Candidate (RC) (date shown on the Beta page). Both dates are part of the same [release calendar](https://whattrainisitnow.com/) used for Firefox and Firefox for Android. When in doubt, reach out to the localization mobile PM (currently **delphine** at **mozilla** dot **com**).

## Test builds

The beta version used for testing can be found [here](https://www.firefox.com/en-US/channel/ios/testflight). In case the registration does not work from there, localizers can also reach out to the localization mobile PM in order to be added to these builds (currently **delphine** at **mozilla** dot **com**).
Please note you will need an iOS device running v15 or above.

## Aspects to review

Here is a list of issues you should try to identify when testing the build:
* Language quality.
* Truncated words (cut-off from screen).
* Anything that appears broken on the UI.
* Check out at all the main screens, UI, menus, tabs, new features, etc. Make sure these all look good, that everything is properly translated and appears as expected.
* Font support.
* Untranslated content.

Concerning untranslated content: iOS provides two tiers of language support. Tier 1 locales are fully supported, while Tier 2 locales have more limited support. For Tier 2 locales, some UI elements supplied by the operating system may not be localizable and will appear in the UI in the OS language. To check whether a locale is supported, open Language Settings on an iOS device: Tier 1 locales are listed under `iPhone Languages`, while Tier 2 locales appear under `Other Languages`. If a locale does not appear in either list, it is currently not supported by iOS.

## Shipping a brand new locale

Please note this section about [prerequisites](https://mozilla-l10n.github.io/documentation/products/iOS_products/updating_locales.html#prerequisites-to-adding-a-locale) for adding a new locale to Firefox for iOS, as we are limited by the system settings.

As soon as you begin working on Firefox for iOS in Pontoon, we automatically ship whatever translations are available and the work will appear in the next Beta build.
