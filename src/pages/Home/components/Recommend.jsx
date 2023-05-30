import styled from "styled-components";

import { media } from "../../../Styled-components/GlobalStyles";
import { StyledTitle } from "../../../Styled-components/Title";
import useFetch from "../../../hooks/useFetch";

import CardList from "../../../components/CardList";
import Card from "../../../components/Card";

const StyledRecommend = styled.section`
  /* width: 100%; */
  /* padding-top: 28px; */
  /* padding-right: 30px; */

  /* ${media.tablet} {
    padding-right: 0;
  }

  ${media.phone} {
    padding-right: 16px;
    padding-left: 16px;
  } */
`;

function Recommend() {
  const { data } = useFetch("recommendation");

  const getRecommend = data.filter((item) => {
    const trending = item.isTrending === false;
    return trending;
  });

  return (
    <StyledRecommend>
      <StyledTitle>Recommended for you</StyledTitle>
      <CardList>
        {getRecommend.map((cardData, cardIndex) => (
          <Card key={cardIndex} cardData={cardData} />
        ))}
      </CardList>
    </StyledRecommend>
  );
}

export default Recommend;
