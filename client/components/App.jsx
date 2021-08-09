import React from 'react'
import { Route } from 'react-router-dom'



//Components
import Landing from './Landing'

function App () {

  return (
    <>
      <div className='app'>
        <Route exact path='/' component={Landing} />
      </div>
    </>
  )
}

export default App
