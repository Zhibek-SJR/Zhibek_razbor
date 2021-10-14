// срелочные функции ( arrow function)

// const arrowFunc = () =>{
//     console.log("Arrow");
// };

// const arrowFunc = ()=> console.log("Arrow"); 
// const arrowFunc = arg => console.log(arg);
// arrowFunc(10);

// functionfunc(){
//     console.log(...arguments);
// }

// const func = () => {
//     console.log(arguments);
// };
// func("str", 10, true);


// let km = +prompt("Enter km")
// const converter = (arg) => {
//     let m = srg * 1000;
//     alert(`${m} м.`);
// };
// converter(km);

//методы обьектов

// console.warn("Method");
// console.error("ЧП");
// console.log("LOG");

// let user = {         ///не закончено
//     name: "Ilyas",
//     sayHello: function (arg) {
//         console.log(`Hello ${arg}`);
//     },
    
// };
// user.sayHello("Дамир");


// this 
// глобальный обьект виндоу
//room = 9

// function stop(){}


// console.log(this)

// let obj = {
//     title: "JS77",
//     sayContext(this){
//         console.log(this)
//     },
//     sayContextArrow: () => {
//         console.log(this)
//     },
//     func() {
//         let arrowFunc = () => {
//             console.log(this);
//         };
//         arrowFunc();
//     },
// };
// obj.sayContext();
// obj.sayContextArrow();
// obj.func()



// let user = {
//     name: "A",
//     sayName: function(){
//         console.log(this.name);
//     },
// };
// let newUser = {...user};
// newUser.name = "I";
// user.sayName();
// newUser.sayName();


// let passenger = {
//     firstName: 'Sam',
//     lastName: 'Winchester',
//     passportNum: 'U12345678',
//     passenger: 20,
//     getInfo(){
//         console.log(`Passenger ${this.firstName} ${this.lastName}.Passport number is ${this.passportNum}. Maximum luggage weight is ${this.baggage}`);

//     },
//     setBaggage(arg){
//         this.baggage =arg;
//     },
// };
// passenger.getInfo();
// passenger.setBaggage(50);
// passenger.getInfo();

// let user = {
//     name: "Sam",
//     age: 17,
//     balance: 700,
//     tickets: 0,
//     buyTicket(count) {
//         if (this.balance >= 400 * count) {
//             this.tickets++;
//             this.balance -= 400 * count;
//             console.log(`вы успешно купили ${count} билет(ов)`);
//         }else {
//             let avaTicket = Math.floor(this.balance / 400);
//             if(avaTicket > 0) {
//                 this.balance -= 400 * avaTicket;
//                 this.tuickets += avaTicket;
//                 console.log(`У вас не достаточно средств купить ${count} билет(ов)ювы успешно купили ${avaTicket} билет(а)`);
//             }
//         }
//     },
//     addToBalance(sum) {
//         this.balance += sum;
//         console.log(`В У П Б ${sum}`);
//     },
//     showBalance(){
//         console.log(`Ваш баланс ${this.balance} сом`);
//     },
// };
// user.buyTicket(1);
// user.addToBalance(1000);
function sayHello() {
    const message = 'Салам, ';
    return function (name) {
        return message + name + '!';
    }
}

const result = sayHello(); // ƒ (name) { return message + name + '!'; }
console.log(result('Ислам')); // "Салам , Ислам!"