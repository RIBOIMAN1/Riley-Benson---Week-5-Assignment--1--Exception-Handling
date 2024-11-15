// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) { // This function repeatedly attempts to multiply two numbers until it succeeds
  while (true) { // Keeps trying indefinitely until a successful multiplication occurs
    try { // Executes the following code that might throw an error
      return primitiveMultiply(a, b); // Calls the primitiveMultiply function to multiply a and b, returning the result if no error occurs
    } catch (e) { // Handles any errors that occur in the try block
      if (!(e instanceof MultiplicatorUnitFailure)) { // Continues to handle the error only if it is a MultiplicatorUnitFailure
        throw e; // Re-throws the error if it is of a different type
      }
    }
  }
}
console.log(reliableMultiply(5, 6)); // Executes reliableMultiply with 5 and 6, and prints the result to the console