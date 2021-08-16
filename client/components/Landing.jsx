import React from 'react'
import { Parallax } from 'react-scroll-parallax';


import Menu from './Menu'

const Landing = () => {

    return( 
        <div className='landingContainer'>
        
        <div className='landingHeaderWrapper'>
                <h1 className='landingHeader'>Taine Rasmussen</h1>
            </div>    


            <div className='landingMenuScroll'>
                <Parallax  y={[100, 100]}>
                    <Menu />
                </Parallax>  
            </div>
        </div>
    )
}

export default Landing