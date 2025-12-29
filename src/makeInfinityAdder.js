'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let totalSum = 0;

  return function adder(number) {
    if (number === undefined) {
      const FINAL_RESULT = totalSum;

      totalSum = 0;

      return FINAL_RESULT;
    }

    totalSum += number;

    return adder;
  };
}

module.exports = makeInfinityAdder;
