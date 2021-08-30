import React from 'react'
import { Link } from 'react-router-dom'



const Street = () => {


    return(
        <> 
            <h1>Street working</h1>
            
            <Link to='/'> 
                <button className='is-btn'>Home</button>
            </Link>
        </>
    )
}

export default Street