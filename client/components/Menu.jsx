import React from 'react'
import { Link } from 'react-router-dom'


const Menu = () => {


    return(
        <div className='menuContainer'>
            <div className='menuHeaderWrapper'>
                <Link to='/fashion' className='menuHeader'>
                    <h1 id='menuHeaderStyling'>Fashion</h1>
                </Link>
                <Link to='/travel' className='menuHeader'>
                    <h1 id='menuHeaderStyling'>Travel</h1>
                </Link>
                <Link to='/documentary' className='menuHeader'>
                    <h1 id='menuHeaderStyling'>Documentary</h1>
                </Link>
                <Link to='/about' className='menuHeader'>
                    <h1 id='menuHeaderStyling'>About</h1>
                </Link>
                <Link to='/' className='menuHeader'>
                    <button>Home</button>
                </Link>
            </div>   
        </div>
    )
}

export default Menu