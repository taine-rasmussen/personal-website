import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Components
import Gallery from './Gallery'
import Preview from './Preview'

const Street = () => {

    const [view, setView] = useState(true)
    const [header, setHeader] = useState('Gallery')




    // Handling state change on btn click
    const changeView = () => {
      view ? setView(false) : setView(true) 
      changeHeader()
    }
    // Handles changing page header to match gallery or preview
    const changeHeader = () => {
        if( header === 'Gallery'){
            setHeader('Preview')
        } else (setHeader('Gallery'))
    }


        /// social icons top right?
    return(
        <>
                <div className='street-container'> 
                    <div className='street-margin-top-container'>
                        <h1 className='street-header'>{header}</h1>
                    </div>

                    <div className='street-margin-side-container'>
                        <div>
                            <input type="checkbox" id="toggle" onClick={changeView} />
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