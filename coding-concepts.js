// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: The .push command as stated by the syllabus should add indigo to the end of the array list.
// b) Verify and explain: For some reason the code is returning 5. The code is currently showing the index position instead of the word.


// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: It should just log the variable set of characters.
// b) Verify and explain: It logged 10 which is the correct set of characters in the element.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: It's saying to log index position 4, but we have not set up that many index positions, so it should return undefined or a syntax error.
// b) Verify and explain: The code returned 0 as the answer. Due to the 4th index not being identified the system returned the 4th index value it had setup which was 0.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: It will only log Ruby because index position 1 is specified in the function.
// b) Verify and explain:  It only logged Ruby as expected due to index position 1 being specified.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: It should change the letters to uppercase characters.
// b) Verify and explain: It said toUpperCase is not a valid function.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: It should log the datatypes character length.
// b) Verify and explain: It logged number as the output, most likely because the code on line 52 has typeof included, which may make the system think we want to include the missing data.
