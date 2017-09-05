# Addons.mozilla.org (AMO): how to localize and test

## Product at a glance

AMO refers to https://addons.mozilla.org/. It is one of Mozilla’s biggest web properties, with 12 million users per month. The product consists of three key components that require localization:

* [AMO server](https://pontoon.mozilla.org/projects/amo) is the backend component of AMO.
* [AMO frontend](https://pontoon.mozilla.org/projects/amo-frontend/) covers the top page of `about:addons` and the user-facing pages of addons.mozilla.org on Firefox for Android.
* [Discovery Pane](https://pontoon.mozilla.org/projects/amo-frontend/) is home of curated add-ons available on `about:addons`.

Product updates are deployed every Thursday to production. Localizable strings can be extracted on Tuesdays, strings localized by 5pm UTC each Tuesday go live on Thursday. To report a problem, you can use [GitHub issues](https://github.com/mozilla/addons-server/issues/new).

Now let’s take a look of these components in greater details.

## AMO and AMO frontend

### [addons-server](https://pontoon.mozilla.org/projects/amo)

**Addons-server** is the default front-end for desktop users of AMO. It is also the API backend and home to the developer hub and reviewer tools.

### [addons-frontend](https://pontoon.mozilla.org/projects/amo)

**Addons-frontend** is the default frontend for mobile user-agents, and it will eventually replace the **addons-server** frontend for user-pages.

### Test the server and the frontend

The strings will be available on Dev or Staging server at different times. See [this section](#frequency-of-strings-extraction-and-push-schedule) for details.

* Dev: https://addons-dev.allizom.org/
* Staging: https://addons.allizom.org/
* Production: https://addons.mozilla.org/

The hosts for the new frontend are the same as **addons-server**, except to display the new frontend, you either need:

* Click *View mobile site* in the footer (this will set a `mamo` cookie with the value `on` on your system).
* A Mobile user-agent string.

## Disco Pane app and editorial content

The AMO Frontend (addons-frontend) repository is also home to the Disco Pane, short for Discovery Pane. This is the site that contains curated add-ons available by typing `about:addons` in the address bar. Another way to reach it is by clicking *Tools* in the menu bar, select *Add-ons* in the dropdown menu, and click *Get Add-ons* on the left panel. While this looks like it’s part of Firefox, it’s actually a remote web page.

The content for the Disco Pane is available for translation in the [AMO (addons-server)](https://pontoon.mozilla.org/projects/amo) project.

### Test the Discovery Pane

The strings will be available on Dev or Staging server depending on when they were committed. See [this section](#frequency-of-strings-extraction-and-push-schedule) for details.

The hosts for the Disco Pane are as follows:

* Dev: https://discovery.addons-dev.allizom.org/en-US/firefox/discovery/pane/57.0/Darwin/normal
* Staging: https://discovery.addons.allizom.org/en-US/firefox/discovery/pane/57.0/Darwin/normal
* Production: https://discovery.addons.mozilla.org/en-US/firefox/discovery/pane/57.0/Darwin/normal

## Frequency of strings extraction and push schedule

Newly added strings are extracted every week after tagging, which happens at 9am PST on Tuesdays. The strings will be on the dev server and ready for localization.

For localized content:

* Dev server: once translations are committed into the repositories, they are visible on the dev server within 30 minutes (or as long as it takes to push the code).
* Staging server: `master` is tagged and pushed to staging weekly on Tuesday at around 9am PST.
* Production: the push usually starts at 9am PST every Thursday.
