let affichage = document.querySelector(".affichage");
let clickH = document.querySelector(".click");
let affichageMultiply = document.querySelector(".multiply");
let multiplicator = document.querySelector(".multiplicator");
let score = 0;
let multiple = 1;
let click = 1;

function add(e) {
  score = score + (click * multiple);
  affichage.innerHTML = score;
}

function multiply(e) {
  if (score > 50) {
  multiple++;
  multiplicator.innerHTML = `Multiplicator x${multiple}`;
  affichageMultiply.innerHTML = multiple;
  score = score - 50;
  } else {

  }
}

clickH.addEventListener("click", add);
multiplicator.addEventListener("click", multiply);