/* ------------------------------ BIBLIOTECA DE ÍCONES ------------------------------ */
const ICONS = {
  ansiedade: '<path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 6v6l4 2" /><circle cx="19" cy="5" r="1.5"/>',
  depressao: '<path d="M8 15s1.5-2 4-2 4 2 4 2"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/><circle cx="12" cy="12" r="10"/>',
  burnout: '<path d="M12 2c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-3 1 0 3 2 3 5a6 6 0 0 1-12 0c0-4 3-5 4-9z"/>',
  relacionamentos: '<circle cx="8" cy="9" r="3"/><circle cx="16" cy="9" r="3"/><path d="M2 20c0-3 2.5-5 6-5s6 2 6 5"/><path d="M10 20c0-3 2.5-5 6-5s6 2 6 5"/>',
  autoestima: '<path d="M12 21s-7-4.35-9.5-8.5C1 9 2.5 5.5 6 5c2-.2 3.5 1 4 2 .5-1 2-2.2 4-2 3.5.5 5 4 3.5 7.5C19 16.65 12 21 12 21z"/>',
  luto: '<path d="M12 3c3 4 5 6.5 5 10a5 5 0 0 1-10 0c0-3.5 2-6 5-10z"/>',
  estresse: '<path d="M4 12h3l2-7 4 14 2-7h5"/>',
  autoconhecimento: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  escuta: '<path d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-1v-7h3M4 12v5a2 2 0 0 0 2 2h1v-7H4"/>',
  evidencia: '<path d="M9 3h6l1 4H8l1-4z"/><path d="M12 7v13M6 20h12"/><path d="M4 12h5M15 12h5"/>',
  flexibilidade: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  acompanhamento: '<path d="M3 12l4 4L21 4"/><path d="M3 19h18"/>',
  sigilo: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  experiencia: '<path d="M12 2l2.6 6.2L21 9l-5 4.6L17.4 21 12 17.6 6.6 21 8 13.6 3 9l6.4-.8z"/>',
  online: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  personalizado: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/>',
  check: '<path d="M20 6L9 17l-5-5"/>',
  whatsapp: '<path d="M17.6 6.3A8 8 0 0 0 4 16.4L3 21l4.7-1a8 8 0 0 0 12-6.7 8 8 0 0 0-2.1-6.9z" fill="currentColor" stroke="none"/><path d="M9 10.5c.3 1.8 2.7 4.2 4.5 4.5.7.1 1.3-.4 1.6-1l.3-.7-2-1-.5.6c-1-.4-1.9-1.3-2.3-2.3l.6-.5-1-2-.7.3c-.6.3-1 .9-1 1.6z" fill="var(--primary-dark)" stroke="none"/>',
  calendario: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  mapPin: '<path d="M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  phone: '<path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11 11 0 0 0 3.5.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1 11 11 0 0 0 .6 3.5 1 1 0 0 1-.2 1z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1"/>',
  arrowUp: '<path d="M12 19V5M5 12l7-7 7 7"/>',
  star: '<path d="M12 2l3 6.5 7 .7-5.3 4.7 1.6 6.8L12 17.3 5.7 20.7l1.6-6.8L2 9.2l7-.7z" fill="currentColor" stroke="none"/>',
};

function iconSVG(name, extraClass = '') {
  const path = ICONS[name] || ICONS.check;
  return `<svg class="${extraClass}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
}

/* --------------------------------- APLICAR CONFIG (CORES) --------------------------------- */
function applyTheme() {
  const root = document.documentElement.style;
  root.setProperty('--primary', CONFIG.corPrimaria);
  root.setProperty('--primary-dark', CONFIG.corPrimariaEscura);
  root.setProperty('--secondary', CONFIG.corSecundaria);
  root.setProperty('--accent', CONFIG.corCTA);
  root.setProperty('--accent-dark', CONFIG.corCTAEscura);
  root.setProperty('--background', CONFIG.corBackground);
  root.setProperty('--text', CONFIG.corTexto);
  root.setProperty('--gray', CONFIG.corCinza);
}

/* --------------------------------- HELPERS --------------------------------- */
function whatsappLink(mensagem) {
  const msg = encodeURIComponent(mensagem || CONFIG.whatsappMensagemPadrao);
  return `https://wa.me/${CONFIG.whatsapp}?text=${msg}`;
}

function maskPhoneDisplay(phone) {
  return phone;
}

function initials(name) {
  return name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
}

