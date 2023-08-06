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
          
          <h1 className="gradient__text"> Professional Projects </h1>
          <p>In this section, you'll find Blender renders created for various clients. 
          These projects allowed me to apply my skills and artistic touch 
          to meet the unique needs of each client, 
          resulting in satisfying outcomes.</p>
          
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