MiraiGate.setup({
  mission: 0,
  total: 0,
  progressLabel: "チャレンジ　あとから増える文字",
  storageKey: "mirai_bonus_dom",
  hash: "0618dbd470ceb464948965878905bf1a9a18076905674396e620afebac9845da",
  fix: {
    packed: true,
    ask: "ブラウザへ送っている秘密の文字列を消してください。連絡文は残します。",
    before: "YXZlN3lyYGQ3KjdzeHRienJ5YzlwcmNSe3J6cnljVW5ecz81eXJgZDU+LB15cmBkOWNyb2NUeHljcnljNyo3NfGLu/GAsvSWuf6XtPCitvSWuPSXlvCzqfKRkvSUivSUq/SVqPSUvPSWvPGZpf+rnvSWgPSWqfSWgPSWiPSXlTUsHWF2ZTdkcnRlcmM3Kjc1UVtWUGxTWFpIVlFDUkVIW1hWU2o1LB15cmBkOXZnZ3J5c1R/fntzP3p2fHJffnNzcnk/ZHJ0ZXJjPj4s",
    keep: ["本日の連絡は、社内ポータルに掲載しました。"],
    keepWhy: "連絡文は残し、秘密の文字列だけ消してください。",
    gone: ["U1haSFZRQ1JFSFtYVlM="],
    goneWhy: "秘密の文字列が残っています。画面に出さなくても、JSにあればブラウザへ届きます。"
  },
  successHtml: "正解です。画面に出ていなくても、検証の要素には文字が増えていることがあります。<br>ページを開いたあとに足された文字は、要素を見ると分かります。<br><a class=\"btn\" href=\"challenge.html\">チャレンジ選択に戻る</a>"
});
