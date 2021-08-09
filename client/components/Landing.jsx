import React from 'react'
import { Link } from 'react-router-dom'


const Landing = () => {

    return( 
        <>
            <h1>Taine Rasmussen</h1>
            <Link to='/menu'><button>Enter site</button></Link>
        </>
    )
}

export default Landing