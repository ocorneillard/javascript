console.log('**************');
console.log('Exercice 1');
for (i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} est pair`);
  }
  else {
    console.log(`${i} est impair`);
  }
}
console.log('**************');
console.log('Exercice 2');

for (i = 0; i <= 10; i++){
  let h = i * 9
  console.log(`${i} * 9 = ${h}`);
}
console.log('**************');
console.log('Exercice 3');

for (i = 0; i <= 100; i++){
  if (i > 90) {
    gradA = `Votre grade est A, vous avez ${i} points`
    console.log(gradA)
  }
  else if (i > 80) {
    gradB = `Votre grade est B, vous avez ${i} points`
    console.log(gradB)
  }
  else if (i > 70) {
    gradC = `Votre grade est C, vous avez ${i} points`
    console.log(gradC)
  }
  else if (i > 65) {
    gradD = `Votre grade est D, vous avez ${i} points`
    console.log(gradD)
  }
  else {
    gradF = `Votre grade est F, vous avez ${i} points`
    console.log(gradF)
  }
}

console.log('**************');
console.log('Exercice 4');



let paint = () => {
  for (i = 0; i <= 40; i++){
    let star = "*"
    let repeat = star.repeat(i)
    console.log(repeat)
  }
}

paint()
