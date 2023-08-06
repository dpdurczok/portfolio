import React from 'react';

import { Art, Commissions, Games, Projects } from '../containers';
import { Navbar, Header } from '../components';

const Main = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header
          title="About Me and My Work"
          paragraph="I'm a self-taught indie game developer, 
          utilizing Unity and Blender to bring my creative ideas to life. 
          My focus lies in creating models, animating characters, and writing shaders. 
          Additionally, I enjoy spending my spare time crafting renders in Blender Cycles or Eevee."
        />
      </div>
      <Art />
      <Commissions />
      <Games />
    </div>
  );
};


export default Main;
