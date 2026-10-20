
/**
 * ==============================================================================
 * Module Name: Number Divisibility
 * Description: Checks how many of the numbers 2, 3, and 5 divide
 *              a given number without a remainder.
 *
 * Developers:
 * 1. Ahmad Aboud
 * 2. Nazar Jraisi
 * ==============================================================================
 */

// ==============================================================================
// Program Execution
// ==============================================================================

// Define the input number
const num = 123;

// Validate the input number
const isValid = Number.isInteger(num);

// Check divisibility by 2, 3, and 5
const divBy2 = num % 2 === 0;
const divBy3 = num % 3 === 0;
const divBy5 = num % 5 === 0;

// Check if the number is divisible by at least one
const atLeastOne = divBy2 || divBy3 || divBy5;

// Check if the number is divisible by at least two
const atLeastTwo = (divBy2 && divBy3) ||
                   (divBy3 && divBy5) ||
                   (divBy2 && divBy5);

// Check if the number is divisible by all three
const allThree = divBy2 && divBy3 && divBy5;

// Convert Boolean results into a numeric count
const count = Number(atLeastOne) +
              Number(atLeastTwo) +
              Number(allThree);

// Return -1 for invalid input
const result = count * Number(isValid) - Number(!isValid);

// Print exactly one result
console.log(result);
