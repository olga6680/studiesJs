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
    // touches  //показывает сколько всего пальцев на экране

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('Move');
    });
});