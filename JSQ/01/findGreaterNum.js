/*
You are given a positive integer `num` consisting only of digits `6` and `9`.

Return *the maximum number you can get by changing **at most** one digit (*`6` *becomes* `9`*, and* `9` *becomes* `6`*)*.

```
Input: num = 9669
Output: 9969
Explanation: 
Changing the first digit results in 6669.
Changing the second digit results in 9969.
Changing the third digit results in 9699.
Changing the fourth digit results in 9666.
The maximum number is 9969.
```
*/ 


// let num = 9669;
function FindGreater(num){
// console.log(num);
let a = num.toString();
let b= a.replace("6","9");
// let gt = Number(num.toString().replace("6","9"))
return console.log(Number(b));



}
FindGreater(9669);
FindGreater(9996);
