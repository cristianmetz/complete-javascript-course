// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 22;

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1988));

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//what is a temperature amplitude?
//what is the sensor error?
