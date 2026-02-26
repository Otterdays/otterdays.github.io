/**
 * Explore page: data visualization from SEARCH_DATA.
 * Renders category donut, items-per-page bars, tag cloud.
 */
(function () {
  'use strict';

  var CATEGORY_COLORS = {
    project: '#58a6ff',
    chat: '#10a37f',
    media: '#d97706',
    company: '#8b5cf6',
    tool: '#ef4444',
    special: '#f59e0b',
    page: '#6366f1'
  };

  var CATEGORY_LABELS = {
    project: 'Projects',
    chat: 'Chats',
    media: 'Media',
    company: 'Companies',
    tool: 'Tools',
    special: 'Specials',
    page: 'Pages'
  };

  function run() {
    if (typeof SEARCH_DATA === 'undefined') return;
    var data = SEARCH_DATA;

    var byCategory = {};
    var byUrl = {};
    var tagCounts = {};

    data.forEach(function (item) {
      var cat = item.category || 'page';
      byCategory[cat] = (byCategory[cat] || 0) + 1;
      var url = item.url || 'index.html';
      byUrl[url] = (byUrl[url] || 0) + 1;
      (item.tags || []).forEach(function (t) {
        var tag = String(t).trim();
        if (tag) tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });

    var total = data.length;
    animateTotal(total);

    var grid = document.getElementById('explore-grid');
    if (!grid) return;

    grid.innerHTML = '';
    grid.appendChild(makeCategoryCard(byCategory, total));
    grid.appendChild(makePageCard(byUrl));
    grid.appendChild(makeTagCard(tagCounts));
  }

  function animateTotal(target) {
    var el = document.getElementById('explore-total');
    if (!el) return;
    var start = 0;
    var duration = 1200;
    var startTime = null;
    function step(t) {
      if (!startTime) startTime = t;
      var p = Math.min((t - startTime) / duration, 1);
      p = 1 - Math.pow(1 - p, 2);
      el.textContent = Math.round(start + (target - start) * p);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function makeCategoryCard(byCategory, total) {
    var order = ['project', 'tool', 'company', 'chat', 'media', 'special', 'page'];
    var segments = [];
    var prev = 0;
    order.forEach(function (cat) {
      var n = byCategory[cat] || 0;
      if (n === 0) return;
      var pct = (n / total) * 100;
      segments.push({ cat: cat, n: n, pct: pct, start: prev, end: prev + pct });
      prev += pct;
    });

    var donutStyle = segments.map(function (s) {
      return 'color-mix(in srgb, ' + (CATEGORY_COLORS[s.cat] || 'var(--accent)') + ' 85%, transparent) ' + s.start + '% ' + s.end + '%';
    }).join(', ');
    if (donutStyle) donutStyle = 'conic-gradient(' + donutStyle + ')';
    else donutStyle = 'var(--border)';

    var legend = segments.map(function (s) {
      return '<span class="explore-legend-item"><span class="explore-legend-dot" style="background:' + (CATEGORY_COLORS[s.cat] || 'var(--accent)') + '"></span>' + (CATEGORY_LABELS[s.cat] || s.cat) + ' (' + s.n + ')</span>';
    }).join('');

    var card = document.createElement('div');
    card.className = 'explore-card';
    card.innerHTML = '<h3>By category</h3><div class="explore-donut" style="background:' + donutStyle + '"></div><div class="explore-legend">' + legend + '</div>';
    return card;
  }

  function makePageCard(byUrl) {
    var pages = Object.keys(byUrl).sort(function (a, b) { return byUrl[b] - byUrl[a]; });
    var max = Math.max.apply(null, pages.map(function (p) { return byUrl[p]; }), 1);
    var pageLabels = {
      'index.html': 'Home',
      'programs.html': 'Programs',
      'chats.html': 'AI Chats',
      'museum.html': 'AI Museum',
      'media.html': 'Media Gen',
      'companies.html': 'Companies',
      'tools.html': 'Tools',
      'specials.html': 'Specials',
      'skills.html': 'Skills',
      'updates.html': 'Updates',
      'about.html': 'About',
      'explore.html': 'Explore'
    };

    var bars = pages.slice(0, 12).map(function (url) {
      var n = byUrl[url];
      var pct = (n / max) * 100;
      var label = pageLabels[url] || url.replace('.html', '');
      return '<div class="explore-bar-row"><span class="explore-bar-label">' + label + '</span><div class="explore-bar-track"><div class="explore-bar-fill" style="width:' + pct + '%"></div></div><span class="explore-bar-val">' + n + '</span></div>';
    }).join('');

    var card = document.createElement('div');
    card.className = 'explore-card';
    card.innerHTML = '<h3>Items per page</h3><div class="explore-bars">' + bars + '</div>';
    return card;
  }

  function makeTagCard(tagCounts) {
    var tags = Object.keys(tagCounts).sort(function (a, b) { return tagCounts[b] - tagCounts[a]; });
    var max = Math.max.apply(null, tags.map(function (t) { return tagCounts[t]; }), 1);
    var min = Math.min.apply(null, tags.map(function (t) { return tagCounts[t]; }), 1);

    var tagEls = tags.slice(0, 60).map(function (tag) {
      var n = tagCounts[tag];
      var size = n >= max * 0.5 ? 'explore-tag--large' : (n <= min * 1.5 ? 'explore-tag--small' : '');
      return '<span class="explore-tag ' + size + '" title="' + n + ' items">' + escapeHtml(tag) + '</span>';
    }).join('');

    var card = document.createElement('div');
    card.className = 'explore-card';
    card.innerHTML = '<h3>Tag cloud</h3><p style="font-size:0.85rem;color:var(--muted);margin-bottom:0.75rem">Top 60 tags by frequency</p><div class="explore-tags">' + tagEls + '</div>';
    return card;
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
