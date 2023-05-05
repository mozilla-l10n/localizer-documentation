# Glossary

This page includes an explanation for common terms used across the documentation.

<!-- toc -->

## Comment

Pontoon allows users to provide comments for strings. These can be used, for example, to discuss possible translations with other team members, or request more information from project managers.

Pontoon supports two types of comments:
* *Source string comments* are associated with the source string, and are displayed in the `COMMENTS` tab in the right column.
* *Translation comments* are associated with a specific translation, and are displayed under the translation itself in the editing area.

These should not be confused with *localization comments*. Depending on the underlying format, developers can add comments directly in the localization file for specific strings. This type of comment is displayed in the editing area, together with other information like [resource and context](#resource).

## Permission

Users in Pontoon can have different permissions depending on their role:
* Translators can both submit translations directly as approved translations, or review suggestions from other users. Unlike other Translation Management Systems, this is a single permission in Pontoon, and it’s referred to as *translator permission*.
* Team managers and Administrators have translator permissions, but can also change permissions assigned to other users (i.e. “promote” or ”demote” them).

## Resource

Source content and translations are organized in localization files within a repository (see [version control system](#version-control-system)). These localization files generally follow a key-value structure: they contain a list of text snippets that are associated with unique identifiers (keys). The string is the value associated to a specific ID.

In Pontoon, a file is referred to as a *resource*, while an identifier is called *context*.

## Translation

When there is no risk of ambiguity, this term is used as an umbrella term that includes:
* *Approved translations*: translations that have been submitted directly or approved by users with translator permissions.
* *Suggestions*: this includes both suggestions that are still unreviewed (pending), or that have been rejected by users with translator permissions.
* *Pretranslations*: strings that have been translated by the pretranslation feature, and are still pending review.

## Terminology

Terminology — also called *glossary* in other Translation Management Systems — is a list of terms and definitions used to support the translation process. It explains what each terms means and how to translate it.

TBX, or TermBase eXchange, is a standard file format used in the translation industry to represent and exchange terminological information.

## Translation memory

Translation memory is a database that stores all previous translations for a specific string. It can be leverage to provide suggestions when translating new content.

TMX, or Translation Memory eXchange, is a standard file format used in the translation industry to represent and exchange translation memories.

## Translation mode

Depending on their settings or permissions, users will be able to submit translations directly (*Translation Mode*), or only submit suggestions (*Suggestion Mode*).

Contributors — users without translator permissions — can only access *Suggestion Mode*, while translators and team managers can manually switch to it.

## Version Control System

Pontoon supports a special type of project, called `DB Project`, where both source content and translations are stored in Pontoon’s internal database (DB).

For the majority of projects, both source and translated content are also stored outside of Pontoon, in repositories that use [version control systems](https://en.wikipedia.org/wiki/Version_control) (VCS), like Mercurial (hg) or git.

Pontoon periodically reads from these repositories — both new source content and updates to existing translations — and writes back new translations from its internal database. This process is referred to as a *sync cycle*.
