# Functions

Functions can be used in Fluent to format data according to the current language’s rules, or can provide additional data to fine tune the translation.

Fluent includes some [generic built-in functions](http://projectfluent.org/fluent/guide/functions.html#built-in-functions), like `NUMBER` and `DATETIME`, for number and date formatting, respectively. Such functions can be used in placeables and selectors. For example:

```PROPERTIES
dpi-ratio = Your DPI ratio is { NUMBER($ratio, minimumFractionDigits: 2) }

your-score = { NUMBER($score, minimumFractionDigits: 1) ->
        [0.0]   You scored zero points. What happened?
       *[other] You scored { NUMBER($score, minimumFractionDigits: 1) } points.
    }
```

This document describes additional functions available in Gecko products. Please refer to [this document](basic_syntax.md) for references about the terminology used.

## PLATFORM

`PLATFORM` is a function that allows localizers to tailor messages to the current platform. Allowed variant keys are: `windows`, `macos`, `linux`, `android`, `other`.

For example, Firefox settings are currently called *Options* in Windows, *Preferences* in macOS and Linux. Strings can be differentiated in Fluent by defining a message as follows:

```PROPERTIES
pref-page =
    .title = { PLATFORM() ->
        [windows] Options
       *[other] Preferences
    }
```

`PLATFORM()` is used to determine the variant to use in the select expression, `other` is defined as default. If a variant isn’t defined, for example for `linux`, it will fall back to the default value.

The following example uses the `PLATFORM()` function for each attribute:

```PROPERTIES
download-choose-folder =
    .label =
        { PLATFORM() ->
            [macos] Choose…
           *[other] Browse…
        }
    .accesskey =
        { PLATFORM() ->
            [macos] e
           *[other] o
        }
```
