import React from "react"
import "./artgal.css"
import { Article } from "../../components";

import images from '../../assets/ArtGalPhotos'; // Import the images array

const Artgal = () => {
    return (
        <div className="prt__artgal section__margin">
            <div className="prt__artgal-container">
                <Article imgUrl={images[6]} link="/" title="A Lost Battery" paragraph="2020"/>
                <Article imgUrl={images[7]} link="/" title="Jelly Dance" paragraph="2020"/>
                <Article imgUrl={images[8]} link="/" title="Dry Bones" paragraph="2020"/>
                <Article imgUrl={images[1]} link="/" title="Bee" paragraph="2021"/>

                <Article imgUrl={images[0]} link="/" title="Kitchen" paragraph="2016"/>
                <Article imgUrl={images[17]} link="/" title="Bathroom" paragraph="2019"/>
                <Article imgUrl={images[23]} link="/" title="ChromeBall" paragraph="2020"/>
                <Article imgUrl={images[3]} link="/" title="Sky Adventures" paragraph="2021"/>

                <Article imgUrl={images[4]} link="/" title="Morning sip" paragraph="2020"/>
                <Article imgUrl={images[24]} link="/" title="A Delicious Meal" paragraph="2020"/>
                <Article imgUrl={images[14]} link="/" title="The Ramen" paragraph="2021"/>
                <Article imgUrl={images[20]} link="/" title="Romantic Evening" paragraph="2020"/>

                <Article imgUrl={images[26]} link="/" title="Too Fast" paragraph="2019"/>
                <Article imgUrl={images[18]} link="/" title="Two Towels" paragraph="2019"/>
                <Article imgUrl={images[10]} link="/" title="Headlights" paragraph="2020"/>
                <Article imgUrl={images[5]} link="/" title="Steampunk Eye" paragraph="2019"/>

                <Article imgUrl={images[15]} link="/" title="Movie Night" paragraph="2019"/>
                <Article imgUrl={images[21]} link="/" title="Sunset" paragraph="2017"/>
                <Article imgUrl={images[2]} link="/" title="John" paragraph="2018"/>
                <Article imgUrl={images[19]} link="/" title="Graveyard" paragraph="2017"/>

                <Article imgUrl={images[11]} link="/" title="Broken" paragraph="2019"/>
                <Article imgUrl={images[12]} link="/" title="Mandle Adventure" paragraph="2020"/>
                <Article imgUrl={images[13]} link="/" title="Movement Mouse" paragraph="2020"/>
                <Article imgUrl={images[9]} link="/" title="View" paragraph="2019"/>

                <Article imgUrl={images[16]} link="/" title="Hair Whip" paragraph="2020"/>
                <Article imgUrl={images[22]} link="/" title="WTF idk" paragraph="2020"/>
                <Article imgUrl={images[25]} link="/" title="Bedroom" paragraph="2018"/>
                <Article imgUrl={images[27]} link="/" title="Slow-Mo Bullet Shot" paragraph="2017"/>
            </div>
      </div>
      )
  }

export default Artgal