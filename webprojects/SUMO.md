# Support.mozilla.org(SUMO): how to localize and test

SUMO, short for **SU**pport.**MO**zilla.org, is a knowledge base site, providing support to Mozilla product users. More than half of all Firefox users speak a language other than English. Mozilla depends on contributors to make support available to people around the globe.

SUMO consists of two parts:
* User interface (or UI), such as navigation and buttons.
* Support articles, either used to troubleshoot issue or as knowledge base for Mozilla products.

This document only covers the UI portion localizable in Pontoon.

## Localizing the strings

There are two active components in Pontoon that make up [the product](https://pontoon.mozilla.org/sumo):

* **LC_MESSAGES/djangojs.po** contains strings for the JS bits of the platform.
* **LC_MESSAGES/django.po** contains the majority of strings in the SUMO product.

SUMO is made up by several file types. In order to minimize revision and get translation right the first time, the key is to get the context right. Look for clues or ask others for help:

* String comments: in Pontoon they’re displayed above the area where you can enter your translation for a string. They always include a reference to the code where the string is used, and you can use this information to search for context in the [Kitsune GitHub repository](https://github.com/mozilla/kitsune).
* [The SUMO l10n forum](https://support.mozilla.org/forums/l10n-forum). But first thing first, you need to [create a SUMO account](https://support.mozilla.org/users/authcontributor) in order to participate in the discussions in the forum.

Localized strings in Pontoon will be synced up with [sumo-l10n on GitHub](https://github.com/mozilla-l10n/sumo-l10n) every 20 minutes, making the repository the source of truth.

Ignore these legacy components:

* LC_MESSAGES/buddyup.po contains strings for mobile-centric 1-to-1 support project.
* LC_MESSAGES/yaocho.po contains strings for the mobile version of the support knowledge base.

## Testing

On Thursdays, SUMO developers perform synchronization so localized content is ready on staging for testing.

On Mondays, SUMO developers perform synchronization so:

* New strings from code and database edits go into sumo-l10n repository and are available in Pontoon.
* Translated strings from sumo-l10n are pushed to production.

There are three ways to test the product:

* Staging server: https://support.allizom.org​.
* Production server: http://support.mozilla.org/.
* Locally: if you want to test your update in a fast and independent way, you should [install Kitsune](https://kitsune.readthedocs.io/en/latest/localization.html#testing-localized-strings) on your computer.

### Testing on production

Localization updates are pushed on Thursdays on staging for review in context, and on Mondays on production. Either way, the SUMO team relies on contributors to find issues and report bugs that are usually fixed at a timely manner.

### Testing locally

Kitsune’s codebase is currently not ready for a large audience, and the SUMO team has very limited resources to support local installs. Unless you are technical and self sufficient, you are strongly advised to use Pontoon and staging server to preview your localization work.

If you choose to give local install a try, follow the step by step instructions on [testing localized SUMO locally]((https://kitsune.readthedocs.io/en/latest/localization.html#testing-localized-strings), including local installation of Kitsune, file compilation and steps to commit changes to repository.

## FAQ

For any additional questions not covered here, you can contact [Michał](mailto:mdziewonski@mozilla.com).

### How often are new strings added? Is there a sprint?

No, there are no sprints. Strings are added at *as needed* basis. Whenever a release or change is required, new strings will be added to both Pontoon and Kitsune on Mondays.

### How do I participate in the [SUMO l10n forum](https://support.mozilla.org/en-US/forums/l10n-forum)?

To be part of the SUMO community, you need to [create a SUMO account](https://support.mozilla.org/en-US/users/authcontributor), which allows you to write in our community l10n forum and localize any articles you see in SUMO. This is separate from the account used to log into Pontoon in order to localize SUMO product and other Mozilla products and projects.

### Are there email communications when new strings are added?

Only when there is a release or a major change will there be communications to localizers through [mailing list](sumo-locale-leaders@), private messages, and the SUMO l10n forum. The Pontoon dashboard is the best way to check for pending tasks.

### What are the ways to report an issue?

The best place to report issues is by filing [bugs to SUMO](https://bugzilla.mozilla.org/enter_bug.cgi?product=support.mozilla.org&component=Localization). This is the quickest way to have a problem resolved.

Alternatively, you can report a problem through the SUMO l10n forum. You can also raise questions through [web projects mailing list](dev-l10n-web@lists.mozilla.org), in the #sumo channel on [IRC](https://wiki.mozilla.org/IRC), and other social channels. In the end, issues identified will be tracked through Bugzilla.

It is not recommended to file issues on [GitHub sumo-l10n](https://github.com/mozilla-l10n/sumo-l10n/issues?q=is%3Aopen+is%3Aissue).
