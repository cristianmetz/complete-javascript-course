// Values and Varriables
//1
let country = 'The United States of America';
let continent = 'North America';
let population = 332403650;
//2
// console.log(country, continent, population);

//Data Types
//1
const isIsland = false;
// let language = null;
//2
// console.log(typeof isIsland,typeof population,typeof country,typeof language);

//let, const and var
//1
language = 'English'
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
const averageCountryPopulation = 33000000;
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

/* LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D) */

// if (language === 'English' && population < 50000000 && !isIsland) {
//     console.log(`You should live in ${country}.`);
// } else {
//     console.log(`${country} does not meet your criteria :(`);
// }

/* Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 */
//1
// const dolphinsAverageScore = Math.trunc((96 + 108 + 89) / 3) 
// const koalasAverageScore =  Math.trunc((88 + 91 + 110) / 3)
// console.log(dolphinsAverageScore, koalasAverageScore);
//2
// if (dolphinsAverageScore > koalasAverageScore) {
//     console.log('The winner is the Dolphins team!');
// } else if (dolphinsAverageScore < koalasAverageScore) {
//     console.log('The Winner is the Koala team!');
// } else {
//     console.log('Its a tie!');
// };
//3
// const dolphinsAverageScore = Math.trunc((97 + 112 + 123) / 3) 
// const koalasAverageScore =  Math.trunc((109 + 95 + 106) / 3)

// if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
//     console.log('The winner is the Dolphins team!');
// } else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100){
//     console.log('The Winner is the Koala team!');
// } else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore>= 100) {
//     console.log(`Unbelievable it's a tie!`)
// } else {
//     console.log('Neither team had a higher score than the other and also scored over 100 points!');
// };
//4
// const dolphinsAverageScore = Math.trunc((97 + 112 + 101) / 3) 
// const koalasAverageScore =  Math.trunc((109 + 95 + 106) / 3)
// if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
//     console.log('The winner is the Dolphins team!');
// } else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore >= 100){
//     console.log('The Winner is the Koala team!');
// } else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore>= 100) {
//     console.log(`Unbelievable it's a tie!`)
// } else {
//     console.log('Neither team had a higher score than the other and also scored over 100 points!');
// };