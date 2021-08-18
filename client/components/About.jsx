import React from 'react'

const About = () => {


    return(
        <> 
            <section className='about-container'>

                <div className='about-header'>
                    <h1 className='about-header-text'>About Taine</h1>
                </div>

                <div className='about-text-container'>
                    <div className='about-left-text'>
                        <p className='about-text'>
                        I am a software developer with a desire and passion for all things creative, from design, photography, music and problem solving. Channeling all I have learnt from these interests and hobbies into my journey through Enspiral Dev Academy and into the tech industry has been the best decision I have ever made.
                        </p>
                    </div>
                    <div className='about-right-text'>
                        <p className='about-text'>
                        I am curious, love learning how things work and teaching where I can. These interests have me working on projects across multiple mediums where I can have opportunities for creative expression / solutions, produce intuitive user experience and see my work having a positive impact for those around me.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About