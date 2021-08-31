import React from 'react'

const About = () => {


    return(
        <> 
            <section className='about-container'>

                <div className='about-header-container'>
                    <h1 className='about-header postioned-top-left' data-aos='fade-right'
                    data-aos-duration={1500}
                    data-aos-delay={100}><span>About Taine</span></h1>
                </div>

                <div      
                    className='about-text-container'               data-aos="fade-up"
                    data-aos-duration={1500}
                    data-aos-delay={100}
                >
                    <div className='about-left-text'>
                        <p>
                        I am a software developer with a desire and passion for all things creative. From design, photography, music and problem solving.
                        </p>
                    </div>
                    <div className='about-right-text'>
                        <p>
                        I am curious, love learning how things work and teaching where I can. These interests have me working on projects across multiple mediums where I can have opportunities for creative expression / solutions, produce intuitive user experience and see my work having a positive impact.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About