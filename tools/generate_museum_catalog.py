# Museum master catalog: writes UTF-8 museum_catalog_fragment.html (125+ rows).
# Refresh the live page: python tools/generate_museum_catalog.py
#   && python tools/update_museum_catalog_embed.py

RAW_ROWS = [
    # 2018-2020
    ("GPT-1", "Jun 2018", "OpenAI", "0.117B", "-", "MIT", "First GPT; decoder-only transformer.", "open"),
    ("BERT", "Oct 2018", "Google", "0.34B", "3.3B words", "Apache-2.0", "Encoder-only; highly influential.", "open"),
    ("GPT-2", "Feb 2019", "OpenAI", "1.5B", "~10B tokens", "MIT", "Scaled LM generation.", "open"),
    ("T5", "Oct 2019", "Google", "11B", "34B tokens", "Apache-2.0", "Text-to-text transfer transformer.", "open"),
    ("XLNet", "Jun 2019", "Google", "0.34B", "33B words", "Apache-2.0", "Permutation LM.", "open"),
    ("GPT-3", "May 2020", "OpenAI", "175B", "300B tokens", "Proprietary", "Few-shot learning at scale.", "prop"),
    ("GPT-Neo", "Mar 2021", "EleutherAI", "2.7B", "825 GiB", "MIT", "Open GPT-3-class alternative.", "open"),
    ("GPT-J", "Jun 2021", "EleutherAI", "6B", "The Pile", "Apache-2.0", "Open autoregressive model.", "open"),
    ("Megatron-Turing NLG", "Oct 2021", "Microsoft / NVIDIA", "530B", "338.6B tokens", "Unreleased", "Large-scale training on Selene.", "unrel"),
    # 2021-2022
    ("Ernie 3.0 Titan", "Dec 2021", "Baidu", "260B", "4 TB", "Proprietary", "Chinese LLM; Ernie Bot lineage.", "prop"),
    ("Claude", "Dec 2021", "Anthropic", "52B", "400B tokens", "Proprietary", "RLHF-style alignment focus.", "prop"),
    ("GLaM", "Dec 2021", "Google", "1200B MoE", "1.6T tokens", "Proprietary", "Sparse MoE generalist.", "prop"),
    ("Gopher", "Dec 2021", "Google DeepMind", "280B", "300B tokens", "Proprietary", "Later led to Chinchilla scaling insights.", "prop"),
    ("LaMDA", "Jan 2022", "Google", "137B", "1.56T words", "Proprietary", "Dialog-specialized.", "prop"),
    ("GPT-NeoX", "Feb 2022", "EleutherAI", "20B", "825 GiB", "Apache-2.0", "Megatron-based.", "open"),
    ("Chinchilla", "Mar 2022", "Google DeepMind", "70B", "1.4T tokens", "Proprietary", "Compute-optimal scaling law.", "prop"),
    ("PaLM", "Apr 2022", "Google", "540B", "768B tokens", "Proprietary", "Pathways large model.", "prop"),
    ("OPT", "May 2022", "Meta", "175B", "180B tokens", "Non-commercial", "Open replication effort + logbook.", "restricted"),
    ("YaLM 100B", "Jun 2022", "Yandex", "100B", "1.7 TB", "Apache-2.0", "EN–RU bilingual.", "open"),
    ("Minerva", "Jun 2022", "Google", "540B", "38.5B (math)", "Proprietary", "STEM reasoning; from PaLM.", "prop"),
    # 2022-2023
    ("BLOOM", "Jul 2022", "BigScience / HF", "175B", "350B tokens", "RAIL", "Multilingual open collaboration.", "restricted"),
    ("Galactica", "Nov 2022", "Meta", "120B", "106B tokens", "CC-BY-NC-4.0", "Scientific corpora.", "restricted"),
    ("AlexaTM", "Nov 2022", "Amazon", "20B", "1.3T tokens", "Proprietary", "Seq2seq architecture.", "prop"),
    ("Llama", "Feb 2023", "Meta AI", "65B", "1.4T tokens", "Research-only", "Open-weights wave.", "restricted"),
    ("GPT-4", "Mar 2023", "OpenAI", "Unknown", "Unknown", "Proprietary", "Multimodal flagship era.", "prop"),
    ("Cerebras-GPT", "Mar 2023", "Cerebras", "13B", "-", "Apache-2.0", "Chinchilla-optimal training.", "open"),
    ("Falcon", "Mar 2023", "TII", "40B", "1T tokens", "Apache-2.0", "RefinedWeb + curated.", "open"),
    ("BloombergGPT", "Mar 2023", "Bloomberg", "50B", "708B mixed", "Unreleased", "Finance-tuned.", "unrel"),
    ("PanGu-Σ", "Mar 2023", "Huawei", "1085B", "329B tokens", "Proprietary", "Very large dense/MoE stack.", "prop"),
    ("OpenAssistant", "Mar 2023", "LAION", "17B", "1.5T tokens", "Apache-2.0", "Crowdsourced RLHF data.", "open"),
    ("Jurassic-2", "Mar 2023", "AI21 Labs", "Unknown", "-", "Proprietary", "API-first.", "prop"),
    ("PaLM 2", "May 2023", "Google", "340B", "3.6T tokens", "Proprietary", "Bard / workspace era.", "prop"),
    # 2023-2024
    ("YandexGPT", "May 2023", "Yandex", "Unknown", "-", "Proprietary", "Alice assistant.", "prop"),
    ("Llama 2", "Jul 2023", "Meta AI", "70B", "2T tokens", "Llama 2 license", "Widespread finetunes.", "restricted"),
    ("Claude 2", "Jul 2023", "Anthropic", "Unknown", "-", "Proprietary", "Long-context Claude chat.", "prop"),
    ("Granite 13B", "Jul 2023", "IBM", "13B", "-", "Proprietary", "watsonx.ai stack.", "prop"),
    ("Mistral 7B", "Sep 2023", "Mistral AI", "7.3B", "-", "Apache-2.0", "Efficient open weights.", "open"),
    ("Claude 2.1", "Nov 2023", "Anthropic", "Unknown", "-", "Proprietary", "~200K token context.", "prop"),
    ("Grok 1", "Nov 2023", "xAI", "314B", "-", "Apache-2.0", "Open-weight release; X integration.", "open"),
    ("Gemini 1.0", "Dec 2023", "Google DeepMind", "Unknown", "-", "Proprietary", "Multimodal family.", "prop"),
    ("Mistral 8x7B", "Dec 2023", "Mistral AI", "46.7B MoE", "-", "Apache-2.0", "MoE; strong benchmarks.", "open"),
    ("DeepSeek-LLM", "Nov 2023", "DeepSeek", "67B", "2T tokens", "DeepSeek License", "EN + Chinese.", "restricted"),
    ("Phi-2", "Dec 2023", "Microsoft", "2.7B", "1.4T tokens", "MIT", "Textbook-quality data.", "open"),
    ("Gemini 1.5", "Feb 2024", "Google DeepMind", "Unknown", "-", "Proprietary", "1M+ token context.", "prop"),
    ("Gemini Ultra", "Feb 2024", "Google DeepMind", "Unknown", "-", "Proprietary", "Benchmark-focused tier.", "prop"),
    ("Gemma", "Feb 2024", "Google DeepMind", "7B", "6T tokens", "Gemma terms", "Open-ish small models.", "restricted"),
    ("OLMo", "Feb 2024", "Allen AI", "7B", "2T tokens", "Apache-2.0", "Fully open pipeline.", "open"),
    ("Claude 3", "Mar 2024", "Anthropic", "Unknown", "-", "Proprietary", "Haiku / Sonnet / Opus.", "prop"),
    ("DBRX", "Mar 2024", "Databricks", "136B", "12T tokens", "DBRX license", "MoE; Mosaic training.", "restricted"),
    ("Mixtral 8x22B", "Apr 2024", "Mistral AI", "141B MoE", "-", "Apache-2.0", "Larger MoE.", "open"),
    ("Phi-3", "Apr 2024", "Microsoft", "14B", "4.8T tokens", "MIT", "SLM marketing wave.", "open"),
    ("Qwen2", "Jun 2024", "Alibaba", "72B", "3T tokens", "Qwen license", "Multilingual.", "restricted"),
    ("DeepSeek-V2", "Jun 2024", "DeepSeek", "236B MoE", "8.1T tokens", "DeepSeek License", "Economic training.", "restricted"),
    ("Nemotron-4", "Jun 2024", "NVIDIA", "340B", "9T tokens", "NVIDIA license", "H100 cluster training.", "restricted"),
    ("Claude 3.5", "Jun 2024", "Anthropic", "Unknown", "-", "Proprietary", "Sonnet-led coding surge.", "prop"),
    ("Llama 3.1", "Jul 2024", "Meta AI", "405B", "15.6T tokens", "Llama 3 license", "405B flagship open-ish.", "restricted"),
    ("Grok-2", "Aug 2024", "xAI", "Unknown", "-", "xAI license", "Later Grok 2.5 source-available.", "restricted"),
    # 2024-2025
    ("OpenAI o1", "Sep 2024", "OpenAI", "Unknown", "-", "Proprietary", "Explicit reasoning model.", "prop"),
    ("Mistral Large", "Nov 2024", "Mistral AI", "123B", "-", "Mistral Research", "API flagship.", "restricted"),
    ("Pixtral", "Nov 2024", "Mistral AI", "123B", "-", "Mistral Research", "Multimodal.", "restricted"),
    ("OLMo 2", "Nov 2024", "Allen AI", "32B", "6.6T tokens", "Apache-2.0", "Open research LM.", "open"),
    ("Phi-4", "Dec 2024", "Microsoft", "14B", "9.8T tokens", "MIT", "SLM continued.", "open"),
    ("DeepSeek-V3", "Dec 2024", "DeepSeek", "671B MoE", "14.8T tokens", "MIT", "Cost-shock open weights.", "open"),
    ("Amazon Nova", "Dec 2024", "Amazon", "Unknown", "-", "Proprietary", "Micro / Lite / Pro.", "prop"),
    ("DeepSeek-R1", "Jan 2025", "DeepSeek", "671B", "RL only", "MIT", "Reasoning from base.", "open"),
    ("Qwen2.5", "Jan 2025", "Alibaba", "72B", "18T tokens", "Qwen license", "Dense + MoE lineup.", "restricted"),
    ("MiniMax-Text-01", "Jan 2025", "MiniMax", "456B", "4.7T tokens", "MiniMax license", "Long-context focus.", "restricted"),
    ("Gemini 2.0", "Feb 2025", "Google DeepMind", "Unknown", "-", "Proprietary", "Flash / Flash-Lite / Pro.", "prop"),
    ("Claude 3.7", "Feb 2025", "Anthropic", "Unknown", "-", "Proprietary", "Sonnet + extended thinking.", "prop"),
    ("GPT-4.5", "Feb 2025", "OpenAI", "Unknown", "-", "Proprietary", "Largest non-reasoning GPT then.", "prop"),
    ("Grok 3", "Feb 2025", "xAI", "Unknown", "-", "Proprietary", "Massive compute claims.", "prop"),
    ("Gemini 2.5", "Mar 2025", "Google DeepMind", "Unknown", "-", "Proprietary", "Flash / Flash-Lite / Pro.", "prop"),
    ("Llama 4", "Apr 2025", "Meta AI", "400B", "40T tokens", "Llama 4 license", "Multimodal natively.", "restricted"),
    ("OpenAI o3 / o4-mini", "Apr 2025", "OpenAI", "Unknown", "-", "Proprietary", "Reasoning stack.", "prop"),
    ("Qwen3", "Apr 2025", "Alibaba", "235B", "36T tokens", "Apache-2.0", "Many sizes down to 0.6B.", "open"),
    ("Claude 4", "May 2025", "Anthropic", "Unknown", "-", "Proprietary", "Sonnet + Opus refresh.", "prop"),
    ("Sarvam-M", "May 2025", "Sarvam AI", "24B", "-", "Apache-2.0", "India-focused reasoning.", "open"),
    ("Grok 4", "Jul 2025", "xAI", "Unknown", "-", "Proprietary", "Frontier Grok line.", "prop"),
    ("Param-1", "Jul 2025", "BharatGen", "2.9B", "5T tokens", "Unknown", "Indic languages.", "restricted"),
    ("GLM-4.5", "Jul 2025", "Zhipu AI", "355B MoE", "22T tokens", "MIT", "335B / 106B sizes.", "open"),
    ("GPT-OSS", "Aug 2025", "OpenAI", "117B", "-", "Apache-2.0", "20B + 120B open weights.", "open"),
    ("Claude 4.1", "Aug 2025", "Anthropic", "Unknown", "-", "Proprietary", "Opus refresh.", "prop"),
    ("GPT-5", "Aug 2025", "OpenAI", "Unknown", "-", "Proprietary", "Mini / nano / full family.", "prop"),
    # 2025-2026
    ("DeepSeek-V3.1", "Aug 2025", "DeepSeek", "671B", "15.6T+ tokens", "MIT", "Hybrid thinking modes.", "open"),
    ("Apertus", "Sep 2025", "ETH / EPFL", "70B", "15T tokens", "Apache-2.0", "EU AI Act positioning.", "open"),
    ("Claude Sonnet 4.5", "Sep 2025", "Anthropic", "Unknown", "-", "Proprietary", "Coding + agents.", "prop"),
    ("DeepSeek-V3.2-Exp", "Sep 2025", "DeepSeek", "685B", "-", "MIT", "DSA sparse attention.", "open"),
    ("GLM-4.6", "Sep 2025", "Zhipu AI", "357B", "-", "Apache-2.0", "Open flagship coding.", "open"),
    ("Gemini 3", "Nov 2025", "Google DeepMind", "Unknown", "-", "Proprietary", "Deep Think / Pro tiers.", "prop"),
    ("Olmo 3", "Nov 2025", "Allen AI", "32B", "5.9T tokens", "Apache-2.0", "7B + 32B reasoning.", "open"),
    ("Claude Opus 4.5", "Nov 2025", "Anthropic", "Unknown", "-", "Proprietary", "Largest Claude then.", "prop"),
    ("GPT-5.2", "Dec 2025", "OpenAI", "Unknown", "-", "Proprietary", "Reasoning + pro workloads.", "prop"),
    ("GLM-4.7", "Dec 2025", "Zhipu AI", "355B MoE", "-", "Apache-2.0", "MoE SOTA coding claims.", "open"),
    ("Qwen3-Max-Thinking", "Jan 2026", "Alibaba", "Unknown", "-", "Proprietary", "Adaptive tool use.", "prop"),
    ("Kimi K2.5", "Jan 2026", "Moonshot AI", "1040B MoE", "15T tokens", "Modified MIT", "32B active; multimodal.", "restricted"),
    ("Claude Opus 4.6", "Feb 2026", "Anthropic", "Unknown", "-", "Proprietary", "Frontier Claude.", "prop"),
    ("GPT-5.3-Codex", "Feb 2026", "OpenAI", "Unknown", "-", "Proprietary", "Agentic coding line.", "prop"),
    ("GLM-5", "Feb 2026", "Zhipu AI", "754B", "-", "MIT", "DSA; 200K context.", "open"),
    ("Param-2", "Feb 2026", "BharatGen", "17B MoE", "~22T tokens", "Unknown", "More Indic langs.", "restricted"),
    ("Sarvam-1", "Feb 2026", "Sarvam AI", "105B MoE", "~12T tokens", "Apache-2.0", "India foundation model.", "open"),
    ("GPT-5.4", "Mar 2026", "OpenAI", "Unknown", "-", "Proprietary", "Thinking + Pro variants.", "prop"),
    ("Grok 4.20", "2026", "xAI", "Unknown", "-", "Proprietary", "Picker label; see Grok 4 article.", "prop"),
    ("Gemini 3.1 Pro", "2026", "Google DeepMind", "Unknown", "-", "Proprietary", "Pro tier naming in tools.", "prop"),
    ("Composer 2", "2026", "Cursor / Anysphere", "-", "-", "Proprietary", "IDE agent flagship (product).", "prop"),
    # --- Gap-fill: notable public releases (same scope as Wikipedia list; not every private checkpoint) ---
    ("Codex", "Aug 2021", "OpenAI", "12B", "-", "Proprietary", "Code fine-tune of GPT-3 lineage.", "prop"),
    ("InstructGPT", "Jan 2022", "OpenAI", "175B", "-", "Proprietary", "RLHF alignment showcase.", "prop"),
    ("GPT-4 Turbo", "Nov 2023", "OpenAI", "Unknown", "-", "Proprietary", "128K context; cheaper GPT-4 class.", "prop"),
    ("YandexGPT 2", "Sep 2023", "Yandex", "Unknown", "-", "Proprietary", "Alice assistant update.", "prop"),
    ("Llama 3", "Apr 2024", "Meta AI", "8-70B", "15T tokens", "Llama 3 license", "Dense family before 3.1.", "restricted"),
    ("GPT-4o", "May 2024", "OpenAI", "Unknown", "-", "Proprietary", "Omni multimodal flagship.", "prop"),
    ("YandexGPT 3 Pro", "Mar 2024", "Yandex", "Unknown", "-", "Proprietary", "Alice chatbot.", "prop"),
    ("YandexGPT 3 Lite", "May 2024", "Yandex", "Unknown", "-", "Proprietary", "Alice chatbot.", "prop"),
    ("Fugaku-LLM", "May 2024", "Fujitsu / Titech et al.", "13B", "380B tokens", "Fugaku terms", "CPU-trained on Fugaku.", "restricted"),
    ("Chameleon", "May 2024", "Meta AI", "34B", "4.4T tokens", "Non-commercial", "Early-token fusion multimodal.", "restricted"),
    ("o1-mini", "Sep 2024", "OpenAI", "Unknown", "-", "Proprietary", "Smaller reasoning model.", "prop"),
    ("YandexGPT 4 Lite/Pro", "Oct 2024", "Yandex", "Unknown", "-", "Proprietary", "Alice chatbot.", "prop"),
    ("Llama 3.2", "Sep 2024", "Meta AI", "1-90B", "-", "Llama 3.2 license", "Vision + text stack.", "restricted"),
    ("Llama 3.3 70B", "Dec 2024", "Meta AI", "70B", "-", "Llama 3.3 license", "Strong 70B after 405B 3.1.", "restricted"),
    ("DeepSeek-V3-0324", "Mar 2025", "DeepSeek", "671B", "14.8T+ ext.", "MIT", "V3 refresh checkpoint.", "open"),
    ("YandexGPT 5 Lite Pretrain/Pro", "Feb 2025", "Yandex", "Unknown", "-", "Proprietary", "Alice Neural Network.", "prop"),
    ("YandexGPT 5 Lite Instruct", "Mar 2025", "Yandex", "Unknown", "-", "Proprietary", "Alice Neural Network.", "prop"),
    ("Gemini 2.5 Flash", "Mar 2025", "Google DeepMind", "Unknown", "-", "Proprietary", "Fast tier in 2.5 family.", "prop"),
    ("YandexGPT 5.1 Pro", "Aug 2025", "Yandex", "Unknown", "-", "Proprietary", "Alice Neural Network.", "prop"),
    ("Alice AI LLM 1.0", "Oct 2025", "Yandex", "Unknown", "-", "Proprietary", "Alice AI chatbot.", "prop"),
    ("Claude Haiku 4.5", "Oct 2025", "Anthropic", "Unknown", "-", "Proprietary", "Fast Claude tier (companion lineup).", "prop"),
]

