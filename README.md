# DeroGold website

Static HTML, CSS and JavaScript for https://derogold.com/.

## Preview

Run `python3 -m http.server 8000` from this directory and open http://localhost:8000.
There is no build step.

## Content maintenance

- Canonical core repository: https://github.com/derogold/derogold-core
- Link downloads to /releases/latest, not to the legacy signpost repository.
- If showing a version, record the date it was checked against the GitHub release API.
- Distinguish current development documentation from released binaries.
- The timeline and original-team page are historical. Confirm changes to people’s roles with the project owner.

The November 2026 refresh checked the core README and latest release (v1.0.1.0, published 2026-03-07). It does not assert that old social accounts, team contacts or environmental ambitions are currently active.

## Deployment

No deployment workflow is defined in this repository. Confirm the hosting/upload procedure with the operator before deploying; pushing a branch is not proof that the public site changed.
