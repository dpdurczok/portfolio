import React from 'react'

import { Jobgal } from '../containers';
import { Navbar, Header } from "../components"

const JobGal = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
              <Navbar/>
              <Header title="Professional Projects" paragraph="Here are all my commissions i worked on for my clients"/>
        </div>
        <Jobgal />
    </div>
  )
}


export default JobGal