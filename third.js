
/**
 * ==============================================================================
 * Module Name: Zero Counter
 * Description: Counts the number of zeros in a numeric array.
 *
 * Developers:
 * 1. Ahmad Aboud
 * 2. Nizar Jarayse
 * ==============================================================================
 */

// Function: Counts the number of zeros in an array.
// Parameter: arr - An array of numbers.
// Returns: The zero count, or -1 for invalid input.
function countZeros(arr) {

  // Validate the input array
  if (!Array.isArray(arr)) {
    return -1;
  }

  let zeroCount = 0;

  // Iterate through the array and validate each element
  for (const num of arr) {
    if (!Number.isFinite(num)) {
      return -1;
    }

    // Count zero values
    if (num === 0) {
      zeroCount++;
    }
  }

  return zeroCount;
}

// ==============================================================================
// Program Execution
// ==============================================================================

// Define the input array
const numbers = [0, 5, 0, 120, 10, 8, 3, 0, 0];

// Execute the function and display the result
console.log(`Amount of zero: ${countZeros(numbers)}`);
