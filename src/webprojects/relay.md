# Firefox Relay: how to localize and test

Firefox Relay⁩ email masks protect your true email address from public view, automatically forwarding messages to your true inbox. Now you can receive only the messages you want in your inbox. For Canada and the US, phone mask feature as a premium service is offered.

Firefox Relay consists of two parts:
* [Firefox Relay Website](https://pontoon.mozilla.org/projects/firefox-relay-website)
* [Firefox Relay Add-on](https://pontoon.mozilla.org/projects/firefox-relay-add-on)

## Firefox Relay Website

This project is open to localization in all languages. The free version with a limit of 5 email masks is available to all users. However, Relay Premium, a paid service, is available in [these markets](https://docs.google.com/document/d/1ww1ab5Vhr4AISMlWZvTe0cnz8GD16F8xE5vegcJZNwQ/edit#) at the moment. The team will continue market expansion as well as adding the product features and making improvements.

Phone masking, a paid service, is offered to limited markets. Localizable content is limited in languages where the markets are offered the Relay Premium services.

* Production: https://relay.firefox.com/
* Stage: https://fx-relay-demo.netlify.app

**NOTE**:
* Some locales have more files than other locales. This is due to feature availability and avoiding using community resources for features not available in the mid term or not at all.
* The staging server is not ideal. It syncs once a day. Premium features are not available for testing. Not all free service features can be tested.

### Localizing the strings

Firefox Relay is written in Fluent, or .ftl format. It contains variables and placeables. Sometimes it contains special punctuations or tags. Make sure to preserve them in the localized strings. For better context, many strings are provided with comments, which can be found above the area where you enter translated strings. If you have additional questions:

* In Pontoon: Ping the l10n PM in charge in the comment field on the right side of the translation field.
* Matrix channel: Ping the l10n PM in charge with any issues you may have.
* Localization on Discourse: Follow announcements and discussions, and raise questions there.

### To Test

Firefox Relay Website is synced once a day between localized and the core repo. To test your localization, you need to download the build at https://github.com/mozilla/fx-private-relay/releases. Click on the Assets arrow, you should see two files. Download the appropriate compressed file to your machine. To download the latest l10n build, click on the Tags button (next to the Release button), the latest build is on the top.

There are three level of testings:

* The free service can be tested by anyone. All you need is a Firefox account. You can have up to 5 free email masks.
* The premium service is a paid service. It allows unlimited email masks. Service is available to select markets. Market expansions continue.
* The phone masking service is also a paid service. It allows one phone mask per phone number. Service is limited to select markets.

**NOTE** for paid service testing:
* The product team is currently working on a testing solution for markets where premium services are offered. Stay tuned for the update. At the moment, even though the strings related to paid services are translated, only those on production site in [these markets](https://docs.google.com/document/d/1ww1ab5Vhr4AISMlWZvTe0cnz8GD16F8xE5vegcJZNwQ/edit#) can be tested.

#### Linguistic testing

* Login screen.
* Email notification.
* Phone message notification (if feature available).
* Check all the setting configuration buttons and the page or expanded window each page leads to.
* Translation is of good quality and makes sense in context.
* No broken UI, especially in a mobile environment. Text wraps or line breaks correctly.
* Terms are consistent between pages.
* Basic font support.
* Error and warning messages.

#### Functionality testing

* Configure the Settings. Go through all the applicable categories.
* Check for email notifications with each of the initial setups.
* Make changes to some of the settings, check for possible error messages or warnings.
* Check for followup confirmation emails and phone messages (if applicable).

## Firefox Relay Add-on

Production: https://addons.mozilla.org/firefox/addon/private-relay/
Dev build: https://github.com/mozilla/fx-private-relay-add-on/releases

This is a companion project to Firefox Relay Website project. The sync between localized and the core repo is once a day.

### To Test

You need to download the build at https://github.com/mozilla/fx-private-relay-add-on/releases. Click on the Assets arrow, and you should see three files. Install the latest build, then download the appropriate compressed file to your machine. The build is manual and is done every few days for the time being.

## Reporting technical issues

There are a few ways to report non-linguistic related bugs:

* File an issue for Firefox Relay Website and Firefox Relay Add-on.
* Ping in the Matrix channel to the l10n PM responsible for the project.
* Through Pontoon, click the REQUEST CONTEXT or REPORT ISSUE button next to the string and make a comment. This will notify the l10n PM in charge.
* Send a direct email to the l10n PM responsible for the project. The email address can be found in the profile in Pontoon.
