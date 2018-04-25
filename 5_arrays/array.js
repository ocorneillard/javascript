console.log('*********')
console.log('Exercice 1')
let array = [1,2,3,4,5,6,7,8,9]
let result = 0
for (i = 1; i < 10; i++) {
  result += i
}
console.log(result)
console.log('*********')
console.log('Exercice 2')

let actors = ["Britney Spears", "Mickael Jackson", "Le lutin Plop"]
let numerote = ['premier', 'deuxieme', 'troisième', 'quatrième']
let say
for (i = 0; i < 3; i++) {
  say = `Le ${numerote[i]} est ${actors[i]}`
  console.log(say)
}

let jv = ["Mario", "Luigi", "Peach"]
let clone = jv.slice()
console.log(clone)
clone.push('Bowser')
console.log(clone)
