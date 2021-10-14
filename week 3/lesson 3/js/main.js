//  while, do while

// let arr = [1, 2, 3, 4, 5]
// console.log(arr[])

// let i = 0
// while (i < arr.length) {
//     console.log(arr[i])
//     i++
// }

// let number = 1
// while (number <= 100) {
//     if(number % 2 !== 0) {
//         console.log(number)
//     }
//     number++
// }

// let i = 50
// do {
//     console.log(i, "сработать один раз по-любому")
// }while (i < 40)

//  FOR   в разы проще
// for(let i = 0; i < 20; i++) {
//     console.log(i)
// }

// for (let i = 0; i < arr.length; i++){
//     if (let arr = ("Arslan", "Beksultan", "Akai")
// arr[i] === "Beksultan") {
//     alert(arr[i])
//     continue;
//     }
//     console.log('код ниже')
// }



// let users = [
//     {
//         name: "Askar"
//     },
//     {
//         name:"Vladimer"
//     },
//     {
//         name:"Erlan"
//     }, 
//     {
//         name:"Sanzhar"
//     }
// ]

// for (let i = 0; i < users.length; i++) {
//     document.write('<p>имя: ${users[i].name}</p>')
// }

// console.log(users)

//  FOR OF только для массива, FOR IN

// for (let value of users) {
//     console.log(value)
// }

// for (let value in users) {
//     console.log(users[value])
// }

// let user = {
//     name: "Atai"
// }

//  for (let key in user)  {
//      console.log(key["name"])
//  }
//  for (let value of user) {
//      console.log(value)
//  }

//    С помощью for in можно переберать и обьекты и массивы

//    С помощью for of можно перебирать только массивы


// let number = 5
// console.log(number++)
// console.log(number--)
// console.log(number)


//  дан массив [true, 7, 2, 'Hello]. Найти сумму чисел в массиве (толтко элементов числовых типов элементов)

// let arr = [true, 7, 2, 'Hello', NaN]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number' && arr[i].toString() !== "NaN") {
//          sum += arr[i]
//     }
// }
// console.log(sum)

// let arr = [1, 2, -3, 0, 1, -6, 9, 0, 0]
// let positive = 0
// let zero = 0
// let negative =0
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] ===0) {
//         zero++
//     }
//     else if (arr[i] > 0){
//         positive++
//     }
//     else if (arr[i] < 0){
//         negative++
//     }
// }
// console.log(zero, positive,negative)

// Напишите программу, где пользователь вводит любое целое положительное число.А программа суммирует все числа от 1 до введенного пользователем числа.

//     Например:

// если пользователь введет число 3. Программа должна посчитать сумму чисел от 1 до 3, то есть 1 + 2 + 3 и выдать ответ 6.

// если пользователь введет число 5. Программа должна посчитать сумму чисел от 1 до 5, то есть 1 + 2 + 3 + 4 + 5 и выдать ответ 15.