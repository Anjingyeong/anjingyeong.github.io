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
      navLinks.classList.remove('active');
    }
  });
});

// ===============================================
// Mobile Menu Toggle
// ===============================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('nav')) {
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
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all elements with fade-in class
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
      setTimeout(typeWriter, 100);
    }
  };
  
  // Start typing animation after page load
  window.addEventListener('load', () => {
    setTimeout(typeWriter, 800);
  });
}

// ===============================================
// Dynamic Year Update
// ===============================================
const updateYear = () => {
  const yearElements = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = currentYear;
  });
};

updateYear();

// ===============================================
// Parallax Effect for Background
// ===============================================
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.hero-content');
  
  parallaxElements.forEach(el => {
    const speed = 0.5;
    el.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ===============================================
// Add Smooth Reveal to Cards on Hover
// ===============================================
const cards = document.querySelectorAll('.glass-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transition = 'all 0.3s ease';
  });
});

// ===============================================
// Console Easter Egg
// ===============================================
console.log('%c안녕하세요! 👋', 'color: #8b5cf6; font-size: 20px; font-weight: bold;');
console.log('%c이 포트폴리오를 확인해주셔서 감사합니다.', 'color: #06b6d4; font-size: 14px;');
console.log('%c개발자 도구를 사용하시는군요. 같이 일하면 좋을 것 같네요! 😊', 'color: #94a3b8; font-size: 12px;');
