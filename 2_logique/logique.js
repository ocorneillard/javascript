console.log('*****************')
console.log('Exercice 1')
let language = "esp"
let message = ["Bonjour tout le monde", "Hello world", "Hola, Mundo"]

if (language === "fr") {
  console.log(message[0])
}
else if (language === "en") {
  console.log(message[1])
}
else{
  console.log(message[2])
}
console.log('*****************')
console.log('Exercice 2')
let score = 45
let result
if (score >= 90) {
  result = "A"
}
else if (score < 90 && score > 50) {
  result = "B"
}
else {
  result = "C"
}
console.log(result)
console.log('*****************')
console.log('Exercice 3')

let singular = "pomme"
let numberApple = 6
let result3
if (numberApple === 1) {
  result3 = `Vous avez ${numberApple} ${singular}`
} else {
  result3 = `Vous avez ${numberApple} ${singular}s`
}
console.log(result3)
console.log('*****************')
