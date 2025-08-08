# Testing on iOS for a new release

Localizers currently mostly rely on screenshots for testing. Latest information and updates about Firefox for iOS are generally announced on the [Discourse Localization category](https://discourse.mozilla.org/c/l10n/), which you should follow if you are working on l10n for any of the existing Mozilla products.

## Testing with screenshots

Screenshots are currently provided by the iOS team, and the latest iterations can be found [right here](https://firefox-ci-tc.services.mozilla.com/tasks/index/mobile.v2.firefox-ios.l10n-screenshots.latest). Once you find your locale in the list, you should choose and download the .zip file that contains your locale code.

## Test builds

The beta version used for testing can be found [here](https://www.mozilla.org/en-US/firefox/ios/testflight/). In case the registration does not work from there, localizers can also reach out to the l10n mobile PM in order to be added to these builds (currently **delphine** at **mozilla** dot **com**).
Please note you will need an iOS device running v13.6 or above.

## Aspects to review

Here is a list of issues you should try to identify when testing the build:
* Language quality.
* Truncated words (cut-off from screen).
* Anything that appears broken on the UI.
* Check out at all the main screens, UI, menus, tabs, new features, etc. Make sure these all look good, that everything is properly translated and appears as expected.
* Font support.
* Untranslated content.

Concerning untranslated content: please note that we currently have two tiers of support in iOS. If your locale is only in the Tier 2 support list, then it sometimes happens that menu items, which are part of the OS itself, may not be localizable - and will therefore unfortunately appear in English on the final UI. To tell if a locale is supported or not, simply take a look on an actual device, under the Language Settings of the most recent iOS version available. Tier 1 locales are the ones listed under “iPod/iPhone/iPad Language”, and Tier 2 locales appear under “Other Language” (or “Add Language” if there are already some languages under that list).

## Shipping a brand new locale

Please note this section about [prerequisites](https://mozilla-l10n.github.io/documentation/products/iOS_products/updating_locales.html#prerequisites-to-adding-a-locale) for adding a new locale to Firefox for iOS, as we are limited by the system settings.

As soon as you begin working on Firefox for iOS in Pontoon, we automatically ship whatever translations are available and the work will appear in the next Beta build.
