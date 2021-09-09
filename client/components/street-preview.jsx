import React, { useState, useEffect } from 'react'

const Streetpreview = () => {

    const [mainImg, setMainImg] = useState(`Imgs/street${num}.jpg`)
    const [style, setStyle] = useState(tallerStyle)
    const [num, setNum] =useState(1)

    // Fixes issue of init main Img not getting styling on page load
    useEffect(() => {
        setStyle(tallerStyle)
        setNum(1)
        setMainImg(`Imgs/street${num}.jpg`)
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
            landscape: {
                height: '400px',
                width: '600px',
                border: '4px solid #081C15'
            },
            taller: {
                height: '420px',
                width: '280px',
                border: '4px solid #081C15'
            }
        }

        const defaultStyle = styles.default
        const tallerStyle = styles.taller
        const landscapeStyle = styles.landscape


        // If you are reading this please help me refactor this mess
        // Current issue: first click is setting style then takes another click to change img 
        const changeMainImg1= () => {
            return setStyle(tallerStyle), setNum(1), setMainImg(`Imgs/street${num}.jpg`)
        }
        const changeMainImg2= () => {
            return setStyle(tallerStyle), setNum(2), setMainImg(`Imgs/street${num}.jpg`)
        }
        const changeMainImg3= () => {
            return setStyle(landscapeStyle), setNum(3), setMainImg(`Imgs/street${num}.jpg`)
        }
        const changeMainImg4= () => {
            return setStyle(tallerStyle), setNum(4), setMainImg(`Imgs/street${num}.jpg`)
        }
        const changeMainImg5= () => {
            return setStyle(tallerStyle), setNum(5), setMainImg(`Imgs/street${num}.jpg`)
        }
        const changeMainImg6= () => {
            return setStyle(landscapeStyle), setNum(6), setMainImg(`Imgs/street${num}.jpg`)
        }
      


        // Handles mainImg cycle btns changing preview img 
        // const cycleMainImgLeft = () => {
        //    return num === 1 ? setNum(1) : setNum(num - 1), setMainImg(`Imgs/street${num}.jpg`) 
        // }
        // const cycleMainImgRight = () => {
        //    return  num === 7 ? setNum(6) : setNum(num + 1), setMainImg(`Imgs/street${num}.jpg`)
        // }
        // console.log('Num current state:', num)
        // Turning off before merge for deploy as not working properly

// Idea for background of preview
// Right behind img bg is white
// surrounding area has css gradients fading into #F8F0E3

// Try:
// Set preview img stack to position fixed and give it a larger top margin so stack isnt moved when mainImg size changes
// Btns to left and right of the mainImg that allow user to cycle through imgs as well - all imgs named the same, state that updates num on end - onClick moves num up or down - Concatenate

// set styling with class name - somehow use !important to trigger corredct styling for when img is mainImg
// using state: is mainImg true then apply style else default preview stack

    return (
        <>
            <section className='preview-container'>
                <div className='preview-main-img-container'>

                    {/* <button onClick={cycleMainImgLeft}  className='left-preview-btn'><strong>V</strong></button> */}
                        <img src={mainImg} alt='portrait' style={style}/>
                    {/* <button onClick={cycleMainImgRight} className='right-preview-btn'><strong>V</strong></button>     */}
                </div>

                <div className='preview-img-stack-container'>
                    <div className='preview-img-container'>
                        <img src='Imgs/street1.jpg' alt='portrait' className='preview-img' onClick={changeMainImg1}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/street2.jpg' alt='portrait' className='preview-img' onClick={changeMainImg2}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/street3.jpg' alt='portrait' className='preview-img' onClick={changeMainImg3}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/street4.jpg' alt='portrait' className='preview-img' onClick={changeMainImg4}/>
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/street5.jpg' alt='portrait' className='preview-img' onClick={changeMainImg5}/> 
                    </div>
                    <div className='preview-img-container'>
                        <img src='Imgs/street6.jpg' alt='portrait' className='preview-img' onClick={changeMainImg6}/>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Streetpreview