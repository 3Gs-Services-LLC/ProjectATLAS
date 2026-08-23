You are Claude Code running locally in `C:\Websites\ProjectATLAS`. Your task: bring this folder under version control, sync it with its GitHub remote, and establish the ongoing habit of keeping the two in sync.

**Destination repo:** https://github.com/3Gs-Services-LLC/ProjectATLAS (public, already created).

**Context you should know before starting:** this folder contains `sources/indot-cars-hub/`, which holds raw feed/schema data pulled live from a government/vendor site whose license status is recorded as UNKNOWN (see `projectatlas.md` §5A, §8, §11). The operator was already told this counts as public redistribution and explicitly chose to push it anyway — that decision is recorded in `projectatlas.md` §11. Do not exclude it and do not re-raise the question; just proceed.

## Steps

1. Run `git status` to check whether this is already a git repository. If not, run `git init` and set the default branch to `main` (`git branch -M main` after the first commit, or `git init -b main` if your git version supports it).
2. Check `git config user.name` and `git config user.email` (both local and `--global`). If neither is set anywhere, set them for this repo only:
   ```
   git config user.name "3Gs Services LLC"
   git config user.email "3gservicesmilton@gmail.com"
   ```
   If something is already set, leave it alone.
3. Create a `.gitignore` in the repo root (or update it if one exists) with at least:
   ```
   node_modules/
   dist/
   build/
   .env
   .env.*
   *.log
   .DS_Store
   Thumbs.db
   __pycache__/
   *.pyc
   ```
   Do not add anything under `sources/` to `.gitignore` — per the context note above, that data is intentionally being included.
4. Create a short `README.md` in the repo root if one doesn't already exist. GitHub renders this on the repo's landing page by default — `projectatlas.md` will not show up there automatically otherwise. Keep it brief: the project name, a one-paragraph description drawn from `projectatlas.md` §2 (mission), and a clear pointer telling anyone who opens the repo to read `projectatlas.md` first as the single source of truth.
5. Check for an existing remote (`git remote -v`). If `origin` isn't already set to the destination repo, add it:
   ```
   git remote add origin https://github.com/3Gs-Services-LLC/ProjectATLAS.git
   ```
6. Stage everything (`git add -A`), run `git status` to show what's about to be committed, and commit:
   ```
   git commit -m "Initial sync: project documentation, research, and source evidence to date"
   ```
7. Push:
   ```
   git push -u origin main
   ```
   If this is rejected as non-fast-forward (e.g. because GitHub auto-created a README or license file when the repo was set up), do **not** force-push. Instead:
   ```
   git pull --rebase origin main
   ```
   Resolve any conflicts by keeping the local content unless it's trivially something like a GitHub-generated default README, then push again.
8. Confirm success by reporting `git log --oneline -5` and `git remote -v`.

## Ongoing rule (also documented in `projectatlas.md` §11 — read it there for the full policy)

From this point forward, every session that adds, edits, or removes any file in this repository must `git add`, commit with a message describing what changed and why, and `git push origin main` before ending the session. Do not leave local changes uncommitted or unpushed. If a push ever fails, stop and report the exact error rather than working around it silently.
