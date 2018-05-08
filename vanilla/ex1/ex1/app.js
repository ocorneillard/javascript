const text3 = document.querySelector('#texte_3');
text3.className = 'a_cacher';


const text = document.querySelector('#text p');
text.style.display = 'none';

const text2 = document.querySelector('#text2');
text2.hidden = '';
text2.style.fontFamily = 'Courier';

const li = document.querySelectorAll('.ex3 li');
li.forEach(function(li){
  li.style.color = "red";
})

const EraseText = document.querySelector('#texte_2');
EraseText.remove();

const EraseHide = document.querySelectorAll('.a_cacher');
EraseHide.forEach(function(hide){
  hide.style.display = "none";
})

const redOl = document.querySelectorAll('ol li');
redOl.forEach(function(li){
  li.style.color = "red";
})

const text1And3 = document.querySelectorAll('#texte_1, #texte_3');
text1And3.forEach(function(text){
  text.style.border = "5px green dashed";
})