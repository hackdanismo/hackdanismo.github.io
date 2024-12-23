# Git & GitHub

+ [Git](#git)
  + [Version](#version)
  + [Branches](#branches)
  + [Undoing Changes](#undoing-changes)
+ [Hosting Webpages on GitHub Pages](#hosting-webpages-on-gitHub-pages)

## Git

### Version
The version of `Git` installed can be confirmed using the terminal:

```shell
$ git --version
```

To update the version for `macOS`, we can use `Homebrew`.

```shell
# Update Homebrew
$ brew update

# Use Homebrew to update Git to the latest version
$ brew upgrade git

# Confirm version
$ git version
```

### Branches
We can use `Git` to create branches in our repository.

```shell
# List branches
$ git branch

# Create a new branch
$ git branch <branch-name>

# Switch to a branch
$ git checkout <branch-name>

# Create and switch to a new branch
$ git checkout -b <branch-name>

# Delete a branch
$ git branch -d <branch-name>
```

### Undoing Changes
Changes can be reversed or undone, if needed.

```shell
# Undo changes in a file
$ git checkout -- <file>

# Revert a commit
$ git revert <commit-hash>

# Reset to a previous commit
$ git reset --hard <commit-hash>
```

## Hosting Webpages on GitHub Pages
+ Create a repository in `GitHub` named `username.github.io`, such as: `hackdanismo.github.io`. Alternatively, a repository can be created and `GitHub` pages can be enabled in `settings`. The URL will then typically be: `https://<username>.github.io/<repository-name>/`
+ The website will be deployed to `https://<username>.github.io`, e.g. `https://hackdanismo.github.io`, if the repository is: `username.github.io`.
+ The deployment branch can be changed in the repository `settings`, by default this is set to the `main` branch.
