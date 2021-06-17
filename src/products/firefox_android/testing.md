# Testing Firefox for Android

## Testing Nightly builds

Once you have localized [all the strings needed to complete the Firefox for Android project](how_to_localize.md), and your language is up in [Nightly builds](https://play.google.com/store/apps/details?id=org.mozilla.fenix), you should start testing! This is the moment to engage as many people as possible: have them use and check out these builds regularly. The more eyes on them, the better.

### What to look out for?

(For more detailed explanations about testing, please refer to [testing localization of Mozilla projects](l10n_testing.md))

* Language quality.
* Truncated words (cut-off from screen) or overlaps.
* Anything that appears broken in the UI.
* Check out at all the main screens, UI, menus, tabs, new features, etc. Make sure these all look good, that everything is properly translated and appears as expected.
* Font support.
* Check that all searchplugins are working correctly.

If you find issues such as the ones listed above, there are two possible options: fix it by yourself directly via Pontoon, or get a mobile developer to fix it. It all depends what kind of issue you find.

In fact, language quality, truncations, overlaps and unlocalized strings can usually be fixed directly via Pontoon. You can verify that your fix has worked by checking it in the new Nightly version that usually ships the next day.

If the issue is something else, you will probably have to get a mobile developer’s help to fix it. Please [file an issue here](https://github.com/mozilla-mobile/fenix/issues/new/choose), and CC the mobile PM in charge (@ followed by the GitHub username, which is currently “delphine”).
Once more, please refer to [testing localization of Mozilla projects](l10n_testing.md) for more details on how to fix different kind of issues.

Please note that it is strongly suggested to start using Nightly builds on a daily basis - and even after your locale is shipping on release version - so that you can get into as many screens as possible and check that everything looks fine.

Also, it is important that builds are tested by people outside the localization team. Ask other people from your community to help test in order to have fresh eyes looking at your work.

l10n-drivers send out regular reminders about merge days, updates on Android projects, schedule and important info on [the Discourse Localization category](https://discourse.mozilla.org/c/l10n/). Please make sure you’re following this category closely so that you get regular updates about which part of the cycle you’re at, when you need to finish your work, and anything relevant to what you are doing.
