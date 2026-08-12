# Organization Visual History

Visual archive of the Personal Corp organization architecture.

The read-only gallery is published at [archive.pismenny.ru](https://archive.pismenny.ru/).
The `main` branch is deployed automatically to GitHub Pages by
`.github/workflows/pages.yml`. The repository itself remains private; the
selected gallery assets and their provenance are intentionally web-accessible.

For the custom domain, DNS must contain this record:

```text
archive.pismenny.ru. CNAME dapi.github.io.
```

Open `index.html` locally to browse the gallery. The canonical organization
architecture is not stored here; it lives in
`repo://dapi/hq/governance/organization-architecture.md`.

This repository owns only:

- generated visual experiments;
- prompts and edit history;
- provenance and review status;
- the selected visual projections used by presentation surfaces.

The current selected projections are:

- `assets/simcity/hq-simcity-primary.png` — primary organization map;
- `assets/simcity/hq-simcity-development.png` — development-vector map.

Prompt provenance:

- `sources/island-experiments-prompts.md` — project narrative and prompts for
  the island series;
- `sources/simcity-prompts.md` — readable SimCity prompt history;
- `sources/imagegen-calls.jsonl` — exact ImageGen calls recovered from the
  source Codex session log.
