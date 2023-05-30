import CardList from "../../../components/CardList";
import Card from "../../../components/Card";
import useFetch from "../../../hooks/useFetch";

function SeriesFilter() {
  const { data } = useFetch();

  const movies = data.filter((item) => {
    const movie = item.category === "TV Series";
    return movie;
  });
  console.log(movies);
  return (
    <CardList>
      {movies.map((cardData, cardIndex) => (
        <Card key={cardIndex} cardData={cardData} />
      ))}
    </CardList>
  );
}

export default SeriesFilter;
