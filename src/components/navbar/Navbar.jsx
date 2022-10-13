import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css'

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#art">Art</a></p>
  <p><a href="#games">Games</a></p>
  <p><a href="#projects">Projects</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="prt__navbar">  
        <div className="prt__navbar-links">
          <div className="prt__navbar-links_container">
            <Menu />
          </div>
        </div>
        <div className ="prt__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
           }
           {toggleMenu && (
              <div className="prt__navbar-menu_container scale-up-center">
                <div className="prt__navbar-menu_container-links">
                  <Menu />
                </div>
              </div>
           )}
        </div>
    </div>
  )
}

export default Navbar