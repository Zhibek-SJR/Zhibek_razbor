//Регулярные выражения
// Есть два способа регулярнонго выражения

// const regexp1 = /coding/; // 1 способ
// const regexp2 = new RegExp("coding");// 1 способ
// const str = "code is easy";
// let result = str.match(regexp1) || [];
// console.log(result);

//  if (result.length > 0){
//      console.log("Есть");
//  }else{
//      console.log("Netu");
//  }


//Флаги
// i игнарирует регистр
// g с этим флагом ПОИСК ищет все совпадения, а без него - только первое

//  let regexp = /code/gi;
//  let str = "code, bad Code";
//  let result = str.match(regexp);
//  console.log(result);    // Метод строки match ищет и возвращает массив, если не найдено,то NULL

// let str = " Заботайте братьяб работайте";
// let regexp = new RegExp("работайте", "gi");
// let result = str.match(regexp);
// console.log(result);



// Метод строки replace ищет совпадения и заменяет их
 
// let str = "Требуется миддл разработчик";
// let regexp = /миддл/;
// let result = str.replace("regexp, джуниор");
// console.log(result);


// Метод рег. выражение test проверяетЭ есть ли хоть одно совпадение, если да, то возвр. trueЭ иначе false

// let str = " We can"
// let regexp = /We/i;
// let result = regexp.test(str);
// console.log(result)



//  \d цифра от 0-9
// \s пробелы
// \w 
//
//
// \W символ, кроме букв латинского алфавита и не цифра
// \. любой символ

// let str = 'code is easy';
// let regexp = /\w\w\w\w\w.\w\w\s\w\w\w\w/;
// let result = str.match(regexp);
// console.log(result);



// Якоря
// ^  -начало сроки
//  $ -конец сроки

// let time = "20:12"; //валидация-проверка
// let regexp = /^\d\d:\d\d$/;
// let result = regexp.test(time);
// console.log(result)


// // НАБОРЫ []

// let str1 = 'mad';
// let str2 = 'sad';
// let regexp = /[ms]ad/;    //mad  или sad
// let result = str1.match(regexp);
// console.log(result)



// ДИАПАЗОНЫ

// let str = '123456789';
// let regexp = /[1-7]/g;
// let result = str.match(regexp);
// console.log(result);


//[0-9]
//[a-z]
//[A-Z] \W одно и то же
//[а-я]
//[А-Я]

//Ислючения
// let regexp = /[^aeiou]/  // все кроме этих букв


// КВАНТИФИКАТОРЫ

//{т} количество

// let numbers = "12 555 3456"
// // let regexp = /\d{0,1/g; // /\d\d\d/  так тоже можно
// // let regexp = /\d+/
// //  +  означает один или более символов
// let regexp = /\d?/
// let result = numbers.match(regexp);
// console.log(result);

// let string = "color or colour";
// let regexp = /colou?r/g;
// let result = string.match(regexp);
// console.log(result)



//  СКОБОЧНЫЕ ГРУППЫ 
// mail.ru
// mail.gmail.ru

// let string = 'mail,gmail.gmail.ru';
// let regexp = /\w+\.)+\w+/g;
// let result = string.match(regexp)
// console.log(result)

// let str = "brown, red, blue, black";
// let regexp = /[aeou]/gi;
// let result = str.match(regexp)
// console.log(result.length)

// let str = "5 apples and 5 oranges";
// let regexp = /5/
// let newStr = str.replace(regexp, "пять");
// console.log(newStr);

  
//АЛЬТЕРНАЦИЯ (или) '|'
// let str = " I know Java, Python, Flutter, JavaScript, Dart";
// let regexp = /Java(Script)?|Python|Flutter|Dart/g
// let result = str.match(regexp);
// console.log(result)



// writeHtml("Hello, I am progger,ttttt")
// function writeHtml(text){
//     console.log(text);
// }

// writeHtml("Good moning");

// let sum = function (num1, num2){
//     console.log(num1, num2);
//     let result = num1 + num2;
//     console.log(result);
// };
// sum(7, 43);

// let multy = (num1,  num2, num3) => {
//     console.log(num1, num2, num3);
//     let result = num1* num2 *num3;  // лучше написать так
//     return result;
// }
// let newNum = multy(5, 10, 2);
// console.log(newNum);


// let multy = (num1, num2, num3) => num1 * num2 * num3; 
// let result = multy(2, 3, 4);
// console.log(result);       //тежелее понять, но коротко


// function perimetr(a, b) {
//     return ( a +b) * 2;        // как добавить число 7
// }
// let result = perimetr(5, 10) +7;
// console.log(result);


// function func(arg1, framework){
//   console.log(arg1);
//   return function(arg2){
//     //   console.log("Язык програмирования" + arg1+ framework + " и " + arg2);
//       console.log(`Язык програмирования ${arg1} ${framework} и ${arg2}`);
//   }

// }
// let newFunc = func(" Java", "  Mobile");
// newFunc("Python");
// newFunc("C++");


//  5! = 1*2*3*4*5

// function fact(num) {
//     if( num <= 1) return 1;
//     return num * fact( num - 1);   //фактериал рекурсии
// }
// console.log(fact(5));

// let product = {
//     title: "Adidas ball",
//     size: 4,
//     price: 100,
//     getSize() {
//         console.log(this.size);
//     },
//     setSize(newSize) {
//         this.size = newSize;
//     },
//     getPrice:() => {
//       console.log(this);
//     },
//     setTitle(newTitle){
//         this.title = newTitle;
//     }
// };
// console.log(product);
// product.getSize();
// product.setSize(6);
// console.log(product);
// product.getPrice();
// product.getTitle("Nike");
// console.log(product)



// let elevator = {
//     minFloor: 1,
//     maxFloor: 16,
//     currentFloor: 1,
//     printFloor() {
//         console.log(this.currentFloor);
//     },
//     upOneFloor() {
//      if (this.currentFloor < this.maxFloor){
//          this.currentFloor++;
//          this.printFloor();
//      }else{
//          alert("Вы достигли максимального этажа");
//      }
//     },
//     downOneFloor(){
//         if(this.currentFloor > this.minFloor) {
//             this.currentFloor--;
//             this.printFloor() 
            
//         }else{
//             alert("Вы достигли минимального этажа");
//         }
//     },
//     toFloor(floor) {
//         if(floor <= 16 && floor >= 1){
//             while(this.currentFloor !== floor) {
//                 this.currentFloor > floor ? this.downOneFloor(): this.upOneFloor();
//             }
//         }
//         else{
//             alert("Такого этажа не существует");
//         }
//     },
    
// };
// elevator.printFloor();
// elevator.upOneFloor();
// elevator.downOneFloor();
// // elevator.downOneFloor();
// elevator.toFloor(14);
// elevator.toFloor(5);


// function generatePassword() {
//     let length = 8;
//     let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789.!@#$%^&*()_+-=";
//     let password = "";
//     let charsetLength = charset.length;
//     for(let i = 0; i < length; i++) {
//         password += charset[Math.ceil(Math.random() * charsetLength)];
        
//     }
//     return password;
// } 
// let password = generatePassword();
// console.log(password);

// let arr = [[[5], 3], 0, 2, ['SJR']];
// function countNumbers(array) {
//     if (array.length === 0) return 0;
//     let total = 0;
//     let first = array.shift();
//     if(Array.isArray(first)) {
//         total += countNumbers(first);

//     } else if (Number.isInteger(first)) {
//         total += 1;
//     }
//     return total + countNumbers(array);
// }
// console.log(countNumbers(arr));


function sum (a,b){
    return

}






















