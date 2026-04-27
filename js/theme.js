/**
 * Theme Switcher Module
 * Handles theme persistence and switching for the dev profile site.
 * [TRACE: DOCS/ARCHITECTURE.md]
 */
(function () {
  'use strict';

  var KEY = 'dev-profile-theme';
  var body = document.body;
  var btn = document.getElementById('theme-btn');
  var dropdown = document.getElementById('theme-dropdown');
  var label = document.getElementById('theme-label');
  var savedTheme = localStorage.getItem(KEY) ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  var labels = {
    // Core
    dark: 'Dark',
    light: 'Light',

    // Brands
    anthropic: 'Anthropic',
    github: 'GitHub',
    google: 'Google',
    openai: 'OpenAI',

    // Editors
    dracula: 'Dracula',
    gruvbox: 'Gruvbox',
    monokai: 'Monokai',
    nord: 'Nord',
    solarized: 'Solarized',
    vscode: 'VS Code',

    // Creative
    atelier: 'Atelier',
    aqua: 'Aqua',
    coffee: 'Coffee',
    cyber: 'Cyber',
    forest: 'Forest',
    luxury: 'Luxury',
    lorenz: 'Otterdays',
    synthwave: 'Synthwave'
  };

  /**
   * Apply a theme to the document and persist to localStorage.
   * @param {string} name - Theme identifier
   */
  function apply(name, persist) {
    if (persist === undefined) persist = true;
    var theme = name || 'dark';
    // Fallback if theme doesn't exist in labels (e.g. removed theme)
    if (!labels[theme]) theme = 'dark';

    body.setAttribute('data-theme', theme);

    if (persist) {
      if (label) label.textContent = labels[theme] || 'Dark';
      try {
        localStorage.setItem(KEY, theme);
      } catch (e) {
        // localStorage may be unavailable in private browsing
      }
      savedTheme = theme;
    }
  }

  // Toggle dropdown on button click
  if (btn) {
    btn.addEventListener('click', function () {
      var isOpen = dropdown.getAttribute('hidden') === null;
      dropdown.toggleAttribute('hidden', isOpen);
      btn.setAttribute('aria-expanded', !isOpen);
    });
  }

  // Theme groups configuration
  var themeGroups = [
    {
      title: 'Core',
      themes: ['dark', 'light']
    },
    {
      title: 'Brands',
      themes: ['anthropic', 'github', 'google', 'openai']
    },
    {
      title: 'Editors',
      themes: ['dracula', 'gruvbox', 'monokai', 'nord', 'solarized', 'vscode']
    },
    {
      title: 'Creative',
      themes: ['atelier', 'aqua', 'coffee', 'cyber', 'forest', 'luxury', 'lorenz', 'synthwave']
    }
  ];

  // Populate dropdown dynamically and handle selection
  if (dropdown) {
    // Clear any hardcoded items
    dropdown.innerHTML = '';

    themeGroups.forEach(function (group) {
      // Create group title
      if (group.title) {
        var title = document.createElement('div');
        title.className = 'theme-group-title';
        title.textContent = group.title;
        dropdown.appendChild(title);
      }

      // Create buttons for this group
      group.themes.forEach(function (key) {
        if (labels[key]) {
          var opt = document.createElement('button');
          opt.type = 'button';
          opt.setAttribute('role', 'menuitem');
          opt.setAttribute('data-theme', key);
          opt.textContent = labels[key];

          opt.addEventListener('click', function () {
            apply(key, true);
            dropdown.setAttribute('hidden', '');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          });

          // Preview on hover
          opt.addEventListener('mouseenter', function () {
            apply(key, false);
          });

          dropdown.appendChild(opt);
        }
      });
    });

    // Revert preview on mouse leave
    dropdown.addEventListener('mouseleave', function () {
      apply(savedTheme, false);
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (btn && dropdown && !btn.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Apply saved theme on load (localStorage overrides system preference)
  apply(localStorage.getItem(KEY) || savedTheme);

  /**
   * Insert Favorites nav item on all pages.
   * Keeps sidebar updates centralized without touching every HTML file.
   */
  (function ensureFavoritesNavItem() {
    var sidebar = document.querySelector('.sidebar');
    if (!sidebar || sidebar.querySelector('a[href="favorites.html"]')) return;

    var homeLink = sidebar.querySelector('a[href="index.html"]');
    if (!homeLink) return;

    var link = document.createElement('a');
    link.setAttribute('href', 'favorites.html');
    link.setAttribute('title', 'Favorites');
    if (window.location.pathname.toLowerCase().endsWith('/favorites.html')) {
      link.classList.add('active');
    }
    link.innerHTML = '<span class="sidebar-icon">❤️</span><span class="sidebar-text">Favorites</span>';
    sidebar.insertBefore(link, homeLink);
  })();

  /**
   * Unified Card Effects (Spotlight + 3D Tilt)
   * Uses per-card pointer handlers to avoid scanning large pages.
   */
  var CARD_SEL = '.project-card, .chat-link-card, .home-link';
  var cards = document.querySelectorAll(CARD_SEL);
  var prefersReducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isCoarsePointer = window.matchMedia &&
    window.matchMedia('(pointer: coarse)').matches;

  if (!prefersReducedMotion && !isCoarsePointer) {
    cards.forEach(function (card) {
      card.addEventListener('pointermove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var xPct = x / rect.width;
        var yPct = y / rect.height;
        var xRot = (0.5 - yPct) * 10;
        var yRot = (xPct - 0.5) * 10;

        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
        card.style.transform = 'perspective(1000px) rotateX(' + xRot + 'deg) rotateY(' + yRot + 'deg) scale(1.02)';
      });

      card.addEventListener('pointerleave', function () {
        card.style.transform = '';
      });
    });
  }

  /**
   * Scroll to Top Button Logic
   */
  var scrollBtn = document.getElementById('scroll-top-btn');

  if (scrollBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });

    scrollBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      // Move focus for accessibility
      document.body.focus();
    });
  }

  /* Scroll Progress Indicator [MODERNIZED: CSS Scroll-Driven Animation] */
  var progressWrap = document.createElement('div');
  progressWrap.className = 'scroll-progress';
  progressWrap.setAttribute('role', 'progressbar');
  progressWrap.setAttribute('aria-label', 'Page scroll progress');
  var progressFill = document.createElement('div');
  progressFill.className = 'scroll-progress-fill';
  progressWrap.appendChild(progressFill);
  document.body.insertBefore(progressWrap, document.body.firstChild);
})();
