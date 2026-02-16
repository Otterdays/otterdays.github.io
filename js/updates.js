/**
 * Renders update timeline from UPDATES_DATA. Scroll-driven fade-in via IntersectionObserver.
 */
(function () {
  if (typeof UPDATES_DATA === 'undefined') return;

  const container = document.getElementById('update-entries');
  if (!container) return;

  const TYPE_LABELS = { added: 'Added', changed: 'Changed', fixed: 'Fixed', removed: 'Removed' };

  const firstReleasedIdx = UPDATES_DATA.findIndex(e => e.version !== 'Unreleased');
  const html = UPDATES_DATA.map((entry, i) => {
    const isLatest = firstReleasedIdx >= 0 && i === firstReleasedIdx;
    const cardClass = 'update-card' + (isLatest ? ' update-card--latest' : '');
    const sectionsHtml = entry.sections
      .filter(s => s.items && s.items.length > 0)
      .map(s => {
        const itemsHtml = s.items.map(item => `<li>${escapeHtml(item)}</li>`).join('');
        return `
          <div class="update-section">
            <span class="update-badge update-badge--${s.type}">${TYPE_LABELS[s.type] || s.type}</span>
            <ul class="update-list">${itemsHtml}</ul>
          </div>`;
      })
      .join('');

    return `
      <article class="${cardClass}" data-version="${escapeHtml(entry.version)}">
        <div class="update-dot" aria-hidden="true"></div>
        <div class="update-card-inner">
          <div class="update-card-header">
            <span class="update-version">v${escapeHtml(entry.version)}</span>
            <span class="update-date">${escapeHtml(entry.date)}</span>
            ${isLatest ? '<span class="update-badge update-badge--latest">Latest</span>' : ''}
          </div>
          <div class="update-card-body">${sectionsHtml}</div>
        </div>
      </article>`;
  }).join('');

  container.innerHTML = html;

  const cards = container.querySelectorAll('.update-card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
  );
  cards.forEach((card) => observer.observe(card));

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
})();
