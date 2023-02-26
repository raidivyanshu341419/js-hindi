//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// ==========================================================

// Stack and Heap : There are two types of memory in any programming that is stack and heap 

//Primitive (Stack )  and Primitive (Heap)

var myDetails = "Divyanshu Rai";
var anotherDetails = myDetails;
var anotherDetails = "Divyanshu";

console.log(anotherDetails);
console.log(myDetails);

var userOne ={
    name: "Rai",
    userEmail: "rai@google.com"
}

var userTwo = userOne;

userTwo.userEmail ="rai@gmail.com";

console.log(userOne.userEmail);
console.log(userTwo.userEmail);