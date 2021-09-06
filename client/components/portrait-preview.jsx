import React, { useState, useEffect } from 'react'

const PortraitPrview = () => {


    const [mainImg, setMainImg] = useState('Imgs/Bri1.jpg')
    const [style, setStyle] = useState(tallerStyle)

    // Fixes issue of init main Img not getting styling on page load
    useEffect(() => {
        setStyle(tallerStyle)
      },[]);

    const styles = {
            default: {
                height: '400px',
                width: '300px',
                border: '4px solid black'
            },
            wider: {
                height: '400px',
                width: '325px',
                border: '4px solid black', 
            },
            taller: {
                height: '420px',
                width: '280px',
                border: '4px solid black'
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

    return (
        <>
            <section className='preview-container'>
                <div className='preview-main-img-container'>
                    <img src={mainImg} alt='portrait' style={style}/>
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