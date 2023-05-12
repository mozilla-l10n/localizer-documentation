# Glossary

Explanation of common terms and concepts used across documentation.

<!-- toc -->

## Comment

Comments can be used, for example, to discuss possible translations with other team members or request more information from project managers.

Pontoon supports two types of user comments:
* *Source string comments* are associated with the source string and displayed in the `COMMENTS` tab in the right column.
* *Translation comments* are associated with a specific translation and displayed under the corresponding translation in the History panel.

User comments should not be confused with *Resource comments*, which developers can add directly to the resource file. This type of comment is displayed in the editing area, along with other information like the [resource path and context](#resource).

## Permission

Users in Pontoon can have different permissions depending on their role:
* Translators can either submit approved translations directly or review suggestions from other users. Unlike in some other Translation Management Systems, this is a single permission in Pontoon, and it’s referred to as *Translator permission*.
* Team managers have translator permissions, but can also change permissions assigned to other users (i.e., ”promote” or ”demote” them).

## Resource

Resources are localization files within a repository (see [version control system](#version-control-system)) used to store source content and translations. They can be in different file formats but generally follow the same key-value structure, where the key (displayed as *Context* in the Source string panel) is a unique identifier and the value is a text snippet that needs to be translated.

## Translation

A translation is any submission of the target content. There are several types of translations:
* *Approved translations*: translations submitted directly or approved by users with translator permissions.
* *Suggestions*: translations that have not been reviewed yet (pending).
* *Pretranslations*: translations that have been authored by the pretranslation feature.

## Terminology

Terminology — sometimes also referred to as a *Glossary* — is a list of terms and their definitions. Pontoon will highlight any terms in the source string and show their definitions as well as translations into the target language.

TBX, or TermBase eXchange, is a standard file format used in the translation industry to represent and exchange terminological information. Pontoon Terminology can be downloaded in the TBX format.

## Translation memory

Translation memory is a list of all approved translations for any string. It can be leveraged to provide suggestions when translating new content.

TMX, or Translation Memory eXchange, is a standard file format used in the translation industry to represent and exchange translation memories. Pontoon Translation memory can be downloaded in the TMX format.

## Translation mode

Depending on their settings and permissions, users will be able to submit translations directly (*Translation Mode*), or only submit suggestions (*Suggestion Mode*).

Contributors — users without translator permissions — can only access *Suggestion Mode*, while translators and team managers can manually switch between the modes.

## Version Control System

Most projects store source content and translations outside of Pontoon, in repositories that use [version control systems (VCS)](https://en.wikipedia.org/wiki/Version_control). The most popular are git and Mercurial (hg).

Pontoon periodically (usually every 10 minutes) imports source content and translations from these repositories and writes translations back. This process is referred to as *Sync*.

Pontoon also supports the so-called `DB projects`, where source content and translations are stored in Pontoon’s internal database (DB).
