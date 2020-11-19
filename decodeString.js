// Given an encoded string, return its decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
// Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k.
// For example, there won't be input like 3a or 2[4].

// Example 1
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Example 2
// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Example 3
// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

// Example 4
// Input: s = "abc3[cd]xyz"
// Output: "abccdcdcdxyz"


// I: string
// O: converted string
// C: original string does not contain digits, k is always positive integer
// E: double/triple digit k value, string length 1 -> 30, lowercase

var decodeString = function(string) {
  var decoded = "";
  var k = "";
  var i = 0;
  //debugger;
  while (i < string.length) {
    if (!isNaN(string[i])) {
      // if string is a number
      k += string[i]; // still a string at this point
      i++;
    } else {
      if (k === "") {
        k = "1";
      }
      k = Number(k); // convert current k to int
      var currentStr = string.slice(i); // can be [xyz] or xyz
      var found = false;
      var encoded = "";
      var j = 0;
      // find substring
      if (currentStr[j] === '[') {
       while(!found) {
        if (!currentStr[j] || !isNaN(currentStr[j]) || currentStr[j] === ']') {
          // if number is found or at the end
          decoded += encoded.repeat(k); // add converted string to decoded
          i += j + 1; // move pointer down the string
          k = "";
          found = true; // exit loop
        } else {
          if (currentStr[j] !== '[' && currentStr[j] !== ']') {
            encoded += currentStr[j];
          }
          j++;
        }
       }
      } else {
        while (!found) {
          if (!currentStr[j] || !isNaN(currentStr[j])) {
            // if number is found or at the end
            decoded += encoded.repeat(k); // add converted string to decoded
            i += j; // move pointer down the string
            k = ""
            found = true; // exit loop
          } else {
            encoded += currentStr[j];
            j++;
          }
        }
      }
    }

    //i++;
  }

  return decoded;
}


var s1 = "3[a]2[bc]";
var s2 = "3[a2[c]]";
var s3 = "2[abc]3[cd]ef";
var s4 = "abc3[cd]xyz";
console.log(decodeString(s1));
console.log("aaabcbc");
console.log(decodeString(s2));
console.log("accaccacc");
console.log(decodeString(s3));
console.log("abcabccdcdcdef");
console.log(decodeString(s4));
console.log("abccdcdcdxyz");
// debugger;
