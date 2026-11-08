# ramtin-pi-stuff

Extensions for the [Pi coding agent](https://pi.dev), published to npm under `@ramtinj95`. Each package installs on its own:

```bash
pi install npm:@ramtinj95/<package>
```

| Package | What it does |
| --- | --- |
| [`pi-claude-delegation`](./packages/pi-claude-delegation) | Claude Code models plus foreground and background Claude delegation tools |
| [`pi-comment-editor`](./packages/pi-comment-editor) | Review and annotate Pi assistant responses in a native terminal UI |
| [`pi-infra-command-guard`](./packages/pi-infra-command-guard) | Approval guard for risky infrastructure, cloud, container, repository, secret and local file commands |
| [`pi-mermaid-tui`](./packages/pi-mermaid-tui) | Render Mermaid diagrams as terminal-native Unicode in the Pi TUI |
| [`pi-nexus`](./packages/pi-nexus) | Drive Nexus threads from Pi through the nexus CLI |
| [`pi-notes-compaction`](./packages/pi-notes-compaction) | Session notes and notes-guided context rollover (fork of `@howaboua/pi-notes-compaction`) |
| [`pi-shepherdr`](./packages/pi-shepherdr) | Herdr-native multi-agent orchestration (fork of `@howaboua/pi-shepherdr`) |

`pi-shepherdr` and `pi-notes-compaction` are maintained forks of Igor Warzocha's packages from [howaboua-pi-stuff](https://github.com/IgorWarzocha/howaboua-pi-stuff), continued from upstream commit `5ede06b` after he stopped maintaining them. Their MIT licenses and authorship are kept in each package.

## Development

Requires [Bun](https://bun.sh) and the Node.js version in `.node-version`.

```bash
bun install
bun run check                                   # every package's check script
node scripts/workspaces.mjs check pi-nexus      # one package
```

`pi-mermaid-tui` also runs its Rust renderer's tests, so `check` needs `cargo`.

## Releases

1. Add a changeset to every user-facing change: run `bun run changeset`, pick the affected packages and choose patch, minor or major. Docs-only and test-only changes don't need one.
2. When the change lands on `main`, the release workflow runs the full checks, then opens or updates the "Version Packages" PR with the new versions and changelogs.
3. Merge that PR to release. The workflow checks the merged commit again, publishes the bumped packages to npm and tags them `@ramtinj95/<package>@<version>`. A failed check stops the publish.

The release workflow only runs on `main`. Publishing currently authenticates with the `NPM_TOKEN` Actions secret; once npm trusted publishing is configured for every package, `NODE_AUTH_TOKEN` comes out of `release.yml`.
