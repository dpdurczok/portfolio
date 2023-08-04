import React from 'react';
import './games.css';
import { Article } from "../../components";
import { game01, game02, game03, game04 } from "./imports";

const Games = () => {
  return (
    <div className="prt__games section__margin" id="games"> {/* Add the ID "games" to enable smooth scrolling */}
      <div className='prt__games-heading'>
        <h1 className="gradient__text"> MY GAMES </h1>
        <p>Here you will find all of the games that I have made, some are refined and complete... and some not so much.</p>
      </div>
      <div className="prt__games-container">
        <Article imgUrl={game01} link="/chains" linktext="Learn More" title="Chains" paragraph="An open-world game where you explore a whole world suspended in the sky, completing missions and discovering your past" />
        <Article imgUrl={game02} link="/emmett" linktext="Learn More" title="Emmett" paragraph="this is Emmett" />
        <Article imgUrl={game03} link="/lotd" linktext="Learn More" title="Luck Of The Draw" paragraph="this is Luck Of The Draw" />
        <Article imgUrl={game04} link="/eks" linktext="Learn More" title="Eternal Katana Slam" paragraph="this is Eternal Katana Slam" />
      </div>
    </div>
  );
};


export default Games;
