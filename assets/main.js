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


// === Language dropdown: click-only (pill) ===
(function(){
  function setup(dd){
    if(!dd) return;
    var btn = dd.querySelector('.lang-toggle');
    var menu = dd.querySelector('.lang-menu');
    if(!btn || !menu) return;

    function setOpen(v){
      if(v){ dd.classList.add('open'); btn.setAttribute('aria-expanded','true'); }
      else { dd.classList.remove('open'); btn.setAttribute('aria-expanded','false'); }
    }

    btn.addEventListener('click', function(e){
      e.preventDefault();
      setOpen(!dd.classList.contains('open'));
    });

    document.addEventListener('click', function(e){
      if(!dd.contains(e.target)) setOpen(false);
    });

    dd.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){ setOpen(false); btn.focus(); }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function(){ 
      document.querySelectorAll('.lang').forEach(setup);
    });
  } else {
    document.querySelectorAll('.lang').forEach(setup);
  }
})();
