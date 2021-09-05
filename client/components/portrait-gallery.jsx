import React from 'react'

const PortraitGallery = () => {

    return (
        <>
             <div className='gallery-container'>
                <div className='gallery-img-container'>
                    <img src='/Imgs/Bri1.jpg' alt='' className='gallery-portrait portrait' />
                </div>
                <div className='gallery-img-container'>
                    <img src='/Imgs/Bri2.jpg' alt='' className='gallery-portrait'/>
                </div>
                <div className='gallery-img-container'>
                    <img src='/Imgs/Bri3.jpg' alt='' className='gallery-portrait'/>
                </div>
                <div className='gallery-img-container'>
                    <img src='/Imgs/Bri4.jpg' alt='' className='gallery-portrait'/>
                </div>
                <div className='gallery-img-container'>
                    <img src='/Imgs/portrait1.jpg' alt='' className='gallery-portrait'/>
                </div>
                <div className='gallery-img-container'>
                    <img src='/Imgs/portrait2.jpg' alt='' className='gallery-portrait'/>
                </div>
                <div className='gallery-img-container'>
                    <img src='/Imgs/portrait3.jpg' alt='' className='gallery-portrait'/>
                </div>
            </div>
        </>
    )
}

export default PortraitGallery