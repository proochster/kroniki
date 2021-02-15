# Kroniki repository

https://proochster.github.io/kroniki/

# How to

## ...setup story structure in Jekyll

1. Your main html story file needs to be created in the `_stories` directory. Select a subfolder for your language, for example `_stories/en`. Add a folder for the language you want to use if it's missing. Use two letter language code referencing this list https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes. For example:
    ```
    _stories
        |_ en
            |_how-it-all-started.html
    ```
> The name of your story file needs to be unique.
2. In the file you will need to create the basic data structure. Use this as a reference:
    ```
    ---
    title: How it all started
    slug: how-it-all-started
    ---
    ```

## ...create story data

1. Make a copy of this spreadsheet to create your story: https://docs.google.com/spreadsheets/d/1TMFPLlrqs4umJdibAW87PhfxP-cf2dWxtCJxZzLggi0/edit?usp=sharing
2. Options: chapter, title, image url, copy, up to 6 choices.
3. Download the file as CSV and paste the contents to '/_data/data.csv'.



# Jekyll

Requirements: Ruby, Gems

Install bundler `gem install bundler jekyll`

Install project `bundle install`

Use `bundle exec jekyll serve` when running for the first time or after _config.yml has been changed.

Otherwise use `jekyll serve` or the short version `jekyll s`



# PWA and Service Workers

Installed using Workbox Wizard

Use `workbox wizard` command to run wizard again

Config saved in `/workbox-config`

Run `workbox generateSW workbox-config.js` to regenerate Service Worker file
