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


//Truthy and falsy Values
//There are 5 falsy values: 0, '', undefined, null, NaN -they will become falsy when converted into a Boolean

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log(`Don't spend it all!`);
} else {
    console.log(`You should get a job!`);
}

let height;

if(height) {
    console.log("Yay Height is defined")
} else {
    console.log("Height is UNDEFINED")
}


//Equality Operatos: == vs. ===
const age = 18;
if (age === 18) console.log(`You just beacame an adult (strict)`); //Values must be identical and does not convert values

if (age == 18) console.log(`You just beacame an adult (loose)`); //does self coercion, ex: string to number. DO NOT USE IF POSSIBLE

const favoriteNumber = Number(prompt("What's your favorite number?"));
console.log(favoriteNumber);
console.log(typeof(favoriteNumber));

if (favoriteNumber === 8) {
    console.log('Cool 8 is an amazing number');
} else if (favoriteNumber === 7) {
    console.log('7 is also a cool number');
} else if (favoriteNumber === 9) {
    console.log('9 is also a cool number');
} else {
    console.log("Number is not 8, 7 or 91");
};

if (favoriteNumber !== 8) {
    console.log('Why not choose 8?');
}



//Boolean Logic & Logical Operators
 const hasDriversLicense = true; //A
 const hasGoodVision = true; //B

 console.log(hasDriversLicense && hasGoodVision); // the AND operator is &&
 console.log(hasDriversLicense || hasGoodVision); // the OR operator is ||
 console.log(!hasDriversLicense); //the NOT operator is !

//  if (hasDriversLicense && hasGoodVision) {
//      console.log('Sarah should be able to drive!');
//  } else {
//      console.log('Someone else shoudl drive...');
//  }

 const isTired = true; // C
 console.log(hasDriversLicense && hasGoodVision && isTired);

 if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah should be able to drive!');
} else {
    console.log('Someone else shoudl drive...');
}



const day = 'monday';

switch (day) {
    case 'monday': //day === 'monday" ?
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;

    case 'tuesday':
        console.log('Prepare theory videos');
        break;

    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;

    case 'friday':
        console.log('Record videos');
        break;
    
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :3');
        break;
    default:
        console.log('Not a valid day!');
} 

//Video Challenge
// Recreate code above with if else statements

if (day === "monday") {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :3');
} else {
    console.log('Not a valid day!');
} ;



//Statments(actions that we want the programs to perform) and Expressions(produce values)
//expressions
3 + 4
1991
true && false && !false
//if statement, anything that ends with a ;
if (23>10) {
    const str = '23 is bigger';
};

console.log(`I'm ${2037-1991} years old`);


//The Conditional (Ternary) Operator
const age = 15;
age >= 18 ? console.log('I like to drink wine 🍷'): 
console.log('I like to drink water💧');

const drink = age >= 18 ? 'wine 🍷' : 'water💧';
console.log(drink);

//without the conditional operator the statment would
//be lengthy like so:
let drink2;
if (age >= 18) {
    drink2 = 'Wine 🍷' ;
} else {
    drink2 = 'Water 💧';
};
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water💧'}`);

*/