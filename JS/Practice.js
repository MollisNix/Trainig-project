'use strict'

// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// let a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = +prompt('На сколько оцениваете его?', '');
// movies[a] = b;

// console.log(personalMovieDB);




const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: ()=> {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
     personalMovieDB.count= +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

    return personalMovieDB.count = numberOfFilms;
  },

  detectPersonalLevel: ()=> {
    if (personalMovieDB.count < 10) {
      alert('You have watched so little ');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
      alert('You are the common viwer');
    } else {
      alert('You are cinephile');
    }
  },

  rememberMyFilms: ()=> {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
          b = +prompt('На сколько оцениваете его?', '');
      
            if (a != null &&  b != null && a != '' && b != '' && a.length < 50) {
              personalMovieDB.movies[a] = b;
            } else {
              i--;
            }
            
          //  if (a === '' || a === null || a.length > 50 || b === '' || b === null || b.length > 50) {
          //     i--;
          //     a = prompt('Один из последних просмотренных фильмов?', '');
          //     b = +prompt('На сколько оцениваете его?', '');
          //    }
          //  personalMovieDB.movies[a] = b;
      }
  },

  showMyDB: (hiden)=> {
    if (!hiden) {
      console.log(personalMovieDB)
    }
  },

  writeYourGenres: ()=> {

    for (let i = 0; i < 1; i++) {
      let yourGenres = prompt(`Введите ваши любимые жанры через запяткую`, ``).toLocaleLowerCase();

        if (yourGenres === null || yourGenres === '') {
          i--;
        } else {
          personalMovieDB.genres = yourGenres.split(', ');
        }

      }
      
      personalMovieDB.genres.forEach((element, i) => {
          console.log(`Любимый жанр ${i + 1} - это  ${element}`);
      });
        
  },

  toggleVisibleMyDB: ()=> {
    personalMovieDB.privat === false ? personalMovieDB.privat = true : personalMovieDB.privat = false;
  },

};



personalMovieDB.start();
personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(false);
personalMovieDB.toggleVisibleMyDB();