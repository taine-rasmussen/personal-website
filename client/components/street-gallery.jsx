import React from 'react'

const Streetgallery = () => {

    return(
        <>
            <div className='gallery-container'>
                <div className='gallery-img-container'>
                    <img src='/Imgs/street1.jpg' alt='' className='gallery-portrait' />
                </div>
                <div className='gallery-img-container'>
                    <img src='/Imgs/street3.jpg' alt='' className='gallery-landscape'/>
                </div>
                <div className='gallery-img-container'>
                    <img src='/Imgs/street2.jpg' alt='' className='gallery-portrait'/>
                </div>
                <div className='gallery-img-container'>
                    <img src='/Imgs/street4.jpg' alt='' className='gallery-portrait'/>
                </div>
                <div className='gallery-img-container'>
                    <img src='/Imgs/street6.jpg' alt='' className='gallery-landscape'/>
                </div>
                <div className='gallery-img-container'>
                    <img src='/Imgs/street5.jpg' alt='' className='gallery-portrait'/>
                </div>
            </div>
        </>
    )
}

export default Streetgallery