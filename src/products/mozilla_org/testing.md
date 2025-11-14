# Testing Mozilla.org & Firefox.com

<!-- toc -->

In mid-2025, firefox.com was spun off from mozilla.org. While mozilla.org continues to serve as the umbrella site for all Mozilla products — highlighting the organization’s mission, vision, and values, and promoting initiatives and campaigns, firefox.com is evolving into a product-centric site focused on the Firefox browsers, featuring download links, product highlights, and enterprise information. Both sites are highly visible, and their localized versions reach more than 60% of Mozilla users globally. It’s therefore critical that not only the main pages are localized, but that they are also thoroughly tested before going live in production. This document primarily focuses on mozilla.org. There will be a designated page for firefox.com once the site is fully transformed into its new design.

It’s highly advised you to ask other community members to conduct peer review not only on Pontoon, but on staging and production. While not all the languages are required for certain projects, each community can opt in the projects at a later time.

## Key links

For Mozilla.org:

* Production: https://www.mozilla.org/{locale_code}/
* Staging: https://www-dev.allizom.org/{locale_code}/
* Repository: https://github.com/mozilla-l10n/www-l10n
* Pontoon: https://pontoon.mozilla.org/projects/mozillaorg/

For Firefox.com:

* Production: https://www.firefox.com/{locale_code}/
* Staging: https://www-dev.springfield.moz.works/{locale_code}/
* Repository: https://github.com/mozilla-l10n/www-firefox-l10n
* Pontoon: https://pontoon.mozilla.org/projects/firefoxcom/

## What to test

### Pre-l10n test

