import React from 'react'


const Landing = () => {

        // ToDo
        // Once second component is built will need to link arrow to smooth scroll to component

    return( 
        <>
            <section className='landing-container'>
                <div className='landing-header-container'>
                    <h1 className='landing-header'>Taine Rasmussen</h1>
                    <h3 className='landing-subheader'>Full Stack Software Developer & Photographer</h3>
                </div>

                <div className='landing-arrow-container'>
                    <div class='landing-arrow arrow-first'></div>
                    <div class='landing-arrow arrow-second'></div>
                </div>
            </section>
        </>
    )
}

export default Landing