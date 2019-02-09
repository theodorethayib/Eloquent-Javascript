const reverseArray = function(array) {
  let reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

const reverseArrayInPlace = function(array) {
  arrLength = array.length;
  for (let i = array.length - 1; i >= 0; i--) {
    array.push(array[i]);
  }
  for (let j = 0; j < arrLength; j++) {
    array.shift();
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
