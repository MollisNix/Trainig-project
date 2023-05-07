'use strict'

// // for (let i = 0; i < 3; i++) {
// //     console.log(i);
// //     for (let j = 0; j < 3; j++) {
// //         console.log(j);
// //     }
    
// //     console.log(i);
// // };


// let result = '';
// // const length = 7;

// // for (let i = 1; i < length; i++) {
// //     for (let j = 0; j < i; j++) {
// //         result += '*';
// // //     }

// // //     result += '\n';
// // // }

// // // console.log(result);


// // // first: for (let i = 0; i < 3; i++) {
// // //         console.log(`First level ${i}`);
// // //         for (let j = 0; j < 3; j++) {
// // //             console.log(`Second level ${j}`);
// // //             for (let k = 0; k < 3; k++) {
// // //                 if (k === 2) continue first;
// // //                 console.log(`Third level ${k}`);
// // //             }
// // //         }
        
// // //         console.log(i);
// // //     };




// // function firstTask() {
// //   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// //   const arr = [3, 5, 8, 16, 20, 23, 50];
// //   const result = [];

// //   // Пишем решение вот тут
// //   for (let i = 0; i < arr.length; i++) {
// //     console.log(result[i] = arr[i] )
// //   }
  
// //   // Не трогаем
// //   return result;
// // }

// // // Место для второй задачи
// // function secondTask() {
// //   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// //   const data = [5, 10, 'Shopping', 20, 'Homework'];

// //   // Пишем решение вот тут
// //   for (let i = 0; i < data.length; i++) {
// //     if (typeof data[i] === 'number') {
// //        console.log (data[i] * 2);
// //       } else if (typeof data[i] === 'string')  {
// //       console.log( data[i] + ' - done' )
// //      }
// //     }
// //   }
   
// //   // Не трогаем
// //   return data;
// // }

// // // Место для третьей задачи
// // function thirdTask() {
// //   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// //   const data = [5, 10, 'Shopping', 20, 'Homework'];
// //   const result = [];

// //  for (let i = 4; i >=0; i--) {
// //     result.push(data[i]);
// //  }

// //   return result;
// // }



// //      *
// //     ***
// //    *****
// //   *******
// //  *********
// // ***********


// // const lines = 5;
// // let result = '';

// // for (let i = 0; i <= 6; i++) {

// //   for (let j = lines; j >= i; j-- ) {
// //     result += ' ';
// //   }
  
// //   for (let k = 0; k <= i; k++) {
// //     result += '*';
// //   }
// //   result += '\n';
// // }

// // console.log(result);
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//      let num = 10;
//      console.log(num);
// }

// showFirstMessage('Hello World');
// console.log(num);


//  function ret() {
//     let num = 50;

// /////////////////////////////////
//     return num;
//  }

//  const anotherNum = ret();
//  console.log(anotherNum);



//  const logger = function() {
//     console.log('Hello');
//  };


//  logger();


//  const calc = (a, b) => {return a + b};



// const usdCurr = 28;
// const eurCurr = 32;
// const uahCurr = 40;
// const discount = 0.9;



// function convert (amount, curr) {
// 	return 	curr * amount;
// }


// function promotion (result) {
// 	console.log(result * discount);
// }

// const res = convert(500, usdCurr);
// promotion(res); 


// function test() {
// 	for (let i = 0; i < 5; i++ ) {
// 		console.log(i);
// 		if (i === 3) return
// 	}
// 	console.log('Done');
// }


// test();


// function ddoNothing() {};
// console.log(ddoNothing() === undefined);







// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!".
//  В решении вызывать функцию не нужно, программа сделает это за вас.

// P.S. возвращать - это использовать ключевое слово return.

// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

// function sayHello(name) {
// 	return "Привет, " + name + "!"
// }

// console.log(sayHello('Anton') );


// // 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: 
// // одно на 1 меньше, сам аргумент, и число на 1 больше.

// // Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

// function returnNeighboringNumbers(num) {
// 	let arr = [];
	
// 	for (let i = 0; i < 3; i++) {
// 		switch (i) {
// 			case 0: 
// 				arr[i] = num - 1;
// 				break;
// 			case 1: 
// 				arr[i] = num;
// 				break;
// 			case 2:
// 				arr[i] = num + 1;
// 				break; 
// 		}
// 	}

// 	return arr;
//  }

//  console.log(returnNeighboringNumbers(5) );


//  Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа.
//   Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). 
// 	Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". 
// 	После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. 
// Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. 
// Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, 
// которая и нужна для работы в 95% случае на фронтенде.


// Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа.
//   Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). 
// 	Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". 
// 	После последнего числа их не должно быть.
// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)


// function getMathResult(base, incris) { 
// 	let res = '';

// 	if (typeof incris != 'number' || incris <= 0) {
// 		return base
// 	} 

// 	for (let i = 1; i <= incris; i++) {
	
// 		if (i < incris) {
// 			res += base * i + '---';
// 		} else if (i === incris) {
// 			res += base * i;
// 		}

// 	} 

// 	return res;
// }

// console.log(getMathResult(5, 3) );
// console.log(getMathResult(4, 10) );
// console.log(getMathResult(5, 10) );
// console.log(getMathResult(6, 10) );

