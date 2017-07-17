<!-- markdownlint-disable MD001 -->

# Glossary

### Fuzzy

`fuzzy` is an internal state available only if the source file is a [gettext](https://www.gnu.org/software/gettext/manual/html_node/PO-Files.html) (.po) file. A string can be marked as such in a few cases:
* The reference text changed after the string was already translated.
* The string has been manually marked by translators because it needs review.
* New strings were merged in the localized files, enabling the option to match existing translations (also called “fuzzy matching”).

In all these cases a translation exists in the file, but is marked as fuzzy (equivalent to “need review”) and not used by the website or application. For more information, read the documentation about [Fuzzy Entries](https://www.gnu.org/software/gettext/manual/html_node/Fuzzy-Entries.html#Fuzzy-Entries) in gettext.
