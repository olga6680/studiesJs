/* const timerId = setTimeout(function() {
    console.log('Hello');
}, 2000); //2s */

/* const timerId = setTimeout(function(text) {
    console.log(text);
}, 2000, 'Hello'); //2s  //используется нен часто, но такой синтаксис существует */


/* const timerId = setTimeout(logger, 2000);

clearInterval(timerId); //Останавливаем таймер

function logger() {
    console.log(('text'));
}  */

/* setTimeout(logger, 2000);  //работает и так. Но лучше задавать переменную, чтобы создавать различные таймауты
function logger() {
    console.log(('text'));
} */

/* const btn = document.querySelector('.btn');
let timerId,
    i = 0;

btn.addEventListener('click', () => {
    //const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 500);
});

function logger() {
    if (i == 3) {
        clearInterval(timerId); //Останавливаем таймер
    }
    console.log('text');
    i++;
}

//Если функция logger будет тяжелая, то такой метод не будет работать. Не будет выдерживаться таймаут 0,5с
//В таких случаях используется рекурсивный метод

let id = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 500);
}, 500); */

//Выполняем анимацию, чтобы синий квадрат перемещался плавно в другой угол
const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);