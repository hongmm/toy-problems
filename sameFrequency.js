function sameFrequency(n1, n2){
  // good luck. Add any arguments you deem necessary.
  var str1 = String(n1);
  var str2 = String(n2);
  var storage1 = {};
  for (var i = 0; i < str1.length; i++) {
      storage1[str1[i]] = storage1[str1[i]] ? ++storage1[str1[i]] : 1;
  }

  for (var j = 0; j < str2.length; j++) {
      if (!storage1[str2[j]]) {
          return false;
      }

      storage1[str2[j]]--;
      if (storage1[str2[j]] < 0) {
          return false;
      }
  }
  return true;
}


console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))

// alternate sameFrequency Solution
// function sameFrequency(num1, num2){
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   if(strNum1.length !== strNum2.length) return false;

//   let countNum1 = {};
//   let countNum2 = {};

//   for(let i = 0; i < strNum1.length; i++){
//     countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//   }

//   for(let j = 0; j < strNum1.length; j++){
//     countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//   }

//   for(let key in countNum1){
//     if(countNum1[key] !== countNum2[key]) return false;
//   }

//   return true;
// }