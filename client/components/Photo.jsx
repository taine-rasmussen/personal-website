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

                <p className='photo-blurb'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repudiandae ipsam in, corporis similique fugit totam molestias tempora tempore rerum animi. Alias id distinctio voluptatibus illum commodi qui laborum. Quam!
                </p>

            <div className='photo-headers-container'>
                <div className='photo-sub-header-container'>
                    <Link to='photography'>
                        <h2 className='photo-sub-header'>Portrait</h2>
                        <img src='Imgs/Bri1.jpg' alt='portrait of women' className='preview-photo' />
                    </Link>
                </div>
                <div className='photo-sub-header-container'>
                    <Link to='photography'>
                        <h2 className='photo-sub-header'>Street</h2>
                        <img src='Imgs/travel3.jpg' alt='man walking' className='preview-photo' />
                    </Link>
                </div>
            </div>
                   
            </section>
        </>
    )
}

export default Photo