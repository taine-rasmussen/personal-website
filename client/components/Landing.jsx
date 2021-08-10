import React from 'react'
import { Link } from 'react-router-dom'


const Landing = () => {

    return( 
        <div className='landingContainer'>
            <h1 className='landingHeader'>Taine Rasmussen</h1>
            <Link to='/menu'>
                <button className='landingBtn'>Enter site</button>
            </Link>
        </div>
    )
}

export default Landing