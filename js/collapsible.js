/**
 * Collapsible sections for tools, specials, skills, media, and companies pages.
 * Wraps content after each section h2 in a collapsible wrapper with a toggle.
 * [TRACE: STYLE_GUIDE.md]
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

    document.addEventListener('DOMContentLoaded', function () {
        if (!hasCollapsibleSections()) return;

        var sections = document.querySelectorAll('.profile-section');
        sections.forEach(function (section) {
            var h2 = section.querySelector('h2');
            var chatLinks = section.querySelector('.chat-links');
            if (!h2 || !chatLinks) return;
            if (section.classList.contains('companies-intro')) return;

            var next = h2.nextElementSibling;
            var toWrap = [];
            while (next) {
                toWrap.push(next);
                next = next.nextElementSibling;
            }
            if (toWrap.length === 0) return;

            var inner = document.createElement('div');
            inner.className = 'collapsible-content';
            toWrap.forEach(function (el) {
                inner.appendChild(el);
            });

            var wrapper = document.createElement('div');
            wrapper.className = 'collapsible-wrapper';
            wrapper.appendChild(inner);
            h2.parentNode.insertBefore(wrapper, h2.nextSibling);

            var toggleBtn = document.createElement('button');
            toggleBtn.type = 'button';
            toggleBtn.className = 'section-toggle';
            toggleBtn.setAttribute('aria-label', 'Collapse or expand section');
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.innerHTML = '<span class="toggle-icon" aria-hidden="true">' +
                '<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path d="M1 1L7 7L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
                '</svg></span>';

            section.insertBefore(toggleBtn, section.firstChild);
            section.classList.add('minimized');

            toggleBtn.addEventListener('click', function (e) {
                e.preventDefault();
                var isMinimized = section.classList.toggle('minimized');
                toggleBtn.setAttribute('aria-expanded', String(!isMinimized));
            });
        });
    });
})();
