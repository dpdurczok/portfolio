import React from "react"
import "./artgal.css"
import { Article } from "../../components";

import { img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, 
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, 
    img21, img22, img23, img24, img25, img26, img27, img28 } from "./imports"

const Artgal = () => {
    return (
        <div className="prt__artgal section__margin">
            <div className="prt__artgal-container">
                <Article imgUrl={img07} link="/" title="A Lost Battery" paragraph="2020"/>
                <Article imgUrl={img08} link="/" title="Jelly Dance" paragraph="2020"/>
                <Article imgUrl={img09} link="/" title="Dry Bones" paragraph="2020"/>
                <Article imgUrl={img02} link="/" title="Bee" paragraph="2021"/>

                <Article imgUrl={img01} link="/" title="Kitchen" paragraph="2016"/>
                <Article imgUrl={img18} link="/" title="Bathroom" paragraph="2019"/>
                <Article imgUrl={img24} link="/" title="ChromeBall" paragraph="2020"/>
                <Article imgUrl={img04} link="/" title="Sky Adventures" paragraph="2021"/>

                <Article imgUrl={img05} link="/" title="Morning sip" paragraph="2020"/>
                <Article imgUrl={img25} link="/" title="A Delicious Meal" paragraph="2020"/>
                <Article imgUrl={img15} link="/" title="The Ramen" paragraph="2021"/>
                <Article imgUrl={img21} link="/" title="Romantic Evening" paragraph="2020"/>

                <Article imgUrl={img27} link="/" title="Too Fast" paragraph="2019"/>
                <Article imgUrl={img19} link="/" title="Two Towels" paragraph="2019"/>
                <Article imgUrl={img11} link="/" title="Headlights" paragraph="2020"/>
                <Article imgUrl={img06} link="/" title="Steampunk Eye" paragraph="2019"/>

                <Article imgUrl={img16} link="/" title="Movie Night" paragraph="2019"/>
                <Article imgUrl={img17} link="/" title="Hair Whip" paragraph="2020"/>
                <Article imgUrl={img03} link="/" title="John" paragraph="2018"/>
                <Article imgUrl={img20} link="/" title="Graveyard" paragraph="2017"/>

                <Article imgUrl={img12} link="/" title="Broken" paragraph="2019"/>
                <Article imgUrl={img13} link="/" title="Mandle Adventure" paragraph="2020"/>
                <Article imgUrl={img14} link="/" title="Movement Mouse" paragraph="2020"/>
                <Article imgUrl={img10} link="/" title="View" paragraph="2019"/>

                <Article imgUrl={img22} link="/" title="Sunset" paragraph="2017"/>
                <Article imgUrl={img23} link="/" title="WTF idk" paragraph="2020"/>
                <Article imgUrl={img26} link="/" title="Bedroom" paragraph="2018"/>
                <Article imgUrl={img28} link="/" title="Slow-Mo Bullet Shot" paragraph="2017"/>
            </div>
      </div>
      )
  }

export default Artgal