# Translating in Pontoon

* [Translating Strings](#translating-strings)
  * [Submit a Suggestion](#submit-a-suggestion)
  * [Review a Suggestion](#review-a-suggestion)
  * [Submit a Translation](#submit-a-translation-directly)
* [Translating in the In-context Editor](#translating-in-the-wysiwyg-editor)

## Translating Strings

Three string actions can be performed: submit a suggestion, review a suggestion, and submit a translation directly. The level to which a user can translate a string is dependent upon their user role (Read about user roles [here](user.md)).

*This documentation is simplified to demonstrate translation modes in Pontoon. Click [here](ui.md) to learn how to use the Pontoon interface and [here](resources.md) to learn about Pontoon's translation resources.*

### Submit a Suggestion

When a translator is in Suggest Mode, the blue 'Suggest' button will be located to the lower-right side of the editing space.

![Blue button for suggestions](/assets/images/pontoon/translate/suggest_button.png)

To suggest a translation, the translator should simply input the translation to the editing space and click `Suggest`. Once the translator has suggested the translation, the string's status will be updated from "missing" to suggested. This is indicated in the sidebar by the color of the checkbox next to the string.

![Checkbox before suggestion](/assets/images/pontoon/translate/sidebar_presuggest.png) ![Checkbox after suggestion](/assets/images/pontoon/translate/sidebar_postsuggest.png)

A notification will appear at the top of the window, indicating that your translation has been saved.

![Translation saved notification](/assets/images/pontoon/translate/translation_saved_notif.png)

*Note that a suggested translation exists only in the Pontoon database and not in the localized file or translation memories.*

#### Manually Switch to Suggestion Mode

To manually switch to Suggestion Mode, click the Settings gear to the lower-left side of the editing space and click the icon to the left of 'Make Suggestions' so that it becomes a green circle. The `Suggest` button should then appear to the lower-right side of the editing space.

![Editing space settings](/assets/images/pontoon/translate/suggest_settings.png) ![Activate make suggestions](/assets/images/pontoon/translate/activate_suggest.png)
![Make suggestions activated](/assets/images/pontoon/translate/activated_suggest.png)

A notification will appear at the top of the window, indicating that `Make Suggestions` has been enabled.

![Translation saved notification](/assets/images/pontoon/translate/translation_saved_notif.png)

To switch to Review and Direct Translation Mode, go to the Settings menu by clicking on the gear and turn off the `Make Suggestions` option. The green `Save` button should appear to the lower-right side of the editing space.

![The green save button](/assets/images/pontoon/translate/save_button.png)

### Review a Suggestion

To review a suggestion, search for suggested strings or click on a suggested string in the sidebar.

If the suggested string is an acceptable translation, click on the `Save` button to the lower-right side of the editing space. This will approve the suggestion as a translation and save the string to the localized file.

If the suggested string is **not** an acceptable translation, turn on `Make Suggestions` in settings. Once the `Suggest` button appears on the lower-right side of the editing space, edit the suggested string as appropriate and click `Suggest`. This will update the suggested string in the Pontoon database but will not save the string in the localized file. To see the old and new suggestions, click on the history tab below the editing space.

![History Tab](/assets/images/pontoon/translate/history_tab.png)

### Submit a Translation Directly

*Note that it is always best practice to have a translation reviewed by another translator; however, if no reviewer is available, these instructions allow a translator to translate without review.*

To submit a translation directly, search for and click on any string in the sidebar.

Ensure that the `Make Suggestions` option in `Settings` is disabled. Then input the translation to the editing space and click `Save`. This will save your translation directly, without review, to the localized file.

## Translating in the In-context Editor

*Note that only websites that have been enabled for in-context editing will display in context in Pontoon*

To translate in context, find the string you want to translate in the in-context view and double click it or click on the pencil icon on the top-left of the string. Hovering over the string that you want to translate will highlight that string in the sidebar and in the in-context view.

![Hovering over the string will highlight in sidebar](/assets/images/pontoon/translate/hover_incontext.png)

Once you double click a string, the sidebar will display the editing space.

![Translate in-context projects in the sidebar](/assets/images/pontoon/translate/translate_in_sidebar.png)

Input your translation or review the suggestion and click `Save` or `Suggest`. Once your translation has saved, the editing space will refresh with the next string, and that string will be highlighted in the in-context view.

To return to the list of strings in the sidebar, click `Back To List` at the top-left of the sidebar.

Interactive website features will work in the in-context view. Some strings that you can see in the sidebar will not be visible in the in-context view until you activate the website feature. In the picture below, the translator has clicked on the hamburger to reveal a drop-down menu.

![Interactive Hamburger menu](/assets/images/pontoon/translate/interactive_features.png)
