// ! jquery events

// !ready
// $(document).ready(()=>{
//    console.log("DOM загружен");
// })


// //! click
// let btn = $("button");
// btn.on("click",()=> {
//     console.log("Hi");
// });

//! dbclick
// let btn = $("button");
// function sayHello() {
//     alert("Hello");
    
// }
// btn.on("dbclick",sayHello);  // двойное нажатие

  //! focus
//   let input = $("input");
//   input.on("focus", () =>{
//       console.log("Есть фокус");
//   });



  //! blur - размытый
//   input.on("blur",() =>{
//       console.log("Убрали фокус");
//   });

//   input.on("blur", () => {
//     console.log("Убрали фокус");
//     if(!input.val()) {
//         // alert("Данное поле обязательно для заполнения!");
//         input.css("border", "2px solid red");

//     }else{
//         input.css("border", "2px solid green");
//     }
//   });


  //! input
//   input.on("input", (e) => {
//       console.log(e.target.value);// все то что пишим выводится на консоль
//   });
 

//! select  РАТОТАЕ С ALERT И INPUT
// let input = $('input');  // НУЖНО ВЫДЕЛИТЬ С МЫШКОЙ
// input.on("select", (e) =>{
//     console.log(e);
// })

// let p = $("p");
// p.on("select", (e) =>{  //! НЕ РАБОТАЕТ
//     console.log(e);
// // })
// let strong = $('strong');

// p.on("mouseup",(e) =>{
//     let selectedText = window.getSelection().toString(); 
//     strong.text("Вы выделили:" + selectedText);//  то что выделяем выводится внизу там же
// })


// ! hide, show, toggele

// let img =$('img');
// let btnHide =$("#btn-hide");
// let btnToggle = $("#btn-toggle");
// let btnShow = $("#btn-show");
// btnHide.on("click", () =>{  //убирает
//     img.hide(2000);
// });
// btnShow.on("click",() =>{
//     img.show(1000)  //появляется, показывает
// });
// btnToggle.on("click", () => {
//   img.toggle(1500); // если есть убирает, если нет паквзывает
// });

//! fadeIn, fadeOut, fadeTo, fadeToggle
// let img = $("img");
// let btnfadeOut = $("#btn-hide");
// let btnfadeIn = $("#btn-show");
// let btnfadeTo = $("#btn-to");
// let btnfadeToggle = $("#btn-toggle");
// btnfadeIn.on("click", ()=>{
//     img.fadeIn(1000);
// });
// btnfadeOut.on("click", () =>{
//     img.fadeOut(1000);
// });
// btnfadeTo.on("click", ()=>{
//     img.fadeTo(1000,0);
// });
// btnfadeToggle.on("click", () =>{
//     img.fadeToggle(1000);
// });
// let opacity = 1;
// btnfadeTo.on("click", () =>{
//     if (opacity < 0) {
        // img.fadeTo(1000, (opacity += 0.1)); или
//         alert("Она прозрачна");
//     }else{
//         img.fadeTo(1000, (opacity -= 0.1));
//     }
// });

// ! modal
let btnShowModal = $(".show-modal");
let btnCloseModal = $(".my-modal button");
let modal = $(".modal");
let myModal = $(".my-modal");
function showModal() {
    modal.fadeIn(1000).css("display", "flex");

}
function CloseModal(){
    modal.fadeOut(1000);
}
btnShowModal.on("click",showModal);
btnCloseModal.on("click", CloseModal);
let h3 = $(".my-modal h3");
let p = $(".my-modal p");
modal.on('click', (e) =>{
    if(e.target !== myModal[0] && e.target !== h3[0] && e.target !== p[0]) {
        CloseModal();
    }
});
    
    
    
    
    //! range input
let range = $("#range");
let img = $("img");
range.on("input", (e) =>{
    let value = e.target.value;
    img.fadeTo(10, value);
});
