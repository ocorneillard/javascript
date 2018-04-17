console.log('***********');
console.log('Exercice 1');

let characterA = {
  name : "Bernard",
  age : 45,
  items_to_give : ["Hache", "Pull", "Maison"],
  price : 50,
}

let player = {
  items : [],
  money : 400,
}
let giveRand = () => {
  let test = characterA.items_to_give[0]
  player.items.push(test)
  let money = player.money
  let price = characterA.price
  let result
  if (money > price) {
    player.money = money - price
  } else {
    console.log("Vous n'avez pas les moyens" )
  }
}

let input = prompt()
input
if ( input === "trade" ) {
giveRand()
console.log(`Merci pour votre achat d'une ${player.items}. Il vous reste ${player.money} pièces d'or `);
}

for (let object in characterA) {
  console.log(object)
  console.log( characterA[object])
}

console.log('***********');
console.log('Exercice 2');

let shop = {
  caractObj : ["Name", "physic", "magic", "minLevel", "available"],
  casque : ["Casque d'ébène", 10, 2, 1, true],
  plastron : ["Plastron du futur", 100, 2, 5, true],
  foot : ["Chaussures du futur", 50, 2, 15, false],
  ceinture : ["Ficelles abimées", 30, 2, 13, true],
  gant : ["Gant de velours", 10, 2, 5, false],
  collier : ["Collier d'argent", 10, 2, 20, true],
  bague : ["Bague d'Orient", 10, 2, 15, true],
}


let postArray = (a) => {
  for ( let item in a) {
    if (shop[item][0] != "Name") {
      console.log(shop[item])
    }
  }
}

postArray(shop)
console.log('***********');

let postItem = (a) => {
  for ( let item in shop) {
    if (shop[item][4] == 1) {
      console.log(`${shop[item][0]} est disponible`)
    }
  }
}

postItem(shop)
console.log('***********');

let postItem10 = (a) => {
  for ( let item in a) {
    if (shop[item][3] > 10) {
      console.log(`${shop[item][0]} est disponible`)
    }
  }
}

postItem10(shop)

console.log('***********');
console.log('Exercice 3');

let mainCharacter = {
  maincaract : ["name", "level", "life", "weapon", "attack"],
  name : "Henry",
  level : 15,
  life : 100,
  weapon : {
    name : "épée d'acier",
    damage : 15,
  },
  attack() {
    let dmg = this.level * this.weapon.damage
    console.log(dmg);
    return console.log(`${this.name} attaque avec une ${this.weapon.name}. L'attaque fait ${dmg} de dégâts !`)
  }
}

mainCharacter.attack()


console.log('***********');
console.log('Bonus');

let character = {
  name : "David",
  level : 25,
  life : 1400,
  weapon : {
    name : "Le couteau de la joie",
    damage : 89,
  }
}
