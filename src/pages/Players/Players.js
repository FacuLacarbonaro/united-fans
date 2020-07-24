import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardPlayer from "../../components/CardPlayer/CardPlayer";

import "../../sass/main.scss";

const Players = (obj) => {
/*   const playerList = useSelector((state) => state.playerList);
  const managerList = useSelector((state) => state.managerList); */

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://united-fans.firebaseio.com/.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: "SET_PLAYERS_LIST",
          payload: data.players,
        });
        dispatch({
          type: "SET_MANAGER_LIST",
          payload: data.manager,
        });
      })
      .catch(() => {
        console.log("Error");
      });
  }, [dispatch]);

  return (
    <div className="players">
      <CardPlayer />
    </div>
  );
};

export default Players;
