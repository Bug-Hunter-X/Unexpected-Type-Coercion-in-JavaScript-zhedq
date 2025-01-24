function foo(a, b) {
  // Type checking to ensure both parameters are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error: Inputs must be numbers';
  }
  if (a === null || b === null) {
    return null;
  }
  return a + b; // Numerical addition
}

console.log(foo(5, 10)); // Output: 15
console.log(foo(null, 10)); // Output: null
console.log(foo('5', 10)); // Output: Error: Inputs must be numbers
console.log(foo(5, '10')); // Output: Error: Inputs must be numbers