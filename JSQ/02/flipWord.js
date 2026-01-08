/*
FLIP WORDS IN A STRING :
Given a string `s`, you need to reverse the order of words in the given string.

Note: The string may contain leading or trailing dots ('.') or multiple dots between two words. The returned string should have only a single dot ('.') separating the words.

    Example 1:

        ```
        Input: s = "piyush.likes.to.play.chess"
        Output: chess.play.to.likes.piyush
        ```
*/ 

function flipWord(w){
    let y = w.replaceAll(".",",")
    // console.log(Array(y).reverse());
    let x = y.split(",").reverse();
    console.log(String(x).replaceAll(",","."));
    
}
flipWord("piyush.likes.to.play.chess")

 function flipWords(s) {
        // Split the input string by '.' to extract words
        const words = s.split('.');
        // Reverse the array of words
        words.reverse();
        // Join the reversed array of words with '.'
        return words.join('.');
    }
    console.log(flipWords("piyush.likes.to.play.chess"));