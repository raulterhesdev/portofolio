document.addEventListener('DOMContentLoaded', () => {
  // Delay to show the spinner even if page loads quick
  for (let i = 0; i < 2000000000; i++) {}

  // Get the spinner and page content
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');

  // // Switch from spinner to content when page loads
  loader.style.display = 'none';
  content.style.display = 'block';

  // Toggle navbar
  document.querySelector('.toggle').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('close');
    document.querySelector('.link-container').classList.toggle('nav-closed');
  });

  // Close the navbar on first load if on phone
  if (window.innerWidth < 621) {
    document.querySelector('.toggle').classList.toggle('close');
    document.querySelector('.link-container').classList.toggle('nav-closed');
  }

  // Navigation
  function navigate(e) {
    const target = event.currentTarget.href.slice(
      event.currentTarget.href.indexOf('#')
    );

    navHero.classList.remove('nav-active');
    navProjects.classList.remove('nav-active');
    navContact.classList.remove('nav-active');
    navAbout.classList.remove('nav-active');

    // when navigating on a phone close the navbar
    if (window.innerWidth < 621) {
      document.querySelector('.toggle').classList.remove('close');
      document.querySelector('.link-container').classList.add('nav-closed');
    }

    switch (target) {
      case '#hero':
        tlHero.restart();
        navHero.classList.add('nav-active');
        break;
      case '#projects':
        tlProjects.restart();
        navProjects.classList.add('nav-active');
        break;
      case '#contact':
        tlContact.restart();
        navContact.classList.add('nav-active');
        break;
      case '#about':
        tlAbout.restart();
        navAbout.classList.add('nav-active');
        break;
      default:
        break;
    }
  }

  const hero = document.getElementById('hero');
  const projects = document.getElementById('projects');
  const contact = document.getElementById('contact');
  const about = document.getElementById('about');
  const actionButton = document.getElementById('action-projects');

  const navHero = document.getElementById('nav-hero');
  const navProjects = document.getElementById('nav-projects');
  const navContact = document.getElementById('nav-contact');
  const navAbout = document.getElementById('nav-about');

  navHero.addEventListener('click', navigate);
  navProjects.addEventListener('click', navigate);
  navContact.addEventListener('click', navigate);
  navAbout.addEventListener('click', navigate);
  actionButton.addEventListener('click', navigate);

  window.addEventListener('scroll', function (event) {
    var scroll = this.scrollY;
    if (scroll < hero.offsetHeight * 0.5) {
      navHero.classList.add('nav-active');
      navProjects.classList.remove('nav-active');
      navContact.classList.remove('nav-active');
      navAbout.classList.remove('nav-active');
    } else if (scroll < hero.offsetHeight + projects.offsetHeight * 0.5) {
      navHero.classList.remove('nav-active');
      navProjects.classList.add('nav-active');
      navContact.classList.remove('nav-active');
      navAbout.classList.remove('nav-active');
    } else if (
      scroll <
      hero.offsetHeight + projects.offsetHeight + about.offsetHeight * 0.5
    ) {
      navHero.classList.remove('nav-active');
      navProjects.classList.remove('nav-active');
      navContact.classList.remove('nav-active');
      navAbout.classList.add('nav-active');
    } else if (
      scroll <
      hero.offsetHeight +
        projects.offsetHeight +
        about.offsetHeight +
        contact.offsetHeight * 0.5
    ) {
      navHero.classList.remove('nav-active');
      navProjects.classList.remove('nav-active');
      navContact.classList.add('nav-active');
      navAbout.classList.remove('nav-active');
    }
  });

  // Contact form
  submitButton = document.getElementById('form-submit');
  formName = document.getElementById('form-name');
  formEmail = document.getElementById('form-email');
  formSubject = document.getElementById('form-subject');
  formMessage = document.getElementById('form-message');

  nameError = document.getElementById('form-name-error');
  emailError = document.getElementById('form-email-error');
  subjectError = document.getElementById('form-subject-error');
  messageError = document.getElementById('form-message-error');

  function submitForm(e) {
    e.preventDefault();
    const name = formName.value;
    const email = formEmail.value;
    const subject = formSubject.value;
    const message = formMessage.value;

    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (name === '') {
      nameError.innerHTML = 'Please provide your name!';
      formName.classList.add('input-error');
    }
    if (email === '') {
      emailError.innerHTML = 'Please enter your email!';
      formEmail.classList.add('input-error');
    } else if (!emailRegex.test(email)) {
      emailError.innerHTML = 'Please enter a valid email!';
      formEmail.classList.add('input-error');
    }
    if (subject === '') {
      subjectError.innerHTML = 'Please provide a subject!';
      formSubject.classList.add('input-error');
    }
    if (message === '') {
      messageError.innerHTML = 'Please enter your message';
      formMessage.classList.add('input-error');
    }

    var template_params = {
      from_name: name,
      from_subject: subject,
      from_email: email,
      from_message: message,
      website: 'Portfolio',
    };

    var service_id = 'gmail';
    var template_id = 'template_hWGS0MWW';

    // emailjsUser;
    emailjs.send(service_id, template_id, template_params, emailjsUser);
  }

  submitButton.addEventListener('click', submitForm);

  formName.addEventListener('focus', function (e) {
    formName.classList.remove('input-error');
    nameError.innerHTML = '';
  });

  formEmail.addEventListener('focus', function (e) {
    formEmail.classList.remove('input-error');
    emailError.innerHTML = '';
  });

  formSubject.addEventListener('focus', function (e) {
    formSubject.classList.remove('input-error');
    subjectError.innerHTML = '';
  });

  formMessage.addEventListener('focus', function (e) {
    formMessage.classList.remove('input-error');
    messageError.innerHTML = '';
  });

  // Gsap timelines for each section
  var tlHero = gsap.timeline();
  tlHero.from('.animate-text', { x: -80, opacity: 0, stagger: 0.4 });
  tlHero.from('.illustration', {
    y: -80,
    opacity: 0,
    duration: 1,
  });
  tlHero.from('.action-area', {
    y: 80,
    opacity: 0,
    duration: 0.5,
  });

  var tlProjects = gsap.timeline();
  tlProjects.from('.project', { opacity: 0, stagger: 0.5 });

  var tlAbout = gsap.timeline();
  tlAbout.from('.short-intro', { opacity: 0, y: 80, duration: 0.5 });
  tlAbout.from('.card', { opacity: 0, stagger: 0.5 });

  var tlContact = gsap.timeline();
  tlContact.from('.form-group', { opacity: 0, y: -50, stagger: 0.5 });
  tlContact.from('.button-container', { opacity: 0, y: 50, stagger: 0.5 });
});
