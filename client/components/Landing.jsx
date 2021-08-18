import React from 'react'


import Footer from './Footer'

const Landing = () => {

        // ToDo
        // Once second component is built will need to link arrow to smooth scroll to component

    return( 
        <>
            <section className='landing-container'>
                <h1 className='landing-header'>Taine Rasmussen</h1>

            <div className='landing-arrow-container'>
                 <div class='landing-arrow arrow-first'></div>
                 <div class='landing-arrow arrow-second'></div>
            </div>
              
            </section>

            <Footer />
        </>
    )
}

export default Landing