MiraiGate.setup({
  mission: 0,
  total: 0,
  progressLabel: "チャレンジ　点々のパスワード",
  storageKey: "mirai_bonus_mask",
  hash: "c981cbdeba4317dbb7ce03df80b8b132fec6437e5e85b0c5ccbadb0282c2dd1a",
  fix: {
    packed: true,
    ask: "入力欄に入っている仮パスワードを消してください。連絡の文は残します。",
    before: "K2cp86y59JSG9JWu9JS49JSr9JSe9Ja5/pe08KK2KzhnKR0rfnlnYmM3fnMqNWNyemdHYDU3Y25ncio1Z3ZkZGB4ZXM1N2F2e2JyKjVRW1ZQbENOR1JIXkRIQV5EQlZbajUp",
    keep: ["仮パスワードの連絡"],
    keepWhy: "連絡の文は残し、仮パスワードの文字列だけ消してください。",
    gone: ["Q05HUkheREhBXkRCVls="],
    goneWhy: "仮パスワードが残っています。点々は見た目だけで、欄の中の文字は残ります。"
  },
  successHtml: "正解です。パスワード欄の点々は、見た目を隠しているだけです。<br>ブラウザの中には、入れた文字がそのまま残っています。<br><a class=\"btn\" href=\"challenge.html\">チャレンジ選択に戻る</a>"
});
