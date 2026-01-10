/*
String Cleaner: Remove Duplicates

Given a string, remove all consecutive duplicate characters from it until no more adjacent duplicate characters remain. This problem requires repetitive removal of adjacent duplicates in the string until the string can no longer be reduced.

For example, consider the string `"abbaca"`. The first pair of adjacent duplicates you encounter is `"bb"`. Removing `"bb"` results in the string `"aaca"`. In this string, `"aa"` is another adjacent duplicate pair which can be removed, leaving the string as `"ca"`. At this point, there are no more adjacent duplicates remaining, and the final result is `"ca"`.

### Example:

1. Input:

   ```
   "abbaca"
   ```
   Output:

   ```
   "ca"
   ```
*/ 

function deleteDuplicate(s){
   
//    return [...new Set(s)].join("");
 let ns= [];
 for(let ch of s){
    if(ns.length>0 && ns[ns.length-1]===ch){
        ns.pop()
    }else{
        ns.push(ch)
    }
}
return ns.join("");

}

console.log(deleteDuplicate("abbaca"));
console.log(deleteDuplicate("azxxzy"));
console.log(deleteDuplicate("a"));
console.log(deleteDuplicate("abba"));