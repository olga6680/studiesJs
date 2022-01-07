'use strict';

const box = document.getElementById('box');

console.log(box);

/* const btns = document.getElementsByTagName('button'); //Получаем массив со всеми кнопками

console.log(btns); */

/* //1 способ
const btns = document.getElementsByTagName('button')[1]; //Получаем вторую кнопку

console.log(btns); */
//2 способ
const btns = document.getElementsByTagName('button'); //Получаем вторую кнопку

console.log(btns[1]);

//Если будет только один элемент, button например, на странице, все равно получим массив массив
//И, чтобы к нему обратиться, нужно указать индекс [0]

const circle = document.getElementsByClassName('circle'); //Без .  Получим массив
console.log(circle);

//Эти методы уже используются реже. Новые методы:

//querySelectorAll

const hearts = document.querySelectorAll('.heart'); //Любой селектор. Например #jdl, .ghfvs

hearts.forEach(item => { //item - элементы в массиве
    console.log(item);
});

//querySelector

const oneHeart = document.querySelector('.heart'); //Выводит первый элемент с селектором на странице

console.log(oneHeart);
