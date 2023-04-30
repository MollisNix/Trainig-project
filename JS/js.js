'use strict'

// // for (let i = 0; i < 3; i++) {
// //     console.log(i);
// //     for (let j = 0; j < 3; j++) {
// //         console.log(j);
// //     }
    
// //     console.log(i);
// // };


// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
// //     }

// //     result += '\n';
// // }

// // console.log(result);


// // first: for (let i = 0; i < 3; i++) {
// //         console.log(`First level ${i}`);
// //         for (let j = 0; j < 3; j++) {
// //             console.log(`Second level ${j}`);
// //             for (let k = 0; k < 3; k++) {
// //                 if (k === 2) continue first;
// //                 console.log(`Third level ${k}`);
// //             }
// //         }
        
// //         console.log(i);
// //     };




// function firstTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const arr = [3, 5, 8, 16, 20, 23, 50];
//   const result = [];

//   // Пишем решение вот тут
//   for (let i = 0; i < arr.length; i++) {
//     console.log(result[i] = arr[i] )
//   }
  
//   // Не трогаем
//   return result;
// }

// // Место для второй задачи
// function secondTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, 'Shopping', 20, 'Homework'];

//   // Пишем решение вот тут
//   for (let i = 0; i < data.length; i++) {
//     if (typeof data[i] === 'number') {
//        console.log (data[i] * 2);
//       } else if (typeof data[i] === 'string')  {
//       console.log( data[i] + ' - done' )
//      }
//     }
//   }
   
//   // Не трогаем
//   return data;
// }

// // Место для третьей задачи
// function thirdTask() {
//   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//   const data = [5, 10, 'Shopping', 20, 'Homework'];
//   const result = [];

//  for (let i = 4; i >=0; i--) {
//     result.push(data[i]);
//  }

//   return result;
// }