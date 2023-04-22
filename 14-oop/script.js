'use strict';

const Person = function (firstName, BirthYear) {
  //Instance porpeties
  this.firstName = firstName;
  this.BirthYear = BirthYear;

  // //never to this
  // this.calcAge = function () {
  //   console.log(2037 - this.BirthYear);
  // };
};

let p1 = new Person('jonas', 1991);
// console.log(p1);
// console.table([1, 12, 155, 4]);

const p2 = new Person('matilda', 2017);
const p3 = new Person('jack', 1975);
// let test = 'test';
// console.log(Person.prototype);
// console.log(test instanceof Person);

// //Prototype
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.BirthYear);
// };
// console.log(Person.prototype == p1.__proto__);
// console.log(Person.prototype.isPrototypeOf(p1));

// Person.prototype.species = '3azizo';

// console.log(p1.hasOwnProperty('firstName'));
// console.log(p1.hasOwnProperty('species'));
// console.dir(Person.prototype.__proto__);
// console.log(Person.prototype.constructor);
//////////////challenge (1)////////////////////
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.speed} Km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.speed} Km/h`);
// };
// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedes', 95);
// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.accelerate();
