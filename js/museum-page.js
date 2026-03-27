/**
 * Museum master catalog: filter rows by substring (model name, developer, year).
 */
(function () {
  'use strict';

  var input = document.getElementById('museum-catalog-filter');
  var catalog = document.getElementById('museum-master-catalog');
  if (!input || !catalog) return;

  var rows = catalog.querySelectorAll('tbody tr');

  function applyFilter() {
    var q = input.value.trim().toLowerCase();
    var n = 0;
    rows.forEach(function (row) {
      var show = !q || row.textContent.toLowerCase().indexOf(q) !== -1;
      row.hidden = !show;
      if (show) n += 1;
    });
    var countEl = document.getElementById('museum-catalog-count');
    if (countEl) {
      countEl.textContent = q ? n + ' / ' + rows.length + ' rows' : rows.length + ' models indexed';
    }
  }

  input.addEventListener('input', applyFilter);
  applyFilter();
})();
