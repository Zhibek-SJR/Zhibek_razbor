// замыкание

// function init(){
//     let name = "Adilet";
//     return function(){
//         console.log(name);
//     };

// }
// let showName = init();
// console.log(showName);


// function words(arg1){
//      return function(arg2){
//          console.log(arg1, arg2);
//      }
// }

// let hello = words("Hello");
// hello ("Word");
// hello ("Ruslan");

// function sum(num1) {
//     console.log(num1); 
//     return function(num2) {
//         console.log(num1, num2)
//     }
// }
// let sum10 = sum(10);
// sum10(20);
// sum(20)(40);
// замыкание - это дочерняя функция замкнута на лексическом значении родительской фенкции .


//рекурсия
// вызывает саму себя
// let result = 0
// function toSum(num){
//    for(let i = num; i >= 1; i--) {
//        result += i;
//    }
// }
// toSum(5);
// console.log(result);


// function toSum(num){
//     if (num <= 1) return num; //точка выхода
//     return num + toSum(num - 1);//вызываем функцию (саму себя)
// }
// let result = toSum(5);
// console.log(result);

// function finder(arr){
//     if (arr.length < 1) return 0;
//     let currentNum = arr.splice(0, 1);
//     console.log(arr);
//     return currentNum[0] ===1 ? 1 + finder(arr) : finder(arr)
// }
// let count = finder([1, 2, 22, 4, 1]);
// console.log(count);


// function count(arr){
//     if (arr.length < 1) return 0;
//     let findNum = arr.splice(0, 1);
//     return  typeof findNum[0] === "number" ? findNum[0] + count(arr) : count(arr);
// }
// let sum = count([true, 7, 2, "Hello"]);
// console.log(sum);





// function fib(num) { //Фибоначчи
//     if (num > 1) {
//         return fib(num - 1) + fib(num - 2);
//     }
//     return num;
// }
// console.log(fib(9));

// function sayHello() {
//     const message = 'Привет, ';
//     return function (name) {
//         return message + name + '!';
//     }
// }

// const result = sayHello(); // ƒ (name) { return message + name + '!'; }
// console.log(result('Вася')); // "Привет, Вася!"


// Задание №15
// Необходимо создать объект, который будет
// представлять из себя лифт. У него
// должны быть методы:
// ● printFloor - печатает текущий этаж, на котором
// находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое
// значение от 1 до 16 - переместиться на
// определенный этаж.
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж
// (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Для наглядности, вызовите метод toFloor несколько раз в программе.
// ● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
// перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.


let elevator = {
    floor: 1, 
    minFloor: 1,
    maxFloor: 16,
    printFloor: function(){
        console.log(`Вы находитесь на ${this.floor} этаже`);
    },
    upOneFloor: function() {
        if (this.floor < this.maxFloor) {
            this.floor++;
            this.printFloor();
            
        }else {
            console.log(`Вы не  можете подняться выше ${this.maxFloor}`);
        }
    },
    downOneFloor: function () {
        if (this.floor < this.minFloor) {
            this.floor--;
            this.printFloor();

        } else {
            console.log(`Вы не  можете спуститься ниже ${this.minFloor} этаже`);
        }

},
