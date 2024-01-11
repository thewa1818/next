import React from "react";
import Kadai from "./Kadai";

const list = () => {
  return (
    <>
      <Kadai
        url={"/download.jpg"}
        user="相談したカウンセラー"
        name="中島みゆき"
        text="ありがとうございました"
        date="2023年11月23日(53歳 女性)"
        star={5}
        href="https://www.miyuki.jp/"
      />
      <Kadai
        url={"/download-1.jpg"}
        user="相談したカウンセラー"
        name="木村拓哉"
        text="よかったです"
        date="2022年7月9日(46歳 男性)"
        star={3}
        href="https://www.johnnys-net.jp/page?id=artistTop&artist=35"
      />
      <Kadai
        url={"/download-2.jpg"}
        user="相談したカウンセラー"
        name="タッキー"
        text="元ジャニーズです"
        date="2022年3月6日(31歳 男性)"
        star={4}
        href="https://tobe-official.jp/"
      />
    </>
  );
};

export default list;
