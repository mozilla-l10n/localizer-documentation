# Intro
Mozilla encourages a three-stage review process:
1. Linguistic review in Pontoon by community
2. Technical review by l10n-drivers
3. In-context localization testing

Other docs will cover how the Mozilla approach to the first two stages of the review process. This doc covers what to look for when performing in-context localization testing for a Mozilla product or Web project.

# L10n testing process
Each Mozilla project has its own process for taking your translations and making them available for you to test. Generally speaking, the process moves like this:
1. You submit a translation through Pontoon.
2. The translation goes through a linguistic review and a technical review.
3. Once approved, the translation is automatically pushed into the project's repository.
4. Depending on the project, you'll need to wait anywhere from 30 minutes to 24 hours to look for your translation in the Mozilla project.
5. Once you've found your translation, if you find a bug with it in the project, you return to Pontoon to make any necessary corrections.

Pontoon simplifies these steps for some Web projects by enabling the in-context editor (aka WYSIWYG editor). This allows you to see your translations in-context the moment you create them in Pontoon, cutting out the 30 minute to 24 hour waiting period to test.

You might be wondering, "what types of bugs am I supposed to be looking for when I test?" Good question :-) Here's a list of common l10n bugs with screenshots that illustrate the problems in context.

# Common l10n bugs

## Encoding and fonts

## Truncation

## String concatenation and empty strings

## UI layout

## Mistranslation

## Untranslated strings

## Style bugs

## Number, date, currency

## XML parsing errors

## Exposed variables and placeholders

## Broken access keys

## Broken language preferences

## Broken search plugins

Website unreachable message.

## Broken hyperlinks

# What to do when you find an error while testing
Congratulations! You've found a bug! No software is perfect and you're very likely to find bugs while you test your localization.
