import React from 'react'

const Gallery = () => {

    return(
        <>
            <div className='gallery-header-container'>
                <h1 className='gallery-header'>Gallery</h1>
            </div>

                <div className='gallery-container'>
                    <div className='gallery-img-container'>
                        <img src='/Imgs/street2.jpg' alt='' className='gallery-portrait' />
                    </div>
                    <div className='gallery-img-container'>
                        <img src='/Imgs/travel1.jpg' alt='' className='gallery-landscape'/>
                    </div>
                    <div className='gallery-img-container'>
                        <img src='/Imgs/travel2.jpg' alt='' className='gallery-portrait'/>
                    </div>
                    <div className='gallery-img-container'>
                        <img src='/Imgs/travel3.jpg' alt='' className='gallery-portrait'/>
                    </div>
                    <div className='gallery-img-container'>
                        <img src='/Imgs/travel4.jpg' alt='' className='gallery-landscape'/>
                    </div>
                    <div className='gallery-img-container'>
                        <img src='/Imgs/street1.jpg' alt='' className='gallery-portrait'/>
                    </div>
            </div>
        </>
    )
}

export default Gallery