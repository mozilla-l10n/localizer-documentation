# How to identify the bug that introduced a string

Sometimes it’s helpful to identify which bug introduced a specific string, for example to check if an issue was already reported, or find out more information on a feature.

## Find the string

The first step is to identify where the string is within the Mercurial repository, and the fastest way is to use [Transvision](https://transvision.mozfr.org).

For example, if you want to know which bug introduced the string `Would you like to let this site start a server accessible to nearby devices and people?`, you can search for the [string](https://transvision.mozfr.org/?recherche=Would+you+like+to+let+this+site+start+a+server+accessible+to+nearby+devices+and+people%3F&repo=gecko_strings&sourcelocale=en-US&locale=it&search_type=strings_entities&perfect_match=perfect_match) or the identifier (if you already know it).

In the results, you can use the `<source>` link in the en-US column to [open the file](https://hg.mozilla.org/l10n/gecko-strings/file/default/mobile/android/chrome/browser.properties) in Mercurial.

Note that Transvision will open the `gecko-strings` repository, not the source code repository. Starting from Firefox 57, all versions of Firefox desktop and Firefox for Android ship from a single localization repository ([l10n-central](https://hg.mozilla.org/l10n-central/)). The repository containining the reference English strings, called [gecko-strings](https://hg.mozilla.org/l10n/gecko-strings), is generated from strings landing in the code repository for each branch (e.g. mozilla-central and comm-central for Nightly, mozilla-beta and comm-beta for Beta, etc.), and it’s exposed to localization tools like Pontoon and Transvision.

## Find the bug

At the top of the page there’s an **annotate** link that will display the changeset associated to each line.

Now you only need to search in the page for the string, hover the link on the leftmost column, and open the [bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1292639) (if an active link is available in the commit message), or select the [changeset link](https://hg.mozilla.org/l10n/gecko-strings/rev/1ed110e5b9cf) in the popup. The commit message will always have a bug reference, and you can then check dependencies and comments.

![Changeset info](/assets/images/mercurial/to_changeset.png)

## Looking at older revisions

This method doesn’t always work: sometimes a changeset only moves strings around, so you would need to repeat the process for an older revision of the file.

At the top of the changeset, there’s a list of the modified files. Near each file there’s a **revisions** link.

![Changeset info](/assets/images/mercurial/revisions.png)

At this point you can pick an older revision of the file by opening the **diff** link for the changeset you’re interested in, and repeat the process by selecting **annotate** near the file you’re analyzing.

If you want to look at the code using that string, you can also reach the [original landing](https://hg.mozilla.org/mozilla-central/rev/89a168219747b20bb0effe9abe49bcd403f27266) in the source code repository by using the link provided in the header `X-Channel-Converted-Revision`.
