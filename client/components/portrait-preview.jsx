import React, { useState, useEffect } from 'react'

const PortraitPrview = () => {


    const [mainImg, setMainImg] = useState(`Imgs/Bri${num}.jpg`)
    const [style, setStyle] = useState(tallerStyle)
    const [num, setNum] =useState(1)

    // Fixes issue of init main Img not getting styling on page load
    useEffect(() => {
        setStyle(tallerStyle)
        setNum(1)
        setMainImg(`Imgs/Bri${num}.jpg`)
      },[]);

    const styles = {
            default: {
                height: '400px',
                width: '300px',
                border: '4px solid #081C15'
            },
            wider: {
                height: '400px',
                width: '325px',
                border: '4px solid #081C15', 
            },
            taller: {
                height: '420px',
                width: '280px',
                border: '4px solid #081C15'
            }
        }

        const defaultStyle = styles.default
        const widerStyle = styles.wider
        const tallerStyle = styles.taller


        // If you are reading this please help me refactor this mess
        const changeMainImg1= () => {
            return setStyle(tallerStyle), setMainImg("Imgs/Bri1.jpg")
        }
        const changeMainImg2= () => {
            return setStyle(defaultStyle), setMainImg("Imgs/Bri2.jpg")
        }
        const changeMainImg3= () => {
            return setStyle(defaultStyle), setMainImg("Imgs/Bri3.jpg")
        }
        const changeMainImg4= () => {
            return setStyle(tallerStyle), setMainImg("Imgs/Bri4.jpg")
        }
        const changeMainImg5= () => {
            return setStyle(widerStyle), setMainImg("Imgs/portrait1.jpg")
        }
        const changeMainImg6= () => {
            return setStyle(widerStyle), setMainImg("Imgs/portrait2.jpg")
        }
        const changeMainImg7= () => {
            return setStyle(widerStyle), setMainImg("Imgs/portrait3.jpg")
        }



        // Handles mainImg cycle btns changing preview img
        const cycleMainImgLeft = () => {
            return setNum(num + 1), setMainImg(`Imgs/Bri${num}.jpg`)          
        }
        const cycleMainImgRight = () => {
            return setNum(num + 1), setMainImg(`Imgs/Bri${num}.jpg`)
        }
        console.log('Num current state:', num)

// Idea for background of preview
// Right behind img bg is white
// surrounding area has css gradients fading into #F8F0E3

// Try:
// Set preview img stack to position fixed and give it a larger top margin so stack isnt moved when mainImg size changes
// Btns to left and right of the mainImg that allow user to cycle through imgs as well - all imgs named the same, state that updates num on end - onClick moves num up or down - Concatenate

    return (
        <>
            <section className='preview-container'>
                <div className='preview-main-img-container'>

                    <button onClick={cycleMainImgLeft}>Left</button>
                    <button onClick={cycleMainImgRight}>Right</button>

                    <img src={mainImg} alt='portrait' style={style} data-aos='fade' data-aos-duration={2500} data-aos-delay={150}/>
                </div>

                <div className='preview-img-stack-container'>
                    <div className='preview-img-container'>
                        <img src='Imgs/Bri1.jpg' alt='portrait' className='preview-img' onClick={changeMainImg1} data-aos='fade-right' data-aos-duration={2500} data-aos-delay={150}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/Bri2.jpg' alt='portrait' className='preview-img' onClick={changeMainImg2} data-aos='fade' data-aos-duration={2000} data-aos-delay={150}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/Bri3.jpg' alt='portrait' className='preview-img' onClick={changeMainImg3} data-aos='fade' data-aos-duration={1500} data-aos-delay={150}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/Bri4.jpg' alt='portrait' className='preview-img' onClick={changeMainImg4} data-aos='fade' data-aos-duration={2000} data-aos-delay={150}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/portrait1.jpg' alt='portrait' className='preview-img' onClick={changeMainImg5} data-aos='fade' data-aos-duration={1500} data-aos-delay={150}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/portrait2.jpg' alt='portrait' className='preview-img' onClick={changeMainImg6} data-aos='fade' data-aos-duration={2000} data-aos-delay={150}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/portrait3.jpg' alt='portrait' className='preview-img' onClick={changeMainImg7} data-aos='fade-left' data-aos-duration={2500} data-aos-delay={150}/>
                    </div>
                </div>

            </section>
        </>
    )
}

export default PortraitPrview