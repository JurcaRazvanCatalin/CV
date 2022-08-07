const navBtn = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links');
});

const scrollLinks = document.querySelectorAll('.scroll-link');
// console.log(scrollLinks);
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

const languages = [
  {
    id: 1,
    name: 'Engleza',
    rang: 'B2',
  },
  {
    id: 2,
    name: 'Romana',
    rang: 'Nativ',
  },
];

const practice = [
  {
    id: 1,
    name: 'Summer Practice',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, perferendis velit earum omnis officia sint veniam vero ipsum placeat consequatur? Doloremque reprehenderit distinctio inventore eum, nisi corporis molestias harum exercitationem quibusdam dolores minima accusamus atque non quo quaerat, consequatur dolore ipsa quae a laudantium sequi. Odit asperiores illo aliquid ut.',
    company: 'Endava',
    startDate: '11-07-2022',
    endDate: '11-09-2022',
  },
  {
    id: 2,
    name: 'Interviu',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, perferendis velit earum omnis officia sint veniam vero ipsum placeat consequatur? Doloremque reprehenderit distinctio inventore eum, nisi corporis molestias harum exercitationem quibusdam dolores minima accusamus atque non quo quaerat, consequatur dolore ipsa quae a laudantium sequi. Odit asperiores illo aliquid ut.',
    company: 'Pitech',
    startDate: '15-07-2022',
    endDate: '10-09-2022',
  },
];

const hobbies = [
  {
    id: 1,
    name: 'Music',
  },
  {
    id: 2,
    name: 'Movies/Tv Series',
  },
  {
    id: 3,
    name: 'Guitar',
  },
  {
    id: 4,
    name: 'Cooking',
  },
  {
    id: 5,
    name: 'Basketball',
  },
];
console.log(typeof hobbies);
// console.log(limba);

const internship = document.querySelector('.internship');
const hobby = document.querySelector('.hobbies');
const linguistics = document.querySelector('.linguistic');
// console.log(linguistics);

function generateSection(experience) {
  const field = document.createElement('div');
  const nam = document.createElement('h3');
  field.className = 'field';
  nam.innerText = experience.name;
  const comp = document.createElement('p');
  comp.innerText = experience.company;
  field.appendChild(nam);
  nam.className = 'name';
  field.appendChild(comp);
  comp.className = 'comp';
  // console.log(field);
  return field;
}

// console.log(typeof linguistics, 'a s d');

function populate(expElement) {
  // console.log(typeof expElement);
  expElement.forEach(expObj => {
    const expCard = generateSection(expObj);
    // console.log(expCard);
    internship.appendChild(expCard);
  });
}

populate(practice);

function generateSectionHobbies(experience) {
  const fields = document.createElement('div');
  const name = document.createElement('h3');
  fields.className = 'field';
  name.innerText = experience.name;
  fields.appendChild(name);
  name.className = 'name';
  console.log(fields);
  return fields;
}

function populateHobbies(expElement) {
  // console.log(typeof expElement);
  expElement.forEach(expObj => {
    const expCard = generateSectionHobbies(expObj);
    // console.log(expCard);
    hobby.appendChild(expCard);
  });
}

populateHobbies(hobbies);

function generateLinguistics(experience) {
  const field = document.createElement('div');
  const name = document.createElement('h3');
  const rang = document.createElement('p');
  field.className = 'field';
  name.className = 'name';
  name.innerText = experience.name;
  rang.innerText = experience.rang;
  field.appendChild(name);
  field.appendChild(rang);
  console.log(field);
  return field;
}

function populateLinguistics(expElement) {
  expElement.forEach(expObj => {
    const expCard = generateLinguistics(expObj);
    linguistics.appendChild(expCard);
  });
}

populateLinguistics(languages);
