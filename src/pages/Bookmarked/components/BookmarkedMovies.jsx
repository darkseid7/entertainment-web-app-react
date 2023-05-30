import CardList from "../../../components/CardList";
import Card from "../../../components/Card";
import useFetch from "../../../hooks/useFetch";

import { StyledTitle } from "../../../Styled-components/Title";
function BookmarkedMovies() {
  const { data } = useFetch();

  const movies = data.filter((item) => {
    const movie = item.category === "Movie" && item.isBookmarked;
    return movie;
  });

  return (
    <>
      <StyledTitle>Bookmarked Movies</StyledTitle>
      <CardList>
        {movies.map((cardData, cardIndex) => (
          <Card key={cardIndex} cardData={cardData} />
        ))}
      </CardList>
    </>
  );
}

export default BookmarkedMovies;
