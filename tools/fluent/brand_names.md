# Brand names

Brand names, like Firefox or Sync, are stored as *private messages* in dedicated files, and shared across applications.

Unless indicated otherwise in comments, the [current policy](https://www.mozilla.org/styleguide/communications/translation/) is that brand names can’t be:
* Declined to adapt to grammatical case.
* Transliterated.
* Translated.

**They need to be kept in English**, and sentences adapted as needed to fit the undeclined name.

For example, a message `-brand-short-name` is exposed in `browser/branding/official/brand.ftl`, and it can be referenced in other messages as follows:

```PROPERTIES
close-msg = Do you want to close { -brand-short-name }?
```
