import React from 'react'
import { Link } from 'react-router-dom'


const Portrait = () => {

    return(
        <> 
            <h1>Portrait working</h1>

                <div className='portrait-container'>
                    <div className='portrait-img-container'>
                        <img src='/Imgs/street2.jpg' alt='' className='portrait-img' />
                    </div>
                    <div className='portrait-img-container'>
                        <img src='/Imgs/travel1.jpg' alt='' className='landscape-img'/>
                    </div>
                    <div className='portrait-img-container'>
                        <img src='/Imgs/travel2.jpg' alt='' className='portrait-img'/>
                    </div>
                    <div className='portrait-img-container'>
                        <img src='/Imgs/travel3.jpg' alt='' className='portrait-img'/>
                    </div>
                    <div className='portrait-img-container'>
                        <img src='/Imgs/travel4.jpg' alt='' className='landscape-img'/>
                    </div>
                    <div className='portrait-img-container'>
                        <img src='/Imgs/street1.jpg' alt='' className='portrait-img'/>
                    </div>
                </div>



            <Link to='/'> 
                <button className='is-btn'>Home</button>
            </Link>
        </>
    )
}


export default Portrait