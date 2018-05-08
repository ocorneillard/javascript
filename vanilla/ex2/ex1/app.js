const button = document.querySelector('#clique-moi');
const form = document.querySelector('form');
button.addEventListener('click', dialogBox);

function dialogBox(e) {

  const div = document.createElement('div');
  div.textContent = 'Bonjour et bienvenue';
  div.className = 'dialogbox';
  console.log(div);
  form.appendChild(div);
  
  setTimeout(() => {
    div.remove();
  }, 3000);
  
}