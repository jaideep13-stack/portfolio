// ── DATA ──────────────────────────────────────
const SKILLS = [
  { icon:'🐍', name:'Python',       pct:90, cat:'AI/ML' },
  { icon:'🤖', name:'PyTorch',      pct:75, cat:'AI/ML' },
  { icon:'🧠', name:'LLMs',         pct:80, cat:'AI/ML' },
  { icon:'🔍', name:'RAG',          pct:85, cat:'AI/ML' },
  { icon:'📦', name:'FAISS',        pct:80, cat:'AI/ML' },
  { icon:'🔗', name:'LangChain',    pct:75, cat:'AI/ML' },
  { icon:'🔄', name:'LangGraph',    pct:70, cat:'AI/ML' },
  { icon:'💬', name:'Groq API',     pct:85, cat:'AI/ML' },
  { icon:'📊', name:'Pandas',       pct:85, cat:'Data'  },
  { icon:'🔢', name:'NumPy',        pct:90, cat:'Data'  },
  { icon:'📈', name:'Scikit-learn', pct:80, cat:'Data'  },
  { icon:'⚡', name:'FastAPI',      pct:80, cat:'Backend'},
  { icon:'🗄️', name:'SQL',          pct:75, cat:'Backend'},
  { icon:'🧩', name:'Node.js',      pct:60, cat:'Backend'},
  { icon:'🌐', name:'Streamlit',    pct:90, cat:'Frontend'},
  { icon:'🖥️', name:'JavaScript',  pct:65, cat:'Frontend'},
  { icon:'🐳', name:'Docker',       pct:50, cat:'DevOps' },
  { icon:'☁️', name:'AWS',          pct:55, cat:'DevOps' },
  { icon:'📝', name:'Git',          pct:80, cat:'DevOps' },
  { icon:'🏗️', name:'C++',         pct:60, cat:'Other'  },
];

const PROJECTS = [
  {
    num:'01', title:'GPT-Style LLM from Scratch',
    desc:'Complete GPT-style language model using only NumPy — no PyTorch, no HuggingFace. BPE tokenizer, multi-head attention, AdamW optimizer, temperature/top-k/nucleus sampling. Proves deep understanding of transformer internals.',
    tags:['NumPy','Python','BPE','Multi-Head Attention','AdamW','Transformers'],
    links:[{ label:'⭐ GitHub', href:'https://github.com/jaideep13-stack', primary:true }]
  },
  {
    num:'02', title:'Hybrid RAG Pipeline',
    desc:'Production-grade RAG with TF-IDF + BM25 + dense retrieval, IVF vector store, RRF hybrid search, cross-encoder reranker, Groq-powered generation. Evaluation metrics: MRR, NDCG, hit rate.',
    tags:['BM25','FAISS','RRF','Cross-Encoder','Groq','AWS Lambda','FastAPI'],
    links:[{ label:'⭐ GitHub', href:'https://github.com/jaideep13-stack', primary:true }]
  },
  {
    num:'03', title:'ProductIQ',
    desc:'End-to-end product intelligence: Pydantic ingestion → BGE-large embeddings → FAISS+SQLite → hybrid RRF search → Groq LLM auto-tagging → Streamlit frontend. pHash duplicate detection. Live on Streamlit Cloud.',
    tags:['BGE-Large','FAISS','SQLite','Groq','Streamlit','pHash','RRF'],
    links:[
      { label:'🚀 Live Demo', href:'https://streamlit.io', primary:true },
      { label:'⭐ GitHub', href:'https://github.com/jaideep13-stack/productiq' }
    ]
  },
  {
    num:'04', title:'Multi-Agent Financial Research',
    desc:'LangGraph supervisor with 4 specialized agents (researcher, analyst, critic, summarizer), FastAPI backend, FAISS vector store, Streamlit frontend. Handles complex financial research with agent orchestration and memory.',
    tags:['LangGraph','FastAPI','FAISS','Streamlit','Multi-Agent','LLM'],
    links:[
      { label:'🚀 Live Demo', href:'https://streamlit.io', primary:true },
      { label:'⭐ GitHub', href:'https://github.com/jaideep13-stack' }
    ]
  },
  {
    num:'05', title:'IMMOTA — AI Investment Intelligence',
    desc:'AI-powered investment platform aggregating market signals, news, and financial data to generate LLM-based investment insights. Built on Streamlit Cloud with live users.',
    tags:['Python','Streamlit','LLM','Finance','Groq'],
    links:[
      { label:'🚀 Live Demo', href:'https://streamlit.io', primary:true },
      { label:'⭐ GitHub', href:'https://github.com/jaideep13-stack/IMMOTA' }
    ]
  },
  {
    num:'06', title:'ATS Resume Analyser',
    desc:'Resume scoring tool powered by Groq + LLaMA 3. Parses JDs and resumes, computes keyword overlap, identifies missing skills, gives actionable improvement suggestions. Live with active users.',
    tags:['Groq','LLaMA 3','Streamlit','NLP','Python'],
    links:[
      { label:'🚀 Live Demo', href:'https://streamlit.io', primary:true },
      { label:'⭐ GitHub', href:'https://github.com/jaideep13-stack' }
    ]
  },
];

