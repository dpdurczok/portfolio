import React from 'react';
import './games.css';
import { Article } from "../../components";
import { game01, game02, game03, game04, game05 } from "./imports";

const Games = () => {
  return (
    <div className="prt__games section__margin" id="games"> {/* Add the ID "games" to enable smooth scrolling */}
      <div className='prt__games-heading'>
        <h1 className="gradient__text"> Game Development Portfolio </h1>
        <p>Explore my range of games, some of which are refined and complete, 
        while others are still in development. 
        Each game reflects my passion for game development and my constant pursuit of improvement.</p>
      </div>
      <div className="prt__games-container">
        <Article imgUrl={game01} link="/chains" linktext="Learn More" title="Chains" paragraph="An open-world game where you explore a whole world suspended in the sky, completing missions and discovering your past" />
        <Article imgUrl={game05} link="https://boxstudios.itch.io/deep-stone" linktext="Learn More" title="Deep Stone Cosmic" paragraph="A game jam entry" />
        <Article imgUrl={game02} link="https://boxstudios.itch.io/emmett" linktext="Learn More" title="Emmett" paragraph="this is Emmett" />
        <Article imgUrl={game03} link="https://boxstudios.itch.io/luck-of-the-draw" linktext="Learn More" title="Luck Of The Draw" paragraph="this is Luck Of The Draw" />
        <Article imgUrl={game04} link="https://boxstudios.itch.io/eternal-katana-slam" linktext="Learn More" title="Eternal Katana Slam" paragraph="this is Eternal Katana Slam" />
      </div>
    </div>
  );
};


export default Games;
