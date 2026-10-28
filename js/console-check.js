MiraiGate.setup({
  mission: 0,
  total: 0,
  progressLabel: "チャレンジ　消し忘れたメモ",
  storageKey: "mirai_bonus_console",
  hash: "6b8014dfa592ad4239e35dc9753bfa3cfe5e6986627c7e6fa3c74e7c45bdada5",
  fix: {
    packed: true,
    ask: "秘密を出している console.log を消してください。公開完了の行は残します。",
    before: "dHh5ZHh7cjl7eHA/NfKSu/6BnPK5m/OtkTU+LB10eHlkeHtyOXt4cD81/oGc8I6t9JS29JS1+Kuf8aGf9JaA8qiP9JWb+KueLTdRW1ZQbFRYWURYW1JIW1JWXGo1Piw=",
    keep: ["公開完了"],
    keepWhy: "公開完了の行は残し、秘密の console.log だけ消してください。",
    gone: ["VFhZRFhbUkhbUlZc"],
    goneWhy: "秘密の文字が残っています。コメントにしても、ファイルを開けば読めます。"
  },
  successHtml: "正解です。console.log に出した文字は、検証のコンソールから誰でも読めます。<br>公開前に、秘密情報のログ出力を消してください。<br><a class=\"btn\" href=\"challenge.html\">チャレンジ選択に戻る</a>"
});
