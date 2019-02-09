const countBs = function(x) {
  let bCount = 0;
  for (i = 0; i < x.length; i++) {
    if (x[i] == "B") {
      bCount++;
    }
  }
  return bCount;
}

const countChar = function(x, c) {
  let count = 0;
  for (i = 0; i < x.length; i++) {
    if (x[i] == c) {
      count++;
    }
  }
  return count;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
