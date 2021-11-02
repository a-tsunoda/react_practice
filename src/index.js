import React from "react";

// ReactDomはhtmlにコンポーネントを反映させるためのもの
import ReactDom from "react-dom";

// // 関数を使ってコンポーネントを表現する
// const App = () => {
//   return (
//     // returnするhtmlは１つのタグで囲まないとエラーになる
//     // 回避するために<></>で囲む
//     <>
//       <h1>こんにちは！</h1>
//       <p>げんき？</p>
//     </>
//   );
// };

// コンポーネントをinportする
// import 関数名 from　ファイルのディレクトリ
import App from "./App";

// inportしたReactDomのrender関数で画面へ反映させる
// render関数の第一引数に<変数名/>、第二引数にhtmlファイルのどこへ反映させるかを書く
ReactDom.render(<App />, document.getElementById("root"));
