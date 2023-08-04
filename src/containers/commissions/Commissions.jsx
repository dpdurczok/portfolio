import React from 'react'
import './Commissions.css'
import EyeSpill from '../../assets/EyeSpill.png';
import PianoLamps from '../../assets/PianoLamps.png';
import InfinityPool from '../../assets/InfinityPool.png';


import { Link } from 'react-router-dom';

const Commissions = () => {
  return (
    <div className="prt__art section__margin" id="art">  
        <div className="prt__art-content">
          
          <h1 className="gradient__text"> MY JOBS </h1>
          <p>These are renders i made within blender for company's as payed work</p>
          
          <div className="prt__art-content__images">
            <div className="prt__art-content__images-domain"><img src={EyeSpill} alt=""/></div>
            <div className="prt__art-content__images-domain"><img src={PianoLamps} alt=""/></div>
            <div className="prt__art-content__images-domain"><img src={InfinityPool} alt=""/></div>
          </div>
          
          <div className="prt__art-content__expand">
            
            <Link to="/jobgal"><button>View More</button></Link>
          </div>
        </div>
    </div>
  )
}


export default Commissions