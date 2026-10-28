MiraiGate.setup({
  mission: 0,
  total: 0,
  progressLabel: "チャレンジ　見えない文字",
  storageKey: "mirai_bonus_css",
  hash: "9a93071551d2a822408182c8fd65ade869525fe7499cd5d1ac5a5ddb2c15311e",
  fix: {
    packed: true,
    ask: "秘密の文字列を消してください。案内の文は残します。大きさを0にしただけでは残ります。",
    before: "K2cp8Yu78YCy9Ja59JWk9JSr9JSe9Ja4K2RndnkpUVtWUGxURERIXkRIWVhDSF9eU15ZUGorOGRndnkp9Jaw9JaO9JeVKzhnKQ==",
    keep: ["本日のコードは", "です。"],
    keepWhy: "案内の文は残し、秘密の文字列だけ消してください。",
    gone: ["VERESF5ESFlYQ0hfXlNeWVA="],
    goneWhy: "秘密の文字列が残っています。大きさを0にしても、HTMLに残っています。"
  },
  successHtml: "正解です。文字の大きさを0にすると、画面には出ません。文字は1文字ずつページの中に残っています。並びはCSSで決めているので、検証に並んだ順と、画面に出る順は違います。<br><a class=\"btn\" href=\"challenge.html\">チャレンジ選択に戻る</a>"
});
