# Adding a new locale to Firefox for iOS

## Prerequisites

### iOS language support

iOS currently supports [two tiers of locales](https://people-mozilla.org/~sarentz/ios-locales.html), and a locale must be part of that list in order to ship on Firefox for iOS. Unlike Firefox for Android, there’s no locale switcher included in the app, so it’s possible to ship only locales that are supported by iOS.

Note that for Tier 2 locales, some menu items in Firefox for iOS can not be translated since they are part of the OS itself. Strings will unfortunately appear in English on the final UI in these cases.

To tell if a locale is supported or not, it is also possible simply to take a look on an actual device, under the Language Settings of the most recent iOS version available. Tier one locales are the ones listed under “iPod/iPhone/iPad Language”, and Tier 2 locales appear under “Other Language” (or "Add Language" if there are already some languages under that list). If a locale appears under none of these two lists, then it should be safe to assume the language is not supported by iOS. Note though that RTL languages are not supported yet on Firefox for iOS (see RTL point below).

### App Store language support

The App Store only supports a subset of locales, compared to what the OS itself supports.

This list is always growing. If translation work starts on Firefox for iOS for a locale that is supported by the App Store, it will automatically be enabled under the locale’s corresponding appstore’s folder (which can be found either in [Pontoon](https://pontoon.mozilla.org/projects/appstores/) or [GitHub](https://github.com/mozilla-l10n/appstores)).

Note that App Store language support is not a requirement to translate the app itself. As long as a locale is supported by iOS (see point above), it’s possible to ship it.

### Right-to-left locales

At the time there is no right-to-left support on Firefox for iOS. Stay tuned.

In the meantime, feel free to file any existing issues in Bugzilla and make sure it blocks [the RTL Firefox for iOS meta bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1160759).

To get involved in the Firefox for iOS RTL effort and receive more details, you may contact directly **delphine** at **mozilla** dot **com**.

## Request to add a localization

Once it is determined if a locale is supported by the operating system and can ship on Firefox for iOS, a request can be made to work on the project through the usual localization tools.

For Pontoon, go to the [Firefox for iOS project page here](https://pontoon.mozilla.org/projects/firefox-for-ios/), and click on the link to request to add a new language to the project.

For Pootle, please send an email to the Pootle Tech team (**tech-team** at **translate** dot **org** dot **za**) to request the project.

It’s also possible to work directly from GitHub on the [Firefox for iOS mozilla-l10n repo](https://github.com/mozilla-l10n/firefoxios-l10n).

## Shipping

Once pending localization work is complete for a given release, l10n-drivers will work on adding the locale to [the list of shipping locales](https://github.com/mozilla-mobile/firefox-ios/blob/master/shipping_locales.txt).

Remember to regularly check the [Firefox for iOS release schedule](https://wiki.mozilla.org/Firefox_for_iOS_Train_Schedule) as well as the [dev.l10n mailing list](https://lists.mozilla.org/listinfo/dev-l10n) for latest information and updates on the project.
