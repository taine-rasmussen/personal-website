import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Components
// import Gallery from './streetGallery' need to be changed to portait once page made
// import Preview from './streetPreview'
import Footer from './Footer'

const Portrait = () => {

    const [view, setView] = useState(true)
    const [header, setHeader] = useState('Portrait Gallery')

    // Handles changing page header to match gallery or preview
    const changeHeader = () => {
        header === Gallery ? setHeader(Preview) : setHeader(Gallery)
    }

    // Handling state change on btn click
    const changeView = () => {
      view ? setView(false) : setView(true) 
      changeHeader()
    }

    
    // build links to all sections of website using that DOM manipulation used in scroll btn
    // Landing background set to image of guy walking in paris?
    // using images to fill empty places on webpage - overlapping component borders would be nice.
    return(
        <>
                <div className='gallery-container'> 
                    <div className='gallery-margin-top-container'>
                        <h1 className='gallery-header'
                            data-aos='fade-right'
                            data-aos-duration={1500}
                            data-aos-delay={100}>{header}</h1>
                    </div>
                    <div className='gallery-margin-side-container'>
                        <div>
                            <input type="checkbox" id="toggle" onClick={changeView} />
                            <label htmlFor="toggle" className='gallery-label'></label>
                        </div>
                            <Link to='/'> 
                                <h2 className='gallery-sub-header'>Home</h2>
                            </Link>
                            <Link to='/street'> 
                                <h2 className='gallery-sub-header'>Street</h2>
                            </Link>
                    </div>
                </div>

            <div className='street-photos-container border'>
                {/* {view ? <Gallery /> : <Preview />} */}
            </div>
        </>
    )
}


export default Portrait