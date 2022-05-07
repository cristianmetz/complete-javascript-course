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
