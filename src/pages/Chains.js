import React from 'react'

import { StyleChains, ModelsChains} from '../containers-chains';
import { Navbar, Header } from '../components'

const Main = () => {
  return (
    <div className="App">
        <div className='gradient__bg'>
          <Navbar/>
          <Header title="Chains" paragraph="Chains is a long term project that I have been slowly working on since I started learning unity along side with my cousin.
          Curently its in beta versions and we are still working on the core mechanics, once thats complete we will move onto story building, buckle up because story will be GRAND!"/>
        </div>
          <StyleChains/>
          <ModelsChains />
    </div>
  )
}

export default Main