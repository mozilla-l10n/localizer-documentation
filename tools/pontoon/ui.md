# Understanding the Pontoon user interface

## Pontoon translation workspace

Pontoon’s translation workspace features the list of strings in the left sidebar and the editing space on the right.

![Translation Workspace](/assets/images/pontoon/ui/translation_workspace.png)

### Main toolbar

The main toolbar allows you to navigate between projects without leaving the translation workspace.

![main toolbar](/assets/images/pontoon/ui/main_toolbar.png)

To navigate to another project, click on each item to open the drop-down menu and select the locale, project, and resource to work on. Then click `Go`. Note that the button will get a green background as soon as you change one of the items.

![Navigating in the main toolbar](/assets/images/pontoon/ui/main_nav.png)

Clicking `All` or `Current` in the drop-down menu might navigate away from the translation workspace:
* In the `Project` section, `All Projects` links to the *Projects page*, while `Current Project` links to the *Project page* for the current project.
* In the `Resources` section, `All Resources` will display string for all files in the projects, while `Current Localization` links to the *Localization page*.

More information on how pages are organized in Pontoon is available in [this document](teams_projects.md).

An overview of the status of the selected resource is located to the right of the main toolbar. Translators can view the overview in detail by clicking it once.

![Expanded String Overview](/assets/images/pontoon/ui/string_overview.png)

A project information icon is located to the right of the string overview. Translators can view information regarding the project, its priority level, and testing by clicking the icon.

The notifications icon is located on the right side of the main toolbar. Translators will be notified of any important updates regarding the current project. By clicking the bell icon, translators can view notifications in more detail or see all active notifications.

The profile menu is located at the far right of the main toolbar. Clicking the profile image will reveal the drop-down menu. From this menu, translators can perform several actions, like navigate to their profile page, download and upload translations, etc. For information about uploads, downloads, and Machinery, click [here](resources.md).

![Profile menu](/assets/images/pontoon/ui/profile_menu.png)

Note that some profile menu items are restricted by [user rights](users.md).

### Sidebar

The sidebar displays the list of strings in the current project resource. Each string is displayed with the string status (i.e. *Missing*, *Translated*, etc.) identified by a colored square, the source string, and the approved translation or the most recent suggestion if available.

![Sidebar](/assets/images/pontoon/ui/sidebar.png)

At the top of the sidebar, the translator can access Pontoon’s [search and string filters](search_filters.md).

Note that the sidebar toggles between the strings and the editing space when in the in-context editor.

### Translation workspace

The translation workspace is where strings are translated.

![Translation workspace](/assets/images/pontoon/ui/workspace_standard.png)

A translator can navigate sequentially by clicking the `PREVIOUS` or `NEXT` buttons located at the top of the workspace or by using keyboard shortcuts (`ALT` + arrow down or up).

In the upper section of the workspace, the translator can view the source string, any comments regarding the string, and the resource path where the string is located.

The editing space is located in the lower section of the workspace. The translator can edit the translation or suggestion in the text editor.

When working on l20n files, the editing space will look a bit different.

![Translation workspace for l20n files](/assets/images/pontoon/ui/workspace_l20n.png)

When working on l20n files, the string has 2 attributes: `value` and `title`. Both are displayed in the source section (highlighted in red), and available as separate input fields in the editing area (highlighted in orange).

To the lower-right side of the workspace, the translator can `COPY` the source string to the editor, `CLEAR` the area where translations are typed, and `SUGGEST` or `SAVE` the translation by clicking the corresponding button.

To the lower-left side, a translator can access the workspace settings, keyboard shortcuts, and view the number of characters in the target and source string.

By clicking the gear icon, the translator can activate or deactivate `Quality Checks` or `Make Suggestions` and navigate to their user settings.

![Settings menu](/assets/images/pontoon/ui/settings.png)

Note that access to certain settings may be restricted by [user rights](users.md).

By clicking the keyboard, a translator can view the workspace keyboard shortcuts.

![Keyboard Shortcuts](/assets/images/pontoon/ui/shortcuts.png)

### Pontoon workspace resources

Built-in translation resources are located below the editing space. The three integrated resources are `HISTORY`, `MACHINERY`, and `LOCALES`.

![Translation Resources](/assets/images/pontoon/ui/resources.png)

Learn how to use Pontoon’s [translation resources](resources.md).

## Pontoon in-context editor

Pontoon’s in-context editor displays the translatable strings as they appear on the web page, alongside the editing space. This means that translators can see where the source string appears and how the translation looks in real time. Pontoon’s in-context editor shows the strings in context on the right with the translation workbench on the left

![in-context editor](/assets/images/pontoon/ui/incontext_edit.png)

When using the in-context editor, the sidebar features both string navigation and the editing space. To view the editing space, double click on a string. To return to string navigation, click `BACK TO LIST` at the top-left of the sidebar.
