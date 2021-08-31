import React from 'react'

const Gallery = () => {

    return(
        <>
            <h1>Gallery Working</h1>

            <div className='street-container'>
                <div className='street-img-container'>
                    <img src='/Imgs/street2.jpg' alt='' className='portrait-img' />
                </div>
                <div className='street-img-container'>
                    <img src='/Imgs/travel1.jpg' alt='' className='landscape-img'/>
                </div>
                <div className='street-img-container'>
                    <img src='/Imgs/travel2.jpg' alt='' className='portrait-img'/>
                </div>
                <div className='street-img-container'>
                    <img src='/Imgs/travel3.jpg' alt='' className='portrait-img'/>
                </div>
                <div className='street-img-container'>
                    <img src='/Imgs/travel4.jpg' alt='' className='landscape-img'/>
                </div>
                <div className='street-img-container'>
                    <img src='/Imgs/street1.jpg' alt='' className='portrait-img'/>
                </div>
            </div>
        </>
    )
}

export default Gallery