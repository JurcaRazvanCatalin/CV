const input = document.querySelector('#inp');
const btn = document.querySelector('#btn');
const toDo = document.querySelector('.to-do');

function addItem() {
  function stopAdding(e) {
    e.preventDefault();
  }
  if (input.value.length === 0) {
    alert('Please Enter Something to add ! ');
    btn.addEventListener('click', stopAdding());
  } else if (input.value.length >= 40) {
    alert('Maximum value of letters is 40 !');
    btn.addEventListener('click', stopAdding());
  }

  const div = document.createElement('div');
  const li = document.createElement('li');
  const button = document.createElement('button');
  li.innerHTML = input.value;
  button.innerHTML = 'Remove';
  div.appendChild(li);
  div.appendChild(button);
  toDo.appendChild(div);

  if (input.value === li.innerHTML) {
    input.value = '';
  }
  button.addEventListener('click', () => {
    div.remove();
  });
}

input.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    addItem();
  }
});
