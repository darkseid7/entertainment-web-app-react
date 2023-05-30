import styled from "styled-components";

import { media, paddingRight } from "../Styled-components/GlobalStyles";

const StyledCardList = styled.ul`
  margin-bottom: 40px;
  padding-right: ${paddingRight};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px 40px;

  ${media.desktop_m} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.tablet} {
    padding-right: 24px;
    gap: 32px 29px;
  }

  ${media.phone} {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 16px;

    gap: 16px;
  }
`;

function CardList({ children }) {
  return <StyledCardList>{children}</StyledCardList>;
}

export default CardList;
