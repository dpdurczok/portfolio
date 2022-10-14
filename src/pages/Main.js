import React from 'react'

import { Art, Games, Projects} from '../containers';
import { Navbar, Header} from '../components'

const Main = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header 
              title="Who am I? and what do i do?" 
              paragraph="I'm a self-tought indie game developer that uses unity and blender to create my games. I specialize in creating models, animating and creating characters and writing shaders. In my spare time i create renders in blender cycles or eevee."/>
        </div>
        <Art />
        <Games />
        <Projects />
    </div>
  )
}

export default Main