import React, { useState } from 'react'

const PortraitPrview = () => {


    const [mainImg, setMainImg] = useState('Imgs/Bri1.jpg')

        // If you are reading this please help me refactor this mess
        const changeMainImg1= () => {
            return setMainImg("Imgs/Bri1.jpg")
        }
        const changeMainImg2= () => {
            return setMainImg("Imgs/Bri2.jpg")
        }
        const changeMainImg3= () => {
            return setMainImg("Imgs/Bri3.jpg")
        }
        const changeMainImg4= () => {
            return setMainImg("Imgs/Bri4.jpg")
        }
        const changeMainImg5= () => {
            return setMainImg("Imgs/portrait1.jpg")
        }
        const changeMainImg6= () => {
            return setMainImg("Imgs/portrait2.jpg")
        }
        const changeMainImg7= () => {
            return setMainImg("Imgs/portrait3.jpg")
        }

    return (
        <>
            <section className='preview-container'>
                <div className='preview-main-img-container'>
                    <img src={mainImg} alt='portrait' className='preview-main-img' />
                </div>

                <div className='preview-img-stack-container'>
                    <div className='preview-img-container'>
                        <img src='Imgs/Bri1.jpg' alt='portrait' className='preview-img' id='test' onClick={changeMainImg1}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/Bri2.jpg' alt='portrait' className='preview-img' onClick={changeMainImg2}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/Bri3.jpg' alt='portrait' className='preview-img' onClick={changeMainImg3}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/Bri4.jpg' alt='portrait' className='preview-img' onClick={changeMainImg4}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/portrait1.jpg' alt='portrait' className='preview-img' onClick={changeMainImg5}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/portrait2.jpg' alt='portrait' className='preview-img' onClick={changeMainImg6}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/portrait3.jpg' alt='portrait' className='preview-img' onClick={changeMainImg7}/>
                    </div>
                </div>

            </section>
        </>
    )
}

export default PortraitPrview