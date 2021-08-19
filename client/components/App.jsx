import React from 'react'
import { Route } from 'react-router-dom'



//Components
import Landing from './Landing'
import About from './About'
import Photo from './Photo'
import Tech from './Tech'

// TODO:
// NavBar switches colours depeding on the bg colour of the current component


function App () {


  return (
      <div className='app'>
        <Route exact path='/' component={Landing} />
        <Route exact path='/' component={About} />
        <Route exact path='/' component={Photo} />
        <Route exact path='/' component={Tech} />
      </div>
  )
}

export default App
