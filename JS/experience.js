const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links');
});

const scrollLinks = document.querySelectorAll('.scroll-link');
console.log(scrollLinks);
scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    links.classList.remove('show-links');

    const id = e.target.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
  });
});
