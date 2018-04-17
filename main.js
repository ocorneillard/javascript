
let toGuess = ["B","O","N","J","O","U","R"];
let guessed = ["","","","","","",""];


let guessLetter = () => {
  let letter = prompt("Entrez la lettre");
  console.log(letter)
  for (let i = 0; i <= toGuess.length ; i++) {
    if (toGuess[i] == letter) {
      guessed[i] = letter
      console.log("bravo", guessed)
    }
  }

  if(guessed.includes("")) {
    guessLetter();
  } else {
    console.log("Vous avez gagné")
  }
}

guessLetter()


//
// array.forEach(function(letter) {
//   let input = prompt('Trouvez une lettre');
//   array.forEach(function(letter) {
//     if (letter === input ) {
//     saveInput.push(letter);
//     console.log(saveInput);
//     }
//   })
//   if (saveInput === array) {
//     alert('Bravo ! Vous avez trouvé toutes les lettres !');
//     let verificate = prompt('Le mot était...');
//     if (verificate === "BONJOUR") {
//       alert('Bravo !');
//     }
//   }
// });
//
// for(let i = 0; i < 6; i++){
//   if (input == letter) {
//   saveInput[i] = input ;
//   }
// }
