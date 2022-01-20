'use strict';

//const num = new Number(3); //не совсем корректный способ задания числа. Но код будет работать
//console.log(num);

/* function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}

User.prototype.exit = function() {
  console.log(`Пользователь ${this.name} ушел`)
};



const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex); */

//контекст вызова функции this. 4 способа

//1  Обычная функцияпо разному отображается в зависимости стоит ли 'use strict'; undefound - стоит, window - нет

/* function showThis() {
    console.log(this);
}

showThis(); */

/* function showThis(a, b) {
  console.log(this);
  function sum() {
    return a + b
  }
} */

/* function showThis(a, b) {
    console.log(this);

    function sum() {
        console.log(this)
        return a + b;
    }
    console.log(sum());
}

showThis(4, 5); */

//2 Контекст у методов объекта - сам объект

/* const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};
obj.sum(); */

//3 this в конструкторах и классах - новый экземпляр объекта

/* function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
        this.hello = function() {
            console.log("Hello " + this.name);
        };
}
let ivan = new User('Ivan', 23); */

// Ручное присвоение this call, apply, bind

/* function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smiyh');
sayName.apply(user, ['Smith']);
//еще один способ ручного вызова this. Создает новую функцию
function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13)); */

/* const btn = document.querySelector('button');

btn.addEventListener('click', function() {  //здесь стрелочная функция не будет работать
    //console.log(this);
    this.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };

        say();
    }
};

obj.sayNumber(); */

/* const double = (a) => {
    return a * 2;        //Если контекст помещается в одну строку в колбэк функции, его можно записать без фигурных скобок
}; */

/* const double = a => a * 2; //Если один аргумен (а), можно записать без круглых скобок

/* console.log(double(4));
const double = (a, b) => a * 2; //Если больше одного аргумен (аб b) - c круглых скобок

console.log(double(4)); */

const btn = document.querySelector('button');

btn.addEventListener('click', (e) => { //стрелочная функция
    //console.log(this);
    e.target.style.backgroundColor = 'red';
});