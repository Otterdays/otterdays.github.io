/**
 * Explore page: premium data visualization from SEARCH_DATA.
 * [TRACE: DOCS/ARCHITECTURE.md]
 */
(function () {
  'use strict';

  // NOTE: colors should feel distinct and premium — avoid flat defaults
  var CATEGORY_COLORS = {
    project:  '#58a6ff',
    chat:     '#10a37f',
    media:    '#f59e0b',
    company:  '#8b5cf6',
    tool:     '#ef4444',
    special:  '#f97316',
    page:     '#6366f1'
  };

  var CATEGORY_LABELS = {
    project: 'Projects',
    chat:    'AI Chats',
    media:   'Media',
    company: 'Companies',
    tool:    'Tools',
    special: 'Specials',
    page:    'Pages'
  };

  var CATEGORY_ICONS = {
    project: '🎮',
    chat:    '💬',
    media:   '🎨',
    company: '🏢',
    tool:    '🛠️',
    special: '⭐',
    page:    '📄'
  };

  var PAGE_LABELS = {
    'tools.html':               'Tools',
    'companies.html':           'Companies',
    'chats.html':               'AI Chats',
    'media.html':               'Media Gen',
    'programs.html':            'Programs',
    'specials.html':            'Specials',
    'skills.html':              'Skills',
    'inspirations.html':        'Inspirations',
    'about.html':               'About',
    'updates.html':             'Updates',
    'posts.html':               'Posts',
    'informational-links.html': 'Info Links',
    'museum.html':              'AI Museum',
    'offline-survival.html':    'Offline survival',
    'google-gemini.html':       'Gemini',
    'openai.html':              'OpenAI',
    'anthropic.html':           'Anthropic',
    'xai.html':                 'xAI',
    'arcee.html':               'Arcee AI',
    'index.html':               'Home',
    'explore.html':             'Explore'
  };

  // ── entry ────────────────────────────────────────────────────────────────

  function run() {
    if (typeof SEARCH_DATA === 'undefined') return;
    var data = SEARCH_DATA;

    // Aggregate
    var byCategory  = {};
    var byUrl       = {}; // counts per internal page
    var tagCounts   = {};
    var companies   = 0;
    var totalTags   = 0;
    var itemsWithTags = 0;
    var externalLinkCount = 0;
    var titleLengths  = [];
    var descLengths   = [];

    var siteRoot = 'https://otterdays.github.io/';

    data.forEach(function (item) {
      var cat = item.category || 'page';
      byCategory[cat] = (byCategory[cat] || 0) + 1;
      if (cat === 'company') companies++;

      var rawUrl = item.url || 'index.html';
      var isExternal = rawUrl.match(/^http/) && rawUrl.indexOf(siteRoot) !== 0;
      
      if (isExternal) {
        externalLinkCount++;
      } else {
        // Normalize internal: remove domain, remove fragments
        var local = rawUrl.replace(siteRoot, '').split('#')[0];
        if (!local) local = 'index.html';
        byUrl[local] = (byUrl[local] || 0) + 1;
      }

      var tags = item.tags || [];
      if (tags.length > 0) itemsWithTags++;
      tags.forEach(function (t) {
        var tag = String(t).trim();
        if (tag) { tagCounts[tag] = (tagCounts[tag] || 0) + 1; totalTags++; }
      });
      if (item.title) titleLengths.push(item.title.length);
      if (item.desc)  descLengths.push(item.desc.length);
    });

    var total = data.length;
    animateCounter(document.getElementById('explore-total'), total, 1400);

    // Filter byUrl to only include keys found in PAGE_LABELS or ending in .html 
    // to avoid pollution from sub-apps like GAME-Arteria if they aren't part of "this" site content
    var internalPages = Object.keys(byUrl);
    updateFooterStats(total, companies, internalPages.length);

    var grid = document.getElementById('explore-grid');
    if (!grid) return;

    grid.innerHTML = '';

    var cards = [
      makeStatsSummaryCard(total, totalTags, itemsWithTags, externalLinkCount, titleLengths, descLengths),
      makeDonutCard(byCategory, total),
      makePageBreakdownCard(byUrl),
      makeLinkRatioCard(total, externalLinkCount), // modified signature
      makeTopTagsCard(tagCounts),
      makeTagCloudCard(tagCounts)
    ];

    cards.forEach(function (card, i) {
      card.style.animationDelay = (i * 0.08) + 's';
      card.style.opacity = '0';
      card.style.animation = 'exploreCardIn 0.55s cubic-bezier(0.2,0.8,0.2,1) ' + (i * 0.08) + 's forwards';
      grid.appendChild(card);
    });

    // Animate progress bars after a brief settle
    setTimeout(activateBars, 120);
  }

  // ── cards ────────────────────────────────────────────────────────────────

  function makeStatsSummaryCard(total, totalTags, itemsWithTags, externalLinks, titleLengths, descLengths) {
    var avgTags  = total > 0 ? (totalTags / total).toFixed(1) : 0;
    var uniqTags = Object.keys({}).length; // placeholder — computed below
    var avgTitle = titleLengths.length > 0 ? Math.round(titleLengths.reduce(function (a, b) { return a + b; }, 0) / titleLengths.length) : 0;
    var avgDesc  = descLengths.length > 0  ? Math.round(descLengths.reduce(function (a, b) { return a + b; }, 0) / descLengths.length)  : 0;
    var internalLinks = total - externalLinks;

    var stats = [
      { icon: '🏷️', val: totalTags,     label: 'total tag refs'    },
      { icon: '📊', val: avgTags,        label: 'avg tags / item'   },
      { icon: '🔤', val: avgTitle,       label: 'avg title chars'   },
      { icon: '📝', val: avgDesc,        label: 'avg desc chars'    },
      { icon: '✅', val: itemsWithTags,  label: 'items with tags'   },
      { icon: '🔗', val: internalLinks,  label: 'internal links'    },
      { icon: '🌐', val: externalLinks,  label: 'external links'    },
      { icon: '📄', val: total,          label: 'total indexed'     }
    ];

    var cells = stats.map(function (s) {
      return '<div class="ex-stat">' +
        '<span class="ex-stat-icon">' + s.icon + '</span>' +
        '<span class="ex-stat-val" data-target="' + s.val + '">0</span>' +
        '<span class="ex-stat-label">' + s.label + '</span>' +
        '</div>';
    }).join('');

    var card = makeCard('span-2');
    card.innerHTML = '<h3 class="ex-card-title">📈 Site-wide stats</h3>' +
      '<div class="ex-stats-grid">' + cells + '</div>';

    // animate the inner counters after render
    setTimeout(function () {
      card.querySelectorAll('.ex-stat-val[data-target]').forEach(function (el) {
        var target = parseFloat(el.getAttribute('data-target'));
        animateCounter(el, target, 1100);
      });
    }, 200);

    return card;
  }

  function makeDonutCard(byCategory, total) {
    var order = ['tool', 'company', 'chat', 'project', 'media', 'page', 'special'];
    var segments = [];
    var prev = 0;
    order.forEach(function (cat) {
      var n = byCategory[cat] || 0;
      if (n === 0) return;
      var pct = (n / total) * 100;
      segments.push({ cat: cat, n: n, pct: pct, start: prev, end: prev + pct });
      prev += pct;
    });

    // Build SVG donut
    var cx = 100, cy = 100, r = 78, stroke = 28;
    var circumference = 2 * Math.PI * r;

    var svgPaths = segments.map(function (s, idx) {
      var offset = circumference * (1 - s.start / 100);
      var dash   = circumference * (s.pct / 100);
      var gap    = circumference - dash;
      var color  = CATEGORY_COLORS[s.cat] || '#6366f1';
      return '<circle class="ex-donut-seg" ' +
        'cx="' + cx + '" cy="' + cy + '" r="' + r + '" ' +
        'fill="none" stroke="' + color + '" stroke-width="' + stroke + '" ' +
        'stroke-dasharray="' + dash + ' ' + gap + '" ' +
        'stroke-dashoffset="' + offset + '" ' +
        'data-cat="' + s.cat + '" data-n="' + s.n + '" data-pct="' + s.pct.toFixed(1) + '" ' +
        'style="transition:stroke-width 0.2s ease,opacity 0.2s ease;cursor:pointer;" />';
    }).join('');

    var legend = segments.map(function (s) {
      var color = CATEGORY_COLORS[s.cat] || '#6366f1';
      var icon  = CATEGORY_ICONS[s.cat] || '•';
      var lbl   = CATEGORY_LABELS[s.cat] || s.cat;
      return '<div class="ex-legend-row" data-cat="' + s.cat + '">' +
        '<span class="ex-legend-dot" style="background:' + color + '"></span>' +
        '<span class="ex-legend-icon">' + icon + '</span>' +
        '<span class="ex-legend-name">' + lbl + '</span>' +
        '<span class="ex-legend-n">' + s.n + '</span>' +
        '<span class="ex-legend-pct">' + s.pct.toFixed(0) + '%</span>' +
        '</div>';
    }).join('');

    var card = makeCard('');
    card.innerHTML = '<h3 class="ex-card-title">🍩 By category</h3>' +
      '<div class="ex-donut-wrap">' +
        '<svg viewBox="0 0 200 200" class="ex-donut-svg" aria-label="Category donut chart">' +
          '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="var(--border)" stroke-width="' + stroke + '"/>' +
          svgPaths +
          '<text x="100" y="96" class="ex-donut-center-val" id="ex-donut-val">—</text>' +
          '<text x="100" y="112" class="ex-donut-center-label" id="ex-donut-label">hover</text>' +
        '</svg>' +
        '<div class="ex-legend">' + legend + '</div>' +
      '</div>';

    // hover interactions
    setTimeout(function () {
      var segs    = card.querySelectorAll('.ex-donut-seg');
      var valEl   = card.querySelector('#ex-donut-val');
      var labelEl = card.querySelector('#ex-donut-label');
      var rows    = card.querySelectorAll('.ex-legend-row');

      function highlight(cat) {
        segs.forEach(function (s) {
          if (s.getAttribute('data-cat') === cat) {
            s.setAttribute('stroke-width', stroke + 6);
            var valTxt  = s.getAttribute('data-n');
            var pctTxt  = s.getAttribute('data-pct') + '%';
            valEl.textContent   = valTxt;
            labelEl.textContent = (CATEGORY_LABELS[cat] || cat);
          } else {
            s.setAttribute('stroke-width', stroke);
            s.style.opacity = '0.45';
          }
        });
        rows.forEach(function (r) {
          r.style.opacity = r.getAttribute('data-cat') === cat ? '1' : '0.45';
        });
      }

      function reset() {
        segs.forEach(function (s) { s.setAttribute('stroke-width', stroke); s.style.opacity = '1'; });
        rows.forEach(function (r) { r.style.opacity = '1'; });
        valEl.textContent   = total;
        labelEl.textContent = 'total';
      }

      segs.forEach(function (s) {
        s.addEventListener('mouseenter', function () { highlight(s.getAttribute('data-cat')); });
        s.addEventListener('mouseleave', reset);
      });
      rows.forEach(function (row) {
        row.style.cursor = 'pointer';
        row.addEventListener('mouseenter', function () { highlight(row.getAttribute('data-cat')); });
        row.addEventListener('mouseleave', reset);
      });

      valEl.textContent   = total;
      labelEl.textContent = 'total';
    }, 0);

    return card;
  }

  function makePageBreakdownCard(byUrl) {
    var pages = Object.keys(byUrl).filter(function (u) { return !u.match(/^http/); })
      .sort(function (a, b) { return byUrl[b] - byUrl[a]; });
    var max = pages.reduce(function (m, p) { return Math.max(m, byUrl[p]); }, 1);

    // Top-3 podium
    var podiumHTML = '';
    var top3 = pages.slice(0, 3);
    var heights = ['80px', '60px', '50px'];
    var medals  = ['🥇', '🥈', '🥉'];
    var positions = [1, 0, 2]; // center=1st, left=2nd, right=3rd display order

    // reorder for podium display (2nd, 1st, 3rd)
    var podiumOrder = [top3[1], top3[0], top3[2]].filter(Boolean);
    var podiumHeights = ['60px', '80px', '50px'];
    var podiumMedals  = ['🥈', '🥇', '🥉'];
    var podiumRanks   = [2, 1, 3];

    podiumHTML = '<div class="ex-podium">' +
      podiumOrder.map(function (url, i) {
        var n   = byUrl[url] || 0;
        var lbl = PAGE_LABELS[url] || url.replace('.html', '');
        return '<div class="ex-podium-col">' +
          '<span class="ex-podium-medal">' + podiumMedals[i] + '</span>' +
          '<span class="ex-podium-count">' + n + '</span>' +
          '<div class="ex-podium-block" style="height:' + podiumHeights[i] + '">' +
            '<span class="ex-podium-rank">#' + podiumRanks[i] + '</span>' +
          '</div>' +
          '<span class="ex-podium-label">' + esc(lbl) + '</span>' +
        '</div>';
      }).join('') +
    '</div>';

    // bar rows for remaining pages (capped at 15)
    var barRows = pages.slice(0, 15).map(function (url) {
      var n   = byUrl[url];
      var pct = (n / max) * 100;
      var lbl = PAGE_LABELS[url] || url.replace('.html', '');
      return '<div class="ex-bar-row">' +
        '<span class="ex-bar-label">' + esc(lbl) + '</span>' +
        '<div class="ex-bar-track">' +
          '<div class="ex-bar-fill" data-pct="' + pct + '" style="width:0%"></div>' +
        '</div>' +
        '<span class="ex-bar-val">' + n + '</span>' +
        '<span class="ex-bar-pct">' + pct.toFixed(0) + '%</span>' +
        '</div>';
    }).join('');

    var card = makeCard('span-2');
    card.innerHTML = '<h3 class="ex-card-title">📄 Items per page</h3>' +
      podiumHTML +
      '<div class="ex-bars" id="ex-page-bars">' + barRows + '</div>';
    return card;
  }

  function makeLinkRatioCard(total, external) {
    var internal = total - external;
    var intPct   = total > 0 ? (internal / total) * 100 : 0;
    var extPct   = total > 0 ? (external / total) * 100 : 0;

    var card = makeCard('');
    card.innerHTML = '<h3 class="ex-card-title">🔗 Link distribution</h3>' +
      '<div class="ex-ratio-wrap">' +
        '<div class="ex-ratio-big">' +
          '<span class="ex-ratio-num" style="color:#10a37f">' + internal + '</span>' +
          '<span class="ex-ratio-lbl">internal</span>' +
        '</div>' +
        '<div class="ex-ratio-divider">vs</div>' +
        '<div class="ex-ratio-big">' +
          '<span class="ex-ratio-num" style="color:#f59e0b">' + external + '</span>' +
          '<span class="ex-ratio-lbl">external</span>' +
        '</div>' +
      '</div>' +
      '<div class="ex-splitbar">' +
        '<div class="ex-splitbar-fill ex-splitbar-int" data-pct="' + intPct + '" style="width:0%;background:#10a37f" title="Internal: ' + intPct.toFixed(1) + '%"></div>' +
        '<div class="ex-splitbar-fill ex-splitbar-ext" data-pct="' + extPct + '" style="width:0%;background:#f59e0b" title="External: ' + extPct.toFixed(1) + '%"></div>' +
      '</div>' +
      '<div class="ex-ratio-labels">' +
        '<span>' + intPct.toFixed(0) + '% internal</span>' +
        '<span>' + extPct.toFixed(0) + '% external</span>' +
      '</div>';
    return card;
  }

  function makeTopTagsCard(tagCounts) {
    var tags = Object.keys(tagCounts).sort(function (a, b) { return tagCounts[b] - tagCounts[a]; }).slice(0, 20);
    var max  = tags.length > 0 ? tagCounts[tags[0]] : 1;

    // assign gradient color based on rank
    var rows = tags.map(function (tag, i) {
      var n    = tagCounts[tag];
      var pct  = (n / max) * 100;
      var hue  = 210 + (i * 8);    // shift hue across ranks for vibrancy
      var color = 'hsl(' + hue + ',70%,60%)';
      return '<div class="ex-bar-row">' +
        '<span class="ex-bar-label">' + esc(tag) + '</span>' +
        '<div class="ex-bar-track">' +
          '<div class="ex-bar-fill" data-pct="' + pct + '" style="width:0%;background:' + color + '"></div>' +
        '</div>' +
        '<span class="ex-bar-val">' + n + '</span>' +
        '</div>';
    }).join('');

    var card = makeCard('');
    card.innerHTML = '<h3 class="ex-card-title">🏷️ Top 20 tags</h3>' +
      '<div class="ex-bars" id="ex-tag-bars">' + rows + '</div>';
    return card;
  }

  function makeTagCloudCard(tagCounts) {
    var tags = Object.keys(tagCounts).sort(function (a, b) { return tagCounts[b] - tagCounts[a]; });
    var max  = tags.length > 0 ? tagCounts[tags[0]] : 1;
    var min  = tags.length > 0 ? tagCounts[tags[tags.length - 1]] : 1;

    var cloudHTML = tags.slice(0, 80).map(function (tag) {
      var n     = tagCounts[tag];
      var ratio = max > min ? (n - min) / (max - min) : 1;
      var size  = (0.7 + ratio * 0.75).toFixed(2);
      var alpha = (0.55 + ratio * 0.45).toFixed(2);
      return '<button class="ex-tag" style="font-size:' + size + 'rem;opacity:' + alpha + '" title="' + n + ' items">' +
        esc(tag) + '<span class="ex-tag-badge">' + n + '</span>' +
        '</button>';
    }).join('');

    var card = makeCard('span-2');
    card.innerHTML = '<h3 class="ex-card-title">☁️ Tag cloud <span style="font-size:0.8rem;color:var(--muted);font-weight:400">— top 80 by frequency</span></h3>' +
      '<div class="ex-tag-cloud">' + cloudHTML + '</div>';
    return card;
  }

  // ── utilities ────────────────────────────────────────────────────────────

  function makeCard(extraClass) {
    var div = document.createElement('div');
    div.className = 'explore-card' + (extraClass ? ' ' + extraClass : '');
    return div;
  }

  function activateBars() {
    document.querySelectorAll('.ex-bar-fill[data-pct], .ex-splitbar-fill[data-pct]').forEach(function (el) {
      var pct = parseFloat(el.getAttribute('data-pct')) || 0;
      // Force a reflow so the transition fires
      el.getBoundingClientRect();
      el.style.width = pct + '%';
    });
  }

  function animateCounter(el, target, duration) {
    if (!el) return;
    var isFloat = target !== Math.floor(target);
    var start   = 0;
    var startTime = null;
    function step(t) {
      if (!startTime) startTime = t;
      var progress = Math.min((t - startTime) / duration, 1);
      progress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      var value = start + (target - start) * progress;
      el.textContent = isFloat ? value.toFixed(1) : Math.round(value);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function updateFooterStats(total, companies, pageCount) {
    var stats = document.querySelector('.site-stats');
    if (!stats) return;
    var items = stats.querySelectorAll('.stat-item');
    if (items[0]) items[0].querySelector('.stat-icon').nextSibling.textContent = ' ' + total + ' items';
    if (items[1]) items[1].querySelector('.stat-icon').nextSibling.textContent = ' ' + pageCount + ' pages';
    if (items[2]) items[2].querySelector('.stat-icon').nextSibling.textContent = ' ' + companies + ' companies';
  }

  function animateTotal(target) {
    animateCounter(document.getElementById('explore-total'), target, 1400);
  }

  function esc(str) {
    var d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  // ── init ─────────────────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