def _pad(row):
    """8-tuple adds '-' compute; 9-tuple is (..., compute, license, notes, kind)."""
    if len(row) == 9:
        return row
    if len(row) == 8:
        m, d, dev, p, dat, lic, n, lt = row
        return (m, d, dev, p, dat, "-", lic, n, lt)
    raise ValueError("ROW must be length 8 or 9")


ROWS = [_pad(r) for r in RAW_ROWS]

LICENSE_CLASS = {
    "prop": "license-pill license-pill--prop",
    "open": "license-pill license-pill--open",
    "restricted": "license-pill license-pill--restricted",
    "unrel": "license-pill license-pill--unrel",
}


def esc(s):
    return (
        s.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
    )


def main():
    from pathlib import Path

    lines = []
    w = lines.append
    w(f"<!-- AUTO-GENERATED: {len(ROWS)} rows -->")
    w(
        '<div id="museum-master-catalog" class="museum-table-wrap" '
        'role="region" aria-label="LLM index table" tabindex="0">'
    )
    w('<table class="museum-table">')
    w("<thead><tr>")
    for h in (
        "Model",
        "Released",
        "Developer",
        "Parameters",
        "Training data",
        "Compute / cost",
        "License",
        "Notes",
    ):
        w(f"<th scope='col'>{h}</th>")
    w("</tr></thead><tbody>")
    for r in ROWS:
        model, date, dev, params, data, compute, lic, notes, lt = r
        cls = LICENSE_CLASS.get(lt, "license-pill license-pill--restricted")
        w("<tr>")
        w(f"<th scope='row'>{esc(model)}</th>")
        w(f"<td>{esc(date)}</td>")
        w(f"<td>{esc(dev)}</td>")
        w(f"<td>{esc(params)}</td>")
        w(f"<td>{esc(data)}</td>")
        w(f"<td>{esc(compute)}</td>")
        w(f"<td><span class='{cls}'>{esc(lic)}</span></td>")
        w(f"<td>{esc(notes)}</td>")
        w("</tr>")
    w("</tbody></table></div>")
    text = "\n".join(lines) + "\n"
    root = Path(__file__).resolve().parent.parent
    out = root / "museum_catalog_fragment.html"
    out.write_text(text, encoding="utf-8")
    print(f"Wrote {out} ({len(ROWS)} rows)")


if __name__ == "__main__":
    main()
