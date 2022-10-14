import React, { Component } from "react"
import "./artgal.css"
import { Article } from "../../components";

import { img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, 
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, 
    img21, img22, img23, img24, img25, img26, img27, img28 } from "./imports"

const Artgal = () => {
    return (
        <div className="prt__artgal section__margin">
            <div className="prt__artgal-container">
                <Article imgUrl={img01} link="/" title="Kitchen" paragraph=""/>
                <Article imgUrl={img02} link="/" title="Bee" paragraph=""/>
                <Article imgUrl={img03} link="/" title="John" paragraph=""/>
                <Article imgUrl={img04} link="/" title="Sky Adventures" paragraph=""/>
                <Article imgUrl={img05} link="/" title="Morning sip" paragraph=""/>
                <Article imgUrl={img06} link="/" title="Shiny!" paragraph=""/>
                <Article imgUrl={img07} link="/" title="A Lost Battery" paragraph=""/>
                <Article imgUrl={img08} link="/" title="Jelly Dance" paragraph=""/>
                <Article imgUrl={img09} link="/" title="Dry Bones" paragraph=""/>
                <Article imgUrl={img10} link="/" title="View" paragraph=""/>
                <Article imgUrl={img11} link="/" title="Headlights" paragraph=""/>
                <Article imgUrl={img12} link="/" title="Broken" paragraph=""/>
                <Article imgUrl={img13} link="/" title="Mandle Adventure" paragraph=""/>
                <Article imgUrl={img14} link="/" title="Movement Mouse" paragraph=""/>
                <Article imgUrl={img15} link="/" title="The Ramen" paragraph=""/>
                <Article imgUrl={img16} link="/" title="Movie Night" paragraph=""/>
                <Article imgUrl={img17} link="/" title="Shangri-la" paragraph=""/>
                <Article imgUrl={img18} link="/" title="Bathroom" paragraph=""/>
                <Article imgUrl={img19} link="/" title="Two Towels" paragraph=""/>
                <Article imgUrl={img20} link="/" title="Graveyard" paragraph=""/>
                <Article imgUrl={img21} link="/" title="Romantic Evening" paragraph=""/>
                <Article imgUrl={img22} link="/" title="Sunset" paragraph=""/>
                <Article imgUrl={img23} link="/" title="WTF idk" paragraph=""/>
                <Article imgUrl={img24} link="/" title="ChromeBall" paragraph=""/>
                <Article imgUrl={img25} link="/" title="Backdoors" paragraph=""/>
                <Article imgUrl={img26} link="/" title="Bedroom" paragraph=""/>
                <Article imgUrl={img27} link="/" title="Harcmagedon" paragraph=""/>
                <Article imgUrl={img28} link="/" title="Slow-Mo Bullet Shot" paragraph=""/>
            </div>
      </div>
      )
  }

export default Artgal