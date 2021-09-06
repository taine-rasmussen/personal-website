import React, { useState } from 'react'

const PortraitPrview = () => {


    const [mainImg, setMainImg] = useState('Imgs/Bri1.jpg')

    return (
        <>
            <section className='preview-container'>
                <div className='preview-main-img'>
                    <img src={mainImg} alt='portrait'/>
                </div>

                <div className='preview-img-stack-container'>
                    <div className='preview-img-container'>
                        <img src='Imgs/Bri1.jpg' alt='portrait' className='preview-img'/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/Bri2.jpg' alt='portrait' className='preview-img'/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/Bri3.jpg' alt='portrait' className='preview-img'/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/Bri4.jpg' alt='portrait' className='preview-img'/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/portrait1.jpg' alt='portrait' className='preview-img'/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/portrait2.jpg' alt='portrait' className='preview-img'/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/portrait3.jpg' alt='portrait' className='preview-img'/>
                    </div>
                </div>

            </section>
        </>
    )
}

export default PortraitPrview