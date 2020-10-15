# Firefox for Android - How to localize

Firefox for Android is on a four week rapid release cycle. This means that usually there is a new release going out every four weeks.

Within this timeframe, localizers will usually have four weeks to localize and test their strings for a given release: strings land continuously during the first two weeks, and then stop landing for two weeks so that localizers can complete their work. The deadline in Pontoon is an indicator of when the next localization cut-off date is for the upcoming release - in other words, the last day to get localization updates into that release.

## Localize Firefox for Android in Pontoon

If your locale has never been set up for any android-l10n project yet, you must fill out [this issue template](https://github.com/mozilla-l10n/android-l10n/issues/new?assignees=delphine&labels=&template=new-localization-request.md&title=Add+%5Blocale%5D+to+%5Bproduct%5D) in order to request to add your locale to “Fenix” (code name for Firefox for Android). You will be notified there once your locale is set up in Pontoon and the project is ready to be localized.

Note: android-l10n is a meta project that covers several mobile products, all sharing common strings contained in elements called “Android Components”. Android Components (also internally called a-c) are a collection of Android libraries to build browsers or browser-like applications. The strings in Android Components serve various mobile products, such as Fenix. To simplify things, we’ve created [tags here in Pontoon](https://pontoon.mozilla.org/projects/android-l10n/tags/), so you can easily access all the product-specific strings needed, as well as the a-c ones (that are required as well for the products).

When your locale has been set up, you can choose it from the list of locales on [Pontoon](https://pontoon.mozilla.org/projects/android-l10n/tags/fenix/), and start localizing the product from there.

Once you start localizing, your locale should become available in [Nightly builds](https://play.google.com/store/apps/details?id=org.mozilla.fenix) within the next few days, which will enable you to check and test your work ([see this section](testing.md) for more information about testing).

When your locale reaches 70% completion (and given you have been testing actively), it can be added to release.
