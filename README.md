# KFUPM Website

Personal academic website for Dr. Muhamad Felemban, Assistant Professor at KFUPM.

## Tech stack

- Vite + React + TypeScript
- shadcn/ui
- Tailwind CSS

## Local development

```sh
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Updating publications

Run the fetch script to pull the latest publications from Google Scholar:

```sh
pip install -r scripts/requirements.txt
python scripts/fetch_publications.py
```

This updates `src/data/publications.json`. Commit and push the updated file to reflect changes on the site.
