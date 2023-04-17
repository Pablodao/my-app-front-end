import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  padding: 0;

  :hover {
    color: ${({theme}) => theme.colors.green500
    }
`;

export const Tooltip = styled.div`
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({theme}) => theme.colors.green700};
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  width: fit-content;
`;

export const Container = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
`;

export const StyledIcon = styled.div`
  > * {
    width: 24px;
    height: 24px;
  }
`


