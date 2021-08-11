import React from 'react'
import { Link } from 'react-router-dom'


//Components
import Footer from './Footer'

const Menu = () => {


// TODO
// Change hit boxes of headings for hover effect to be only over text



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
            </div>   
           <Footer />
        </div>
    )
}

export default Menu