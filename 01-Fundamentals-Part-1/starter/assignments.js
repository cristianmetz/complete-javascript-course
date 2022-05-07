// Values and Varriables
//1
// let country = 'The United States of America';
// let continent = 'North America';
// let population = 332403650;
//2
// console.log(country, continent, population);

//Data Types
//1
// const isIsland = false;
// let language = null;
//2
// console.log(typeof isIsland,typeof population,typeof country,typeof language);

//let, const and var
//1
// language = 'English'
// console.log(language);

//Basic Operators
//1
// const halfPopulation = population / 2;
// console.log('If the country split in half the population would be '+halfPopulation);
//2
// population += 1; 
// console.log(population);
//3
// const finland = 6000000;
// console.log(population > finland);
//4
// const averageCountryPopulation = 33000000;
// console.log(population < averageCountryPopulation);
//5
// const description = country + " is in " + continent + ", and its " + population + ' million people speak ' + language;
// console.log(description);

//Coding Challenge #1
//1
// const massJohn = 92;
// const heightJohn = 1.95;
// const massMark = 78;
// const heightMark = 1.69;
// //2
// const johnBMI = Math.trunc(massJohn / (heightJohn * heightJohn));
// console.log(johnBMI);
// const markBMI = Math.trunc(massMark / heightMark ** 2);
// console.log(markBMI);
//3
// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

//Strings and Template Literals
/* Recreate the 'description' variable from the last assignment, this time
using the template literal syntax */

// const descriptionNew = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`;
// console.log(descriptionNew);

//Taking Decisions: if / else Statements
/*1) If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population) */

// if (population >= averageCountryPopulation) {
//     console.log(`${country}'s population is above average.`);
// } else {
//     console.log(`${country}'s population is ${averageCountryPopulation - population} bellow average.`);
// };

/*2 After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original */

/*Coding Challenge #2
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
*/

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`)
// };

// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// 2. Execute the operations to check if you were right
'9' - '5'; //4
'19' - '13' + '17'; //617
'19' - '13' + 17; //23
'123' < 57; //false
5 + 6 + '4' + 9 - 4 - 2; //1143 

// LECTURE: Equality Operators: == vs. ===
// 1. Declare a variable 'numNeighbours' based on a prompt input like this:
// prompt('How many neighbour countries does your country
// have?');
// let numNeighbours = prompt('How many neighbour countries does your country have?');
// let numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
// 2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
// == for now)
// if (numNeighbours == 1) console.log('Only 1 border!');
// 3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
// is greater than 1
// if (numNeighbours == 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border!');
// }
// 4. Use an else block to log 'No borders' (this block will be executed when
// 'numNeighbours' is 0 or any other value)
// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border!');
// } else {
//     console.log('No borders!');
// };
// 5. Test the code with different values of 'numNeighbours', including 1 and 0.
// 6. Change == to ===, and test the code again, with the same values of
// 'numNeighbours'. Notice what happens when there is exactly 1 border! Why
// is this happening?
//--It's happening because the prompt input is a string value and it is not === to the number value 1. It does not convert the string like the loose == equality operator
// 7. Finally, convert 'numNeighbours' to a number, and watch what happens now
// when you input 1
// 8. Reflect on why we should use the === operator and type conversion in this
// situation