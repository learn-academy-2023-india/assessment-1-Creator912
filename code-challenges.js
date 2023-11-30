// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Run the file with the following command: $ node code-challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a function that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.
let array1 = [2, 5, 2, 2, 4]
let array2 = [6, 3, 5, 3]

let combinedArray = array1.concat(array2);
let combinedArraylength = 
combinedArray.length;

//console.log(combinedArraylength);


const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code: Create 2 different arrays containing world series numbers
// create a code that will combine the arrays
//create a command with .concat as per syllabus to merge the arrays
// create a command that will combine both arrays length
// console log and test



// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.
let stringArray = ["learn 2023"]

let reversedArray = stringArray.map(str =>

    str.split('').reverse().join(''));

//console.log(reversedArray);

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code: // Create a function that assigns my letters into 1 array
// create a split command to convert the string to an array
// create the command code that will reverse the function
// create a join command to return the array back to a string
// console log and test



// --------------------3) Use a for loop to log only the odd numbers from the array using the test variable provided below.

let numbersArray = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]

 for (let i = 0; i < numbersArray.length;
     i++) {
    
     if (numbersArray[i] % 2 !== 0) {
   
        //console.log(numbersArray[i]);
    // }
// } 

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code: Create a numbers array 
// create a conditional with my numbers array
// create a modulo that logs numbers that do not have a zero remainder
// console.log and test

