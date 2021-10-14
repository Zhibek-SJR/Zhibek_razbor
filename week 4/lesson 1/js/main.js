// функции, области видимости , хойстинг
// 1)function declaration
// 2)function expression
// 3)function

// function declaration
// function func() {
//     console.log ("Hi");
// }

// func();
// function sayHello() {
//     alert("Hello");
// }
// sayHello();
// // обьявлением функции 
// function имя(параметры) {
//     ...тело...
// }
// вызов функции
//имя

// function sumTwoNumbers(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }
// let sum = sumTwoNumbers(10, 20);

// console.log(sum)

// function firstElem(arr) {
//     let elem = arr.shift();
//     return elem;
// }
// let array = [1, 2, 3, 4, 5];
// let result = firstElem(array);
// console.log (result);

// mulTwoNums(10, 20);
// function mulTwoNums(arg1, arg2 = 1) {
//     console.log(arg1, arg2);
//     console.log(arg1 * arg2);
// }
// mulTwoNums(2);
// console.log(num);
// var num = 20;
// let str = "20";
// console.log (str);

// let message = "Hello World";
// function showMessage(message) {
//     console.log(message);
// }
// showMessage(message);

// let arr = ["str"]
// function array(arr) { // здесь функция принимает аргументы
//     console.log(arr);
// }
// array(SJ13) // здесь передаются аргументы функции
// Если функция принимает аргументы, то аргументы нужно передавать 


// let numbers = [100, 200, 300];

// function lastElemOfArray(array) {
//     let lastElem = numbers.pop();
//     console.log(lastElem);
// }
// lastElemOfArray(numbers);

// let boolValues = [true, false, true];
// lastElemOfArray(boolValues);


// 2)function expression     //функция выражения 
// let str = "Hello World";
// let sayHello = function (arg) {
//    console.log(arg); 
// };
// sayHello("str");
// let obj = {
//     title: "Makers",
// };
// function showTitle(arg1) {
//     document.write(`<h>${arg1.title}</h>`)
// }
// showTitle(obj);
// let school = {
//     title: " Gazprom",
// };
// showTitle(school);



// let num1 = 50;
// function func() {
//     let num1 = 20;  //локальная видимость
//     console.log(num1); // окальная видимость
// }
// console.log(num1);
// func();
// // тело функции это локальная область видимости




// Напишите функцию pow(x,n) которая возвращает x в степени n
// function pow(x, n) {
//     let result = x ** n;
//     return result;
// }
// let result = pow(2, 3);
// console.log(result);



//сделайте функцию, которая принимает параметром число от 1 до 7,а возвращает день недели на русском языке 

// function a(num) {
//     switch(num){
//     case 1 : return 'Пн';
//     case 2 : return 'Вт';
//     case 3 : return 'Ср';
//     case 4 : return 'Чт';
//     case 5 : return 'Пт';
//     case 6 : return 'Сб';
//     case 7 : return 'Вс';
//     }
// }
// сonsole.log(a(4));


// function n(a, b) {
//     if( a === b){
//         let result = (a + b) * 3
//         return result;    
//     }else {
//         let result = a + b
//         return result;
//     }
// }
// console.log(n( 2, 2));

// let names = ["Maksat", "Vladimer", "Nurlan","Aidar"];

// function checkUser(arr, name) {
//     for (let i = 0; i < arr.lehgth; i++) {
//         let check = arr[i];
//         if(check === name) {
//             return "Да";
//         }
//     }
// }
// console.log(checkUser(names, "Aidar"));