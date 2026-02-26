/**
 * Badges Module
 * Project type badges on .project-card; country badges on .chat-link-card site-wide.
 * Exposes BADGE_COUNTRY_MAP for companies.js (section h2 badges).
 * [TRACE: DOCS/ARCHITECTURE.md]
 */
(function () {
    'use strict';

    var USA = { flag: '\uD83C\uDDFA\uD83C\uDDF8', label: 'United States' };
    var UK = { flag: '\uD83C\uDDEC\uD83C\uDDE7', label: 'United Kingdom' };
    var FR = { flag: '\uD83C\uDDEB\uD83C\uDDF7', label: 'France' };
    var DE = { flag: '\uD83C\uDDE9\uD83C\uDDEA', label: 'Germany' };
    var CN = { flag: '\uD83C\uDDE8\uD83C\uDDF3', label: 'China' };
    var CA = { flag: '\uD83C\uDDE8\uD83C\uDDE6', label: 'Canada' };
    var IL = { flag: '\uD83C\uDDEE\uD83C\uDDF1', label: 'Israel' };
    var UAE = { flag: '\uD83C\uDDE6\uD83C\uDDEA', label: 'UAE' };
    var AU = { flag: '\uD83C\uDDE6\uD83C\uDDFA', label: 'Australia' };
    var SG = { flag: '\uD83C\uDDF8\uD83C\uDDEC', label: 'Singapore' };
    var RU = { flag: '\uD83C\uDDF7\uD83C\uDDFA', label: 'Russia' };
    var CH = { flag: '\uD83C\uDDE8\uD83C\uDDF4', label: 'Switzerland' };
    var IN = { flag: '\uD83C\uDDEE\uD83C\uDDF3', label: 'India' };

    var COUNTRY_MAP = {
        'Google': USA, 'OpenAI': USA, 'Anthropic': USA, 'Meta': USA, 'Microsoft': USA, 'xAI': USA,
        'Cursor': USA, 'Mistral': FR, 'Amazon': USA, 'Alibaba / QwenLM': CN, 'DeepSeek': CN,
        'Perplexity': USA, 'Genspark': USA, 'Moonshot AI': CN, 'Minimax': CN, 'GDevelop': CH, 'IBM': USA,
        'Zhipu AI': CN, 'Quora': USA, 'Character.AI': USA, 'Inflection': USA, 'Cohere': CA,
        'Abacus.AI': USA, 'Allen Institute for AI': USA, 'DuckDuckGo': USA, 'QuillBot': USA,
        'OpenRouter': USA, 'Groq': USA, 'GitHub': USA, 'SambaNova': USA, 'Cerebras': USA,
        'Hugging Face': FR, 'Docker': USA, 'StackBlitz': USA, 'Replit': USA, 'Railway': USA,
        'Warp': USA, 'Factory': USA, 'Charm Bracelet': USA, 'Netlify': USA, 'Cloudflare': USA,
        'Vercel': USA, 'Supabase': SG, 'MongoDB': USA, 'Adobe': USA, 'Figma': USA,
        'Stability AI': UK, 'Black Forest Labs': DE, 'Runway': USA, 'DeepAI': USA, 'Midjourney': USA,
        'Ideogram': CA, 'Recraft': UK, 'Leonardo.ai': UK, 'Luma': USA, 'ElevenLabs': USA,
        'Suno': USA, 'Udio': USA, 'Artlist': IL, 'Synthesia': UK, 'HeyGen': USA, 'Rosebud AI': USA,
        'itch.io': USA, 'Armor Games': USA, 'Newgrounds': USA, 'Nous Research': USA, 'Public AI': CH,
        'StepFun': CN, 'TII (Falcon)': UAE, 'K2 Think (MBZUAI)': UAE, 'Tencent Hunyuan': CN,
        'vLLM': USA, 'Yandex': RU, 'Snyk': IL, 'Tabnine': IL, 'Sourcegraph': USA, 'Mintlify': USA,
        'Descript': USA, 'Canva': AU, 'You.com': USA, 'Wix': IL, 'Hostinger': { flag: '\uD83C\uDDF1\uD83C\uDDF9', label: 'Lithuania' },
        'Lumio AI': IN, 'Jabali': USA, 'Agent Opus': USA, 'Arena': USA, 'Anything (Create.xyz)': USA,
        'Builder': USA, 'Biela': USA, 'Emergent': USA, 'Squarespace': USA, 'Sup AI': USA,
        'Arcee AI': USA, 'Rocket': USA, 'JDoodle': SG, 'Amp': USA, 'TRAE': USA, 'Wispr': USA,
        'Vibecode': USA, 'Pika': USA, 'Design Arena': USA, 'Higgsfield': USA, 'SuperMaker AI': USA,
        'Cuzi AI': USA, 'MusicAI': USA, 'PlayHop': USA, 'Deep Cogito': USA, 'Dolphin (dphn.ai)': USA,
        'LongCat': USA, 'ZenMux': USA, 'Qoder': USA, 'OpenCode': USA, 'Kilo': USA, 'Roo Code': USA,
        'Quests': USA, 'Ollama': USA, 'LM Studio': USA,
        'Sora 2': USA, 'Luma Dream Machine': USA, 'Google Flow': USA, 'Veo 3': USA, 'Sparkify': USA,
        'SuperMaker': USA, 'DALL-E 3': USA, 'Grok Imagine': USA, 'Firefly': USA, 'Stable Diffusion': UK,
        'FLUX': DE, 'OpusClip': USA, 'Soundraw': USA, 'Hugging Face Spaces': FR,
        'Dolphin Chat': USA, 'Falcon': UAE, 'K2 Think': UAE, 'LongCat AI': USA, 'Nous Chat': USA,
        'Falcon LLM': UAE, 'Hunyuan AI Studio': CN, 'Builder.io': USA, 'Duck.ai': USA,
        'Allen AI (Ai2)': USA, 'Cohere Chat': CA, 'Deep Agent': USA, 'Anything': USA,
        'SambaNova Playground': USA, 'HuggingChat': FR, 'Bolt': USA, 'bolt.diy': USA,
        'Rocket.new': USA, 'Amp Free': USA, 'Wispr Flow': USA, 'Wix AI': IL, 'Crush': FR,
        'Horizons': USA, 'Cloudflare AI': USA, 'Cloudflare Pages': USA, 'MongoDB Atlas': USA,
        'Adobe Firefly': USA, 'Amazon Q': USA, 'Higgsfield Assist': USA, 'Qoder CLI': USA,
        'Kilo Code': USA, 'vLLM (vllm.ai)': USA, 'Yandex Games': RU, 'Pi': USA, 'Groq Cloud': USA,
        'Project Mariner': USA, 'Stitch': USA, 'Vertex AI': USA, 'API Platform': USA,
        'ChatGPT Images': USA, 'Codex CLI': USA, 'Codex IDE': USA, 'Sora': USA, 'API Console': USA,
        'Claude (desktop & mobile)': USA, 'Model Context Protocol (MCP)': USA,
        'Llama': USA, 'Manus': USA, 'Meta AI': USA, 'Azure OpenAI': USA, 'Copilot': USA,
        'GitHub Copilot': USA, 'Grok': USA, 'Le Chat': FR, 'Mistral Vibe': FR, 'Amazon Nova': USA,
        'AWS Bedrock': USA, 'Qwen': CN, 'Qwen Code': CN, 'DeepSeek Chat': CN, 'Kimi': CN,
        'Kimi Code CLI': CN, 'IBM Granite': USA, 'Project Bob': USA, 'Z.ai': CN, 'Z.ai GLM Coding Plan': CN, 'GLM Coding Plan': CN, 'Poe': USA,
        'Squarespace AI': USA, 'OpenClaw': USA, 'Moltbook': USA, 'Kiro': USA,
        /* Google products (all US) */
        'AI Studio': USA, 'Android Studio': USA, 'Antigravity': USA, 'Firebase': USA,
        'Flow': USA, 'Gemini': USA, 'Gemini CLI': USA, 'Gemini CLI GitHub': USA, 'Google Labs': USA, 'Jules': USA,
        'NotebookLM': USA, 'Opal': USA, 'Pomelli': USA, 'Google Antigravity': USA,
        'Google AI Studio': USA, 'Google Flow': USA, 'Firebase Studio': USA,
        /* OpenAI / Microsoft (US) */
        'OpenAI Codex': USA, 'OpenAI Codex CLI': USA,
        /* Other products by company */
        'Zencoder': USA, 'Augment Code': USA, 'Augment CLI': USA, 'IBM Project Bob': USA,
        'Windsurf': USA, 'Z Code': USA, 'Ghostty': USA, 'Amazon Q Developer': USA, 'CodeGPT': USA, 'Sourcegraph Cody': USA,
        'Cline CLI': USA, 'Hostinger Horizons': { flag: '\uD83C\uDDF1\uD83C\uDDF9', label: 'Lithuania' },
        'Lovable': USA, 'v0': USA, 'Jan': USA, 'Msty': USA, 'NVIDIA ChatRTX': USA,
        'Open WebUI': USA, 'Brave Leo': USA, 'Dia Browser': USA, 'Abacus AI Deep Agent': USA,
        'Base44': USA, 'LLMChat': USA, 'Localtunnel': USA, 'reTunnel': USA,
        'Tunnelmole': UK, 'itch.io (game dev)': USA, 'Algolia': FR, 'Discord Developers': USA,
        'findmypapers.ai': USA, 'HTML Online Viewer': USA, 'Spec Kit': USA,
        'There\'s An AI For That': UK, 'WebLLM': USA,
        'Tencent': CN, 'Allen AI': USA,
        'Anything (create.xyz)': USA,
        'Zread': CN, 'Code Wiki': USA,
        'Codeium': USA, 'Continue': USA, 'MCP Directory': USA, 'Kuaishou': CN, 'Lightricks': IL,
        'Kling': CN, 'LTX Video': IL, 'Lightricks': IL, 'Kuaishou': CN,
        'Gemini Code Assist (free)': USA, 'p5js AI': USA, 'Llama 4': USA
    };
    window.BADGE_COUNTRY_MAP = COUNTRY_MAP;

    function injectCountryBadgesOnCards() {
        document.querySelectorAll('.chat-link-card').forEach(function (card) {
            var nameEl = card.querySelector('.chat-link-name');
            if (!nameEl) return;
            var name = nameEl.textContent.trim();
            var country = COUNTRY_MAP[name];
            if (!country) return;
            var badge = document.createElement('span');
            badge.className = 'country-badge';
            badge.setAttribute('title', 'Origin: ' + country.label);
            badge.setAttribute('aria-label', 'Origin: ' + country.label);
            badge.textContent = country.label;
            card.insertBefore(badge, card.firstChild);
        });
    }

    // Project type mappings
    var games = [
        'kingdom.io', 'GaelDrive', 'FireFest', 'Brain-Busters', 'Click-It-Goin',
        'otter.planes.io', 'Runes-of-Tir-na-nOg', 'Zombobs', 'Fable-Forged', 'Game-Runic-Lands'
    ];
    var music = ['Aethereal Hymns', 'Audacious', 'BlockBanger'];
    var minecraft = ['Feeshman Deelux', 'Chipper Chopper', 'MC-Companion-Map'];
    var android = ['Proof Of Purchase', 'Nebula-Camera', 'Brain-Busters', 'Lorenzez-Notez', 'Meal_Mate'];

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.project-card').forEach(function (card) {
            var title = card.querySelector('.project-title');
            if (!title) return;

            var t = title.textContent.trim();
            var isGame = t.indexOf('GAME-') === 0 || t.indexOf('Game:') === 0 || games.indexOf(t) !== -1;
            var isMusic = music.indexOf(t) !== -1;
            var isMinecraft = minecraft.indexOf(t) !== -1;
            var isAndroid = android.indexOf(t) !== -1;

            var types = [];
            if (isMinecraft) types.push('minecraft');
            if (isMusic) types.push('music');
            if (isAndroid) types.push('android');
            if (isGame) types.push('game');
            if (types.length === 0) types.push('software');

            var wrap = document.createElement('div');
            wrap.className = 'project-badges';

            types.forEach(function (type) {
                var badge = document.createElement('span');
                badge.className = 'project-badge badge-' + type;
                badge.textContent = type.charAt(0).toUpperCase() + type.slice(1);
                wrap.appendChild(badge);
            });

            card.insertBefore(wrap, card.firstChild);
        });

        // Inject URLs into chat cards
        document.querySelectorAll('.chat-link-card').forEach(function (card) {
            if (!card.href) return;
            try {
                var url = new URL(card.href);
                var domain = url.hostname.replace(/^www\./, '');
                var span = document.createElement('span');
                span.className = 'chat-link-url';
                span.textContent = domain;
                card.appendChild(span);
            } catch (e) {
                // ignore invalid URLs
            }
        });

        injectCountryBadgesOnCards();
    });
})();
