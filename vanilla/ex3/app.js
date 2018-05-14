const input = document.querySelector('.input input');
const button = document.querySelector('.subex1');

button.addEventListener('click', (e) => {
  let value = parseInt(input.value);
  value++;
  input.value = value;
});


const subPlus = document.querySelector('.subplus');
const subMinus = document.querySelector('.subminus');
const displayTwo = document.querySelector('#plus');


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

const one = document.querySelector('.one');
const rectangle = document.querySelector('.rectangle');
let base = 100;
one.addEventListener('click', (e) => {
  let add = base + 50;
  base = add;
  rectangle.style.height = `${add}px`;

  if (base === 350) {
    base = 100;
    rectangle.style.height = `100px`;
  }
});

const two = document.querySelector('.two');

two.addEventListener('click', (e) => {
  rectangle.style.background = 'green';
});

const three = document.querySelector('.three');

three.addEventListener('click', (e) => {
  rectangle.style.background = 'black';
});

const four = document.querySelector('.four');

four.addEventListener('click', (e) => {
  rectangle.style.opacity = '0';
});

const five = document.querySelector('.five');

five.addEventListener('click', (e) => {
  rectangle.style.opacity = '1';
});

const square = document.querySelector('.square');
let a = 0;
let b = 0;
let c = 0;
document.addEventListener('keydown', (e) => {
  let x = e.keyCode;

  if (x === 39) {
    a > 1000 ? a = -40 : a = a + 20;
    square.style.left = `${a}px`;
  }

  if (x === 37) {
    a < -50 ? a = 1000 : a = a - 20;
    square.style.left = `${a}px`;
  }

  if (x === 40) {
    b > 510 ? b = -20 : b = b + 20;
    square.style.top = `${b}px`;
  }

  if (x === 38) {
    b < -20 ? b = 510 : b = b - 20;
    square.style.top = `${b}px`;
  }
  e.preventDefault();
});