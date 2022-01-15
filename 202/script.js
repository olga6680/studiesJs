'use strict';

//const btns = document.querySelectorAll('button');

//console.log(btns[0].classList.length); // classList работает только для конкретного элемента, не для массива
// узнаем кол-во классов у первой кнопки

//Методы classList

//console.log(btns[0].classList.item(0)); //Получаем класс под определенным индексом

/* console.log(btns[0].classList.add('red')); //Добавляет класс. Через запятую 'red', 'blue'

console.log(btns[0].classList.remove('blue')); //Удаляет класс

console.log(btns[0].classList.toggle('blue')); //Если есть класс, то будет убран. Если нет - добавлен

if (btns[2].classList.contains('red')) {   //Проверяет, есть ли класс у элемента
  console.log('red');
} */

/* btns[0].addEventListener('click', () => { //При клике на первую кнопку проверяем вторую
    if (!btns[1].classList.contains('red')) { //Если у нее нет (!) класса 'red'
        btns[1].classList.add('red'); //Добавляем его
    } else {
        btns[1].classList.remove('red'); //Если есть - удаляем
    }
}); */

//btns[0].addEventListener('click', () => { //При клике на первую кнопку проверяем вторую
/*   if (!btns[1].classList.contains('red')) { //Если у нее нет (!) класса 'red'
      btns[1].classList.add('red'); //Добавляем его
  } else {
      btns[1].classList.remove('red'); //Если есть - удаляем
  } */

//btns[1].classList.toggle('red');
//});

//console.log(btns[0].className);  //Устаревшее свойство. Выводит все классы в одну строку. Не использовать

//Делигирование событий - функции назначаются потомкам определенного родителя

const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

/* wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") { //В этом свойстве тег нэйм всегда большими буквами
        console.log("Hello");
    }
    /*     if (event.target && event.target.classList.contains('blue')) { //В этом свойстве тег нэйм всегда большими буквами
            console.log("Hello");
        } */

//});

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('Hello');
    });
});

const btn = document.createElement('button'); //добавляем элемент
btn.classList.add('red'); //Задаем ему класс
wrapper.append(btn); //В конец обертки