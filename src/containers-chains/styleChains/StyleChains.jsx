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
          <Article imgUrl={img01} link="/chains" title="Cities" paragraph="Buy, Sell, Explore. These places are booming with life and shops. Players would find themself's here to find quests and buy upgrades"/>
          <Article imgUrl={img02} link="/emmett" title="Witch Houses" paragraph="Be careful of the Witch! somehow she's in every city, no matter where you go!, but always make sure to visit her as she has plenty good things to offer!"/>
          <Article imgUrl={img03} link="/lotd" title="Playgrounds" paragraph="Enjoy the lively parts of the city where all of the children gather to play arround!"/>
          <Article imgUrl={img04} link="/eks" title="Ancient Ruins" paragraph="Explore these areas to learn about the ancient world of chains"/>
          <Article imgUrl={img05} link="/chains" title="Fisherman" paragraph="Meet the kind fisherman that is always happy to give you a helping hand :)"/>
          <Article imgUrl={img06} link="/emmett" title="Caves" paragraph="Go deep underground to uncover deep secrets!"/>
          <Article imgUrl={img07} link="/lotd" title="Secrets in Caves" paragraph="These are the secrets in the caves"/>
          <Article imgUrl={img08} link="/eks" title="Band Outpost" paragraph="Be carefull of these areas! These places are crawling with not so kind people."/>
          <Article imgUrl={img09} link="/chains" title="Ships" paragraph="Your main method of transportation through skyies!"/>
          <Article imgUrl={img10} link="/emmett" title="Water Falls" paragraph="Enjoy the beautiful nature of Chains"/>
          <Article imgUrl={img11} link="/lotd" title="Beaches" paragraph="Take a break, relax and take in the wonders of an extraordinary flying beach!"/>
          <Article imgUrl={img12} link="/eks" title="Bigger Caves" paragraph="Go through deep caves to uncover ancient items!"/>
      </div>
    </div>
   ) 
   }

export default StyleChains