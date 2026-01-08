/*
Vowel Counter
Given a string `s`, return the number of vowels (a, e, i, o, u) present in it. The comparison should be case-insensitive.

For example, if the input string is "MasterJI", your task is to count all instances of the vowels, which are both uppercase and lowercase.

Example 1:

```
Input: s = "Programming"
Output: 3
Explanation: The vowels in "Programming" are "o", "a", "i".
```
*/ 

function countVovel(s){
    let v =s.toLowerCase().match(/[aeiou]/g)
    return v? v.length:0  ;
}
// console.log(countVovel("Programming"));
// console.log(countVovel(""));
// console.log(countVovel("Artificial Intelligence"));
function countVowel(s) {
    let count = 0;
    let vowels = "aeiou";

    for (let ch of s.toLowerCase()) {
        if (vowels.includes(ch)) {
            count++;
        }
    }
    return count;
}
console.log(countVowel("Programming"));
console.log(countVowel(""));
console.log(countVowel("Artificial Intelligence"));


