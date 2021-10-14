//  простые методы массива
//  push, pop, shift, unshift

// let arr = [1, 2, 3]
// arr.push(4); //добаляет в конец
// console.log(arr);
// let num = arr.pop();// вырезает элемент с конца
// console.log(arr);
// console.log(num)

// let arr = ["Kyrgyzstan","Russia","Uzbekistan"]
// arr.shift("China"); //добавляет начало
// console.log(arr);
// let country = arr.shift();//вырезает один элемент с начало массива
// console.log(arr);
// console.log(country)


// splice, slice
// let nums = [22, 40, 38, 50]
// let res = nums.splice(0, 1, "1")
// console.log(nums)
// console.log(res)
//массив splice (  с какого начать ,сколько вырезать,что вставить)

// let arr = [100, 31, 47, 68]
// let num = arr.slice(1, 2);
// console.log(arr);
// console.log(num);//принимает толбко два оргумента
//массив.slice(  с какого начать, по какой (не включительно))

// let arr = [ 1, 2, 3, 4, 5]
// // arr.reverse()
// let str = arr.join("*");// из массива делает строку//можно все вставить (__)
// console.log(arr);       
// console.log(str);
// let newArr = str.split("2");// из строки делает массив
// console.log(newArr);



// let nums = [1, 2, 30, 11, 101, 22, 86]
// nums.sort((a,b) => a-b);  // отсортировать 
// console.log(nums)

// concat

// let res1 = [1, 2, 3];
// let res2 = [4, 5, 6];

// let result = res1.concat(res2, ["str", "boolean"]);//обьединяет два массива
// console.log(result);


// let myArray = ["Kubat","Malik", "Ainura", "Maksat", "Islam","Rasha"]
// for(let i = 0; i < myArray.length; i++){
//     myArray.splice(i, 1, [myArray[i], i]);
    
// }
// console.log(myArray);

// let mixedUserrs = [
//     {
//         role:"admin",
//     },
//     {
//         role:"user",
//     }, 
//     {
//         role:"admin",
//     },
//     {
//         role:"admin",
//     },
//     {
//         role: "user",
//     },
//     {
//         role: "user",
//     }
// ];
// let admins = [];
// let users = [0];
// for (let i = 0; i < mixedUserrs.length; i++) {
//    if (mixedUserrs[i]. role  === "admins"){
//        admins.push(mixedUserrs[i]);
//    } else if(mixedUserrs [i].role === "users"){
//        users.push(mixedUserrs[i]);
//    }
   
// }
// console.log(admins);
// console.log(users);



// let products = [
//     { size: "s" }, 
//     { size: "s" },
//     { size: "s" },
//     { size: "s" },
//     { size: "l" },
//     { size: "l" },
//     { size: "l" },
//     { size: "l" },
//     { size: "m" },
//     { size: "m" },
    
// ];
// let sSizes = [];
// let lSizes = [];
// let mSizes = [];
// console.log(products);
// for(let i = 0; i < products.length; i++) {
//     if (products[i].size === "s"){
//         sSizes.push(products[i]);
//     } else if (products[i].size === "l"){
//         lSizes.push(products[i]);
//     } else if (products[i].size === "m"){
//         mSizes.push(products[i]);
//     }
    
// }
// console.log(sSizes);
// console.log(lSizes);
// console.log(mSizes);

// function checkTask(num1, num2) {
//     if (num1 <= 1 && num2 >= 3) {
//         console.log("Верно", "Неверно");
//     }
// }
// console.log(checkTask(1, 3));

// let name = prompt("имя");
// let surName = prompt("фамилия");
// let age = +prompt ("возраст");

// console.log(name && surName && age ? `Your name: ${name}, age: ${age}, surName: ${surName}` : `Введите: ${name ? " " : 'name'} ${surName ? " ": 'surName'}`)

// let admin = prompt("tnter your login");
// if(login === "admin"){
//     let password = prompt ("enter your password");
//     if (password === "password"){
//         alert("Welcome, admin!");
//   }else {
//       alert("wrong passwort");
//   }
// } else {
//     alert("unknown user") // не правильно написала (синьаксис )
// }


// let arr1 = [12, 45, 67, 56];
// let arr2 = [2, 105, 10, 122];
// let sum = []
// for(let i = 1; i < arr1.length; i++) {
//     sum[i] = arr1[i] + arr2[i];
// }
// console.log(sum);  //добавляем 12+2=14.45+105=150 
 

//является ли введеное слово палиндромом! 
//(используя методом массива)(азиза-азиза)







