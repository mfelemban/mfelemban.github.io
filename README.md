# mfelemban.github.io

Personal academic site, built with [Jekyll](https://jekyllrb.com/) and served by
GitHub Pages.

## Updating content

You should almost never need to touch HTML. All content lives in `_data/`:

| To change…                    | Edit                    |
| ----------------------------- | ----------------------- |
| News items on the home page   | `_data/news.yml`        |
| Papers, theses, tech reports  | `_data/publications.yml`|
| Students                      | `_data/students.yml`    |
| Courses and terms taught      | `_data/courses.yml`     |
| Research thrusts and projects | `_data/research.yml`    |
| Talks and committees          | `_data/services.yml`    |
| Photo, email, office, phone, "currently teaching" | `_config.yml` (`profile:`) |

For example, adding a paper means adding one entry to `_data/publications.yml`:

```yaml
- authors: A. Student, M. Felemban
  title: A New Result
  venue: IEEE Transactions on Something
  year: 2026
  url: https://doi.org/...
```

Your name is bolded automatically in author lists (controlled by `me:` in
`_config.yml`).

Commit and push to `main`; GitHub Pages rebuilds the site within a minute.

## Running locally

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Layout

- `_layouts/default.html` — the single page shell (header, nav, footer)
- `_includes/` — nav, sidebar, footer, and the publication entry renderer
- `assets/css/main.css` — the one stylesheet (replaces the five old ones)
- `_legacy/` — the original hand-written HTML/CSS, kept for reference and
  excluded from the build

## Missing files

`files/` is empty. Several news items link to slides and posters
(`/files/*.pdf`, `/files/*.PNG`) that were not present in the source folder.
Drop those PDFs into `files/` to make the links work.
