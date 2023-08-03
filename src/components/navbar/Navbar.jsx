import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Menu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleGamesLinkClick = () => {
    if (location.pathname === '/') {
      // If already on the Home page, scroll directly to the Games section
      const gamesSection = document.getElementById('games');
      if (gamesSection) {
        gamesSection.scrollIntoView({ behavior: 'smooth' });
      }
      setToggleMenu(false); // Close the menu after clicking on Games link
    } else {
      // Otherwise, navigate to the Home page first
      navigate('/');
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && toggleMenu) {
      // Scroll to the Games section after navigation is complete
      const gamesSection = document.getElementById('games');
      if (gamesSection) {
        gamesSection.scrollIntoView({ behavior: 'smooth' });
      }
      setToggleMenu(false); // Close the menu after scrolling to Games section
    }
  }, [navigate, location.pathname, toggleMenu]);

  return (
    <>
      <p><Link to="/">Home</Link></p>
      <p><Link to="/artgal">Art</Link></p>
      <p onClick={handleGamesLinkClick}>Games</p> {/* Use onClick to handle the smooth scroll */}
      <p><Link to="/jobgal">Commissions</Link></p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="prt__navbar">
      <div className="prt__navbar-links">
        <div className="prt__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="prt__navbar-menu">
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
  );
};

export default Navbar;
