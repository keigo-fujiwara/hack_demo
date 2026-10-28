MiraiGate.setup({
  mission: 3,
  total: 6,
  title: "プログラムの中の鍵",
  hash: "3825e76fadd39336a73976320bcdfd7c1995c582d3855751ad5f7af4b52c2515",
  fix: {
    packed: true,
    lead: "キーワードは正解です。APIは、ほかのサービスへ「このデータをください」と頼む窓口です。APIキーは、その窓口を使う合言葉です。",
    lesson: [
      { text: "この合言葉は、ページといっしょにブラウザへ届く JavaScript に書いてありました。検証の「ソース」で開けたので、見に来た人なら読めます。" },
      { text: "消すのは合言葉の文字列です。接続先のURLは、どこへ頼むかの住所なので残します。" }
    ],
    ask: "合言葉の文字列を消してください。空にするか、行ごと消します。接続先のURLは残します。",
    before: "YXZlN1ZHXkhUWFlRXlA3KjdsHTc3cnlzZ3h+eWMtNzV/Y2NnZC04OHZnfjl6fmV2fjpkf3h9fjlyb3Z6Z3tyOGEmNTsdNzdWU1peWUhWR15IXFJOLTc1en5ldn5Ie35hckhkfEgucSR2JSZ0J3Z1ICAjSFFWXFI1Ox03N2VycH54eS03NXZnOnl4ZWN/cnZkYzomNR1qLA==",
    keep: ["api.mirai-shoji.example"],
    keepWhy: "接続先まで消さず、合言葉の文字列だけ消してください。",
    gone: ["en5ldn5Ie35hckhkfEgucSR2JSZ0J3Z1ICAjSFFWXFI="],
    goneWhy: "合言葉の文字列が残っています。コメントにしても、このプログラムはブラウザに届くので読めます。",
    forbid: [{ re: "ADMIN_API_KEY\\s*:\\s*[\"'][^\"']+[\"']", why: "別の鍵を書くのも同じです。空にするか、その行を消してください。" }]
  },
  successHtml:
    "<p>正解です。</p>" +
    "<p>APIは、ほかのサービスに「このデータをください」と頼む窓口です。APIキーは、その窓口を使う合言葉です。管理者用の合言葉なので、知っている人は管理者として接続できます。</p>" +
    "<p>いま消した文字列は、ページといっしょにブラウザへ届く JavaScript に書いてありました。検証の「ソース」で開けたので、見に来た人なら誰でも読めます。</p>" +
    "<p>合言葉そのものはサーバーに置き、ブラウザへは送りません。ブラウザはサーバーに「つないで」と頼み、サーバーが合言葉を使って窓口へつなぎます。接続先のURLは住所なので、残してよいものです。</p>" +
    "<a class=\"btn\" href=\"naibu-memo.html\">ミッション4へ進む</a>"
});
