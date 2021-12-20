// Object Creation Methods
// - Literal

// Primitive Types : Number, String, Boolean
// Reference Types : Objects, Arrays, Functions


// var username = "Foo";

// var secondUser = username;

// secondUser = "Bar";

// console.log(username);          // ?



// var user = {
//     name : "Foo"
// }

// var userTwo = user;

// userTwo.name = "Bar";

// console.log(user);          // ?



// var myBooks = ["book1", "book2", "book3"]

// var box = {
//     width : 4,
//     height : 5,
//     books : myBooks,
//     addBook : function(book){
//         this.books.push(book)
//     }
// }

// box.volume = box.width * box.height;

// box.addBook("Book4")

// console.log(box.books.length);   // 4
// console.log(myBooks.length);   // 4





// - Constructor 

// function Person(name, age){
//     // var this = {}
//     this.name = name;
//     this.age = age;
//     this.sayHello = function(){
//         return "Hello " + this.name;
//     }
//     // return this;
// }

// let john = new Person("John", 32);
// let jenny = new Person("Jenny", 28);

// console.log(john.sayHello())
// console.log(jenny.sayHello())





















// - Instance : implements object inheritance
//  __proto__

// var Shoe = {
//     size : 8
// }



// var magicShoe = Object.create(Shoe);

// console.log(Shoe.isPrototypeOf(magicShoe))
// console.log(magicShoe.isPrototypeOf(Shoe))

// console.log(Object.prototype.isPrototypeOf(Shoe))
// console.log(Object.prototype.isPrototypeOf(magicShoe))


// var username = new String("Foo");

// console.log("STRING : ", Object.prototype.isPrototypeOf(username))

// console.log(typeof(username))









// magicShoe.__proto__ = Shoe;

// console.log(magicShoe);             // {}

// magicShoe.size = 10;

// console.log(magicShoe.size);             // 10

// var str = "Some String";
// // var str = new String("Some String")

// console.log(str.length);        
// console.log(str.constructor);
  

var user = {
    name : "Foo",
    age : 32
}

for(let prop in user){
    console.log(prop)
}



console.log("Started")
setTimeout(()=>{
    console.log("Running..")
}, 3000)
console.log("Ended")