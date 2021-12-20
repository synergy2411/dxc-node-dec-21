// - Arrow Functions : () => body
//  - Don't have 'this' keyword
//  - Don't have 'arguments' keyword
//  - Can't use with 'new' operator

// setTimeout(function(){}, 3000)
// setTimeout(() => console.log("Timer works"), 3000)

// var numbers = [2,3,4,5];
// ES5
// var doubleArray = numbers.map(function(value){
//     return value * 2
// })

// console.log(doubleArray)

// ES6
// var doubleArray = numbers.map( value => value * 2)
// var doubleArray = numbers.map( value => {
//     console.log(value)
//     return value * 2
// })
// console.log(doubleArray)

// - Destructuring : "unpacking" the collection (Object / Array)
// var friends = ["john", "jenny", "james", "jiene"];
// var [f1, f2, f3, f4] = friends;
// console.log(f3);            // "james"
// f3 = "Alice";
// console.log(f3);              // "Alice"
// console.log(friends);           // [, , "james", '']
// friends[1] = "Something";
// console.log(friends);       // [ _, "Something", _, _ ]

// var userOne = {
//   firstName: "Foo",
//   lastName: "Bar",
//   age: 32,
//   address: {
//     city: "bengaluru",
//     street: "201 Main Road Marathahalli",
//   },
//   friends: ["John", "Jenny"],
// };

// var {
//   age,
//   firstName,
//   lastName,
//   address: { city, street },
//   friends: [f1, f2],
// } = userOne;

// console.log(city, f2);







// - Spread / Rest Operator (...)
//  - Rest Operator : always comes in function argument list : Creates the collection from individual element

// function demo(email, ...args){
//     console.log(args[0]);           // ?
// }

// // demo("dummy@test.com")
// // demo("dummy@test.com", 32)
// demo("dummy@test.com", 32, true)


//  - Spread Operator : Always present with collection; Split the collection into individual elements

// var numberArray = [3,4,5];

// var newArray = [1,2, ...numberArray, 6,7,8];

// console.log(newArray);      // [1,2,[3,4,5],6,7,8]

// var userOne = {
//     email : "test@test.com"
// }

// var userTwo = {
//     ...userOne,
//     age : 32
// }

// console.log(userTwo);   
// userTwo.email = "foo@gmail.com"

// console.log(userOne);


// var a = {name : "Foo"}
// var b = a;
// b.name = "Bam"
// console.log(a.name);        // "Bam"







// - Template Literal
// - Embedded Variables
// - Multiline String

// "" / '' / `` (Back Tick)

// var username = "Foo";
// var age = 32;

// var str = `Hello from ${username}
// I'm ${age} years old!
// `

// console.log(str)











// - Block Scope Variable : restricts the variable scope to the nearest curly braces {}
// - let - for other kind of variables
// - const - for constants


// const username = "Foo";
// username = "Bar";


// const user = Object.freeze({ 
//     name : "Foo"
// })

// user.name = "Bar";

// user = {
//     name : "Baz"
// }

// console.log(user);          // ?

// Object.defineProperty(user, "name", {
//     writable : true,
//     configurable : true
// })
// Object.defineProperty(user, "age", {
//     writable : false,
//     configurable : false
// })





// function display(arr){
//     if(arr.length > 2){
//         let LOAD = "LOADING";
//         console.log(FLASH);             // ?
//     }else{
//         let FLASH = "flashing"
//     }
// }

// display([1,2,3,4])


// Short hand Property

const add = (n1,n2 = 10) => n1 + n2;

let mathObj = {
    add
}

console.log(mathObj.add(3, 5));