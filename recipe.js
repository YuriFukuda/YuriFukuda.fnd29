'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//リンクをクリックするイベント
//別のWINDOWを開かないようにデフォルト動作？をとめる
//今あるWINDOWへリンク先を開く

function jumpTo(panasonicSite){
  event.preventDefault();
  const url = event.currentTarget.href;
  window.open(url, `_blank`);

}
