import styled from "styled-components";
import NextLink from "next/link";



export const StyledLink = styled(NextLink)`
  cursor: pointer;
  border: none;
  font-weight: 600;
  text-decoration: none;
  font-size: 16px;
  color: ${({theme}) => theme.colors.green900};
  
  :hover {
    color:  ${({theme}) => theme.colors.green300}
  }
  
`


