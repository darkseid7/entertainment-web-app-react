import { useState, useEffect } from "react";
import dataAdapter from "../adapters/dataAdapter";
const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = () => {
      setLoading(true);
      fetch("/data.json")
        .then((response) => response.json())
        .then((data) => {
          const adapted = dataAdapter(data);
          console.log(adapted);
          setData(adapted);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getData();
  }, []);

  return { data, loading, setData };
};

export default useFetch;
