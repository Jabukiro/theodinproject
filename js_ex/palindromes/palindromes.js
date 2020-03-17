const palindromes = function(word) {
    //Traverses string from back to front
    //Compares letter by letter
    //Skips non-letters/digits.
    word = word.toLowerCase();
    var equal = true;
    var length = word.length
    var idxFront = 0;
    var idxBack = word.length-1;
    //'Racecar!'
    while (equal){
        if (idxFront > idxBack)
        {
            //each letter has been compared one way
            //with no mismatch
            return true

        } else if (word[idxFront].match(/\w/) == null){
            //Non letter/digit.
            idxFront++;
            continue;
        } else if (word[idxBack].match(/\w/) == null){
            //Non letter/digit.
            idxBack--;
            continue;
        } else if (word[idxFront] == word[idxBack]){
            //letters match continue to look for next letters
            idxFront++
            idxBack--;
            continue
        } else{
            //Detected mismatch
            return false
        }

    }
}

module.exports = palindromes
