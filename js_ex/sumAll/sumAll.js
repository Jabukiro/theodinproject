const sumAll = function(int1, int2) {
    var sum = 0;
    if (typeof(int1) != 'number' || typeof(int2) != 'number' || int1<0 || int2<0){
        return 'ERROR';
    }
    if(int1 > int2 ){
        var temp = int1
        int1 = int2;
        int2 = temp;
    }
    for (i=int1; i<=int2; i++){
        sum += i;
    }
    return sum;

}

module.exports = sumAll
