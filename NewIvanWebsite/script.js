// ============================================
// SCRIPT.JS - Ivan Castro Portfolio
// ============================================

document.addEventListener('DOMContentLoaded', function () {
  // ----------------------
  // DARK MODE TOGGLE + PERSISTÊNCIA
  // ----------------------
  const body = document.body;
  const toggleBtn = document.getElementById('dark-mode-toggle');

  if (toggleBtn) {
    const icon = toggleBtn.querySelector('i');

    // 1. Carrega preferência salva (dark por defeito)
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isDark = savedTheme === 'dark';

    if (isDark) {
      body.classList.add('dark-mode');
      icon.className = 'fas fa-sun';
    } else {
      icon.className = 'fas fa-moon';
    }

    // 2. Toggle ao clicar
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      const nowDark = body.classList.contains('dark-mode');

      icon.className = nowDark ? 'fas fa-sun' : 'fas fa-moon';
      localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    });

    // 3. Tecla rápida Ctrl+D
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        toggleBtn.click();
      }
    });
  }

  // ----------------------
  // TYPED.JS - Texto dinâmico Hero
  // ----------------------
  const typedElement = document.querySelector('.typing-text');

  if (typeof Typed !== 'undefined' && typedElement) {
    new Typed('.typing-text', {
      strings: [
        'Automation Engineer',
        'Robotics Engineer',
        'Software Developer',
        'PLC Programmer'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }

  // ----------------------
  // PARTICLES.JS - Fundo animado
  // ----------------------
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: ['#ffffff', '#a0a0a0', '#f0f0f0'] },
        shape: { type: 'circle' },
        opacity: { value: 0.4, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 120,
          color: '#888888',
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          random: true,
          out_mode: 'out'
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 0.6 } },
          push: { particles_nb: 3 }
        }
      },
      retina_detect: true
    });
  }

  // ----------------------
  // SCROLL SUAVE NAVEGAÇÃO
  // ----------------------
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.slice(1);
        const target = document.getElementById(targetId);

        if (target) {
          const offset = 80; // altura do header
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  // ----------------------
  // SCROLLREVEAL - Animações
  // ----------------------
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
      distance: '40px',
      duration: 800,
      easing: 'cubic-bezier(0.5, 0, 0.5, 1)',
      reset: false
    });

    // Hero
    sr.reveal('.hero-text', { origin: 'left', delay: 200 });
    sr.reveal('.hero-image', { origin: 'right', delay: 400 });

    // About
    sr.reveal('.about-intro', { origin: 'bottom', delay: 200 });
    sr.reveal('.about-card', { origin: 'bottom', interval: 150 });

    // Experience/Education
    sr.reveal('.experience-row', { origin: 'bottom', interval: 200 });

    // Skills
    sr.reveal('.skills-tags', { origin: 'bottom', delay: 100 });
    sr.reveal('.skill-tag', { origin: 'bottom', interval: 80 });

    // Portfolio
    sr.reveal('#portfolio h2', { origin: 'bottom', delay: 100 });
    sr.reveal('#portfolio p', { origin: 'bottom', delay: 200 });
    sr.reveal('#portfolio .hero-card-btn', { origin: 'bottom', delay: 300 });

    // Contact
    sr.reveal('.contact-form', { origin: 'bottom', delay: 200 });
  }

  // ----------------------
  // EFEITOS HOVER EXTRAS (opcional, podes remover se preferires só o CSS)
  // ----------------------
  const cards = document.querySelectorAll('.about-card, .project-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });

    // ----------------------
  // PROJECT CARDS - ABRIR DETALHES AO CLICAR NO TÍTULO
  // ----------------------
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    const title = card.querySelector('.project-title');

    if (!title) return;

    title.style.cursor = 'pointer';

    title.addEventListener('click', (e) => {
      e.stopPropagation();

      // Se quiseres só um card aberto de cada vez, descomenta:
      // projectCards.forEach(c => {
      //   if (c !== card) c.classList.remove('open');
      // });

      card.classList.toggle('open');
    });
  });

});
