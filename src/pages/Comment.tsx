import { type } from "os";
import React, { FC } from "react";
import stylex from "@ladifire-opensource/stylex";
import { TextProps } from "@/types/kadai";

const styles = stylex.create({
  comment: {
    fontSize: "16px",
  },
});

const Comment: FC<TextProps> = ({ text }) => {
  return <p className={stylex(styles.comment)}>{text}</p>;
};

export default Comment;
