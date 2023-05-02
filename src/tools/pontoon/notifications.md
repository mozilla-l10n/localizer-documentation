# Notifications

Pontoon can send internal notifications to users for specific events, or when manually triggered by Administrators.

When the user receives a notification, the bell icon near the user avatar in the top right corner will show a badge with the number of unread notifications.

![Bell icon with 1 unread notification](../../assets/images/pontoon/notifications/unread_notifications.png "Bell icon with a badge showing 1 unread notification")

Clicking the bell icon will display the last notifications in a dropdown menu.

![Dropdown notifications](../../assets/images/pontoon/notifications/notifications_dropdown.png "Dropdown menu showing 3 notifications, and the “See all Notifications” button")

Clicking `See all Notifications` at the bottom will take the user to the complete list of notifications. The same list can be also accessed by opening directly the `/notifications` URL (e.g. [pontoon.mozilla.org/notifications](https://pontoon.mozilla.org/notifications/)).

## Automated notifications

Pontoon includes several types of automated notifications, and most of them can be [manually disabled](users.md#notification-subscriptions) by users.

### New strings

This notification is triggered when new strings are added to a project. The notification is sent to all users who contributed translations to that project, as soon as new strings are available.

### Project target dates

This notification is triggered when a project is incomplete and it’s approaching the target date. The notification is sent to all users who contributed translations to that project, the first time 7 days before the target date, then again 2 days before.

### Comments

Pontoon distinguishes two types of comments:
* **Translation comments** are associated to a specific translation. These comments are displayed close to the translation itself.
* **Source strings comments** are associated to the source string. These comments are displayed in a `COMMENTS` tab in the right column.

This type of notification is sent as soon as a comment is added.

For translation comment, the recipients are:
* Authors of other translation comments associated to the same translation.
* Translation author.
* Translation reviewer.

For source strings comments, the recipients are:
* Users with translator rights for the specific project+locale, including team managers.
* Authors of translation comments.
* Authors of source string comments.
* Translation authors.
* Translation reviewers.

### New suggestions ready for review

This notification is sent once a week, and includes information about suggestions newly submitted, unapproved or unrejected over the last 7 days. Recipients include users with permissions to review these suggestions — translator and team managers — as well as the authors of previous translations or comments in the same string.

### Review actions on own suggestions

This notification is sent once a day to the author of a suggestion, to inform them that their work has been reviewed.

### New team contributors

This notification is sent to team managers, as soon as a user makes their first contribution in a locale.

## Manual notifications

Administrators can also send manual notifications to a project, including all locales or a subset of them. Unlike other types of notification, this can’t be disabled.
