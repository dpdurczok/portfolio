import React from 'react'

import { Artgal } from '../containers';
import { Navbar, Header } from "../components";

const ArtGal = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
              <Navbar/>
              <Header title="My Art" paragraph="Here are most of my artisctic works"/>
        </div>
        <Artgal />
    </div>
  )
}

export default ArtGal