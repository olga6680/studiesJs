"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {

                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            /*                 let genre = promt('Ваш любимый жанр под номером ${i}');

                        if (genre == '' || nill) {
                            console.log('Вы ввели некорректные данные');
                            i--;
                        } else {
                            personalMovieDB.genres[i-1] = genre;
                            } */

            let genres = promt('Введите ваши любимые жанры через запятую').toLowerCase(); //альтернативная запись. Более лучшая

            if (genres == '' || nill) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres = genres.sort(); //При сортировке, буквы в верхнем регистре в приоритете перед алфавитом
                //Поэтому для правильной сортировки переводим ответ в один регистр, маленький например toLowerCase()
            }
        }

        personalMovieDB.genres.forEach((item, i) => { //item - жанры, i - номер по порядку
            console.log(`Любимый жанр #${i + 1} - это ${item}`); //i = 1 чтобы номерация была не с 0, а с 1
        });
    }
};