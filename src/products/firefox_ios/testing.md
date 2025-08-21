# Testing on iOS for a new release

Localizers currently mostly rely on screenshots for testing. Latest information and updates about Firefox for iOS are generally announced on the [Discourse Localization category](https://discourse.mozilla.org/c/l10n/), which you should follow if you are working on localization for any of the existing Mozilla products.

## Testing with screenshots

Screenshots are currently provided by the iOS team, and the latest iterations can be found [right here](https://firefox-ci-tc.services.mozilla.com/tasks/index/mobile.v2.firefox-ios.l10n-screenshots.latest). Once you find your locale in the list, you should choose and download the .zip file that contains your locale code. You can always find the link to screenshots in Pontoon under the Firefox for iOS `RESOURCES` section, located in the top-left corner of the page.

For every release, updated screenshots are provided twice: the first round will be delivered one week after string freeze, and the second round will include the latest localizations one week before Release Candidate. Both rounds follow the same [release calendar](https://whattrainisitnow.com/) used for Firefox and Firefox for Android. Make sure to check the latest Nightly channel for the exact dates. When in doubt, reach out to the localization mobile PM (currently **delphine** at **mozilla** dot **com**).

## Test builds

The beta version used for testing can be found [here](https://www.mozilla.org/firefox/ios/testflight/). In case the registration does not work from there, localizers can also reach out to the localization mobile PM in order to be added to these builds (currently **delphine** at **mozilla** dot **com**).
Please note you will need an iOS device running v13.6 or above.

## Aspects to review

Here is a list of issues you should try to identify when testing the build:
* Language quality.
* Truncated words (cut-off from screen).
* Anything that appears broken on the UI.
* Check out at all the main screens, UI, menus, tabs, new features, etc. Make sure these all look good, that everything is properly translated and appears as expected.
* Font support.
* Untranslated content.

Concerning untranslated content: please note that we currently have two tiers of support in iOS. If your locale is only in the Tier 2 support list, then it sometimes happens that menu items, which are part of the OS itself, may not be localizable - and will therefore unfortunately appear in English on the final UI. To check if a locale is supported on iOS, look directly on a device under Language Settings in the latest available iOS version. Tier 1 locales are listed under `iPhone Languages`, while Tier 2 locales appear under `Other Languages`. If a locale isn’t shown in either list, it’s currently not supported by iOS..

## Shipping a brand new locale

Please note this section about [prerequisites](https://mozilla-l10n.github.io/documentation/products/iOS_products/updating_locales.html#prerequisites-to-adding-a-locale) for adding a new locale to Firefox for iOS, as we are limited by the system settings.

As soon as you begin working on Firefox for iOS in Pontoon, we automatically ship whatever translations are available and the work will appear in the next Beta build.
