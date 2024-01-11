import { type } from "os";
import React, { FC } from "react";
import stylex from "@ladifire-opensource/stylex";
import NextImage from "next/image";
import { UrlProps } from "@/types/kadai";

const styles = stylex.create({
  image: {
    width: "50px",
    height: "50px",
  },
  img: {
    borderRadius: "50%",
    objectFit: "cover",
  },
});

const ProImage: FC<UrlProps> = ({ url }) => {
  return (
    <p className={stylex(styles.image)}>
      <NextImage
        className={stylex(styles.img)}
        src={url}
        alt="image"
        width={50}
        height={50}
      />
    </p>
  );
};

export default ProImage;
