import React from 'react'
import { Link } from 'react-router-dom'


const Photo = () => {


    return (
        <>
            <section className='photo-container'>
                <h1 className='green'
                data-aos='fade-down'
                data-aos-duration={1500}
                data-aos-delay={100}>Photography</h1>
                
                <Link to='photography'><button>to photos</button></Link>
            </section>
        </>
    )
}

export default Photo