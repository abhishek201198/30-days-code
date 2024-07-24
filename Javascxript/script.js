//  DEBUGGER

// function fun(){
//     debugger;
//     for(let i=0; i<=5; i++){
//         console.log(i);
//     }
// }

// fun();


// RECURSION

// function fun(n){
//      if(n<=10){
//         console.log(n)
//         fun(n+1);
//      }
// }

// fun(1);

// function fact(n){
//      if(n==0){
//         return 1;
//      } 
//      else {
//           return n*(fact(n-1));
//      }
// }
// console.log(fact(5));

// function fun(val){
//     console.log(val);
// }

// function add(a,b,callback){
//     let sum = a+b;
//     callback(sum);
// }

// add(5,15,fun)

// PROMISE

// function fun(task) {
//     return new Promise((resolve, reject) => {
//         if (task) {
//             resolve("completed");
//         }
//         else {
//             reject("not completed");
//         }
//     })

// }

// let OnResolve = (res)=>{
//     console.log(res);
// }

// let OnReject = (err)=>{
//     console.log(err);
// }

// fun(false).then( OnResolve).catch(OnReject)

//  function Person( name,age){
//    this.name = name;
//    this.age = age;
  

//  }

//     Person.prototype.greet= function() {
//         console.log(`hello ${this.name}`)
//     }
  
//  let user =new  Person ("john", 9);
//  user.greet();
//  console.log(user)

//  class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;

//     }

//     greet(){ 

//  }
// }

//  let user = new Person ("abhishek", 18);
//  user.greet();
//  console.log(user);
 

// class User {
//     constructor(name){
//   this.name = name;
//     }
//     sayHello(){
//         console.log(`Hello ${this.name}` )
//     }
// }

// let user = new User("john");
// user.sayHello();

// let user1 = new User("abhishek");
// user1.sayHello()

// class Animal {
//     constructor(name){
//     this.name = name
//     }

//     speak(){
//         console.log(`hello ${this.name} makes a noise`)
//     }
    
// }
// class Dog extends Animal {
//     constructor(name){
//     super(name)
//     }
// }
// class Cat extends Animal {
//     constructor(name){
//     super(name)
//     }
// }

// let a = new Cat("billi");
// a.speak();


// class Animal {
//     constructor(name){
//     this.name = name
//     }

//     speak(){
//         console.log(`hello ${this.name} makes a noise`)
//     }
//     sing(){
//         console.log(`${this.name} is sing tunak tunak`)
//     }
// }


// let a = new Animal("Husky");
// a.sing();


// class Game {
//     static score = 0;
//     constructor(){
//         this.isPlaying = false;
//     }

//     start(){
//         console.log(`the game is started`);
//         Game.updateScore()
//     }

//     end(){
//         console.log(`the game is ended`);
//         Game.updateScore()
//     }

//     static updateScore(){
//         Game.score++;
//         console.log(`score : ${Game.score}`)
//     }
// }


// const game = new Game()
//  game.start();
//  game.start();
//  game.start();
//  game.end()

// class BankAccount {
//     balance = 2200;

//     deposit(amount){
//         this.balance += amount;
//    console.log(`deposited ${amount} and the new balance is ${this.balance}`)
//     }

//     withdraw(amount){
//         if(amount> this.balance){
//             console.log(`insufficient amount`)
//         }
//         else{
//             this.balance-= amount;
//             console.log(`withdraw ${amount} and the new balance is ${this.balance}`)
//         }
       
//     }
// //   to access the private class
// //     fun(){
// //         console.log(this.#balance)
// //     }
// // }
// }

// const account = new BankAccount();
// account.deposit(100)


function fun(a,b){
    try{
        if(b==0){
            throw new Error(`can't divide by 0`)
        }
        else{
            console.log(a/b);
        }
    }catch(err){
      console.log(err.message)
    }


}

fun(10,0)

// FETCH  API

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response =>{

    if(!response.ok){
        throw new Error('network is not responding')
    }
  
    return response.json();
})
.then(data => data.forEach(element => 
    console.log(element.body)
))
   
.catch(err => console.error(err))

