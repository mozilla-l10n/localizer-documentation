# Translation resources

## Machinery

Pontoon features built-in access to different translation memories. These resources are available in the workspace and in a [standalone web page](https://pontoon.mozilla.org/machinery/).

When translating, click on any machinery entry to auto-fill the editing space with the selected translation.

### History tab

The history tab shows all of the suggestions and translations that have been submitted for the current source string.

In the tab, the number of available entries is visible alongside the `HISTORY` title. The history entries are located below the tab.

![History tab](/assets/images/pontoon/resources/history.png)

On the left side, above the entry, the name of the translator is visible in gray (linking to their profile), while how long ago the entry was submitted is displayed in green (full date and time is available as a tooltip). Below this information, the translation or suggestion is displayed.

To the right of the entry, a circle icon indicates the status of the entry (see [string states](search_filters.md)). By clicking the trashcan icon, a translator can remove the entry from the string’s history.

If there are multiple suggestions for one string, it’s possible to use the `SHOW DIFF` link displayed on the right side of the suggestion: it will compare the selected suggestion to the current content of the editing area (approved translation, or most recent suggestion), highlighting in green all added text, in red all removed text. `HIDE DIFF` will display the original string.

![Diff for suggestions](/assets/images/pontoon/resources/suggestions_diff.png)

### Machinery tab

The Machinery tab shows possible translations from a variety of sources. These sources include Pontoon’s internal translation memory, external translation memories, machine translation engines, and other external sources.

In the tab, the number of available entries is visible alongside the `MACHINERY` title.

![Machinery tab](/assets/images/pontoon/resources/machinery.png)

Below the tab, there is a machinery search bar (highlighted in red). A translator can enter text into the search bar to search for any strings in the machinery resources that may be similar. The search does not need to be related to the current project string.

Above the entry, a diff view between the current source string and the source string from the machinery resource is visible. Text highlighted in red indicates text that is present in the source string but not in the machinery string, while text highlighted in green indicates the opposite (text available only in the machinery string).

To the right of the entry, the number in green shows the percent match between the machinery string and the source string. The higher the percentage, the more likely the machinery is to be useful. The machinery source is listed in gray. Upon clicking the gray text, the machinery source will be opened in a new window. The green superscript to the right indicates the number of matches for the entry in the translation memory source.

Note that when using the machinery tab, entry source string may not match the project source string and translations may not be fluent under the context of the project string. Be aware of the meaning and purpose of each string when using the machinery tab.

#### Stand-alone Machinery

Pontoon machinery is available also as a stand-alone webpage. To access the standalone machinery, navigate to the projects or teams page by selecting `All` or `Current` from the main toolbar. Read how to navigate the main toolbar in the [user interface](ui.md#main-toolbar) documentation.

From the projects or teams page, use the navigation bar to select machinery. This will take you to the [Machinery page](https://pontoon.mozilla.org/machinery/).

![navigation bar](/assets/images/pontoon/resources/nav_inside.png)

To use the machinery, select the target locale from the dropdown menu to the right of the searchbar. Then input the English source string into the searchbar and press enter. This will display all matching machinery entries. Information is organized exactly as in the translation workspace.

### Locales tab

The locales tab shows approved translations from Pontoon projects in other locales.

In the tab, the number of entries is visible alongside the `LOCALES` title.

![Locales tab](/assets/images/pontoon/resources/locales.png)

Next to the title, the number of available entries is visible. The number of preferred locales is in green and the locales that are not listed as preferred are listed in gray.

To add a locale to the preferred locale list, access the [user settings](users.md#user-settings) page.

Entries in the `LOCALES` tab above the green line are preferred locales. Entries below the green line are not preferred locales.

At the left of the entry, The translation for the source string in the selected locale is visible. At the right of the entry, the language name is visible in gray, while the locale code is displayed in green.

The locales tab is useful for seeing what general style choices are made by other localization communities. When encountering a difficult string, a translator can reference the methods that have been used by other languages in making a stylistic decision.

Note that when using the locales tab the translator should always opt for fluency in the working locale. Languages vary linguistically on many levels. The locales tab can be extremely useful, but should be used carefully, and rarely as the sole translation resource for translation.

## Mass actions

Translators can perform mass actions on batches of strings by clicking on the square to the left of any string in the sidebar. When clicked, the square will show a checkmark and the editing space will show the mass action window.

![Mass action window](/assets/images/pontoon/resources/mass_action.png)

At the top-left of the mass action window, the translator can return to the editing space by clicking on the `x` icon. To the right of the exit icon, the number of strings currently selected is displayed. At the top-right of the mass action window, the translator can select all of the strings in the sidebar.

In the `REVIEW TRANSLATIONS` section, the translator can approve suggestions or remove approved translations for all selected strings. Upon clicking `APPROVE ALL`, the text in the green button will be replaced with the number of new approved translations.

In the `REPLACE IN TRANSLATIONS` section, the translator can input a series of characters to search for, and a series of characters to use as a replacement. This is a basic find and replace feature that will work only on the selected strings.

Note that mass actions are only available to users with [translators rights](users.md#user-roles).

## Keyboard shortcuts

While working in the translation workspace, keyboard shortcuts can be used for a mouseless translation experience. Click the keyboard icon in the translation workspace to show a complete list of available keyboard shortcuts.

![Keyboard shortcuts](/assets/images/pontoon/resources/shortcuts.png)

## Download and upload translations

Pontoon features the ability to download and upload translations, including translation memories. To access these features, click on your user icon in the top-right section of Pontoon. Note that you must be in the translation workspace for the download/upload options to display in the dropdown menu.

![Profile dropdown menu](/assets/images/pontoon/resources/profile_menu.png)

Note that only translators can download a translation memory (.tmx) and translations, or upload translations. When downloading translations, the resource currently selected is downloaded in its original format, it’s not converted.
