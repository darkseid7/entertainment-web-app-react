import styled from "styled-components";

import { media } from "../../../Styled-components/GlobalStyles";
import { StyledTitle } from "../../../Styled-components/Title";
import useFetch from "../../../hooks/useFetch";

import CardList from "../../../components/CardList";
import Card from "../../../components/Card";

const StyledRecommend = styled.section``;

function Recommend() {
  const { data } = useFetch("recommendation");

  const getRecommend = data.filter((item) => {
    const trending = item.isTrending === false;
    return trending;
  });

  return (
    <StyledRecommend>
      <StyledTitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Recommended for you
      </StyledTitle>
      <CardList>
        {getRecommend.map((cardData, cardIndex) => (
          <Card key={cardIndex} cardData={cardData} />
        ))}
      </CardList>
    </StyledRecommend>
  );
}

export default Recommend;
