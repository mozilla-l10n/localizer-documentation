# Fundraising website: how to localize and test

[donate.mozilla.org](https://donate.mozilla.org) is our platform to collect donations. The main form is for Mozilla Foundation, but it also hosts a separate form for donations to Thunderbird.

This website relies on third parties to handle payment. The localization of the payment form for debit/credit card payment is managed by Stripe and we do not have control.

## Testing

Submitted translations are automatically deployed to the staging server, so you can test them a few minutes after they have been translated.

* Staging server: https://donate.mofostaging.net/​.
* Production server: https://donate.mozilla.org/.

### Testing the payment flow

You may want to test the complete user journey on the website, but you don’t have to make an actual donation for that. Stripe has a [test mode](https://stripe.com/docs/testing#cards) that is enabled on the staging server only. Simply use the payment info from this page on the staging server and you should be able to simulate a payment.

### Testing currency settings

The first thing to check is that the website supports all the relevant currencies for your locale.
You also want to make sure the default currency selected for your locale is the one that makes the most sense. We can only set a default currency by locale and can’t rely on geolocation to change it.

Check that the currency formatting is correct for your language. If it’s not correct, please [file an issue](#How-to-report-an-issue).

## How to report an issue

The preferred way is to file an issue on the [donate.mozilla.org GitHub repository](https://github.com/mozilla/donate.mozilla.org/issues/new).
