// =====================================================
//  みらい商事 社内ポータル  フロントエンド制御
//  ※ 訓練用サンドボックスです（本物の情報は含みません）
// =====================================================

// --- 社内APIの設定 -----------------------------------
// TODO(開発メモ): このキーは本番公開前にサーバー側へ移すこと！！
//                （このままだと誰でもJSを開けば丸見え…）
const API_CONFIG = {
  endpoint: "https://api.mirai-shoji.example/v1",
  // 本番用の管理者APIキー（絶対に外に出さないこと）
  ADMIN_API_KEY: "mirai_live_sk_9f3a21c0ab774_FAKE",
  // ↓↓↓ ミッション3のフラグ ↓↓↓
  // FLAG{NEVER_HARDCODE_SECRETS}
  region: "ap-northeast-1"
};

// --- ログイン処理（※サンドボックス簡易版）------------
// 本来はサーバーで照合します。ここでは学習のため、
// 「ソースに残ってしまった仮パスワード」で入れてしまう状態を再現。
const LEAKED_USER = "admin";
const LEAKED_PASS = "Mirai2024!";

function doLogin(ev){
  ev.preventDefault();
  const u = document.getElementById("uid").value.trim();
  const p = document.getElementById("pw").value;
  const box = document.getElementById("loginResult");
  if (u === LEAKED_USER && p === LEAKED_PASS){
    box.className = "result ok";
    box.innerHTML = "ログイン成功！ ようこそ管理者さん。<br>" +
      "🏁 ミッション1クリア： <span class='flag'>FLAG{COMMENT_LEAK}</span>";
  } else {
    box.className = "result ng";
    box.textContent = "IDまたはパスワードが違います。（ヒント：ページのソースのどこかに…？）";
  }
  return false;
}

// --- ついやってしまう「ブラウザに大事な情報を保存」----
// ミッション5：開発者が便利さのためにlocalStorageへ機密を保存した例
try {
  localStorage.setItem("mirai_session", JSON.stringify({
    user: "admin",
    role: "administrator",
    note: "セッション情報をブラウザに保存（本来やってはいけない例）",
    // ↓↓↓ ミッション5のフラグ ↓↓↓
    flag: "FLAG{CLIENT_STORAGE_IS_VISIBLE}"
  }));
} catch(e){ /* プライベートモード等 */ }

window.addEventListener("DOMContentLoaded", function(){
  const form = document.getElementById("loginForm");
  if (form) form.addEventListener("submit", doLogin);
});
