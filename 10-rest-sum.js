/***********************************************************************
Write a function named `restSum` that accepts all incoming parameters and sums them.

**Hint**: Use rest parameter syntax!

Examples:
restSum(3,5,6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
restSum(0); // => 0
***********************************************************************/

// you'll need to change the parameters!
function restSum(...arrayOfParam) {
  let sum = 0;
  arrayOfParam.forEach(function(elem) { sum += elem;})

  return sum;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = restSum;
