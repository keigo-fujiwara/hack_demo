MiraiGate.setup({
  mission: 0,
  total: 0,
  progressLabel: "チャレンジ　ログを読む",
  storageKey: "mirai_bonus_log",
  hash: "ae106561b1aa3f6c33c3ac7645e5c4045f8065d810908f6c79c1ab1373517262",
  fix: {
    packed: true,
    ask: "止まった依頼の fragment 行を消してください。完了した依頼の行は残します。",
    before: "JSclITomJzolIzcnJS0nJi0nIDdeWVFYNzdlcmYqJicnJTdxZXZwenJ5YypFUlZTSB0lJyUhOiYnOiUjNyclLScmLSYiN15ZUVg3N2VyZiomJyclN3FldnB6cnljKkNfUkgdJSclITomJzolIzcnJS0nJi0lIDdeWVFYNzdlcmYqJicnJTdxZXZwenJ5YypDRVZUUh0lJyUhOiYnOiUjNyclLScmLSYuN15ZUVg3N2VyZiomJycmN2RjdmNiZCpzeHlyN2V4YGQqJiUvJw==",
    keep: ["req=1001"],
    keepWhy: "完了した依頼の行は残し、止まった依頼の内部コードだけ消してください。",
    gone: ["cWV2cHpyeWMqRVJWU0g=", "cWV2cHpyeWMqQ19SSA==", "cWV2cHpyeWMqQ0VWVFI="],
    goneWhy: "止まった依頼の内部コードが残っています。色を変えても、ログに残ります。"
  },
  successHtml: "正解です。ログには、処理の途中で出た秘密が残ることがあります。<br>依頼番号ごとに時刻の順で読むと、どの処理で漏れたか分かります。秘密情報はログに出さないでください。<br><a class=\"btn\" href=\"challenge.html\">チャレンジ選択に戻る</a>"
});