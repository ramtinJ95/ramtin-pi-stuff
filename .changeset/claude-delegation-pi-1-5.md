---
"@ramtinj95/pi-claude-delegation": minor
---

Require Pi 1.5.0 or newer and develop against it. Tool parameter enums now come from a local TypeBox helper, because Pi 1.5's `StringEnum` no longer returns a TypeBox schema; the emitted JSON schema is unchanged.
