# みらい商事 社内ポータル（情報漏洩ハンター 訓練用サイト）

セキュリティ学習用の**架空の社内ポータル**です。本物の脆弱性はなく、データはすべてダミーです。
生徒はブラウザだけで「うっかり公開された情報」を見つけ、情報漏洩の原因と防ぎ方を学びます。

## GitHub Pages への公開
1. GitHubで新しいPublicリポジトリを作成
2. このフォルダ内のファイルを**フォルダ構成そのまま**アップロード（`index.html`がトップ）
3. Settings → Pages → Source を「Deploy from a branch」= `main` / `/(root)` → Save
4. 数分後、表示されたURLにアクセス

## ファイル構成
- `index.html` … トップ（M1コメント / M4 base64 / M3・M5 のjs読込）
- `js/app.js` … M3 APIキー・M5 localStorage・ログイン処理
- `robots.txt` … M2 隠しページの入口
- `kanri-dashboard.html` … M2到達先・社員名簿（M6入口）
- `shain/1001〜1003.html` … M6 連番IDの個人情報ページ
- `kaisetsu.html` … 解答＆防御解説
- `css/style.css` … デザイン

詳しい進行・解答は「講師ガイド」を参照してください。
