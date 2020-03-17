const reverseString = function( param ) {
  param = param.toString();
  var reverse = '';
  var length = param.length-1;
  for (i=0; i<=length; i++){
    reverse += param[length-i];
  }
  return reverse;
}

module.exports = reverseString
