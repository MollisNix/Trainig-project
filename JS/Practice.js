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
//movies[a] = b;

// console.log(personalMovieDB);


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

if (personalMovieDB.count < 10) {
  alert('You have watched so little ');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
  alert('You are the common viwer');
} else {
  alert('You are cinephile');
}



// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = +prompt('На сколько оцениваете его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = +prompt('На сколько оцениваете его?', '');  & b === '' || b === null || b.length > 50

for (let i = 0; i < 2; i++) {
const a = prompt('Один из последних просмотренных фильмов?', ''),
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





console.log(personalMovieDB);