const ftoc = function(far) {
  var celsius = (far -32) * 5/9;
  celsius = Math.round(celsius * 10) /10;
  return celsius
}

const ctof = function(celsius) {
  var far = celsius * 9/5 + 32;
  far = Math.round(far * 10) / 10;
  return far;
}

module.exports = {
  ftoc,
  ctof
}
