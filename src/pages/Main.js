import React from 'react';

import { Art, Commissions, Games, Projects } from '../containers';
import { Navbar, Header } from '../components';

const Main = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header
          title="Who am I? And what do I do?"
          paragraph="I'm a self-taught indie game developer that uses Unity and Blender to create my games. I specialize in creating models, animating characters, and writing shaders. In my spare time, I create renders in Blender Cycles or Eevee."
        />
      </div>
      <Art />
      <Commissions />
      <Games />
    </div>
  );
};


export default Main;
