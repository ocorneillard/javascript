let affichage = document.querySelector(".affichage");
let clickH = document.querySelector(".click");
let affichageMultiply = document.querySelector(".multiply");
let multiplicator = document.querySelector(".multiplicator");
let autoclicker = document.querySelector(".autoclicker");

let score = 500;
let multiple = 1;
let click = 1;
let auto;

function add(e) {
  score = score + (click * multiple);
}

function multiply(e) {
  if (score > (50 * multiple)) {
  score = score - (50 * multiple);
  multiple++;
  multiplicator.innerHTML = `Multiplicator x${multiple} Cost for upgrade : ${(50*multiple)}`;
  affichageMultiply.innerHTML = multiple;
  } 
}

function autoclick(e) {
  if (score > 500) {
    score++;
  } 
}

function affiche() {
  affichage.innerHTML = score;
}

clickH.addEventListener("click", add);
multiplicator.addEventListener("click", multiply);
autoclicker.addEventListener("click", autoclick);
auto = setInterval(autoclick, 1000);
let reload = setInterval(affiche, 10);