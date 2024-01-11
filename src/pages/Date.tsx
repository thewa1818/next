import { type } from "os";
import React, { FC } from "react";
import stylex from "@ladifire-opensource/stylex";
import { TextProps } from "@/types/kadai";

const styles = stylex.create({
  date: {
    fontSize: "12px",
    color: "silver",
  },
});

const Date: FC<TextProps> = ({ text }) => {
  return <p className={stylex(styles.date)}>{text}</p>;
};

export default Date;
