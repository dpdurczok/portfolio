import React from "react"
import "./styleChains.css"
import {Article} from "../../components"
import images from '../../assets/Chains/chainsStyle'; // Import the formatted images array

const StyleChains = () => {
   return(
    <div className="prt__styleChains section__margin gradient__bg">
      <div className='prt__styleChains-heading'>
        <h1  className="gradient__text"> Chains style </h1>
        <p>This game has a low poly style to be able to mass produce a large amount of models. There are entire cities, islands and forests.</p>
      </div>
      <div className="prt__styleChains-container">
          <Article imgUrl={images[14]} link="/chains" title="Verdant Skies" paragraph="Ascend to the heavens where the lush green of the earth meets the boundless blue sky. In this serene yet exhilarating landscape, players can discover hidden sanctuaries and embark on quests that defy gravity."/>
          <Article imgUrl={images[15]} link="/chains" title="New Cities" paragraph="Enter the heart of craftsmanship and ingenuity. This fortress is alive with the clinking of hammers and the hum of innovation. Here, players can forge legendary items and unlock secrets of ancient trades."/>
          <Article imgUrl={images[16]} link="/chains" title="A New Style" paragraph="Discover the transformation of the games style, where simple low poly shapes evolved into detailed, mesmerizing meshes. Despite the complexity of the models, the game retains its charm with a pleasing, minimalist color palette"/>
          <Article imgUrl={images[17]} link="/chains" title="More Lush!" paragraph="Traverse the sprawling fields of emerald where nature’s vibrancy is at its peak. This verdant expanse is teeming with life and hidden dangers, challenging players to master their survival skills and explore its deepest secrets."/>
          <Article imgUrl={images[1]} link="/chains" title="Cities" paragraph="Buy, Sell, Explore. These places are booming with life and shops. Players would find themself's here to find quests and buy upgrades"/>
          <Article imgUrl={images[2]} link="/emmett" title="Witch Houses" paragraph="Be careful of the Witch! somehow she's in every city, no matter where you go!, but always make sure to visit her as she has plenty good things to offer!"/>
          <Article imgUrl={images[3]} link="/lotd" title="Playgrounds" paragraph="Enjoy the lively parts of the city where all of the children gather to play arround!"/>
          <Article imgUrl={images[4]} link="/eks" title="Ancient Ruins" paragraph="Explore these areas to learn about the ancient world of chains"/>
          <Article imgUrl={images[5]} link="/chains" title="Fisherman" paragraph="Meet the kind fisherman that is always happy to give you a helping hand :)"/>
          <Article imgUrl={images[6]} link="/emmett" title="Caves" paragraph="Go deep underground to uncover deep secrets!"/>
          <Article imgUrl={images[7]} link="/lotd" title="Secrets in Caves" paragraph="These are the secrets in the caves"/>
          <Article imgUrl={images[8]} link="/eks" title="Band Outpost" paragraph="Be carefull of these areas! These places are crawling with not so kind people."/>
          <Article imgUrl={images[9]} link="/chains" title="Ships" paragraph="Your main method of transportation through skyies!"/>
          <Article imgUrl={images[10]} link="/emmett" title="Water Falls" paragraph="Enjoy the beautiful nature of Chains"/>
          <Article imgUrl={images[11]} link="/lotd" title="Beaches" paragraph="Take a break, relax and take in the wonders of an extraordinary flying beach!"/>
          <Article imgUrl={images[12]} link="/eks" title="Bigger Caves" paragraph="Go through deep caves to uncover ancient items!"/>
      </div>
    </div>
   ) 
   }

export default StyleChains