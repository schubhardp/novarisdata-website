// Year & simple cookie banner
(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const KEY = 'nd_cookie_consent';
  const banner = document.getElementById('cookie-banner');
  if (banner){
    const saved = localStorage.getItem(KEY);
    if (!saved) banner.hidden = false;
    function set(v){ localStorage.setItem(KEY, v); banner.hidden = true; }
    document.getElementById('cookie-accept')?.addEventListener('click', ()=> set('accepted'));
    document.getElementById('cookie-decline')?.addEventListener('click', ()=> set('declined'));
  }
})();

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle && menu){
  toggle.addEventListener('click', () => {
    const exp = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', (!exp).toString());
    menu.style.display = exp ? 'none' : 'flex';
  });
}

// Mailto builder (ES/EN)
function buildMailto(e){
  e.preventDefault();
  const isEN = document.documentElement.lang === 'en';
  const name = document.getElementById(isEN ? 'name' : 'nombre')?.value?.trim() || '';
  const mail = document.getElementById('email')?.value?.trim() || '';
  const subj = document.getElementById(isEN ? 'subject' : 'asunto')?.value?.trim() || '';
  const msg = document.getElementById(isEN ? 'message' : 'mensaje')?.value?.trim() || '';
  const subject = encodeURIComponent(`[Contact] ${subj} — ${name}`);
  const body = encodeURIComponent(`${isEN?'Name':'Nombre'}: ${name}
Email: ${mail}

${msg}`);
  window.location.href = `mailto:contact@novarisdata.com?subject=${subject}&body=${body}`;
  return false;
}