import React from "react"
import "./modelsChains.css"
import {Article} from "../../components"

import images from '../../assets/Chains/chainsModels'; // Import the images array

const ModelsChains = () => {
   return(
    <div className="prt__modelsChains section__margin gradient__bg">
      <div className='prt__modelsChains-heading'>
        <h1  className="gradient__text"> The models i made </h1>
        <p>All of the game assets within chains were made by yours truly, using blender. 
            There are far to many to show them all on this website, so i'll only show the most interesing ones.
            
        </p>
      </div>
      <div className="prt__modelsChains-container">
        <Article imgUrl={images[0]} link="/" title="Farm House" paragraph=""/>
        <Article imgUrl={images[1]} link="/" title="BlackSmith" paragraph=""/>
        <Article imgUrl={images[2]} link="/" title="Weapons Shop" paragraph=""/>
        <Article imgUrl={images[3]} link="/" title="Government Building" paragraph=""/>
        <Article imgUrl={images[4]} link="/" title="Simple House" paragraph=""/>
        <Article imgUrl={images[5]} link="/" title="Tall House" paragraph=""/>
        <Article imgUrl={images[6]} link="/" title="Slide" paragraph=""/>
        <Article imgUrl={images[7]} link="/" title="Hay Bale" paragraph=""/>
        <Article imgUrl={images[8]} link="/" title="Crates" paragraph=""/>
        <Article imgUrl={images[9]} link="/" title="Village Island" paragraph=""/>
        <Article imgUrl={images[10]} link="/" title="Dead God Island" paragraph=""/>
        <Article imgUrl={images[11]} link="/" title="Lobue" paragraph=""/>
        <Article imgUrl={images[12]} link="/" title="Old lady" paragraph=""/>
        <Article imgUrl={images[13]} link="/" title="Middle aged man" paragraph=""/>
        <Article imgUrl={images[14]} link="/" title="Child" paragraph=""/>
        <Article imgUrl={images[15]} link="/" title="Bob" paragraph=""/>
        <Article imgUrl={images[16]} link="/" title="Ship" paragraph=""/>
        <Article imgUrl={images[17]} link="/" title="Raft" paragraph=""/>
        <Article imgUrl={images[18]} link="/" title="Stone Modular Components" paragraph=""/>
        <Article imgUrl={images[19]} link="/" title="Wooden Modular Components" paragraph=""/>
        <Article imgUrl={images[20]} link="/" title="Wooden Modular Components" paragraph=""/>
        <Article imgUrl={images[21]} link="/" title="Palm tree" paragraph=""/>
        <Article imgUrl={images[22]} link="/" title="Big Tree" paragraph=""/>
        <Article imgUrl={images[23]} link="/" title="Oak Trees" paragraph=""/>
        <Article imgUrl={images[24]} link="/" title="Red Mushrooms" paragraph=""/>
        <Article imgUrl={images[25]} link="/" title="Brown Mushrooms" paragraph=""/>
        <Article imgUrl={images[26]} link="/" title="Barrel" paragraph=""/>

      </div>
    </div>
   ) 
   }

export default ModelsChains