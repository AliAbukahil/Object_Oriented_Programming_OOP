"use strict";
/* 
////////////////////////////////////////////////
// Constructor Functions and the new Operator
const Person = function (firstName, birthYear, profession) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.profession = profession;

  // Adding Methods
  // never create a method inside a constructor function
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person("Jonas", 1991, "Teacher");
const ali = new Person("ali", 1986, " Developer");

// 1. New {} is created
// 2. function is called, the this keyword is this new created Object = {}
// 3. {} linked to a prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2017, "Baby");
const jack = new Person("Jack", 1975, "butcher");
console.log(jonas, ali, matilda, jack);

console.log(jonas instanceof Person);

// adding a Static Method to the Person constructor
Person.hey = function () {
  console.log(`Hey there! 👋`);
  console.log(this);
};

Person.hey();
 */
/////////////////////////////////////////
// Prototypes
/* 
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
ali.calcAge();
matilda.calcAge();

console.log(ali.__proto__);
console.log(jonas.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// This whole confusion comes from the bad naming
// It should have not been called prototype, but some name like (prototaypeOfLinkedObject) but even though of course it's not called like this, but this name (prototaypeOfLinkedObject) would be a more honest name

// Shouldn't Person.prototype be the prototype of Person
// I mean should this .prototype peoperty here not be the prototype of Person

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, ali.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

// AGAIN Rememnber, Person.prototype is not actually the prototype of Person, but of all the objects that are created througth the Person function like (jonas, ali, matilda, jack)

console.log(jonas.__proto__);
// Object.prototype (top of protoype chain)
console.log(jonas.__proto__.__proto__);

console.log(jonas.__proto__.__proto__.__proto__); // null

console.dir(Person.prototype.constructor);

// const arr2 = new Array(1, 1, 3, 3, 5, 5, 7, 7, 9, 9, 11, 11);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);

console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector("h1");

console.dir((x) => x + 1);

// console.log(arr2.unique());

// const arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(arr2);

// const arr3 = new Set([5, 5, 8, 8, 9, 9, 7, 7, 11, 11, 14, 14]);
// console.log([...arr3]);
 */
// Object Oriented Programming (OOP)

//////////////////////////////////////
// Coding Challenge #1

/* 
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them
Test data:
§
§
Data car 1: 'BMW' going at 120 km/h
Data car 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀 
*/

//solution

/* 

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// accelerate method
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
// brake method
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();

 */

// ES6 Classes

// class expression
// const PersonC1 = class {}

/* 

// class declaration
class PersonC1 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance Methods
  // How Methods are created in ES6 Classes
  // Methods will be added to .prototype property of PersonC1 class
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  //   species = 'Homo Sapiens';

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  // getter in class
  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  // any setter method needs to have exactly one parameter
  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //Static Method
  // creating a Static Method in the ES& class constructor
  static hey() {
    console.log(`Hey there! 👋`);
    console.log(this);
  }
}

// creating new instance
const jessica = new PersonC1("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonC1.prototype);

// Adding a method manually to the prototype
// PersonC1.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted even if they are class declaration,
// because function declaration are hoisted

// 2. Classes are first-class citizens, and so what that means,
// is that we can  pass them into functions and also return them
// from functions, that is because classes are really  just a special kind of fnction behind the scenes.

// 3. the body of a class is always executed in strict mode
// And so even if we didn't activate "use strict" for the entire //// script file on the Top, all the code that is in the class will be executed in strict mode

 */
// creating new instance
// const walter = new PersonC1("Walter White", 1965);

// PersonC1.hey();

/* 
////////////////////////////////////////
// Setters and Getters

// Object literal
const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  // Getter
  get latest() {
    const who = this.movements.slice(-1).pop();
    return who;
  },

  // Setter
  // any setter method needs to have exactly one parameter
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

// How do we use the setter now
account.latest = 50;
console.log(account.movements); // [200, 530, 120, 300, 50]
 */

/* 
///////////////////////////////////////////
// Object.create
// 3rd way of creating Objects

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.init("Steven", 2002);
steven.calcAge();
// steven.name = "Steven";
// steven.birthYear = 2002;

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
console.log(sarah);
sarah.init("Sarah", 1979);
sarah.calcAge();
 */

/////////////////////////////////////
// Coding Challenge #2

// Your tasks:

// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// §
// Data car 1: 'Ford' going at 120 km/h

// GOOD LUCK 😀

//solution
/* 
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl("Ford", 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);
 */

// Constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// Constructor function
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Creating a connection manually using Object.create function
Student.prototype = Object.create(Person.prototype);

// Adding a Method
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2020, "Computer Science");
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor);
