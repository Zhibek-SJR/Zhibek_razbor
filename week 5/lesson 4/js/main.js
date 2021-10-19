
//  ПОВТОРЕНИЕ

// let arr = [1, 1, 1,2, 3, 3, 4, 5, 5 ];
// let newArr = [];
// arr.forEach((item) => {
//     let check = newArr.filter((elem) => {
//         console.log(" Это элем", elem, "Это item", item);
//         return elem === item;
//     });
//     if(check.length == 0 ) {
//         newArr.push(item);
//     }
// });
// console.log(newArr);

// let nums = [10, 21, 15, 5];
// let newArr = nums.map((item) => item ** 2)  //** возведение в квадрат
// console.log(newArr);

// let student = {
//     name: " Aibek",
//     courses: {
//         Javascript: {
//             price:200,
//             duration: 3
//         },
//         python: {
//             position: "intro",
//             lesson: 1,
//         },
//     },
// };
// let {courses:{python:{position}}} = student;
// console.log(position);

// let user = {
//   name: "Igor",
//   age: 25,
//   friends: ["Iliyas", "Kostyya"],
//   chidren: [
//     { name: "Nicolay", age: 3 },
//     { name: "Petr", age: 10 },
//   ],
//   parents: [
//     { name: "Victor", age: 55 },
//     {
//       name: "Vasilisa",
//       age: 53,
//       friends: {
//         close: ["Shergazy", "Aleksandra"],
//         notClose: [],
//       },
//     },
//   ],
//   jobs: {
//     frontEnd: {
//       language: "JavaScript",
//     },
//     backEnd: {
//       languages: {
//         java: {
//           version: 8,
//           framworks: {
//             spring: {
//               version: 1,
//             },
//           },
//         },
//       },
//     },
//   },
// };
// let {chidren:[, firstChild],
// } = user;
// console.log(firstChild);

// let {frends:{parents:[, firstParents:{friends:[close:[, firstClose]]}]}} =user; //  мой не правильный
// let {parents: [, {friends:{close:[, closeFriend]}}]} = user;
// console.log(closeFriend);

// let {
//   jobs: {
//     backEnd: {
//       languages: {
//         java: {
//           framworks: {
//             spring: { version },
//           },
//         },
//       },
//     },
//   },
// } = user;

// console.log(version);



// calcAge(25);
// function calcAge(age) {
//    let days = age *365;  // Мне 9125 дней(25 лет)
//    console.log(days);
// }

// const calcAge = (age) =>{
//     let days = age * 365;
//     console.log(days);
// }
// calcAge(20);


// const calcSquare = function() {
//     console.log(arguments);
//     let [firstNum, secondNum] = arguments;  //строенный массив
//     console.log(firstNum, secondNum);
// };
// calcSquare(3, 5);

// let arr = [-100, 100, 330, -500];
// let newArr = arr.filter((item, index, array) => {
//     return item < 0;
// });
// console.log(newArr);

// let gamer = {
//     pseudoName: "Tuda-Suda",
//     games: ["Gta", "Dota 2", "CS:GO"],
//     showUserGames() {
//         this.games.forEach((item) =>{
//             console.log(item);
//         });
        
//     },
// };
// gamer.showUserGames();


// let arr = [20, -15, 30];
// let result = arr.reduce((prevValue, currenValue) =>{
//     return prevValue * currenValue;

// }, 1);
// console.log(result);


// function firstFunc() {
//     let str = "";
//     return function(word){
//       return (srt += word);
//     };
// }
// let func = firstFunc();
// console.log(func('Hello')); 
// console.log(func('World'));
// console.log(func('!'));


// let str = "";
// function func(word) {
       
//        return (str += word);
// }

// console.log(func('Hello')); 
// console.log(func('World'));
// console.log(func('!'));
// console.log(func("Coding"));
// console.log(func("is easy"));

// function rec(start) {
//     if(start % 2 !== 0){   // !== не четное, === четное
//         console.log(start);
//     }
//     if (start >= 100) return;
//     rec (start+1);

// }
// rec(1);

// for (let i = 0;i <= 100; i++ ) {    //цикл
//     console.log(i);
// }
// start + 1;
// start ++;
// ++start;
// start = start + 1;
// let num = 1;
// console.log(++num);
// console.log(num++);

// for (let i = 0;i <= 100; i++ ) {   
//     console.log(i);
// }
// let i = 0;
// while (i <= 100) {
//     console.log(i);
//     i ++;
// }

// let i = 101;
// do {
//     console.log(i);
//     i++;
// }while(i <= 100)

// console.log((true && true && false) || true);    //true   

// if(!"") {
//     console.log("TRIUE");    // true

// }

// console.log("10" === 10);  //false

// console.log("abc" - 10);   //  NaN- не число(число и не число)

// console.log(typeof typeof 10);     //string-строка
