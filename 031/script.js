'use strict';

//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcansel

window.addEventListener('DOMcontentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => { //Рекомендуется всегда ставить в мобильной версии е,
        e.preventDefault(); //чтобы отменить дефолтное поведение браузера

        console.log('Start');
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('End');
    });

    // Свойства event (e)
    // touches  показывает сколько всего пальцев на экране

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
        console.log(e.touches);
    });

    // targetTouches  показывает сколько всего пальцев на этом элементе
    // changedTouches  список пальцев, которые учавствуют в событии (даже палец, который был убран)

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX); // Пример: по первому пальцу находим координаты передвижения
    });
});