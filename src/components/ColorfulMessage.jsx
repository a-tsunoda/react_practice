import React from "react";

const ColorfulMessage = (props) => {
  // 分割代入を利用してpropsを省略する
  const { color, children } = props;
  const contentLedyStyle = {
    // propsで受け取る内容
    // color: props.color

    // propsの記載を省略した書き方(変数名とスタイル名が同じ時の省略方法)
    color
  };

  // propsで受け取るメッセージ（変数名を指定）
  // return <p style={contentLedyStyle}>{props.message}</p>;

  // propsで受け取るメッセージ（childrenでタグの中身を指定）
  // return <p style={contentLedyStyle}>{props.children}</p>;

  // propsの記載を省略した書き方
  return <p style={contentLedyStyle}>{children}</p>;
};

export default ColorfulMessage;

// default export と通常のexport　（普段は通常exportを使った方が良さそう）
// 通常exportはconstの前にexportをつける
// 例）export const ColorfulMessage...
// App.jsxにimport{}
// 例）import { ColofulMessage } from ...
