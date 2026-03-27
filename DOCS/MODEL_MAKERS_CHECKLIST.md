<!-- PRESERVATION RULE: Never delete or replace content. Append or annotate only. -->

# Model makers checklist

**Purpose:** Single checklist of **labs / companies / developers** that appear as **LLM (or foundation model) makers** on this site, so future agents and humans can keep the museum, search index, and provider pages aligned.

**Source of truth (site-visible):**

1. **`museum.html` → Master catalog** — `Developer` column (auto-generated block `#museum-master-catalog`).
2. **Exhibits** — Premium provider pages (`google-gemini.html`, `openai.html`, `anthropic.html`, `xai.html`, `arcee.html`) and regional cards (e.g. HKChat) when the developer is **not** already a catalog value.

**Canonical list (alphabetical, 2026-03):**

- AI21 Labs  
- Alibaba  
- Allen AI  
- Amazon  
- Anthropic  
- Arcee AI *(premium page + gateway; not necessarily every catalog row)*  
- Baidu  
- BharatGen  
- BigScience / HF  
- Bloomberg  
- Cerebras  
- Cursor / Anysphere  
- Databricks  
- DeepSeek  
- EleutherAI  
- ETH / EPFL  
- Fujitsu / Titech et al.  
- Google  
- Google DeepMind  
- HKChat OmniServe Limited *(HKChat exhibit)*  
- Huawei  
- IBM  
- LAION  
- Meta  
- Meta AI  
- Microsoft  
- Microsoft / NVIDIA  
- MiniMax  
- Mistral AI  
- Moonshot AI  
- NVIDIA  
- OpenAI  
- Sarvam AI  
- TII  
- xAI
- Xiaomi *(MiMo-V2-Pro exhibit; not in master catalog `Developer` column as of registry v1.0)*
- Yandex
- Zhipu AI  

**Update procedure (for agents):**

1. After adding or renaming rows in the master catalog (or adding an exhibit with a **new** developer string), re-check uniqueness of `Developer` values.
2. Update the **Model makers checklist** section on `museum.html` if the set of makers changed.
3. **Append** a dated note under [Maintenance log](#maintenance-log) below (do not delete prior log lines).
4. Optional: run `python tools/extract_museum_devs.py` from repo root to print sorted unique `Developer` values from the catalog and diff against this list.

**Related pages:**

- Public mirror of this doc: `museum.html` (Model makers checklist section).
- OpenAI SKU “wall”: `openai.html` (`#openai-wall`).
- OpenAI **Chat / Completion model IDs** (canonical ids + aliases for tooling): `openai.html` (`#openai-chat-completion-ids`).
- OpenAI **ChatGPT lineup** + **API & completion** chronological tables (product vs API churn): `openai.html` (`#openai-versions`).

[AMENDED 2026-03-28]: Related link for `#openai-versions` (ChatGPT lineup + API tables).

[AMENDED 2026-03-28]: Added related link for Chat/Completion ID table (labs checklist unchanged).

[AMENDED 2026-03-28]: **museum.html** checklist UI — **37 makers** total: **35** unique `Developer` values from the auto-generated master catalog (`tools/generate_museum_catalog.py` → `RAW_ROWS`) plus **Arcee AI** and **HKChat OmniServe Limited** (exhibit / premium page; not necessarily every catalog row). Public tiles show **registry v1.0** plus **earliest catalog release month** per maker (parsed from the `Released` column), or **Mar 2026** for exhibit-only rows. Registry header **Updated 28 Mar 2026** marks the checklist **v1.0** layout pass.

[AMENDED 2026-03-28]: Exhibit-only tile **Xiaomi** added (MiMo-V2-Pro flagship card); checklist total **38** tiles = **35** catalog developers + **3** exhibit rows (**Arcee AI**, **HKChat OmniServe Limited**, **Xiaomi**).

## Maintenance log

- **2026-03-28:** **Museum registry v1.0** — `museum.html` model makers section redesigned as a plaque + grid tiles (gold frame, per-maker **v1.0** + date); `css/style.css` registry styles. Checklist count **37** makers (35 catalog + 2 exhibit); dates = earliest `Released` in `RAW_ROWS` per `Developer`.
- **2026-03-28:** **Xiaomi** added as **exhibit-only** registry tile (MiMo-V2-Pro premium flagship); total **38** tiles.
- **2026-03-28:** Initial checklist aligned with master catalog developers plus **Arcee AI** and **HKChat OmniServe Limited**; `openai.html` wall of models section added (`#openai-wall`).
- **2026-03-28:** Related link: `openai.html#openai-chat-completion-ids` — OpenAI Chat & Completion model id + alias reference table (not a maker list; for router/IDE parity).