function generoTexto(masc, fem) {
  return (CONFIG.genero || '').toLowerCase().startsWith('fem') ? fem : masc;
}

/* --------------------------------- RENDER: HEADER --------------------------------- */
function renderHeader() {
  document.getElementById('logo-text').innerHTML = `${CONFIG.nome.split(' ')[0]} <span>${CONFIG.nome.split(' ').slice(1).join(' ')}</span>`;
  document.querySelectorAll('.wa-link').forEach(el => el.href = whatsappLink());
  document.querySelectorAll('.wa-link-text').forEach(el => el.textContent = 'Falar no WhatsApp');
}

/* --------------------------------- RENDER: HERO --------------------------------- */
function renderHero() {
  const el = document.getElementById('hero-content');
  const seals = [];
  if (CONFIG.atendimentoOnline) seals.push(['check', 'Atendimento Online']);
  if (CONFIG.atendimentoPresencial) seals.push(['check', 'Atendimento Presencial']);
  seals.push(['sigilo', 'Sigilo Profissional']);

  el.innerHTML = `
    <div class="hero-badge" data-animate="fade-up">
      <span class="dot" aria-hidden="true"></span> Vagas abertas para novos pacientes
    </div>
    <h1 data-animate="fade-up">${CONFIG.headline}</h1>
    <p class="sub" data-animate="fade-up">${CONFIG.subheadline}</p>
    <div class="hero-actions" data-animate="fade-up">
      <a class="btn btn-primary" href="${whatsappLink()}" target="_blank" rel="noopener" aria-label="Agendar consulta pelo WhatsApp">
        ${iconSVG('whatsapp')} Agendar pelo WhatsApp
      </a>
      <a class="btn btn-outline" href="#como-funciona">${iconSVG('calendario')} Como funciona</a>
    </div>
    <div class="hero-seals" data-animate="fade-up">
      ${seals.map(([icon, label]) => `<span class="seal">${iconSVG(icon)} ${label}</span>`).join('')}
    </div>
  `;

  document.getElementById('hero-media').innerHTML = `
    <div class="hero-photo-wrap" data-animate="fade-left">
      <img src="${CONFIG.fotoPrincipal}" alt="Foto de ${CONFIG.nome}, ${CONFIG.especialidade}" width="640" height="800" loading="eager" fetchpriority="high">
    </div>
    <div class="hero-float-card" data-animate="fade-up">
      <span class="num" id="counter-anos">0</span>
      <span class="label">anos de experiência<br>ajudando pacientes</span>
    </div>
  `;
}

/* --------------------------------- RENDER: SOBRE --------------------------------- */
function renderAbout() {
  document.getElementById('about-photo').innerHTML =
    `<img src="${CONFIG.fotoConsultorio}" alt="Consultório de ${CONFIG.nome} em ${CONFIG.cidade}" width="600" height="800" loading="lazy">`;

  document.getElementById('about-text').innerHTML = `
    <div class="eyebrow">Sobre mim</div>
    <h2>Cuidado psicológico dedicado ao seu bem-estar em ${CONFIG.cidade}</h2>
    <p class="lead">${CONFIG.sobre}</p>
    <div class="about-blocks">
      <div class="about-block"><h3>Missão</h3><p>${CONFIG.missao}</p></div>
      <div class="about-block"><h3>Valores</h3><p>${CONFIG.valores}</p></div>
      <div class="about-block"><h3>Formação</h3><p>${CONFIG.formacao}</p></div>
      <div class="about-block"><h3>Abordagem</h3><p>${CONFIG.abordagem}</p></div>
    </div>
  `;
}

/* --------------------------------- RENDER: CARD GRIDS --------------------------------- */
function renderCardGrid(containerId, items, animDelay = true) {
  const el = document.getElementById(containerId);
  el.innerHTML = items.map((item, i) => `
    <article class="card" data-animate="fade-up" style="transition-delay:${animDelay ? (i % 4) * 0.08 : 0}s">
      <div class="card-icon">${iconSVG(item.icone)}</div>
      <h3>${item.titulo}</h3>
      <p>${item.descricao}</p>
    </article>
  `).join('');
}

/* --------------------------------- RENDER: TIMELINE --------------------------------- */
function renderTimeline() {
  const el = document.getElementById('timeline-grid');
  el.innerHTML = COMO_FUNCIONA.map((step, i) => `
    <div class="timeline-item" data-animate="fade-up" style="transition-delay:${i * 0.1}s">
      <div class="timeline-num">${step.numero}</div>
      <h3>${step.titulo}</h3>
      <p>${step.descricao}</p>
    </div>
  `).join('');
}

