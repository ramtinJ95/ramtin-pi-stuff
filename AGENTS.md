# ramtin-pi-stuff

Bun workspace of Pi extensions under `packages/`. Each package has its own AGENTS.md with package rules; read it before changing that package.

- Install with `bun install` (isolated linker, one root `bun.lock`). Don't add per-package lockfiles.
- Verify with `bun run check`, or `node scripts/workspaces.mjs check <package-dir>` for one package. CI runs the same.
- Add a changeset (`bun run changeset`) for every user-facing change. Changes to devDependencies or tests alone don't need one.
- Shared Pi devDependencies are pinned to one Pi version across packages. Bump them together.
- `pi-shepherdr` and `pi-notes-compaction` are forks of `@howaboua/*` packages. Strings such as `@howaboua/pi-shepherdr/extension-reply/v1`, `pi-notes-compaction:owner:v1` and the `// @howaboua/pi-shepherdr managed bridge` marker are protocol identifiers shared with other howaboua extensions and with already-deployed remote bridges. Keep them unchanged; only package names and imports were renamed.
