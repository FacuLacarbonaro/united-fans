/* import React from "react";
import { connect } from "react-redux";

const Example = ({state}) => {

    const filteredGoalkeepers = state.filter(
        (hola) => hola.position === "Goalkeeper"
      );
    
      console.log(filteredGoalkeepers);

  return (
    <div>
      {filteredGoalkeepers.map((band) => (
        <div>
          {`: ${band.position}`}
          <br/>
          {`Name: ${band.first_name}`}
          <br/>
          {`Last Name: ${band.last_name}`}
          <br/>
           <img src= {band.image} alt='' />

        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state.playerList,
    
  };
  console.log(state, "hola");
};

export default connect(mapStateToProps)(Example);
 */