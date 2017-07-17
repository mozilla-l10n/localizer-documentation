# Teams and projects

The [Teams page](https://pontoon.mozilla.org/teams/) lists all locales that are enabled in Pontoon. From here you can access a specific [Team page](#team-page), where you’ll get a list of all projects enabled for the requested locale. Selecting a project from the *Team page* will take you to what is called the [Localization page](#localization-page).

From each locale’s *Team page* it’s also possible to [request a project](#requesting-a-project), that is asking to add that locale to a project already available in Pontoon, not asking to support localization for a brand new project.

The [Projects page](https://pontoon.mozilla.org/teams/) lists all projects that are available in Pontoon. From here you can access the list of locales that are enabled for the requested project. This is called a [Project page](#project-page) in Pontoon. By selecting a locale in the *Project page* you access the [Localization page](#localization-page).

The following diagram shows how these pages are organized and connected to each other:

![Team and project pages flow](/assets/images/pontoon/teams_projects/page_flow.png)

## Team page

You can access a team’s page by selecting it from the [Teams page](https://pontoon.mozilla.org/teams/) or by appending `/YOUR_LOCALE_CODE` to the URL, e.g. `https://pontoon.mozilla.org/it` for Italian.

This is a screenshot of the [Italian team page](https://pontoon.mozilla.org/it):

![Team page for Italian](/assets/images/pontoon/teams_projects/team_page.png)

The page header contains linguistic information about the current locale (plural form, writing direction, etc.), plus an indication of the overall status of completion and statistics.

![Header of team page for Italian](/assets/images/pontoon/teams_projects/team_page_header.png)

There are 4 tabs available (highlighted in red), 5 if you’re an *admin* or *manager*:

* **Projects**: a list of all projects enabled in Pontoon for this locale.
* **Contributors**: a list of active contributors with their statistics, filterable by time (all time, 1/3/6/12 months).
* **Bugs**: a list of open bugs for this locale, retrieved from [Bugzilla](https://bugzilla.mozilla.org/).
* **Info**: information about the team. This is currently only editable by administrators.
* **Permissions**: manage user permissions (see [this document](users.md#managing-permissions) for details).

Hovering a project in the list will replace the progress bar with a set of detailed statistics (untranslated strings, missing strings, etc.). Note that all these numbers are links, so you can use them to open the project with a filter already enabled, for example to display only missing strings. You can click on the number of total strings to access *All Resources* (i.e. all strings in all files) for this project.

![Project hover](/assets/images/pontoon/teams_projects/project_hover.png)

### Requesting a project

It’s possible to request a project from a locale’s *Team page*.

![Request a project](/assets/images/pontoon/teams_projects/request_project.png)

Click on *REQUEST MORE PROJECTS* (highlighted in red), select the project you want to add and then click *REQUEST NEW PROJECT* (you need to select at least one project for the button to be displayed).

![Request a project](/assets/images/pontoon/teams_projects/request_project_selected.png)

An email will be sent to Pontoon’s administrators, and the localization driver in charge of the project will act on the request. Please note that:
* Some projects have a closed list of supported locales, meaning that you can’t request the project on Pontoon.
* Some projects can be requested but eventually not enabled, because of practical restrictions related to the project itself (e.g. lack of support for the locale in iOS).

## Project page

You can access a project’s page by selecting it from the [Projects page](https://pontoon.mozilla.org/projects/).

This is a screenshot of the [Mozilla.org project page](https://pontoon.mozilla.org/projects/mozillaorg/):

![Project page for Mozilla.org](/assets/images/pontoon/teams_projects/project_page.png)

The page header contains useful information about the current project:
* **Priority**: it goes from 5 stars (highest priority) to 1 star (lowest priority).
* **Deadline**: set only for some projects, it indicates when the translation is due.
* **Repository**: link to the repository storing translations for this project.
* **Resources**: links to useful external resources. Custom links can be defined for each project.
* **Contact person**: localization driver in charge of this project.

It also includes an indication of the overall status of completion and statistics across all enabled languages.

![Header of project page for Mozilla.org](/assets/images/pontoon/teams_projects/project_page_header.png)

There are 3 tabs available (highlighted in red):

* **Teams**: a list of all locales enabled in Pontoon for this project.
* **Contributors**: a list of active contributors with their statistics, filterable by time (all time, 1/3/6/12 months).
* **Info**: information about this project.

## Localization page

You can access a project’s *Localization page* in two ways:
* By selecting it from the [Team page](#team-page).
* By selecting it from the [Project page](#project-page).

The page header contains useful information about the current project (same as the [Project page](#project-page)).

![Header of localization page](/assets/images/pontoon/teams_projects/localization_page_header.png)

There are 4 tabs available (highlighted in red):
* **Resources**: files available in the project.
* **Contributors**: a list of active contributors with their statistics, filterable by time. Unlike the tab available in the *Team page*, this only includes contributions to localization of the project for the current locale.
* **Project info**: information about the project.
* **Team info**: same content as the *Info* tab in the *Team page*.
