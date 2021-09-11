import React from 'react'

const About = () => {

    return(
        <div> 

            <img src="Imgs/street5.jpg" alt='Man walking' className='about-img'/>

            <section className='about-container' id='testing' >

                <div className='about-header-container'>
                    <h1 className='about-header postioned-top-left' data-aos='fade-right'
                    data-aos-duration={1500}
                    data-aos-delay={100}><span>About Taine</span></h1>
                </div>
                <div className='about-text-container' data-aos="fade-up" data-aos-duration={1500} data-aos-delay={100}>
                    <div className='about-left-text'>
                        <p className='bold-p'>
                        I am a software developer and photographer with a desire and passion for all things creative, from design, photography, music and of course programming.
                        </p>
                    </div>
                    <div className='about-right-text'>
                        <p className='bold-p'>
                        Drawing me towards these different worlds is a love for a creative medium that allows for endless rabbit holes to fill any & all curious itches, while having no end destination to reach. Without the finish line in sight I get to constantly be free, learning more, exploring new ideas, challenging old ones & creating work I love.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About