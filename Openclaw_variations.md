**OpenClaw alternatives** (autonomous local AI agents that run 24/7, connect to chat apps like WhatsApp/Telegram, do tasks like email/calendar/files/shell, with memory/scheduling). I searched web, GitHub, Reddit, articles for *every* direct rewrite/fork/inspired project + broader open-source agent frameworks. Here’s the most complete list possible (claw-themed ones first as they’re closest, then others). All links are live as of now.

**Cross-reference (this repo):** Full **site placement** (which HTML section each project uses) is in [`DOCS/OPENCLAW_ECOSYSTEM.md`](DOCS/OPENCLAW_ECOSYSTEM.md). Curated link cards live on [`tools.html`](tools.html#computer-automation) (OpenClaw through extended alternatives + awesome list + this file on GitHub). **NemoClaw** and second **OpenClaw** card are in the **CLI** block on `tools.html`. Official OpenClaw + **OpenClaw Docs** are on [`companies.html`](companies.html). See [`DOCS/CONTENT_GUIDE.md`](DOCS/CONTENT_GUIDE.md) (Computer automation — curated order, not strict A–Z).

### Canonical OpenClaw (official baseline)
- **OpenClaw** (site): Pioneer self-hosted stack; messaging, skills/plugins, shell/browser tools; MIT. https://openclaw.ai/
- **OpenClaw (source):** https://github.com/openclaw/openclaw
- **OpenClaw Docs:** Tools, plugins, skills, onboarding. https://docs.openclaw.ai/

### Reference stack (browser control in the OpenClaw class of agents)
- **Playwright:** Chromium/Firefox/WebKit automation — common dependency for agent-driven UI. https://playwright.dev/
- **Playwright MCP:** Browser tools exposed over MCP. https://github.com/microsoft/playwright-mcp

### Ecosystem & hosted / vendor variants (from site docs + common comparisons)
- **Hermes Agent** (Nous Research): Autonomous server agent, memory, MIT; Linux, macOS, WSL 2. https://hermes-agent.nousresearch.com/ · https://github.com/nousresearch/Hermes-Agent
- **MaxClaw** (MiniMax): Cloud 24/7 assistant (e.g. M2.7); Telegram, Discord, Slack. https://agent.minimax.io/max-claw
- **Kimi Claw** (Moonshot): Hosted OpenClaw-style; Kimi K2.5 Thinking, skills, link existing OpenClaw. https://www.kimi.com/bot
- **NemoClaw** (NVIDIA): Sandboxed OpenClaw-style assistants in OpenShell; policy, egress; alpha. https://github.com/NVIDIA/NemoClaw · https://docs.nvidia.com/nemoclaw
- **Moltbook:** Social network for AI agents (submolts, API); pairs with OpenClaw-style agents. https://www.moltbook.com/

### Claw-family (direct inspired rewrites – smallest/fastest/secure)
- **PicoClaw** (Go, ultra-light for $10 hardware/edge): ~8MB binary, <10MB RAM, <1s startup. https://github.com/sipeed/picoclaw · https://picoclaw.io/
- **NullClaw** (Zig, tiniest edge): 678KB binary, ~1MB RAM, <2ms startup, 22+ LLMs/17 channels; OpenClaw-compatible config. https://github.com/nullclaw/nullclaw · https://nullclaw.io/
- **ZeroClaw** (Rust, fast/small): <10ms startup, <5MB RAM, pluggable. https://github.com/zeroclaw-labs/zeroclaw (or openagen variant)
- **NanoClaw** (TS, security focus): Container/Docker isolation per agent. https://nanoclaw.dev/ · https://github.com/qwibitai/nanoclaw
- **IronClaw** (Rust, privacy/security): WASM sandbox, credential isolation. https://github.com/nearai/ironclaw
- **ZeptoClaw** (Rust, 7-layer security): Container + prompt injection protection. https://github.com/qhkm/zeptoclaw
- **Nanobot** (Python, ultra-lightweight): ~4k LOC (99% smaller than OpenClaw). https://github.com/HKUDS/nanobot
- **Moltis** (Rust, production-secure): Sandboxed, one binary, observability. https://github.com/moltis-org/moltis
- **SafeClaw** (Python): No LLM for core (intent-based, immune to injection). https://github.com/princezuda/safeclaw
- **TinyClaw** (Shell/TS): Multi-agent + self-healing. https://github.com/warengonzaga/tinyclaw
- **HermitClaw** (Python): Folder-based autonomous research/reports. https://github.com/brendanhogan/hermitclaw
- **zclaw** (C, ESP32 microcontroller): GPIO/scheduling for tiny hardware. https://github.com/tnm/zclaw
- **MimiClaw** (C, bare-metal ESP32): ~$5 hardware, no OS. https://github.com/memovai/mimiclaw

### Other strong open-source alternatives
- **OpenFang** (Rust, full Agent OS): 7 autonomous modules, 38+ tools. https://github.com/RightNow-AI/openfang
- **memU** (knowledge graph memory): Proactive, long-term memory focus. GitHub search "memU Bot OpenClaw".
- **SuperAGI**: Multi-agent framework, extensible. https://github.com/TransformerOptimus/SuperAGI
- **Anything LLM**: Self-hosted LLM hub with RAG/tools (less autonomous). https://github.com/Mintplex-Labs/anything-llm
- **n8n** (workflow automation): Node-based, no-code agents. https://github.com/n8n-io/n8n

**Non-open / commercial-ish but often compared** (for completeness):
- TrustClaw: Sandboxed tools/OAuth. https://www.trustclaw.app/
- Claude Code / Taskade / Lindy / Zapier Agents: Mentioned in roundups but not full self-hosted drops-ins.

**Quick decision guide** (no BS):  
- Want **the upstream project + docs**? OpenClaw site, GitHub, docs.openclaw.ai (audit permissions before production).
- Want **smallest/fastest/edge hardware**? PicoClaw, NullClaw, ZeroClaw.  
- Want **max security/isolation**? NanoClaw, IronClaw, ZeptoClaw, or **NemoClaw** (vendor sandbox stack).  
- Want **easiest to read/hack**? Nanobot.  
- Want **full-featured like OpenClaw**? OpenFang or stick with original + audit it.  
- Want **hosted / less ops**? Kimi Claw, MaxClaw.  
- Running on **tiny device**? zclaw/MimiClaw.  
- **Not a drop-in but same problem space:** Hermes Agent, Playwright + MCP, Moltbook (social layer).

**Performance snapshot** (from community data): OpenClaw is ~430k LOC / 1.5GB RAM / 6s start. Most alts are 10-100x smaller/faster.

Full curated list (30+ entries) here if you want deeper: https://github.com/T31K/awesome-openclaw-alternatives. Check stars, last commit, and SECURITY.md on each repo before running (OpenClaw had real permission risks). Test one at a time.
