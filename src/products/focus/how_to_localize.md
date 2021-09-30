# Focus - How to localize

[Focus for Android](https://pontoon.mozilla.org/projects/focus-for-android/) and [Focus for iOS](https://pontoon.mozilla.org/projects/focus-for-ios/) are both on a four week rapid release cycle. This means that usually there are new releases going out every four weeks.

Within this timeframe, localizers will have approximately four weeks to localize and test their strings for a given release: strings land continuously on Nightly during the first four weeks, and then these strings ride the train to the Beta version.

It is important to use the Nightly versions for both products, in order to test localization work regularly (see more details about testing [here](testing_focus.md)).

## Localize Focus for Android and Focus for iOS in Pontoon

Localizers should go to the [Focus for Android page on Pontoon](https://pontoon.mozilla.org/projects/focus-for-android/) - or the [Focus for iOS page on Pontoon](https://pontoon.mozilla.org/projects/focus-for-ios/) - and click "Request New Language". They will be notified by email once the locale is set up and the project is ready to be localized.

When the locale has been set up, localizers can choose it from the list of locales on Pontoon, from the same page they made the locale request (links above).

Once localization starts, the locale should become available in Nightly builds within the next few days, which will enable localizers to check and test their work. For Nightly builds and testing instructions, please refer again [here](testing_focus.md).

Once the locale starts work and reaches even 1% completion in Pontoon (and given that active testing has taken place), it will be added to the release version in the Google Play Store.

Note that Focus for Android strings share common strings with Android-Components, just like Fenix (Firefox for Android) does. At the moment, Android-Components strings all live in the [Firefox for Android](https://pontoon.mozilla.org/projects/firefox-for-android/) folder in Pontoon - these are all the files in your locale folder that start with mozilla-mobile/android-components/.

Localization deadlines for projects are noted as Resources in each project page in Pontoon, and the main Project Manager's contact information can be found there as well.
