import React from 'react'
import { Link } from 'react-router-dom'



const Street = () => {


    return(
        <> 
            <h1>Street working</h1>

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



            <Link to='/'> 
                <button className='is-btn'>Home</button>
            </Link>
        </>
    )
}

export default Street