/* --------------------------------- RENDER: DEPOIMENTOS --------------------------------- */
function renderTestimonials() {
  const el = document.getElementById('testi-track');
  el.innerHTML = DEPOIMENTOS.map((t, i) => `
    <article class="testi-card" data-animate="fade-up" style="transition-delay:${i * 0.1}s">
      <div class="testi-stars" aria-label="${t.estrelas} de 5 estrelas">
        ${Array.from({length: t.estrelas}).map(() => iconSVG('star')).join('')}
      </div>
      <p class="testi-text">"${t.texto}"</p>
      <div class="testi-author">
        <div class="testi-avatar">${initials(t.nome)}</div>
        <div>
          <div class="testi-name">${t.nome}</div>
          <div class="testi-age">${t.idade} anos</div>
        </div>
      </div>
    </article>
  `).join('');
}

/* --------------------------------- RENDER: FAQ --------------------------------- */
function renderFAQ() {
  const el = document.getElementById('faq-list');
  el.innerHTML = FAQ.map((item, i) => `
    <div class="faq-item" data-animate="fade-up" style="transition-delay:${i * 0.05}s">
      <button class="faq-question" aria-expanded="false" aria-controls="faq-answer-${i}" id="faq-question-${i}">
        <span>${item.pergunta}</span>
        <span class="icon-plus" aria-hidden="true"></span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}" role="region" aria-labelledby="faq-question-${i}">
        <p>${item.resposta}</p>
      </div>
    </div>
  `).join('');

  el.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      el.querySelectorAll('.faq-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-answer').style.maxHeight = null;
          openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        }
      });

      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
      answer.style.maxHeight = !isOpen ? answer.scrollHeight + 'px' : null;
    });
  });
}

/* --------------------------------- RENDER: CTA FINAL --------------------------------- */
function renderCTAFinal() {
  document.getElementById('cta-final-content').innerHTML = `
    <div class="eyebrow">Dê o primeiro passo</div>
    <h2>Sua jornada de autocuidado pode começar hoje</h2>
    <p>Agende sua primeira sessão com ${CONFIG.nome} e dê o primeiro passo em direção a mais equilíbrio emocional.</p>
    <div class="cta-final-actions">
      <a class="btn btn-primary" href="${whatsappLink()}" target="_blank" rel="noopener">${iconSVG('whatsapp')} Agendar pelo WhatsApp</a>
    </div>
  `;
}

