/*
Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

For s = "4[ab]", the output should be decodeString(s) = "abababab"
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/

/*
Possible Approach:
need regex..
need recursion or use a helper function
iterate through the string, look for opening bracket, find corresponding closing bracket
call decodeString on inner contents
baseCase -> when there are no more brackets in the string
*/


function decodeString(s) {
  let findNumMatch = /\d/;
  let newStr = '';
  let repeatNum = 0;
  let startSlice = 0;
  let endSlice = 0;

  //baseCase
  if (s.indexOf('[') === -1) {
    newStr = s.slice(0, s.length-1) //remove the last closing bracket
    return newStr
  }
  else {
    for (let i = 0; i < s.length; i++) {
      if (findNumMatch.test(s[i])) {
        repeatNum = Number(s[i])
      }
      if (s[i] === '[') {
        startSlice = i+1
      }
      if (s[i] === ']') {
        endSlice = i
        break;
      }
    }

    for (let j = 0; j < repeatNum; j++) {
      let strRepeat = s.slice(startSlice, endSlice)
      newStr += strRepeat
    }
    return decodeString(s.slice(0, s.lastIndexOf(repeatNum)) + newStr + s.slice(s.length-1))
  }
}
