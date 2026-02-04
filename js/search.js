/**
 * Search Module
 * Unified site-wide search with modal UI, keyboard navigation, and fuzzy matching.
 * [TRACE: DOCS/ARCHITECTURE.md]
 */
(function () {
    'use strict';

    // === CONSTANTS ===
    var MAX_RESULTS = 12;
    var DEBOUNCE_MS = 150;

    // === DOM ELEMENTS ===
    var overlay = document.getElementById('search-overlay');
    var modal = document.getElementById('search-modal');
    var input = document.getElementById('search-input');
    var results = document.getElementById('search-results');
    var trigger = document.getElementById('search-trigger');
    var closeBtn = document.getElementById('search-close');
    var countEl = document.getElementById('search-count');

    // === STATE ===
    var selectedIndex = -1;
    var currentResults = [];
    var debounceTimer = null;

    // === CATEGORY ICONS ===
    var categoryIcons = {
        project: '📦',
        chat: '💬',
        media: '🎨',
        company: '🏢',
        tool: '🛠️',
        special: '⭐',
        page: '📄'
    };

    var categoryColors = {
        project: '#58a6ff',
        chat: '#10a37f',
        media: '#d97706',
        company: '#8b5cf6',
        tool: '#ef4444',
        special: '#f59e0b',
        page: '#6366f1'
    };

    // === SEARCH ALGORITHM ===
    function searchItems(query) {
        if (!query || query.length < 1) return [];

        var q = query.toLowerCase().trim();
        var words = q.split(/\s+/);
        var scored = [];

        SEARCH_DATA.forEach(function (item) {
            var score = 0;
            var titleLower = item.title.toLowerCase();
            var descLower = item.desc.toLowerCase();
            var tagsLower = item.tags.map(function (t) { return t.toLowerCase(); });
            var categoryLower = item.category.toLowerCase();

            words.forEach(function (word) {
                // Exact title match (highest priority)
                if (titleLower === word) {
                    score += 100;
                } else if (titleLower.startsWith(word)) {
                    score += 50;
                } else if (titleLower.includes(word)) {
                    score += 25;
                }

                // Tag match
                tagsLower.forEach(function (tag) {
                    if (tag === word) {
                        score += 30;
                    } else if (tag.includes(word)) {
                        score += 15;
                    }
                });

                // Category match
                if (categoryLower.includes(word)) {
                    score += 20;
                }

                // Description match (lower priority)
                if (descLower.includes(word)) {
                    score += 10;
                }
            });

            if (score > 0) {
                scored.push({ item: item, score: score });
            }
        });

        // Sort by score descending, then alphabetically
        scored.sort(function (a, b) {
            if (b.score !== a.score) return b.score - a.score;
            return a.item.title.localeCompare(b.item.title);
        });

        return scored.slice(0, MAX_RESULTS).map(function (s) { return s.item; });
    }

    // === RENDER RESULTS ===
    function renderResults(items) {
        currentResults = items;
        selectedIndex = items.length > 0 ? 0 : -1;

        if (items.length === 0 && input.value.trim().length > 0) {
            results.innerHTML = '<div class="search-empty">' +
                '<div class="search-empty-icon">🔍</div>' +
                '<div class="search-empty-title">No results found</div>' +
                '<div class="search-empty-hint">Try different keywords or browse the navigation</div>' +
                '</div>';
            updateCount(0);
            return;
        }

        if (items.length === 0) {
            results.innerHTML = '<div class="search-empty">' +
                '<div class="search-empty-icon">✨</div>' +
                '<div class="search-empty-title">Start typing to search</div>' +
                '<div class="search-empty-hint">Search projects, tools, AI chats, and more</div>' +
                '</div>';
            updateCount(null);
            return;
        }

        var html = items.map(function (item, index) {
            var icon = categoryIcons[item.category] || '📄';
            var isSelected = index === selectedIndex ? ' selected' : '';
            return '<a href="' + item.url + '" class="search-result-item' + isSelected + '" data-index="' + index + '">' +
                '<span class="search-result-icon" style="background:' + (categoryColors[item.category] || '#888') + '">' + icon + '</span>' +
                '<div class="search-result-content">' +
                '<div class="search-result-title">' + escapeHtml(item.title) + '</div>' +
                '<div class="search-result-desc">' + escapeHtml(item.desc) + '</div>' +
                '<div class="search-result-tags">' + item.tags.slice(0, 3).map(function (t) {
                    return '<span class="search-result-tag">' + escapeHtml(t) + '</span>';
                }).join('') + '</div>' +
                '</div>' +
                '<span class="search-result-arrow">→</span>' +
                '</a>';
        }).join('');

        results.innerHTML = html;
        updateCount(items.length);
        updateSelection();
    }

    function escapeHtml(text) {
        var div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function updateCount(count) {
        if (count === null) {
            countEl.textContent = '';
        } else {
            countEl.textContent = count + ' result' + (count !== 1 ? 's' : '');
        }
    }

    function updateSelection() {
        var items = results.querySelectorAll('.search-result-item');
        items.forEach(function (item, index) {
            if (index === selectedIndex) {
                item.classList.add('selected');
                item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            } else {
                item.classList.remove('selected');
            }
        });
    }

    // === MODAL CONTROLS ===
    function openSearch() {
        if (!overlay) return;
        overlay.classList.add('active');
        overlay.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
        input.value = '';
        renderResults([]);

        // Focus input after animation
        setTimeout(function () {
            input.focus();
        }, 100);
    }

    function closeSearch() {
        if (!overlay) return;
        overlay.classList.remove('active');
        document.body.style.overflow = '';

        setTimeout(function () {
            overlay.setAttribute('hidden', '');
        }, 200);
    }

    function selectResult() {
        if (selectedIndex >= 0 && currentResults[selectedIndex]) {
            window.location.href = currentResults[selectedIndex].url;
        }
    }

    // === EVENT HANDLERS ===
    function handleInput() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function () {
            var query = input.value;
            var items = searchItems(query);
            renderResults(items);
        }, DEBOUNCE_MS);
    }

    function handleKeydown(e) {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                if (currentResults.length > 0) {
                    selectedIndex = (selectedIndex + 1) % currentResults.length;
                    updateSelection();
                }
                break;
            case 'ArrowUp':
                e.preventDefault();
                if (currentResults.length > 0) {
                    selectedIndex = selectedIndex <= 0 ? currentResults.length - 1 : selectedIndex - 1;
                    updateSelection();
                }
                break;
            case 'Enter':
                e.preventDefault();
                selectResult();
                break;
            case 'Escape':
                e.preventDefault();
                closeSearch();
                break;
        }
    }

    function handleGlobalKeydown(e) {
        // Cmd/Ctrl + K to open search
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            if (overlay && overlay.classList.contains('active')) {
                closeSearch();
            } else {
                openSearch();
            }
        }

        // Escape to close (when search is open)
        if (e.key === 'Escape' && overlay && overlay.classList.contains('active')) {
            closeSearch();
        }
    }

    function handleOverlayClick(e) {
        if (e.target === overlay) {
            closeSearch();
        }
    }

    function handleResultHover(e) {
        var item = e.target.closest('.search-result-item');
        if (item) {
            selectedIndex = parseInt(item.dataset.index, 10);
            updateSelection();
        }
    }

    // === INITIALIZATION ===
    function init() {
        if (!overlay || !input || !results) {
            console.warn('Search: Missing required DOM elements');
            return;
        }

        // Trigger button
        if (trigger) {
            trigger.addEventListener('click', openSearch);
        }

        // Close button
        if (closeBtn) {
            closeBtn.addEventListener('click', closeSearch);
        }

        // Input events
        input.addEventListener('input', handleInput);
        input.addEventListener('keydown', handleKeydown);

        // Overlay click to close
        overlay.addEventListener('click', handleOverlayClick);

        // Result hover
        results.addEventListener('mousemove', handleResultHover);

        // Global keyboard shortcut
        document.addEventListener('keydown', handleGlobalKeydown);

        // Prevent form submission
        var form = modal ? modal.querySelector('form') : null;
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                selectResult();
            });
        }
    }

    // Run init when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
