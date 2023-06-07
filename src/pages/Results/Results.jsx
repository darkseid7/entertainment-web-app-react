/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom";

import { StyledTitle } from "../../Styled-components/Title";
import CardList from "../../components/CardList";
import Card from "../../components/Card";
import useFetch from "../../hooks/useFetch";

function Results() {
  const { data } = useFetch();
  const { title } = useParams();

  const filteredData = data.filter((item) => {
    const filter = item.title.toLowerCase().includes(title);
    return filter;
  });

  return (
    <>
      <StyledTitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Found {filteredData.length} results for "{title}"
      </StyledTitle>
      <CardList>
        {filteredData.map((cardData, cardIndex) => (
          <Card key={cardIndex} cardData={cardData} />
        ))}
      </CardList>
    </>
  );
}

export default Results;
