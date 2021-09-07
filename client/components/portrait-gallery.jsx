import React from 'react'

const PortraitGallery = () => {

    return (
        <>
             <div className='gallery-container'>
                <div className='gallery-img-container'>
                    <img src='/Imgs/portrait1.jpg' alt='' className='gallery-portrait portrait' />
                </div>
                <div className='gallery-img-container'>
                    <img src='/Imgs/portrait2.jpg' alt='' className='gallery-portrait'/>
                </div>
                <div className='gallery-img-container'>
                    <img src='/Imgs/portrait3.jpg' alt='' className='gallery-portrait'/>
                </div>
                <div className='gallery-img-container'>
                    <img src='/Imgs/portrait4.jpg' alt='' className='gallery-portrait'/>
                </div>
                <div className='gallery-img-container'>
                    <img src='/Imgs/portrait5.jpg' alt='' className='gallery-portrait gallery-wider'/>
                </div>
                <div className='gallery-img-container'>
                    <img src='/Imgs/portrait6.jpg' alt='' className='gallery-portrait gallery-taller'/>
                </div>
                <div className='gallery-img-container'>
                    <img src='/Imgs/portrait7.jpg' alt='' className='gallery-portrait gallery-wider'/>
                </div>
            </div>
        </>
    )
}

export default PortraitGallery