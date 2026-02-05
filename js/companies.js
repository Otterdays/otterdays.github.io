/**
 * Companies Page Logic
 * Handles section minimization/expansion with smooth animations.
 * Injects country badges on section headers (company origin).
 * Uses BADGE_COUNTRY_MAP from badges.js when available.
 * [TRACE: STYLE_GUIDE.md]
 */
(function () {
    var COUNTRY_MAP = window.BADGE_COUNTRY_MAP || {};

    document.addEventListener('DOMContentLoaded', function () {
        if (!document.body.classList.contains('companies-page')) return;

        var sections = document.querySelectorAll('.profile-section');
        sections.forEach(function (section) {
            var content = section.querySelector('.chat-links');
            if (!content) return;

            var wrapper = document.createElement('div');
            wrapper.className = 'collapsible-wrapper';
            section.insertBefore(wrapper, content);
            wrapper.appendChild(content);

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

            var h2 = section.querySelector('h2');
            if (h2) {
                var name = h2.textContent.trim();
                var country = COUNTRY_MAP[name];
                if (country) {
                    var badge = document.createElement('span');
                    badge.className = 'country-badge';
                    badge.setAttribute('title', 'Origin: ' + country.label);
                    badge.setAttribute('aria-label', 'Origin: ' + country.label);
                    badge.textContent = country.flag;
                    h2.appendChild(badge);
                }
            }
        });
    });
})();
