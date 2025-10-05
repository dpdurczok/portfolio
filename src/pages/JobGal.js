import React from 'react'

import { Jobgal } from '../containers';
import { Navbar, Header } from "../components"

const JobGal = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
              <Navbar/>
              <Header title="Professional Projects" paragraph="Here are some of the commissions I’ve worked on for my clients. What you see here are mainly my graphic design projects. I also have plenty of quick drafts, concepts, and blueprints, along with video edits. My work spans across different areas — I’m a general computer artist with skills in video editing, 3D modeling and rendering, idea research and visualization, and product blueprint creation."/>
        </div>
        <Jobgal />
    </div>
  )
}


export default JobGal