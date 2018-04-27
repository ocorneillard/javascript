// basic 
// const brad = {
//   name : 'Brad',
//   age : 30,
// }


// Constructor 

function Person(name, dob) {
  // Current instance of the object
  this.name = name ;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

// window object
// console.log(this);


// const brad = new Person('Brad', 24);
// const john = new Person('John', 56);

const brad = new Person('Brad', '9-10-1981');

console.log(brad.calculateAge());

// Object.prototype
// Person.prototype

function Pers(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);

  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Using prototype to declare a function
Pers.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Pers.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
}


const me = new Pers('Dorian','Collier', '02-18-1994');

console.log(me.calculateAge());
console.log(me.getFullName());
console.log(me.hasOwnProperty('firstName'));
console.log(me.hasOwnProperty('getFullName')); 
// is in prototype, can't access it that way