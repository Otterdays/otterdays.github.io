/**
 * QoL enhancements: card tooltips, search hint, footer stat links.
 * [TRACE: improvements/improvement.plans.md]
 */
(function () {
  'use strict';

  initPageLoader();

  function init() {
    injectCardTooltips();
    addSearchHint();
    enhanceFooterStats();
    initLiveClock();
  }

  function initPageLoader() {
    var root = document.documentElement;
    var body = document.body;
    if (!body || body.querySelector('.page-loader')) return;

    var reducedMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var startedAt = Date.now();
    var minVisibleMs = reducedMotion ? 120 : 320;
    var exitMs = reducedMotion ? 120 : 320;
    var finished = false;
    var title = (document.title || 'Otterdays').split('|')[0].trim() || 'Otterdays';
    var loader = document.createElement('div');

    root.classList.add('ui-loading');
    loader.className = 'page-loader';
    loader.setAttribute('aria-hidden', 'true');
    loader.innerHTML = '<div class="page-loader__panel">' +
      '<div class="page-loader__mark"></div>' +
      '<div class="page-loader__title">' + escapeHtml(title) + '</div>' +
      '<div class="page-loader__bar"><span class="page-loader__bar-fill"></span></div>' +
      '</div>';
    body.appendChild(loader);

    requestAnimationFrame(function () {
      loader.classList.add('is-visible');
    });

    function finishLoader() {
      if (finished) return;
      finished = true;
      window.setTimeout(function () {
        loader.classList.add('is-exiting');
        root.classList.remove('ui-loading');
        root.classList.add('ui-ready');
        window.setTimeout(function () {
          if (loader.parentNode) loader.parentNode.removeChild(loader);
        }, exitMs);
      }, Math.max(0, minVisibleMs - (Date.now() - startedAt)));
    }

    if (document.readyState === 'complete') {
      finishLoader();
    } else {
      window.addEventListener('load', finishLoader, { once: true });
      window.setTimeout(finishLoader, 1800);
    }
  }

  /** Live EST clock in footer */
  function initLiveClock() {
    var footer = document.querySelector('.site-footer');
    if (!footer) return;

    var clock = document.createElement('div');
    clock.className = 'site-clock';
    clock.setAttribute('aria-label', 'Current time in Eastern');
    footer.appendChild(clock);

    function tick() {
      var now = new Date();
      var timeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      var parts = now.toLocaleDateString('en-US', {
        timeZone: 'America/New_York',
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }).split(/[\s,]+/);
      var dateStr = parts.length >= 3 ? parts[1] + '-' + parts[0] + '-' + parts[2] : '';
      var tzStr = now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', timeZoneName: 'short' }).split(' ').pop() || 'EST';
      clock.textContent = timeStr + ' ' + tzStr + ' · ' + dateStr;
    }

    tick();
    setInterval(tick, 30000);
  }

  /** Add title="Open [Name] in new tab → domain.com" to external link cards */
  function injectCardTooltips() {
    var cards = document.querySelectorAll('a.chat-link-card[href^="http"]');
    cards.forEach(function (card) {
      var href = card.getAttribute('href') || '';
      if (!href || href === '#') return;

      var nameEl = card.querySelector('.chat-link-name, .project-title');
      var name = nameEl ? (nameEl.textContent || '').trim() : 'Link';
      var domain = getDomain(href);
      var title = 'Open ' + name + ' in new tab → ' + domain;
      card.setAttribute('title', title);
    });
  }

  function getDomain(href) {
    try {
      var url = new URL(href);
      return url.hostname.replace(/^www\./, '');
    } catch (e) {
      return href;
    }
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /** Add "Search site (⌘K)" tooltip to search trigger */
  function addSearchHint() {
    var trigger = document.getElementById('search-trigger');
    if (trigger) {
      trigger.setAttribute('title', 'Search site (⌘K)');
    }
  }

  /** Make footer stats clickable: items → search, pages → updates, companies → companies */
  function enhanceFooterStats() {
    var stats = document.querySelector('.site-stats');
    if (!stats) return;

    var items = stats.querySelector('.stat-item');
    var allItems = stats.querySelectorAll('.stat-item');
    if (allItems.length < 3) return;

    var itemsStat = allItems[0];
    var pagesStat = allItems[1];
    var companiesStat = allItems[2];

    wrapAsLink(itemsStat, function () {
      var t = document.getElementById('search-trigger');
      if (t) t.click();
    }, 'Open search');
    wrapAsLink(pagesStat, 'updates.html', 'View all pages');
    wrapAsLink(companiesStat, 'companies.html', 'Browse companies');
  }

  function wrapAsLink(el, hrefOrClick, title) {
    if (!el || el.querySelector('a')) return;
    var isClick = typeof hrefOrClick === 'function';
    var a = document.createElement(isClick ? 'button' : 'a');
    a.className = 'stat-link';
    a.setAttribute('title', title || '');
    if (isClick) {
      a.type = 'button';
      a.addEventListener('click', hrefOrClick);
    } else {
      a.href = hrefOrClick;
      a.setAttribute('rel', 'noopener noreferrer');
    }
    a.innerHTML = el.innerHTML;
    el.textContent = '';
    el.appendChild(a);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
