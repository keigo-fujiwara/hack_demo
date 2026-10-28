(function () {
  var LIMIT = 30;
  var left = LIMIT;
  var count = 0;
  var spread = null;
  var clock = null;
  var alive = false;
  var misses = 0;

  var remain = document.getElementById("remain");
  var liveCount = document.getElementById("liveCount");
  var failCount = document.getElementById("failCount");
  var log = document.getElementById("infectLog");
  var form = document.getElementById("stopForm");
  var input = document.getElementById("stopCode");
  var note = document.getElementById("stopNote");
  var ok = document.getElementById("stopOk");
  var modal = document.getElementById("failModal");
  var retry = document.getElementById("retry");

  function paint() {
    liveCount.textContent = String(count);
    failCount.textContent = String(count);
  }

  function infect() {
    count += 1;
    paint();
    var row = document.createElement("div");
    row.className = "log-bad";
    row.textContent = "ERROR  感染 " + count + "  コピーが増えました";
    log.appendChild(row);
    while (log.children.length > 6) log.removeChild(log.firstChild);
  }

  function stopClock() {
    if (clock) clearInterval(clock);
    clock = null;
  }

  function stopSpread() {
    if (spread) clearInterval(spread);
    spread = null;
  }

  function showFail() {
    if (!alive) return;
    alive = false;
    stopClock();
    input.disabled = true;
    modal.hidden = false;
    retry.focus();
  }

  var guides = [
    { code: "setInterval(関数, ミリ秒)", text: "指定したミリ秒ごとに、関数を繰り返します。返した名前が、このページの timer です。" },
    { code: "clearInterval(名前)", text: "setInterval で始めた繰り返しを止めます。今回の正解は clearInterval(timer) です。予約語ではなく、ブラウザが最初から持っている関数です。" },
    { code: "setTimeout(関数, ミリ秒)", text: "指定したミリ秒のあと、関数を1回だけ実行します。繰り返しではありません。" },
    { code: "clearTimeout(名前)", text: "setTimeout を、実行される前に止めます。setInterval の繰り返しは止まりません。" },
    { code: "console.log(値)", text: "検証のコンソールに文字を出します。繰り返しは止まりません。" },
    { code: "alert(文字)", text: "画面にメッセージを出します。繰り返しは止まりません。" }
  ];

  function showExplain() {
    var lead = document.getElementById("stopOkText");
    var box = document.getElementById("fnExplain");
    var i;
    var line;
    var code;
    lead.textContent = "止まりました。一覧にあった関数は、それぞれ次の働きです。";
    box.textContent = "";
    line = document.createElement("p");
    line.textContent = "解説";
    line.style.fontWeight = "800";
    box.appendChild(line);
    for (i = 0; i < guides.length; i++) {
      line = document.createElement("p");
      line.className = "fix-lesson";
      code = document.createElement("code");
      code.textContent = guides[i].code;
      line.appendChild(code);
      line.appendChild(document.createTextNode(" " + guides[i].text));
      box.appendChild(line);
    }
  }

  function start() {
    stopClock();
    stopSpread();
    left = LIMIT;
    count = 0;
    alive = true;
    misses = 0;
    remain.textContent = String(left);
    log.textContent = "";
    note.textContent = "";
    document.getElementById("stopOkText").textContent = "";
    document.getElementById("fnExplain").textContent = "";
    ok.hidden = true;
    modal.hidden = true;
    input.disabled = false;
    input.value = "";
    paint();
    infect();
    spread = setInterval(infect, 1000);
    clock = setInterval(function () {
      left -= 1;
      remain.textContent = String(left > 0 ? left : 0);
      if (left <= 0) showFail();
    }, 1000);
    input.focus();
  }

  function core(value) {
    return String(value).replace(/\s+/g, "").replace(/;+$/g, "").replace(/^window\./, "");
  }

  function matches(value) {
    return core(value) === "clear" + "Interval(timer)";
  }

  function hint(value) {
    var compact = core(value);
    if (/^clearinterval\(timer\)$/i.test(compact)) {
      return "大文字と小文字が違います。clearInterval の I と、timer の書き方を見てください。";
    }
    if (/clearinterval/i.test(compact) && compact.indexOf("timer") === -1) {
      return "関数の名前は合っています。カッコの中に、1行目の timer を書いてください。";
    }
    if (/setinterval/i.test(compact) && !/clearinterval/i.test(compact)) {
      return "setInterval は、繰り返しを始める関数です。一覧では、set を clear に変えた関数が対になります。";
    }
    if (/cleartimeout/i.test(compact)) {
      return "clearTimeout は、setTimeout を止める関数です。今動いているのは setInterval です。";
    }
    if (/settimeout/i.test(compact)) {
      return "setTimeout は、1回だけ実行する関数です。今動いているのは setInterval です。";
    }
    if (/console\.log/i.test(compact)) {
      return "console.log は、コンソールに文字を出す関数です。繰り返しは止まりません。";
    }
    if (/alert\s*\(/i.test(compact)) {
      return "alert は、画面にメッセージを出す関数です。繰り返しは止まりません。";
    }
    misses += 1;
    if (misses === 1) {
      return "一覧の6つの中から選んでください。今動いているのは setInterval です。";
    }
    return "setInterval を止める関数を選び、カッコの中に 1行目の timer を書いてください。";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!alive) return;
    if (matches(input.value)) {
      alive = false;
      stopClock();
      stopSpread();
      input.disabled = true;
      note.textContent = "";
      showExplain();
      ok.hidden = false;
      return;
    }
    note.textContent = hint(input.value);
  });

  retry.addEventListener("click", start);
  document.getElementById("back").addEventListener("click", function () {
    stopClock();
    stopSpread();
  });

  start();
})();
