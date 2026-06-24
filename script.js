// =============================================
// DATA
// =============================================

const SKILLS = [
  { icon: '🐍', name: 'Python',       pct: 90 },
  { icon: '🤖', name: 'PyTorch',      pct: 75 },
  { icon: '🧠', name: 'LLMs',         pct: 80 },
  { icon: '🔍', name: 'RAG',          pct: 85 },
  { icon: '⚡', name: 'FastAPI',      pct: 80 },
  { icon: '🗄️', name: 'SQL',          pct: 75 },
  { icon: '📊', name: 'Pandas',       pct: 85 },
  { icon: '🔢', name: 'NumPy',        pct: 90 },
  { icon: '📈', name: 'Scikit-learn', pct: 80 },
  { icon: '🌐', name: 'Streamlit',    pct: 90 },
  { icon: '🐳', name: 'Docker',       pct: 50 },
  { icon: '☁️', name: 'AWS',          pct: 55 },
  { icon: '🔗', name: 'LangChain',    pct: 75 },
  { icon: '📦', name: 'FAISS',        pct: 80 },
  { icon: '🖥️', name: 'JavaScript',  pct: 65 },
  { icon: '🧩', name: 'Node.js',      pct: 60 },
  { icon: '📝', name: 'Git',          pct: 80 },
  { icon: '🔄', name: 'LangGraph',    pct: 70 },
  { icon: '💬', name: 'Groq API',     pct: 85 },
  { icon: '🏗️', name: 'C++',         pct: 60 },
];

const PROJECTS = [
  {
    num: '01',
    title: 'GPT-Style LLM from Scratch',
    desc: 'Built a complete GPT-style language model using only NumPy and Python — no PyTorch, no HuggingFace. 8 files covering BPE tokenizer, multi-head attention, AdamW training loop, and temperature/top-k/nucleus sampling strategies. Proves deep understanding of transformer internals.',
    tags: ['NumPy', 'Python', 'BPE Tokenizer', 'Multi-Head Attention', 'AdamW', 'Transformers'],
    links: [
      { label: '⭐ GitHub', href: 'https://github.com/jaideep13-stack', primary: true },
    ]
  },
  {
    num: '02',
    title: 'Hybrid RAG Pipeline',
    desc: 'Production-grade RAG system with TF-IDF + BM25 + dense retrieval, IVF vector store, RRF hybrid search, cross-encoder reranker, and Groq-powered generation. 6-file architecture with evaluation metrics (MRR, NDCG, hit rate). Deployed on AWS EC2/Lambda.',
    tags: ['BM25', 'FAISS', 'RRF', 'Cross-Encoder', 'Groq', 'AWS Lambda', 'FastAPI'],
    links: [
      { label: '⭐ GitHub', href: 'https://github.com/jaideep13-stack', primary: true },
    ]
  },
  {
    num: '03',
    title: 'ProductIQ',
    desc: 'End-to-end product intelligence system: Pydantic ingestion → BGE-large embeddings → FAISS + SQLite → hybrid RRF search → Groq LLM auto-tagging → Streamlit frontend. Features pHash duplicate detection and 5-layer architecture. Live on Streamlit Cloud.',
    tags: ['BGE-Large', 'FAISS', 'SQLite', 'Groq', 'Streamlit', 'pHash', 'RRF'],
    links: [
      { label: '🚀 Live Demo', href: 'https://streamlit.io', primary: true },
      { label: '⭐ GitHub', href: 'https://github.com/jaideep13-stack/productiq' },
    ]
  },
  {
    num: '04',
    title: 'Multi-Agent Financial Research System',
    desc: 'LangGraph supervisor architecture with 4 specialized agents (researcher, analyst, critic, summarizer), FastAPI backend, FAISS vector store, and Streamlit frontend. Handles complex financial research queries with agent orchestration and memory.',
    tags: ['LangGraph', 'FastAPI', 'FAISS', 'Streamlit', 'Multi-Agent', 'LLM'],
    links: [
      { label: '🚀 Live Demo', href: 'https://streamlit.io', primary: true },
      { label: '⭐ GitHub', href: 'https://github.com/jaideep13-stack' },
    ]
  },
  {
    num: '05',
    title: 'IMMOTA — AI Investment Intelligence',
    desc: 'AI-powered investment intelligence platform built on Streamlit Cloud. Aggregates market signals, news, and financial data to generate investment insights using LLM-based analysis. Live with real users.',
    tags: ['Python', 'Streamlit', 'LLM', 'Financial Data', 'AI Analysis'],
    links: [
      { label: '🚀 Live Demo', href: 'https://streamlit.io', primary: true },
      { label: '⭐ GitHub', href: 'https://github.com/jaideep13-stack/IMMOTA' },
    ]
  },
  {
    num: '06',
    title: 'ATS Resume Analyser',
    desc: 'Resume scoring tool powered by Groq + LLaMA 3 that parses job descriptions and resumes, computes keyword overlap, identifies missing skills, and gives actionable improvement suggestions. Live on Streamlit with active users.',
    tags: ['Groq', 'LLaMA 3', 'Streamlit', 'NLP', 'Python'],
    links: [
      { label: '🚀 Live Demo', href: 'https://streamlit.io', primary: true },
      { label: '⭐ GitHub', href: 'https://github.com/jaideep13-stack' },
    ]
  },
];

