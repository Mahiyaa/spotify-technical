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
  let sortedArr = [];
  let sArr = s.split('')
  let tArr = t.split('')

  let i = 0;
  while (i < tArr.length) {
    for (let j = 0; j < sArr.length; j++) {
      if (sArr[j] === tArr[i]) {
        sortedArr.push(sArr[j])
      }
    }
    i++
  }

  return sortedArr.join('')
}





