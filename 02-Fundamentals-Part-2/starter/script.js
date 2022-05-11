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
*/