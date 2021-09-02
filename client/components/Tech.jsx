import React from 'react'


const Tech = () => {


    return (
        <>
            <section className='tech-container'>
                <div className='tech-header-container'>
                    <h1 className='postioned-top-left' data-aos='fade-right' data-aos-duration={1500} data-aos-delay={50}>Tech Skills</h1>

                    <p className='tech-blurb' data-aos='fade' data-aos-duration={2000} data-aos-delay={750}> 
                        As I continue to build these skills I am    constanlty find new rabbit holes to fall down, having fun exploring new technology & working on projects that im definitely going to finish before starting something new. Feel free to reach out & ask about any of these and how I've applied them to my projects. <p className='is-italic'>Click the links to find out more & checkout my <a href='https://github.com/taine-rasmussen' target='_blank' className='is-underlined'>github</a> to see how I have used them!</p>  
                    </p>
                </div>

                    <div className='tech-label-container'>
                        <a href='https://www.javascript.com/' target='_blank'
                        className='tech-link'>
                            <div className='tech-label-single' data-aos='fade-right' data-aos-duration={2000}>
                                <label className='tech-label'>JavaScript</label>
                            </div>
                        </a>
                        <a href='https://www.codecademy.com/learn/learn-html' target='_blank'
                        className='tech-link'>
                            <div className='tech-label-single' data-aos='fade-right' data-aos-duration={1500}>
                                <label className='tech-label'>HTML</label>
                            </div>
                        </a>
                        <a href='https://www.codecademy.com/learn/learn-css' target='_blank'
                        className='tech-link'>
                            <div className='tech-label-single' data-aos='fade-right' data-aos-duration={1000}>
                                <label className='tech-label'>CSS</label>
                            </div>
                        </a>
                        <a href='https://reactjs.org/docs/getting-started.html' target='_blank'
                        className='tech-link'>
                            <div className='tech-label-single' data-aos='fade-left' data-aos-duration={1000}>
                                <label className='tech-label'>React</label>
                            </div>
                        </a>
                        <a href='https://redux.js.org/introduction/getting-started' target='_blank'
                        className='tech-link'>
                            <div className='tech-label-single' data-aos='fade-left' data-aos-duration={1500}>
                                <label className='tech-label'>Redux</label>
                            </div>
                        </a>
                        <a href='https://nodejs.org/en/about/' target='_blank'
                        className='tech-link'>
                            <div className='tech-label-single' data-aos='fade-left' data-aos-duration={1500}>
                                <label className='tech-label'>Node</label>
                            </div>
                        </a>
                        <a href='https://jestjs.io/' target='_blank'
                        className='tech-link'>
                            <div className='tech-label-single' data-aos='fade-left' data-aos-duration={2000}>
                                <label className='tech-label'>Jest</label>
                            </div>
                        </a>
                        <a href='https://www.npmjs.com/package/supertest' target='_blank'
                        className='tech-link'>
                            <div className='tech-label-single' data-aos='fade-right' data-aos-duration={2000}>
                                <label className='tech-label'>Supertest</label>
                            </div>
                        </a>
                        <a href='https://www.npmjs.com/package/superagent' target='_blank'
                        className='tech-link'>
                            <div className='tech-label-single' data-aos='fade-right' data-aos-duration={1500}>
                                <label className='tech-label'>Superagent</label>
                            </div>
                        </a>
                        <a href='https://expressjs.com/' target='_blank'
                        className='tech-link'>
                            <div className='tech-label-single' data-aos='fade-left' data-aos-duration={1000}>
                                <label className='tech-label'>Express</label>
                            </div>
                        </a>
                        <a href='https://knexjs.org/' target='_blank'
                        className='tech-link'>
                            <div className='tech-label-single' data-aos='fade-left' data-aos-duration={1500}>
                                <label className='tech-label'>SQLite</label>
                            </div>
                        </a>
                        <a href='https://knexjs.org/' target='_blank'
                        className='tech-link'>
                            <div className='tech-label-single' data-aos='fade-left' data-aos-duration={2000}>
                                <label className='tech-label'>Knex</label>
                            </div>
                        </a>
                        <a href='https://www.atlassian.com/git/tutorials/what-is-version-control' target='_blank'
                        className='tech-link'>
                            <div className='tech-label-single' data-aos='fade-right' data-aos-duration={2000}>
                                <label className='tech-label'>Git Version Control</label>
                            </div>
                        </a>
                        <a href='https://towardsdatascience.com/introduction-to-rest-apis-90b5d9676004' target='_blank'
                        className='tech-link'>
                            <div className='tech-label-single' data-aos='fade-up' data-aos-duration={1500}>
                                <label className='tech-label'>RESTful API's</label>
                            </div>
                        </a>
                        <a href='https://code.visualstudio.com/docs/introvideos/debugging' target='_blank'
                        className='tech-link'>
                            <div className='tech-label-single' data-aos='fade-left' data-aos-duration={2000}>
                                <label className='tech-label'>Browser & Server Debugging</label>
                            </div>
                        </a>
                </div>
            </section>
        </>
    )
}

export default Tech