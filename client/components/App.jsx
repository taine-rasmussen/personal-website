import React from 'react'
import { Route } from 'react-router-dom'



//Components
import Landing from './Landing'
import About from './About'
import Photo from './Photo'


function App () {


  return (
      <div className='app'>
        <Route exact path='/' component={Landing} />
        <Route exact path='/' component={About} />
        <Route exact path='/' component={Photo} />
      </div>
  )
}

export default App
