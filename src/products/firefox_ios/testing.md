# Testing on iOS for a new release

Localizers currently mostly rely on screenshots for testing. Latest information and updates about testing are provided on the [dev.l10n mailing list](https://lists.mozilla.org/listinfo/dev-l10n), which you should follow if you are working on l10n for any of the existing Mozilla products.

## Testing with screenshots

Screenshots are currently provided by the iOS team, and the latest iterations can be found [right here](https://drive.google.com/drive/folders/1VOq91kGIm0XuneKdSl48HCwTkwXCw_Ve).

## Test builds

The beta version used for testing can be found [here](https://www.mozilla.org/en-US/firefox/ios/testflight/). In case the registration does not work from there, localizers can also reach out to the l10n mobile PM in order to be added to these builds (currently **delphine** at **mozilla** dot **com**).
Please note you will need an iOS device running v9 or above.

## Aspects to review

Here is a list of issues you should try to identify when testing the build:
* Language quality.
* Truncated words (cut-off from screen).
* Anything that appears broken on the UI.
* Check out at all the main screens, UI, menus, tabs, new features, etc. Make sure these all look good, that everything is properly translated and appears as expected.
* Font support.
* Untranslated content.

Concerning untranslated content: please note that we currently have two tiers of support in iOS. If your locale is only in the Tier 2 support list, then it sometimes happens that menu items, which are part of the OS itself, may not be localizable - and will therefore unfortunately appear in English on the final UI. To tell if a locale is supported or not, simply take a look on an actual device, under the Language Settings of the most recent iOS version available. Tier 1 locales are the ones listed under “iPod/iPhone/iPad Language”, and Tier 2 locales appear under “Other Language” (or “Add Language” if there are already some languages under that list).

## Testing a brand new locale

When a locale is brand new, l10n-drivers and the localization team will work through Bugzilla to process sign-offs on l10n testing.

The l10n Mobile Project Manager will open up a meta bug for this and attach all needed bugs under their corresponding component. Closing the bug as resolved-fixed will signal that a locale is signing off on testing, and good to go for release.

Details concerning all this process are always announced on the [dev.l10n mailing list](https://lists.mozilla.org/listinfo/dev-l10n).
