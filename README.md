# Anubhav's personal site

A small, Markdown-first personal site built with Jekyll. There is no JavaScript,
database, CMS, or third-party theme.

## Publish a post

1. Copy `_drafts/post-template.md` to `_posts/YYYY-MM-DD-your-title.md`.
2. Update the title, date, summary, and tags.
3. Write in Markdown.
4. Commit and push to `main`.

GitHub Pages rebuilds the site automatically.

## Hosting choice

GitHub Pages is the recommended home for this site. It is free for public
repositories on GitHub Free, understands Jekyll and Markdown natively, includes
HTTPS, and rebuilds after every push. The only optional cost is a custom domain.

Cloudflare Pages is also a strong free option, but it adds another account and
build configuration without improving this site's writing workflow. Start with
GitHub Pages and move only if a future need justifies it.

## First-time GitHub Pages setup

1. Create a public GitHub repository. For the cleanest URL, name it
   `YOUR_USERNAME.github.io`.
2. Push this folder to the repository's `main` branch.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, then select
   `main` and `/ (root)`.
5. Set `url` in `_config.yml` to `https://YOUR_USERNAME.github.io`.

GitHub's current documentation:
[GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart) and
[adding Markdown posts with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-content-to-your-github-pages-site-using-jekyll).

For a project repository instead, keep any repository name and set `baseurl` in
`_config.yml` to `/REPOSITORY_NAME`.

## Preview locally

This Mac's built-in Ruby is too old, while Ruby 4 is newer than the current
GitHub Pages toolchain supports. Install the maintained Ruby 3.4 formula once:

```sh
brew install ruby@3.4
```

For the current terminal session, select the Homebrew Ruby:

```sh
export PATH="/opt/homebrew/opt/ruby@3.4/bin:$PATH"
```

Then install the site dependencies and start the preview:

```sh
cd "/Users/anubhav/Library/CloudStorage/OneDrive-MediacorpPteLtd/Work/personal-site"
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`. Jekyll watches the files and rebuilds when they
change. Press `Control-C` in Terminal to stop it.

For future previews, only the `export`, `cd`, and `bundle exec jekyll serve`
commands are needed.

## Change the site

- Homepage: `index.html`
- About page: `about.md`
- Writing: `_posts/`
- Colours and layout: `assets/css/main.css`
- Site title and URL: `_config.yml`
