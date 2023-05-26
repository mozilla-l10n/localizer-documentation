# Profile page

The goal of the profile page in Pontoon is to provide a tool to showcase contributions, display useful contact information about the user, and help locale managers to organize and grow their communities. The profile page can be reached by clicking the avatar icon in the top right corner, and then clicking the profile picture in the dropdown menu, or by using the `/profile` URL (e.g. [pontoon.mozilla.org/profile](https://pontoon.mozilla.org/profile)).

The left column includes information about the user:
* Profile picture and name.
* Contact details.
* Roles in Pontoon (a user can have multiple roles across different locales).
* Information on last known activity (when the user has submitted or reviewed a translation), last login in Pontoon, and the account’s creation date.

Users can customize their information and the visibility of specific fields in the [settings page](users.md#user-settings) (reachable using the `CHANGE SETTINGS` button).

In the top central section there are two graphs:
* **Approval rate** shows the ratio between the number of translations approved and the total number of translations reviewed, excluding self-approved translations.
* **Self-approval rate** is only visible for users with translator rights, and shows the ratio between the number of translations submitted directly — or self-approved after submitting them as suggestions — and the total number of translations approved.

![Approval rate graph](../../assets/images/pontoon/profile/approval_graph.png "Screenshot of the approval rate graph")

If both graphs are available, it’s possible to switch between them using the selector at the bottom (highlighted in red in the image above)

Right below these graphs, there is a section showing a graphical representation of the user’s activity in the last year. Each square represents a day, while each row represents a day of the week. The lighter the color, the higher the number of contributions on that day.

![Activity graph](../../assets/images/pontoon/profile/activity_graph.png "Screenshot of the activity graph")

By default, the chart will show data for **all contributions** over the last year, but it’s also possible to limit the chart to:
* Submissions.
* Reviews performed.
* Reviews received.
* Submissions and reviews.

The *activity log* below this chart will display the user’s activity in more detail for the last month. Clicking on a specific square (day) in the chart will only show the activity for that day. Each line item in the activity log is a link that allows to jump to those specific strings in the translation editor.
