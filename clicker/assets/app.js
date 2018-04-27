let affichage = document.querySelector(".affichage");
let affichageMultiply = document.querySelector(".multiply");
(".affichage");
let score = 0;
let multiple = 1;
let click = 1;

function add() {
  score = score + (click * multiple);
  affichage.innerHTML = score;
}

// function multiply() {
//   multiple++;
//   affichageMultiply.innerHTML = multiple;
// }

document.addEventListener("click", add);