'use strict';

//const btn = document.querySelector('button');

/* btn.onclick = function() {    //Такой код не используется в реале!!!
  alert('Click');
}; */

//addEventListener

/* btn.addEventListener('click', () => { //Callback функции ( () => ) выполняются всегда строго после, кокого-то действия
    alert('Click');
});

btn.addEventListener('click', () => { //Можно задавать событие много раз. События выполняются по-очереди
    alert('Second click');
});

btn.addEventListener('mouseenter', () => {
    console.log('Hover');
}); */

//event аргумент. Передается только через колбэкфункцию. Называть его можно, как угодно (обычно event или e)
/* btn.addEventListener('click', (e) => {
    //console.log(e.target);
    e.target.remove();
    //console.log('Hover');
}); */

/* btn.addEventListener('mouseenter', (e) => {
  console.log(e.target);
  e.target.remove();
  //console.log('Hover');
}); */

/* let i = 0;
const deleteElement = (e) => {
    //e.target.remove();
    console.log(e.target);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement); // Используется, когда после одного события нужно удалить обработчик за ненадобностью
    }
};

btn.addEventListener('click', deleteElement); */


//Всплытие событий

//let i = 0;

const btns = document.querySelector('button'),
    overlay = document.querySelector('.overlay');

const deleteElement = (e) => {
    //e.target.remove();
    console.log(e.target);
    //console.log(e.currentTarget); //аналогичное, но на практике чаще используется target
    console.log(e.type);
    /*         i++;
            if (i == 1) {
                btn.removeEventListener('click', deleteElement); // Используется, когда после одного события нужно удалить обработчик за ненадобностью
            } */
};

/* btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement); //Сначала срабатывает на вложенном элементе

//Отмена стандартного поведения браузера

const link = document.querySelector('a');

link.addEventListener('click', (event) =>  {   //function (event) {
    event.preventDefault();                    //Помещается в самое начало кода

    console.log(event.target);
}); */

//Как навесить одно событие на множество элементов

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault(); //Помещается в самое начало кода

    console.log(event.target);
});