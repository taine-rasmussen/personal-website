import React from 'react'
import { Link } from 'react-router-dom'

//Components
import Footer from './Footer'

//Parallax? scrolling on menu
// Menu as is atm - container colour might need to change
// Body background to be the same as all menu comp
// Remove "enter site" Btn with parallax scroll
// Add random animation guide the user to scroll down
// On scroll menu component moves up and replaces landing comp
// Menu and landing container to be the same size so fit is perfect
// nice




const Fashion = () => {

    return(
        <div className='fashionContainer'> 
            <h1 className='fashionHeader'>Fashion</h1>

            <div className='fashionNavWrapper'>
                <Link to='/travel' className='navHeader'>
                    <h1 id='navHeaderStyling'>Travel</h1>
                </Link>
                <Link to='/documentary' className='navHeader'>
                    <h1 id='navHeaderStyling'>Documentary</h1>
                </Link>
                <Link to='/about' className='navHeader'>
                    <h1 id='navHeaderStyling'>About</h1>
                </Link>
                <Link to='/menu' className='navHeader'>
                    <h1 id='navHeaderStyling'>Menu</h1>
                </Link>
            </div>

            <div className='fashionImgWrapper'>

            </div>
            <Footer />
        </div>
    )
}

export default Fashion