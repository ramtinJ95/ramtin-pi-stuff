#!/usr/bin/env node
// Run one package script in every workspace that defines it, in order, and fail if any run fails.
// Pass package directory names after the script to limit the run: `node scripts/workspaces.mjs check pi-nexus`.
import { spawnSync } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const [script, ...only] = process.argv.slice(2);
if (!script) {
	console.error("Usage: node scripts/workspaces.mjs <script> [package-dir...]");
	process.exit(1);
}

const packagesDir = join(import.meta.dirname, "..", "packages");
const dirs = readdirSync(packagesDir, { withFileTypes: true })
	.filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
	.filter((entry) => only.length === 0 || only.includes(entry.name))
	.map((entry) => entry.name)
	.sort();

const failed = [];
for (const dir of dirs) {
	const cwd = join(packagesDir, dir);
	const pkg = JSON.parse(readFileSync(join(cwd, "package.json"), "utf8"));
	if (!pkg.scripts?.[script]) continue;
	console.log(`\n==> ${pkg.name}: ${script}`);
	const result = spawnSync("bun", ["run", script], { cwd, stdio: "inherit" });
	if (result.status !== 0) failed.push(pkg.name);
}

if (failed.length > 0) {
	console.error(`\n${script} failed in: ${failed.join(", ")}`);
	process.exit(1);
}
