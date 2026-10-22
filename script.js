/* Progressive enhancement: content and native details work without JavaScript. */
(() => {
  'use strict';
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
  const root = document.documentElement;
  const dialog = $('#project-dialog');
  let language = 'en';
  let activeFilter = 'all';
  let previousHash = '';
  let projectTrigger = null;
  let copyTimer;
  const countries = [
    ['United States','Estados Unidos'],['Mexico','México'],['Brazil','Brasil'],['Colombia','Colombia'],
    ['Ecuador','Ecuador'],['Chile','Chile'],['Argentina','Argentina'],['Spain','España'],
    ['El Salvador','El Salvador'],['Guatemala','Guatemala'],['Canada','Canadá'],['Panama','Panamá'],
    ['United Kingdom','Reino Unido'],['Ireland','Irlanda'],['Switzerland','Suiza'],['Germany','Alemania'],
    ['Netherlands','Países Bajos'],['Greece','Grecia'],['Italy','Italia'],['Morocco','Marruecos'],
    ['Egypt','Egipto'],['South Africa','Sudáfrica'],['China','China'],['Japan','Japón'],
    ['South Korea','Corea del Sur'],['Taiwan','Taiwán'],['Iceland','Islandia'],['Australia','Australia'],
    ['Puerto Rico','Puerto Rico']
  ];
  const t = (en, es) => language === 'es' ? es : en;

  function filterProjects(filter) {
    activeFilter = filter;
    let count = 0;
    $$('.project-entry').forEach(entry => {
      const match = filter === 'all' || entry.dataset.categories.split(' ').includes(filter);
      entry.hidden = !match;
      if (match) count++;
    });
    $$('[data-filter]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
    $('#project-count').textContent = `${count} ${t('projects', 'proyectos')}`;
  }

  function setDialogLabel() {
    const headings = $$('.dialog-content h3');
    headings.forEach(heading => heading.removeAttribute('id'));
    const visible = headings.find(heading => !heading.lang || heading.lang === language);
    if (visible) visible.id = 'dialog-title';
  }

  function setLanguage(next) {
    language = next === 'es' ? 'es' : 'en';
    root.lang = language;
    root.dataset.lang = language;
    document.title = t('Diego Gonzalez — Engineering in motion', 'Diego Gonzalez — Ingeniería en movimiento');
    $$('[data-set-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.setLang === language)));
    $('.desktop-nav').setAttribute('aria-label', t('Main navigation', 'Navegación principal'));
    $('.mobile-nav').setAttribute('aria-label', t('Mobile navigation', 'Navegación móvil'));
    $('.project-filters').setAttribute('aria-label', t('Filter projects', 'Filtrar proyectos'));
    $('.proof-strip').setAttribute('aria-label', t('Career highlights', 'Logros profesionales'));
    $('.pipeline').setAttribute('aria-label', t('Data to decisions', 'De datos a decisiones'));
    $('.contact-footer > .brand-mark').setAttribute('aria-label', t('Back to top', 'Volver arriba'));
    $('.dialog-close').setAttribute('aria-label', t('Close project', 'Cerrar proyecto'));
    $('.portrait-frame img').alt = t('Pixel-art portrait of Diego in a cap and glasses, with Rio de Janeiro behind him.', 'Retrato de Diego en pixel art con gorra y lentes, con Río de Janeiro al fondo.');
    $('#country-list').replaceChildren(...countries.map(country => {
      const item = document.createElement('li');
      item.textContent = country[language === 'es' ? 1 : 0];
      return item;
    }));
    filterProjects(activeFilter);
    setDialogLabel();
    $('#copy-status').textContent = '';
    try { localStorage.setItem('dg-lang', language); } catch { /* Optional preference storage. */ }
  }

  function openProject(id, trigger) {
    const source = document.getElementById(`project-${id}`);
    if (!source) return;
    if (typeof dialog.showModal !== 'function') {
      filterProjects('all');
      source.open = true;
      source.scrollIntoView({ block: 'start' });
      return;
    }
    if (!dialog.open) {
      previousHash = location.hash.startsWith('#project-') ? '' : location.hash;
      projectTrigger = trigger || document.activeElement;
    }
    $('#dialog-content').replaceChildren($('.project-detail', source).cloneNode(true));
    setDialogLabel();
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('dialog-open');
    history.replaceState(null, '', `#project-${id}`);
  }

  function closeProject() {
    if (dialog.open) dialog.close();
  }

  $$('[data-project]').forEach(link => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    openProject(link.dataset.project, link);
  }));
  if (typeof dialog.showModal === 'function') {
    $$('[data-project], .project-entry > summary').forEach(trigger => {
      trigger.setAttribute('aria-haspopup', 'dialog');
      trigger.setAttribute('aria-controls', 'project-dialog');
    });
  }
  $$('.project-entry > summary').forEach(summary => summary.addEventListener('click', event => {
    event.preventDefault();
    openProject(summary.parentElement.id.slice('project-'.length), summary);
  }));
  $('.dialog-close').addEventListener('click', closeProject);
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeProject();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    if (location.hash.startsWith('#project-')) history.replaceState(null, '', `${location.pathname}${location.search}${previousHash}`);
    projectTrigger?.focus({ preventScroll: true });
  });
  dialog.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (link) closeProject();
  });
  function openHashProject() {
    if (location.hash.startsWith('#project-')) openProject(location.hash.slice(9));
  }
  window.addEventListener('hashchange', openHashProject);
  $$('[data-filter]').forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));
  $$('[data-set-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.setLang)));

  const menuButton = $('.menu-toggle');
  const mobileNav = $('#mobile-nav');
  function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); mobileNav.hidden = true; }
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    mobileNav.hidden = expanded;
  });
  $$('.mobile-nav a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileNav.hidden) { closeMenu(); menuButton.focus(); }
  });
  document.addEventListener('click', event => {
    if (!mobileNav.hidden && !event.target.closest('.site-header')) closeMenu();
  });
  window.matchMedia('(min-width: 651px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

  $('#copy-email').addEventListener('click', async () => {
    const email = $('#copy-email').dataset.email;
    const status = $('#copy-status');
    clearTimeout(copyTimer);
    try {
      await navigator.clipboard.writeText(email);
      status.textContent = t('Copied. Looking forward to connecting!', 'Copiado. ¡Será un gusto conectar!');
    } catch {
      status.textContent = t('Select the email address above to copy it, or click it to email me.', 'Selecciona el correo de arriba para copiarlo, o haz clic para escribirme.');
    }
    copyTimer = setTimeout(() => { status.textContent = ''; }, 5000);
  });

  const clock = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', hour12: false });
  function tick() {
    const now = new Date();
    $('#clock').textContent = `${clock.format(now)} CT`;
    $('#clock').dateTime = now.toISOString();
  }
  tick();
  setInterval(tick, 30000);
  $('#year').textContent = new Date().getFullYear();

  if ('IntersectionObserver' in window) {
    const navLinks = $$('.desktop-nav a');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
    $$('main > section').forEach(section => observer.observe(section));
  }
  let savedLanguage;
  try { savedLanguage = localStorage.getItem('dg-lang'); } catch { /* Storage may be unavailable. */ }
  setLanguage(savedLanguage || (navigator.language?.startsWith('es') ? 'es' : 'en'));
  root.classList.add('js');
  openHashProject();
})();
