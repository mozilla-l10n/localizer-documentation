# Thimble: how to localize and test

Thimble is enabled for [in-context translation](./tools/pontoon/translate.md#translating-using-the-in-context-editor), for a few pages. Some parts like the editor are not available, but can be [tested through the staging server](#testing).

## Testing

Your translations are automatically deployed to the staging server, so you can test them a few minutes after they have been translated.

* Staging server: https://bramble.mofostaging.net/​.
* Production server: https://thimble.mozilla.org/.
* Locally: in case you want to test your translations off-line, you can [install Thimble locally](https://github.com/mozilla/thimble.mozilla.org#automated-installation-preferred-method).

## Areas that can’t be localized

Some parts of the project can’t be localized yet. For instance Thimble projects themselves, or the project listing displayed on the home page. This listing is dynamic and projects can be featured for a short period of time for a specific event.
The sign up and sign in pages can’t be localized either.
The video will be available for subtitling through YouTube once it’s updated with the latest Thimble features.

## How to report an issue

The preferred way is to file an issue on the [Thimble GitHub repository](https://github.com/mozilla/thimble.mozilla.org/issues/new).
