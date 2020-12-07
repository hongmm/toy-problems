function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
      return false;
  }

  // var str1Letters = {};
  // var str2Letters = {};

  // for (var i = 0; i < str1.length; i++) {
  //     str1Letters[str1[i]] = !!str1Letters[str1[i]] ? str1Letters[str1[i]] + 1 : 1;
  // }

  // for (var i = 0; i < str2.length; i++) {
  //     str2Letters[str2[i]] = !!str2Letters[str2[i]] ? str2Letters[str2[i]] + 1 : 1;
  // }

  // for (var key in str1Letters) {
  //     if (!str2Letters[key]) {
  //         return false;
  //     }
  //     if (str1Letters[key] !== str2Letters[key]) {
  //         return false;
  //     }
  // }

  // return true;


  // better memory version
  var storage = {};
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    storage[letter] ? strorage[letter] += 1 : storage[letter] = 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!storage[letter]) { // zero counts as false in evaluation
      return false;
    }
    else {
      storage[letter] -= 1; // accounts for duplicate letters
    }
  }

  return true;
}



