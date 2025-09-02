
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle && menu){
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', (!expanded).toString());
    menu.style.display = expanded ? 'none' : 'flex';
  });
}
function buildMailto(e){
  e.preventDefault();
  const isEN = document.documentElement.lang === 'en';
  const name = document.getElementById(isEN ? 'name' : 'nombre')?.value?.trim() || '';
  const mail = document.getElementById('email')?.value?.trim() || '';
  const subj = document.getElementById(isEN ? 'subject' : 'asunto')?.value?.trim() || '';
  const msg = document.getElementById(isEN ? 'message' : 'mensaje')?.value?.trim() || '';
  const subject = encodeURIComponent(`[Contact] ${subj} — ${name}`);
  const body = encodeURIComponent(`${isEN?'Name':'Nombre'}: ${name}\nEmail: ${mail}\n\n${msg}`);
  window.location.href = `mailto:contact@novarisdata.com?subject=${subject}&body=${body}`;
  return false;
}
