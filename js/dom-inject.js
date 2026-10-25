(function () {
  var note = document.getElementById("liveNote");
  if (!note) return;
  var codes = [70, 76, 65, 71, 123, 68, 79, 77, 95, 65, 70, 84, 69, 82, 95, 76, 79, 65, 68, 125];
  var extra = document.createElement("span");
  extra.className = "late";
  var text = "";
  for (var i = 0; i < codes.length; i++) text += String.fromCharCode(codes[i]);
  extra.textContent = text;
  note.appendChild(extra);
})();
