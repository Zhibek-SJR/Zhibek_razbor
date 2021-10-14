//Native JS  events

//DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM полностью загружен" );
});

// let btn = document.querySelector("button");

// #2
// btn.onclick = () =>{
//     alert("CLICKED");
// }


//#3  часто пользуется 
// btn.addEventListener("click", () =>{
    // alert("CLICKED");
    // console.log(event);
// })

//online , offline
// window.addEventListener("offline", () =>{
//     console.log("Пропал интернет");
// });

// window.addEventListener("online", () => {
//   console.log("Появился интернет");
// });

//1.mousemove на любое движении мыши
//2.mousedown  при нажатии на мышь
//3.mouseup при отпускании мыши

//1.
// document.addEventListener("mousemove",(e) =>{
//     console.log(e);
// })
 //2.
//  document.addEventListener("mousedown", (e) =>{
//      console.log(e);
//  })

// //3.
// document.addEventListener("mouseup", (e) =>{
//     console.log(e);
// })




//1.input срабатывает на каждое изменение инпута
//2.paste когда вставляем
//3.copy когда копируем

//#1
// let input = document.querySelector("input");  // event событие, у которого есть свойство target
// let h3 = document.querySelector("h3")        // target -произошло событие
// input.addEventListener("input", (e) =>{
//     console.log(e.target.value);
//     h3.innerText = e.target.value;
// })



//#2
// let input = document.querySelector("input"); 
// let h3 = document.querySelector("h3");

// input.addEventListener("paste", (e) => {
//     alert("Нельзя вставлять текст");
// })
 
//#3
// let input = document.querySelector("input");
// let h3 = document.querySelector("h3");

// input.addEventListener("copy", (e) =>{
//      alert("Нельзя скопировать ")
//  })



// resize при изменении размера экрана

// window.addEventListener("resize", (e) =>{
//     console.log(e);
// })





//submit у тега form срабатывает при нажатии на enter
// let input = document.querySelector("input");
// let form = document.querySelector("form");
// let ul = document.querySelector("ul");
// form.addEventListener("submit",(e) =>{
//     e.preventDefault();
//     let text = input.value;
//     let li = document.createElement("li");
//     li.innerText = text;
//     ul.append(li);
//     input.value= ""
// })





//keypress на каждое нажатие клавиши
//keydown при нажатии клавиши
//keyup при отпускании клавиши


//#1
// document.addEventListener("keypress", (e)  =>{
//     console.log(e);
// })

//  //#2
// document.addEventListener("keydown", (e) =>{
//     console.log(e);
// })

// //#3
// document.addEventListener("keyup",(e)=>{
//     console.log(e);
// })


let span = document.querySelector(".first-span");
let btnChangeColor = document.querySelector(".Change-color");
let btnChangeSize = document.querySelector(".Change-size");

btnChangeColor.addEventListener("click", () => {
    // span.style.color = "pink";
    // let red = Math.ceil(Math.random() * 255);
    // let green = Math.ceil(Math.random() * 255);
    // let blue = Math.ceil(Math.random() * 255);
    // span.style.color = `rgb(${red}, ${green}, ${blue})`
    span.style.color = `rgb(${Math.ceil(Math.random() * 100)}`255, 255, 40, 50)

});
btnChangeSize.addEventListener("click", () =>{
    // span.style.fontSize = "30px"
    span.style.fontSize = `${Math.ceil(Math.random()*200)}px`;
})