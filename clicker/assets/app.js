let affichage = document.querySelector(".affichage");
let clickH = document.querySelector(".click");
let affichageMultiply = document.querySelector(".multiply");
let multiplicator = document.querySelector(".multiplicator");
let autoclicker = document.querySelector(".autoclicker");
let bonus = document.querySelector(".bonus");


let score = 40;
let multiple = 1;
let auto;
let click = 1;
let test = 0;
let checkMulti = 0;

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


function verifyAutoclick() {
    if ( score >= 500 && test=== 0){
      score = score - 500;
      test = setInterval(autoclick, 1000);
    }
  }

function autoclick() {
  score++;
}

function bonux() {
  if (score >= 5000) {
    score = score - 5000;
  multiple =  multiple * 2;
  setTimeout(endBonux, 30000);
}
}

function endBonux() {
  multiple = multiple / 2;
}

function affiche() {
  affichage.innerHTML = score;
  if (score > (50* multiple)) {
  something();
  }

}

clickH.addEventListener("click", add);
multiplicator.addEventListener("click", multiply);
autoclicker.addEventListener("click", verifyAutoclick);
bonus.addEventListener("click", bonux);
let reload = setInterval(affiche, 100);


      // if (!executed) {
      //     executed = true;
      //       let displayMultiplicator = document.createElement("button");
      //       let newContent = document.createTextNode(`Multiplicator`);
      //       displayMultiplicator.appendChild(newContent);
      //       let placeMulti = document.querySelector(".multi");
      //       placeMulti.appendChild(displayMultiplicator);
      // }


