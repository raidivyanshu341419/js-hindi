const accountId = 10110; // Const that means value is locked it cannot change .
let accountEmail = "raidivyanshu@gmail.com"; // let scope will be in same block not outside of the block 
var accoutnPassword = 12123; // var scope is global, it will be access out side of the block.
accountCity = "Gkp";  // we can also declare a var without assigning a name of the var, but this is not good approach.
let accoutnState; // The value of this variable is undefined.

//accountId = 1234;

console.log(accountId);
console.table([accountId, accountEmail, accoutnPassword, accountCity, accoutnState]) // By this way we can call a more than one variable value in a table format.   