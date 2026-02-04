/**
 * Project Badges Module
 * Automatically adds type badges to project cards based on title matching.
 * [TRACE: DOCS/ARCHITECTURE.md]
 */
(function () {
    'use strict';

    // Project type mappings
    var games = [
        'kingdom.io', 'GaelDrive', 'FireFest', 'Brain-Busters', 'Click-It-Goin',
        'otter.planes.io', 'Runes-of-Tir-na-nOg', 'Zombobs', 'Fable-Forged', 'Game-Runic-Lands'
    ];
    var music = ['Aethereal Hymns', 'Audacious', 'BlockBanger'];
    var minecraft = ['Feeshman Deelux', 'Chipper Chopper', 'MC-Companion-Map'];
    var android = ['Proof Of Purchase', 'Nebula-Camera', 'Brain-Busters', 'Lorenzez-Notez', 'Meal_Mate'];

    document.querySelectorAll('.project-card').forEach(function (card) {
        var title = card.querySelector('.project-title');
        if (!title) return;

        var t = title.textContent.trim();
        var isGame = t.indexOf('GAME-') === 0 || t.indexOf('Game:') === 0 || games.indexOf(t) !== -1;
        var isMusic = music.indexOf(t) !== -1;
        var isMinecraft = minecraft.indexOf(t) !== -1;
        var isAndroid = android.indexOf(t) !== -1;

        var types = [];
        if (isMinecraft) types.push('minecraft');
        if (isMusic) types.push('music');
        if (isAndroid) types.push('android');
        if (isGame) types.push('game');
        if (types.length === 0) types.push('software');

        var wrap = document.createElement('div');
        wrap.className = 'project-badges';

        types.forEach(function (type) {
            var badge = document.createElement('span');
            badge.className = 'project-badge badge-' + type;
            badge.textContent = type.charAt(0).toUpperCase() + type.slice(1);
            wrap.appendChild(badge);
        });

        card.insertBefore(wrap, card.firstChild);
    });
})();
