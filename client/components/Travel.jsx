import React from 'react'
import { Link } from 'react-router-dom'

const Travel = () => {

    return(
        <> 
            <h1>Travel working</h1>
            <Link to='/menu'>
                <button className='globalMenuBtn'>Menu</button>
            </Link>
        </>
    )
}

export default Travel