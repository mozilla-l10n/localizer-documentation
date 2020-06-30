# Firefox Accounts (FxA): how to localize and test

Firefox Accounts (or FxA) refers to https://accounts.firefox.com/signin. There are three components in Pontoon that make up [FxA](https://pontoon.mozilla.org/projects/firefox-accounts/):

* `LC_MESSAGES/client.po`: the content server for UI and frontend.
* `LC_MESSAGES/server.po`: strings for emails and backend templates.
* `Main.ftl`: payments for both frontend and backend.

The above could change over time as the team is planning to migrate .po files to .ftl, which may involve restructuring the files.

## Key links

* Production: https://accounts.firefox.com/
* Staging: https://latest.dev.lcip.org/
* Repository: https://github.com/mozilla/fxa-content-server-l10n
* Pontoon: https://pontoon.mozilla.org/projects/firefox-accounts/

## Localizing the strings

FxA lives in two file formats. The shorter a string is, especially the kind containing variable or placeable, the more context you need to make sure you get the translation right. Look for clues or ask others for clarification:

* String comments: Pay attention to the comment or string ID. In Pontoon, the comments are displayed above the area where you can enter your translation for a string.
* [Matrix channel](https://chat.mozilla.org/#/room/#l10n-community:mozilla.org): ping the L10n PM in charge with any issues you may have.
* [Web projects mailing list](https://groups.google.com/g/mozilla.dev.l10n.web): Raise questions here so others may benefit from the information.

## Errors in translations can break the build for all languages

During translation, do not alter codes in a string, such as variables and HTML markup.

For .po file format, a few FxA contacts would be notified when a code in localized string is broken. Any subsequent commits by other localizers in other languages will trigger this warning until the broken string is fixed by one of the people notified. Here are a few common errors seen in localized content:

✅ `The recipient’s consent is required. <a %(escapedLearnMoreAttributes)s>Learn more</a>`<br>
❌ Alter the code by omitting or inserting space breaks the build: `A címzett hozzájárulása szükséges. <a%(escapedLearnMoreAttributes)s >Tudjon meg többet</a>.`

✅ `<span class="number">2</span>Point the camera at the QR code and tap the link that appears`<br>
❌ Attributes should remain unchanged: `<span classe="numero">2</span>Puncta le camera al codice QR e tocca le ligamine que appare`

✅ `Thank you for reaching out to Mozilla Support about <b>%(escapedLowercaseTopic)s</b> for <b>%(escapedSelectedProduct)s</b>.`<br>
❌  Markup elements come in pairs, one opens and one closes: `Köszönjük, hogy felkereste a Mozilla támogatást a következő témában: <b>%(escapedLowercaseTopic)s</b (<b>%(escapedSelectedProduct)s</b>).`

For .ftl file format, such error checking mechanism is not in place either in Pontoon or GitHub: Pontoon doesn’t have a warning, and the FxA repository doesn’t send out notifications. Before a script is developed to catch the errors, please use the above examples as general guidelines to avoid making the common mistakes.

## Testing

Product updates are deployed to Pontoon on Fridays. Localized content is pushed to production on Tuesdays. Localized strings in Pontoon syncs with fxa-content-server-l10n in GitHub every 10 minutes, making the repository the source of truth.

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

The subscription platform (or sub plat) consists of a few features. Right now only the _Payment and subscription creation_ is available for testing:

* _Payment and subscription creation_: The initial payment funnel where users enter their credit card information to subscribe to a product. Mozilla partners with Stripe to handle this.
* _Billing_: Ongoing billing and receipt emails once a subscription is entered.
* _Subscription management UI_: Settings that allow the user to update their payment information.

Payment testing is tied to the language of user preference and location. Payment service is market specific. For instance, the product is available in German, but the service is available in Germany but not in Switzerland.

#### Before testing

* Have a Firefox account. If you don’t have one, the staging link will take you to the signup process.
* Choose a Firefox browser for: desktop (Windows only), Android, or iOS. Support for macOS and Linux is coming soon.
* If you are not already using the browser in the language you are going to test in, type in the URL field `about:Preferences`. Or follow the steps detailed in this [SUMO article](https://support.mozilla.org/en-US/kb/choose-display-languages-multilingual-web-pages) to configure to the correct display language.
* Have the staging link ready for [subcription testing](accounts.stage.mozaws.net/subscriptions/products/prod_HEJ13uxjG4Rj6L?plan=plan_HEJ1l12p1taV7I)

**Tips:** Feeling not having enough test accounts to use for testing? You are not alone. Here are some tips you can consider. Note that this works with Gmail and Google Apps domains:

* Add number(s) or letter(s) to your existing account to create more accounts by adding a `+` in your email address. For example, if your main email is `name@xyz.com`, your expanded accounts could be `name+1@xyz.com` and `name+m@xyz.com`. You will receive email notifications in your `name@xyz.com` inbox. You can add anything you want, several digits and/or letters.
* Keep your password simple so you can log in and log out easily. Keep track of which account is connected with which password. Of course, there is Lockwise for the rescue!

#### Testing payment and subscription creation

* Go to the [subscription staging server](accounts.stage.mozaws.net/subscriptions/products/prod_HEJ13uxjG4Rj6L?plan=plan_HEJ1l12p1taV7I)
* Click on the **Subscribe** button which takes you to a subscription form. If you don't have a Firefox account at this point, you will need to create one.
* Fill out all the required fields with any made up information you want, as long as the format conforms to the requirement for your market.
* Type credit card number `4242 4242 4242 4242`.
* Check formatting accuracy for date, currency and postal code. Check the box on usage agreement.
* Click on **Pay Now**
* An email confirmation arrives in your inbox. The content should match the summary on the page where you just completed your subscription.
* A *Thank You* payment confirmation message appears with the subscription summary on your browser page with an invitation to download. Click on **Continue to Download**.
* It takes you to the Firefox Privacy Network (FPN) add-on download page. Click on **+ Add to Firefox** button. A series of pop-up windows will walk you through the installation process, and where to find and manage your FPN.
* The FPN icon will appear on the Firefox browser toolbar. Click on the icon and log in with your Firefox account.
* Click on **Manage Account** in the dropdown window, it will take you to **Account Setting**.
* Click on **Subscriptions and Payments** in the **Setting** page, which shows the summary of your payment setup.

**Note**, the Privacy Notice and Terms of Use documents are not localized in all the languages where the product is offered. When not available, you will be redirected to the English versions.

## Reporting technical issues

There are a few ways to report non-linguistic related bugs:

* File an issue [here](https://github.com/mozilla/fxa-content-server-l10n/issues).
* Ping in [the Matrix channel](https://chat.mozilla.org/#/room/#l10n-community:mozilla.org) to the l10n PM responsible for the project.
* Send an email to the [web project mailing list](https://groups.google.com/g/mozilla.dev.l10n.web).
* Send a direct email to the l10n PM responsible for the project.