/* --------------------------------- RENDER: FOOTER --------------------------------- */
function renderFooter() {
  document.getElementById('footer-content').innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="logo">${CONFIG.nome.split(' ').join(' ')}</div>
        <p>${CONFIG.especialidade}</p>
        <div class="footer-social">
          <a href="${CONFIG.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${iconSVG('instagram')}</a>
          <a href="${whatsappLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${iconSVG('whatsapp')}</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Navegação</h4>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#problemas">Como posso ajudar</a></li>
          <li><a href="#como-funciona">Como funciona</a></li>
          <li><a href="#faq">Dúvidas</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contato</h4>
        <ul>
          <li><span>${CONFIG.telefone}</span></li>
          <li><span>${CONFIG.horarios}</span></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Localização</h4>
        <p style="margin-bottom:14px;color:rgba(255,255,255,0.7);font-size:0.9rem;">${CONFIG.endereco}</p>
        <div class="footer-map">
          <iframe src="${CONFIG.googleMaps}" loading="lazy" title="Mapa do consultório de ${CONFIG.nome}" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; ${new Date().getFullYear()} ${CONFIG.nome}. Todos os direitos reservados.</span>
      <span><a href="#">Política de Privacidade</a> · <a href="#">Termos de Uso</a></span>
    </div>
  `;
}

/* --------------------------------- SEO: META TAGS + JSON-LD --------------------------------- */
function renderSEO() {
  document.title = `${CONFIG.nome} | Psicanalista em ${CONFIG.cidade} — ${CONFIG.especialidade}`;

  const desc = `${CONFIG.nome}, ${CONFIG.especialidade}, ${CONFIG.crp}. Atendimento psicanalítico ${CONFIG.atendimentoPresencial ? 'presencial em ' + CONFIG.cidade + ' e ' : ''}online. Agende sua consulta.`;

  const metaMap = {
    'description': desc,
    'keywords': `psicanalista em ${CONFIG.cidade}, psicanálise online, terapia para ansiedade, terapia para depressão, atendimento psicanalítico, psicanalista ${CONFIG.crp}`,
    'author': CONFIG.nome,
    'robots': 'index, follow',
    'theme-color': CONFIG.corPrimaria,
  };
  Object.entries(metaMap).forEach(([name, content]) => {
    const tag = document.querySelector(`meta[name="${name}"]`);
    if (tag) tag.setAttribute('content', content);
  });

  const ogMap = {
    'og:title': document.title,
    'og:description': desc,
    'og:image': CONFIG.ogImage,
    'og:url': CONFIG.urlSite,
    'og:type': 'profile',
    'twitter:title': document.title,
    'twitter:description': desc,
    'twitter:image': CONFIG.ogImage,
  };
  Object.entries(ogMap).forEach(([prop, content]) => {
    const tag = document.querySelector(`meta[property="${prop}"], meta[name="${prop}"]`);
    if (tag) tag.setAttribute('content', content);
  });

  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute('href', CONFIG.urlSite);

  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon && CONFIG.favicon) favicon.setAttribute('href', CONFIG.favicon);

  // JSON-LD estruturado (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Person", "Psychologist"],
        "name": CONFIG.nome,
        "jobTitle": CONFIG.especialidade,
        "image": CONFIG.fotoPrincipal,
        "telephone": CONFIG.telefone,
        "email": CONFIG.email,
        "url": CONFIG.urlSite,
        "sameAs": [CONFIG.instagram],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": CONFIG.endereco,
          "addressLocality": CONFIG.cidade,
          "addressRegion": CONFIG.estado,
          "postalCode": CONFIG.cep,
          "addressCountry": "BR"
        }
      },
      {
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "name": `${CONFIG.nome} - Psicologia`,
        "image": CONFIG.ogImage,
        "telephone": CONFIG.telefone,
        "email": CONFIG.email,
        "url": CONFIG.urlSite,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": CONFIG.endereco,
          "addressLocality": CONFIG.cidade,
          "addressRegion": CONFIG.estado,
          "postalCode": CONFIG.cep,
          "addressCountry": "BR"
        },
        "openingHours": CONFIG.horarios
      },
      {
        "@type": "Organization",
        "name": `${CONFIG.nome} - Psicologia`,
        "url": CONFIG.urlSite,
        "logo": CONFIG.ogImage
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ.map(f => ({
          "@type": "Question",
          "name": f.pergunta,
          "acceptedAnswer": { "@type": "Answer", "text": f.resposta }
        }))
      }
    ]
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

/* --------------------------------- INTERAÇÕES --------------------------------- */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav-mobile');
  const overlay = document.getElementById('nav-overlay');

  function close() {
    toggle.classList.remove('open');
    nav.classList.remove('open');
    overlay.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function open() {
    toggle.classList.add('open');
    nav.classList.add('open');
    overlay.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }
  toggle.addEventListener('click', () => nav.classList.contains('open') ? close() : open());
  overlay.addEventListener('click', close);
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initScrollAnimations() {
  const items = document.querySelectorAll('[data-animate]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  items.forEach(item => observer.observe(item));
}

function initCounter() {
  const el = document.getElementById('counter-anos');
  if (!el) return;
  const target = parseInt(CONFIG.anosExperiencia, 10) || 0;
  let started = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 40));
        const interval = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(interval); }
          el.textContent = current;
        }, 30);
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });
  observer.observe(el);
}

function initLoader() {
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 350);
  });
  // fallback caso o evento load demore
  setTimeout(() => loader.classList.add('hidden'), 2500);
}

/* --------------------------------- INIT GERAL --------------------------------- */
function init() {
  applyTheme();
  renderSEO();
  renderHeader();
  renderHero();
  renderAbout();
  renderCardGrid('problems-grid', PROBLEMAS);
  renderCardGrid('benefits-grid', BENEFICIOS);
  renderTimeline();
  renderCardGrid('differentials-grid', DIFERENCIAIS);
  renderFAQ();
  renderCTAFinal();
  renderFooter();

  initHeaderScroll();
  initMobileMenu();
  initBackToTop();
  initScrollAnimations();
  initCounter();
  initLoader();
}

document.addEventListener('DOMContentLoaded', init);
