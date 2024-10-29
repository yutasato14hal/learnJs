// 目標
// if, else, switch の条件分岐構造を理解する。
// for, while, forEach などのループ処理を使って繰り返しを制御する。
// これらを使って、より複雑なロジックを構築できるようになる。

// 課題
// 条件分岐の練習:

// if-else と switch を使って、数値の大きさを判定するプログラムを書いてみてください。
let input = 2
if (input === 0) {
  console.log('Zero');
} else if (input > 0) {
  console.log('Positive');
} else {
  console.log('Negative');
}
// 例えば、ユーザーが入力した数値が 0 より大きい場合は "Positive"、0 なら "Zero"、それ以外なら "Negative" と出力するようなプログラムです。



switch (true) {
  case input === 0:
    console.log('Zero');
    break;
  case input > 0:
    console.log('Positive');
    break;
  default:
    console.log('Negative');
}
// ループの練習:

// for ループを使って、1から10までの数値を出力するプログラムを書いてください。
for (let i = 1; i < 11; i++) {
  console.log(i);
}
// while ループも使って、同様の動作を実装してみましょう。

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}
// forEach の練習:

// 配列を使って、forEach メソッドで各要素をコンソールに出力してみてください。
const arr = [1,2,3,4,5]
arr.forEach(element => {
  console.log(element);
});

