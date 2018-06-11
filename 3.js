/*
Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time.

Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢

*/

/*
same as changePossibilities(targetSum, arrOfNums) -> count how many different ways the nums can result in targetSum
return count
look up dynamic programming
there must be a recursive way
*/


function changePossibilities(totalAmt, coins) {
  let changePossArr = [];
  for(let i = 0; i <=totalAmt; i++) {
    changePossArr[i] = 0  //initialize 0 value for each spot [0,0,0,0]
  }

  changePossArr[0] = 1;
  for(let j = 0; j < coins.length; j++) {
    for (let k = 1; k < changePossArr.length; k++) {
      if (k >= coins[j]) {
        changePossArr[k] += changePossArr[k - coins[j]]
      }
    }
  }
  return changePossArr[totalAmt]
}
