# Firefox Accounts (FxA): how to localize and test

Firefox Accounts (or FxA) refers to [https://accounts.firefox.com](https://accounts.firefox.com). There are three components in Pontoon that make up [FxA](https://pontoon.mozilla.org/projects/firefox-accounts/):

* `LC_MESSAGES/client.po`: the content server for UI and frontend.
* `LC_MESSAGES/server.po`: strings for emails and backend templates.
* `Main.ftl`: payments for both frontend and backend.
* `Settings.ftl`: new subscription service.

The above could change over time as the team is planning to migrate .po files to .ftl, which may involve restructuring the files.

## Key links

* [Production](https://accounts.firefox.com)
* [Staging](https://accounts.stage.mozaws.net)
* [L10n Repository](https://github.com/mozilla/fxa-content-server-l10n)
* [Pontoon](https://pontoon.mozilla.org/projects/firefox-accounts/)

## Localizing the strings

FxA lives in two file formats: .po and .ftl, both contain variable or placeable in the strings. The shorter the string, the more context you need to make sure you get the translation right. Look for clues or get clarifications through the following methods:

* String comments: Pay attention to the comment or string ID. In Pontoon, the comments are displayed above the area where you can enter your translation for a string.
* [Matrix channel](https://chat.mozilla.org/#/room/#l10n-community:mozilla.org): ping the L10n PM in charge with any issues you may have.
* [Web projects mailing list](https://groups.google.com/g/mozilla.dev.l10n.web): Raise questions here so others may benefit from the information.

## Errors in translations can break the build for all languages

During translation, do not alter code in a string, such as variables and HTML markup.

For .po file format, a few FxA contacts would be notified when code in a localized string is broken. Any subsequent commits by other localizers in other languages will trigger this warning until the broken string is fixed by one of the people notified. Here are a few common errors seen in localized content:

**Example:** Alter the code by omitting or inserting space breaks the build.
* Source: `The recipient’s consent is required. <a %(escapedLearnMoreAttributes)s>Learn more</a>`
* Target:
   * ❌ `A címzett hozzájárulása szükséges. <a%(escapedLearnMoreAttributes)s >Tudjon meg többet</a>.`
   * ✅ `A címzett hozzájárulása szükséges. <a% (escapedLearnMoreAttributes)s>Tudjon meg többet</a>.`
   * What changed in the broken translation (❌): space is removed from `<a% (` to `<a%(`; extra space was added from `)s>` to `)s >`.

**Example:** Attributes should remain unchanged.
* Source: `<span class="number">2</span>Point the camera at the QR code and tap the link that appears`
* Target:
   * ❌ `<span classe="numero">2</span>Puncta le camera al codice QR e tocca le ligamine que appare`
   * ✅ `<span class="number">2</span>Puncta le camera al codice QR e tocca le ligamine que appare`
   * What changed in the broken translation (❌): both the attribute’s name `class` and value `number` were localized.

**Example:** Markup elements often come in pairs, one opens and one closes.
* Source: `Thank you for reaching out to Mozilla Support about <b>%(escapedLowercaseTopic)s</b> for <b>%(escapedSelectedProduct)s</b>.`
* Target:
   * ❌ `Köszönjük, hogy felkereste a Mozilla támogatást a következő témában: <b>%(escapedLowercaseTopic)s</b (<b>%(escapedSelectedProduct)s</b.`
   * ✅ `Köszönjük, hogy felkereste a Mozilla támogatást a következő témában: <b>%(escapedLowercaseTopic)s</b><b>%(escapedSelectedProduct)s</b>.`
   * What changed in the broken translation (❌): the closing element `</b>` was replaced by `</b`, leaving the tag open.

For .ftl file format, such error checking mechanism is not in place either in Pontoon or GitHub: Pontoon doesn’t have a warning, and the FxA repository doesn’t send out notifications. Before a script is developed to catch the errors, please use the above examples as general guidelines to avoid making these common mistakes.

## Testing

Product updates are deployed to Pontoon on Fridays. Localized content is pushed to production on Tuesdays. Localized strings in Pontoon syncs with the l10n repository in GitHub every 10 minutes, making the repository the source of truth.

You can test on either staging and production, both involve having an account in order to access the environment. The payment feature will be rolling out to international markets through wave releases. It’s best to review localization work on the staging environment before the feature is launched to the market.

Firefox Accounts can be tested through Firefox browsers for desktop and mobile. In addition to following [the general localization testing guidelines](../products/l10n_testing.md), there are features unique to the product that need special attention. Make sure you test them thoroughly.

### Testing account setup

#### Linguistic testing

* Login screen.
* Email notification.
* Check all the setting configuration buttons and the page or expanded window each page leads to.
* Translation is of good quality and makes sense in context.
* No broken UI, especially in a mobile environment. Text wraps or line breaks correctly.
* Terms are consistent between pages.
* Basic font support.
* Error and warning messages.

#### Functionality testing

* Configure the Settings. Go through all of the categories.
* Check for email notifications with each of the initial setups.
* Make changes to some of the settings, check for possible error messages or warnings; check for followup confirmation emails.

### Testing the subscription platform

The subscription platform consists of a few features. Right now only the _Payment and subscription creation_ is available for testing:

* _Payment and subscription creation_: The initial payment funnel where users enter their credit card information to subscribe to a product. Mozilla partners with Stripe to handle this.
* _Billing_: Ongoing billing and receipt emails once a subscription is entered.
* _Subscription management UI_: Settings that allow the user to update their payment information.

Payment testing is tied to the language of user preference and location. Payment service is market specific. For instance, the product is available in German, but the service is available in Germany and not in Switzerland.

#### Before testing

* **Tips:** Feeling not having enough test accounts to use for testing? You are not alone. Here are some tips you can consider.

   * Add number(s) or letter(s) to your existing account to create more accounts by adding a `+` in your email address. For example, if your main email is `name@xyz.com`, your expanded accounts could be `name+1@xyz.com` and `name+m@xyz.com`. You will receive email notifications in your `name@xyz.com` inbox. You can add anything you want, several digits and/or letters. Note that this works with Gmail and Google Apps domains.
   * Keep your password simple so you can log in and log out easily. Keep track of which account is connected with which password. Of course, there is Lockwise for the rescue!

* Create a new Firefox account for testing purposes. Your existing account may or may not work.
* Choose a Firefox browser for desktop, Android, or iOS.
* Set the language you are testing in. Find out how to configure the correct display language by following the steps detailed in this [SUMO article](https://support.mozilla.org/kb/choose-display-languages-multilingual-web-pages).
* Have the link ready for the [subscription testing server](https://accounts.stage.mozaws.net/subscriptions/products/prod_HEJ13uxjG4Rj6L?plan=plan_HEJ1l12p1taV7I). Note, this link is for testing subscription only, different from the FxA staging server.

#### Testing payment and subscription creation

* Go to the [subscription testing server](https://accounts.stage.mozaws.net/subscriptions/products/prod_HEJ13uxjG4Rj6L?plan=plan_HEJ1l12p1taV7I)
* Click on the **Subscribe** button which takes you to a subscription form. If you don’t have a Firefox account at this point or if your existing account doesn’t work, you will need to create one.
* Fill out all the required fields in the form.
* Key in credit card number `4242 4242 4242 4242`. The mandatory fields for Expiration date, CCV and postal code can be filled with random values.
* Verify formatting accuracy for date, currency and postal code. Check the box on usage agreement.
* Click on **Pay Now**
* A *Thank You* payment confirmation message appears with the subscription summary on your browser page with an invitation to download.
* An email confirmation arrives in your inbox. The content should match the summary on the page where you just completed your subscription.

**Note**: the Privacy Notice and Terms of Use documents are not localized in all the languages where the product is offered. When not available, you will be redirected to the English versions.

## Reporting technical issues

There are a few ways to report non-linguistic related bugs:

* File an issue [here](https://github.com/mozilla/fxa-content-server-l10n/issues).
* Ping in [the Matrix channel](https://chat.mozilla.org/#/room/#l10n-community:mozilla.org) to the l10n PM responsible for the project.
* Send an email to the [web projects mailing list](https://groups.google.com/g/mozilla.dev.l10n.web).
* Send a direct email to the l10n PM responsible for the project.
