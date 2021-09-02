import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Components
import Gallery from './Gallery'
import Preview from './Preview'
import Footer from './Footer'

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

        // header ? setHeader('Preview') : setHeader('Gallery') - currently changes to preview but does not change back

        //current working solution
        if( header === 'Gallery'){
            setHeader('Preview')
        } else (setHeader('Gallery'))
    }
    
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
                            <div className='street-social-container'>
                                 <Footer />
                            </div>
                            <Link to='/'> 
                                <h2 className='street-sub-header'>Home</h2>
                            </Link>
                            <Link to='/portrait'> 
                                <h2 className='street-sub-header'>Portrait</h2>
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