function countUniqueValues(array) {
  var p1 = 0;
  var p2 = 1;

  if (array.length === 0) {
    return p1;
  }

  while (p2 < array.length) {
    if (array[p1] !== array[p2]) {
      p1++;
      array[p1] = array[p2];
    }
    p2++;
  }
  return p1 + 1;
}
