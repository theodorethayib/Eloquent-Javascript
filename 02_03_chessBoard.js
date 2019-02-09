let size = 8;
for (i = 0; i < size; i++) {
  s = '';
  if (i % 2 == 0) {
    for (j = 0; j < size; j++) {
      if (j % 2 == 0) {
        s = s + ' ';
      } else {
        s = s + '#';
      }
    }
  } else {
    for (j = 0; j < size; j++) {
      if (j % 2 == 0) {
        s = s + '#';
      } else {
        s = s + ' ';
      }
    }
  }
  console.log(s);
}
