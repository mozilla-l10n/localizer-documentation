# Introduction to Fluent syntax

<!-- toc -->

## Basic syntax

A *message* represents the basic unit of translation in Fluent. This is the simplest form a message could take:

```PROPERTIES
welcome-msg = Hello, World!
```

`welcome-msg` is the message identifier (or message ID), and `Hello, World!` is the **value** of this message.

A message can contain **external arguments**, for example:

```PROPERTIES
welcome-msg = Welcome { $user }
```

`$user` is the name of the argument, and should never be translated. The fragment included between curly braces is called a **placeable**, and can be moved within the text. For example, the string above would be translated in Italian as follows, leaving the placeable unchanged:

```PROPERTIES
welcome-msg = Benvenuto { $user }
```

Messages can also reference other messages. In this case, the placeable won’t include the `$` sign, simply the message identifier:

```PROPERTIES
menu-settings = Settings
help-menu-settings = Click “{ menu-settings }” to save the file.
```

There is a special category of messages, called **private messages**:
* Private messages have identifiers starting with a dash, e.g. `-brand-short-name`.
* They can’t be called directly in the source code, but only referenced within other messages.

For example:

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

```PROPERTIES
instructions-link = Log out
    .tooltip = Disconnect from this account
```

In this case, `instructions-link` has a *value* (`Log out`) and a `tooltip` *attribute* (`Disconnect from this account`).

It’s important to note that, in FTL files, **indendation** is part of the syntax; indenting elements incorrectly will lead to parsing errors.

## Selectors and plurals

With the select expression, a single message can provide several alternatives. The selected value will depend on the value of an external variable or function:

```PROPERTIES
welcome-pet = { $petFamily ->
        [canine] Hello dog
        [feline] Hello cat
        *[other] Hello pet
    }
```

Notice that both the variants and the closing curly brace are indented. The same string can also be written as:

```PROPERTIES
welcome-pet =
    { $petFamily ->
        [canine] Hello dog
        [feline] Hello cat
        *[other] Hello pet
    }
```

The message displayed by the UI will change based on the value of the external variable `$petFamily`. Notice that one of the variants starts with a `*`: that indicates the **default option**, and it must always be defined in a selector.

The most common use of selectors is for plural forms:

```PROPERTIES
emails = { $unreadEmails ->
        [one] You have one unread email.
       *[other] You have { $unreadEmails } unread emails.
    }
```

In this case, the message displayed will change based on the numeric value of `$unreadEmails`. For plurals, the variant key can either be a perfect match to a number or one of the [CLDR plural categories](http://www.unicode.org/cldr/charts/30/supplemental/language_plural_rules.html). Note how this allows to define special cases, beyond the number of plurals expected for a language:

```PROPERTIES
emails = { $unreadEmails ->
        [one] You have one unread email.
        [42] You have { $unreadEmails } unread emails. So Long, and Thanks for All the Fish.
       *[other] You have { $unreadEmails } unread emails.
    }
```

## Variants

While in most cases messages will have a single value, it’s also possible to define multiple **variants**: different values, each one associated to a key, that can be selected when referencing the message ID from another message. Unlike selectors, the message doesn’t depend on the value of an external variable or function.

This can be useful, for example, to decline names according to grammatical case.

```PROPERTIES
-brand-name = {
       *[nominative] Aurora
        [genitive] Aurore
        [dative] Aurori
        [accusative] Auroro
        [locative] Aurori
        [instrumental] Auroro
    }

about = O { -brand-name[locative] }
```

As for selectors, there must be a default variant, identified by `*`.
