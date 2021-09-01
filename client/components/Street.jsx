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


        // bg colour in margins(one of the dark ones with the darkest being a border colour)
        // instead of buttons for links use the same header from the photo component
        /// social icons top right?
    return(
        <>
                <div className='street-container'> 
                    <div className='street-margin-top-container'>
                        <h1 className='street-header'>Street working</h1>
                    </div>

                    <div className='street-margin-side-container'>
                        <button onClick={changeView} className='is-btn'>Change View</button>
                        <Link to='/'> 
                            <button className='is-btn'>Home</button>
                        </Link>
                    </div>
                </div>

            <div className='street-photos-container'>
                {view ? <Gallery /> : <Preview />}
            </div>
        </>
    )
}

export default Street