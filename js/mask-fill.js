(function () {
  var field = document.getElementById("tempPw");
  if (!field) return;
  var codes = [70, 76, 65, 71, 123, 84, 89, 80, 69, 95, 73, 83, 95, 86, 73, 83, 85, 65, 76, 125];
  var text = "";
  for (var i = 0; i < codes.length; i++) text += String.fromCharCode(codes[i]);
  field.value = text;
})();
