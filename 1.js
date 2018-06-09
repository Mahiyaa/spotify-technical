/* Question 1 -- sortByStrings(s,t):
Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".
*/

/*
Possible approach:
start with an empty array (newArr)
iterate through t in outer loop
iterate through s in inner loop
while at element t, if element at s === element t, push to newArr
return newArr.join('')
*/

//Final Solution
function sortByStrings(s, t) {
  let sortedArr = '';

  let i = 0;
  while (i < t.length) {
    for (let j = 0; j < s.length; j++) {
      if (s[j] === t[i]) {
        sortedArr += s[j]
      }
    }
    i++
  }

  return sortedArr
}





