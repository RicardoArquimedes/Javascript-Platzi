// declare a class
class User { };

// instance a class 
// const newUser = new User();

class user {
  // methods
  greeting() {
    return 'Hello!'
  }
};

const gndx = new user();

console.log(gndx.greeting())

// inheritance 

const developer = new user();
console.log(developer.greeting())

// constructor 

class user2 {
  // constructor 
  constructor() {
    console.log('New user')
  }
  greeting() {
    return 'Hi!'
  }
}

const richie = new user2();

// this 
// refert to the parent elements 

class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // methods 
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`
  }
}

const arquimedes = new user('Arquimedes', );
console.log(arquimedes.greeting())

class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // methods 
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`
  }

  get uAge(){
    return this.age;
  }

  set uAge(n){
    this.age = n
  }
}

const user3 = new user('Richie', 29);
console.log(user3.uAge);
console.log(user3.uAge = 34);