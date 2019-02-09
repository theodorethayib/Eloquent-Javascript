const arrayToList = function(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

const listToArray = function(list) {
  let array = [];
  for (let index = list; index; index = index.rest) {
    array.push(index.value);
  }
  return array;
}

const prepend = function(value, list) {
  return {value, rest:list};
}

function nth(list, n) {
  if (!list) return undefined;
  if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
