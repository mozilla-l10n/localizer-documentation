# Example workflow

<!-- toc -->

## AB workflow

This workflow utilizes the full power of Pontoon’s online translation features. It assumes that at least two translators are available for the project; however, this workflow can be completed by a single translator in an **AA workflow** performing each phase or by multiple translators in an **ABC<sub>n</sub> workflow** repeating Phase 3.

### Phase 1: translation

#### Translator A

1. Log in to Pontoon.
2. Browse to the [project](teams_projects.md).
3. Using [filters](search_filters.md) select `Missing` to display only the strings currently missing a translation, marked as [fuzzy](glossary.md#fuzzy) or containing errors.
4. Access personal settings by clicking on the gear icon below the editing field and turn on `Make suggestions`.<br>Note that new volunteers who have not yet been granted the [Translator role](users.md#user-roles) will only have the ability to `Make suggestions`, which will be enabled by default
5. For each string, type a translation and save it with the blue `SUGGEST` button. The string will be recorded under the `HISTORY` tab. Each string submitted shows the name of the author and when it was saved.

General notes:
* Rely on Pontoon’s [translation resources](resources.md) to ensure consistency and make the translation process faster.
* If you’re using Firefox, make sure to have a [dictionary](https://addons.mozilla.org/firefox/dictionaries/) installed for your language, and that spell checking is enabled in the translation text area.

### Phase 2: review suggestions

#### Translator B

1. Log in to Pontoon.
2. Browse to the [project](teams_projects.md).
3. In [filters](search_filters.md) select `Unreviewed`, to isolate the strings previously suggested by another translator.
4. Review the suggested strings.
     * If a suggestion is acceptable, confirm it as an approved translation by clicking the green `SAVE` button or the checkmark icon near the string in the `HISTORY` tab (it turns green when hovered).
     * If a suggestion is not acceptable:
        * Reject the suggestion by clicking on the cross icon near the string (it turns red when hovered).
        * Switch to [Suggest mode](translate.md). Edit the translation in the editing space and click the blue `SUGGEST` button. Your version will `not` overwrite the translator’s work, but instead will appear at the top of the list under the `HISTORY` tab.

### Phase 3: implementing QA

#### Translator A

1. In the project, select `Unreviewed` from the filter search. Then compare your entries with those of your reviewer for changes.
2. Review the remaining strings:
    * If you agree with the changes, confirm the reviewer’s version by clicking the green `SAVE` button or the checkmark icon near the string in the `HISTORY` tab (it turns green when hovered). If you have not been granted saving privileges yet, simply do nothing and pass to the next one.
    * If you would rather suggest an alternative, type it into the editor, then hit the blue `SUGGEST` button. Then resubmit it to the reviewer from Phase 2.
    * Reject suggestions that you don’t consider suitable.

Repeat, switching translators, until a consensus is reached.
