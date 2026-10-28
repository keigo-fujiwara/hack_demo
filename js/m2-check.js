MiraiGate.setup({
  mission: 2,
  total: 6,
  title: "隠しページ",
  hash: "9b28a858db015691d393a5c89154adc3dccab5dae4acf2ce25186b21895a44cd",
  fix: {
    packed: true,
    ask: "上の loggedIn は、ログインしていると true になる設定です。if のカッコの中の ____ を、この loggedIn に書き換えて提出してください。true の人だけ、中の show が動きます。",
    before: "ODg39JS69JWn9JWz9JSk9JaA9Jax9JaT9JWc862t9Ja4N2NlYnI39Ja89Ja99JWc/7+68rmNHWF2ZTd7eHBwcnNeeTcqN3F2e2RyLB0dcWJ5dGN+eHk3eGdyeVZzen55Pz43bB03N35xNz9ISEhIPjdsHTc3Nzdkf3hgPzV8dnllfjpzdmR/dXh2ZXM5f2N6ezU+LB03N2odag==",
    keep: ["kanri-dashboard.html"],
    keepWhy: "管理画面の show は残してください。書き換えるのは ____ だけです。",
    forbid: [
      { re: "____", why: "____ が残っています。上の設定にある loggedIn を、カッコの中に書いてください。" },
      { re: "if\\s*\\(\\s*!", why: "! が付くと、ログインしていない人だけ開きます。loggedIn だけを書いてください。" }
    ],
    need: ["if\\s*\\(\\s*loggedIn\\b"],
    needWhy: "if の中が loggedIn になっていません。上の設定で用意した名前を、そのまま書いてください。"
  },
  successHtml: "正解です。重要なページは、ログインで守ります。<br><a class=\"btn\" href=\"unyo-api.html\">ミッション3へ進む</a>"
});
