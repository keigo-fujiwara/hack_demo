MiraiGate.setup({
  mission: 6,
  total: 6,
  title: "番号を変えると…",
  hash: "65473d8b4d0c8197139d9a20598c2ee728cb51c63598edb298ad2e963b16acd2",
  fix: {
    packed: true,
    ask: "if の { と } はすでに書いてあります。カッコの中の ____ を canView(id) に書き換えてください。canView(id) は、その番号を見てよいかの確認です。正しい人だけ、中の return が動きます。",
    before: "cWJ5dGN+eHk3ZH94YFJ6Z3t4bnJyP35zPjdsHTc3fnE3P0hISEg+N2wdNzc3N2VyY2JleTdyemd7eG5ycmRMfnNKLB03N2odah0=",
    keep: ["employees"],
    keepWhy: "社員の return は残してください。書き換えるのは ____ だけです。",
    forbid: [{ re: "____", why: "____ が残っています。カッコの中を canView(id) に書き換えてください。" }],
    need: ["if\\s*\\(\\s*canView\\s*\\(\\s*id\\s*\\)"],
    needWhy: "____ が canView(id) になっていません。見る権限の確認を、カッコの中に書いてください。"
  },
  successHtml: "正解です。1件ごとに、見る権限をサーバーで確認します。<br><a class=\"btn\" href=\"../kaisetsu.html\">解説を見る</a><a class=\"btn\" href=\"../challenge.html\">チャレンジ問題へ</a>"
});
