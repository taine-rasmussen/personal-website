import React from 'react'
import { Link } from 'react-router-dom'


const photography = () => {

    return(
        <section>
            <h1>photography working</h1>
            <Link to='/'>
                <button className='is-btn'>Home</button>
            </Link>

        

            <div className='photography-container'>
                <h1>Portrait</h1>
                    <div className="photography-img portrait">
                        <img src='Imgs/Bri1.jpg' alt='Bri1' className='photography-img'/>     
                    </div>
                        <div className="photography-img portrait">
                            <img src='Imgs/Bri2.jpg' alt='Bri2' className='photography-img'/>        
                    </div>
                        <div className="photography-img portrait">
                            <img src='imgs/Bri3.jpg' alt='Bri3' className='photography-img'/>
                    </div>
                        <div className="photography-img portrait">
                            <img src='imgs/Bri4.jpg' alt='Bri4' className='photography-img'/>
                    </div>
                <h1>Travel & documentary</h1>
                    <div className="photography-img landscape">
                            <img src='Imgs/travel1.jpg' alt='bri1' className='photography-img'/>     
                        </div>
                            <div className="photography-img portrait">
                                <img src='Imgs/travel2.jpg' alt='Bri2' className='photography-img'/>        
                        </div>
                            <div className="photography-img portrait">
                                <img src='imgs/travel3.jpg' alt='Bri3' className='photography-img'/>
                        </div>
                            <div className="photography-img landscape">
                                <img src='imgs/travel4.jpg' alt='Bri4' className='photography-img'/>
                        </div>
                    </div>
        </section>
    )
}

export default photography