/**
 * A-Z filter bar for collapsible pages. Scans sections, builds letter index,
 * renders sticky bar, filters/expands on click. [TRACE: STYLE_GUIDE.md]
 */
(function () {
  var PAGE_CLASSES = [
    'companies-page',
    'tools-page',
    'specials-page',
    'skills-page',
    'media-page'
  ];

  function hasCollapsibleSections() {
    return PAGE_CLASSES.some(function (cls) {
      return document.body.classList.contains(cls);
    });
  }

  function getFirstLetter(text) {
    var trimmed = (text || '').trim();
    var match = trimmed.match(/[A-Za-z]/);
    return match ? match[0].toUpperCase() : '#';
  }

  function getStorageKey() {
    var path = window.location.pathname || 'index';
    return 'filter-' + path.replace(/^\//, '').replace(/\.html$/, '') || 'index';
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (!hasCollapsibleSections()) return;

    var sections = document.querySelectorAll('.profile-section');
    var filterableSections = [];
    sections.forEach(function (section) {
      if (!section.querySelector('.chat-links')) return;
      if (section.classList.contains('companies-intro')) return;
      filterableSections.push(section);
    });

    if (filterableSections.length === 0) return;

    var letterMap = {};
    filterableSections.forEach(function (section) {
      var h2 = section.querySelector('h2');
      var letter = h2 ? getFirstLetter(h2.textContent) : '#';
      if (!letterMap[letter]) letterMap[letter] = [];
      letterMap[letter].push(section);
    });

    var letters = ['#'];
    for (var i = 65; i <= 90; i++) letters.push(String.fromCharCode(i));

    var insertAfter = sections[0];
    if (!insertAfter) return;

    var bar = document.createElement('div');
    bar.className = 'filter-bar';
    bar.setAttribute('role', 'navigation');
    bar.setAttribute('aria-label', 'Filter sections by first letter');

    var allBtn = document.createElement('button');
    allBtn.type = 'button';
    allBtn.className = 'filter-btn active';
    allBtn.textContent = 'All';
    allBtn.setAttribute('aria-pressed', 'true');
    allBtn.setAttribute('data-letter', 'all');
    bar.appendChild(allBtn);

    letters.forEach(function (letter) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'filter-btn';
      btn.textContent = letter;
      btn.setAttribute('data-letter', letter);
      var count = (letterMap[letter] || []).length;
      btn.disabled = count === 0;
      btn.setAttribute('aria-pressed', 'false');
      if (count > 0) btn.setAttribute('aria-label', letter + ': ' + count + ' section(s)');
      bar.appendChild(btn);
    });

    insertAfter.parentNode.insertBefore(bar, insertAfter.nextSibling);

    var buttons = bar.querySelectorAll('.filter-btn');
    var activeLetter = 'all';

    function applyFilter(letter) {
      activeLetter = letter;
      buttons.forEach(function (btn) {
        var isActive = btn.getAttribute('data-letter') === letter;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', String(isActive));
      });

      filterableSections.forEach(function (section) {
        var h2 = section.querySelector('h2');
        var sectionLetter = h2 ? getFirstLetter(h2.textContent) : '#';
        var match = letter === 'all' || sectionLetter === letter;

        section.classList.toggle('filter-hidden', !match);
        if (match) {
          section.classList.remove('minimized');
          var toggle = section.querySelector('.section-toggle');
          if (toggle) toggle.setAttribute('aria-expanded', 'true');
        } else {
          section.classList.add('minimized');
          var t = section.querySelector('.section-toggle');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });

      if (letter === 'all') {
        filterableSections.forEach(function (section) {
          section.classList.add('minimized');
          var t = section.querySelector('.section-toggle');
          if (t) t.setAttribute('aria-expanded', 'false');
        });
      }

      try {
        sessionStorage.setItem(getStorageKey(), letter);
      } catch (e) {}
    }

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (btn.disabled) return;
        var letter = btn.getAttribute('data-letter');
        /* Click active letter again to reset to All */
        applyFilter(activeLetter === letter ? 'all' : letter);
      });
    });

    var stored = null;
    try {
      stored = sessionStorage.getItem(getStorageKey());
    } catch (e) {}
    if (stored && stored !== 'all' && letterMap[stored] && letterMap[stored].length > 0) {
      applyFilter(stored);
    }
  });
})();
