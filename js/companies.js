/**
 * Companies Page Logic
 * Handles section minimization/expansion with smooth animations.
 * [TRACE: STYLE_GUIDE.md]
 */
document.addEventListener('DOMContentLoaded', () => {
    if (!document.body.classList.contains('companies-page')) return;

    const sections = document.querySelectorAll('.profile-section');
    sections.forEach(section => {
        const content = section.querySelector('.chat-links');
        if (!content) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'collapsible-wrapper';
        section.insertBefore(wrapper, content);
        wrapper.appendChild(content);

        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.className = 'section-toggle';
        toggleBtn.setAttribute('aria-label', 'Collapse or expand section');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = `
            <span class="toggle-icon" aria-hidden="true">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
        `;

        section.insertBefore(toggleBtn, section.firstChild);

        section.classList.add('minimized');

        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isMinimized = section.classList.toggle('minimized');
            toggleBtn.setAttribute('aria-expanded', String(!isMinimized));
        });
    });
});
