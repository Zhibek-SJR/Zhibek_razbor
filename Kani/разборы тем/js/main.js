///////  Событие Native JS
let btn = document.getElementById('btn');
// btn.addEventListener('click', function(){
//     console.log('Hello Zhibek!');
// }) ;
// btn.addEventListener('click', () => {
//     console.log('Hello Karakol!');
// });

// btn.onclick = () => alert('Hello')////через ON(click,.....)




// btn.addEventListener('click', handler2);



// function handler(){
//     alert('Thank you!');
// }

// function handler2(){
//   alert('Thank you again!')  
// }


 btn.addEventListener('click', handler);
 btn.addEventListener("click", handler2);  // для удаления 
function handler(){
    alert('Thank you!');
}

function handler2(){
  alert('Thank you again!')  
}

// btn.removeEventListener('click', handler)