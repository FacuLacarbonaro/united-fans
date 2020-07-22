import React, { useEffect } from "react";
/* import axios from 'axios';
 */

import "../../sass/main.scss";
import { useDispatch, useSelector } from "react-redux";

const Players = () => {
  const playerList = useSelector((state) => state.players);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://api-football-v1.p.rapidapi.com/v2/players/squad/33/2018-2019",
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

      .then((response) => {
        dispatch({
          type: "GET_PLAYERS",
          payload: [response]
        })
        console.log(response);
      })

      .catch(() => {
        console.log("Error");
      });
  }, [dispatch]);

  return (<div className='players' >
    IMPRIMIR API
  </div>);
};

export default Players;
