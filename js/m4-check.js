MiraiGate.setup({
  mission: 4,
  total: 6,
  title: "読めなくしたつもり",
  hash: "f60f4a5eb929a4ffddfaade03dcb1bb66c57d07d6080d087fe7d7f4c7dbd9098",
  fix: {
    packed: true,
    ask: "下の ____ は、ページに残っていた文字列の場所です。____ を （サーバーで暗号化済み） に書き換えてください。秘密そのものはページに残さず、サーバーに置いた、と残すためです。",
    lesson: [
      { text: "いまコンソールで実行した命令は、3つがつながっています。" },
      { code: "document.querySelector('.secret-box')", text: "クラス名が secret-box の欄を、このページから見つけます。" },
      { code: ".dataset.memo", text: "その欄の data-memo に入っている文字列を取り出します。" },
      { code: "atob( ... )", text: "その文字列を、元の文章に戻します。鍵は使いません。" },
      { text: "鍵なしで戻せたので、ページに置いた文字列は秘密になりません。文字の並びを変えただけでは、隠せません。" },
      { text: "秘密そのものはブラウザへ送らず、サーバーで暗号化して保管します。ページには、保管したことだけを書きます。その文が（サーバーで暗号化済み）です。" }
    ],
    before: "K3N+YTdzdmN2OnpyengqNUhISEg1KfCzqfKRkvSUtvSUtSs4c35hKQ==",
    keep: ["社内メモ"],
    keepWhy: "社内メモ の文字は残してください。書き換えるのは ____ です。",
    gone: ["Wn5ldn4lJyUi", "UllUWFNeWVBIXkRIWVhDSFJZVEVOR0NeWFk="],
    goneWhy: "さっき読めたパスワードやメモが残っています。data-memo の中には戻さないでください。",
    forbid: [{ re: "____", why: "____ が残っています。____ を（サーバーで暗号化済み）に書き換えてください。" }],
    need: ["暗号化|encrypt"],
    needWhy: "____ を（サーバーで暗号化済み）に書き換えてください。ページに残っていた文字列の場所を、サーバーに置いたという意味の文にします。"
  },
  successHtml: "正解です。ページに残した文字列は、鍵なしで元に戻せます。秘密そのものはサーバーで暗号化して保管し、ページにはそのことだけを書きます。<br><a class=\"btn\" href=\"session-hozon.html\">ミッション5へ進む</a>"
});
