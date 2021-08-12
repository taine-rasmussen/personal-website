import React from 'react'
import { Link } from 'react-router-dom'
import { Parallax } from 'react-scroll-parallax';


const Landing = () => {

    return( 
        <div className='landingContainer'>
            <div className='landingHeaderWrapper'>


            <Parallax y={[-200, 200]} tagOuter="figure">
                <h1 className='landingHeader'>Taine Rasmussen</h1>
            </Parallax>

            </div>

            <div className='landingBtnWrapper'>    
                <Link to='/menu'>
                    <button className="button">
                        Enter Site
                        <div className="button__horizontal"></div>
                        <div className="button__vertical"></div>
                    </button>
                </Link>
            </div>    
        </div>
    )
}

export default Landing