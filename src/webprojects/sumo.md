# Support.mozilla.org (SUMO): how to localize and test

SUMO, short for SUpport.MOzilla.org, is a support website for Mozilla products. More than half of all Firefox users speak a language other than English. Mozilla depends on contributors to make support available to people around the globe.

SUMO consists of two parts:

* User interface (or UI), such as navigation and buttons.
* Support articles for Mozilla products, such as feature descriptions and troubleshooting guides.

This document only covers localization of the UI elements in Pontoon. To learn about localizing support articles, please see [this page](https://support.mozilla.org/kb/how-contribute-article-localization/).

## Localizing the strings

There are two active components in Pontoon that make up [the product](https://pontoon.mozilla.org/projects/sumo):

* `LC_MESSAGES/djangojs.po` contains strings for the JS bits of the platform.
* `LC_MESSAGES/django.po` contains the majority of strings in the SUMO product.

Context is key to minimize revisions and get the translation right the first time. Look for clues or ask others for help:

* Check out **string comments**. In Pontoon, they’re displayed under the source string. They always include a reference to the section of code where the string is used (led by a hashtag, e.g. `#:kitsune/wiki/forms.py:34`). You can use that reference to search the [Kitsune GitHub repository](https://github.com/mozilla/kitsune) and get additional context.
* Visit the [**SUMO l10n forum**](https://support.mozilla.org/forums/l10n-forum). Participating in the forum requires a Mozilla account: [create one](https://support.mozilla.org/users/auth) if you don't have it yet! Optionally, you can also [sign up as a contributor](https://support.mozilla.org/contribute) to easily access the forum from the SUMO top navigation bar.

Localized strings in Pontoon are synced to [sumo-l10n on GitHub](https://github.com/mozilla-l10n/sumo-l10n) every 10 minutes, making that repository the source of truth.

## Testing

On Wednesdays, SUMO developers extract new strings from code and database edits. These strings are merged into the sumo-l10n repository and become available in Pontoon for translation.

Translated strings from Pontoon are pushed automatically to staging and production when there is a release to the respective environment. Usually this happens once a week. More often for staging.

There are two places where SUMO localizations can be visualized and tested:

* Staging server: [https://support.allizom.org​](https://support.allizom.org​)
* Production server: [http://support.mozilla.org](http://support.mozilla.org)

The SUMO team relies on contributors to find issues and report bugs!

## Reporting issues

There are several ways to report an issue:
* File an [issue in the SUMO GitHub repository](https://github.com/mozilla/sumo/issues/new). This is the quickest way to have a problem resolved.
* Report it in [the Matrix channel](https://matrix.to/#/#l10n-community:mozilla.org) by pinging the l10n project manager (PM) responsible for the project.
* Within Pontoon, click the `REQUEST CONTEXT or REPORT ISSUE` button next to the string and submit a comment. This will notify the l10n PM in charge.
* Send a direct email to the l10n PM responsible for the project. Their email address is displayed on their profile in Pontoon.

## Other questions

For any questions not covered here, you can reach out using the [#sumo room on Matrix](https://matrix.to/#/#sumo:mozilla.org) or [the SUMO l10n forum](https://support.mozilla.org/forums/l10n-forum).
