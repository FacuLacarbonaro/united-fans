import React from "react";
import { connect } from "react-redux";

import "../../sass/main.scss";

const CardPlayer = ({ state }) => {
  const filteredGoalkeepers = state.filter(
    (item) => item.position === "Goalkeeper"
  );
  const filteredDefenders = state.filter(
    (item) => item.position === "Defender"
  );

  /* console.log(filteredGoalkeepers); */

  return (
    <div className="cardPlayer">
      <div className="cardPlayerList">
        {filteredGoalkeepers.map((band) => (
          <div className="cardPlayerList_item">
            <h2 className="cardPlayerList_item_name">
              {band.first_name}, {band.last_name}
            </h2>

            <h3 className="cardPlayerList_item_position">{band.position}</h3>

            <div className="cardPlayerList_item_img">
              <img src={band.image} alt="" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="cardPlayerList2">
        {filteredDefenders.map((band) => (
          <div className="cardPlayerList2_item">
            <h2 className="cardPlayerList2_item_name">
              {band.first_name}, {band.last_name}
            </h2>

            <h3 className="cardPlayerList2_item_position">{band.position}</h3>

            <div className="cardPlayerList2_item_img">
              <img src={band.image} alt="" />
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.playerList,
  };
};

export default connect(mapStateToProps)(CardPlayer);
