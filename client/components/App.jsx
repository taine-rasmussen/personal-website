import React from 'react'
import { Route } from 'react-router-dom'



//Components
import Landing from './Landing'
import Menu from './Menu'
import Fashion from './Fashion'
import Travel from './Travel'
import Documentary from './Documentary'
import About from './About'
import Final from './Final'


function App () {

  console.log('Please hire me :)')

  return (
      <div className='app'>
        <Route exact path='/' component={Landing} />
        <Route exact path='/menu' component={Menu} />
        <Route exact path='/fashion' component={Fashion} />
        <Route exact path='/travel' component={Travel} />
        <Route exact path='/documentary' component={Documentary} />
        <Route exact path='/about' component={About} />
        <Route exact path='/final' component={Final} />
      </div>
  )
}

export default App
