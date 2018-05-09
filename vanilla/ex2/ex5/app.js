const lName = document.getElementById('nom');
const fName = document.getElementById('prenom');

lName.addEventListener('focus', onFocus);
fName.addEventListener('focus', onFocus);
lName.addEventListener('blur', onBlur);
fName.addEventListener('blur', onBlur);

function onFocus(e) {
  this.style.border = '1px solid green';
  this.style.background = 'black';
}

function onBlur(e){
  this.style.border = '1px solid black';
  this.style.background = 'white';
}