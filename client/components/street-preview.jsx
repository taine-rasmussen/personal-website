import React, { useState } from 'react'

const Streetpreview = () => {

    const [mainImg, setMainImg] = useState('Imgs/street1.jpg')
   
    

        // If you are reading this please help me refactor this mess
        const changeMainImg1= () => {
            return setMainImg("Imgs/wstreet1.jpg")
        }
        const changeMainImg2= () => {
            return setMainImg("Imgs/street2.jpg")
        }
        const changeMainImg3= () => {
            return setMainImg("Imgs/travel1.jpg")
        }
        const changeMainImg4= () => {
            return setMainImg("Imgs/travel2.jpg")
        }
        const changeMainImg5= () => {
            return setMainImg("Imgs/travel3.jpg")
        }
        const changeMainImg6= () => {
            return setMainImg("Imgs/travel4.jpg")
        }
   
// Trying to solve the issue of MainImg needing to have different styling based off img displayed 
// Create an object with different stylings inside 
// changeMainImg funcs then apply set styling when clicked

return (
        <>
            <section className='preview-container'>
                <div className='preview-main-img-container'>
                    <img src={mainImg} alt='portrait' className='preview-main-img' />
                </div>

                <div className='preview-img-stack-container'>
                    <div className='preview-img-container'>
                        <img src='Imgs/street1.jpg' alt='portrait' className='preview-img' onClick={changeMainImg1}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/street2.jpg' alt='portrait' className='preview-img' onClick={changeMainImg2}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/travel1.jpg' alt='portrait' className='preview-img' onClick={changeMainImg3}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/travel2.jpg' alt='portrait' className='preview-img' onClick={changeMainImg4}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/travel3.jpg' alt='portrait' className='preview-img' onClick={changeMainImg5}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/travel4.jpg' alt='portrait' className='preview-img' onClick={changeMainImg6}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Streetpreview