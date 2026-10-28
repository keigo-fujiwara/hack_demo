MiraiGate.setup({
  mission: 1,
  total: 6,
  title: "消し忘れたメモ",
  hash: "6409622e42c727396636e8fefc588ff7cfbbb88b384819fa4903bf6d681eafc4",
  fix: {
    packed: true,
    ask: "仮パスワードのコメント行を、行ごと消してください。見出しとお知らせは残します。",
    before: "K38lKfCzqfKRkvSUivSUq/SVqPSUvPSWr/SVn/SWkfSWhPSWiis4fyUpHSs2Ojo386y59Ja58Lm28IeR/5eS9JW19JW89JWx9JSk9JSfN15TLTd2c3p+eTdHVkRELTdafmV2fiUnJSM2Nzo6KR0rZyn0lp3wiLL0lZ70loz0lrj0loT0lrb0lZ4rOGcp",
    keep: ["社内ポータルへようこそ", "お知らせはこちら"],
    keepWhy: "見出しやお知らせまで消えています。パスワードのコメントだけ消してください。",
    gone: ["Wn5ldn4lJyUj"],
    goneWhy: "パスワードが残っています。コメントのままや、別の文字への変換でも読めます。",
    forbid: [{ re: "<!--", why: "コメントが残っています。パスワードの行ごと消してください。" }]
  },
  successHtml:
    "正解です。HTMLに書いたパスワードやメモは、公開前に消します。<br>" +
    "次の手がかりは <strong>robots.txt</strong> です。" +
    "今のアドレスの最後が <code>/</code> なら、そのうしろに <code>robots.txt</code> を足して開いてください。" +
    "アドレスに <code>index.html</code> と見えているときだけ、その部分を <code>robots.txt</code> に変えます。" +
    "そこに書かれたファイル名が、次のページです。"
});
