// =====================================================
//  フラグ判定（訓練用）
//  フラグの文字列はこのファイルに書きません。
//  入力を SHA-256 にして、各ページが持つハッシュとだけ比べます。
// =====================================================
(function (root) {
  var STORAGE_KEY = "mirai_mission_step";
  var resetChecked = false;

  function rotr(x, n) {
    return (x >>> n) | (x << (32 - n));
  }

  function utf8Bytes(str) {
    var out = [];
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c < 0x80) {
        out.push(c);
      } else if (c < 0x800) {
        out.push(0xc0 | (c >> 6), 0x80 | (c & 0x3f));
      } else if (c >= 0xd800 && c <= 0xdbff && i + 1 < str.length) {
        var c2 = str.charCodeAt(++i);
        var u = 0x10000 + ((c & 0x3ff) << 10) + (c2 & 0x3ff);
        out.push(
          0xf0 | (u >> 18),
          0x80 | ((u >> 12) & 0x3f),
          0x80 | ((u >> 6) & 0x3f),
          0x80 | (u & 0x3f)
        );
      } else {
        out.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 0x3f), 0x80 | (c & 0x3f));
      }
    }
    return out;
  }

  function sha256Hex(str) {
    var bytes = utf8Bytes(String(str));
    var bitLen = bytes.length * 8;
    bytes.push(0x80);
    while ((bytes.length % 64) !== 56) bytes.push(0);
    var hi = Math.floor(bitLen / 0x100000000);
    var lo = bitLen >>> 0;
    var i;
    for (i = 3; i >= 0; i--) bytes.push((hi >>> (i * 8)) & 0xff);
    for (i = 3; i >= 0; i--) bytes.push((lo >>> (i * 8)) & 0xff);

    var H = [
      0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
      0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
    ];
    var K = [
      0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
      0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
      0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
      0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
      0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
      0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
      0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
      0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
    ];

    var w = new Array(64);
    for (var off = 0; off < bytes.length; off += 64) {
      var t;
      for (t = 0; t < 16; t++) {
        var o = off + t * 4;
        w[t] = ((bytes[o] << 24) | (bytes[o + 1] << 16) | (bytes[o + 2] << 8) | bytes[o + 3]) >>> 0;
      }
      for (t = 16; t < 64; t++) {
        var s0 = (rotr(w[t - 15], 7) ^ rotr(w[t - 15], 18) ^ (w[t - 15] >>> 3)) >>> 0;
        var s1 = (rotr(w[t - 2], 17) ^ rotr(w[t - 2], 19) ^ (w[t - 2] >>> 10)) >>> 0;
        w[t] = (w[t - 16] + s0 + w[t - 7] + s1) >>> 0;
      }
      var a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7];
      for (t = 0; t < 64; t++) {
        var S1 = (rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25)) >>> 0;
        var ch = ((e & f) ^ ((~e) & g)) >>> 0;
        var temp1 = (h + S1 + ch + K[t] + w[t]) >>> 0;
        var S0 = (rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22)) >>> 0;
        var maj = ((a & b) ^ (a & c) ^ (b & c)) >>> 0;
        var temp2 = (S0 + maj) >>> 0;
        h = g;
        g = f;
        f = e;
        e = (d + temp1) >>> 0;
        d = c;
        c = b;
        b = a;
        a = (temp1 + temp2) >>> 0;
      }
      H[0] = (H[0] + a) >>> 0;
      H[1] = (H[1] + b) >>> 0;
      H[2] = (H[2] + c) >>> 0;
      H[3] = (H[3] + d) >>> 0;
      H[4] = (H[4] + e) >>> 0;
      H[5] = (H[5] + f) >>> 0;
      H[6] = (H[6] + g) >>> 0;
      H[7] = (H[7] + h) >>> 0;
    }

    var hex = "";
    for (i = 0; i < 8; i++) hex += ("00000000" + H[i].toString(16)).slice(-8);
    return hex;
  }

  function getClear() {
    try {
      var n = Number(localStorage.getItem(STORAGE_KEY) || "0");
      return n > 0 ? n : 0;
    } catch (e) {
      return 0;
    }
  }

  function setClear(mission) {
    try {
      if (mission > getClear()) localStorage.setItem(STORAGE_KEY, String(mission));
    } catch (e) { /* 保存できないブラウザでは、その場の正解表示だけ行う */ }
  }

  function maybeReset() {
    if (resetChecked) return;
    resetChecked = true;
    var params;
    try { params = new URLSearchParams(root.location.search); }
    catch (e) { return; }
    if (params.get("reset") !== "1") return;
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem("mirai_bonus_db");
      localStorage.removeItem("mirai_bonus_room");
      localStorage.removeItem("mirai_bonus_console");
      localStorage.removeItem("mirai_bonus_mask");
      localStorage.removeItem("mirai_bonus_css");
      localStorage.removeItem("mirai_bonus_dom");
      localStorage.removeItem("mirai_bonus_log");
    } catch (e) {}
    try {
      params.delete("reset");
      var query = params.toString();
      var next = root.location.pathname + (query ? "?" + query : "") + root.location.hash;
      root.history.replaceState(null, "", next);
    } catch (e) {}
    var host = root.document.getElementById("progress");
    if (!host || root.document.getElementById("resetNote")) return;
    var note = root.document.createElement("p");
    note.id = "resetNote";
    note.className = "muted reset-note";
    note.textContent = "このブラウザに保存されていた進捗をリセットしました。";
    host.insertAdjacentElement("afterend", note);
  }

  function renderProgress(mission, total, title, label) {
    var el = root.document.getElementById("progress");
    if (!el) return;
    if (label) {
      el.textContent = label;
      return;
    }
    el.textContent = "ミッション " + mission + " / " + total + (title ? "　" + title : "");
  }

  function markCleared(opts) {
    if (opts.storageKey) {
      try { localStorage.setItem(opts.storageKey, "1"); } catch (e) {}
      return;
    }
    setClear(opts.mission);
  }

  function showSuccess(box, input, form, html) {
    box.className = "result ok";
    box.innerHTML = html;
    if (input) input.disabled = true;
    var button = form ? form.querySelector("button") : null;
    if (button) button.disabled = true;
  }

  function progress(mission, total, title) {
    maybeReset();
    renderProgress(mission, total, title);
  }

  function whenCleared(mission, fn) {
    if (getClear() >= mission) fn();
  }

  function setup(opts) {
    maybeReset();
    renderProgress(opts.mission, opts.total, opts.title, opts.progressLabel);
    var form = root.document.getElementById(opts.formId || "flagForm");
    var input = root.document.getElementById(opts.inputId || "flagInput");
    var box = root.document.getElementById(opts.resultId || "flagResult");
    if (!form || !input || !box) return;

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var value = input.value.replace(/^\s+|\s+$/g, "");
      if (!value) {
        box.className = "result ng";
        box.textContent = "キーワードを入力してください。";
        return;
      }
      if (value.indexOf("FLAG") !== -1 || value.indexOf("{") !== -1 || value.indexOf("}") !== -1) {
        box.className = "result ng";
        box.textContent = "FLAG{ } の中のキーワードだけを入力してください。";
        return;
      }
      if (sha256Hex(value) === opts.hash) {
        markCleared(opts);
        showSuccess(box, input, form, opts.successHtml);
      } else {
        box.className = "result ng";
        box.textContent = "キーワードが違います。大文字・小文字もそのまま入力してください。";
      }
    });
  }

  root.MiraiGate = {
    sha256Hex: sha256Hex,
    setup: setup,
    progress: progress,
    whenCleared: whenCleared
  };
})(typeof window !== "undefined" ? window : globalThis);
