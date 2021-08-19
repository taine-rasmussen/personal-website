import React from 'react'
import { Route } from 'react-router-dom'



//Components
import Landing from './Landing'
import About from './About'
import Photo from './Photo'
import Tech from './Tech'
import Contact from './Contact'

// TODO:
// NavBar switches colours depeding on the bg colour of the current component


function App () {


  return (
      <div className='app'>
        <Route exact path='/' component={Landing} />
        <Route exact path='/' component={About} />
        <Route exact path='/' component={Photo} />
        <Route exact path='/' component={Tech} />
        <Route exact path='/' component={Contact} />
      </div>
  )
}

export default App
