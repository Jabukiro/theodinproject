const caesar = function(word, shift) {
    //Assumes no shift lower than -length*2 will be provided
    // e.g. -55

    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = upper.toLowerCase();
    const length = upper.length;
    var caesarWord = '';
    'Hello, World!'
    for (i=0; i<word.length; i++){
        var caesarIdx;
        var matchLower =  lower.match(word[i]);
        var matchUpper = upper.match(word[i]);
        if (matchLower != null){
            caesarIdx = (length*2+matchLower.index+shift)%length
            caesarWord += lower[caesarIdx];
            continue
        } else if (matchUpper != null){
            caesarIdx = (length*2+matchUpper.index+shift)%length
            caesarWord += upper[caesarIdx];
            continue
        } else{
            //non-letter. No need to shift
            caesarWord += word[i];
            continue
        }
    }
    return caesarWord;



}

module.exports = caesar
