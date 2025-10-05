import React from 'react'

import { Artgal } from '../containers';
import { Navbar, Header } from "../components";

const ArtGal = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
              <Navbar/>
              <Header title="Artistic Creations" paragraph="Here are some of my artistic works that I’ve created since I first started this hobby, which has now become my full-time job. I don’t really make renders just for fun anymore — that hobby time has been taken over by game development — so any renders I create now are part of my professional work and can be viewed in the commissions tab"/>
        </div>
        <Artgal />
    </div>
  )
}

export default ArtGal