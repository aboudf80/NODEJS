/**
 * ==============================================================================
 * Module Name: Prime Numbers
 * Description: Prints all prime numbers smaller than 237.
 *
 * Developers:
 * 1. Ahmad Aboud
 * 2. Nazar Jraisi
 * ==============================================================================
 */

// Function: Checks whether a number is prime.
// Parameter: num - The number to check.
// Returns: true if the number is prime, otherwise false.
function isPrime(num) {

  // Validate the input number
  if (!Number.isInteger(num) || num < 2) {
    return false;
  }

  // Check if the number has any divisors
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// ==============================================================================
// Program Execution
// ==============================================================================

// Check all numbers smaller than 237
for (let num = 2; num < 237; num++) {

  // Print the number if it is prime
  if (isPrime(num)) {
    console.log(num);
  }
}
