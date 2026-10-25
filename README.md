# みらい商事 社内ポータル（情報漏洩ハンター 訓練用サイト）

セキュリティ学習用の**架空の社内ポータル**です。本物の脆弱性はなく、データはすべてダミーです。
生徒はブラウザだけで「うっかり公開された情報」を見つけ、フラグを入力して次のミッションへ進みます。1ページにつきミッションは1つです。

## GitHub Pages への公開

公開するのは **html / css / js / robots.txt だけ**にしてください。  
`講師ガイド_情報漏洩ハンター.md` を同じ場所に置くと、ファイル名を指定すれば生徒が解答を読めます。ミッションシートも、紙や別の配布にしてください。

1. GitHubで新しいPublicリポジトリを作成
2. サイト用ファイルを**フォルダ構成そのまま**アップロード（`index.html`がトップ）
3. Settings → Pages → Source を「Deploy from a branch」= `main` / `/(root)` → Save
4. 数分後、表示されたURLにアクセス

## ファイル構成

- `index.html` … ミッション1（HTMLコメントの仮パスワードでログイン）
- `robots.txt` … ミッション2の入口
- `kanri-dashboard.html` … ミッション2の到達先
- `unyo-api.html` / `js/api-config.js` … ミッション3（APIキー）
- `naibu-memo.html` … ミッション4（base64）
- `session-hozon.html` / `js/session-demo.js` … ミッション5（localStorage）
- `jinji-meibo.html` / `shain/1001〜1005.html` … ミッション6（名簿のリンクは1001〜1003。1004と1005は番号を変えると開く。フラグは1005）
- `kaisetsu.html` … ミッション1〜6の解答と防御解説（チャレンジの答えは載せない）
- `challenge.html` … チャレンジの選択
- `db-kensaku.html` / `js/db-search.js` / `js/challenge-check.js` … チャレンジ「入力が命令になる」
- `shanai-annai.html` / `shisetsu/b1-010.html` / `js/room-check.js` … チャレンジ「秘密の部屋を探す」（本社案内の平面図の一部にURLが埋まっている。ヒントなし。ポインターは変わらない）
- `console-memo.html` / `js/console-demo.js` … チャレンジ「消し忘れたメモ」（コンソールにログが残る）
- `kari-password.html` / `js/mask-fill.js` … チャレンジ「点々のパスワード」（欄の `type` を変えると点々が文字になる。HTMLにはフラグを書かない）
- `mie-nai-moji.html` … チャレンジ「見えない文字」（文字をばらして大きさを 0 にする。大きさを外すとCSSの順で読める）
- `ato-kara.html` / `js/dom-inject.js` … チャレンジ「あとから増える文字」（画面には出さない。読み込み後の要素にだけ増える）
- `batch-log.html` … チャレンジ「ログを読む」（止まった依頼の fragment を時刻順につなぐ）
- `js/gate.js` … フラグ判定（平文は持たず、SHA-256だけと比べる）
- `js/login.js` … ミッション1のログイン
- `js/m1-check.js` 〜 `js/m6-check.js` … 各ミッションの正解判定と、次へ進む案内
- `css/style.css` … デザイン

「回答する」を押して正解したときだけ、次のページへの案内が出ます。保存を消すときは `index.html?reset=1` を開きます。

詳しい進行・解答は「講師ガイド」を参照してください。
