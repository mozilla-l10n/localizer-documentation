# FAQ: Removal of Aurora and impact on localization

With this set of Frequently Asked Questions we aim to clarify the most common doubts about the removal of Aurora and its impact on localization. This document will evolve over the next days, adding clarifications and new answers based on the discussion within the Community.

This is a document aimed at our localization Community, please refer to the [official announcement](https://hacks.mozilla.org/2017/04/simplifying-firefox-release-channels/) and [FAQs](http://release.mozilla.org/firefox/release/2017/04/17/Dawn-Project-FAQ.html) for reference.

## Q: What is happening to Aurora?

The Aurora branch – currently used for Firefox Developer Edition and Firefox for Android Aurora – is going to be discontinued in the cycle starting on April 19.

On next merge day, April 18, Firefox 54 is moving to Beta as usual. Firefox 55, instead of moving to Aurora, will remain on Nightly for a second cycle, and move directly to Beta on the following merge day (currently June 12).

This is how the release schedule will look like. Please note that dates are subject to change, always use the [official schedule](https://wiki.mozilla.org/RapidRelease/Calendar) as reference.

![Release schedule](/assets/images/aurora/release_schedule_2017.png)

## Q: Why is Aurora being discontinued?

In the original plan for Rapid Release Cycle, Aurora was supposed to represent a first stabilization channel, with a userbase about 10 times the size of Nightly’s, providing an additional cycle of user feedback. It was also chosen as the branch to focus localization activity on, since only string changes explicitly allowed could land, giving localizers time to work on translation and testing before their work reached a larger audience with Beta and Release.

With significant improvements in stability and performance in the Nightly channel we have determined that we tend to gain more time by testing and localizing in Nightly and stabilizing in Beta. The increased speed to market and resulting quality and stability in the Beta channel is why Aurora is going to be discontinued on April 18.

## Q: What is happening to Developer Edition?

Developer Edition will migrate to the Beta build. Developer Edition users will maintain their Developer Edition themes, tools, and preferences as well as keeping their existing profile and should not experience any disruption.

## Q: Is this change affecting only Firefox?

No, it affects all products shipping from Mercurial repositories: Firefox, Firefox for Android, Thunderbird, SeaMonkey.

## Q: What’s the impact on localization?

Starting from April 19 you’ll need to focus your localization and testing on [Nightly](https://wiki.mozilla.org/Nightly) instead of Aurora. We will work with Pontoon and Pootle to ensure that localization tools will be ready shortly after merge day.

This means that you will see string changes more frequently. To avoid the risk of exposing poor strings to localizers, we plan to review and publish new en-US strings only once or twice a week to a special repository, instead of using mozilla-central directly. This does not mean that we expect localizers to translate immediately after we land new strings, but to continue to follow the timing they’re used to, knowing that strings for a version will trickle in a couple of times per week before it is migrated to Beta.

## Q: I work on Pootle or Pontoon, is something going to change for me?

We expect both tools to be ready shortly after merge day (April 18). We will send out a communication to the [dev-l10n mailing list](https://lists.mozilla.org/listinfo/dev-l10n) to confirm that tools are set up and you can start localizing as usual.

Change should be completely transparent for localizers. Once tools are configured to work against Nightly, you will just see new strings more frequently than before.

## Q: I work directly on Mercurial, is something going to change for me?

Localization files are stored in [l10n-central repositories](https://hg.mozilla.org/l10n-central/) instead of mozilla-aurora.

Reference English files used by tools are stored in a special repository: https://hg.mozilla.org/l10n/mozilla-central. This is a clone of mozilla-central, managed by l10n-drivers, where new changesets are pushed only after being checked for issues.
This allows us to create a buffer between strings landing in mozilla-central and exposure to localization tools.

Since this is a temporary solution while we implement cross-channel, the [l10n dashboard](https://l10n.mozilla.org/) will keep using mozilla-central as the canonical reference. This might cause some inconsistencies, for example showing a string as missing if it landed on mozilla-central but it hasn’t been pushed to the l10n repository yet.

If you’re working directly on Mercurial and translate frequently, it would be useful to keep using mozilla-central as your reference for translation, in order to help catching issues before they are exposed to other localizers. Just be aware of the possible mismatch regarding the l10n dashboard.

## Q: How often will I have new strings to localize?

The initial plan is to push new changes once or twice a week. In case of issues with some strings landed in mozilla-central, the next push might be delayed to allow time to fix the problem.

## Q: I’m the only one in my community and this change makes it harder for me to keep up. How do you expect me to manage with constant string landings?

We’ve taken a few steps in favor of allowing localizers more flexibility in how they participate in l10n over the last year. The first was to eliminate the need for localizers to initiate sign-offs. The second was to adopt a policy of shipping all good (i.e., doesn’t break builds) l10n updates, rather than waiting for a localization community to arrive at 100% localized. This is the next step. While strings will be landed more frequently, we’re committed to shipping any good l10n update for your locale whenever you’re able to localize. The next steps are to separate Firefox and DevTools into distinct projects and split Firefox desktop into priority string tiers to help you know where your l10n contribution has highest impact for your users.

## Q: What happened to the cross-channel plan?

In case you’re not familiar with the [cross-channel concept](https://blog.mozilla.org/l10n/2016/06/17/mozlondon-localization-sessions/), the idea is to consolidate all existing localization repositories into a single repository, used to ship all versions of our products. This makes it easier for you to make l10n fixes across multiple versions and allows more flexibility for you to localize at your preferred frequency.

The original plan was to deploy cross-channel repository before Dawn, but the recent schedule change won’t make it possible.

Cross-channel is still going to happen, and we consider it to be the proper long term solution for most of the localization challenges to come. The current plan is to start using it when Firefox 56 lands in Nightly.

## Q: Which version should I use for testing?

Starting from April 19, the day after merge day, all localizers should migrate to Nightly and start using it for testing their work. We now have builds for all languages that previously had Aurora builds.

You can download Firefox Nightly (for desktop) from here
https://www.mozilla.org/firefox/channel/desktop/#nightly

Firefox for Android Nightly (multilocale) is available here
https://www.mozilla.org/firefox/channel/android/#nightly

If this page is not available in your language, it means that mozilla.org translation is behind and you should translate it as soon as possible. Please check [your webdashboard](https://l10n.mozilla-community.org/webdashboard/). In the meantime, you can use this page to download your localized Nightly build
https://www.mozilla.org/firefox/nightly/all/

You should also reach out to your community and rebuild a community of testers around Nightly.

## Q: What’s going to happen to existing Aurora users?

Between April and June, Firefox on desktop will continue to receive updates for critical security issues and the Aurora and Developer Edition populations will be migrated to the Beta update channel. On Android, Aurora users will be migrated to Nightly. More details will be available in the official FAQs that will be published early next week.

## Q: I have more questions, where can I ask?

You can use the [dev-l10n mailing list](https://lists.mozilla.org/listinfo/dev-l10n) or the #l10n channel on [IRC](https://wiki.mozilla.org/IRC). L10n-drivers and other localizers will be happy to answer your questions and, if useful, they will be added to this document.
