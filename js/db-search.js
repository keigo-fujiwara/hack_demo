// 模擬の社員検索。本物のデータベースには接続しない。
// 入力を検索文に連結すると、見える行が変わることを見せる。
(function () {
  var PUBLIC_ROWS = [
    { id: "1001", name: "田中 太郎", busho: "営業部", memo: "公開データ" },
    { id: "1002", name: "佐藤 花子", busho: "情報システム部", memo: "公開データ" },
    { id: "1003", name: "鈴木 一郎", busho: "人事部", memo: "公開データ" }
  ];
  var SECRET_ROW = {
    id: "9001",
    name: "管理者レコード（非公開）",
    busho: "システム",
    memo: "FLAG{USER_INPUT_IS_NOT_CODE}",
    secret: true
  };

  function isInjection(input) {
    var quoteAt = input.indexOf("'");
    if (quoteAt === -1) return false;
    var after = input.slice(quoteAt + 1).replace(/\s+/g, "").toLowerCase();
    if (after.indexOf("or") === -1) return false;
    return after.indexOf("1=1") !== -1 || after.indexOf("1'='1") !== -1;
  }

  function renderRows(rows) {
    var body = document.getElementById("resultBody");
    while (body.firstChild) body.removeChild(body.firstChild);
    if (!rows.length) {
      var tr = document.createElement("tr");
      var td = document.createElement("td");
      td.colSpan = 4;
      td.textContent = "一致する行はありません。";
      tr.appendChild(td);
      body.appendChild(tr);
      return;
    }
    rows.forEach(function (row) {
      var tr = document.createElement("tr");
      if (row.secret) tr.className = "hit";
      [row.id, row.name, row.busho, row.memo].forEach(function (text) {
        var td = document.createElement("td");
        td.textContent = text;
        tr.appendChild(td);
      });
      body.appendChild(tr);
    });
  }

  function search(input) {
    var query = document.getElementById("queryView");
    var note = document.getElementById("searchNote");
    var shown;
    if (isInjection(input)) {
      query.textContent = "SELECT 社員ID, 氏名, 部署, 備考 FROM shain WHERE 部署 = '" + input + "' AND 公開 = 1";
      shown = PUBLIC_ROWS.concat([SECRET_ROW]);
      note.textContent = "条件がいつも正しくなり、公開 = 1 の絞り込みが外れました。非公開の行も表示されています。";
    } else if (!input) {
      query.textContent = "SELECT 社員ID, 氏名, 部署, 備考 FROM shain WHERE 公開 = 1";
      shown = PUBLIC_ROWS.slice();
      note.textContent = "公開されている行だけを表示しています。文字を入れると、下の検索文と表が変わります。";
    } else {
      query.textContent = "SELECT 社員ID, 氏名, 部署, 備考 FROM shain WHERE 部署 = '" + input + "' AND 公開 = 1";
      shown = PUBLIC_ROWS.filter(function (row) {
        return row.busho.indexOf(input) !== -1 || row.name.indexOf(input) !== -1;
      });
      if (input.indexOf("'") !== -1) {
        note.textContent = "引用符で文字列が閉じました。このうしろに、いつも正しい条件を足すと絞り込みが外れます。";
      } else if (!shown.length) {
        note.textContent = "一致する公開データはありません。検索文の中の文字は変わっています。";
      } else {
        note.textContent = "入力した文字に合う公開データだけを表示しています。";
      }
    }
    renderRows(shown);
  }

  function bind() {
    var input = document.getElementById("q");
    var form = document.getElementById("searchForm");
    if (!input || !form) return;
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      search(input.value);
    });
    input.addEventListener("input", function () { search(input.value); });
    var samples = document.querySelectorAll("[data-sample]");
    Array.prototype.forEach.call(samples, function (button) {
      button.addEventListener("click", function () {
        input.value = button.getAttribute("data-sample");
        search(input.value);
        input.focus();
      });
    });
    search("");
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bind);
  else bind();
})();
