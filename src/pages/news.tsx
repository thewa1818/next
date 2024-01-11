import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import { NewsData } from "@/types/news";
import stylex from "@ladifire-opensource/stylex";

const styles = stylex.create({
  aaa: {
    fontWeight: 700,
    color: "red",
  },
});

const data: NewsData[] = [
  {
    id: "1",
    title: "1番目のデータ",
    color: "red",
  },
  {
    id: "2",
    title: "2番目のデータ",
  },
  {
    id: "3",
    title: "3番目のデータ",
  },
];

const news = () => {
  const router = useRouter();

  const test = (): void => {
    router.push("/");
  };
  const next = (): void => {
    router.push("/renshu");
  };
  return (
    <>
      <Head>
        <title>newsページ</title>
      </Head>
      <div>news</div>

      {data &&
        data.map((item: NewsData) => (
          <div key={item.id}>
            <p>No.{item.id}</p>
            <p>タイトル.{item.title}</p>
          </div>
        ))}

      <button onClick={test}>TOPへ戻る</button>
      <button onClick={next}>自習ページ</button>
      <div className={stylex(styles.aaa)}>Component</div>
    </>
  );
};

export default news;
