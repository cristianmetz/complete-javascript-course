// Values and Varriables
//1
let country = 'The United States of America';
let continent = 'North America';
let population = 332403650;
//2
console.log(country, continent, population);

//Data Types
//1
const isIsland = false;
let language = null;
//2
console.log(typeof isIsland,typeof population,typeof country,typeof language);

//let, const and var
//1
language = 'English'
console.log(language);

//Basic Operators
//1
const halfPopulation = population / 2;
console.log('If the country split in half the population would be '+halfPopulation);
//2
population += 1; 
console.log(population);
//3
const finland = 6000000;
console.log(population > finland);
//4
const averageCountryPopulation = 33000000;
console.log(population < averageCountryPopulation);
//5
const description = country + " is in " + continent + ", and its " + population + ' million people speak ' + language;
console.log(description);

//Coding Challenge #1
//1
const massJohn = 92;
const heightJohn = 1.95;
const massMark = 78;
const heightMark = 1.69;
//2
const johnBMI = massJohn / (heightJohn * heightJohn);
console.log(johnBMI);
const markBMI = massMark / heightMark ** 2;
console.log(markBMI);
//3
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

