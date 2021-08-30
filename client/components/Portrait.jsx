import React from 'react'
import { Link } from 'react-router-dom'


const Portrait = () => {

    return(
        <> 
            <h1>Portrait working</h1>


            <Link to='/'> 
                <button className='is-btn'>Home</button>
            </Link>
        </>
    )
}


export default Portrait