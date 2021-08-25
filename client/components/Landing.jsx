import React from 'react'
import { Link } from 'react-scroll'


const Landing = () => {

        // ToDo
        // Once second component is built will need to link arrow to smooth scroll to component

    return( 
        <>
            <section className='landing-container'>
                <div className='landing-header-container'
                     data-aos='fade-down'
                     data-aos-duration={1000}
                     data-aos-delay={100}
                 >
                    <h1 className='green'>Taine Rasmussen</h1>
                    <h3 className='landing-subheader'>Full Stack Software Developer & Photographer</h3>
                </div>

                <Link to='About' smooth={true} duration={2000}>
                    <div className='landing-arrow-container'>
                        <div className='landing-arrow arrow-first'></div>
                        <div className='landing-arrow arrow-second'></div>
                    </div>
                </Link>    
            </section>
        </>
    )
}

export default Landing