import React from 'react'

import { StyleChains, ModelsChains} from '../containers-chains';
import { Navbar, Header } from '../components'

const Main = () => {
  return (
    <div className="App">
        <div className='gradient__bg'>
          <Navbar/>
          <Header title="Chains" paragraph="chains discrition"/>
        </div>
          <StyleChains/>
          <ModelsChains />
    </div>
  )
}

export default Main