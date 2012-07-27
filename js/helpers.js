var lpad = function(value, padding) {
  var zeroes = "0";
  for (var i = 0; i < padding; i++) { zeroes += "0"; }
  return (zeroes + value).slice(padding * -1);
}
