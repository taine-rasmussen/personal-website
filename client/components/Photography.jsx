import React from 'react'
import { Link } from 'react-router-dom'


const photography = () => {

    return(
        <section>
            <h1>photography working</h1>
            <Link to='/'>
                <button>Home</button>
            </Link>

        

            <div className='photography-container'>
                <div className="photography-img">
                    <img src='Imgs/Bri1.jpg' alt='Bri1' className='photography-img'/>     
                </div>
                    <div className="photography-img">
                        <img src='Imgs/Bri2.jpg' alt='Bri2' className='photography-img'/>        
                </div>
                    <div className="photography-img">
                        <img src='imgs/Bri3.jpg' alt='Bri3' className='photography-img'/>
                </div>
                    <div className="photography-img">
                        <img src='imgs/Bri4.jpg' alt='Bri4' className='photography-img'/>
                </div>
            </div>
        </section>
    )
}

export default photography