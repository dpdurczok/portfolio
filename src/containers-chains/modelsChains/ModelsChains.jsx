import React from "react"
import "./modelsChains.css"
import {Article} from "../../components"
import { img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26 } from "./imports"

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
          <Article imgUrl={img01} link="/" title="Farm House" paragraph=""/>
          <Article imgUrl={img02} link="/" title="BlackSmith" paragraph=""/>
          <Article imgUrl={img03} link="/" title="Weapons Shop" paragraph=""/>
          <Article imgUrl={img04} link="/" title="Government Building" paragraph=""/>
          <Article imgUrl={img05} link="/" title="Simple House" paragraph=""/>
          <Article imgUrl={img06} link="/" title="Tall House" paragraph=""/>
          <Article imgUrl={img07} link="/" title="Slide" paragraph=""/>
          <Article imgUrl={img08} link="/" title="Hay Bale" paragraph=""/>
          <Article imgUrl={img09} link="/" title="Crates" paragraph=""/>
          <Article imgUrl={img10} link="/" title="Village Island" paragraph=""/>
          <Article imgUrl={img11} link="/" title="Dead God Island" paragraph=""/>
          <Article imgUrl={img12} link="/" title="Lobue" paragraph=""/>
          <Article imgUrl={img13} link="/" title="Old lady" paragraph=""/>
          <Article imgUrl={img14} link="/" title="Middle aged man" paragraph=""/>
          <Article imgUrl={img15} link="/" title="Child" paragraph=""/>
          <Article imgUrl={img16} link="/" title="Bob" paragraph=""/>
          <Article imgUrl={img17} link="/" title="Ship" paragraph=""/>
          <Article imgUrl={img18} link="/" title="Raft" paragraph=""/>
          <Article imgUrl={img19} link="/" title="Stone Modular Components" paragraph=""/>
          <Article imgUrl={img20} link="/" title="Wooden Modular Components" paragraph=""/>
          <Article imgUrl={img21} link="/" title="Wooden Modular Components" paragraph=""/>
          <Article imgUrl={img22} link="/" title="Palm tree" paragraph=""/>
          <Article imgUrl={img23} link="/" title="Big Tree" paragraph=""/>
          <Article imgUrl={img24} link="/" title="Oak Trees" paragraph=""/>
          <Article imgUrl={img25} link="/" title="Red Mushrooms" paragraph=""/>
          <Article imgUrl={img26} link="/" title="Brown Mushrooms" paragraph=""/>
      </div>
    </div>
   ) 
   }

export default ModelsChains