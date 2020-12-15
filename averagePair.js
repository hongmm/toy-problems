function averagePair(array, target){
  // add whatever parameters you deem necessary - good luck!
  if (array.length === 0) {
      return false;
  }
  var start = 0;
  var end = array.length - 1;

  while (start < end) {
      var avg = (array[start] + array[end]) / 2
      if (avg === target) {
          return true;
      }
      if (avg < target) {
          start++;
      } else {
          end--;
      }
  }
  return false;
}
// time n space 1