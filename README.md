# Documentation for Mozilla localizers

![Deployment status](https://github.com/mozilla-l10n/localizer-documentation/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)
![Linter status](https://github.com/mozilla-l10n/localizer-documentation/workflows/Docs%20Linter/badge.svg)

This repository includes several documents describing topics of interest for localizers at Mozilla. If you’re reading these pages on GitHub, a version with improved readability and search capabilities is available [here](https://mozilla-l10n.github.io/localizer-documentation/).

## How to contribute to documentation

We use [GitHub issues](https://github.com/mozilla-l10n/localizer-documentation/issues) to track missing documentation and updates to existing pages.

In order to contribute, open a pull request in the [repository](https://github.com/mozilla-l10n/localizer-documentation), adding the new file or updating an existing document. Make sure to follow [these style guidelines](https://github.com/mozilla-l10n/documentation/blob/main/src/misc/documentation_styleguide.md), and note that all pull requests need to be reviewed before merge.

You can run the following commands to make sure that files are correctly formatted (you will need to [install npm](https://www.npmjs.com/get-npm) if it’s not already available):

```
$ npm install
$ npm test
```

## GitHub Pages

To generate these pages, [mdBook](https://github.com/rust-lang/mdBook/) is used and built automatically via GitHub Actions, and changes pushed to the `gh-pages` branch. If you want to build and preview the pages locally, [install Rust and cargo](https://www.rust-lang.org/learn/get-started) and then run the following commands from the root of the repository:

```
$ cargo install mdbook
$ cargo install mdbook-toc
$ mdbook serve
```

[mdbook-toc](https://github.com/badboy/mdbook-toc/) is used as a preprocessor, and will install the correct version of mdBook as a dependency.

If you want a new page to be available in GitHub pages, make sure to include a link in [src/SUMMARY.md](src/SUMMARY.md).
