# Example workflow

## AB workflow

This workflow utilizes the full power of Pontoon’s online translation features. It assumes that at least two translators are available for the project; however, this workflow can be completed by a single translator in an **AA workflow** performing each phase or by multiple translators in an **ABC<sub>n</sub> workflow** repeating Phase 3.

### Phase 1: translation

#### Translator A

1. Log in to Pontoon.
2. Browse to the [project](teams_projects.md).
3. Using [filters](search_filters.md) select `Missing` to display only the strings currently missing a translation, marked as [fuzzy](glossary.md#fuzzy) or containing errors.
4. Access personal settings by clicking on the gear icon below the editing field and turn on `Make suggestions`.<br>Note that new contributors who have not yet been granted [Translator permissions](users.md#user-roles) will only have the ability to `Make suggestions`, which will be enabled by default.
5. For each string, type a translation and save it with the blue `SUGGEST` button. The string will be stored and displayed under the editor. Each translation submitted shows the name of the author and when it was saved.
    * If something is unclear or there is a question about the source string, use a [source string comment](glossary.md#comment) to ask the [Project manager](users.md#user-roles).

General notes:
* Rely on Pontoon’s [translation tools](ui.md/#translation-tools-and-comments) to ensure consistency and make the translation process faster.
* When using Firefox, make sure to have a [dictionary](https://addons.mozilla.org/firefox/dictionaries/) installed for the translation language, and that spell checking is enabled in the translation text area.

### Phase 2: review suggestions

#### Translator B

1. Log in to Pontoon.
2. Browse to the [project](teams_projects.md).
3. In [filters](search_filters.md) select `Unreviewed`, to isolate the strings previously suggested by another translator.
4. Review the suggested strings.
     * If a suggestion is acceptable:
        * Confirm it as an approved translation by clicking the green `SAVE` button or the checkmark icon near the string in the list below the editor (it turns green when hovered).
     * If a suggestion is not acceptable:
        * Switch to [Suggest mode](translate.md). Edit the translation in the editing space and click the blue `SUGGEST` button. The newly suggested version will **not** overwrite the translator’s work, but instead will appear at the top of the list under the editor.
     * Use [translation comments](glossary.md#comment) to discuss a translation with the other translator. For example, discussing possible alternate translations or asking questions when something isn’t clear.

### Phase 3: implementing QA

#### Translator A

1. In the project, select `Unreviewed` from the filter search. Then compare the initial entries with those of the reviewer for changes.
2. Review the remaining strings:
    * If in agreement, confirm the reviewer’s version by clicking the green `SAVE` button or the checkmark icon near the string in the list below the editor (it turns green when hovered).
    * If suggesting an alternative, type it into the editor, then hit the blue `SUGGEST` button. Then resubmit it to the reviewer from Phase 2.
    * Reject suggestions not considered suitable by clicking on the cross icon near the string (it turns red when hovered).
    * If Translator A does not have the *Translator* or *Team manager* role, they will be unable to confirm or reject a suggestion. In that case, use [translation comments](glossary.md#comment) to discuss the translation with the reviewer.

Repeat, switching translators, until a consensus is reached.
