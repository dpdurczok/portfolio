import React from 'react'
import './art.css'
import bee from '../../assets/bee.png';
import chains from '../../assets/jellyrender.png';
import kitchen from '../../assets/kitchen.png';

const Art = () => {
  return (
    <div className="prt__art section__margin" id="art">  
        <div className="prt__art-content">
          
          <h1 className="gradient__text"> MY ART </h1>
          <p>These are renders i made within blender during my spare time, everything seen is hand made by me, textures are downloaded from websites such as: Textures.com or Poliigon</p>
          
          <div className="prt__art-content__images">
            <div className="prt__art-content__images-domain"><img src={bee} alt=""/></div>
            <div className="prt__art-content__images-domain"><img src={kitchen} alt=""/></div>
            <div className="prt__art-content__images-domain"><img src={chains} alt=""/></div>
          </div>
          
          <div className="prt__art-content__expand">
            <a href="/artgal"><button>View more</button></a>
          </div>
        </div>
    </div>
  )
}

export default Art