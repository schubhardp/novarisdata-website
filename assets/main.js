// assets/main.js
(function () {
  const STORAGE_KEY = 'nd_cookie_choice';

  function onReady(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  onReady(function () {
    const banner = document.querySelector('.cookie-banner');
    if (!banner) return;

    // Evita re-mostrar si ya hay elección
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
