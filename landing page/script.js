/*window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
      navbar.classList.add('bg-dark');
      navbar.classList.add('text-white');
    } else {
      navbar.classList.remove('bg-dark');
      navbar.classList.remove('text-white');
    }
  });*/
  const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});