import SeriesFilter from "./components/SeriesFilter";

import { StyledTitle } from "../../Styled-components/Title";

export default function Series() {
  return (
    <>
      <StyledTitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        TV Series
      </StyledTitle>
      <SeriesFilter />
    </>
  );
}
