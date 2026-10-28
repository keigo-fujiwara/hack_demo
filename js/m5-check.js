MiraiGate.setup({
  mission: 5,
  total: 6,
  title: "ブラウザの中の機密",
  hash: "1c8ce2fd23b447610ac74a5f7355527ae270ccb07f0c088317bc85653cfef687",
  fix: {
    packed: true,
    ask: "flag の行を消してください。保存する名前を変えただけでは残ります。",
    before: "e3h0dntEY3hldnByOWRyY15jcno/NXp+ZXZ+SGRyZGR+eHk1OzddRFhZOWRjZX55cH5xbj9sHTc3YmRyZS03NXZzen55NTsdNzdleHtyLTc1dnN6fnl+ZGNldmN4ZTU7HTc3cXt2cC03NVFbVlBsVFteUllDSERDWEVWUFJIXkRIQV5EXlVbUmo1HWo+Piw=",
    keep: ["setItem", "mirai_session", "user", "role"],
    keepWhy: "消すのは flag の行だけです。setItem と、ほかの項目は残してください。",
    gone: ["VFteUllDSERDWEVWUFJIXkRIQV5EXlVbUg=="],
    goneWhy: "フラグが残っています。保存する名前を変えても、中身は読めます。",
    forbid: [{ re: "flag\\s*:", why: "flag の項目が残っています。行ごと消してください。" }]
  },
  successHtml: "正解です。秘密やトークンは、ブラウザの保存領域に置きません。<br><a class=\"btn\" href=\"jinji-meibo.html\">ミッション6へ進む</a>"
});
