import React from 'react'
import './art.css'
import bee from '../../assets/bee.png';
import chains from '../../assets/jellyrender.png';
import kitchen from '../../assets/kitchen.png';


import { Link } from 'react-router-dom';

const Art = () => {
  return (
    <div className="prt__art section__margin" id="art">  
        <div className="prt__art-content">
          
          <h1 className="gradient__text"> Artistic Creations </h1>
          <p>This gallery features a collection of my handcrafted renders made within Blender 
          during my personal artistic explorations. </p>
          
          <div className="prt__art-content__images">
            <div className="prt__art-content__images-domain"><img src={bee} alt=""/></div>
            <div className="prt__art-content__images-domain"><img src={kitchen} alt=""/></div>
            <div className="prt__art-content__images-domain"><img src={chains} alt=""/></div>
          </div>
          
          <div className="prt__art-content__expand">
            
            <Link to="/artgal"><button>View More</button></Link>
          </div>
        </div>
    </div>
  )
}

export default Art