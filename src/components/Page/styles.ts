import styled from "styled-components";
import { from } from "../../styles/responsive";

export const PageWrapper = styled.div`
  padding: 24px;

  ${from.tablet} {
    padding: 32px;
  }

  ${from.laptop} {
    padding: 40px;
  }

  ${from.desktop} {
    padding: 48px;
    max-width: 1296px;
    margin: 0 auto;
  }
`;
