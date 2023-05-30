import CardList from "../../../components/CardList";
import Card from "../../../components/Card";
import useFetch from "../../../hooks/useFetch";
// import CardRecommend from "../../components/CardRecommend";
// import CardItemReconmmend from "../../components/CardItemRecommend";

function MoviesFilter() {
  const { data } = useFetch();

  const movies = data.filter((item) => {
    const movie = item.category === "Movie";
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

export default MoviesFilter;