* Have your [glossary](https://transvision.flod.org/) available as a reference, select mozilla.org or firefox.com as Repository, your language as your Target Locale.
* For terminology consistency, reference the product or site that the page is for, assuming the product or site is localized (e.g.: Firefox, Monitor).
* Have the matching US page up as reference, though some strings may not be identical due to A/B testing.
* Have the project you just localized available for editing in Pontoon.

### Linguistic testing

* Translation quality in context.
* Grammar correctness in context.
* Truncation: button text should remain inside the button.
* Header line break wraps at proper place.
* Text not overlapping graphic.
* Terminology consistent with product across web pages.
* Brand names remain in English, with a few exceptions due to [declension](https://mozilla-l10n.github.io/styleguides/mozilla_general/index.html#declensions). Check out [these detailed guidelines](https://mozilla-l10n.github.io/styleguides/mozilla_general/index.html#brands-copyright-and-trademark) when working with brands and trademarks.
* Product names comply to Mozilla guideline and adhere to what the community has agreed to.
* No corrupted characters.
* Click the links on the page to navigate to localized pages in the same language. If a page is not localized, you will be redirected based on your language preference settings (e.g., Fulah > French > English). If no preferences are set, the default is en-US.
* Navigation terms consistent with the page titles they are linked to (except when the navigation term is shortened due to space limitation).
* Footer links don’t overlap with one another.

You can make linguistic changes directly in both [mozilla.org](https://pontoon.mozilla.org/projects/mozillaorg/) and [firefox.com](https://pontoon.mozilla.org/projects/firefoxcom/) projects in Pontoon.

### Functionality testing

* Click the download link, you should be able to download the product in your language, if it is localized, such as Firefox.
* Font support and readability.
* Footer: verify that the translation of the link is coherent and the link is functional.
* Language list: is your language listed as one of the options? Check https://www-dev.allizom.org/firefox/all/ (redirects to https://www.firefox.com/download/all/) to confirm. See [detailed steps below](#firefoxallftl) to get to the language list.
* Error page: deliberately type a broken link, such as https://www-dev.allizom.org/firefox/neu/, check whether [404 page](https://www-dev.allizom.org/404/) is localized.
* If your language is RTL, make sure that the page layout and text flow in the correct directions.

### Compatibility testing:

* Test the page layout in other major browsers and on other platforms.
* Test the page layout on the leading locally developed browser if available.
* Test the page layout on mobile devices of major platforms.

## How to test localized pages on the production server

Updated translations are pushed to the production server regularly throughout the day.

* New page: When a brand new page is available for localization, it will be enabled on production when it’s 80% complete. At that point, if it doesn’t reach 100% completion level, the page will be available on production with English content mixed with translation. Before the page is activated in production, use the staging server for testing.
* Activated page with added strings: The strings will appear in English on production right away. Localized content will be pushed to production as soon as translations are available in the repository.
* Activated page with string updates: The switch to the updated content happens when the replacements of obsolete strings are fully localized. In some cases, there is a defined time frame to show the new strings on production, so test the updates on staging server. The obsolete string will be removed three months after the introduction of the replacement strings.
* Activated page with template change: In some cases, a page receives a major update that requires a complete rewrite of the template. If this happens, the old template is kept online only for a defined period of time. When removed, it will cause the URL to redirect users to the English version if the intended localized version is not ready, or other user preferred localized versions are not available either.
* Activated page missing too many updates: An activated page falling far behind with multiple updates will create poor user experience. They may be subjected to removal.

### Sync and update frequencies

Updated translations are pushed to the production server regularly throughout the day.

* Pontoon syncs every 10 minutes to the repository.
* GitHub update is pushed to production every 5 minutes.

It is safe to say that it will take less than an hour to see your changes reflected on the production server.

When a project has a firm deadline to meet, it will be indicated at the top left corner of the project page in Pontoon and at the page level. When necessary, it will be communicated through [the l10n-community room on Matrix](https://chat.mozilla.org/#/room/#l10n-community:mozilla.org).

## Testing content in Fluent

### Reviewing and updating [brands.ftl](https://github.com/mozilla-l10n/www-l10n/blob/master/en/brands.ftl)

This file captures all the brand and product names that appear in all the pages on mozilla.org. As a general rule, brands and product names remain unchanged. The exceptions are:

* Account/accounts in Mozilla account/accounts: Mozilla should be treated as a brand, but `account` and `accounts` should be translated. Both the singular and plural forms are used in lower cases. Uppercase is reserved for special use cases where headline case is necessary, for example legal document names and references.
* Browser/Browsers in Firefox Browser/Browsers.

If your community decides to translate any of these products or feature names, translate it once and translate it in this file. Be sure to have a consensus among active contributors what the translation should be before updating this file. This practice will ensure term use consistency across all pages.  

Please refer to the [guidelines for brands and trademarks](https://mozilla-l10n.github.io/styleguides/mozilla_general/index.html#brands-copyright-and-trademark) when reviewing and updating this file.

### Reporting technical issues

Report issues that can’t be resolved in Pontoon by:
* Filing a bug in [Bugzilla](https://bugzilla.mozilla.org/enter_bug.cgi?product=Mozilla%20Localizations) and selecting your locale.
* Adding the l10n PM in charge for NI. The l10n PM information appears at the top left corner on the project page for [mozilla.org](https://pontoon.mozilla.org/projects/mozillaorg/) and [firefox.com](https://pontoon.mozilla.org/projects/firefoxcom/).
* Including the file name plus a screenshot and/or URL.
* If an extra tag is added to a string in order for it make sense in your language, the string will generate an error report. The l10n PM for the project will consult you whether to make this an exception so it will not generate an error report in the future.

### Reporting vendor translation errors

If the mozilla.org project is not in your Pontoon dashboard, but the site is localized into your locale, it is likely being translated by a translation vendor. Report any translation errors by:

* Filing a bug using one of these templates and selecting your locale in the component list:
  * This [template is to report a single error](https://mzl.la/2P9PABx).
  * This [template is to report a batch of errors](https://mzl.la/3u0mao2).

## Testing dynamic pages

This section focuses on instructions for testing pages with dynamically generated content. Each page or topic is different in terms of steps or flow. These instructions could change over time to reflect product design updates. Linguistic testing is the main focus. The instructions below are detailed steps to get to the localized content so it can be reviewed in context.

### [firefox/accounts.ftl](https://www.mozilla.org/firefox/accounts/)

On the landing page of the Mozilla account page, click on the links under each of the following products which take you to product specific pages:
* Firefox Browser
* Firefox Monitor
* Firefox Relay
* Mozilla VPN

If you already have an account, click on the `Manage your account` link on the right side of the landing page, which will take you to the subscription page. If you do not have an account, you will be invited to create an account by providing an email address in the `Sign In` box.

Note: You may see different languages between mozilla.org, the login window, and the products above. If any of these products is not localized in your locale, it will fall back to other languages set as preferred for content language negotiation, assuming any of them is available for the project, or English.

### [firefox/all.ftl](https://www.firefox.com/download/all/)

To the right side of the page on firefox.com, there is a four-step process to go through in order to download Firefox.
* Browsers: choose one of the options either for desktop or mobile. Click on the `?` next to the Browsers category, a popup window shows the descriptions of different versions of Firefox browsers available for download. Select one browser to proceed to the next step.
* Platforms: Click on the `?`, a popup window shows the descriptions of different versions of installers available for download.
* Languages: A list of languages available in the build depending on what is selected in the above two categories. Check whether your current preferred language is shown by default. Change to a different language, check whether the download summary above the **Download Now** button corresponds to your new selection.
* Download: The **Download Now** button appears.

On the lower left side of each page, you will see these links:
* These two sites are in English only: [Check the system requirements](https://www.firefox.com/firefox/145.0/system-requirements/) and [Release notes](https://www.firefox.com/firefox/notes/).
* Click on the **Source code** link, you will be directed to the [Firefox Source Docs](https://firefox-source-docs.mozilla.org/) page which is not localized.
* The [Firefox Privacy Notice](https://www.mozilla.org/privacy/firefox/) (redirects to mozilla.org) document is localized in limited number of languages.
* Click on the **Need Help** link, you will be directed to the [SUMO](https://support.mozilla.org/products?utm_source=mozilla.org&utm_medium=referral&utm_campaign=need-help-link) home page.

### [firefox/download/home.ftl](https://www.firefox.com/)

This is a landing page on firefox.com:
* Click the **Download Firefox** button to check the [thank you](https://www.mozilla.org/firefox/download/thanks) page that triggers an automatic download.
* The [Firefox Privacy Notice](https://www.mozilla.org/privacy/firefox/) (redirects to mozilla.org)  document is localized in limited number of languages.
* Click on the **Download options and other languages** link, you will be directed to the [firefox/all](https://www.firefox.com/download/all/) page.
* Click on the **Firefox browser support** link, you will be directed to the [SUMO](https://support.mozilla.org/products/firefox) site featuring various topics on Firefox.

### Navigation Bar

* [navigation_v2.ftl](https://www.mozilla.org/) on mozilla.org: The strings in this file are shared content and are activated on production whether they are localized or not. When clicking on any of these topics on the navigation bar, **Firefox browsers**, **Products**, and **About us**, you will see a drop-down panel with subcategory topics. 
* [navigation-firefox.ftl](https://www.firefox.com/) on firefox.com: The strings in this file are shared content and are activated on production whether they are localized or not. When clicking on any of these topics on the navigation bar, **Features** and **Resources**, you will see a drop-down panel with subcategory topics. 

Within each of the topics, there is a description and a few links to help you dive deeper further into a topic which takes you to a different page. When reviewing the content, keep in mind the following:
* Not all links take you to a site that’s localizable for all locales.
* Not all products are offered in your locale.
* Brand and product names must remain unchanged.
