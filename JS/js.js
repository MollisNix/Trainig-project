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
// // //       console.log( data[i] + ' - done' )
// // //      }
// // //     }
// // //   }
   
// // //   // Не трогаем
// // //   return data;
// // // }

// // // // Место для третьей задачи
// // // function thirdTask() {
// // //   // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// // //   const data = [5, 10, 'Shopping', 20, 'Homework'];
// // //   const result = [];

// // //  for (let i = 4; i >=0; i--) {
// // //     result.push(data[i]);
// // //  }

// // //   return result;
// // // }



// // //      *
// // //     ***
// // //    *****
// // //   *******
// // //  *********
// // // ***********


// // // const lines = 5;
// // // let result = '';

// // // for (let i = 0; i <= 6; i++) {

// // //   for (let j = lines; j >= i; j-- ) {
// // //     result += ' ';
// // //   }
  
// // //   for (let k = 0; k <= i; k++) {
// // //     result += '*';
// // //   }
// // //   result += '\n';
// // // }

// // // console.log(result);
// // let num = 20;

// // function showFirstMessage(text) {
// //     console.log(text);
// //      let num = 10;
// //      console.log(num);
// // }

// // showFirstMessage('Hello World');
// // console.log(num);


// //  function ret() {
// //     let num = 50;

// // /////////////////////////////////
// //     return num;
// //  }

// //  const anotherNum = ret();
// //  console.log(anotherNum);



// //  const logger = function() {
// //     console.log('Hello');
// //  };


// //  logger();


// //  const calc = (a, b) => {return a + b};



// // const usdCurr = 28;
// // const eurCurr = 32;
// // const uahCurr = 40;
// // const discount = 0.9;



// // function convert (amount, curr) {
// // 	return 	curr * amount;
// // }


// // function promotion (result) {
// // 	console.log(result * discount);
// // }

// // const res = convert(500, usdCurr);
// // promotion(res); 


// // function test() {
// // 	for (let i = 0; i < 5; i++ ) {
// // 		console.log(i);
// // 		if (i === 3) return
// // 	}
// // 	console.log('Done');
// // }


// // test();


// // function ddoNothing() {};
// // console.log(ddoNothing() === undefined);







// // 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// // Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!".
// //  В решении вызывать функцию не нужно, программа сделает это за вас.

// // P.S. возвращать - это использовать ключевое слово return.

// // P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

// // function sayHello(name) {
// // 	return "Привет, " + name + "!"
// // }

// // console.log(sayHello('Anton') );


// // // 2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: 
// // // одно на 1 меньше, сам аргумент, и число на 1 больше.

// // // Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

// // function returnNeighboringNumbers(num) {
// // 	let arr = [];
	
// // 	for (let i = 0; i < 3; i++) {
// // 		switch (i) {
// // 			case 0: 
// // 				arr[i] = num - 1;
// // 				break;
// // 			case 1: 
// // 				arr[i] = num;
// // 				break;
// // 			case 2:
// // 				arr[i] = num + 1;
// // 				break; 
// // 		}
// // 	}

// // 	return arr;
// //  }

// //  console.log(returnNeighboringNumbers(5) );


// //  Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа.
// //   Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). 
// // 	Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". 
// // 	После последнего числа их не должно быть.

// // Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// // Примеры:

// // Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// // Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// // Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// // Вызов функции getMathResult(10, '5') даст ответ 10

// // Вызов функции getMathResult(10, 0) даст ответ 10

// // Вызов функции getMathResult(20, -5) даст ответ 20

// // Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. 
// // Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. 
// // Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, 
// // которая и нужна для работы в 95% случае на фронтенде.


// // Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа.
// //   Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). 
// // 	Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". 
// // 	После последнего числа их не должно быть.
// // Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)


// // function getMathResult(base, incris) { 
// // 	let res = '';

// // 	if (typeof incris != 'number' || incris <= 0) {
// // 		return base
// // 	} 

// // 	for (let i = 1; i <= incris; i++) {
	
// // 		if (i < incris) {
// // 			res += base * i + '---';
// // 		} else if (i === incris) {
// // 			res += base * i;
// // 		}

// // 	} 

// // 	return res;
// // }

// // console.log(getMathResult(5, 3) );
// // console.log(getMathResult(4, 10) );
// // console.log(getMathResult(5, 10) );
// // console.log(getMathResult(6, 10) );


// // const str = 'test';

// // // console.log(str.toLowerCase() );
// // console.log(str);

// // const fruit = 'Some fruit';

// // console.log(fruit.indexOf('q'));

// // const logg = 'Hello world';

// // // console.log(logg.slice(6, 10) );

// // console.log(logg.substring(6, 11) );
// // console.log(logg.substr(6, 5) );



// // const num = 12.2;
// // console.log(Math.round(num) );

