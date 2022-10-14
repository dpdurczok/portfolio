import React from "react"
import "./styleChains.css"
import {Article} from "../../components"
import { img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12 } from "./imports"

const StyleChains = () => {
   return(
    <div className="prt__styleChains section__margin gradient__bg">
      <div className='prt__styleChains-heading'>
        <h1  className="gradient__text"> Chains style </h1>
        <p>This game has a low poly style to be able to mass produce a large amount of models. There are entire cities, islands and forests.</p>
      </div>
      <div className="prt__styleChains-container">
          <Article imgUrl={img01} link="/chains" title="Cities" paragraph="An open-world img where you explore a whole world suspended in the sky, completing missions and discovering your past"/>
          <Article imgUrl={img02} link="/emmett" title="Witch Houses" paragraph="this is Emmett"/>
          <Article imgUrl={img03} link="/lotd" title="Playgrounds" paragraph="this is "/>
          <Article imgUrl={img04} link="/eks" title="Ancient Ruins" paragraph="this is "/>
          <Article imgUrl={img05} link="/chains" title="Lakes" paragraph="An open-world img where you explore a whole world suspended in the sky, completing missions and discovering your past"/>
          <Article imgUrl={img06} link="/emmett" title="Caves" paragraph="this is Emmett"/>
          <Article imgUrl={img07} link="/lotd" title="Mysteries" paragraph="this is "/>
          <Article imgUrl={img08} link="/eks" title="Dumps" paragraph="this is "/>
          <Article imgUrl={img09} link="/chains" title="Ships" paragraph="An open-world img where you explore a whole world suspended in the sky, completing missions and discovering your past"/>
          <Article imgUrl={img10} link="/emmett" title="Water Falls" paragraph="this is Emmett"/>
          <Article imgUrl={img11} link="/lotd" title="Beaches" paragraph="this is "/>
          <Article imgUrl={img12} link="/eks" title="Bigger Caves" paragraph="this is "/>
      </div>
    </div>
   ) 
   }

export default StyleChains