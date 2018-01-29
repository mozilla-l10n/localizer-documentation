# Brand names

Brand names, like Firefox or Sync, are stored as *Terms* in dedicated files, and shared across the application.

Unless indicated otherwise in comments, the [current policy](https://www.mozilla.org/styleguide/communications/translation/) is that brand names can’t be:
* Declined to adapt to grammatical case.
* Transliterated.
* Translated.

**They need to be kept in English**, and sentences adapted as needed to fit the undeclined name.

For example, a term `-brand-short-name` is provided in `browser/branding/official/brand.ftl`

```PROPERTIES
-brand-short-name = Firefox
```

And it can be referenced in other messages as follows:

```PROPERTIES

close-msg = Do you want to close { -brand-short-name }?
```

`-brand-short-name` is defined as a *term* to allow localizers to define custom attributes, for example to store grammatical properties. Mozilla tools like compare-locales won’t report those attributes as obsolete if the reference language (`en-US`) doesn’t have them. Each language is then free to put information about genders, animacy, the first letter being a vowel or not, and any more into attributes of terms.

Here's an example in English:

```PROPERTIES
-brand-name = Firefox

has-been-updated = { -brand-name } has been updated.
```

And how Polish can adapt its translation depending on the gender of the brand. To understand this example, consider a scenario where `-brand-name` would be defined in a separate file, and could change depending on the version (e.g. *Firefox* vs *Aurora*).

```PROPERTIES
-brand-name = Firefox
    .gender = masculine

has-been-updated =
    { -brand-name.gender ->
        [masculine] { -brand-name } został zaktualizowany.
        [feminine] { -brand-name } została zaktualizowana.
        [neuter] { -brand-name } zostało zaktualizowane.
       *[other] Program { -brand-name } został zaktualizowany.
    }
```