// ── LOADER ────────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1500);
});

// ── CUSTOM CURSOR ─────────────────────────────
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  dot.style.left = mouseX + 'px';
  dot.style.top  = mouseY + 'px';
});

function animateCursor() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top  = ringY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// ── THEME TOGGLE ──────────────────────────────
const themeBtn  = document.getElementById('themeToggle');
const themeIcon = themeBtn.querySelector('.theme-icon');
let isDark = true;

themeBtn.addEventListener('click', () => {
  isDark = !isDark;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  themeIcon.textContent = isDark ? '🌙' : '☀️';
});

// ── HERO CANVAS (particle network) ────────────
function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  const ctx    = canvas.getContext('2d');
  let W, H, particles;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function Particle() {
    this.x  = Math.random() * W;
    this.y  = Math.random() * H;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.r  = Math.random() * 1.5 + 0.5;
  }

  function init() {
    resize();
    particles = Array.from({ length: 80 }, () => new Particle());
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(108,99,255,0.5)';
      ctx.fill();
    });
    // connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(108,99,255,${0.15 * (1 - d/120)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  init();
  draw();
}
initCanvas();

// ── TYPING ────────────────────────────────────
const PHRASES = ['Jaideep Bathod.','an AI/ML Engineer.','a Builder.','an Immediate Joiner.'];
let pIdx = 0, cIdx = 0, deleting = false;

function type() {
  const el = document.getElementById('typed-text');
  if (!el) return;
  const cur = PHRASES[pIdx];
  el.textContent = cur.slice(0, deleting ? --cIdx : ++cIdx);
  let delay = deleting ? 45 : 85;
  if (!deleting && cIdx === cur.length) { delay = 1800; deleting = true; }
  else if (deleting && cIdx === 0)      { deleting = false; pIdx = (pIdx+1) % PHRASES.length; delay = 300; }
  setTimeout(type, delay);
}

// ── COUNTER ANIMATION ─────────────────────────
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.getAttribute('data-target');
    let cur = 0;
    const step = target / 40;
    const interval = setInterval(() => {
      cur = Math.min(cur + step, target);
      el.textContent = target === 8 ? cur.toFixed(1) : Math.floor(cur);
      if (cur >= target) clearInterval(interval);
    }, 35);
  });
}

// ── RENDER SKILLS ─────────────────────────────
const CATEGORIES = ['All', ...new Set(SKILLS.map(s => s.cat))];

