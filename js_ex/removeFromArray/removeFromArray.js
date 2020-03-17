const removeFromArray = function() {
    var argumentsArr = [...arguments];
    var result = [];
    for (i=0; i<arguments[0].length; i++){
        if (argumentsArr.slice(1, arguments.length).includes(argumentsArr[0][i])){
        } else {
            result[result.length] = argumentsArr[0][i];
        }
    }
    return result;
}

module.exports = removeFromArray
