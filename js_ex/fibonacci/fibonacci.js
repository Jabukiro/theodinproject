const fibonacci = function(n) {
    n = Number( n );
    if (n <0){
        return "OOPS";
    }
    var current = 1;
    var previous = 0;
    var next=1;
    for (i=1;i<n; i++){
        next = current + previous;
        previous = current;
        current = next;
    }
    return next;
}

module.exports = fibonacci
