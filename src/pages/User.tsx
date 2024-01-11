import React, { FC } from "react";
import stylex from "@ladifire-opensource/stylex";
import { TextProps } from "@/types/kadai";

const styles = stylex.create({
  user: {
    fontSize: "12px",
    paddingLeft: "8px",
  },
});

const User: FC<TextProps> = ({ text }) => {
  return <p className={stylex(styles.user)}>{text}</p>;
};

export default User;
