# Search and filters

A string in Pontoon can be in one of these states:
* *Missing*: string is not available in the localized file.
* *Suggested*: at least one translation has been suggested for this string. Note that, in this case, the translation only exists within Pontoon database, it’s not exported to external repositories.
* *Translated*: string has an approved translation.
* *Fuzzy*: string is marked as fuzzy in the localized file. See the [glossary page](/misc/glossary.md#fuzzy) for more information about fuzzy strings.

There are some extra conditions that can be used to filter strings:
* *Has suggestions*: this will display strings that have at least one unapproved suggestion. If the string is *suggested*, it will be included in this filter. If the string is *translated* but has other translations in its history, it will be included as well. This behavior should be improved by [bug 1288956](https://bugzilla.mozilla.org/show_bug.cgi?id=1288956), differentianting unapproved suggestions from previous translations.
* *Untranslated*: this will display strings that are either suggested, missing, or fuzzy. Basically, anything but translated. Once selected, you will also notice that those 3 filters are automatically checked.
* *Unchanged*: string is identical to the reference language (normally en-US).

It’s possible to search within a project using the search field. Searches include both strings and string IDs.

![Search field](/assets/images/pontoon/search_filters/search_field.png)

By clicking on the funnel icon on the left, it’s possible to access search filters.

![Filters](/assets/images/pontoon/search_filters/filters.png)

At this point it’s possible to:
* Click directly on the description of one of the filters. This will select and activate only this filter, and the search field placeholder will change accordingly. For example, clicking on *Missing* will show only missing strings, and the placeholder will read *Search in Missing*.
* Click on the icons for each filter, or the user avatars, in order to apply multiple filters. When you hover the icons, you will notice that they transform into checkmarks. A new button *APPLY X FILTERS* will appear at the bottom of the panel, where `X` is the number of active filters.

![Multiple filters](/assets/images/pontoon/search_filters/filters_multiple.png)

In this case 3 filters are selected. Making filters selection more discoverable is covered by [bug 1377887](https://bugzilla.mozilla.org/show_bug.cgi?id=1377887).

To select a **time range**, you need to click *EDIT RANGE*, then either pick one of the defaults (30 days, 7 days, 24 hours, 60 minutes), or use the date picker (or slider) to adapt the range. Click on *SAVE RANGE* to store the range, then apply the filter.
