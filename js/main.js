/* New Vista Heating – Main JavaScript */

(function () {
  'use strict';

  /* ---- Mobile navigation toggle ---- */
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    /* Close menu when a link is clicked */
    nav.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    /* Close menu on outside click */
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !navToggle.contains(e.target)) {
        nav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Active nav link based on current page ---- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---- Contact form submission ---- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;

      btn.disabled = true;
      btn.textContent = 'Sending…';

      /* Simulate async submission – replace with real fetch/API call */
      setTimeout(function () {
        btn.textContent = '✓ Message Sent!';
        btn.style.background = '#27ae60';
        contactForm.reset();

        setTimeout(function () {
          btn.disabled = false;
          btn.textContent = originalText;
          btn.style.background = '';
        }, 4000);
      }, 1200);
    });
  }

  /* ---- Scroll-reveal animation ---- */
  if ('IntersectionObserver' in window) {
    const revealEls = document.querySelectorAll(
      '.service-card, .testimonial-card, .process-step, .why-us__feature, .team-card, .cert-badge'
    );

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    revealEls.forEach(function (el, i) {
      el.classList.add('reveal-on-scroll');
      el.style.transitionDelay = (i % 3) * 0.1 + 's';
      observer.observe(el);
    });
  }

  /* ---- Sticky header shadow ---- */
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 10
        ? '0 4px 20px rgba(0,0,0,0.14)'
        : '0 2px 8px rgba(0,0,0,0.08)';
    }, { passive: true });
  }

  /* ---- Smooth phone link for click-to-call ---- */
  document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'click', { event_category: 'contact', event_label: 'phone' });
      }
    });
  });

})();
