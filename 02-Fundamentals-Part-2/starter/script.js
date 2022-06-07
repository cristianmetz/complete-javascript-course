"use strict";
//Activating Strict Mode
/* Using the line bellow, will activate strict mode. 
-It must be the first line of code inside the script file. 
-However comments are allowed. 
-Strict mode prevents us from creating errors silently and makes the erros visible and it forbits certain actions
-It reserves  certain names that JS might use in a later version from being used ex: interface, private, if
*/

/*
//example of changes strict mode introduces

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;}
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 543;



function logger () {
    console.log('My name is Cristian');
}

//calling / runnign / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
};

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);

const num = Number('23');



//Function Declaration
function calcAge1 (birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1988);
console.log(age1);

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1988);

console.log(age1, age2);


// Arrow Functions
const calcAge3 = birthYear => 2037-birthYear;
const age3 = calcAge3(1988);
console.log(age3);

const yearsUntillRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear
    const retirement = 65 - age;
    //return retirement
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntillRetirement(1988, 'Cristian'));
console.log(yearsUntillRetirement(1991, 'Jonas'));



//Functions Calling other Functions

function cutFruitPieces (fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of orange.`;
    return juice;
};

console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2037-birthYear
}
const yearsUntillRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} is ${age} years old and can retire in ${retirement} years`);
        return retirement
    } else {
        console.log(`${firstName} has already retired 🎊`);
        return -1;
    };
    // return `${firstName} is ${age} years old and can retire in ${retirement} years`;
}
console.log(yearsUntillRetirement(1988, 'Cristian'));
console.log(yearsUntillRetirement(1950, 'Jonas'));


//Intro to Arrays
const friend1 = 'Michael';
const friend2 = 'Stephen';
const friend3 = 'Peter';

const friends = ['Michael', 'Stephen', 'Peter'];
console.log(friends);

const y = new Array(1991, 1988, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Cristian'
const cristian = [firstName, 'Metz', 2037 - 1988, 'IT', friends];
console.log(cristian);
console.log(cristian.length);

//Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]),calcAge(years[1]), calcAge(years[years.length -1])];
console.log(ages);



// Basic Array Operators (Methods)
//Add elements
const friends = ['Michael', 'Stephen', 'Peter'];
//Push method adds elements to the end of an array
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);
//unshift adds elements to the beginning of an array
friends.unshift('John');
console.log(friends);

//Remove elements
friends.pop(); //Removes the last element
const popped = friends.pop(); //Returns the removed element
console.log(popped);
console.log(friends);

//Remove the first element from an array
friends.shift();
console.log(friends);

console.log(friends.indexOf('Stephen'));
console.log(friends.indexOf('Bob'));

//Includes returns true if the element is in the array and false if it is not
friends.push(23);
console.log(friends.includes('Stephen'));
console.log(friends.includes('Bob'));
console.log(friends.includes('23')); //It tests eith === equality

if (friends.includes('Stephen')) {
  console.log(`You have a friend called Stephen`);
}



//Intro to Objects

const cristian = {
    firstName: 'Cristian',
    lastName: 'Metz',
    age: 2037 - 1988,
    job: 'IT',
    friends: ['Michael', 'Stephen', 'Peter']
};
console.log(cristian);

//Dot Notation
console.log(cristian.lastName);

// Bracket Notation
console.log(cristian['lastName']);

const nameKey = 'Name';
console.log(cristian['first' + nameKey]);
console.log(cristian['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Cristian, Choose between firstName, lastName, age, job, and friends');

if (cristian[interestedIn]) {
    console.log(cristian[interestedIn]);
} else {
    console.log(`${interestedIn} is not a property of the desired object. Wrong request! Choose between firstName, lastName, age, job, and friends`)
}
//how to add new properties to object
//Dot Notation
cristian.location = 'Florida';
// Bracket Notation
cristian['instagram'] = '@unocmetz';
console.log(cristian);

//Lecture Challenge, write a sentence in a dynamic way
// "Jonas has 3 friends, and his best friend is called Michael"
const sentence = `${cristian['firstName']} has ${cristian.friends.length} friends, and his best friend is called ${cristian.friends[0]}`
console.log(sentence);


// Object Methods
const cristian = {
    firstName: 'Cristian',
    lastName: 'Metz',
    age: 1988,
    job: 'IT',
    friends: ['Michael', 'Stephen', 'Peter'],
    hasDriversLicense: true,

    // calcAge: function(age) {
    //     return 2037-age;
    // }

    calcAge: function() {
        this.age = 2037-this.age
        return 2037- this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old IT, and he ${this.hasDriversLicense ? 'has a' : 'does not have a'} drivers license.`
    }

};

console.log(cristian.calcAge());
console.log(cristian.age);
// console.log(cristian['calcAge'](1988));

//lecture challenge
//write a method called getSummary , should return a string that summaries the data about cristian.

console.log(cristian.getSummary());



// console.log('Lifting weight rep 1 🏋️‍♂️');
// console.log('Lifting weight rep 2 🏋️‍♂️');
// console.log('Lifting weight rep 3 🏋️‍♂️');

//for loop keeps running while condition is True
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights rep ${rep} 🏋️‍♂️`);
}


//Looping Arrays, Breaking and Continuing

const cristian = [
    'Cristian',
    'Metz',
    2037 - 1988,
    'IT',
    ['Michael', 'Stephen', 'Peter'],
    true
];

const types = [];

for(let i = 0; i < cristian.length ; i++) {
    //Reading from cristian array
    console.log(cristian[i], typeof cristian[i]);
    // Adding to types array
    // types[i] = typeof cristian[i];
    types.push(typeof cristian[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    
    ages.push(2037 - years[i]);

}

console.log(ages);

//Continue for loop, exits current itteration of the loop and continue to the next one
console.log(`--ONLY STRINGS--`);
for(let i = 0; i < cristian.length ; i++) {
    if (typeof cristian[i] !== 'string') continue;

    console.log(cristian[i], typeof cristian[i]);
}
//Break is used to completely terminate the loop.
console.log(`--ONLY FIRST NUMBER--`);
for(let i = 0; i < cristian.length ; i++) {
    if (typeof cristian[i] === 'number') break;

    console.log(cristian[i], typeof cristian[i]);
}


//Looking Backwards
const cristian = [
    'Cristian',
    'Metz',
    2037 - 1988,
    'IT',
    ['Michael', 'Stephen', 'Peter'],
    true
];

for (let i = cristian.length -1; i >= 0; i--) {
    console.log(i, cristian[i]);
}

// Loops in Loops
for( let exercise = 1; exercise <=3; exercise++){
    console.log(`--------------Starting Exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++){
        console.log(` Exercise ${exercise}: Lifting weight repetition ${rep}🏋️‍♂️`)
    }
}



//THE WHILE LOOP

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights rep ${rep} 🏋️‍♂️`);
// }

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights rep ${rep} 🏋️‍♂️`);
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
   console.log(`You rolled a ${dice}`);
   dice =  Math.trunc(Math.random() * 6) + 1;
   if (dice === 6) console.log(`Loop is about to end..`);
}
*/