'use strict';

//const now = new Date(); //Если скобочки пустые, берется текущая дата и время, которые берутся из системы
//const now = new Date('2022-01-19'); //для работы с мет а тегом date, который появился в HTML5
//const now = new Date(2022, 1, 19, 20);  //В такой записи не долженбыть 0 в записи 01 (при этом месяцы считаются с 0, т.е. 1 - февраль), например. 20 - 20с
//const now = new Date(0);  //0 - это милисекунды, начиная с 1970 года. Выдаст 1970-01-01T00:00:00.000Z

//Методы получения даты
//const now = new Date();
const now = new Date('2022-01-19');
//      new Date.parse('2022-01-19'); //альтернативный способ задания

/* console.log(now.getFullYear()); //текущий год
console.log(now.getMonth()); //текущий месяц
console.log(now.getDate()); //текущий дата
console.log(now.getDay()); //текущий день недели, причем начинается с воскресенья 0
console.log(now.getHours()); //текущие часы
console.log(now.getUTCHours());  //часы в другом часовом поясе */

//console.log(now.getTimezoneOffset());  //разница между часовыми поясами в минутах
//console.log(now.getTime()); //количество мс, прошедшие с 1970 года

//Методы установки даты
//часы, минуты и т.д
console.log(now.setHours(40)); //все то же самоe, только set вместо get
//console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; //** 3 возводит в 3-ю степень
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);