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



        /// social icons top right?
    return(
        <>
                <div className='street-container'> 
                    <div className='street-margin-top-container'>
                        <h1 className='street-header'>Street working</h1>
                    </div>

                    <div className='street-margin-side-container'>
                        <div>
                            <input type="checkbox" id="toggle" onClick={changeView}/>
                            <label for="toggle"></label>
                        </div>
                            <Link to='/'> 
                                <h2 className='street-sub-header'>Home</h2>
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