'use strict';

//Устаревшая форма записи AJAX, но пока используется. Лучше не применять

const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest();

    //request.open(method, url, async, pass); //Собирает настройки, которые помогут в будущем сделать запрос
    request.open('GET', 'js/current.json');
    //Методы http
    //GET данные с сервера типа товары, цена и т.п
    //POST данные с сервера при регистрации, например
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    /*     request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                console.log(request.response);
                const data = JSON.parse(request.response);
                inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); //toFixed(2) округление
            } else {
                inputUsd.value = "Что-то пошло не так";
            }
        }); */ //readystatechange редко используется

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); //toFixed(2) округление
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

    // Свойства
    // status (200, 404, 303..)
    // statusText (ok, not found ...)
    // response
    // readyState  текущее состояния запроса(либо цифра, либо словами)

    // События
    // readystatechange статус события в данный момент
    // load  статус после загрузки
});