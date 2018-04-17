let numberChild = 8
let nameWoman = "Béatrice"
let country = "France"
let job = "étudiante"
console.log('*******************')
console.log('Exercice 1')
console.log(`Vous serez ${nameWoman} et habiterez en ${country}, vous resterez ${job} toute votre vie et aurez ${numberChild} enfants.`)
console.log('*******************')

console.log('Exercice 2')
let birthDate = 1969
let currentYear = 2018
console.log("Vous avez " + (currentYear - birthDate) + " ans.")
console.log('*******************')

console.log('Exercice 3')

let age = 24
let ageMax = 80
let coffe = 3

let coffeIsLife = (80-24) * 3 * 365.25
console.log(`Avant d'avoir ${ageMax} ans, je vais boire ${coffeIsLife} cafés, en partant du principe que j'en bois ${coffe} par jour.`)
console.log('*******************')

console.log('Exercice 4')
let result = (1+2) * 3+(4 / 2)
console.log('Décomposition du calcul (1+2) * 3 + 4 / 2')
let a = 1 + 2
let b = a * 3
let c = 4 / 2
let d = b + c
console.log(`Etape 1 : les parenthèses !
  (1+2) = ${a}`)
console.log(`Etape 2 : les multiplications/divisions
    ${a} * 3 = ${b}
    4 / 2 = ${c}
    Ce qui nous donne : ${b} + ${c}`)
console.log(`Etape 3 : les additions/soustractions
  ${b} + ${c} = ${d}`)
console.log('*******************')
