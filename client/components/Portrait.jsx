import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Components
import PortraitGallery from './portrait-gallery'
import PortraitPreview from './portrait-preview'


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

    return(
        <>
                <div className='street-container'> 
                    <div className='street-margin-top-container'>
                        <h1 className='street-header'
                            data-aos='fade-right'
                            data-aos-duration={1500}
                            data-aos-delay={100}>{header}</h1>
                    </div>
                    <div className='street-margin-side-container'>
                        <div>
                            <input type="checkbox" id="toggle" onClick={changeView} />
                            <label htmlFor="toggle" className='street-label'></label>
                        </div>
                            <Link to='/'> 
                                <h2 className='street-sub-header'>Home</h2>
                            </Link>
                            <Link to='/street'> 
                                <h2 className='street-sub-header'>Street</h2>
                            </Link>
                    </div>
                </div>

            <div className='street-photos-container border'>
                {view ? <PortraitGallery /> : <PortraitPreview />}
            </div>
        </>
    )
}


export default Portrait