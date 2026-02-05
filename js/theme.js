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
  function apply(name) {
    var theme = name || 'dark';
    // Fallback if theme doesn't exist in labels (e.g. removed theme)
    if (!labels[theme]) theme = 'dark';
    
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
      themes: ['aqua', 'coffee', 'cyber', 'forest', 'luxury', 'lorenz', 'synthwave']
    }
  ];

  // Populate dropdown dynamically and handle selection
  if (dropdown) {
    // Clear any hardcoded items
    dropdown.innerHTML = '';

    themeGroups.forEach(function(group) {
      // Create group title
      if (group.title) {
        var title = document.createElement('div');
        title.className = 'theme-group-title';
        title.textContent = group.title;
        dropdown.appendChild(title);
      }

      // Create buttons for this group
      group.themes.forEach(function(key) {
        if (labels[key]) {
          var opt = document.createElement('button');
          opt.type = 'button';
          opt.setAttribute('role', 'menuitem');
          opt.setAttribute('data-theme', key);
          opt.textContent = labels[key];
          
          opt.addEventListener('click', function () {
            apply(key);
            dropdown.setAttribute('hidden', '');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          });

          dropdown.appendChild(opt);
        }
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

  /**
   * Scroll Progress Indicator [TRACE: improvement.plans.md]
   */
  var progressWrap = document.createElement('div');
  progressWrap.className = 'scroll-progress';
  progressWrap.setAttribute('role', 'progressbar');
  progressWrap.setAttribute('aria-label', 'Page scroll progress');
  progressWrap.setAttribute('aria-valuemin', '0');
  progressWrap.setAttribute('aria-valuemax', '100');
  var progressFill = document.createElement('div');
  progressFill.className = 'scroll-progress-fill';
  progressWrap.appendChild(progressFill);
  document.body.insertBefore(progressWrap, document.body.firstChild);

  function updateScrollProgress() {
    var scrollTop = window.scrollY;
    var docHeight = document.documentElement.scrollHeight - window.innerHeight;
    var pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    progressFill.style.width = pct + '%';
    progressWrap.setAttribute('aria-valuenow', Math.round(pct));
  }

  window.addEventListener('scroll', updateScrollProgress);
  window.addEventListener('resize', updateScrollProgress);
  updateScrollProgress();

  /**
   * 3D Tilt Effect for Cards
   * Adds a subtle 3D perspective tilt to cards on hover
   */
  var tiltCards = document.querySelectorAll('.project-card, .chat-link-card, .home-link');
  
  tiltCards.forEach(function(card) {
    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      
      // Calculate rotation based on mouse position
      // Max rotation: 5 degrees
      var xPct = x / rect.width;
      var yPct = y / rect.height;
      
      var xRot = (0.5 - yPct) * 10; // Rotate around X axis (up/down tilt)
      var yRot = (xPct - 0.5) * 10; // Rotate around Y axis (left/right tilt)
      
      card.style.transform = 'perspective(1000px) rotateX(' + xRot + 'deg) rotateY(' + yRot + 'deg) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
  });
})();