function renderSkills() {
  // filter buttons
  const filterEl = document.getElementById('skillsFilter');
  filterEl.innerHTML = CATEGORIES.map(c =>
    `<button class="filter-btn ${c==='All'?'active':''}" data-cat="${c}">${c}</button>`
  ).join('');

  filterEl.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      filterEl.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      document.querySelectorAll('.skill-item').forEach(item => {
        item.classList.toggle('hidden', cat !== 'All' && item.dataset.cat !== cat);
      });
    });
  });

  // grid
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = SKILLS.map(s => `
    <div class="skill-item fade-in tilt-card" data-cat="${s.cat}">
      <span class="skill-icon">${s.icon}</span>
      <span class="skill-name">${s.name}</span>
      <div class="skill-bar-wrap"><div class="skill-bar" data-w="${s.pct}"></div></div>
      <span class="skill-pct">${s.pct}%</span>
    </div>
  `).join('');
}

// ── RENDER PROJECTS ───────────────────────────
function renderProjects() {
  document.getElementById('projectsList').innerHTML = PROJECTS.map(p => `
    <div class="project-card tilt-card fade-in">
      <div class="project-num">${p.num}</div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
        <div class="project-links">${p.links.map(l=>`
          <a href="${l.href}" target="_blank" class="project-link ${l.primary?'primary':''}">${l.label}</a>
        `).join('')}</div>
      </div>
    </div>
  `).join('');
}

// ── 3D TILT ───────────────────────────────────
function initTilt() {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `perspective(600px) rotateY(${x*12}deg) rotateX(${-y*12}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)';
    });
  });
}

// ── SCROLL ANIMATIONS ─────────────────────────
function initScroll() {
  let counterDone = false;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;

      // stagger siblings
      const siblings = [...(el.parentElement?.querySelectorAll('.fade-in') || [])];
      const idx = siblings.indexOf(el);
      setTimeout(() => {
        el.classList.add('visible');
        // animate skill bars
        el.querySelectorAll('.skill-bar').forEach(bar => {
          setTimeout(() => { bar.style.width = bar.dataset.w + '%'; }, 150);
        });
      }, Math.min(idx * 70, 350));

      // counters trigger when hero stats visible
      if (!counterDone && el.closest('#hero')) {
        counterDone = true;
        animateCounters();
      }

      observer.unobserve(el);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // also observe hero for counter
  const heroEl = document.getElementById('hero');
  if (heroEl) observer.observe(heroEl);
}

// ── NAVBAR ────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const sections = [...document.querySelectorAll('section[id]')];
  const links = [...document.querySelectorAll('.nav-links a')];

  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 50 ? '0 2px 20px rgba(0,0,0,0.3)' : 'none';
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${cur}`);
    });
  });

  // hamburger
  const ham  = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  ham.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => menu.classList.remove('open')));
}

// ── CONTACT FORM ──────────────────────────────
function initForm() {
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('formName').value.trim();
    const email   = document.getElementById('formEmail').value.trim();
    const subject = document.getElementById('formSubject').value.trim() || 'Portfolio Inquiry';
    const message = document.getElementById('formMessage').value.trim();
    const body    = `Hi Jaideep,\n\nMy name is ${name} (${email}).\n\n${message}`;
    window.open(`mailto:jaideepbathod@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    document.getElementById('formNote').textContent = '✓ Email client opened. Alternatively: jaideepbathod@gmail.com';
    e.target.reset();
    setTimeout(() => { document.getElementById('formNote').textContent = ''; }, 6000);
  });
}

// ── RESUME BUTTON NOTE ────────────────────────
// Place resume.pdf in same folder as index.html
// If not present, clicking will 404 — just replace href with your actual resume link
document.getElementById('resumeBtn').addEventListener('click', e => {
  // If you don't have resume.pdf, replace href with Google Drive / Notion link
});

// ── ADD FADE-IN TO STATIC ELEMENTS ────────────
function addFadeIns() {
  ['.about-grid','.contact-grid'].forEach(sel => {
    document.querySelectorAll(sel).forEach(el => el.classList.add('fade-in'));
  });
}

// ── INIT ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  addFadeIns();
  initTilt();
  initScroll();
  initNavbar();
  initForm();
  type();
  // trigger counter if hero already visible on load
  setTimeout(animateCounters, 1800);
});
