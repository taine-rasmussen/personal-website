import React from 'react'
import { Route } from 'react-router-dom'



//Components
import Landing from './Landing'
import Menu from './Menu'
import Fashion from './Fashion'
import Travel from './Travel'
import Documentary from './Documentary'
import About from './About'

function App () {

  console.log('Hi ;)')

  return (
      <div className='app'>
        <Route exact path='/' component={Landing} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/fashion' component={Fashion} />
        <Route exact path='/travel' component={Travel} />
        <Route exact path='/documentary' component={Documentary} />
        <Route exact path='/about' component={About} />
      </div>
  )
}

export default App
