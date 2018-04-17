
let inputNumber= ""

let randNumber = () => {
  goodNum = Math.floor(Math.random() * 60) + 20
}

let findNumber = () => {

    let inputNumber = prompt('Rentrez un nombre entre 20 et 80')
    inputNumber
    inputNumber = Number(inputNumber)
    console.log(inputNumber)
    console.log(goodNum)

  if (inputNumber >= 20 && inputNumber <= 80) {
    if (inputNumber > goodNum ) {
      alert("C'est moins")
      test++
    }

    if (inputNumber < goodNum) {
      alert("C'est plus")
      test++
    }

    if (inputNumber == goodNum) {
      alert("Bien joué")
      test = 20
    }
  } else {
    console.log('Entrez un nombre ENTRE 20 ET 80 !')
  }
}


console.log('Trouve le bon numéro entre 20 et 80')
randNumber()

for (test = 0; test < 20; test++) {

  findNumber()
  if (test == 10) {
    alert('il vous reste 10 essais')
  }

  console.log(test)
}

console.log('BRAVO')
