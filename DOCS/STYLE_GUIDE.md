# STYLE_GUIDE

**Naming:** camelCase (JS), kebab-case (CSS/files).  
**Limits:** 100 char/line, 50 lines/function, 400 lines/file.  
**Trace:** `// [TRACE: filename.md]` in code when linking to docs.  
**Comments:** WHY only; prefixes: TODO, FIXME, NOTE.  
**Secrets:** Never in code; use `.env` (gitignored) if needed later.

**HTML/CSS:** Semantic HTML; minimal, scoped CSS. No inline scripts from CDNs unless documented in SBOM.
