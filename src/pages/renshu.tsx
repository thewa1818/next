import React from "react";
import { useRouter } from "next/router";

const renshu = () => {
  const router = useRouter();
  const back = (): void => {
    router.push("/news");
  };

  //interfaceでがっちゃんこ
  interface Gyudon {
    name: string;
    price: number;
  }

  //同じ名前でマージさせられる
  interface Gyudon {
    calories: number;
  }

  const Sukiya: Gyudon = {
    name: "チーズ牛丼",
    price: 400,
    calories: 600,
  };

  //継承して新しい型を作れる
  interface SideMenu extends Gyudon {
    topping: "明太子" | "マヨネーズ" | "生卵";
  }

  const Sukiya2: SideMenu = {
    topping: "マヨネーズ",
    name: "ネギ牛丼",
    price: 480,
    calories: 800,
  };

  //typeでがっちゃんこ
  type Carry = {
    name: string;
    price: number;
  };

  //同じ名前で作ってもマージされないエラーが出る
  type Carry2 = {
    calories: number;
  };

  const Matsuya: Carry & Carry2 = {
    name: "ビーフカレー",
    price: 1000,
    calories: 1200,
  };

  return (
    <>
      <div>
        <h2>interfaceでがっちゃんこ</h2>
        <p>{Sukiya.name}</p>
        <p>{Sukiya.price}円</p>
        <p>{Sukiya.calories}kcal</p>
        <hr />
        <p>{Sukiya2.name}</p>
        <p>{Sukiya2.topping}</p>
        <p>{Sukiya2.price}円</p>
        <p>{Sukiya2.calories}kcal</p>
      </div>
      <hr />
      <div>
        <h2>typeでがっちゃんこ</h2>
        <p>{Matsuya.name}</p>
        <p>{Matsuya.price}円</p>
        <p>{Matsuya.calories}kcal</p>
      </div>
      <button onClick={back}>戻る</button>
    </>
  );
};

export default renshu;
