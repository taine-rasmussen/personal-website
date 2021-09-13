import React from 'react'
import { Link } from 'react-scroll'


const Landing = () => {

    return( 
        <>
            <section className='landing-container'>
                <div className='landing-header-container' data-aos='fade-down' data-aos-duration={2000} data-aos-delay={150}>
                    <h1 className='green'>Taine Rasmussen</h1>
                </div>
                    <h3 className='landing-subheader' data-aos='fade-down' data-aos-duration={2000} data-aos-delay={150}>Full Stack Software Developer & Photographer</h3>

                <Link to='About' smooth={true} duration={2000}>
                    <div className='landing-arrow-container'>
                        <div className='landing-arrow arrow-first'></div>
                        <div className='landing-arrow arrow-second'></div>
                    </div>
                </Link>    
            </section>

            <img src='Imgs/about-landing-merge.svg' alt='background image' className='landing-merge'/>
        </>
    )
}

export default Landing