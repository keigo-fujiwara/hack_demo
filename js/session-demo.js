// ついやってしまう「ブラウザに大事な情報を保存」（ミッション5）
try {
  localStorage.setItem("mirai_session", JSON.stringify({
    user: "admin",
    role: "administrator",
    note: "セッション情報をブラウザに保存（本来やってはいけない例）",
    flag: "FLAG{CLIENT_STORAGE_IS_VISIBLE}"
  }, null, 2));
} catch (e) { /* 保存できないブラウザでは、このミッションは別のブラウザで開く */ }
