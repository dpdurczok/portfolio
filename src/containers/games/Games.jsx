import React from 'react'
import './games.css'

import lotd from '../../assets/luckofthedraw.png';
import emmett from '../../assets/emmett.png';
import eks from '../../assets/eternalkatanaslam.png';
import chains from '../../assets/chains.png';

const Games = () => {
  return (
    <div className="prt__games section__margin" id="games">  
        <div className="prt__games-content">
          
          <h1  className="gradient__text"> MY GAMES </h1>
          <p>Here you will find all of the games that i have made, some are refined and complete... and some not so much.</p>
          
          <div className="prt__games-content__images">
            
            <h1>Chains</h1>
            <div className="prt__games-content__images-domain">
              <img src={chains} alt=""/>
              <p>Chains is an open world game where you explore various floating islands, complete missions and achieve greatness !! </p>
              <button>Learn More</button>
             </div>

            <h1>Emmett</h1>
            <div className="prt__games-content__images-domain">
              <img src={emmett} alt=""/>
              <p>Entrapped in a strange facility, you find your way to the exit through the use of shadows - creating blocks from nothing and entrances where there would otherwise be none.
                All you have is Emmett, your happy-go-lucky Companion Cube (Not to be confused with Portal's CC). As you make your way out, you begin to question what's real. Can you beat it?</p>
              <button>Learn More</button>
              </div>

            <h1>Luck Of The Draw</h1>
            <div className="prt__games-content__images-domain">
              <img src={lotd} alt=""/>
              <p>You are a powerful wizard girl who only knows how to cast AOE attacks... and they are too powerful for even you. You summon your spells with cards. The cards you abtain and use throughout the game is complitely random and each one is special.
                Your enemies are the government who don't believe in your methods of casting spells and demand that you be executed for treason.
                </p>
              <button>Learn More</button>
              </div>

            <h1>Eternal Katana Slam</h1>
            <div className="prt__games-content__images-domain">
              <img src={eks} alt=""/>
              <p>A game made for fun within 10 hours. You bounce around killing slimes and the goal is to survive for as long as posible!!</p>
              <button>Learn More</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Games