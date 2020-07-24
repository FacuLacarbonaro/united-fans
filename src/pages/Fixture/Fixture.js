import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "../../sass/main.scss";
import NextMatch from "../../components/NextMatch/NextMatch";

const Fixture = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://api-football-v1.p.rapidapi.com/v2/fixtures/team/33/next/10",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "9fa06fdc65msh57ea1eb5864aecdp1951d3jsn2646e6d4abf9",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: "SET_NEXT_MATCH",
          payload: data.api.fixtures,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  return (
    <div className="fixture">
      <NextMatch />
    </div>
  );
};

export default Fixture;
