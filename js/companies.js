/**
 * Companies Page Logic
 * Injects country badges on section headers (company origin).
 * Collapsible sections are handled by collapsible.js.
 * Uses BADGE_COUNTRY_MAP from badges.js when available.
 * [TRACE: STYLE_GUIDE.md]
 */
(function () {
    var COUNTRY_MAP = window.BADGE_COUNTRY_MAP || {};

    document.addEventListener('DOMContentLoaded', function () {
        if (!document.body.classList.contains('companies-page')) return;

        var sections = document.querySelectorAll('.profile-section');
        sections.forEach(function (section) {
            var h2 = section.querySelector('h2');
            if (!h2) return;

            var name = (h2.textContent || '').trim();
            var country = COUNTRY_MAP[name];
            if (country) {
                var badge = document.createElement('span');
                badge.className = 'country-badge';
                badge.setAttribute('title', 'Origin: ' + country.label);
                badge.setAttribute('aria-label', 'Origin: ' + country.label);
                badge.textContent = country.flag;
                h2.appendChild(badge);
            }
        });
    });
})();
