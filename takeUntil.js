const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `\u274C\u274C\u274C Assertion Failed: ${actual} === ${expected}`;
  }
};

const takeUntil = function(array, callback) {
  const result1 = [];
  for (const element of array) {
    if (!callback(element)) {
      result1.push(element);
    } else {
      return result1;
    }
  }
  return result1;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);