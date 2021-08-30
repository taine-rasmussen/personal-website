import React from 'react'
import { Link } from 'react-router-dom'


const Photo = () => {


    return (
        <>
            <section className='photo-container'>
                <h1 className='photo-header postioned-top-left'
                data-aos='fade-right'
                data-aos-duration={1500}
                data-aos-delay={100}>Photography</h1>

            <div className='photo-headers-container'>
                <Link to='photography'>
                    <h2 className='photo-sub-header'>Portrait</h2>
                    <h2 className='photo-sub-header'>Street</h2>
                </Link>
            </div>
                
               
            </section>
        </>
    )
}

export default Photo