// =============================================
// TYPING ANIMATION
// =============================================
const PHRASES = [
  'Jaideep Bathod.',
  'an AI/ML Engineer.',
  'a Builder.',
  'an Immediate Joiner.',
];

let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;
let typingTimeout;

function type() {
  const el = document.getElementById('typed-text');
  if (!el) return;

  const current = PHRASES[phraseIdx];

  if (isDeleting) {
    charIdx--;
  } else {
    charIdx++;
  }

  el.textContent = current.slice(0, charIdx);

  let delay = isDeleting ? 50 : 90;

  if (!isDeleting && charIdx === current.length) {
    // pause at end
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    phraseIdx = (phraseIdx + 1) % PHRASES.length;
    delay = 300;
  }

  typingTimeout = setTimeout(type, delay);
}

// =============================================
// RENDER SKILLS
// =============================================
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  grid.innerHTML = SKILLS.map(skill => `
    <div class="skill-item fade-in">
      <span class="skill-icon">${skill.icon}</span>
      <span class="skill-name">${skill.name}</span>
      <span class="skill-percent">${skill.pct}%</span>
      <div class="skill-proficiency" style="width: 0%" data-width="${skill.pct}%"></div>
    </div>
  `).join('');
}

// =============================================
// RENDER PROJECTS
// =============================================
function renderProjects() {
  const list = document.getElementById('projectsList');
  if (!list) return;

  list.innerHTML = PROJECTS.map(p => `
    <div class="project-card fade-in">
      <div class="project-num">${p.num}</div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span>${t}</span>`).join('')}
        </div>
        <div class="project-links">
          ${p.links.map(l => `
            <a href="${l.href}" target="_blank" class="project-link ${l.primary ? 'primary' : ''}">
              ${l.label}
            </a>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// =============================================
// SCROLL ANIMATIONS (IntersectionObserver)
// =============================================
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // stagger delay for grid items
        const siblings = entry.target.parentElement.querySelectorAll('.fade-in');
        let idx = 0;
        siblings.forEach((el, j) => { if (el === entry.target) idx = j; });

        setTimeout(() => {
          entry.target.classList.add('visible');
          // animate skill bar when visible
          const bar = entry.target.querySelector('.skill-proficiency');
          if (bar) {
            setTimeout(() => {
              bar.style.width = bar.getAttribute('data-width');
            }, 100);
          }
        }, Math.min(idx * 60, 400));

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// =============================================
// NAVBAR — active section highlight + shrink
// =============================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    // shrink on scroll
    if (window.scrollY > 50) {
      navbar.style.borderBottomColor = 'rgba(255,255,255,0.05)';
    } else {
      navbar.style.borderBottomColor = 'rgba(255,255,255,0.08)';
    }

    // active section
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) current = sec.id;
    });

    navLinks.forEach(link => {
      link.style.color = '';
      if (link.getAttribute('href') === `#${current}`) {
        link.style.color = 'var(--text)';
      }
    });
  });
}

// =============================================
// MOBILE MENU
// =============================================
function initMobileMenu() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => menu.classList.remove('open'));
  });
}

// =============================================
// CONTACT FORM (mailto fallback)
// =============================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = document.getElementById('formName').value.trim();
    const email   = document.getElementById('formEmail').value.trim();
    const subject = document.getElementById('formSubject').value.trim() || 'Portfolio Inquiry';
    const message = document.getElementById('formMessage').value.trim();

    const body = `Hi Jaideep,\n\nMy name is ${name} (${email}).\n\n${message}`;
    const mailto = `mailto:jaideepbathod@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailto, '_blank');

    note.textContent = '✓ Your email client should open. If not, email jaideepbathod@gmail.com directly.';
    form.reset();

    setTimeout(() => { note.textContent = ''; }, 6000);
  });
}

// =============================================
// ADD FADE-IN CLASS TO SECTION CHILDREN
// =============================================
function addFadeIns() {
  const targets = [
    '.exp-card',
    '.about-grid',
    '.contact-grid',
  ];
  targets.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      if (!el.classList.contains('fade-in')) el.classList.add('fade-in');
    });
  });
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  addFadeIns();
  initScrollAnimations();
  initNavbar();
  initMobileMenu();
  initContactForm();
  type();
});