// // const test = '12.2px';
// // console.log(parseInt(test) );
// // console.log(parseFloat(test) );







// // Создайте функцию, которая будет вычислять объем и 
// // площадь полной поверхности куба 
// // (тоже базовая математика, иногда используется в создании анимаций). 
// // Эта функция принимает в себя целое число со значением длины ребра куба.
// //  Ответ выведите в формате строки, который изображен в примерах.

// // Если в функцию попал неправильный аргумент или 
// // вычислить значения невозможно - 
// // вернуть строку "При вычислении произошла ошибка"

// // Примеры:

// // calculateVolumeAndArea(5)  => 'Объем куба: 125, площадь всей поверхности: 150'

// // calculateVolumeAndArea(15)  => 'Объем куба: 3375, площадь всей поверхности: 1350'

// // calculateVolumeAndArea(15.5)  => 'При вычислении произошла ошибка'

// // calculateVolumeAndArea('15')  => 'При вычислении произошла ошибка'

// // calculateVolumeAndArea(-15)  => 'При вычислении произошла ошибка'

// function calculateVolumeAndArea(value) {
//     let v = value,
//         s = 6,
//         result;

//         if (Number.isInteger(value) != true || typeof(value) !== 'number' || Math.sign(value) === -1) {
//             return 'При вычислении произошла ошибка';
//         } else {
//             return result = `Объем куба: ${v * v * v}, площадь всей поверхности: ${s * (v * v)}`
//         }


// }

// console.log(calculateVolumeAndArea(5) );





// // 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.

// // Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:


// // Функция принимает только целое число от 1 до 36.

// // Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

// // "Ошибка. Проверьте правильность введенного номера места"

// // Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

// // Пример:

// // getCoupeNumber(33)  => 9

// // getCoupeNumber(7)  => 2

// // getCoupeNumber(300)  => "Таких мест в вагоне не существует"

// // getCoupeNumber(0)  => "Таких мест в вагоне не существует"

// // getCoupeNumber(7.7)  => "Ошибка. Проверьте правильность введенного номера места"

// // getCoupeNumber(-10)  => "Ошибка. Проверьте правильность введенного номера места"

// // getCoupeNumber('Hello')  => "Ошибка. Проверьте правильность введенного номера места"

// // Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и визуально на сайтах. Конечно, там будет куда больше условий,
// //  но смысл остается таким же.



// function getCoupeNumber(value) {
//     let result;
    
//     if (Number.isInteger(value) != true || typeof (value) !== 'number' || Math.sign(value) === -1 ) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//        } else if (value === 0 || value > 36) {
//             return "Таких мест в вагоне не существует";
//     }

//    if (value > 0 && value <=4) {
//      return result = 1;
//    } else if (value > 4 && value <= 8) {
//     return result = 2;
//    } else if (value > 8 && value <= 12) {
//     return result = 3;
//    } else if (value > 12 && value <= 16) {
//     return result = 4;
//    } else if (value > 16 && value <= 20) {
//     return result = 5;
//    } else if (value > 20 && value <= 24) {
//     return result = 6;
//    } else if (value > 24 && value <= 28) {
//     return result = 7;
//    } else if (value > 28 && value <= 32) {
//     return result = 8;
//    } else if (value > 32 && value <= 36) {
//     return result = 9;
//    }

   
// }



// console.log(getCoupeNumber(44) );


// // {
// //     let value = 1;
// //     if (Number.isInteger(value) != true) {
// //         return console.log('HAHAHAH');
// //     }
// // }




// function getTimeFromMinutes(minutesTotal) {
//     if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal) ) {
//         return "Ошибка, проверьте данные";
//     }


//     const hours = Math.floor(minutesTotal / 60);
//     const minutes = minutesTotal % 60;

//     let hourString = '';

//     switch (hours) {
//         case 0: 
//             hourString = 'часов';
//             break;
//         case 1: 
//             hourString = 'час';
//             break;
//         case 2:
//         case 3:
//         case 4:
//             hourString = 'часа';
//             break;
//         default: 
//             hourString = 'часов';   
//     }

//     return `Это ${hours} ${hourString} и ${minutes} минут`
// }

// console.log(getTimeFromMinutes(20) );


// function findMaxNumber(a, b, c, d) {
//     if (typeof a  !== 'number' || typeof b  !== 'number' || typeof c  !== 'number' || typeof d !== 'number') {
//         return 0
//     }

//     return Math.max(a, b, c, d)
// }

// console.log(findMaxNumber(1, 'ff', 3, 4) );



// function first() {
//     //Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500)
// }

// function second() {
//     console.log(2);
// }

// first();
// second();


// function learnJS(lang, callback) {
//     console.log(`Im learing: ${lang}`);
//     callback();
// }


// function done() {
//     console.log('I finish this lesson');
// }

// learnJS('JavaScript', done);