'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//リンクをクリックすると、リンク先外部サイトを、別のWINDOWで開く



//テストの定型文 Test boilerplate
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("OK! Test PASSED.");
    } else {
      console.error("Test FAILED. Try again!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }

  //https://yurifukuda.github.io/YuriFukuda.fnd29/ Gitの保存場所URLメモ
