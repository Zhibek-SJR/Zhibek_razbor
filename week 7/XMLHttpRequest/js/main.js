// ! Типы запроов

const API = "http://localhost:8000/products"
//! GET запрос

//! fetch
// function getData() {
//   fetch(API)
//     .then((response) => {
//         if (response.ok){

//         }else{
//             console.log(response);
//         }
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }
// getData();


//! axios
// async function getDataAxios(){
//     try {
//          const { data } = await axios(API); 
//     console.log(data);
//     }catch (e) {
//         console.log(e.response.statusText, e.response.status);
//         const status = e.response.status;
//         if (status === 404) {
//             console.log(Введите правильную ссылку);
//         }else if(status == 500){
//             console.log("Неполадки на сервере");
//         }else if(status == 403){
//             console.log();
//         }
//     }
  
// }
// getDataAxios();




//! try, catch
// const num = 10;
// try{
//     num = 20;
// }catch (error) {
//     console.log(error);
// }


// ! POST
let input = document.querySelector('input');
let btn = document.querySelector("button");

// const addProduct = () =>{
//     let value = input.value;
//     let product = {
//         title: value,
//     };
//     fetch(API, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body:JSON.stringify(product)
//     });
// };
// btn.addEventListener("click", addProduct);
 

// ! AXIOS
// const addProductAxios = async () =>{
//    let value = input.value;
//    let product = {
//        title: value,
//    };
//    const res = await axios.post(API, product);
//    console.log(res);
// };
// btn.addEventListener("click", addProductAxios);

// ! меняем слова с помощью FETCH, AXIOS
function updateProduct() {
    let aditedProduct = {
        title: "Macbook m1pro",
    };
    // ! FETCH
    // fetch(`${API}/5`,{
    //     method: "PUT", 
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(aditedProduct),
    // });
    //! AXIOS
    axios.patch(`${API}/2`, aditedProduct);
}
updateProduct();
