// Поврхностное и глубокоое копирование обьектов
// let user = {
//     name: "Aisultan",
//     age: 20,
//     languages: {
//         english:" 2 level",
//         french: "3 level",
//     }
// };
// let newUser = user;
// newUser.name = "Aibek";
// // let newUser = Object.assign({}, user);  //поверхностное копирование//
// let newUser = {...user};                               //поверхностное копирование
// newUser.name = "Aibek"
// newUser.languages.english = " 6 level"
// console.log(user);
// console.log(newUser);

// let product = {
//     title: " T-Shirt",
//     price: {
//         s: 3000,
//         m: 4000,
//         l:2000,
//     },
// };
// let newProduct =  JSON.parse(JSON.stringify(product));//глубокое копирование
// newProduct.price.s = 10000;
// console.log(product);
// console.log(newProduct);                   //JSON  толькот два способа 1)springify, 2)price
// // let str = JSON.stringify(product);
// let obj = JSON.parse(str);
// console.log(obj);
// console.log(str);
//

// Деструктуризация

// let student ={
//     name: "Melis",
//     lastName: "Artykbaev",
// };
// let name = student.name;
// let lastName = student.lastName;
// let name = " Sanzhar"
// let {name: studentName, lastName} = student;
// console.log(studentName, lastName);

// let arr = ["true", 10, null, "str", 77, false];
// // let boolean = arr[0];
// let [boolean, , type, ...rest] = arr;  //let [boolean, , type, , ,last] = arr;
// let [first, second] = rest;             //console.log(last);
// console.log(boolean, type, rest);
// console.log(first, second);

// let obj = {
//     name: "Market Place",
//     frameworks: ["React", "Django API"],
//     versions: {
//         legacy: [2011, 2012, 2013],
//     },
// };
// // let{frameworks:[frontEndFramework],
// // } = obj;
// // console.log(frontEndFramework);
// let { versions: {
//     legacy: [, middleYear]
// }
// } = obj;
// console.log(middleYear);
// let {name: projectName} = obj;

// let product = {
//     // title: "Pencil",
//     price: 100,

// };
// let { title = "Default title"} = product; // значение по умолчанию
// console.log(title);

// Дан объект {name: 'John', 'age': '22', }.
// Запишите соответствующие значения в переменные name, и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало введенное значение с prompt.

// let user = {
//     name: "John",
//     age: "22",
// };
// let  { name = prompt("Enter your name"), age = +prompt() } = user;

// console.log(name, age);

// function showNameAndPhone({name,phone}) {

//     console.log(name, phone);
// }
// let obj = {
//     name: "Shergasy",
//     phone: 777223344,
// };
// showNameAndPhone(obj);

// function func(fiirst, second) {
// console.log(fiirst, second);
// arg.forEach((item) =>{
//     console.log(item);
//     // });
// }
// func([1, 2, 3, 4, 5,])

// function showUser({ name = "Iskhak", lastName = "Boobekov", age = 24}){

//    console.log(name, lastName, age);
// }
// let obj =  {
//     name: "Iskhak",
//     lastName: "Boobekov",
//     age: 24,
// };
// showUser(obj);


//Вам дан объект с информацией о книге.С помощью деструктуризации выведите
// серийный номер книжки ISBN в консоль

const courseCatalogMetadata = [
  {
    title: "The Hobbit, or There and Back Again",
    description:
      "The hobbit tells a fantastic story of adventure, danger, friendship, and courage",
    texts: [
      {
        author: "J. R. R. Tolkien",
        price: 120,
        ISBN: "912-6-44-578441-0",
      },
    ],
  },
];
let [
  {
    texts: [{ ISBN }],
  },
] = courseCatalogMetadata;
console.log(ISBN);
