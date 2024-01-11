import React from "react";
import { StyledHeaderWrapper, StyledHeaderLink } from "./style";
import Link from "next/link";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <div>
        <StyledHeaderLink>
          <Link href={"/"}>HOME</Link>
        </StyledHeaderLink>

        <StyledHeaderLink>
          <Link href={"/news"}>NEWS</Link>
        </StyledHeaderLink>

        <StyledHeaderLink>
          <Link href={"/about"}>ABOUT</Link>
        </StyledHeaderLink>
      </div>
    </StyledHeaderWrapper>
  );
};

export default Header;
