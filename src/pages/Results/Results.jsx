import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Recommend from "../Home/components/Recommend";
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
    <CardList>
      {filteredData.map((cardData, cardIndex) => (
        <Card key={cardIndex} cardData={cardData} imgUrl={} />
      ))}
    </CardList>
  );
}

export default Results;
