const img = document.querySelector('img');
img.addEventListener("dblclick", function(){
  img.style.width = "500px";
});

const displayOn = document.getElementById('afficher');
const displayOff = document.getElementById('cacher');
const text = document.getElementById('texte');

displayOn.addEventListener('click', function(e) {
  text.style.display = '';
});

displayOff.addEventListener('click', function(e) {
  text.style.display = 'none';
});