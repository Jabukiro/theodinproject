const repeatString = function( param1, param2 ) {
    param1 = param1.toString();
    returnS = '';
    if ( param2>=0 ){
        i=1;
        while ( i<=param2 ){
            returnS += param1;
            i++;
        }
    } else{
        return 'ERROR';
    }
    return returnS;
}

module.exports = repeatString
