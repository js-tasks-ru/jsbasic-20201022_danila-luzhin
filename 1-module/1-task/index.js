/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {

  let startValue = 1;

  for (let i = 0; i < n; i++) {
    startValue = startValue * (n - i);
  }
  return startValue;
}
