import React from 'react'
import './header.css'
const Header = ({title, paragraph}) => {
  return (
    <div className="prt__header section__padding section__padding" id="home">  
        <div className="prt__header-content">
          <h1 className="gradient__text">{title}</h1>
          <p>{paragraph}</p>
        </div>
    </div>
  )
}

export default Header