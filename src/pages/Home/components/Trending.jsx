import styled from "styled-components";

import { media } from "../../../Styled-components/GlobalStyles";
import TrendingCard from "./TrendingCard";
import { StyledTitle } from "../../../Styled-components/Title";
import useFetch from "../../../hooks/useFetch";

const StyledTrending = styled.section`
  max-width: 1276px;
  margin-bottom: 40px;
`;

const TrendingCards = styled.ul`
  overflow-x: scroll;
  scroll-snap-type: x proximity;
  white-space: nowrap;
  ${media.phone} {
    margin-left: 16px;
  }
`;

function Trending() {
  const { data } = useFetch();

  const getTrending = data.filter((item) => {
    const trending = item.isTrending === true;
    return trending;
  });

  return (
    <StyledTrending>
      <StyledTitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Trending
      </StyledTitle>
      <TrendingCards>
        {getTrending.map((cardData, cardIndex) => (
          <TrendingCard key={cardIndex} cardData={cardData} />
        ))}
      </TrendingCards>
    </StyledTrending>
  );
}

export default Trending;
