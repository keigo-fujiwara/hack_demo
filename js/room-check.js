MiraiGate.setup({
  mission: 0,
  total: 0,
  progressLabel: "チャレンジ　秘密の部屋",
  storageKey: "mirai_bonus_room",
  hash: "21f018737f78768ff8e679531c5b6ca58bf122d5bc6a3608adb3e885b193fa9b",
  fix: {
    packed: true,
    ask: "見せるつもりのないURLを消してください。倉庫と通路の案内は残します。",
    before: "K3N+YTd0e3ZkZCo1bXh5cjUp8pee8q28KzhzfmEpHSt2N3R7dmRkKjVteHlyNTd/ZXJxKjVkf35kcmNkYjh1JjonJic5f2N6ezUpR0QrOHYpHStzfmE3dHt2ZGQqNW14eXI1Kf6Xjf+guCs4c35hKQ==",
    keep: ["倉庫", "通路"],
    keepWhy: "倉庫と通路の案内は残し、秘密のURLだけ消してください。",
    gone: ["dSY6JyYnOX9jens="],
    goneWhy: "見せるつもりのないURLが残っています。色やカーソルを変えても、HTMLに残ります。"
  },
  successHtml: "正解です。文字の色やカーソルが普通でも、HTMLに別のURLが残っていることがあります。<br>公開するページに、見せるつもりのないリンクを残さないでください。<br><a class=\"btn\" href=\"../challenge.html\">チャレンジ選択に戻る</a>"
});
