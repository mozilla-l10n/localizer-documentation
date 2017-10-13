# Testing Mozilla.org

Mozilla.org is highly visible because the site houses the basic info of all Mozilla products, conveys Mozilla’s mission, vision, and values it stands for. Additionally, it promotes initiatives and campaigns in time of these events. The localized versions reach 60% of the Mozilla users globally. It is very important that, not only the main pages are localized, they are thoroughly tested before they are launched on production.

## Key links

* Production: https://www.mozilla.org/{locale_code}/
* Staging: https://www-dev.allizom.org/{locale_code}/
* Repository: https://github.com/mozilla-l10n/www.mozilla.org/
* Pontoon: https://pontoon.mozilla.org/projects/mozillaorg/
* Web dashboard: https://l10n.mozilla-community.org/webdashboard/?locale={locale_code}. Visit this page on a regular basis to check localization progress, pending work, deadline, and errors that were introduced during translation.

It’s highly advised you to ask other community members to conduct peer review not only on Pontoon, but on staging. While not all the languages are required for certain projects, each community can opt in the projects at a later time.

## What to test

### Pre-l10n test

* Have your [glossary](https://transvision.mozfr.org/) available as a reference, select mozilla.org as Repository, your language as your Target Locale.
* For terminology consistency, reference the product or site that the page is for, assuming the product or site is localized (e.g.: Firefox, Test Pilot).
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

You can make linguistic changes directly in [Pontoon](https://pontoon.mozilla.org/projects/mozillaorg/) or [GitHub](https://github.com/mozilla-l10n/www.mozilla.org/).

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

In some cases pages receive major updates that require a complete rewrite of the template: if this happens, the old template is kept online only for a short period of time and, when removed, it will cause the URL to redirect users to the English version.

### Sync and update frequencies

* Pontoon syncs every 20 minutes to the repository.
* Web Dashboard and the Dev server update every 15 minutes.

If you work on Pontoon, it is safe to say that it will take less than an hour to see your changes reflected on the dashboard and the dev server.

When a project has a firm deadline to meet, it will be communicated through the [dev-l10n-web mailing list](https://lists.mozilla.org/listinfo/dev-l10n-web). Be sure to sign up so you receive important community wide information on web related projects.

## Testing dynamic pages

This section focuses on instructions for testing pages with dynamically generated content. Each page or topic is different in terms of steps or flow. These instructions could change over time to reflect product design updates. Linguistic testing is the main focus. The instructions below are detailed steps to get to the localized content so it can be reviewed in context.

### [firefox/desktop/tips.lang](https://www.mozilla.org/firefox/desktop/tips/)

* Click on the **next** or **back** link to check out the tips on different features.
* Highlighted text is the same as in English.
* Text fits inside the box.

### [firefox/new/horizon.lang](https://www.mozilla.org/firefox/new/)

* Once page is loaded, click on the link called **Download Firefox for another platform**.
* For alternative message, change URL to [Scene2](https://www.mozilla.org/firefox/new/?scene=2).
* To fully review the Firefox download page messages, tests must go through following scenarios:.
  * Desktop: Windows, macOS, Linux.
  * Mobile: Android and iOS.
  * Updating from older version of Firefox to the latest vs. downloading for the first time.

### [firefox/sendto.lang](https://www-dev.allizom.org/styleguide/docs/send-to-device/)

The test can be done for all locales only on staging. For production testing, only these locales are enabled: de, en-GB, en-ZA, es-AR, es-CL, es-ES, es-MX, fr, id, pl, pt-BR, and ru.
* Enter a mobile phone number, a new page will be generated, suggesting the next action to take.
* Enter a phone number in the wrong phone number format. This will prompt an error message.

### firefox/tracking-protection-tour.lang

* Open Firefox and start a New Private Window.
* Once the window is launched, click on **See how it works** button.
* You are taken to [step one](https://www.mozilla.org/firefox/51.0.1/tracking-protection/start/?step=1).
* Click the **Next** button, it takes you to steps [two](https://www.mozilla.org/firefox/51.0.1/tracking-protection/start/?step=2) and [three](https://www.mozilla.org/firefox/51.0.1/tracking-protection/start/?step=3).
* In step [three](https://www.mozilla.org/firefox/51.0.1/tracking-protection/start/?step=3), an extra text box appears.
* Click on **Disable protection for this session** button to generate a new “step three” message.
* Click on **Enable protection** button to toggle between *enable* and *disable* protection messages.
  * NOTE: in order to see the message of **Disable protection for this site**, the browser must be in _normal mode_.
* Click on **Got it!** button to get to the next page.
* Click on **Restart tour** button to go through the above steps.

### [mozorg/about/history.lang](https://www.mozilla.org/about/history/)

* The slides should automatically scroll to the next in about 10 seconds or so.
* If it does not or it stops, click the next or previous arrows to go to the next slide.
* Be sure to cycle through until you see the first slide again to ensure you have covered all the slides.
* Text fits inside the box.

### [mozorg/about/manifesto.lang](https://www.mozilla.org/about/manifesto/)

You can check out the principles of the manifesto without going to the slide mode. However, only in the slide mode, all the localized content can be reviewed.
* Click on the first principle.
* Click on the “next” and the “previous” arrows to move from one slide to the next.
* Check on text layout, alignment and wrapping. Box size should be adjustable to fit all the content.
