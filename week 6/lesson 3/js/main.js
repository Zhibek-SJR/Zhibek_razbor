//! jQuery

// let allElems = $("*");
// let allElems = jQuery("*");
// console.log("allElement");

  

//! tagName
// let h1 = $("h1");
// console.log(h1);
// h1.css("fontSize","24px");
// h1.css("fontSize","red");

// //! className
// let month = $('.october')
// console.log("month");


//! Native JS
// let liTags = document.querySelectorAll ("li");
// liTags.forEach((item) => {
//     item.style.color = "blue"
// })


// ! jQuery  замена $ (сахар)
let liTags = $("li");
liTags.css("color", "blue");
// // let thirdLiTags = $("li:nth-child(3)");// по порядковому номеру
// let thirdLiTags = $("li:eq(2)");//indtx
// thirdLiTags.css("color", "green");
// let first = $("li:first-child");
// first.css("fontWeight","700");
// $("li:last-child").css("fontSize", " 30px")


// let inputs = $("input"); 
// let disabledInput = $("input:disabled");
// console.log(disabledInput);
// let value = disabledInput.val();
// disabledInput.val("Не работает");
// console.log(value);

// let liTags=$("li");
// liTags.addClass("list-item");
// // liTags.toggleClass("list-item");
// // liTags.toggleClass("active");
// // liTags.removeClass("list-item");
// let result = liTags.hasClass("active");
// console.log(result);


let divsWithoutClass =$("div;not(.block)"); //д\з
console.log(divsWithoutClass);


// let paragraph = $(".text");
// // let text = paragraph.text();
// // console.log(text);
// // paragraph.text(paragraph.text() + " Hello")
// paragraph.html("<strong>JSFS-13</strong>")



// let div = $('#users');
// let users = [
//     {
//         name: "W",
//         age:1,
//     },
//     {
//         name: "N",
//         age:2,
//     },
//      {
//         name: "D",
//         age:3,
//     }
    

// ];
// users.forEach(item => {
//     div.append(`                //! в сроке добавлять теги
//     <p>Имя: ${item.name}<br> Возраст: ${item.age}</p> //! <br> в один столбец
//     <strong>14:55</strong>
//     `);
// });

// //! вытащить ссылку google.com 
// let google = $('a[href="google.com"]');//! []-обращаемся  к атребуту 
// console.log(google);

//! вытащить <p></p> потенять на время
// let p = $("p");
// p.text(new Date());//!Wed Oct 13 2021 15:15:36 GMT+0600 


// let google =$("a:first");
// let href = google.attr("href","amazon.com"); //! attr ЗАМЕНЯЕТ И ДОБАВЛЯЕТ
// google.removeAttr("href");
// google.attr("id", "global"); //! удаляет атрибут
// console.log(href);

// let href = google.prop("href"); //! prop 
// console.log(href);




// let liTags = $('li');
// liTags.each((index,element) =>{  //! this  в => функции не работает
//     console.log(index, element);
//     if(index % 2 !==0 ){                           //!д.з.
//         $(element).css("background","red");
//     }
// });