# Cursor IDE setup — Tools & MCPs

Concise reference for tools and MCPs in this Cursor IDE setup. Use for the Skills page and handoff.

---

## MCP (Model Context Protocol) servers

MCPs expose tools the agent can call (browser, Docker, etc.).

| Server | Scope | Purpose |
|--------|--------|--------|
| **MCP_DOCKER** | User (`~/.cursor/mcp.json`) | Docker MCP gateway: `docker mcp gateway run`. |
| **cursor-ide-browser** | Project (workspace `mcps/`) | Browser automation: navigate, snapshot, click, type, scroll, lock/unlock tabs. Use for frontend testing and live page interaction. |

**cursor-ide-browser** (project-level):

- **Location:** `mcps/cursor-ide-browser/` (SERVER_METADATA.json, INSTRUCTIONS.md).
- **Workflow:** `browser_navigate` → `browser_lock` → interactions → `browser_unlock`. Use `browser_tabs` (list) and `browser_snapshot` before clicks/typing.
- **Tools (conceptual):** browser_navigate, browser_tabs, browser_snapshot, browser_lock/unlock, browser_click, browser_type, browser_fill, browser_scroll, browser_handle_dialog, browser_profile_start/stop (CPU profiling).

---

## Agent skills

Skills are Cursor Agent Skills (SKILL.md) under `~/.cursor/skills-cursor/`. The agent can use them when the task matches.

| Skill | When to use |
|-------|-------------|
| **create-rule** | Creating Cursor rules, coding standards, `.cursor/rules/`, RULE.md, AGENTS.md. |
| **create-skill** | Creating or editing Agent Skills (SKILL.md format, best practices). |
| **update-cursor-settings** | Changing Cursor/VSCode settings (settings.json). |
| **create-subagent** | Subagent-related workflows. |
| **migrate-to-skills** | Migrating existing guidance into skills. |

---

## Built-in agent tools (no MCP)

Standard tools the agent has without MCP: file read/write, search (grep, codebase search), terminal, glob, lint, todo, web search, image generation, etc. These are always available; MCPs add extra capabilities (e.g. browser, Docker).

---

## Summary

- **MCPs:** Docker (user), cursor-ide-browser (project).
- **Skills:** create-rule, create-skill, update-cursor-settings, create-subagent, migrate-to-skills.
- **Doc:** Keep this file updated when you add/remove MCPs or skills. Skills page in the site nav can summarize or link here.
