import React from 'react'
import './article.css'


const Cta = ({ imgUrl, title, paragraph }) => {
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
          <p className='prt__game-container_article-content_learnmore'>Learn More</p>
        </div>
    </div>
  )
}

export default Cta