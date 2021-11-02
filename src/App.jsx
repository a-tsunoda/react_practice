// reactのコンポーネントは拡張子をjsxにする
// jsでも問題ないが見分けやすくするため

// コンポーネント名は先頭と単語の区切りは大文字で（パスカルケース）

import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // 動的に変わる部分はuseStateで変数と初期値を設定することができる
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    setNum(num + 1);
  };

  // カウントが３の倍数の時だけ顔文字が出る
  // on/offのボタンに影響してしまうのでuseEffectで関心の分離をさせる（今回はnumだけに関心を持たせたい）
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        // setFaceShowFlag(true);にすると再レンダリングが繰り返されてエラーになる
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // 中で使っている変数を変数に入れるとエラーは消えるが、今回はnumだけ関心を持たせたいので変えない
    //エラー消すための処理
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  // スタイル名やイベント名はキャメルケース（単語の繋ぎ部分が大文字）
  // スタイルの指定は文字列として書く("")
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    <>
      {/* cssのstyleはタグないに直接書くことも変数内に書いて反映させることも可能
    style={} */}
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>げんき？</p>

      {/* importしたColofulMessageを書き換える */}
      <ColorfulMessage color="blue" message="元気ではないです" />
      {/* タグのように扱う */}
      <ColorfulMessage color="pink">とっても元気です！！</ColorfulMessage>

      {/* javascriptはイベント名={} */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>

      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
  );
};

// exportすることで他のファイルでinportできるようになる
export default App;
