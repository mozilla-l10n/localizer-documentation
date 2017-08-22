# Documentation for Mozilla localizers

This repository includes several documents describing topics of interest for localizers at Mozilla. If you’re reading these pages on GitHub, a version with improved readability and search capabilities is available [here](https://mozilla-l10n.github.io/localizer-documentation).

## Table of contents

### Products

How to localize and test Mozilla products:
* [Firefox for desktop](products/firefox_desktop/README.md).
* [Firefox for Android](products/firefox_android/README.md).
* [Firefox for iOS](products/firefox_ios/README.md).
* [Focus for Android and iOS](products/focus/README.md).
* [Mozilla.org](products/mozilla_org/README.md).

### Tools

* [How to use Pontoon](tools/pontoon/README.md).
* [Mercurial tips](tools/mercurial/README.md).

### Other topics

* [Testing localization of Mozilla projects](products/l10n_testing.md).

## How to contribute

We use [GitHub issues](https://github.com/mozilla-l10n/localizer-documentation/issues) to track missing documentation and updates to existing pages.

In order to contribute open a pull request in the [repository](https://github.com/mozilla-l10n/localizer-documentation), adding new files or updating an existing document. Make sure to:
* Follow [these style guidelines](https://github.com/mozilla-l10n/documentation/blob/master/misc/documentation_styleguide.md).
* Minimize images before adding them to the repository, for example using a service like [tinypng](https://tinypng.com/).

Note that all pull requests need to be reviewed before merge.

GitBook is used to generate [these pages](https://mozilla-l10n.github.io/localizer-documentation): it’s run automatically via Travis and content pushed to the gh-pages branch.

If you want content to be available in GitBook, make sure to include a link in [SUMMARY.md](SUMMARY.md).

### English content

When updating an existing document or adding new content, open an issue to track updates for all enabled locales.

### Other languages

If you want to start localizing this documentation in a new language:
* Copy the `en` folder in the root of the repository, and rename it as your locale code (e.g. `es`).
* Add your language to [LANGS.md](https://github.com/mozilla-l10n/localizer-documentation/blob/master/LANGS.md), and a link in the [README.md](https://github.com/mozilla-l10n/localizer-documentation/blob/master/README.md) file located in the root of the repository.

All updates will need to happen through pull requests, and content will be reviewed to ensure that it's formally correct.
