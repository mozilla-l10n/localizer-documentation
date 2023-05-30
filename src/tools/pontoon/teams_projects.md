# Teams and projects

<!-- toc -->

Pontoon organizes localizations by locale/project pairs. Pontoon's structure reflects this with separate pages for [Teams](#teams) (locales), [Projects](#projects) and [Localizations](#localization-page).

The following diagram shows how these pages are organized and connected to each other:

![Team and project pages flow](../../assets/images/pontoon/teams_projects/page_flow.png)

## Teams

### Teams page

The Teams page lists all locales that are enabled in Pontoon. It can be reached by clicking `Teams` from the navbar or by using the `/teams` URL (e.g. [pontoon.mozilla.org/teams](https://pontoon.mozilla.org/teams/)). Selecting a specific [Team page](#team-page) shows a list of all projects enabled for the requested locale. Choosing one of these projects leads to the [Localization page](#localization-page).

### Team page

You can access a specific team’s page by selecting it from the *Teams page* or by appending a locale code to the end of the Pontoon base URL with `/{LOCALE}` (e.g [pontoon.mozilla.org/it](https://pontoon.mozilla.org/it) for Italian).

The page header contains linguistic information about the current locale (plural form, writing direction, etc.), plus an indication of the overall status of completion and statistics. The statistics displayed in the rightmost column are active links to access the Localization page for all projects. For example, select `MISSING` to see all missing strings across projects enabled for that locale in Pontoon.

![Header of team page for Italian](../../assets/images/pontoon/teams_projects/team_page_header.png)

There are 5 tabs available to all roles, or 6 tabs (highlighted in red) for those with *admin* or *manager* roles:

* **Projects**: a list of all projects enabled in Pontoon for this locale.
* **Contributors**: a list of active contributors with their statistics, filterable by time (all time, last 12/6/3/1 months).
* **Insights**: contains data and trends presented in a graphical format about active users, time to review suggestions, review activity, and translation activity.
* **Bugs**: a list of open bugs for this locale, retrieved from [Bugzilla](https://bugzilla.mozilla.org/).
* **Info**: information about the team. Team managers can edit this by clicking on the Edit button.
* **Permissions**: manage user permissions (see [this document](users.md#managing-permissions) for details).

The labels and icon in the table header can be used to sort the list of projects. For example, clicking on `Priority` will sort based on project priority.

Hovering a project in the *Projects* list will replace the progress bar with a set of detailed statistics (untranslated strings, missing strings, etc.). Note that all these numbers are links, so you can use them to open the project with a filter already enabled, for example to display only missing strings. You can also click `ALL` to access *All Resources* (i.e. all strings in all files) for this project.

The rightmost column in the table will display a blue lightbulb icon if there are unreviewed strings. Note: clicking the lightbulb icon in the table header can be used to sort projects based on the number of unreviewed strings.

![Project hover](../../assets/images/pontoon/teams_projects/project_hover.png)

### Requesting a project

It’s possible to request a project from a locale’s *Team page*. Note that this is a request to add the locale to a project already available in Pontoon, not for requesting a brand new project.

![Request a project](../../assets/images/pontoon/teams_projects/request_project.png)

Click on `REQUEST MORE PROJECTS` (highlighted in red), select the project to add and then click `REQUEST NEW PROJECT` (at least one project needs to be selected for the button to be displayed).

An email will be sent to Pontoon’s administrators, and the localization driver in charge of the project will act on the request. Please note that:
* Some projects have a closed list of supported locales, meaning that these projects can't be requested on Pontoon.
* Some projects can be requested but may not be enabled for practical restrictions related to the project itself (e.g. lack of support for the locale in iOS).

## Projects

### Projects page

The Projects page lists all projects that are available in Pontoon. It can be reached by clicking `Projects` from the navbar or by using the `/projects` URL (e.g. [pontoon.mozilla.org/projects](https://pontoon.mozilla.org/teams/)). Selecting a specific [Project page](#project-page) from this list shows a list of locales that are enabled for the project. Choosing one of the locales in the *Project page* leads to the [Localization page](#localization-page).

### Project page

You can access a project’s page by selecting it from the *Projects page* (e.g. [pontoon.mozilla.org/projects](https://pontoon.mozilla.org/projects/)).

The page header contains useful information about the current project:
* **Priority**: priority from 5 stars (highest) to 1 star (lowest).
* **Target Date**: set only for some projects, it indicates when the translation is due.
* **Repository**: link to the repository storing translations for this project.
* **Resources**: links to useful external resources. Custom links can be defined for each project.
* **Contact person**: localization driver in charge of this project.

It also includes an indication of the overall status of completion and statistics across all enabled languages.

![Header of project page for Mozilla.org](../../assets/images/pontoon/teams_projects/project_page_header.png)

There are up to 5 tabs available to all roles, or 6 tabs (highlighted in red) for those with *admin* roles:

* **Teams**: a list of all locales enabled in Pontoon for this project.
* **Tags**: a list of tags defined for this project. This tab will be visible only in projects where tags are enabled. For more information about tags, see [this page](search_filters.md#tags).
* **Contributors**: a list of active contributors with their statistics, filterable by time (all time, last 12/6/3/1 months).
* **Insights**: contains data and trends presented in a graphical format about review activity and translation activity.
* **Info**: information about this project.
* **Notifications**: contains functionality to notify those who have contributed to this project for defined locales.

### Requesting a language

It’s possible to request an additional language for some projects from its *Project page*.

![Request a project](../../assets/images/pontoon/teams_projects/request_locale.png)

Click on *REQUEST NEW LANGUAGE* (highlighted in red), select the language to add and then click *REQUEST NEW LANGUAGE*.

An email will be sent to Pontoon’s administrators, and the localization driver in charge of the project will act on the request. The same restrictions described in the [Requesting a project](#requesting-a-project) section apply here.

## Localization page

You can access a project’s *Localization page* in two ways:
* By selecting it from the [Team page](#team-page).
* By selecting it from the [Project page](#project-page).

The page header contains useful information about the current project (same as the [Project page](#project-page)).

![Header of localization page](../../assets/images/pontoon/teams_projects/localization_page_header.png)

There are 6 tabs available (highlighted in red):
* **Resources**: files available in the project.
* **Tags**: a list of tags defined for this project. This tab will be visible only in projects where tags are enabled. For more information about tags, see [this page](search_filters.md#tags).
* **Contributors**: a list of active contributors with their statistics, filterable by time. Unlike the tab available in the *Team page*, this only includes contributions to localization of the project for the current locale.
* **Insights**: contains data and trends presented in a graphical format about review activity and translation activity.
* **Project info**: information about the project.
* **Team info**: same content as the *Info* tab in the *Team page*.

In addition to the *Localization page* for each locale/project pair, there is also a special Localization page that allows access to all resources for all projects enabled for a specific locale. This can be accessed from the `/{LOCALE}/all-projects/all-resources` URL (e.g. [pontoon.mozilla.org/it/all-projects/all-resources](https://pontoon.mozilla.org/it/all-projects/all-resources) for Italian).
