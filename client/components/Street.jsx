import React, { useState } from 'react'
import { Link } from 'react-router-dom'



//Components
import Gallery from './Gallery'
import Preview from './Preview'

const Street = () => {

    const [view, setView] = useState(true)

    // Handling state change on btn click
    const changeView = () => {
      view ? setView(false) : setView(true)
    }

    return(
        <> 
            <h1>Street working</h1>

                <button onClick={changeView} >test</button>

                {view ? <Gallery /> : <Preview />}

            <Link to='/'> 
                <button className='is-btn'>Home</button>
            </Link>
        </>
    )
}

export default Street