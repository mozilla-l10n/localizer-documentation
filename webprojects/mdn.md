# Developer.mozilla.org(MDN): how to localize and test

MDN is the acronym for **M**ozilla **D**eveloper **N**etwork. It hosts references and guides to Web technologies as well as Firefox at Mozilla. It attracts users around the globe. The localization communities are a key part of the Mozilla project. Their work in translating and localizing the MDN documentations helps people around the world develop for the open Web.

MDN consists of three parts:

* The [site user interface](https://developer.mozilla.org/) (or UI) strings that appear on almost all MDN pages to frame the main article content and provide navigation and user controls.
* The main body of [MDN pages](https://developer.mozilla.org/docs/MDN/Contribute/Localize/Translating_pages) consists of references, guides, and tutorial articles. Localization is done directly on the web.
* [Macro strings](https://github.com/mdn/kumascript/tree/master/macros) are the output by macro templates that construct certain kinds of navigation, messages, or generated structures. The strings currently live on GitHub, and changes can be done through pull requests (or PR).

This document only covers the UI portion localizable in Pontoon.

## Localizing the strings

The UI strings for MDN product live in Pontoon. The string changes are extracted and sent to Pontoon as part of the production push process. You can translate directly in Pontoon or download it as .po files and upload them back to Pontoon when done. Newly localized strings will be included in production updates.

There is no sprint cycle. The staging and production sites are updated 1 - 3 times a week depending on product development. You should expect to see your new translations on production in 3-7 days.

Pontoon will be synced up with [MDN repository](https://github.com/mozilla-l10n/mdn-l10n) every 20 minutes. Updating localization strings is preferably done in Pontoon, and not through pull requests in the repository.

## Testing and reporting issues

[Staging](https://developer.allizom.org/) and [production](https://developer.mozilla.org/) push take place at the same time. Localized sites will have English strings for a few days before localization is caught up. There is no public developer server at the moment.

[Bugzilla](https://bugzilla.mozilla.org/enter_bug.cgi?product=Mozilla%20Developer%20Network&component=Localization#h=detail%7Cbug) is the best way to report localization issues.

## Communication channels

* For live communication, use IRC channels: #mdndev or #mdn.
* [MDN Discussion Forum](https://discourse.mozilla-community.org/c/mdn) has recently moved away from mailing list to Discourse. Though there is no l10n category, MDN category is for discussing topics related to the MDN site. If you have a question, you can post it in the general MDN category.
* If you want to be notified for string change, one way is to check Pontoon project dashboard for pending task. Another way is by subscribing to the notification list: click the **Watch** icon on the top of [MDN GitHub repository](https://github.com/mozilla-l10n/mdn-l10n/) page and be notified about pull requests and code changes.
