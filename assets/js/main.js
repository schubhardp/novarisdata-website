// Cookie banner & small helpers
(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const KEY = 'nd_cookie_consent';
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;
  const saved = localStorage.getItem(KEY);
  if (!saved) banner.hidden = false;

  function set(value){ localStorage.setItem(KEY, value); banner.hidden = true; }
  document.getElementById('cookie-accept').addEventListener('click', ()=> set('accepted'));
  document.getElementById('cookie-decline').addEventListener('click', ()=> set('declined'));
})();
