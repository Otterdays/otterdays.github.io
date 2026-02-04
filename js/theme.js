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

  var labels = {
    dark: 'Dark',
    light: 'Light',
    google: 'Google',
    openai: 'OpenAI',
    anthropic: 'Anthropic',
    lorenz: 'Otterdays',
    github: 'GitHub',
    dracula: 'Dracula',
    nord: 'Nord'
  };

  /**
   * Apply a theme to the document and persist to localStorage.
   * @param {string} name - Theme identifier
   */
  function apply(name) {
    var theme = name || 'dark';
    body.setAttribute('data-theme', theme);
    if (label) label.textContent = labels[theme] || 'Dark';
    try {
      localStorage.setItem(KEY, theme);
    } catch (e) {
      // localStorage may be unavailable in private browsing
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

  // Handle theme selection from dropdown
  if (dropdown) {
    dropdown.querySelectorAll('[data-theme]').forEach(function (opt) {
      opt.addEventListener('click', function () {
        apply(opt.getAttribute('data-theme'));
        dropdown.setAttribute('hidden', '');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (btn && dropdown && !btn.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // Apply saved theme on load
  apply(localStorage.getItem(KEY));

  /**
   * Spotlight Effect for Cards
   * Tracks mouse position relative to cards to create a glowing border effect.
   */
  var cards = document.querySelectorAll('.project-card, .chat-link-card, .home-link');

  document.addEventListener('mousemove', function (e) {
    cards.forEach(function (card) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    });
  });
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
})();
