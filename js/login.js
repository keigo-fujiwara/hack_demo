// =====================================================
//  ミッション1のログイン（訓練用）
//  パスワードの文字列はここには書きません。
//  入力をハッシュにして、用意した値とだけ比べます。
// =====================================================
(function () {
  var PASS_HASH = "690c2932d0f705cc0989594d28aed070c2ce3b910343a38478ee2e41f5c1add1";

  function bind() {
    var form = document.getElementById("loginForm");
    if (!form || !window.MiraiGate) return;
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var user = document.getElementById("uid").value.replace(/^\s+|\s+$/g, "");
      var pass = document.getElementById("pw").value;
      var box = document.getElementById("loginResult");
      if (MiraiGate.sha256Hex(user + ":" + pass) === PASS_HASH) {
        box.className = "result ok";
        box.innerHTML = "ログイン成功！ ようこそ管理者さん。<br>見つけたフラグはこちらです。<br>" +
          "<span class='flag'>FLAG{COMMENT_LEAK}</span><br>波括弧 { } の中のキーワードだけを、下の欄に入力してください。";
        var answer = document.getElementById("answer");
        if (answer && answer.scrollIntoView) answer.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        box.className = "result ng";
        box.textContent = "IDまたはパスワードが違います。（ヒント：ページのソースの上の方に…？）";
      }
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bind);
  else bind();
})();
