document.addEventListener('DOMContentLoaded', () => {
  // // Delay to show the spinner even if page loads quick
  // for (let i = 0; i < 2000000000; i++) {}

  // Get the spinner and page content
  loader = document.getElementById('loader');
  content = document.getElementById('content');

  // Switch from spinner to content when page loads
  loader.style.display = 'none';
  content.style.display = 'block';

  // Navigation
  function resetNavigation() {
    hero.style.display = 'none';
    projects.style.display = 'none';
    contact.style.display = 'none';
    about.style.display = 'none';

    navHero.classList.remove('nav-active');
    navProjects.classList.remove('nav-active');
    navContact.classList.remove('nav-active');
    navAbout.classList.remove('nav-active');
  }

  function navigate(event) {
    event.preventDefault();
    const target = event.currentTarget.href.slice(
      event.currentTarget.href.indexOf('#') + 1
    );
    console.log(target);
    switch (target) {
      case 'hero':
        resetNavigation();

        hero.style.display = 'grid';
        navHero.classList.add('nav-active');
        break;
      case 'projects':
        resetNavigation();

        projects.style.display = 'block';
        navProjects.classList.add('nav-active');
        break;
      case 'contact':
        resetNavigation();

        contact.style.display = 'block';
        navContact.classList.add('nav-active');
        break;
      case 'about':
        resetNavigation();

        about.style.display = 'block';
        navAbout.classList.add('nav-active');
        break;

      default:
        break;
    }
  }

  hero = document.getElementById('hero');
  projects = document.getElementById('projects');
  contact = document.getElementById('contact');
  about = document.getElementById('about');

  navHero = document.getElementById('nav-hero');
  navProjects = document.getElementById('nav-projects');
  navContact = document.getElementById('nav-contact');
  navAbout = document.getElementById('nav-about');

  navHero.addEventListener('click', navigate);
  navProjects.addEventListener('click', navigate);
  navContact.addEventListener('click', navigate);
  navAbout.addEventListener('click', navigate);
});
