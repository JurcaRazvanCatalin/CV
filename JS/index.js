const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links');
});

const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
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

function myFunction() {
  const dots = document.getElementById('dots');
  const moreText = document.getElementById('more');
  const btnText = document.getElementById('myBtn');

  if (dots.style.display === 'none') {
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read More';
    moreText.style.display = 'none';
  } else {
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  }
}
