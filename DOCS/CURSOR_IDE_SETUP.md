# Cursor IDE setup — Tools & MCPs

Concise reference for tools and MCPs in this Cursor IDE setup. Use for the Skills/Tools page and handoff.

---

## Built-in agent tools (Cursor)

Standard tools the agent has without MCP: `read_file`, `write`, `search_replace`, `delete_file`, `edit_notebook`, `codebase_search`, `grep`, `list_dir`, `glob_file_search`, `run_terminal_cmd`, `read_lints`, `todo_write`, `web_search`, `mcp_web_fetch`, `update_memory`, `generate_image`, `call_mcp_tool`, `list_mcp_resources`, `fetch_mcp_resource`. Full list on `skills.html`.

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

## SkillBox & Skills directory

**SkillBox** ([antjanus/skillbox](https://github.com/antjanus/skillbox)): Curated utility skills. Install: `npx skills add antjanus/skillbox`. Skills: track-session, git-worktree, generate-skill, ideal-react-component, rate-skill. Works with Cursor, Codex, Gemini CLI, OpenCode, Replit, 40+ agents.

**Skills directory:** Discover skills via `npx skills find [query]` or [skills.sh](https://skills.sh/). Categories: React, Testing, Git & workflows. Use `/find-skills` or ask "find a skill for X" to have the agent search.

---

## Summary

- **Built-in tools:** File, search, terminal, lint, todo, web, memory, image, MCP. Full list on `skills.html`.
- **MCPs:** Docker (user), cursor-ide-browser (project).
- **Agent skills:** create-rule, create-skill, update-cursor-settings, create-subagent, migrate-to-skills.
- **SkillBox:** antjanus/skillbox. **Skills directory:** npx skills find, skills.sh, /find-skills.
- **Doc:** Keep this file updated when you add/remove MCPs or skills. Skills/Tools page in the site nav summarizes and links here.
