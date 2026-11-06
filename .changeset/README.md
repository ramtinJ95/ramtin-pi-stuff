# Changesets

Run `bun run changeset` for every user-facing change and pick the packages it touches. On merge to `main`, the release workflow opens a "Version Packages" PR; merging that PR publishes the bumped packages to npm.
