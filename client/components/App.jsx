import React from 'react'
import { Route } from 'react-router-dom'

  //Components
  import Landing from './Landing'
  import About from './About'
  import Photo from './Photo'
  import Tech from './Tech'
  import Contact from './Contact'
  import Portrait from './Portrait'
  import Street from './Street'

  function App () {
    return (
      <div className='app'>
          <Route exact path='/' component={Landing} />
          <Route exact path='/' component={About} />
          <Route exact path='/' component={Photo} />
          <Route exact path='/' component={Tech} />
          <Route exact path='/' component={Contact} />
          <Route exact path='/Portrait' component={Portrait} />
          <Route exact path='/Street' component={Street} />
      </div>
    )
  }

export default App
