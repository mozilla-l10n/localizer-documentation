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

### [addons-frontend](https://pontoon.mozilla.org/projects/amo-frontend)

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

The hosts for the Disco Pane are:

* Dev: `https://discovery.addons-dev.allizom.org/`.
* Staging: `https://discovery.addons.allizom.org/`.
* Production: `https://discovery.addons.mozilla.org/`.

The actual link is automatically generated and depends on the locale, operative system and version of Firefox. To get the correct production link for your system, you can open the Browser Console from Tools > Web Developer, copy and paste this code snippet in the input area at the bottom of the window, and press enter:

```
Services.urlFormatter.formatURL(Services.prefs.getCharPref("extensions.webservice.discoverURL").replace("%COMPATIBILITY_MODE%", "normal"))
```

This code reads the preference `extensions.webservice.discoverURL` from `about:config`, and replaces placeholders with the correct data for your system. For example:

* The original value of `extensions.webservice.discoverURL` is `https://discovery.addons.mozilla.org/%LOCALE%/firefox/discovery/pane/%VERSION%/%OS%/%COMPATIBILITY_MODE%`.
* If you’re using Firefox 57.0 in Italian on macOS, the resulting URL will be `https://discovery.addons.mozilla.org/it/firefox/discovery/pane/57.0a1/Darwin/normal`.
* To reach the Dev server, replace `addons.mozilla` in the domain with `addons-dev.allizom`, resulting in `https://discovery.addons-dev.allizom.org/it/firefox/discovery/pane/57.0a1/Darwin/normal`.

## Frequency of strings extraction and push schedule

Newly added strings are extracted every week after tagging, which happens at 9am PST on Tuesdays. The strings will be on the dev server and ready for localization.

For localized content:

* Dev server: once translations are committed into the repositories, they are visible on the dev server within 30 minutes (or as long as it takes to push the code).
* Staging server: `master` is tagged and pushed to staging weekly on Tuesday at around 9am PST.
* Production: the push usually starts at 9am PST every Thursday.
