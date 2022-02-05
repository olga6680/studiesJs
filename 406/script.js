'use strict';

/* console.log('Запрос данных...');

const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...');

        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);
    }, 2000);
});

req.then((product) => {
    //const req2 = new Promise((resolve, reject) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
            //reject(); //test
        }, 2000);
    });
    /*     req2.then(data => {
            console.log(data);
}).then(data => {
    data.modify = true;
    return data;
    //console.log(data);
}).then((data) => {
    console.log(data);
}).catch(() => { //В случае ошибки, код на ней останавливается и перемещается к .catch. Всегда пишется в конце
    console.error('Произошла ошибка');
}).finally(() => { //Эта часть кода будет выполняться всегда. Даже после ошибки. Всегда в конце Promis
    console.log('finally');
}); */

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

//test(1000).then(() => console.log('1000 ms'));
//test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All');
});