import styled from "styled-components";

import { media } from "../../../Styled-components/GlobalStyles";
import CardList from "../../../components/CardList";
import Card from "../../../components/Card";
import useFetch from "../../../hooks/useFetch";

import { StyledTitle } from "../../../Styled-components/Title";

const StyledBookmarkedSeries = styled.div`
  ${media.tablet} {
    margin-top: 48px;
  }
`;

function BookMarkedSeries() {
  const { data } = useFetch();

  const movies = data.filter((item) => {
    const movie = item.category === "TV Series" && item.isBookmarked;
    return movie;
  });

  return (
    <>
      <StyledBookmarkedSeries>
        <StyledTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Bookmarked TV Series
        </StyledTitle>
        <CardList>
          {movies.map((cardData, cardIndex) => (
            <Card key={cardIndex} cardData={cardData} />
          ))}
        </CardList>
      </StyledBookmarkedSeries>
    </>
  );
}

export default BookMarkedSeries;
