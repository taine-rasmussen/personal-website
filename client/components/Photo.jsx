import React from 'react'
import { Link } from 'react-router-dom'

const Photo = () => {

    return (
        <div>
            <section className='photo-container'>
                <h1 className='photo-header postioned-top-left' data-aos='fade-left' data-aos-duration={1500} data-aos-delay={100}>Photography</h1>
                    {/* <p className='photo-blurb' data-aos='fade' data-aos-duration={2000} data-aos-delay={750}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repudiandae ipsam in, corporis similique fugit totam molestias tempora tempore rerum animi. Alias id distinctio voluptatibus illum commodi qui laborum. Quam!
                    </p> */}

                    <div className='photo-headers-container'>
                        <div className='photo-portrait-container container'>
                            <Link to='portrait'>
                                <h2 className='photo-sub-header' data-aos='fade-up' data-aos-duration={1500} data-aos-delay={100}><span>Portrait</span></h2>
                                <img src='Imgs/portrait6.jpg' alt='portrait of women' className='preview-photo'/>
                                <img src='Imgs/portrait1.jpg' alt='portrait of women' className=' second-photo' />
                                <img src='Imgs/portrait2.jpg' alt='portrait of women' className=' third-photo' />
                            </Link>
                        </div>
                        <div className='photo-street-container'>
                            <Link to='street'>
                                <h2 className='photo-sub-header right' data-aos='fade-up' data-aos-duration={1500} data-aos-delay={100}><span>Street</span></h2>
                                <img src='Imgs/street5.jpg' alt='portrait of women' className='preview-photo'/>
                                <img src='Imgs/street1.jpg' alt='portrait of women' className=' second-photo' />
                                <img src='Imgs/street4.jpg' alt='portrait of women' className=' third-photo' />
                            </Link>
                        </div>
                    </div>    
            </section>
            <img src='Imgs/photo-tech-merge.svg' alt='background image' className='photo-merge'/>
        </div>
    )
}

export default Photo