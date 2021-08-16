import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';


import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ParallaxProvider>  
      <Router> 
        <App />
      </Router>
    </ParallaxProvider> , 
    document.getElementById('app')
  )
})