import React from 'react'
import { Link } from 'react-router-dom'


const Portrait = () => {

    return(
        <> 
            <h1>Portrait working</h1>

                <div className='portrait-container'>
                    <div className='portrait-img-container'>
                        <img src='/Imgs/Bri1.jpg' alt='' className='portrait-img' />
                    </div>
                    <div className='portrait-img-container'>
                        <img src='/Imgs/portrait2.jpg' alt='' className='portrait-img'/>
                    </div>
                    <div className='portrait-img-container'>
                        <img src='/Imgs/Bri2.jpg' alt='' className='portrait-img'/>
                    </div>
                    <div className='portrait-img-container'>
                        <img src='/Imgs/portrait3.jpg' alt='' className='portrait-img'/>
                    </div>
                    <div className='portrait-img-container'>
                        <img src='/Imgs/Bri4.jpg' alt='' className='portrait-img'/>
                    </div>
                    <div className='portrait-img-container'>
                        <img src='/Imgs/Bri3.jpg' alt='' className='portrait-img'/>
                    </div>
                </div>



            <Link to='/'> 
                <button className='is-btn'>Home</button>
            </Link>
        </>
    )
}


export default Portrait