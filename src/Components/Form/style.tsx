import styled from "styled-components";

export const StyledFormWrapper = styled.div`
  margin: 50px auto;
  width: 90%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const StyledButton = styled.button`
  width: 250px;
  margin: 20px auto 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: none;
  border: 3px solid #ccc;

  &:hover {
    cursor: pointer;
    opacity: 0.3;
  }
`;
