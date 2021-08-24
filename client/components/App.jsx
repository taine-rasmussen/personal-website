import React from 'react'
import { Route } from 'react-router-dom'



//Components
import Landing from './Landing'
import About from './About'
import Photo from './Photo'
import Tech from './Tech'
import Contact from './Contact'
import Photography from './Photography'

// TODO:
// NavBar switches colours depeding on the bg colour of the current component
// Avoid using set height and width - will only cause issues for responsivness - try use max-width / min-height so it will have a max size but can shrink with screen when needed
// Using the classNames from the social links the were cmd c & v'd make my own btns to get around styling and layout issues
// using global variables on things used a lot to cut down on repeating unneeded styling
// make collages of the images and upload that - will be easier positioning and reduce risk of deploy 404 on imgs issue


function App () {


  return (
      <div className='app'>
        <Route exact path='/' component={Landing} />
        <Route exact path='/' component={About} />
        <Route exact path='/' component={Photo} />
        <Route exact path='/' component={Tech} />
        <Route exact path='/' component={Contact} />
        <Route exact path='/photography' component={Photography} />
      </div>
  )
}

export default App
