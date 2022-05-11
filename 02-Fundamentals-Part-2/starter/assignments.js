/*
LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
*/

// function describedCountry (country, population, capitalCity) {
//     const countryData = `The country ${country} has ${population} million people and its capital city is ${capitalCity}`;
//     return countryData;
// }

// const usaData = describedCountry('USA', 329.5, 'Washington, D.C.');
// console.log(usaData);

// const europeData = describedCountry('EU', 746.4, 'Brussels');
// console.log(europeData);

// const africaData = describedCountry('SA', 59.31, 'Cape Town');
// console.log(africaData);

/*
LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/
// //1
// function percentageOfWorld1 (population) {
//     return (population/7900)*100
// }
// //2 /3
// const chinaPopulationPercent1 = percentageOfWorld1(1441);
// console.log(Math.trunc(chinaPopulationPercent1));

// const usaPopulationPercent1 = percentageOfWorld1(329.5);
// console.log(Math.trunc(usaPopulationPercent1));

// const europePopulationPercent1 = percentageOfWorld1(746.4);
// console.log(Math.trunc(europePopulationPercent1));

// //4
// const percentageOfWorld2 = function (population) {
//     return (population/7900)*100
// }

// const chinaPopulationPercent2 = percentageOfWorld2(1441);
// console.log(Math.trunc(chinaPopulationPercent2));

// const usaPopulationPercent2 = percentageOfWorld2(329.5);
// console.log(Math.trunc(usaPopulationPercent2));

// const europePopulationPercent2 = percentageOfWorld2(746.4);
// console.log(Math.trunc(europePopulationPercent2));

/*LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3'*/

// const percentageOfWorld3 = population => (population/7900)*100;
// const chinaPopulationPercent3 = percentageOfWorld3(1441);
// console.log(Math.trunc(chinaPopulationPercent3));

// const usaPopulationPercent3 = percentageOfWorld3(329.5);
// console.log(Math.trunc(usaPopulationPercent3));

// const europePopulationPercent3 = percentageOfWorld3(746.4);
// console.log(Math.trunc(europePopulationPercent3));

/*
LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
 */

// function describePopulation (country, population) {
    
//     const populationPersentage = percentageOfWorld1(population);

//     const countryData = `${country} has ${population} million people, which is about ${Math.trunc(populationPersentage)}% of the world.`

//     return countryData;
// }
// console.log(describePopulation('USA', 329.5));
// console.log(describePopulation('EU', 746.4));
// console.log(describePopulation('CHN', 1441));

/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;

let avgDolhins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65,54,49);

function checkWinner (avgDolhins, avgKoalas) {
    if (avgDolhins >= avgKoalas*2) {
        console.log(`Dolphins win 🏆(${avgDolhins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolhins*2) {
        console.log(`Koalas win 🏆(${avgKoalas} vs. ${avgDolhins})`);
    } else {
        console.log(`No Team Wins 🚩`);
    }
}

console.log(checkWinner(avgDolhins,avgKoalas));

//test 2
avgDolhins= calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

console.log(checkWinner(avgDolhins,avgKoalas));
