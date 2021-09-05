import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//Components
import Streetgallery from './street-gallery'
import Streetpreview from './street-preview'

const Street = () => {

    const [view, setView] = useState(true)
    const [header, setHeader] = useState('Street Gallery')

    const Gallery = 'Street Gallery'
    const Preview = 'Street Preview'
    const headerClass = document.getElementsByClassName('street-header')


        // Handles changing page header to match gallery or preview
        const changeHeader = () => {
            header === Gallery ? setHeader(Preview) : setHeader(Gallery)
        }

        // Testing re how create style changes on state change
        const headerStyle = () => {
           console.log(headerClass)
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

        
    // build links to all sections of website using that DOM manipulation used in scroll btn
    // Landing background set to image of guy walking in paris?
    // using images to fill empty places on webpage - overlapping component borders would be nice.

    // Styling on this page:
    // Remove side container - It is too disracting and makes CSS more difficult
    // Move all contents to top container - Explore menu drop downs to save space

    // Use CSS animations on header state change 
    // Idea 1: Create const with value of objcet, object containing CSS
    // On state change animation is triggered via onClick then try use .Then to trigger the gallery / preview switch

    //try running function onLoad that sets webpage view point to top of page
    return(
            <>
                <div className='street-container'> 
                    <div className='street-margin-top-container'>
                        <h1 className='street-header'
                            data-aos='fade-right'
                            data-aos-duration={1500}
                            data-aos-delay={100}>{header}</h1>

                            <div className='street-sub-header-container'>
                                <div className='street-left-side'>
                                    <Link to='/'> 
                                        <h2 className='street-sub-header'
                                        data-aos='fade-left'
                                        data-aos-duration={1500}
                                        data-aos-delay={100}>Home</h2>
                                    </Link>
                                </div>
                                <div className='street-right-side'>
                                    <Link to='/portrait'> 
                                        <h2 className='street-sub-header'       data-aos='fade-right'
                                        data-aos-duration={1500}
                                        data-aos-delay={100}>Portrait</h2>
                                    </Link>
                                </div>
                            </div>

                            <div className='street-toggle-container'>
                                <input type="checkbox" id="toggle" onClick={changeView}/>
                                <label htmlFor="toggle" className='street-label'></label>
                                <h3 className='street-toggle-header'>Toggle View</h3>
                            </div>
                    </div>
                </div>

            <div className='street-photos-container border'>
                {view ? <Streetgallery /> : <Streetpreview />}
            </div>
        </>
    )
}

export default Street