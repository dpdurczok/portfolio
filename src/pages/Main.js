import React from 'react'

import { Art, Games, Projects, Header} from '../containers';
import { Navbar, CTA } from '../components'

const Main = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Art />
        <Games />
        <Projects />
        <CTA />
    </div>
  )
}

export default Main