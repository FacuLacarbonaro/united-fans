import React from "react";
import { connect } from "react-redux";

import "./NextMatch.scss";

const NextMatch = ({ state }) => {
  console.log(state);

  return (
    <div className="nextMatch">
      {/* Prueba */}

      <div className="nextMatch_card" key="">
        <div className="nextMatch_card_matchNumber">
          <h2> Partido numero 38 </h2>
        </div>

        <div className="nextMatch_card_score">
          <p>1 - 2</p>
        </div>

        <div className="nextMatch_card_info">
          
          <div className="nextMatch_card_info_team">
            <img
              src="https://i.pinimg.com/originals/7b/cd/3d/7bcd3d5e78a3c5cd1e734d86240de260.png"
              alt=""
            />
            <h2>Leicester</h2>
          </div>

          <div>
            <p>vs</p>
          </div>

          <div className="nextMatch_card_info_team">
            <img
              src="https://i.pinimg.com/originals/7b/cd/3d/7bcd3d5e78a3c5cd1e734d86240de260.png"
              alt=""
            />
            <h2>Manchester united</h2>
          </div>
        </div>

        <div className='nextMatch_card_info_stadium'>
          <p> Old Trafford </p>
          <p> Date: 15-9-1997 </p>
        </div>
      </div>

      

      {/* Original */}

      {/* {state.map((match) => (
          <div className='nextMatch_container_card' key={match.fixture_id}>
            <div className='nextMatch_container_card_title'>
                <h3> {match.round} Partido numero 38 </h3>
                <h2> {match.homeTeam.team_name} Leicester vs {match.awayTeam.team_name} Manchester United </h2>
            </div>
            <div className='nextMatch_container_card_logos'>
               <img src={match.homeTeam.logo} alt={match.homeTeam.team_name} /> <img src={match.awayTeam.logo} alt={match.awayTeam.team_name}/>
            </div>

          </div>
        ))} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.nextMatch,
  };
};

export default connect(mapStateToProps)(NextMatch);
