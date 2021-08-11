import React from 'react'
import { Link } from 'react-router-dom'

//Components
import Footer from './Footer'


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