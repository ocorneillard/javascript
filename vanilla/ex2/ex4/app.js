const green = document.getElementById('green');
const blue = document.getElementById('blue');
const red = document.getElementById('red');

const text = document.getElementById('texte');

green.addEventListener('click', function(e){
  text.style.color = "green";
});

blue.addEventListener('click', function(e){
  text.style.color = "blue";
});

red.addEventListener('click', function(e){
  text.style.color = "red";
});