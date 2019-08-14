# Testing Mozilla.org

Mozilla.org is highly visible because the site houses the basic info of all Mozilla products, conveys Mozilla’s mission, vision, and values it stands for. Additionally, it promotes initiatives and campaigns in time of these events. The localized versions reach 60% of the Mozilla users globally. It is very important that, not only the main pages are localized, they are thoroughly tested before they are launched on production.

## Key links

* Production: https://www.mozilla.org/{locale_code}/
* Staging: https://www-dev.allizom.org/{locale_code}/
* Repository: https://github.com/mozilla-l10n/www.mozilla.org/
* Pontoon: https://pontoon.mozilla.org/projects/mozillaorg/

It’s highly advised you to ask other community members to conduct peer review not only on Pontoon, but on staging. While not all the languages are required for certain projects, each community can opt in the projects at a later time.

## What to test

### Pre-l10n test

* Have your [glossary](https://transvision.mozfr.org/) available as a reference, select mozilla.org as Repository, your language as your Target Locale.
* For terminology consistency, reference the product or site that the page is for, assuming the product or site is localized (e.g.: Firefox, Monitor).
* Have the matching US page up as reference, though some strings may not be identical due to A/B testing.
* Have the project you just localized available for editing in Pontoon.

### Linguistic testing

* Translation quality in context.
* Grammar correctness in context.
* Truncation: button text should remain inside the button.
* Header line break wraps at proper place.
* Text not overlapping graphic.
* Terminology consistent with product, and among web pages.
* Brand names remain in English.
* Product names comply to Mozilla guideline and adhere to what the community has agreed to.
* No corrupted characters.
* Click on the links on the page, which should take you to the pages of the same language if they are localized, or they will be redirected to en-US if the pages are not..
* Nav bar terms consistent with the page titles they are linked to (except when Nav bar term is shortened due to space limitation).
* Footer links don’t overlap with one another.

You can make linguistic changes directly in [Pontoon](https://pontoon.mozilla.org/projects/mozillaorg/).

### Functionality testing

* Click the download link, you should be able to download the product in your language, if it is localized, such as Firefox.
* Font support and readability.
* Footer: verify that the translation of the link is coherent and the link is functional.
* Language list: is your language listed as one of the options? Check https://www-dev.allizom.org/en-US to confirm.
* Error page: deliberately type a broken link, such as https://www.mozilla.org/firefox/neu/, check whether [404 page](https://www-dev.allizom.org/404/) is localized.
* If your language is RTL, make sure that the page layout and text flow in the correct directions.

### Compatibility testing:

* Test the page layout in other major browsers and on other platforms.
* Test the page layout on the leading locally developed browser if available.
* Test the page layout on mobile devices of major platforms.

## When can I see the localized page on the production server?

Updated translations are pushed to the production server almost daily.

When a brand new page is available for localization, it won’t be enabled in production until it’s fully localized. When existing pages receive updates with new strings, this new content won’t be displayed on production until localized, to avoid displaying a mix of English and localized text.

In some cases, pages receive major updates that require a complete rewrite of the template. If this happens, the old template is kept online only for a short period of time and, when removed, it will cause the URL to redirect users to the English version.

### Sync and update frequencies

* Pontoon syncs every 20 minutes to the repository.
* The Dev server updates every 15 minutes.

If you work on Pontoon, it is safe to say that it will take less than an hour to see your changes reflected on the dev server.

When a project has a firm deadline to meet, it will be communicated through the [dev-l10n-web mailing list](https://lists.mozilla.org/listinfo/dev-l10n-web). Be sure to sign up so you receive important community wide information on web related projects. You can also check out the deadline at page level in Pontoon.

## Testing dynamic pages

This section focuses on instructions for testing pages with dynamically generated content. Each page or topic is different in terms of steps or flow. These instructions could change over time to reflect product design updates. Linguistic testing is the main focus. The instructions below are detailed steps to get to the localized content so it can be reviewed in context.

### [firefox/accounts-2019.lang](https://www.mozilla.org/firefox/accounts/)

* Click the **Sign In to Monitor** button, you will be taken to the sign-in page in order to get to the [Firefox Monitor](https://monitor.firefox.com) site.
* Click on the links under each of the following products:
   * Firefox browser
   * Firefox Lockwise
   * Firefox Monitor
   * Firefox Send

Note: You may see different languages between mozilla.org, the login window, and the products above. If any of these products is not localized in your locale, it will fall back to other languages set as preferred for content language negotiation, assuming any of them is available for the project, or English.

### [firefox/all-unified.lang](https://www.mozilla.org/firefox/all/)

On the lower left side of the page:
* These two sites are in English only: [Check the system requirements](https://www.mozilla.org/firefox/system-requirements/) and [Release notes](https://www.mozilla.org/firefox/notes/).
* Click on the **Source code** link, you will be directed to the topic on [MDN](https://developer.mozilla.org/docs/Mozilla/Developer_guide/Source_Code) site in your language if it is localized.
* The [Firefox Privacy Notice](https://www.mozilla.org/privacy/firefox/) document is localized in limited number of languages.
* Click on the **Need Help** link, you will be directed to the [SUMO](https://support.mozilla.org/products?utm_source=mozilla.org&utm_medium=referral&utm_campaign=need-help-link) home page.

On the right side of the page:
* Click on the `?` at the end of **Which browser would you like to download?**, a popup window shows the descriptions of different versions of Firefox available for download.
* Click on the `?` at the end of **Select your preferred installer**, a popup window shows the descriptions of different versions of installers available for download.
* Under the section of **Select your preferred language**, check whether your current preferred language is shown by default. Change to a different language, check whether the download summary above the **Download Now** button corresponds to your new selection.

### [firefox/new/trailhead.lang](https://www.mozilla.org/firefox/new/)

* Click the **Download Now** button to check the [thank you](https://www.mozilla.org/en-US/firefox/download/thanks) page that triggers an automatic download.
* Click on the **Advanced install options & other platforms** link, a pop-up window displays options in various platforms.
* Click on the **Download in another language** link, you will be directed to the [firefox/all](https://www.mozilla.org/firefox/all/) page.
* Click on the **Fix a problem** link, you will be directed to this [SUMO](https://support.mozilla.org/kb/refresh-firefox-reset-add-ons-and-settings) article in your language if it is localized.
* The [Firefox Privacy Notice](https://www.mozilla.org/privacy/firefox/) document is localized in limited number of languages.

### firefox/tracking-protection-tour.lang

This page has been redesigned. The Tracking Protection feature is now part of Content Blocking, a collection of Firefox privacy features. It now points users to the SUMO page to better understand the topics. In order to check the localized content of this tour, you need to do the following:
* Open the browser by selecting either New Window or New Private Window.
* Copy and paste [step one](https://www.mozilla.org/firefox/68.0.1/tracking-protection/start/?step=1&variation=0) URL to your browse, then hit the “return” or “enter” keyboard button. A text box pops up.
* Click the **Next** button, which takes you to steps [two](https://www.mozilla.org/firefox/68.0.1/tracking-protection/start/?step=2&variation=1) and [three](https://www.mozilla.org/firefox/68.0.1/tracking-protection/start/?step=3&variation=2).
* In step [three](https://www.mozilla.org/firefox/68.0.1/tracking-protection/start/?step=3&variation=2), an extra text box appears which shows your current Content Blocking settings of the page.
* Click on **Got it!** button to finish step three.
* Click on **Restart tour** button to go through the above steps.
* Click on the [FAQ](https://support.mozilla.org/kb/what-happened-tracking-protection) link which takes you to the topic on SUMO site.

### [navigation.lang](https://www.mozilla.org/)

This page is activated on production whether it is localized or not. It is not an independent page but a file of shared content. When clicking on any of these topics on the navigation bar, **Firefox**, **Projects**, **Developers** or **About**, you will see a drop-down window with subcategory topics. Within each of the topics, there is a description and a few links to help you dive deeper further into a topic which takes you to a different page. When reviewing the content, keep in mind the following:
* Not all links take you to a site that’s localizable for all locales.
* Not all products are offered in your locale.
* Brand and product names must remain unchanged.
