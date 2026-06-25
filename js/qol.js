/**
 * QoL enhancements: card tooltips, search hint, footer stat links.
 * [TRACE: improvements/improvement.plans.md]
 */
(function () {
  'use strict';

  // Mark document as JS-enabled for progressive enhancement
  document.documentElement.classList.add('js-enabled');

  // Inject background gradient layer to prevent cutoff
  injectGradientLayer();

  initPageLoader();

  /** Inject background gradient layer to prevent cutoff */
  function injectGradientLayer() {
    // Check if already exists (in case it's hardcoded in HTML)
    if (document.querySelector('.bg-gradient-layer')) return;

    var gradientLayer = document.createElement('div');
    gradientLayer.className = 'bg-gradient-layer';
    gradientLayer.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(gradientLayer, document.body.firstChild);
  }

  function init() {
    injectCardTooltips();
    addSearchHint();
    enhanceFooterStats();
    initLiveClock();
    initScrollAnimations();
    addKeyboardHints();
    initMobileNav();
    initMobileEnhancements();
    initHomeProjectsDrawer();
    logPerformanceMetrics();
  }

  /** Mobile: chevron handle expands bottom nav sheet with labels */
  function initMobileNav() {
    var sidebar = document.getElementById('site-sidebar');
    var toggle = document.getElementById('mobile-nav-toggle');
    if (!sidebar || !toggle) return;

    var backdrop = document.querySelector('.mobile-nav-backdrop');
    var label = toggle.querySelector('.mobile-nav-toggle-text');
    var mq = window.matchMedia('(max-width: 768px)');
    var open = false;

    function setOpen(next) {
      open = next;
      document.body.classList.toggle('mobile-nav-open', open);
      sidebar.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.classList.toggle('is-open', open);
      if (label) label.textContent = open ? 'Close menu' : 'Open menu';
      if (backdrop) {
        backdrop.classList.toggle('is-visible', open);
        backdrop.hidden = !open;
      }
    }

    function closeNav() {
      setOpen(false);
    }

    function syncLayout() {
      if (!mq.matches) closeNav();
    }

    toggle.addEventListener('click', function () {
      setOpen(!open);
    });
    if (backdrop) backdrop.addEventListener('click', closeNav);
    mq.addEventListener('change', syncLayout);

    sidebar.addEventListener('click', function (e) {
      if (!mq.matches || !open) return;
      if (e.target.closest('a[href]')) closeNav();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && open) closeNav();
    });
  }

  /** Viewport, touch class, dynamic vh, and visual-viewport edge cases */
  function initMobileEnhancements() {
    var root = document.documentElement;

    enhanceViewportMeta();
    syncDynamicViewportHeight();
    window.addEventListener('resize', syncDynamicViewportHeight, { passive: true });
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', syncDynamicViewportHeight, { passive: true });
    }

    var coarseMq = window.matchMedia('(pointer: coarse)');
    function syncPointerClass() {
      root.classList.toggle('coarse-pointer', coarseMq.matches);
    }
    syncPointerClass();
    coarseMq.addEventListener('change', syncPointerClass);

    initSearchViewportFix();
  }

  function enhanceViewportMeta() {
    var meta = document.querySelector('meta[name="viewport"]');
    if (!meta) return;
    var content = meta.getAttribute('content') || '';
    if (content.indexOf('viewport-fit=cover') === -1) {
      meta.setAttribute('content', content.replace(/,\s*$/, '') + ', viewport-fit=cover');
    }
  }

  function syncDynamicViewportHeight() {
    var vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    document.documentElement.style.setProperty('--app-vh', (vh * 0.01) + 'px');
  }

  /** Keep search modal usable when mobile keyboard opens */
  function initSearchViewportFix() {
    var overlay = document.getElementById('search-overlay');
    var input = document.getElementById('search-input');
    if (!overlay || !input || !window.visualViewport) return;

    function syncSearchLayout() {
      if (!overlay.classList.contains('active')) {
        overlay.style.top = '';
        overlay.style.left = '';
        overlay.style.width = '';
        overlay.style.height = '';
        return;
      }
      if (!window.matchMedia('(max-width: 768px)').matches) {
        overlay.style.top = '';
        overlay.style.left = '';
        overlay.style.width = '';
        overlay.style.height = '';
        return;
      }
      var vv = window.visualViewport;
      overlay.style.top = vv.offsetTop + 'px';
      overlay.style.left = vv.offsetLeft + 'px';
      overlay.style.width = vv.width + 'px';
      overlay.style.height = vv.height + 'px';
    }

    window.visualViewport.addEventListener('resize', syncSearchLayout, { passive: true });
    window.visualViewport.addEventListener('scroll', syncSearchLayout, { passive: true });

    var overlayObserver = new MutationObserver(syncSearchLayout);
    overlayObserver.observe(overlay, { attributes: true, attributeFilter: ['class', 'hidden'] });

    var trigger = document.getElementById('search-trigger');
    if (trigger) {
      trigger.addEventListener('click', function () {
        window.setTimeout(syncSearchLayout, 0);
      });
    }

    input.addEventListener('focus', function () {
      window.setTimeout(function () {
        syncSearchLayout();
        try {
          input.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        } catch (e) {
          input.scrollIntoView(true);
        }
      }, 120);
    });
  }

  /** Projects drawer: open on desktop, collapsed on mobile */
  function initHomeProjectsDrawer() {
    var drawer = document.querySelector('.home-projects-drawer');
    if (!drawer) return;

    var mq = window.matchMedia('(min-width: 769px)');
    function sync() {
      drawer.open = mq.matches;
    }
    sync();
    mq.addEventListener('change', sync);
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

  /** Mac: ⌘+K; Windows/Linux: Ctrl+K — matches search.js shortcut */
  function addSearchHint() {
    var trigger = document.getElementById('search-trigger');
    if (!trigger) return;
    var ua = typeof navigator !== 'undefined' ? navigator.userAgent || '' : '';
    var platform = typeof navigator !== 'undefined' && navigator.platform ? navigator.platform : '';
    var isMac = /Mac|iPhone|iPod|iPad/i.test(platform) || /Mac OS/.test(ua);
    var modLabel = isMac ? '⌘' : 'Ctrl';
    trigger.setAttribute('title', 'Search site (' + modLabel + '+K)');
    var kbdWrap = trigger.querySelector('.search-trigger-kbd');
    if (kbdWrap) {
      kbdWrap.innerHTML = '<kbd>' + escapeHtml(modLabel) + '</kbd><kbd>K</kbd>';
    }
  }

  /** Add title="Open [Name] in new tab → domain.com" to external link cards */
  function injectCardTooltips() {
    var cards = document.querySelectorAll('a.chat-link-card[href^="http"], a.home-primary-link[href^="http"]');
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

  /** Intersection Observer for scroll-triggered animations */
  function initScrollAnimations() {
    var prefersReducedMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) return;

    var animatedElements = document.querySelectorAll('.feature-card, .daily-driver-card');
    if (!animatedElements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /** Add keyboard navigation hints to sidebar */
  function addKeyboardHints() {
    var sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    var links = sidebar.querySelectorAll('a');
    if (!links.length) return;

    // Add title attributes with keyboard hints
    links.forEach(function (link, index) {
      var existingTitle = link.getAttribute('title') || '';
      var linkText = link.querySelector('.sidebar-text');
      var text = linkText ? linkText.textContent.trim() : '';
      
      // Only add hint if not already present
      if (existingTitle && existingTitle.includes('Tab')) return;
      
      var hint = 'Press Tab ' + (index + 1) + ' to focus ' + text;
      if (existingTitle) {
        link.setAttribute('title', existingTitle + ' | ' + hint);
      } else {
        link.setAttribute('title', hint);
      }
    });
  }

  /** Log page load performance metrics (dev only, non-intrusive) */
  function logPerformanceMetrics() {
    if (!('performance' in window) || !('getEntriesByType' in window.performance)) return;
    
    window.addEventListener('load', function () {
      setTimeout(function () {
        try {
          var nav = performance.getEntriesByType('navigation')[0];
          if (!nav) return;
          
          var loadTime = Math.round(nav.loadEventEnd - nav.startTime);
          var domReady = Math.round(nav.domContentLoadedEventEnd - nav.startTime);
          
          // Only log if load time is significant (>1s) for debugging
          if (loadTime > 1000) {
            console.log('[Performance] Page loaded in ' + loadTime + 'ms (DOM: ' + domReady + 'ms)');
          }
        } catch (e) {
          // Silently fail
        }
      }, 0);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
