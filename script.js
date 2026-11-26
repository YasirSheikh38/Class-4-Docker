const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// Highlight the navigation item for the section currently in view.
const sections = document.querySelectorAll('main section[id]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => observer.observe(section));

document.getElementById('year').textContent = new Date().getFullYear();

// A static website cannot send form data by itself. This creates an email draft.
document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const recipient = 'yasir.sheikh@example.com'; // Replace with your real email.
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  document.getElementById('formNote').textContent = 'Opening your email app with the message…';
  window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
});
