# Support.mozilla.org(SUMO): how to localize and test

SUMO, short for **SU**pport.**MO**zilla.org, is a knowledge base site, providing support to Mozilla product users. More than half of all Firefox users speak a language other than English. Mozilla depends on contributors to make support available to people around the globe.

SUMO consists of two parts: the product that contains strings in user interfaces or UI, such as navigations and buttons; and the support articles that are either for troubleshoot or the know-hows for every Mozilla product. This document covers the product side where localization takes place in Pontoon.

## Localizing the strings

There are two active components in Pontoon that make up the [SUMO product](https://pontoon.mozilla.org/sumo):

* **LC_MESSAGES/djangojs.po** contains strings for the JS bits of the platform.
* **LC_MESSAGES/django.po** contains the majority of strings in the SUMO product.

SUMO product is made up by several file types. In order to minimize revision and get translation right the first time, the key is to get the context right.  Look for clues or ask others for help:
* [String ID](https://pontoon.mozilla.org/zh-TW/sumo/LC_MESSAGES/django.po/?string=150684) shows where the strings is used.
* [Comment](https://pontoon.mozilla.org/zh-TW/sumo/LC_MESSAGES/django.po/?search=Recursive+inclusion+of&string=60075) accompanying a string.
* [The SUMO l10n forum](https://support.mozilla.org/forums/l10n-forum). But first thing first, you need to [create a SUMO account](https://support.mozilla.org/users/authcontributor) in order to participate in the discussions in the forum.

Please ignore these legacy components that are obsolete:

* LC_MESSAGES/buddyup.po contains strings for mobile-centric 1-to-1 support project.
* LC_MESSAGES/yaocho.po contains strings for the mobile version of the support knowledge base.

## Testing

Every Monday, SUMO developer performs synchronization between Kitsune and Pontoon. Localized content will be ready for testing on both staging and production at the same time.

There are three ways to test the product:

* Staging server: https://support.allizom.org​.
* Production server: http://support.mozilla.org/.
* Locally: if you want to test your update in a fast and independent way, you should [install your own local instance of Kitsune](https://kitsune.readthedocs.io/en/latest/localization.html#testing-localized-strings) on your computer.

### Testing on production

Localization updates are pushed on Mondays. The SUMO team relies on people finding issues on the production site and reporting bugs that are usually fixed at a timely manner.

### Testing locally

This method of testing allows you to verify your updates right away, instead of waiting for the weekly code push. If you are able to, you can conduct testing on your own computer soon after localizing the strings in Pontoon.

Review the step by step instruction on [testing localized SUMO locally]((https://kitsune.readthedocs.io/en/latest/localization.html#testing-localized-strings), including local installation of kitsune, file compilation and steps to commit changes to repository.

## FAQ

For any additional questions not covered here, you can contact [Michał](mailto:mdziewonski@mozilla.com)

### How often are new strings added? Is there a sprint?

No, there are no sprints. Strings are added at **as needed** basis. Whenever a release or change is required, new strings will be added to both Pontoon and Kitsune on Mondays.

### How do I participate in the [SUMO l10n forum](https://support.mozilla.org/en-US/forums/l10n-forum)?

To be part of the SUMO community, you need to [create a SUMO account](https://support.mozilla.org/en-US/users/authcontributor), which allows you to write in our community l10n forum and localize any articles you see in SUMO. This is separate from the account used to log into Pontoon in order to localize SUMO product and other Mozilla products and projects.

### Are there email communications when new strings are added?

Only when there is a release or a major change will there be communications to localizers through email and the SUMO l10n forum. The Pontoon dashboard is the best way to check for pending task.

### What are the ways to report an issue?

The best place to report issues is by filing [bugs to SUMO](https://bugzilla.mozilla.org/buglist.cgi?component=Localization&product=support.mozilla.org&bug_status=__open__&list_id=13747088). This is the quickest way to have a problem resolved.

Alternatively, you can report a problem through the SUMO l10n forum. You can also raise questions through email thread, IRC, and other social channels. In the end, issues identified will be tracked through Bugzilla.

It is not recommended to file issues on [github sumo-l10n](https://github.com/mozilla-l10n/sumo-l10n/issues?q=is%3Aopen+is%3Aissue).
