# Git & GitHub

+ [Git](#git)
  + [Version](#version)
  + [Branches](#branches)
  + [Commit Changes](#commit-changes)
  + [Undoing Changes](#undoing-changes)
  + [Merging](#merging)
+ [Hosting Webpages on GitHub Pages](#hosting-webpages-on-github-pages)

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

### Commit Changes
Once a code change has been made on a branch, we can look to commit this change.

```shell
# Sometimes useful to check the status
$ git status

# Add all the files. This is called staging
$ git add .
# OR, stage a single file
$ git add <file-name>

# Create a commit message explaining what has changed
$ git commit -m "This is a commit message example"

# Push the change
$ git push
# OR, you can also push changes to the default remote repository
$ git push origin

# If this is the first time pushing to a branch, you may need to set the origin
$ git push --set-upstream origin <branch-name>
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

### Merging
Merging changes in `Git` is a process of combining changes from one branch into another.

```shell
# First, checkout the branch you want to merge code from a branch into e.g. main
$ git checkout <branch-name>

# Once the branch has been changed, use merge the branch containing the code changes you want to merge
$ git merge <source-branch>

# You may need to push the changes once done
$ git push
```

## Hosting Webpages on GitHub Pages
+ Create a repository in `GitHub` named `username.github.io`, such as: `hackdanismo.github.io`. Alternatively, a repository can be created and `GitHub` pages can be enabled in `settings`. The URL will then typically be: `https://<username>.github.io/<repository-name>/`
+ The website will be deployed to `https://<username>.github.io`, e.g. `https://hackdanismo.github.io`, if the repository is: `username.github.io`.
+ The deployment branch can be changed in the repository `settings`, by default this is set to the `main` branch.
