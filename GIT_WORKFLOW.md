# Git Workflow Cheatsheet

A reference guide for practicing Git/GitHub workflows.

---

## Starting a new feature

```bash
git checkout main              # Make sure you're on main
git pull                       # Get latest changes from GitHub
git checkout -b feature/name   # Create and switch to new branch
```

---

## While working

```bash
git status                     # See what files changed
git diff                       # See exactly what you changed (line by line)
git add .                      # Stage all changes for commit
git commit -m "Your message"   # Save a snapshot with description
```

---

## Ready to push and create PR

```bash
git push -u origin feature/name   # Upload branch to GitHub
```

Then on GitHub:
1. Click "Compare & pull request" (yellow banner) or go to Pull requests → New
2. Add title and description
3. Click "Create pull request"
4. Review your changes
5. Click "Merge pull request" → "Confirm merge"
6. Click "Delete branch" on GitHub

---

## After merging

```bash
git checkout main              # Switch back to main
git pull                       # Pull the merged changes
git branch -d feature/name     # Delete local branch (cleanup)
```

---

## Undo commands (when things go wrong)

| Situation | Command |
|---|---|
| Discard all uncommitted changes | `git checkout .` |
| Discard changes to one file | `git checkout filename` |
| Save changes for later without committing | `git stash` |
| Retrieve stashed changes | `git stash pop` |
| Undo last commit but keep changes | `git reset --soft HEAD~1` |
| See commit history | `git log --oneline` |

---

## Branch management

| Command | What it does |
|---|---|
| `git branch` | List local branches |
| `git branch -a` | List all branches (local + remote) |
| `git checkout branch-name` | Switch to existing branch |
| `git checkout -b new-branch` | Create and switch to new branch |
| `git branch -d branch-name` | Delete local branch |
| `git push origin --delete branch-name` | Delete remote branch on GitHub |

---

## Quick reference: the full cycle

```
main → new branch → edits → commit → push → PR → merge → pull main → delete branch
```

---

## Branch naming conventions

- `feature/description` - New features (e.g., `feature/add-search`)
- `fix/description` - Bug fixes (e.g., `fix/image-hover`)
- `refactor/description` - Code cleanup (e.g., `refactor/css-structure`)
- `docs/description` - Documentation updates (e.g., `docs/readme-update`)
