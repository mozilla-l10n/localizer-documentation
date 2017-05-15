# Documentation for Mozilla localizers

This repository includes several documents describing topics of interest for localizers at Mozilla. If you’re reading these pages on GitHub, a version with improved readability and search capabilities is available [here](https://mozilla-l10n.github.io/localizer-documentation).

## Products

How to localize and test Mozilla products:
* [Firefox for desktop](products/firefox_desktop/)
* [Firefox for Android](products/firefox_android/)
* [Firefox for iOS](products/firefox_ios/)
* [mozilla.org](products/mozilla_org/)

## Tools

* [Mercurial tips](tools/mercurial/)

## Updating the documentation

Simply open a pull request adding the new file or updating an existing document. Make sure to follow [these style guidelines](https://github.com/mozilla-l10n/documentation/blob/master/misc/documentation_styleguide.md), and note that all pull requests need to be reviewed before merging.

## Update GitBook

Follow [these instructions](https://toolchain.gitbook.com/setup.html) to install GitBook locally (NodeJS is a prerequisite). Then run the following command from the root of the repository.

```
gitbook build . docs
```

If you want content to be linked from the sidebar, make sure to add it to [SUMMARY.md](SUMMARY.md).
