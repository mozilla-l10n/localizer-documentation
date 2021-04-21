# Support.mozilla.org(SUMO): how to localize and test

SUMO, short for SUpport.MOzilla.org, is a knowledge base site, providing support to Mozilla product users. More than half of all Firefox users speak a language other than English. Mozilla depends on contributors to make support available to people around the globe.

SUMO consists of two parts:

* User interface (or UI), such as navigation and buttons.
* Support articles, either used to troubleshoot issue or as knowledge base for Mozilla products.

This document only covers the UI portion localizable in Pontoon.

## Localizing the strings

There are two active components in Pontoon that make up [the product](https://pontoon.mozilla.org/projects/sumo):

* `LC_MESSAGES/djangojs.po` contains strings for the JS bits of the platform.
* `LC_MESSAGES/django.po` contains the majority of strings in the SUMO product.

SUMO is made up by several file types. In order to minimize revision and get translation right the first time, the key is to get the context right. Look for clues or ask others for help:

* String comments: in Pontoon they’re displayed above the area where you can enter your translation for a string. They always include a reference to the code where the string is used, and you can use this information to search for context in the [Kitsune GitHub repository](https://github.com/mozilla/kitsune).
* [The SUMO l10n forum](https://support.mozilla.org/forums/l10n-forum). But first thing first, you need to [create a Firefox account](https://support.mozilla.org/users/auth) in order to participate in the discussions in the forum.

Localized strings in Pontoon will be synced up with [sumo-l10n on GitHub](https://github.com/mozilla-l10n/sumo-l10n) every 20 minutes, making the repository the source of truth.

Ignore these legacy components:

* `LC_MESSAGES/buddyup.po` contains strings for mobile-centric 1-to-1 support project.
* `LC_MESSAGES/yaocho.po` contains strings for the mobile version of the support knowledge base.

## Testing

On Wednesdays, SUMO developers extract new strings from code and database edits. These strings are merged into the sumo-l10n repository and become available in Pontoon for translation.

Translated strings from Pontoon are pushed automatically to the staging and production when there is a release to the respected environment. Usually this happens once a week.

There are three ways to test the product:

* Staging server: https://support.allizom.org​.
* Production server: http://support.mozilla.org/.

### Testing on production/staging

Localization updates are pushed to the staging and production environments usually once a week. More often for staging. Either way, the SUMO team relies on contributors to find issues and report bugs that are usually fixed at a timely manner.

## FAQ

For any additional questions not covered here, you can reach out to the #sumo room in [Matrix](https://chat.mozilla.org/#/room/#sumo:mozilla.org0) to discuss it.

### How often are new strings added? Is there a sprint?

No, there are no sprints. Strings are added at *as needed* basis. Whenever a release or change is required, new strings will be added to both Pontoon and Kitsune on Mondays.

### How do I participate in the [SUMO l10n forum](https://support.mozilla.org/en-US/forums/l10n-forum)?

To be part of the SUMO community, you need to [create a Firefox account](https://support.mozilla.org/users/auth), which allows you to write in the community l10n forum and localize SUMO articles. This is separate from the account used to log into Pontoon in order to localize SUMO product.

### Are there email communications when new strings are added?

Only when there is a release or a major change will there be communications to localizers through mailing list (sumo-locale-leaders@), private messages, and the SUMO l10n forum. The Pontoon dashboard is the best way to check for pending tasks.

### What are the ways to report an issue?

* File a [bug for SUMO](https://bugzilla.mozilla.org/enter_bug.cgi?product=support.mozilla.org&component=Localization). This is the quickest way to have a problem resolved.
* Discuss it in [the SUMO l10n forum](https://support.mozilla.org/forums/l10n-forum).
* Raise questions in the SUMO category on [Discourse](https://discourse.mozilla.org/c/sumo/).
* Ping in [the Matrix channel](https://chat.mozilla.org/#/room/#l10n-community:mozilla.org) the l10n PM responsible for the project.
* Through Pontoon, click the REQUEST CONTEXT or REPORT ISSUE button next to the string and make a comment. This will notify the l10n PM in charge.
* Send a direct email to the l10n PM responsible for the project. The email address can be found in the profile in Pontoon.

It is not recommended to file issues on [GitHub sumo-l10n](https://github.com/mozilla-l10n/sumo-l10n/issues?q=is%3Aopen+is%3Aissue).
