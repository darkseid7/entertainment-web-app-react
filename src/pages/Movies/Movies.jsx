import MoviesFilter from "./components/MoviesFilter";

import { StyledTitle } from "../../Styled-components/Title";

function Movies() {
  return (
    <>
      <StyledTitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Movies
      </StyledTitle>
      <MoviesFilter />
    </>
  );
}

export default Movies;
