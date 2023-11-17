import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import { type } from "os";

const inter = Inter({ subsets: ["latin"] });

type Aaa = {
  bgColor: "error" | "done" | "wait";
};

const Button = styled.div<Aaa>`
  width: 100px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ bgColor }) => {
    switch (bgColor) {
      case "error":
        return css`
          background: pink;
        `;
      case "done":
        return css`
          background: green;
        `;
      case "wait":
        return css`
          background: gray;
        `;
      default:
    }
  }}
`;

export default function Home() {
  const [data, setData] = useState<null | string>(null);
  const router = useRouter();

  const handleClick = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result = await res.json();
    console.log(result[0].url, "sss");

    setData(result[0].url);
    console.log("click", "押した");
  };

  const test = () => {
    router.push("news");
  };

  return (
    <>
      <Head>
        <title>TOPページ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>TOPページ</h1>

        {/* {!data && <CircularProgress color="success" />} */}
        {/* {data && <img src={data} alt="" className={styles.catImage} />} */}

        <Button bgColor="done" onClick={test} className={styles.btn}>
          押して変化
        </Button>
      </div>
    </>
  );
}
