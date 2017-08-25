# Addons.mozilla.org (AMO): how to localize and test

## Product at a glance

AMO refers to https://addons.mozilla.org/. It is one of Mozilla’s biggest web properties, with 12 million users per month. The product consists of three key components that require localization:

* [AMO server](https://pontoon.mozilla.org/projects/amo) is the backend component of AMO.
* [AMO frontend](https://pontoon.mozilla.org/projects/amo-frontend/) covers the top page of `about:addons` and the user-facing pages of addons.mozilla.org on Firefox for Android.
* [Discovery Pane](https://pontoon.mozilla.org/projects/amo-frontend/) is home of curated add-ons available on `about:addons`.

Product updates are deployed every Thursday to production. Localizable strings can be extracted on Tuesdays, and changes landed by 5pm UTC each Tuesday go live on Thursday. To report problem, you can use [GitHub issues](https://github.com/mozilla/addons-server/issues/new).

Now let’s take a look of these components in greater details.

## AMO and AMO frontend

### [addons-server](https://pontoon.mozilla.org/projects/amo)

**Addons-server** is the default front-end for desktop users of AMO. It is also the API backend and home to the developer hub and reviewer tools.

### [addons-frontend](https://pontoon.mozilla.org/projects/amo)

**Addons-frontend** is the new frontend and default frontend for mobile user-agents. It will eventually replace the **addons-server** frontend for user-pages. **Addons-frontend** currently provides an AMO app (amo.po).

### Test the server and the frontend

The strings will be available on Dev or Staging server depending on when they were committed. See [this section](#frequencies-of-newly-extracted-strings-and-landing-of-newly-localized-strings) for details.

* Dev: https://addons-dev.allizom.org/
* Staging: https://addons.allizom.org/
* Production: https://addons.mozilla.org/

The hosts for the new frontend are the same as **addons-server**, except to be routed to the new frontend, you either need:

* * Setting a `mamo` cookie with the value `on` by clicking *View mobile site* in the footer.
* A Mobile user-agent string.

## Disco Pane app and editorial content

The AMO Frontend (addons-frontend) repo is also home to the Disco Pane, short for Discovery Pane app (disco.po). This is the site that contains curated add-ons available by typing `about:addons` on the address bar. Another way to get to the same place is by clicking *Tools* on the navigation, select *Add-ons* in the dropdown menu, and click *Get Add-ons* on the left panel. While this looks like it’s part of Firefox, it’s actually a webpage served from [here](https://discovery.addons.mozilla.org).

The content for the Disco Pane comes from the API. To translate it, you will need to look in [AMO (addons-server)](https://pontoon.mozilla.org/projects/amo) project.

### Test the Discovery Pane

The strings will be available on Dev or Staging server depending on when they were committed. See [this section](#frequencies-of-newly-extracted-strings-and-landing-of-newly-localized-strings) for details.

The hosts for the Disco Pane are as follows:

* Dev: https://discovery.addons-dev.allizom.org
* Staging: https://discovery.addons.allizom.org
* Production: https://discovery.addons.mozilla.org

## Frequencies of newly extracted strings and landing of newly localized strings

Newly added strings are extracted every week after tagging, which is at 9am PST on Tuesdays. The strings will be on staging and ready for localization.

For localized content:

* Dev server: once translations are committed into the repositories, they are visible on the dev server in 30 minutes (or as long as it takes to push the code).
* Staging server: the master is tagged and pushed to staging weekly on Tuesday at around 9am PST.
* Production: the push usually starts at 9am PST every Thursday.

## Advanced Configuration for testing strings from addons-frontend

The above instruction is sufficient for basic localization testing. If you need to test strings related to the install buttons, you will need to enable preferences to allow add-on installation to work on the development and stage servers.

To fully configure Firefox to install add-ons on either dev or stage server, you will need to do the following:

* Use Firefox Nightly or Firefox Developer Edition.
* A new profile is recommended since changing the dev certs will mark existing add-on installs as invalid (this change is not immediate).
* Go to `about:config` and set `extensions.webapi.testing` as a Boolean to `true`.
* To install an add-on, you will need to be able to install a signed add-on from dev or stage. Create the `xpinstall.signatures.dev-root` pref in `about:config` as a Boolean and set it to `true`.
* For Disco Pane: go to `about:config` and change the host in `extensions.webservice.discoverURL` to `https://discovery.addons-dev.allizom.org/` for Dev server or `https://discovery.addons.allizom.org/` for Staging server.
* If you see warnings when trying to install a theme or theme previews don't work, go to `about:preferences#security` and add an exception for dev or stage. You can do so by clicking the `Exceptions` button after selecting Privacy & Security on left panel.
* Restart the browser.
