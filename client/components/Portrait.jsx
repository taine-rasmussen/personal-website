import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Components
import PortraitGallery from './portrait-gallery'
import PortraitPreview from './portrait-preview'


const Portrait = () => {

    const [view, setView] = useState(true)
    const [header, setHeader] = useState('Portrait Gallery')

    const Gallery = 'Portrait Gallery'
    const Preview = 'Portrait Preview'

        // Handles changing page header to match gallery or preview
        const changeHeader = () => {
            header === Preview ? setHeader(Gallery) : setHeader(Preview)
        }
        
        // Handling state change on btn click
        const changeView = () => {
            view ? setView(false) : setView(true) 
            changeHeader()
        }

         // Handles setting webpage on load to top
         const setWebpageView = () => {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }

        setWebpageView()

    return(
        <>
                <div className='portrait-container'> 
                    <div className='portrait-margin-top-container'>
                        <h1 className='portrait-header'
                            data-aos='fade-right'
                            data-aos-duration={1500}
                            data-aos-delay={100}>{header}
                        </h1>

                            <div className='portrait-sub-header-container'
                                 data-aos='fade'
                                 data-aos-duration={1500}
                                 data-aos-delay={200}>
                                <div className='portrait-left-side' >
                                    <Link to='/'> 
                                        <h2 className='portrait-sub-header'
                                            data-aos='fade-left'
                                            data-aos-duration={1500}
                                            data-aos-delay={100}>Home
                                        </h2>
                                    </Link>
                                </div>
                                <div className='portrait-right-side'>
                                    <Link to='/street'> 
                                        <h2 className='portrait-sub-header'
                                            data-aos='fade-right'
                                            data-aos-duration={1500}
                                            data-aos-delay={100}>Street
                                        </h2>
                                    </Link>
                                </div>
                            </div>

                            <div className='portrait-toggle-container' 
                                 data-aos='fade-down'
                                 data-aos-duration={1500}
                                 data-aos-delay={50}>
                                <input type="checkbox" id="toggle" onClick={changeView}/>
                                <label htmlFor="toggle" className='portrait-label'></label>
                                <h3 className='portrait-toggle-header'>Toggle View</h3>
                            </div>
                    </div>
                </div>

            <div className='portrait-photos-container border'>
                {view ? <PortraitGallery /> : <PortraitPreview />}
            </div>
        </>
    )
}


export default Portrait