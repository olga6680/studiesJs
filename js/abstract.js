"use strict";

/***************/

//МЕТОДЫ И СВОЙСТВА

//Свойства выводятся без () - length
//Методы - с () - log()

/****/
//СТРОКИ
//Методы и свойства можно смотреть в документации: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/
//или в консоли браузера:  вводим console.dir(); console.dir(String) например


const str = "test";
const arr = [1, 2, 4];

//console.log(str.length);   //Кол-во символов внутри строки
//console.log(arr.length);   //Кол-во эл-тов внутри массива
//console.log(str[2]);         //Указывает часть строки через индекс
//console.log(str[2 = 'd']);         //Не сработат !!!
//console.log(str.toUpperCase());     //Верхний регистр
//console.log(str.toLowerCase());     //Нижний регистр

console.log(str);

const fruit = "Some fruit";

//indexOf()

//console.log(fruit.indexOf('fruit'));     //Выводит индекс, с которого начинается элемент в строке
//console.log(fruit.indexOf('q'));     //Выведет -1 , т.е. такого элемента нет в строке

//Как поменять строку, если она задана const, т.е. не изменяемая константа


//slice()

const logg = "Hello world!";

//Нумерация индексов идет с 0 !!!

//console.log(logg.slice(6, 10));   //Первое значение - с какой буквы начинается строка которую нужно вырезать значение под индексом, которое написано вторым в скобках. Т.е. получим - worl

//console.log(logg.slice(6));     //Просто вырежится до конца строки
//console.log(logg.slice(-5, -1));     //Нумерация с конца строки

//substring()

//console.log(logg.substring(6, 10));   //Те же свойства, только не поддерживает отрицаиельные значения

//substr()

//console.log(logg.substr(6, 5));    //Вторая цифра - количество символов, которое нужно вырезать

/****/
//ЧИСЛА
//в консоли браузера:  вводим Math.

//Округление чисел

const num = 12.2;

console.log(Math.round(num)); //Получим 12

//Преобразование строки в число

const test = "12.2px";

console.log(parseInt(test)); //Получим число 12

console.log(parseFloat(test)); //Получим число 12.2


/***************/

//CALLBACK ФУНКЦИИ

/* Функции по времени отрабатывают с разной задержкой. Поэтому, чтобы
функции выполнялись одна за другой в назначенном порядке используют синтаксис*/

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

//learnJS('JavaScript', function() {  //Анонимная функция. К ней нельзя потом будет обратиться
//console.log('Я прошел этот урок');
//});

function done() { //Анонимная функция. К ней нельзя потом будет обратиться
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done); //done без (), потому что мы ее вызываем, чтобы она использовалась после того, как используется callbakc


/***************/

//ОБЪЕКТЫ

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

//console.log(options.name);


//delete options.name;          //удалить объект

//for (let key in options) {      //перебор объектов

//console.log(`Свойство ${key} имеет значение ${options[key]}`);
//}

/*Там где будет опция в опции, как в примере у colors, выдаст [object Object]
чтобы перебирать и свойства в свойстве, нужно задать условия*/

/*for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);  //Более простой пример, чтобы понять написание console.log(options["colors"]["border"]);
    }
  } else {
      console.log(`Свойство ${key} имеет значение ${options[key]}`);
  }
}
*/

/****/
//Счетчик

/* let counter = 0;

for (let key in options) {
  if (typeof(options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Свойство ${i} имеет значение ${options[key][i]}`);  //Более простой пример, чтобы понять написание console.log(options["colors"]["border"]);
      counter++;
    }
  } else {
      console.log(`Свойство ${key} имеет значение ${options[key]}`);
      counter++;
  }
}
console.log(counter);    //Посчитает количество свойств */

//все это можно записать одним методом

//console.log(Object.keys(options));  //получаем массив со всеми ключами [ 'name', 'width', 'height', 'colors' ]

//console.log(Object.keys(options).length); //Самое рациональное

//Можно самомтоятельно создавать методы

/* const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
      border: 'black',
      bg: 'red'
  },
  makeTest: function()  {
    console.log("Test");
  }
};

options.makeTest();*/

//Деструктриризация объектов - вытаскивание отдельных структур (коробочек)

const { border, bg } = options.colors;

console.log(border);


/***************/

//МЕТОДЫ МАССИВА

const arr = [1, 2, 3, 6, 8];

//arr.pop();   //Удаляет последний элемент массива
//arr.push(10); //Добавляет элемент в конец массива

//console.log(arr);
/* Есть методы shift / unshift добавляют элемент в начало / конец строки.
Однако в начале массива при удалении или добавлении элемента  меняются индесы у всех элементов.
Поэтому эти методы очень редко используются*/

/* for (let i = 0; i < arr.length; i++)  {     //Перебор массивов обычным циклом
  console.log(arr[i]);
} */

/* for (let value of arr) {       //Перебор массивов методом for of. Используют, когда нужно остановить цикл
    console.log(value);
} */

//console.log(arr.length);    // Мы получаем индекс последнего элемента + 1

/* arr.forEach(function (item, i, arr) {     //item (свое название. Любое, например i) - это элемент, i (свое название. Любое, например i) - номер элемента, arr - ссылка на массив, который перебираем
      console.log(`${i}: ${item} внутри массива ${arr}`);   //Обычно всегда используют
}); */

const str = prompt("", "");

const products = str.split(", "); //Формирует массив из строки на основании какого-то условия. В данном случае, товары, перечисленные через запятую
products.sort(); //Сортирует в алфавитном порядке. Работает только со строками. С числами не работает. Сортирует сначала числа, начинающиеся на 1, потом на двоечку [ 10, 13, 2, 26, 8 ]
console.log(products.join('; ')); //Формируе строку из массива. Нужно указать, через какой разделитель будут записаны данные. В данном случае - это  ;

//Метод sort для порядковой сортировки чисел
const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

//Копии объектов

/* let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
  a: 5,
  b: 1
};

/* const copy = obj; //ССылка

copy.a = 10;
console.log(copy);
console.log(obj); */

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);