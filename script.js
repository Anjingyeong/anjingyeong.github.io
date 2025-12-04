// ===============================================
// Particle Network Animation
// ===============================================
class NetworkAnimation {
  constructor() {
    this.canvas = document.getElementById('network-canvas');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.connectionDistance = 150;
    this.mouse = { x: null, y: null };

    this.resize();
    this.init();
    this.animate();

    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.initParticles();
  }

  initParticles() {
    this.particles = [];
    const particleCount = Math.min(window.innerWidth * 0.1, 100); // Responsive count

    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }
  }

  init() {
    this.initParticles();
  }

  handleMouseMove(e) {
    this.mouse.x = e.x;
    this.mouse.y = e.y;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update and draw particles
    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off edges
      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = '#00f2ff';
      this.ctx.fill();

      // Connect to mouse
      if (this.mouse.x) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 200) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(0, 242, 255, ${1 - dist / 200})`;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.stroke();
        }
      }

      // Connect to other particles
      this.particles.forEach(p2 => {
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.connectionDistance) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(0, 85, 255, ${0.2 * (1 - dist / this.connectionDistance)})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      });
    });
  }

  animate() {
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize Animation on Load
window.addEventListener('load', () => {
  new NetworkAnimation();
});

// ===============================================
// Smooth Scroll Navigation
// ===============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Close mobile menu if open
      const navLinks = document.querySelector('.nav-links');
      if (navLinks) navLinks.classList.remove('active');
    }
  });
});

// ===============================================
// Mobile Menu Toggle
// ===============================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (navLinks && navLinks.classList.contains('active') && !e.target.closest('nav')) {
    navLinks.classList.remove('active');
  }
});

// ===============================================
// Active Navigation Highlighting
// ===============================================
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

const highlightNavOnScroll = () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
};

window.addEventListener('scroll', highlightNavOnScroll);

// ===============================================
// Intersection Observer for Scroll Animations
// ===============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Add glitch effect or tech reveal here if desired
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// ===============================================
// Typing Animation for Hero Subtitle
// ===============================================
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
  const text = heroSubtitle.textContent;
  heroSubtitle.textContent = '';
  heroSubtitle.style.opacity = '1';

  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      heroSubtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50); // Faster typing for tech feel
    } else {
      // Add blinking cursor
      heroSubtitle.style.borderRight = '2px solid var(--color-accent)';
      setInterval(() => {
        heroSubtitle.style.borderColor =
          heroSubtitle.style.borderColor === 'transparent' ? 'var(--color-accent)' : 'transparent';
      }, 500);
    }
  };

  setTimeout(typeWriter, 500);
}

// ===============================================
// Console Easter Egg
// ===============================================
console.log('%cSYSTEM ONLINE', 'color: #00f2ff; font-size: 20px; font-weight: bold; font-family: monospace;');
console.log('%cNetwork AI Protocol Initiated...', 'color: #0055ff; font-size: 14px; font-family: monospace;');
