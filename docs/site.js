/* ============================================================================
   SITE.JS — Back-to-top, Scroll Animations, TOC, Active Nav
   ============================================================================ */

(function () {
  'use strict';

  // --- Back to Top ---
  var btn = document.querySelector('.back-to-top');
  if (btn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Scroll Animations (IntersectionObserver) ---
  var animElements = document.querySelectorAll('.animate-on-scroll');
  if (animElements.length > 0 && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    animElements.forEach(function (el, i) {
      el.style.transitionDelay = (i % 6) * 0.08 + 's';
      observer.observe(el);
    });
  }

  // --- Auto-generate TOC for pages with .page-content ---
  var pageContent = document.querySelector('.page-content');
  var tocSidebar = document.querySelector('.toc-sidebar');

  if (pageContent && !tocSidebar) {
    var headings = pageContent.querySelectorAll('h2');
    if (headings.length >= 3) {
      // Create TOC
      var toc = document.createElement('nav');
      toc.className = 'toc-sidebar';
      toc.innerHTML = '<h4>On this page</h4>';

      headings.forEach(function (h, i) {
        if (!h.id) h.id = 'section-' + i;
        var link = document.createElement('a');
        link.href = '#' + h.id;
        link.textContent = h.textContent.replace(/^[^\w]*/, ''); // strip leading emoji
        toc.appendChild(link);
      });

      document.body.appendChild(toc);

      // Highlight active section
      var tocLinks = toc.querySelectorAll('a');
      window.addEventListener('scroll', function () {
        var current = '';
        headings.forEach(function (h) {
          var rect = h.getBoundingClientRect();
          if (rect.top <= 120) current = h.id;
        });
        tocLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
      }, { passive: true });
    }
  }

  // --- Active Nav Link ---
  var navLinks = document.querySelectorAll('.nav-links a');
  var path = window.location.pathname;
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href || href.startsWith('http')) return;
    // Resolve relative URL
    try {
      var resolved = new URL(href, window.location.href).pathname;
      if (path === resolved || (path.startsWith(resolved) && resolved !== '/' && resolved.length > 2)) {
        link.classList.add('active');
      }
    } catch (e) { /* ignore */ }
  });

})();
