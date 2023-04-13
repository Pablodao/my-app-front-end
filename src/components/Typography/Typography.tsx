import styled, { css } from "styled-components";

import { from } from "../../styles/responsive";

const commonStyles = css``;

export const Headline = styled.h1`
  ${commonStyles};
  font-size: 30px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 1px;

  ${from.tablet} {
    font-size: 40px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 1px;
  }

  ${from.laptop} {
    font-size: 48px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 1px;
  }

  ${from.desktop} {
    font-size: 60px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 1px;
  }
`;

export const Title = styled.h2`
  ${commonStyles};
  font-size: 24px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 1px;

  ${from.tablet} {
    font-size: 32px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 1px;
  }

  ${from.laptop} {
    font-size: 40px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 1px;
  }

  ${from.desktop} {
    font-size: 48px;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 1px;
  }
`;

export const Paragraph = styled.p`
  ${commonStyles};
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.5px;

  ${from.tablet} {
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0.5px;
  }

  ${from.laptop} {
    font-size: 19px;
    line-height: 140%;
    letter-spacing: 0.5px;
  }

  ${from.desktop} {
    font-size: 23px;
    line-height: 140%;
    letter-spacing: 0.5px;
  }
`;
export const Caption = styled.span`
  ${commonStyles};
  font-size: 12px;
  line-height: 130%;
  letter-spacing: 0.5px;

  ${from.tablet} {
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0.5px;
  }
`;
export const Link = styled.span`
  ${commonStyles};
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.5px;

  :hover {
    text-decoration: underline;
  }
`;
