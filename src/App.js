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
        <Route path="/artgal" element={<ArtGal/>} />
        <Route path="/chains" element={<Chains/>} />
        <Route path="*" element={<Main/>} />
      </Routes>
    </>
  )
}

export default App