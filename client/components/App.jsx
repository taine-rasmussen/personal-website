import React from 'react'
import { Route } from 'react-router-dom'



//Components
import Landing from './Landing'
import Menu from './Menu'

function App () {

  return (
    <>
      <div className='app'>
        <Route exact path='/' component={Landing} />
        <Route exact path='/menu' component={Menu} />
      </div>
    </>
  )
}

export default App
