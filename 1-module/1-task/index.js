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

factorial(5);
factorial(3);
factorial(1);
factorial(0);
