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

  const filteredMidfielders = state.filter(
    (item) => item.position === "Midfielder"
  );

  const filteredFowards = state.filter((item) => item.position === "Foward");

  return (
    <div className="CardPlayer">
      <div className="CardPlayer_list_title">
        <h1> Goalkeepers </h1>
      </div>
      <div className="CardPlayer_list">
        {filteredGoalkeepers.map((band) => (
          <div className="CardPlayer_list_item goalkeeper">
            <div className="CardPlayer_list_item_img">
              <div
                style={{
                  backgroundImage: `url(${band.image})`,
                }}
                alt=""
              >
                <div className="CardPlayer_list_item_img_info">
                  <p className="CardPlayer_list_item_img_info_number">
                    {band.number}
                  </p>
                  <p className="CardPlayer_list_item_img_info_name">
                    {band.first_name}, <br /> {band.last_name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="CardPlayer_list_title">
        <h1> Defenders </h1>
      </div>

      <div className="CardPlayer_list">
        {filteredDefenders.map((band) => (
          <div className="CardPlayer_list_item goalkeeper">
            <div className="CardPlayer_list_item_img">
              <div
                style={{
                  backgroundImage: `url(${band.image})`,
                }}
                alt=""
              >
                <div className="CardPlayer_list_item_img_info">
                  <p className="CardPlayer_list_item_img_info_number">
                    {band.number}
                  </p>
                  <p className="CardPlayer_list_item_img_info_name">
                    {band.first_name}, <br /> {band.last_name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="CardPlayer_list_title">
        <h1> Midfielders </h1>
      </div>

      <div className="CardPlayer_list">
        {filteredMidfielders.map((band) => (
          <div className="CardPlayer_list_item goalkeeper">
            <div className="CardPlayer_list_item_img">
              <div
                style={{
                  backgroundImage: `url(${band.image})`,
                }}
                alt=""
              >
                <div className="CardPlayer_list_item_img_info">
                  <p className="CardPlayer_list_item_img_info_number">
                    {band.number}
                  </p>
                  <p className="CardPlayer_list_item_img_info_name">
                    {band.first_name}, <br /> {band.last_name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="CardPlayer_list_title">
        <h1> Fowards </h1>
      </div>

      <div className="CardPlayer_list">
        {filteredFowards.map((band) => (
          <div className="CardPlayer_list_item goalkeeper">
            <div className="CardPlayer_list_item_img">
              <div
                style={{
                  backgroundImage: `url(${band.image})`,
                }}
                alt=""
              >
                <div className="CardPlayer_list_item_img_info">
                  <p className="CardPlayer_list_item_img_info_number">
                    {band.number}
                  </p>
                  <p className="CardPlayer_list_item_img_info_name">
                    {band.first_name}, <br /> {band.last_name}
                  </p>
                </div>
              </div>
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
