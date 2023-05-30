import styled from "styled-components";

import { media, paddingRight } from "./GlobalStyles";

export const StyledTitle = styled.h2`
  margin-bottom: 32px;
  padding-right: ${paddingRight};
  font-size: 32px;
  font-weight: 300;
  letter-spacing: -0.5px;
  color: ${({ theme }) => theme.colors.fontColor};

  ${media.tablet} {
    margin-bottom: 25px;
  }

  ${media.phone} {
    padding: 0 16px;
  }
`;
