import styled from "styled-components";

import { media } from "../../Styled-components/GlobalStyles";

export const LayoutContainer = styled.main`
  width: calc(100% - 132px);

  ${media.tablet} {
    width: 100%;
  }
`;
