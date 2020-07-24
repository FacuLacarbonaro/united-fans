import React from "react";
import { connect } from "react-redux";

import "../../sass/main.scss";

const NextMatch = ({ state }) => {
  console.log(state);

  return (
    <div className="nextMatch">
      <div className='nextMatch_container'>
        {state.map((match) => (
          <div className='nextMatch_container_card' key={match.fixture_id}>
            <div className='nextMatch_container_card_title'>
                <h3> {match.round} </h3>
                <h2> {match.homeTeam.team_name} vs {match.awayTeam.team_name} </h2>
            </div>
            <div className='nextMatch_container_card_logos'>
               <img src={match.homeTeam.logo} alt={match.homeTeam.team_name} /> <img src={match.awayTeam.logo} alt={match.awayTeam.team_name}/>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.nextMatch
  };
};

export default connect(mapStateToProps)(NextMatch);
