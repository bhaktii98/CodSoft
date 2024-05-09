document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;
  
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const correspondingNavLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
          navLinks.forEach(link => link.classList.remove('active'));
          correspondingNavLink.classList.add('active');
        }
      });
    });
  
  });
  