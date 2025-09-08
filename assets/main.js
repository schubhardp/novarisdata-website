(function () {
  const STORAGE_KEY = 'nd_cookie_choice';

  function onReady(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  onReady(function () {
    const banner = document.querySelector('.cookie-banner');
    if (!banner) return;

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return;
    } catch (_) { }

    banner.style.display = 'flex';

    const accept = banner.querySelector('.cookie-accept');
    const decline = banner.querySelector('.cookie-decline');

    function save(choice) {
      try { localStorage.setItem(STORAGE_KEY, choice); } catch (_) { }
      banner.remove();
    }

    accept && accept.addEventListener('click', () => save('accept'));
    decline && decline.addEventListener('click', () => save('decline'));
  });
})();

// === Language dropdown: click-only ===
(function () {
  function setup(dd) {
    if (!dd) return;
    const btn = dd.querySelector('.lang-btn');
    const menu = dd.querySelector('.lang-menu');
    if (!btn || !menu) return;
    const setOpen = (v) => {
      dd.classList.toggle('open', v);
      btn.setAttribute('aria-expanded', String(v));
    };
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = dd.classList.contains('open');
      setOpen(!isOpen);
    });
    document.addEventListener('click', (e) => {
      if (!dd.contains(e.target)) setOpen(false);
    });
    dd.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { setOpen(false); btn.focus(); }
    });
  }
  document.querySelectorAll('.lang-dropdown').forEach(setup);
})();
