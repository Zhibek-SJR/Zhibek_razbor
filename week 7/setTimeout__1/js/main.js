//! Синхронность и асинхронность,Promise,запросы

// ! setTimeout позволяет вызвать фунцию только один раз через определенное время
// setTimeout(() =>{
//     console.log("Zero");
// }, 0);

// console.log("first");
// console.log("second");
// console.log("third");

//! setInterval позволяет вызвать фунцию регулярно, через определенный интервал времени 
// let id = setInterval(() => {
//     console.log("Hi");
// }, 3000);
// setTimeout(()=>{
//     clearInterval(id);
// } ,5000)
// // clearInterval(id);

//! Promise - это объект, у которого есть 3 сщстояния:
//! pending- щжидание,
//! fulfilled- успешное выполнение(resolve)
//! rejected- выполненно сошибкой

//! Методы promise:
//! then - отловить успешный результат
//! catch - отловить результат с ошибкой
//! finally - отловить вне зависимости  результата

// const promise = new Promise((resolve, rejected) =>{
//     let age = prompt("Enter age")
//     if(age > 25) {
//         resolve("TRUE");
//     }else {
//         rejected("FALSE");
//     }
// });

// promise
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })
// .finally(() =>{
//     console.log("Итог");
// });

 //! Запросы

 //! XMLHttpRequest
//  let xhr = new XMLHttpRequest();
//  xhr.open("Get", "https://pokeapi.co/api/v2/pokemon");
//  xhr.send();
//  xhr.onload = function(){
//      let response =  JSON.parse(xhr.response);
//      console.log(response);
//  }



//! Fetch

// let API = "https://pokeapi.co/api/v2/pokemon";
// fetch(API).then((response) => response.json())
// .catch((err) =>console.log(err))
// .then((data) => {
//     console.log(data);
// })

let tbody = $("tbody");
let prev = $(".prev");
let next = $(".next");
let preloader = $(".preloader")
let API = "https://swapi.dev/api/people"
 
function render(url) {
    preloader.css("display", "flex")
   fetch(url)
     .then((res) => res.json())
     .then((data) => {
       console.log(data);
        preloader.css("display", "none");
       tbody.html("");
       data.results.forEach((item) =>{
           tbody.append(`
             <tr>
                <td>${item.name}</td>
                <td>${item.eye_color}</td>
                <td>${item.mass}</td>
                <td>${item.height}</td>
             </tr>
           `);
       });
       if(!data.previous){
           prev.addClass("disabled");
       }else {
           prev.removeClass("disabled");
           prev.attr("id", data.previous);
       }
       
       if(!data.next){
           next.addClass("disabled")
       }
       else {
           next.removeClass("disabled");
           next.attr("id", data.next);

       }
   });
   }
   next.on('click', (e) =>{
      let url = e.currentTarget.id;
      render(url);
   });
   prev.on('click', (e) => {
    let url = e.currentTarget.id
    render(url)
   })
render(API);






















