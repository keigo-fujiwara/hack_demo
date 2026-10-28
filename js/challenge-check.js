MiraiGate.setup({
  mission: 0,
  total: 0,
  progressLabel: "チャレンジ　入力が命令になる",
  storageKey: "mirai_bonus_db",
  hash: "ea7031372719184994b14a3f7c5e13ae2668077f1b7927d55256e17a2bf2003e",
  fix: {
    packed: true,
    ask: "入力を検索文にくっつけず、? のように値だけを渡す形へ直してください。",
    before: "YXZlN2RmezcqNzVEUltSVEM3PTdRRVhaN2R/dn55N0BfUkVSN/6Uv/CqpTcqNzA1Nzw3fnlnYmM3PDc1MDUs",
    keep: ["SELECT", "部署"],
    keepWhy: "検索文そのものを消さず、入力のくっつけ方を変えてください。",
    forbid: [{ re: "\\+\\s*input|input\\s*\\+|\\$\\{\\s*input", why: "入力が検索文にくっついたままです。? のように、値は別に渡してください。" }],
    need: ["\\?"],
    needWhy: "値を別に渡す印がありません。検索文の中を ? にして、入力はくっつけないでください。"
  },
  successHtml: "正解です。入力が検索文の一部になると、見せるつもりのない行まで出ます。<br>守り方は、入力を文にくっつけず、値としてだけ渡すことです。<br><a class=\"btn\" href=\"challenge.html\">チャレンジ選択に戻る</a>"
});
