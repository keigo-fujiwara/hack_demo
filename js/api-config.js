// =====================================================
//  外部サービス接続の設定
//  TODO(開発メモ): このキーは本番公開前にサーバー側へ移すこと！！
//                （このままだと誰でもJSを開けば丸見え…）
// =====================================================
var API_CONFIG = {
  endpoint: "https://api.mirai-shoji.example/v1",
  // 本番用の管理者APIキー（絶対に外に出さないこと）
  ADMIN_API_KEY: "mirai_live_sk_9f3a21c0ab774_FAKE",
  // ↓↓↓ ミッション3のフラグ ↓↓↓
  // FLAG{NEVER_HARDCODE_SECRETS}
  region: "ap-northeast-1"
};
