const range = function(start, end, rate = 1) {
  numberList = [];
  for (let i = start; i != end + rate; i += rate) {
      numberList.push(i);
  }
  return numberList;
}

const sum = function(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
