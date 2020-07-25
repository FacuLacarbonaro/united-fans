import React from "react";

import "./Standing.scss";


const Standing = () => {
  return (
    <div className="standing">
      <div >
        PREMIER LEAGUE
      </div>
      <div className="standing_list">
        <div className="standing_list_category">
          <div className="standing_list_category_rank">Rank</div>

          <div className="standing_list_category_logo">Logo</div>

          <div className="standing_list_category_name">Club</div>

          <div className="standing_list_category_played"><p>Played</p>  </div>
          <div className="standing_list_category_win"> Win </div>
          <div className="standing_list_category_draw"> Draw </div>
          <div className="standing_list_category_lose"> Lose </div>

          <div className="standing_list_category_goalsDif">Goal Diff.</div>
          <div className="standing_list_category_points">Points</div>
          <div className="standing_list_category_qualification">
            Qualification to
          </div>
        </div>

        {/* ACA VA EL MAP */}

        <div className="standing_list_team">
          <div className="standing_list_team_rank">1</div>

          <div className="standing_list_team_logo">Escudo</div>

          <div className="standing_list_team_name">Manchester United</div>

          <div className="standing_list_team_played"> 10 </div>
          <div className="standing_list_team_win"> 10 </div>
          <div className="standing_list_team_draw"> 0 </div>
          <div className="standing_list_team_lose"> 0 </div>

          <div className="standing_list_team_goalsDif">+20</div>
          <div className="standing_list_team_points">30</div>
          <div className="standing_list_team_qualification">
            Champions league
          </div>
        </div>
        {/* Aca termina el map */}
        
      </div>
    </div>
  );
};

export default Standing;
