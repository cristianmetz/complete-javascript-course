/*
// let js = 'amazing';
// console.log(40+8+23-10);

// console.log('23');

// let firstName = 'Cristian';
// console.log(firstName);

let age = 30;
age = 31;

//const is a variable that cannot be changed
const birthYear = 1991;
// birthYear = 1990;
//const cannot be an empty variable 
// const job;


//Math Operators
const now = 2022;
const ageCristian = now - 1988;
const ageLily = now - 2021;
console.log(ageCristian, ageLily);

console.log(ageCristian * 2, ageCristian / 10, 2**3);
//This means 2 to the power of 3.   2 * 2 * 2

//Assignment Operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 
x--; // x = x - 1
console.log(x);

//Comparison Operators
console.log(ageCristian > ageLily);
console.log(ageLily >= 18);

const isNotFullAge = ageLily >= 18;

console.log(now - 1988 > now - 2021);

const now = 2022;
const ageCristian = now - 1988;
const ageLily = now - 2021;
console.log(now - 1988 > now - 2021);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

//Convensional contatination
const jonas = "I'm "+firstName+ ', a '+(year-birthYear)+ " years old "+job+'!';
console.log(jonas);

//Template Literals `${}`; for advanced concatination in ES6 using backticks ``
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just another regular string..`);

console.log(`String with \n\
multiple \n\
lines`);

console.log(`String
multiple
lines`);


//Taking Decisions if/else statements
const age = 15;

if (age >= 18) {
    console.log (`Serah can have a drivers license! 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Serah is not old enough to have a drivers license!❌. Wait another ${yearsLeft} years 😊`);
};

const birthYear = 2012;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


//Type Conversion..
const inputYear = '1991';
console.log(Number(inputYear)); //converts string to numbers
console.log(inputYear +18); //returns the string 199118
console.log(Number(inputYear)+18);

console.log(Number('Jonas')); //returns Nan aka AN INVALID NUMBER, conversion fails
console.log(String(23)); //converts a number to a string

//Type Coercion
console.log(`I am `+ 23 +` years old`); //the + triggers a coercion to convert numbers to strings
console.log('23' - '10' - 3); //the - operator triggers a coercion to convert strings into numbers
console.log('23' * '2'); //the * operator triggers a coercion to convert strings into a number

let n = '1'+ 1; //11
n = n - 1;      //10
console.log(n); //10
*/