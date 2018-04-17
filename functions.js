console.log('*****************')
console.log('Exercice 1')
let minus = (a,b) => {
  c = a - b
  return c
}
console.log(minus(10,8))

console.log('*****************')
let d
let divide = (a,b) => {
  d = a / b
  return d
}
divide(10,2)
console.log(d)
console.log('*****************')

let x
let multiply = (a,b) => {
  x = a * b
}

multiply(4,5)
console.log(x)
console.log('*****************')
let result
let pourcent = (pourcent, value) => {
  result = (value / 100) * pourcent
}

pourcent(10,100)
console.log(result);
console.log('*****************')
let speed = (km, h) => {
  return (km / h)
}
let vitesse = speed(100,5)
let phrase = `${vitesse} km/h`


console.log(phrase)
