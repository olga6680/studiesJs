/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => { //Скрипты начинают работать после загрузки DOM дерева

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value; //Отслеживаем заполнение формы
        const favorite = checkbox.checked; //Отслеживаем галочку


        if (newFilm) { //Проверяем, чтобы форма была заполнена и добавляем новый фильм

            if (newFilm.length > 21) { //Если название фильма больше 21 знака, обрезаем и ...
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм"); //Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: "Добавляем любимый фильм"
            }

            movieDB.movies.push(newFilm);
            //movieDB.movies.sort();
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        /*         movieDB.movies.push(newFilm);         //Добавляем новый фильм. Добавится даже, если форма пустая
                //movieDB.movies.sort();              //Сортируем по алфавиту
                sortArr(movieDB.movies);

                createMovieList(movieDB.movies, movieList); //Создаем новые элементы */

        event.target.reset(); //Очищаем форму
    });

    /*     adv.forEach(item => {
            item.remove();
        }); */

    /* adv.forEach(function (item) {   то же самое
        item.remove();
    }); */

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    //deleteAdv(adv);  //Сносим в самый низ

    //genre.textContent = "драма";

    //poster.style.cssText = 'background: url("img/bg.jpg") center center/cover no-repeat;';

    //poster.style.backgroundImage = 'url("img/bg.jpg")'; //При комбинации ковычек нужно использовать разные

    const makeChanges = () => {
        genre.textContent = "драма";

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    //makeChanges(); //Сносим в самый низ

    /*     movieList.innerHTML = "";

        movieDB.movies.sort();

        movieDB.movies.forEach((film, i) => {
            movieList.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        }); */

    /* a = a + 1; //Абсолютно ижентичные команды
    a += 1;

    a = a + "aaa";
    a += "aaa"*/

    //console.log(poster.innerHTML);  получает все элементы со страницы автоматически

    const sortArr = (arr) => {
        arr.sort();
    };

    //sortArr(movieDB.movies);    //Сносим в самый низ

    //movieDB.movies.sort();

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        //sortArr(movieDB.movies);
        sortArr(films); //вот наша сортировка. Сюда поместили

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove(); //При клике на корзину удаляем со страницы фильм
                movieDB.movies.splice(i, 1); //И удаляем его из базы данных. i - номер элемента, 1- сколько элементов удалить под этим номером
                //createMovieList(movieDB.movies, movieList); //Нумерация опять с 1 ...
                createMovieList(films, parent); //Потому, что эл-ты не меняются, заменяем их
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    //sortArr(movieDB.movies);   //Чтобы не делать сортировку сразу при загрузке страницы, помещаем ее в createMovieList
    createMovieList(movieDB.movies, movieList);
});