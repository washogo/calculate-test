/**
 * 登場人物
 * 1. 商品の値段
 * 2. 支払うお金
 * 3. お釣り
 * 4. お金の種類
 * フロー
 * 1. 商品の値段を入力する
 * 2. 支払うお金を入力する
 * 3. お釣りを計算する
 * 4. お釣りを取得する
 * 入力について
 * →引数とする
 * 出力について
 * →戻り値とする
 */

type Result = {
  [key: number]: number;
};

function calculate(productPrice: number, payMoney: number): Result {
  // お釣りの初期化
  let change = payMoney - productPrice;
  // お金の種類
  const moneyUnits = [10000, 5000, 1000, 500, 100, 50, 10, 5, 1];
  // お釣りの内訳
  const result = {} as Result;

  // 大きいお金の種類からお釣りを計算する
  for (let unit of moneyUnits) {
    if (change >= unit) {
      // 対象の種類のお金がいくつあるか計算する
      const amount = Math.floor(change / unit);
      // 結果を更新する
      result[unit] = amount;
      // お釣りを更新する
      change -= unit * amount;
    }
  }

  return result;
}

// 動作確認
console.log(calculate(900, 9999));
