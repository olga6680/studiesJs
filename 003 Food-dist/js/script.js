window.addEventListener('DOMContentLoaded', () => {
    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() { //Скрываем ненужные табы
        tabsContent.forEach(item => {
            //item.style.display = 'none';  //В реальных проэктах не используются инлайн стили
            item.classList.add('hide');
            item.classList.remove('show', 'fade'); //Удаляем класс анимации fade
        });

        tabs.forEach(item => { //Скрываем класс active у всех элементов
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) { //Показываем табы
        //tabsContent[i].style.display = 'block'; //В реальных проэктах не используются инлайн стили
        tabsContent[i].classList.add('show', 'fade'); //Добавляем класс анимации fade
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent(); //i = 0 всегда сначала показываем первый таб

    tabsParent.addEventListener('click', (event) => {
        const target = event.target; //Когда часто используется event.target, она задается, как переменная. Такая практика

        if (target && target.classList.contains('tabheader__item')) { //проверяем, что точно кликнули на таб, а не родителя
            tabs.forEach((item, i) => { //перебираем все табы item. i -это порядковый номер. Чтобы определить, на какой нажали и какой должен открыться
                if (target == item) { //Проверяем совпадение клика с табом по номеру i, какой открыть
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //Timer

    const deadline = '2022-01-20';

    function getTimeRemaining(endtime) { //Разница между текущей датой и датой акции
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)), //% возвращает остаток от деления         //Math.floor - округление,  t / (1000 * 60 * 60 * 24) -кол-во дней
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) { //Если число меньше 10, подставлять 0 впереди
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock(); //чтобы не происходило мигание даты при обновлении страницы. Потому, что она запускается только через 1000, тюею 1с

        function updateClock() { //Выводим на страницу
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    //Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');



    //Если код повторяется хотябы 2 раза, выносим его в отдельную функцию
    function openModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId()); //Если пользователь сам открыл окно, нажав на кнопку, оно не появится через 10с
    }

    function closeModal() {
        modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    /*     modalTrigger.forEach(btn => { //для нескольких кнопок на странице
            btn.addEventListener('click', () => {
                modal.classList.toggle('show');
                document.body.style.overflow = 'hidden';
            });
        }); */

    modalTrigger.forEach(btn => { //для нескольких кнопок на странице
        btn.addEventListener('click', openModal);
    });

    //Это для одной кнопки на странице querySelector
    /*     modalTrigger.addEventListener('click', () => {
                    //modal.classList.add('show');
                   // modal.classList.remove('hide');
            //добавляем модальному окну стиль hide в index.html, подразумевая, что изначально оно скрыто
            //modal.classList.toggle('hide');
            //ничего не происходит. Убираем класс в index.html modal.hide
            modal.classList.toggle('show');

            document.body.style.overflow = 'hidden'; //чтобы страница не пролистывалась, когда открыто модальное окно
        });


        modalCloseBtn.addEventListener('click', () => {
            /*         modal.classList.add('hide');
                    modal.classList.remove('show');
            //modal.classList.toggle('hide');
            modal.classList.toggle('show');
            document.body.style.overflow = ''; //Возвращаем прокрутку страницы при закрытии модального окна
        });*/

    modalCloseBtn.addEventListener('click', closeModal);

    //закрытие окна при клике на подложку или на клавишу esc

    /*modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.classList.toggle('show');
            document.body.style.overflow = '';
        }
    }); */

    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => { // esc
        if (e.code == "Escape" && modal.classList.contains('show')) { //найти event.code для клавиш можно в гугл
            closeModal();
        }
    });

    //вызов модального окна через 10с

    const modalTimerId = setTimeout(openModal, 10000);

    //вызов модального окна при пролистывании страницы до конца

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) { //может не срабатывать в некоторых браузерах, поэтому добавляем -1 (-1px)
            openModal();
            window.removeEventListener('scroll', showModalByScroll); //открывать модальное окно только один раз
        }
    }

    /*     window.addEventListener('scroll', () => {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) { //может не срабатывать в некоторых браузерах, поэтому добавляем -1 (-1px)
                openModal();
            }
        }); */

    window.addEventListener('scroll', showModalByScroll);
});