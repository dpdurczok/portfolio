import React from 'react'
import './article.css'
import { Link } from "react-router-dom"


const Cta = ({ imgUrl, title, paragraph, link, linktext}) => {
  return (
    <div className="prt__game-container_article">  
        <div className="prt__game-container_article-image">
          <img src={imgUrl} alt="blog" />
        </div>
        <div className='prt__game-container_article-content'>
          <div>
            <h3>
              {title}
            </h3>
            <p>{paragraph}</p>
          </div>
          <Link to={link} className='prt__game-container_article-content_learnmore'  >{linktext}</Link>
        </div>
    </div>
  )
}

export default Cta