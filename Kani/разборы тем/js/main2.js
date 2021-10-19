//! DOM. Классная работа

// Задание №1
// 	Всем <h3> поставьте текст '!!!'.

// let h3s = document.getElementsByTagName('h3');
// console.log(h3s);
// for(i of h3s) {
//     i.innerText = '!!!'
//    i.style.color = "green"; 
// }

// Задание №2
// 	Всем <h3> сделайте текст зеленого цвета.



// Задание №3
// 	Создайте маркированный список,
// При помощи цикла добавьте в маркированный
// список 30 li - элементов с текстом:
// “1 - овечка”, “2 - овечка”,
// “3 - овечка”,
// и так до “30-овечка”;

// let list = document.getElementsByTagName('ul');
// for(let i = 1;i <= 30; i++){
//     let  newItem = document.createElement('li');
//     newItem.innerText = `${i}- овечка`
//     list[0].append(newItem)
// }

// Задание №4
// В css создайте класс .active в
// котором пропишите цвет текста blue.
// Добавьте всем span элементам класс active
// через document.getElementsByTagName.
//  let spans = document.querySelectorAll('span');
//  spans.forEach(item => {
//      item.classList.add('active')
//  })



//! JQuery Selectors. Классная работа

// Задание №1
// 	Всем <h3> поставьте текст '!!!'.
// let titles = $('h3');
// console.log(titles, 'hrer')
// for(i of titles){
//     // console.log(i);
//     i.innerText = '!!!'
// }

// Задание №2
// 	Всем <h3> сделайте текст зеленого цвета.

// titles.css('color', 'green');

// Задание №3
// 	Создайте маркированный список,
// При помощи цикла добавьте в маркированный
// список 30 li - элементов с текстом:
// “1 - овечка”, “2 - овечка”,
// “3 - овечка”,
// и так до “30-овечка”;

// let list = $('ul');
// for(let i = 1;i<=30;i++){
//     list.append(`<li>${i}- овечка</li`)
// }

// Задание №4
// 	В css создайте класс .active в
// котором пропишите цвет текста blue.
// Добавьте всем span элементам класс active.

// let spans = $ ('span');
// spans.addClass('active')

// Задание №5
// Сделайте калькулятор на jQuery


// !События Native JS. Классная работа
// ! Все HTML элементы которыми нужно манипулировать пропишите отдельно в файле index.html

// Задание №1

// По нажатию клавиш меняйте цвет заднего фона
// div - элемента:
// R - red;
// G - green;
// B - blue;
// w - white;
// SHIFT + B - black;
// SHIFT + G - gray;

// let div = document.getElementById('container');
// document.addEventListener('keydown', function(event){
//     // console.log(event);
//     if (event.code === "KeyB" && event.shiftKey) {
//     div.s = "green";
//     } else if (event.code === "KeygG" && event.shiftKey) {
//     div.s = "grey";
//     }else if (event.code === "KeyP") {
//       div.s = "purple";
//     } else if (event.code === "KeyY") {
//       div.s = "yellow";
//     } else if (event.code === "KeyR") {
//       div.s = "red";
//     }
//     // console.log(event);
// })

// Задание №2
// Создайте переменную let i=0, по нажатию
// на кнопку выводите в консоль переменную i
// и увеличивайте её в 2 раза;

// let i = 1;
// let btn = document.getElementsByTagName('button')[0];
// btn.addEventListener('click', function(){
//     i *=2;
//     console.log(i);
// })

// Задание №3
// Создайте div размером 500px * 500px,
// по нажатию на неё выводите в консоль
// позицию места куда вы нажали
// относительно div- а;

// div.addEventListener('click', function(event){
//     console.log(`X=${event.offsetX}, Y=${event.offsetY}`);
// })

// Задание №4
// Создайте input type color.
// При изменении инпута меняйте цвет
// заднего фона body на значение
// из этого инпута

// let inp =document.getElementsByTagName('input')[0];
// inp.addEventListener('input', function(){
//      document.body.style.backgroundColor = inp.value
// })


//! Классная работа. События jQuery.
// Задание №1

// По нажатию клавиш меняйте цвет заднего фона
// div - элемента:
// R - red;
// G - green;
// B - blue;
// w - white;
// SHIFT + B - black;
// SHIFT + G - gray;

let div = $('#container');
// $(document).on('keydown', function(event){
//     // console.log(event);
//     if (event.code === "KeyB" && event.shiftKey) {
//     div.css('background-color',"green")  ;
//     } else if (event.code === "KeygG" && event.shiftKey) {
//     div.css('background-color', "grey")  ;
//     }else if (event.code === "KeyP") {
//       div.css('background-color', "purple")  ;
//     } else if (event.code === "KeyY") {
//       div.css('background-color', "yellow")  ;
//     } else if (event.code === "KeyR") {
//       div.css("background-color", "red");
//     }
//     // console.log(event);
// })

// Задание №2
// Создайте переменную let i=0, по нажатию
// на кнопку выводите в консоль переменную i
// и увеличивайте её в 2 раза;

// let i = 1;
// let btn = $('button');
// btn.click(function(){
//     i *=2;
//     console.log(i);
// })
// console.log(btn);

// Задание №3
// Создайте div размером 500px * 500px,
// по нажатию на неё выводите в консоль
// позицию места куда вы нажали
// относительно div- а;

// div.on('click', function(event){
//     console.log(`X=${event.offsetX}, Y=${event.offsetY}`);
// })

// Задание №4
// Создайте input type color.
// При изменении инпута меняйте цвет
// заднего фона body на значение
// из этого инпута

let inp =$('input');
inp.on('input', function(event){
    //  document.body.style.backgroundColor = inp.value
    $('body').css('background-color', event.target.velue);
})