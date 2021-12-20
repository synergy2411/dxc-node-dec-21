// FUNCTION : are first class citizens in JavaScript
// Function can be treated as value
// Function expression
// Anonymous Function
// Nested Function
// Function can return a function
// Function Hoisting
// IIFE : Immediately Invoked Function Expression
// HOF : higher order function
// Callback Function -> error first, callback last
// Closure - process of binding the outer scope variable with inner functions



function buildTicket(transport){
    var numOfPassengers = 0;
    return function(passengerName){
        return "Hello " + passengerName + ",\n You'r going via " + transport +
        "\n Your ticket ID is " + (++numOfPassengers)
    }
}

var car = buildTicket("Car")
console.log(car("John Doe"))        // ?
console.log(car("Jenny Doe"))        // ?

var ship = buildTicket('Ship')
console.log(ship("James Doe"))      // ?



// function testClosure(){
//     var x = 3;
//     return function(){
//         return ++x;
//     }
// }

// var nestedFn = testClosure();      // ?
// console.log(nestedFn());            // 4
// console.log(nestedFn());            // 5



// function greet (err, msg){
//     if(err){
//         console.log("Something bad happened")
//         process.exit(1)
//     }
//     console.log(msg)
// }

// function display(arr, fn){
//     if(arr.length > 2){
//         fn(new Error("Too large Values"))
//     }else{
//         fn(null, "Too low Values");
//     }
// }

// display([1,2], greet)



// Lexical Scoping / Scope chaining

// var x = 101;

// function a(){
//     // var x= 201;
//     function b(){
//         console.log(x);         // 101
//     }
//     b();
// }

// a();


// (function(){
//     var x = 101;
//     console.log("Immediately Invoked")
// }())

// console.log(x);





// JavaScript two phases
// - Creation Phase -> allocates the memory to variable and function
// - Execution Phase -> JS executes all assignments and return statements

// function mystery(){
//     var chooseNumber = function (){
//         return 7;
//     }
//     return chooseNumber;
//     var chooseNumber = function (){
//         return 12;
//     }
// }

// var nestedFn = mystery()

// console.log(nestedFn());            // 



// console.log(mystery());         // ?




// var addition = function (n1, n2){
//     return n1 + n2;
// }

// // console.log(add(2,4))

// console.log(addition(3,5));      // ?