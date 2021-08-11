import React from 'react'
import { Link } from 'react-router-dom'


const Landing = () => {

    return( 
        <div className='landingContainer'>
            <div className='landingHeaderWrapper'>
                <h1 className='landingHeader'>Taine Rasmussen</h1>
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