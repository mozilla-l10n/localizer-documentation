# Firefox for Android - How to localize

Firefox for Android is on a four week rapid release cycle. This means that usually there is a new release going out every four weeks.

Within this timeframe, localizers usually will have two weeks to localize and test their strings for a given release - before starting to work on the upcoming release. Typically, strings land during two weeks, and then stop landing for two weeks so that you can complete your work. The deadline in Pontoon is an indicator of when the next localization cut-off date is for the upcoming release.

## Localize Firefox for Android in Pontoon

* If your locale has never been set up for any android-l10n project yet, you must fill out [this issue template](https://github.com/mozilla-l10n/android-l10n/issues/new?assignees=delphine&labels=&template=new-localization-request.md&title=Add+%5Blocale%5D+to+%5Bproduct%5D) in order to request to add your locale to “Fenix” (code name for Firefox for Android). You will be notified there once your locale is set up on Pontoon and is ready to be localized.

Note: android-l10n is a project in which live several mobile products, that all share common strings contained in files called “Android Components”. Android Components (also internally called a-c) are a collection of Android libraries to build browsers or browser-like applications. The strings in Android Components serve various mobile products such as Fenix, Firefox Reality, Lockwise and Fire TV. To simplify things, we’ve created [tags here in Pontoon](https://pontoon.mozilla.org/projects/android-l10n/tags/), so you can easily access all the product-specific strings needed, as well as the a-c ones (that are required as well for the products).

* Once your locale has been set up, choose it from the list of locales on [Pontoon](https://pontoon.mozilla.org/projects/android-l10n/tags/fenix/).

Once you start localizing, your locale should be available on [Nightly builds](https://play.google.com/store/apps/details?id=org.mozilla.fenix) within the next few days, which will enable you to check and test your work ([see this section](testing.md) for more information about testing).

Once your locale reaches 70% completion (and given you have been testing actively), it can be added to release.
