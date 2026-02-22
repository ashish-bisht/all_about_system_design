/* ============================================================================
   NAV.JS — Hamburger Menu + Search Modal
   ============================================================================ */

(function () {
  'use strict';

  // --- Hamburger Menu ---
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  const overlay = document.querySelector('.nav-overlay');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
      if (overlay) overlay.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    if (overlay) {
      overlay.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    // Close on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- Search Modal ---
  var searchBtn = document.querySelector('.nav-search-btn');
  var searchModal = document.querySelector('.search-modal');
  var searchInput = document.querySelector('.search-input');
  var searchResults = document.querySelector('.search-results');
  var searchIndex = null;

  function openSearch() {
    if (!searchModal) return;
    searchModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (searchInput) {
      searchInput.value = '';
      searchInput.focus();
    }
    if (searchResults) searchResults.innerHTML = '<div class="search-empty">Type to search across all pages...</div>';
    loadSearchIndex();
  }

  function closeSearch() {
    if (!searchModal) return;
    searchModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function loadSearchIndex() {
    if (searchIndex) return;
    // Determine base path from current page
    var base = '';
    var scripts = document.querySelectorAll('script[src*="nav.js"]');
    if (scripts.length > 0) {
      var src = scripts[0].getAttribute('src');
      base = src.replace('nav.js', '');
    }
    fetch(base + 'search-index.json')
      .then(function (r) { return r.json(); })
      .then(function (data) { searchIndex = data; })
      .catch(function () { searchIndex = []; });
  }

  function doSearch(query) {
    if (!searchResults || !searchIndex) return;
    if (!query.trim()) {
      searchResults.innerHTML = '<div class="search-empty">Type to search across all pages...</div>';
      return;
    }
    var q = query.toLowerCase();
    var results = searchIndex.filter(function (item) {
      return item.title.toLowerCase().includes(q) ||
        (item.tags && item.tags.some(function (t) { return t.toLowerCase().includes(q); })) ||
        (item.section && item.section.toLowerCase().includes(q));
    });

    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-empty">No results for "' + query + '"</div>';
      return;
    }

    // Determine base URL from the current location
    var basePath = getBasePath();

    searchResults.innerHTML = results.slice(0, 12).map(function (item) {
      var tagHtml = '';
      if (item.difficulty) {
        tagHtml = '<span class="search-result-tag ' + item.difficulty + '">' + item.difficulty + '</span>';
      }
      return '<a href="' + basePath + item.url + '" class="search-result-item">' +
        '<div class="search-result-title">' + item.title + tagHtml + '</div>' +
        '<div class="search-result-path">' + (item.section || '') + '</div>' +
        '</a>';
    }).join('');
  }

  function getBasePath() {
    // Find the nav.js script tag to determine depth
    var scripts = document.querySelectorAll('script[src*="nav.js"]');
    if (scripts.length > 0) {
      var src = scripts[0].getAttribute('src');
      return src.replace('nav.js', '');
    }
    return '';
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', openSearch);
  }

  if (searchModal) {
    searchModal.addEventListener('click', function (e) {
      if (e.target === searchModal) closeSearch();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      doSearch(searchInput.value);
    });
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeSearch();
    });
  }

  // Cmd+K / Ctrl+K shortcut
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (searchModal && searchModal.classList.contains('active')) {
        closeSearch();
      } else {
        openSearch();
      }
    }
    if (e.key === 'Escape' && searchModal && searchModal.classList.contains('active')) {
      closeSearch();
    }
  });
})();
