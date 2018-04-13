# Introduction to Fluent syntax

<!-- toc -->

## Basic syntax

A *Message* represents the basic unit of translation in Fluent. This is the simplest form messages can take:

```PROPERTIES
welcome-msg = Hello, World!
```

`welcome-msg` is the message identifier (or message ID), and `Hello, World!` is the **value** of this message.

Messages can contain **external arguments**, for example:

```PROPERTIES
welcome-msg = Welcome { $user }
```

`$user` is the name of the argument, and should never be translated. The fragment included between curly braces is called a **placeable**, and can be moved within the text. For example, the message above would be translated in Italian as follows, leaving the placeable unchanged:

```PROPERTIES
welcome-msg = Benvenuto { $user }
```

Messages can also reference other messages. In this case, the placeable won’t include the `$` sign, simply the message identifier:

```PROPERTIES
menu-settings = Settings
help-menu-settings = Click { menu-settings } to save the file.
```

A *Term* is a special category of Message:
* Terms have identifiers starting with a dash, e.g. `-brand-short-name`.
* They can’t be called directly in the source code, but only referenced within other messages.
* Each localization can add or remove attributes, regardless of the reference language (typically `en-US`).

For example, a term is used to define the *Firefox* brand name. For more details, see [this document](brand_names.md).

```PROPERTIES
-brand-short-name = Firefox
close-msg = Close { -brand-short-name }
```

## Attributes

For a single HTML object there might be multiple messages to localize: for example, a button could have a `label` and an `accesskey`, a link could have a text but also a `tooltip`. Such objects can be localized defining multiple **attributes** within a single message. For example, in the case of a button:

```PROPERTIES
login-button =
    .label = Login
    .accesskey = L
```

The message `login-button` doesn’t have a *value*, but has 2 *attributes* defined: `label` and `accesskey`. There are a few things to highlight in this FTL fragment:
* Attribute definitions must be indented and start with a period.
* There is an equal sign following the message identifier, even if there is no value (i.e. the value is *Null*).
* All attributes of messages found in the reference language – typically `en-US` – must be present in the localization. This will be enforced by tools like compare-locales, which will warn on missing or obsolete (only available in the localization) attributes.

```PROPERTIES
instructions-link = Log out
    .tooltip = Disconnect from this account
```

In this case, `instructions-link` has a *value* (`Log out`) and a `tooltip` *attribute* (`Disconnect from this account`).

It’s important to note that, in FTL files, **indendation** is part of the syntax; indenting elements incorrectly will lead to parsing errors.

## Selectors and plurals

With the select expression, a single message can provide several alternatives. The selected value will depend on the value of an external variable, another message attribute, or a function.

The most common use of select expressions is for plural forms:

```PROPERTIES
emails = { $unreadEmails ->
        [one] You have one unread email.
       *[other] You have { $unreadEmails } unread emails.
    }
```

Notice that both the variants and the closing curly brace are indented. The same message can also be written as:

```PROPERTIES
emails =
    { $unreadEmails ->
        [one] You have one unread email.
       *[other] You have { $unreadEmails } unread emails.
    }
```

One of the variants starts with a `*`: that indicates the **default option**, and it must always be defined in a select expression. The part before `->` is called the **selector**.

In this case, the message displayed will change based on the numeric value of `$unreadEmails`. For plurals, the variant key can either be a perfect match to a number or one of the [CLDR plural categories](http://www.unicode.org/cldr/charts/30/supplemental/language_plural_rules.html). This allows to define special cases, beyond the number of plurals expected for a language:

```PROPERTIES
emails = { $unreadEmails ->
        [one] You have one unread email.
        [42] You have { $unreadEmails } unread emails. So Long, and Thanks for All the Fish.
       *[other] You have { $unreadEmails } unread emails.
    }
```

Note how the `[one]` form in English doesn’t explicitly use the variable, in order to display the word `one` instead of the digit `1`.

In plural messages is always possible to expose the number, even if the reference language doesn’t; the name of the variable is defined at the beginning of the select expression (in the *selector*), in this case `$unreadEmails`. The first example in this section can be translated in Italian using `$unreadEmails` in both forms:

```PROPERTIES
emails = { $unreadEmails ->
        [one] C’è { $unreadEmails } messaggio non letto.
       *[other] Ci sono { $unreadEmails } messaggi non letti.
    }
```

## Variants and Terms

As described at the beginning of the document, **terms** are a special type of **messages**. They are used to define translations of common words and phrases, which can then be used inside of other messages. They can be recognized because of the identifier starting with a dash, e.g. `-brand-short-name`. Terms can also define additional language-specific attributes which are not present in the reference language (typically `en-US`).

While in most cases terms will have a single value, it’s also possible to define multiple **variants**: different values, each one associated to a key. Variants represent different forms of the same value. They can be used to define grammatical cases or any other language-specific modifications of the value required by the grammar of the spelling rules. When referencing a term from another message, you can specify which variant to use with the `-term-identifier[variant name]` syntax.

Consider the following example in English:

```PROPERTIES
-fxaccount-brand-name = Firefox Account
sync-signedout-account-title = Connect with a { -fxaccount-brand-name }
```

In Italian this can become:

```PROPERTIES
-fxaccount-brand-name =
    {
        [lowercase] account Firefox
       *[uppercase] Account Firefox
    }
sync-signedout-account-title = Connetti il tuo { -fxaccount-brand-name[lowercase] }
```

Similar to select expressions, you must define a default variant, identified by `*`. Also notice that key names are arbitrary, and don’t need to be in English.
