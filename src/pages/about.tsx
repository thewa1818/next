import Form from "@/Components/Form";
import Header from "@/Components/Header";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>aboutページ</title>
      </Head>
      <Header />
      <div>
        <Form />
      </div>
    </>
  );
};

export default about;
