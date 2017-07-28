# Translating in Pontoon

* [Translating strings](#translating-strings)
  * [Submit a suggestion](#submit-a-suggestion)
  * [Review a suggestion](#review-a-suggestion)
  * [Submit a translation](#submit-a-translation-directly)
* [Translating using the in-context Editor](#translating-using-the-in-context-editor)

## Translating strings

Three actions can be performed on strings: submit a suggestion, review a suggestion, and submit a translation directly. Availability of these actions to users depends on their [role](users.md#user-roles).

This document is simplified to demonstrate translation modes in Pontoon. Documentation includes specific pages for learning to use Pontoon’s [interface](ui.md) and [translation resources](resources.md).

### Submit a suggestion

When a translator is in Suggest Mode or doesn’t have permissions to submit translations directly, the blue `SUGGEST` button will be located to the lower-right side of the editing space.

![Blue button for suggestions](/assets/images/pontoon/translate/suggest_button.png)

To suggest a translation, the translator should simply input the translation to the editing space and click `SUGGEST`. Once the translator has suggested the translation, the string’s status will be updated from **missing** to **suggested**. This is indicated in the sidebar by the color of the checkbox next to the string.

![Sidebar after suggestion](/assets/images/pontoon/translate/sidebar_suggest.png)

A notification will appear at the top of the window, indicating that your translation has been saved.

Note that a suggested translation exists only in the Pontoon database and not in the localized file or translation memories.

#### Manually switch to suggestion mode

Even if a translator has permissions to add translations directly, submitting suggestions to be reviewed helps ensure quality. To manually switch to Suggestion Mode, click the Settings gear to the lower-left side of the editing space and click the icon to the left of `Make Suggestions` so that it becomes a green circle. The `SUGGEST` button should then appear to the lower-right side of the editing space.

![Activate make suggestions](/assets/images/pontoon/translate/activate_suggest.png)

A notification will appear at the top of the window, indicating that `Make Suggestions` has been enabled.

To switch to Review and Direct Translation Mode, go to the settings menu by clicking on the gear and turn off the `Make Suggestions` option. The green `SAVE` button should appear to the lower-right side of the editing space.

![The green save button](/assets/images/pontoon/translate/save_button.png)

### Review a suggestion

To review a suggestion, search for suggested strings or click on a suggested string in the sidebar.

If the suggested string is an acceptable translation, click on the `SAVE` button to the lower-right side of the editing space. This will set the suggested string to approved translation status and save the string to the database and to the localized file on the next sync.

If the suggested string is **not** an acceptable translation, turn on `Make Suggestions` in settings. Once the `SUGGEST` button appears on the lower-right side of the editing space, edit the suggested string as appropriate and click `SUGGEST`. This will add your translation as a new suggested string in the Pontoon database but will not save the string in the localized file. To see the old and new suggestions, click on the history tab below the editing space. To learn about the history tab and other resources, check the [Translation resources documentation](resources.md)

![History Tab](/assets/images/pontoon/translate/history_tab.png)

### Submit a translation directly

Note that it is always best practice to have a translation reviewed by another translator; however, if no reviewer is available, these instructions allow a translator to translate without review.

To submit a translation directly, search for and click on any string in the sidebar.

Ensure that the `Make Suggestions` option in settings is disabled. Then input the translation to the editing space and click `SAVE`. This will save your translation directly, without review, to the localized file.

## Translating using the in-context editor

Note that only websites that have been enabled for in-context editing will display in context in Pontoon.

To translate in context, find the string you want to translate in the in-context view and double click it or click on the pencil icon on the top-left of the string. Hovering over the string that you want to translate will highlight that string in the sidebar and in the in-context view.

![Hovering over the string will highlight in sidebar](/assets/images/pontoon/translate/hover_incontext.png)

Once you double click a string, the sidebar will display the editing space.

![Translate in-context projects in the sidebar](/assets/images/pontoon/translate/translate_in_sidebar.png)

Input your translation or review the suggestion and click `SAVE` or `SUGGEST`. Once your translation has saved, the editing space will refresh with the next string, and that string will be highlighted in the in-context view.

To return to the list of strings in the sidebar, click `BACK TO LIST` at the top-left of the sidebar.

Interactive website features will work in the in-context view. Some strings that you can see in the sidebar will not be visible in the in-context view until you activate the website feature. In the picture below, the translator has clicked on the hamburger to reveal a drop-down menu.

![Interactive Hamburger menu](/assets/images/pontoon/translate/interactive_features.png)
