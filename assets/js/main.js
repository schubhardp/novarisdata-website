
// Cookie banner & helpers + mobile menu + mailto build
(function(){
  const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  const KEY='nd_cookie_consent', banner=document.getElementById('cookie-banner');
  if (banner && !localStorage.getItem(KEY)) banner.hidden=false;
  function set(v){ localStorage.setItem(KEY,v); if(banner) banner.hidden=true; }
  document.getElementById('cookie-accept')?.addEventListener('click',()=>set('accepted'));
  document.getElementById('cookie-decline')?.addEventListener('click',()=>set('declined'));
  const toggle=document.querySelector('.nav-toggle'); const menu=document.getElementById('menu');
  toggle?.addEventListener('click',()=>{ const ex=toggle.getAttribute('aria-expanded')==='true'; toggle.setAttribute('aria-expanded',(!ex).toString()); if(menu){ menu.style.display= ex?'none':'flex'; }});
})();
function buildMailto(e){
  e.preventDefault();
  const isEN = document.documentElement.lang==='en';
  const name = document.getElementById(isEN?'name':'nombre')?.value?.trim()||'';
  const mail = document.getElementById('email')?.value?.trim()||'';
  const subj = document.getElementById(isEN?'subject':'asunto')?.value?.trim()||'';
  const msg  = document.getElementById(isEN?'message':'mensaje')?.value?.trim()||'';
  const subject = encodeURIComponent(`[Contact] ${subj} — ${name}`);
  const body    = encodeURIComponent(`${isEN?'Name':'Nombre'}: ${name}\nEmail: ${mail}\n\n${msg}`);
  window.location.href = `mailto:contact@novarisdata.com?subject=${subject}&body=${body}`;
  return false;
}
