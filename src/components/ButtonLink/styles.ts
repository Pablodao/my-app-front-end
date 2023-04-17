import styled, {css} from "styled-components";
import NextLink from "next/link";
import {$StyledButtonLinkProps} from "./ButtonLink";

export const StyledButtonLink = styled(NextLink)<$StyledButtonLinkProps>`
  display: flex;
  max-width: 300px;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  color: black;
  font-weight: 600;
  transition: border 100ms ease-out;
  white-space: nowrap;
  text-decoration: none;

  :hover {
    border-bottom: 2px solid black;
    border-right: 2px solid black;
  }

  ${({theme, $variant}) => {
    switch ($variant) {
      case "primary" :
        return css`
          background-color: ${theme.colors.green300};
        `;
      case "secondary" :
        return css`
          background-color: ${theme.colors.green100};
        `;
    }
  }}

`