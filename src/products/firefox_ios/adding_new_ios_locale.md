# Adding a new locale to Firefox for iOS

## Prerequisites

### iOS language support

iOS currently supports two tiers of locales, and a locale must be part of one of these two lists in order to ship on Firefox for iOS. Unlike Firefox for Android, there’s no locale switcher included in the app, so it’s possible to ship only locales that are supported by iOS.

Note that for Tier 2 locales, some menu items in Firefox for iOS can not be translated since they are part of the OS itself. Strings will unfortunately appear in English on the final UI in these cases.

To tell if a locale is supported or not, take a look on an actual device, under the Language Settings of the most recent iOS version available. Tier one locales are the ones listed under “iPod/iPhone/iPad Language”, and Tier 2 locales appear under “Other Language” (or “Add Language” if there are already some languages under that list). If a locale appears under none of these two lists, then it should be safe to assume the language is not supported by iOS.

## Request to add a localization

Once it is determined if a locale is supported by the operating system and can ship on Firefox for iOS, a request can be made to work on the project through the usual localization tools.

For Pontoon, go to the [Firefox for iOS project page here](https://pontoon.mozilla.org/projects/firefox-for-ios/), and click on the link to request to add a new language to the project.

## Shipping

Once pending localization work is complete for a given release, l10n-drivers will work on adding the locale to [the list of shipping locales](https://github.com/mozilla-mobile/firefox-ios/blob/master/shipping_locales.txt).

Remember to regularly check the [Discourse Localization category](https://discourse.mozilla.org/c/l10n/) for latest information and updates on the project.
