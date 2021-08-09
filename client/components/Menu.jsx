import React from 'react'
import { Link } from 'react-router-dom'


const Menu = () => {


    return(
        <> 
        <Link to='/fashion'><h1>Fashion</h1></Link>
        <Link to='/travel'><h1>Travel</h1></Link>
        <Link to='/documentary'><h1>Documentary</h1></Link>
        <Link to='/about'><h1>About</h1></Link>
        <Link to='/'><button>Home</button></Link>
        </>
    )
}

export default Menu