// ! localStorage, sessionStorage

//! setItem, getItem, removeItem, clear
//! JSON.stringify(), JSON.parse

// let user = {
//    name: "Kamila", 
// };
// localStorage.setItem("Zhibek", JSON.stringify(user)); //Zhibek имя контенера//! сохранит значение (ключэзначение)
// let data = localStorage.getItem("user");// ! получить данные только по ключу в формате строки 
// let newData = JSON.parse(data);//! переводит из сроки в наш формат
// localStorage.removeItem("Zhibek"); //! для удаления данных по ключу
// localStorage.clear(); //! очищает все!!!




// sessionStorage.setItem.apply("user", JSON.stringify(user))//! sessionStorage

//! USERS LIST
let form =$('form')
let inpName = $(".inp-name");
let inpAge = $(".inp-age");
let inpCity = $(".inp-city");
let inputs = $(".input");
let tbody = $("#tbody");

function addUser(event){
    event.preventDefault();
    let name = inpName.val();
    let age = inpAge.val();
    let city = inpCity.val();
    let boolean =true;
    if(!name){
        inpName.css("border", "3px solid red");
        boolean = false;
    }if(!age){
        inpAge.css("border", "3px solid red");
          boolean = false;
    }if(!city){
        inpCity.css("border", "3px solid red");
          boolean = false;
    }
    if(!boolean){
        return;
    }
    let user={
        name: name,
        age: age,
        city: city,
        id:Date.now(),
    };
    let users = JSON.parse(localStorage.getItem("Zhibek")) || [];
    users.push(user);
    localStorage.setItem("Zhibek", JSON.stringify(users));
    console.log(users);

     inpName.val("").css("border", "1px solid"); //! красный угасакт и сражу потверждается
     inpAge.val("").css("border", "1px solid");
     inpCity.val("").css("border", "1px solid");
     render();
}
 inputs.on("input", (e) => {
     if(e.target.value){
         $(e.target).css("border", "1px solid");//! убирает красный цвет б когда начинаешь писать
     }
 });
 inputs.on("blur", (e) =>{
     $(e.target).css("border", "3px solid red");//!
 });

 function render(){
     let users = JSON.parse(localStorage.getItem("Zhibek")) || [];
     console.log(users);
     tbody.html('')
     users.forEach((item, index) =>{
         tbody.append(
             `<tr>
                 <th scope ="row">${index+1}</th>
                 <td>${item.name}</td>
                 <td>${item.age}</td>
                 <td>${item.city}</td>
             </tr>`
         )
     });
 }
render();
form.on("submit", addUser);







































