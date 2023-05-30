import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Recommend from "../Home/components/Recommend";
import Card from "../../components/Card";
import useFetch from "../../hooks/useFetch";

function Results() {
  const { data } = useFetch();
  // const { title } = useParams();
  const [params] = useSearchParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    const filteredData = data.filter((item) => {
      const filter = item.title.toLowerCase().includes(params.get("title"));
      return filter;
    });
    setResult(filteredData);
    console.log("se ejecuta?");
  }, [data, params]);

  console.log(result);

  return (
    <Recommend>
      {result.map((cardData, cardIndex) => (
        <Card key={cardIndex} cardData={cardData} />
      ))}
    </Recommend>
  );
}

export default Results;
