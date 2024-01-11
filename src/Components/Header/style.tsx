import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  background: pink;
  padding: 10px 5%;

  div {
    display: flex;
    justify-content: space-around;
  }
`;

export const StyledHeaderLink = styled.div`
  a {
    display: block;
    font-size: 18px;
    &:hover {
      opacity: 0.3;
    }
  }
`;
