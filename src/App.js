import React from 'react'
import './App.css'
import { Route, Routes} from "react-router-dom"

import Main from "./pages/Main"
import ArtGal from "./pages/ArtGal"
import Chains from "./pages/Chains"


function App(){
  return(
    <>
      <Routes>
        <Route path="/portfolio" element={<Main/>} />
        <Route path="/portfolio/artgal" element={<ArtGal/>} />
        <Route path="/portfolio/chains" element={<Chains/>} />
      </Routes>
    </>
  )
}

export default App