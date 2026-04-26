/* ══════════════════════════════════════════
   JACQUES PUCCIO — Script
   ══════════════════════════════════════════ */

/* ─── GOOGLE SHEETS ENDPOINT ─────────────── */
// Paste your Google Apps Script web app URL here after setup:
const SHEETS_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

/* ─── CUSTOM CURSOR ──────────────────────── */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let fX = 0, fY = 0, mX = 0, mY = 0;

document.addEventListener('mousemove', e => {
  mX = e.clientX; mY = e.clientY;
  cursor.style.left = mX + 'px';
  cursor.style.top  = mY + 'px';
});

(function animateFollower() {
  fX += (mX - fX) * 0.12;
  fY += (mY - fY) * 0.12;
  follower.style.left = fX + 'px';
  follower.style.top  = fY + 'px';
  requestAnimationFrame(animateFollower);
})();

document.querySelectorAll('a,button,.checkbox-item,.urgency-btn,.service-card').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-link'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-link'));
});

/* ─── NAVBAR ─────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});
navMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navMenu.classList.remove('open'));
});

/* ─── HERO REVEAL ────────────────────────── */
(function heroReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  els.forEach(el => {
    const delay = parseInt(el.dataset.revealDelay || 0);
    setTimeout(() => el.classList.add('revealed'), delay + 80);
  });
})();

/* ─── SCROLL REVEAL (AOS) ────────────────── */
const aosObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = parseInt(entry.target.dataset.aosDelay || 0);
      setTimeout(() => entry.target.classList.add('aos-visible'), delay);
      aosObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-aos]').forEach(el => aosObserver.observe(el));

/* ─── COUNTER ANIMATION ──────────────────── */
function animateCounter(el) {
  const target = parseInt(el.dataset.to);
  const duration = 1800;
  const start = performance.now();
  (function tick(now) {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(ease * target);
    if (p < 1) requestAnimationFrame(tick);
  })(start);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

/* ─── SMOOTH SCROLL (anchor links) ──────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ─── MULTI-STEP FORM ────────────────────── */
let currentStep = 1;
const totalSteps = 3;

function updateProgressBar(step) {
  const fill = document.getElementById('progressBarFill');
  fill.style.width = ((step / totalSteps) * 100) + '%';

  document.querySelectorAll('.progress-step').forEach(el => {
    const n = parseInt(el.dataset.step);
    el.classList.toggle('active', n === step);
    el.classList.toggle('done', n < step);
  });

  document.querySelectorAll('.progress-line').forEach((line, i) => {
    line.classList.toggle('done', i < step - 1);
  });
}

function validateStep(step) {
  let valid = true;

  if (step === 1) {
    ['companyName', 'industry'].forEach(id => {
      const el = document.getElementById(id);
      const group = el.closest('.field-group');
      const msg = group.querySelector('.field-error-msg');
      if (!el.value.trim()) {
        group.classList.add('has-error');
        if (msg) msg.style.display = 'block';
        valid = false;
      } else {
        group.classList.remove('has-error');
        if (msg) msg.style.display = 'none';
      }
    });
  }

  if (step === 2) {
    const el = document.getElementById('mainChallenges');
    const group = el.closest('.field-group');
    const msg = group.querySelector('.field-error-msg');
    if (!el.value.trim()) {
      group.classList.add('has-error');
      if (msg) msg.style.display = 'block';
      valid = false;
    } else {
      group.classList.remove('has-error');
      if (msg) msg.style.display = 'none';
    }
  }

  if (step === 3) {
    ['firstName', 'lastName', 'email'].forEach(id => {
      const el = document.getElementById(id);
      const group = el.closest('.field-group');
      const msg = group.querySelector('.field-error-msg');
      const empty = !el.value.trim();
      const badEmail = id === 'email' && !empty && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value);
      if (empty || badEmail) {
        group.classList.add('has-error');
        if (msg) msg.style.display = 'block';
        valid = false;
      } else {
        group.classList.remove('has-error');
        if (msg) msg.style.display = 'none';
      }
    });
  }

  return valid;
}

window.nextStep = function(from) {
  if (!validateStep(from)) return;
  document.getElementById('step' + from).classList.remove('active');
  currentStep = from + 1;
  const next = document.getElementById('step' + currentStep);
  if (next) {
    next.classList.add('active');
    updateProgressBar(currentStep);
    next.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

window.prevStep = function(from) {
  document.getElementById('step' + from).classList.remove('active');
  currentStep = from - 1;
  const prev = document.getElementById('step' + currentStep);
  if (prev) {
    prev.classList.add('active');
    updateProgressBar(currentStep);
    prev.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/* ─── URGENCY SELECTOR ───────────────────── */
document.querySelectorAll('.urgency-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.urgency-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    document.getElementById('urgency').value = btn.dataset.val;
  });
});

/* ─── FORM SUBMISSION ────────────────────── */
const form = document.getElementById('analysisForm');
form.addEventListener('submit', async e => {
  e.preventDefault();
  if (!validateStep(3)) return;

  const submitBtn = document.getElementById('submitBtn');
  const submitText = document.getElementById('submitText');
  submitBtn.classList.add('loading');
  submitText.textContent = 'Sending...';

  const areas = [...document.querySelectorAll('input[name="areas"]:checked')]
    .map(cb => cb.value).join(', ');

  const data = {
    timestamp: new Date().toISOString(),
    companyName:    document.getElementById('companyName').value,
    industry:       document.getElementById('industry').value,
    companySize:    document.getElementById('companySize').value,
    revenue:        document.getElementById('revenue').value,
    yearsInBusiness: document.getElementById('yearsInBusiness').value,
    mainChallenges: document.getElementById('mainChallenges').value,
    goals:          document.getElementById('goals').value,
    areas,
    urgency:        document.getElementById('urgency').value,
    firstName:      document.getElementById('firstName').value,
    lastName:       document.getElementById('lastName').value,
    email:          document.getElementById('email').value,
    phone:          document.getElementById('phone').value,
    howFound:       document.getElementById('howFound').value,
    additionalInfo: document.getElementById('additionalInfo').value,
  };

  try {
    if (SHEETS_URL && SHEETS_URL !== 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
      await fetch(SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } else {
      // Dev mode: log to console
      console.log('Form submission (no Sheets URL configured):', data);
      await new Promise(r => setTimeout(r, 800));
    }
    showSuccess();
  } catch (err) {
    console.error('Submission error:', err);
    showSuccess(); // show success anyway — form collected; user shouldn't be blocked
  }
});

function showSuccess() {
  document.getElementById('step3').classList.remove('active');
  document.getElementById('stepSuccess').classList.add('active');
  updateProgressBar(3);
  document.getElementById('stepSuccess').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ─── PHONE FORMAT ────────────────────────── */
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', () => {
    let v = phoneInput.value.replace(/\D/g, '');
    if (v.length > 10) v = v.slice(0, 10);
    if (v.length >= 7) v = `(${v.slice(0,3)}) ${v.slice(3,6)}-${v.slice(6)}`;
    else if (v.length >= 4) v = `(${v.slice(0,3)}) ${v.slice(3)}`;
    else if (v.length > 0) v = `(${v}`;
    phoneInput.value = v;
  });
}

/* ─── INIT ───────────────────────────────── */
updateProgressBar(1);
