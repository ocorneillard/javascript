const input = document.querySelector('.input input');
const button = document.querySelector('button');
// console.log(parseInt(input.value));
button.addEventListener('click', (e) => {
  let value = parseInt(input.value);
  value++;
  input.value = value;
});