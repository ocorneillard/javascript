const text = document.querySelector('#texte');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector("#blue");


red.addEventListener('mouseover', textRed);
green.addEventListener('mouseover', textGreen);
blue.addEventListener('mouseover', textBlue);

red.addEventListener('mouseleave', textDefault);
green.addEventListener('mouseleave', textDefault);
blue.addEventListener('mouseleave', textDefault);

function textDefault(e) {
  text.style.color = 'black';
}

function textRed(e) {
  text.style.color = "red";
}

function textGreen(e) {
  text.style.color = 'green';
}

function textBlue(e) {
  text.style.color = 'blue';
}