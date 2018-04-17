console.log("******************");
console.log("Exercice 1");

let min = Math.min(7, 5, -12, 6, 32, 18, 14, -2)

console.log(`La plus petite donnée dans l'ensemble suivant : 7, 5, -12, 6, 32, 18, 14, -2 est ${min}`)

let max = Math.max(-3, 9, 21, 36, 27, 54, 17, 35)

console.log(`La plus grande donnée dans l'ensemble suivant : -3, 9, 21, 36, 27, 54, 17, 35 est ${max}`)

let result = max + min

console.log(`Addition des deux valeurs : ${min} + ${max}= ${result}`);

console.log("******************");
console.log("Exercice 2");

let floatBateau = 10.4
console.log(floatBateau)

let intDBateau = Math.floor(10.4)
console.log(`Arrondi à l'integer le plus petit : ${intDBateau}`)
let intUBateau = Math.ceil(10.4)
console.log(`Arrondi à l'integer le plus grand : ${intUBateau}`);

console.log("******************");
console.log("Exercice 3");

let test = Math.floor(Math.random() * Math.floor(50)) + 50
console.log(test);

let rand01 = Math.floor(Math.random() * Math.floor(2))
console.log(rand01);

let rand10 = Math.floor(Math.random() * Math.floor(11))
console.log(rand10);

let rand9 = Math.floor(Math.random() * Math.floor(10))
console.log(rand9);

let table = [ "Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"]

let randTable = table[rand9]
console.log(randTable);
