# FAQ: Shutting down Pootle and migrating to Pontoon

## Q: What are the first things I need to do in order to adapt to Pontoon?

There are a few things you can do to make the transition run smoothly:
1. Log into Pontoon with your Firefox Account. If you don’t already have a Firefox account, please [create one](https://accounts.firefox.com/settings).
2. Check your permissions on your profile to make sure they match what you’d expect.
3. Flag issues with Pontoon to the l10n-drivers so that we can triage them and address them in a timely manner. To do this, please [file a bug here](https://goo.gl/tRQzAJ), or reach out to the l10n-drivers if you’re not yet comfortable with Bugzilla.

If you’re a locale manager on Pootle, check the [community permissions](https://mozilla-l10n.github.io/localizer-documentation/tools/pontoon/users.html#managing-permissions) on Pontoon and make any necessary changes to mirror your community’s permission settings.

## Q: When is my locale going to be migrated to Pontoon?

We plan to migrate one project at a time to Pontoon, starting with those that don’t have upcoming deadlines. We’re going to announce the deadline for each project across our communication channels, in order to give you a chance to review pending suggestions.

If your locale is up to speed, doesn’t have any pending suggestions, and you prefer to migrate all projects at once, please get in touch with l10n-drivers to coordinate the process.

## Q: Will there be a training session, doc or video on how to use Pontoon?

We’ve created this [set of documents](https://mozilla-l10n.github.io/localizer-documentation/tools/pontoon/) to instruct on the basics of using Pontoon. We’ll add more and more to these docs as time goes by. You’re also welcome to add to that doc by submitting pull requests to the [localizer documentation GitHub repository](https://github.com/mozilla-l10n/localizer-documentation).

## Q: What will happen to my user profiles translation stats on Pootle?

We have performed a database dump of all Pootle data. We’re working sort out how to migrate actions like submitted or approved translation attribution over to Pontoon.

## Q: How are user rights distributed in Pontoon?

Pontoon has three user types with specific rights:
* **Contributor** - authorized to make translation suggestions.
* **Translator** - authorized to review translation suggestions and submit translations.
* **Manager** - authorized to review translation suggestions, submit translations, and adjust the user rights of people within the community

Unlike Pootle, there’s no differentiation between the ability to review suggestions and submit translations. [This document](https://mozilla-l10n.github.io/localizer-documentation/tools/pontoon/users.html#user-roles) describes user roles in Pontoon with more details.

## Q: What happens to unreviewed suggestions on Pootle?

Unreviewed suggestions will not be migrated to Pontoon. That’s why it’s mandatory to review pending suggestions before a project (or the entire locale) is migrated.

## Q: Is there a Terminology project in Pontoon?

No. We’re rolling out terminology support by the end of September in two stages:
* Stage 1: we'll add support for using terminology in the Translate view: matched terms in the source string will be highlighted, providing definitions and possible translations for them. In this stage we'll use Microsoft Terminology as a read-only data source.
* Stage 2: we'll add a terminology management interface, and refine the UI based on the results of the previous stage. This will allow to translate a set of Mozilla specific terms, which will then be used as a terminology source like the Microsoft Terminology introduced in Stage 1.

## Q: How do I localize the Pontoon interface?

Currently, Pontoon is not localizable (yes, we see the irony). That work still needs to be scoped and added to the Pontoon roadmap. We’ll keep everyone posted.

## Q: Are the numbers word count or string count in Pontoon?

For now, Pontoon counts strings, not words. We’ll be adding word count soon.
