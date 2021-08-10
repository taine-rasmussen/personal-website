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
                    <button className='landingBtn'>Enter site</button>
                </Link>
            </div>    
        </div>
    )
}

export default Landing