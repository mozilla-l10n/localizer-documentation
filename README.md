# Documentation for Mozilla localizers

This repository includes several documents describing topics of interest for localizers at Mozilla. If you’re reading these pages on GitHub, a version with improved readability and search capabilities is available [here](https://mozilla-l10n.github.io/localizer-documentation).

## Table of contents

### Community

* [Roles within Mozilla l10n communities](community/l10n_community_roles.md).
* [Reviewing translations within your community](community/l10n_feedback.md).

### Products

How to localize and test Mozilla products:
* [Firefox for desktop](products/firefox_desktop/README.md).
* [Firefox for Android](products/firefox_android/README.md).
* [Firefox for iOS](products/firefox_ios/README.md).
* [Focus for Android and iOS](products/focus/README.md).
* [Mozilla.org](products/mozilla_org/README.md).

### Tools

* [How to use Pontoon](tools/pontoon/README.md).
* [Fluent for localizers](tools/fluent/README.md).
* [Bugzilla for localizers](misc/bugzilla_l10n.md).
* [Mercurial tips](tools/mercurial/README.md).

## Web Projects

* [Web projects](webprojects/README.md)

### Other topics

* [Testing localization of Mozilla projects](products/l10n_testing.md).

## How to contribute to documentation

We use [GitHub issues](https://github.com/mozilla-l10n/localizer-documentation/issues) to track missing documentation and updates to existing pages.

In order to contribute, open a pull request in the [repository](https://github.com/mozilla-l10n/localizer-documentation), adding the new file or updating an existing document. Make sure to follow [these style guidelines](https://github.com/mozilla-l10n/documentation/blob/master/misc/documentation_styleguide.md), and note that all pull requests need to be reviewed before merge.

You can run the following commands to make sure that files are correctly formatted (you will need to [install npm](https://www.npmjs.com/get-npm) if it’s not already available):

```
$ npm install
$ npm test
```

## GitBook

GitBook is built automatically via Travis, and changes pushed to the `gh-pages` branch. If you want to build and preview the GitBook locally, [install npm](https://www.npmjs.com/get-npm) and and run the following commands from the root of the repository:

```
$ npm install
$ npm start
```

GitBook is used to generate [these pages](https://mozilla-l10n.github.io/localizer-documentation): it’s run automatically via Travis and content pushed to the gh-pages branch.

If you want content to be available in GitBook, make sure to include a link in [SUMMARY.md](SUMMARY.md).
