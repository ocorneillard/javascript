const input = document.querySelector('.input input');
const button = document.querySelector('.subex1');
// console.log(parseInt(input.value));
button.addEventListener('click', (e) => {
  let value = parseInt(input.value);
  value++;
  input.value = value;
});


const subPlus = document.querySelector('.subplus');
const subMinus = document.querySelector('.subminus');
const displayTwo = document.querySelector('#plus');
console.log(displayTwo)

subPlus.addEventListener('click', (e) => {
  let value = parseInt(displayTwo.value);
  value++;
  displayTwo.value = value;
});

subMinus.addEventListener('click', (e) => {
  let value = parseInt(displayTwo.value);
  value--;
  displayTwo.value = value;
});