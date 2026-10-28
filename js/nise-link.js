(function () {
  var real = document.getElementById("realHost").textContent.replace(/^\s+|\s+$/g, "");
  var list = document.querySelector(".url-list");
  var chances = document.getElementById("chances");
  var modal = document.getElementById("miss");
  var why = document.getElementById("missWhy");
  var missLeft = document.getElementById("missLeft");
  var closeBtn = document.getElementById("missClose");
  var outModal = document.getElementById("out");
  var outWhy = document.getElementById("outWhy");
  var retry = document.getElementById("retry");
  var last = null;
  var left = 3;
  var playing = true;

  var glyphName = {
    "l": "小文字の l",
    "I": "大文字の I",
    "1": "数字の 1",
    "i": "小文字の i",
    "o": "小文字の o",
    "O": "大文字の O",
    "0": "数字の 0"
  };

  function reason(url) {
    var text = url.replace(/^\s+|\s+$/g, "");
    var n = Math.min(real.length, text.length);
    var i;
    for (i = 0; i < n; i++) {
      if (real.charAt(i) === text.charAt(i)) continue;
      var from = real.charAt(i);
      var to = text.charAt(i);
      if (glyphName[from] && glyphName[to]) {
        return glyphName[from] + " が、" + glyphName[to] + " になっています。本物と見比べてください。";
      }
      if ((from === "/" && to === ".") || (from === "." && to === "/")) {
        return "ドットの位置が違います。本物は example のあとが /login です。";
      }
      return "本物と違う文字があります。1文字ずつ見比べてください。";
    }
    if (text.length !== real.length) return "長さが違います。本物のアドレスと見比べてください。";
    return "本物のアドレスと、1文字ずつ見比べてください。";
  }

  function buttonText(btn) {
    return btn.textContent.replace(/^\s+|\s+$/g, "");
  }

  function setButtons(disabled) {
    var buttons = list.querySelectorAll("button");
    var i;
    for (i = 0; i < buttons.length; i++) buttons[i].disabled = disabled;
  }

  function shuffle() {
    var items = [];
    var i;
    var j;
    var tmp;
    for (i = 0; i < list.children.length; i++) items.push(list.children[i]);
    for (i = items.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      tmp = items[i];
      items[i] = items[j];
      items[j] = tmp;
    }
    for (i = 0; i < items.length; i++) list.appendChild(items[i]);
  }

  function paint() {
    chances.textContent = String(left);
  }

  function openMiss(btn) {
    last = btn;
    why.textContent = reason(buttonText(btn));
    missLeft.textContent = "残り " + left + " 回です。";
    setButtons(true);
    modal.hidden = false;
    closeBtn.focus();
  }

  function closeMiss() {
    modal.hidden = true;
    if (playing) setButtons(false);
    if (last) last.focus();
  }

  function openOut(btn) {
    outWhy.textContent = reason(buttonText(btn));
    setButtons(true);
    modal.hidden = true;
    outModal.hidden = false;
    retry.focus();
  }

  function start() {
    left = 3;
    playing = true;
    last = null;
    modal.hidden = true;
    outModal.hidden = true;
    paint();
    shuffle();
    setButtons(false);
  }

  list.addEventListener("click", function (e) {
    var btn = e.target.closest("button");
    if (!btn || !playing || modal.hidden === false || outModal.hidden === false) return;
    if (buttonText(btn) === real) {
      location.href = "nise-honmono.html";
      return;
    }
    left -= 1;
    paint();
    if (left <= 0) {
      playing = false;
      openOut(btn);
      return;
    }
    openMiss(btn);
  });

  closeBtn.addEventListener("click", closeMiss);
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeMiss();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) closeMiss();
  });
  retry.addEventListener("click", start);

  start();
})();
