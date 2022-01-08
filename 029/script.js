'use strict';
//Обращение к DOM элементам
//console.log(document.body);
//console.log(document.head);
//console.log(document.documentElement);  //обращение к тегу <html></html>

//Обращение к DOM узлам
//console.log(document.body.childNodes); //[ #text, div.wrapper, #text, <!--  renernh  -->, #text, script, #text, <!--  Code injected by live-server  -->, #text, script, … ]
//text - это перенос строки
//console.log(document.body.firstChild);  //первый ребенок (узел)
//console.log(document.body.firstElementChild);  //первый ребенок (элемент)
//console.log(document.body.lastChild);   //последний ребенок (узел)
//console.log(document.body.lastElementChild);   //последний ребенок (элемент)

//console.log(document.querySelector('#current').parentNode); //Обращения к родителям
//console.log(document.querySelector('#current').parentElement);
//console.log(document.querySelector('#current').parentNode.parentNode);

//Можно назначать атрибуты data для обращения в будущем к элементам. data-curent. например (curent - произвольное название)

//console.log(document.querySelector('[data-current="3"]').nextSibling); //Следующий элемент. Получим перенос строки
//console.log(document.querySelector('[data-current="3"]').previousSibling); //Предыдущий элемент. Получим перенос строки

//console.log(document.querySelector('[data-current="3"]').nextElementSibling); //Получим элемент

//Когда нельзя использовать forEatch, используетс for of
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue; //Останавливаем повторение цикла на переносе строки. Избавляемся от этой ноды
    }
    console.log(node);
}