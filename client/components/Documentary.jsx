import React from 'react'
import { Link } from 'react-router-dom'

const documentary = () => {

    return(
        <> 
            <h1>Documentary working</h1>
            <Link to='/menu'>
                <button className='globalMenuBtn'>Menu</button>
            </Link>
        </>
    )
}

export default documentary