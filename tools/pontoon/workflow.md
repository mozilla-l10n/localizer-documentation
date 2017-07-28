# Example Work flows

## AB workflow

This workflow utilizes the full power of Pontoon's online translation features. This workflow assumes that at least two translators are available for the project; however, this workflow can be completed by a single translator in an **AA workflow** performing each phase or by multiple translators in an **ABC<sub>n</sub> workflow** repeating Phase 3.

### Phase 1: Translation

**Translator A:**
1. Log in on Pontoon.

2. Browse for the [project](teams_projects.md).

3. From [filter](search_filters.md) select `Missing` and `Fuzzy` to list only the strings missing translation.

4. Access personal settings by clicking on the gear icon in the upper right corner, under the user image, then turn on `Make suggestions`.

Note that new volunteers who have not yet been granted approval privileges have `Make suggestions` as the only option by default.

5. For each string type a translation, then save it with the blue button `Suggest`. The string will be recored under the tab History. Each string submitted shows name of the author and saving time.

Make sure to utilize Pontoon's translation [resources](resources.md), such as `HISTORY`, `MACHINERY`, `LOCALES`, the stand alone Machinery as well as available external translation resources.

### Phase 2: Review Suggestions

**Translator B:**
1. Log in on Pontoon.

2. Browse for the [project](teams_projects.md).

3. From the [string filter](search_filters.md), select `Suggested`, to isolate the strings previously left by the translator.

4. Review the suggested strings.

 * If suggestion is acceptable, confirm it as `Translated` by clicking the green `Save` button.

 * If the suggestion is not acceptable, switch to [Suggest mode](translate.md). Edit the translation in the editing space and click the blue `Suggest` button. Your version will `not` overwrite the translator’s work, but instead will appear at the top of the list under the `History` tab.

Make sure to utilize Pontoon's translation [resources](resources.md), such as `HISTORY`, `MACHINERY`, `LOCALES`, the stand alone Machinery as well as available external translation resources.

### Phase 3: Implementing QA

**Translator A:**
1. In the project, select `Suggested` from the filter search. Then compare your entries with those of your reviewer for changes.

2. Review the remaining strings.

  * If you agree with the changes, confirm the reviewer’s version by clicking on the check icon beside it. If you have yet not been granted saving privileges, simply do nothing and pass to the next one.

  * If you would rather suggest an alternative, type it over, then hit the blue `Suggest` button. Then resubmit it to the reviewer, back in Phase 2, step 4.

Repeat, switching translators, until a consensus is reached.
