import React from 'react';

import { Art, Commissions, Games} from '../containers';
import { Navbar, Header } from '../components';

const Main = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header
          title="About Me and My Work"
          paragraph={`I’m a self-taught computer artist and indie game developer, working with tools like Unity and Blender to bring ideas to life. My work spans across 3D modeling, rendering, animation, video editing, and product blueprint creation. These days, most of my renders and visual projects are client commissions or part of my game development work, as my creative focus has shifted from hobby projects to full-time production.`}
        />

      </div>
      <Art />
      <Commissions />
      <Games />
    </div>
  );
};


export default Main;
