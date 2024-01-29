let x =5;
let y =2;

// addition
let sum = x + y;
console.log("Sum: ", sum);

// subtraction
let difference = x - y;
console.log("Difference: ", difference);

// multiplication
let multiplication = x * y;
console.log("Multiplication: ", multiplication);

// division
let division = x / y;
console.log("Division: ", division);

//remainder - modulus
let remainder = x % y;
console.log("Remainder: ",remainder);

// String Concatenat
console.log("Hello" + "," + " "+ "World");

// Logical Expressions

let sunny = true;
let cloudy = false;
// && - AND
console.log("sunny and cloudy",sunny && cloudy);

// || - OR
console.log("sunny and cloudy",sunny || cloudy);

// ! - NOT
console.log("Cloudy ",!cloudy);

// Assignment Expressions
let a = 10;
let b = 5;

// Addition Compound
// a = a + b
a += b;
console.log("Sum: ", a);

// Subtraction Compound
a -= b;
console.log("Difference: ", a);

// Multiplication Compound
a *= b;
console.log("Multiplication: ", a);

// Division Compound
a /= b;
console.log("Division: ", a);


// Function Call Expressions
// Sum
function mySum(num1 , num2){
    console.log(num1 + num2);
}
mySum(30, 10);

// Difference
function myDifference(num1 , num2){
    console.log(num1 - num2);
}
myDifference(30, 10);

// Multiplication
function myMultiplication(num1 , num2){
    console.log(num1 * num2);
}
myMultiplication(30, 10);

//Division
function myDivision(num1 , num2){
    console.log(num1 / num2);
}
myDivision(30, 10);

// arrow function
const mySumArrow = (num1, num2) =>{
    console.log("Arrow function sum:", num1 + num2);
}
mySumArrow(20,1);