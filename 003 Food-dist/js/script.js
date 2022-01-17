window.addEventListener('DOMContentLoaded', () => {

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
});