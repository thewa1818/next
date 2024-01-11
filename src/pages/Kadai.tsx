import React from "react";
import stylex from "@ladifire-opensource/stylex";
import User from "./User";
import Name from "./Name";
import Comment from "./Comment";
import Date from "./Date";
import ProImage from "./ProImage";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { KadaiProps } from "@/types/kadai";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Link from "next/link";

const styles = stylex.create({
  wrapper: {
    backgroundColor: "#9ec0e937",
    width: "700px",
    margin: "auto",
    marginTop: "20px",
    borderRadius: "8px",
    padding: "20px",
  },
  profileWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "dotted",
    borderBottomColor: "silver",
    paddingBottom: "10px",
  },
  profileItems: {
    display: "flex",
    alignItems: "center",
  },
  commentWrapper: {
    paddingTop: "10px",
  },
  miniWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  star: {
    color: "orange",
  },
});

const Kadai = ({ user, name, url, text, date, star, href }: KadaiProps) => {
  const stars = Array.from({ length: star }, (_, index) => (
    <StarRoundedIcon key={index} />
  ));

  return (
    <>
      <div className={stylex(styles.wrapper)}>
        <div className={stylex(styles.profileWrapper)}>
          <div className={stylex(styles.profileItems)}>
            <ProImage url={url} />
            <User text={user} />
            <Link href={href} target="_blank">
              <Name text={name} />
            </Link>
          </div>
          <ArrowForwardIosRoundedIcon />
        </div>
        <div className={stylex(styles.commentWrapper)}>
          <Comment text={text} />
          <div className={stylex(styles.miniWrapper)}>
            <p className={stylex(styles.star)}>{stars}</p>
            <Date text={date} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Kadai;
