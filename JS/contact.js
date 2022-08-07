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

//submit
function save_data() {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const message = document.getElementById('message');
  localStorage.setItem('server', name.value);
  localStorage.setItem('server', email.value);
  localStorage.setItem('server', phone.value);
  localStorage.setItem('server', message.value);
  var storedValue = localStorage.getItem('server');
}
