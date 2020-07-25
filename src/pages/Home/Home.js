import React from "react";

import './Home.scss';

import new1 from "../../sass/assets/images/jpg/new1.jpg";
import new2 from "../../sass/assets/images/jpg/new2.jpg";
import new3 from "../../sass/assets/images/jpg/new3.jpg";
import new4 from "../../sass/assets/images/jpg/new4.jpg";
import new5 from "../../sass/assets/images/jpg/new5.jpg";
import premierLeague from "../../sass/assets/images/png/premierLeague.png";
import clothe1 from "../../sass/assets/images/jpg/clothe1.jpg";
import clothe2 from "../../sass/assets/images/jpg/clothe2.jpg";
import clothe3 from "../../sass/assets/images/jpg/clothe3.jpg";

import Hero from "../../components/Hero/Hero";
import CardNews from "../../components/CardNews/CardNews";
import CardShop from "../../components/CardShop/CardShop";

const Home = () => {
  return (
    <div className="home">
      <Hero />

      <div className="home_container">
        <div className="home_container_news" id="news">
          <div className="home_container_news_title">
            <h1>NEWS</h1>
          </div>

          <div className="home_container_news_row">
            <CardNews
              img={new1}
              title="OLE REVEALS TEAM NEWS FOR WEST HAM GAME"
              description="The boss discusses the latest on the injury fron ahead of out
                final home match of the Premier League season."
            />
            <CardNews
              img={new2}
              title="THE TOP-FOUR PERMUTATIONS FOR UNITED"
              description="It is all to play for in the race for a Champions League place - and it could get complicated!"
            />
          </div>

          <div className="home_container_news_row">
            <CardNews
              img={new4}
              title=" Solskjaer: January signings key for us. "
              description="The arrival of Bruno Fernandes and Odion Ighalo has helped United grow and close the gap, says Ole."
            />
            <CardNews
              img={new5}
              title="The best fan moments from Old Trafford this season."
              description="We count down the highlights of the home campaign in the Premier League."
            />
            <CardNews
              img={new3}
              title='"MINOR SETBACKS, MAJOR COMEBACKS."'
              description="Brandon Williams is positive on and off the pitch, which is eviddent in his impressive Instagram post to supportrs..."
            />
          </div>
        </div>

        <div className="home_container_nextMatch">
          <div className="home_container_nextMatch_info">
            <div className="home_container_nextMatch_info_premier">
              <img src={premierLeague} alt="" />

              
            </div>
          </div>
        </div>

        <div className="home_container_shop">
          <div className="home_container_shop_title">
            <h1>TRAINNING ESSENTIALS</h1>
          </div>

          <div className="home_container_shop_row">
            <CardShop
              img={clothe1}
              title="Manchester United Training Polo - White "
            />

            <CardShop
              img={clothe2}
              title="Manchester United Training Jersey - Green "
            />

            <CardShop
              img={clothe3}
              title="Manchester United Home Shirt 2019 - 20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
