import { type } from "os";
import React, { FC } from "react";
import stylex from "@ladifire-opensource/stylex";
import { TextProps } from "@/types/kadai";

const styles = stylex.create({
  name: {
    fontSize: "18px",
    paddingLeft: "6px",
  },
});

const Name: FC<TextProps> = ({ text }) => {
  return <h3 className={stylex(styles.name)}>{text}</h3>;
};

export default Name;
