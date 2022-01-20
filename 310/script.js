'use strict';

//const num = new Number(3); //не совсем корректный способ задания числа. Но код будет работать
//console.log(num);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);