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
        if( header === 'Gallery'){
            setHeader('Preview')
        } else (setHeader('Gallery'))
    }

     // Handles where on webpage user should land
     const navToAbout = () => {
        document.body.scrollTop = 100000; // For Safari
        document.documentElement.scrollTop = 100000; // For Chrome, Firefox, IE and Opera
      }
    
    // build links to all sections of website using that DOM manipulation used in scroll btn
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
                            <label for="toggle" className='street-label'></label>
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

            <div className='street-photos-container border'>
                {view ? <Gallery /> : <Preview />}
            </div>
        </>
    )
}

export default Street