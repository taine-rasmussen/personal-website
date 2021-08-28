import React from 'react'
import { sendForm } from 'emailjs-com'
import Footer from './Footer'

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault()
        sendForm("service_vfkw5ts", "template_bm3v122", e.target, "user_07A1Lkmj3NdwJpVweNfNQ")
          .then(result => {
            console.log('Email sent successfully!')
          }, error => {
            console.log(error.text)
          })
          e.target.reset()
      }

    return(
        <div className='test'>
        <section className='contact-container'>
                <h1 className='contact-header'
                data-aos='fade-right'
                data-aos-duration={1500}
                data-aos-delay={100}>Get in touch!</h1>
            </section>

            <section className='email-container'>
                <form onSubmit={sendEmail}>
                    <div className='email-contents'>
                        <label className="label"><strong>Name: </strong></label>
                        <input type="text" name="name" placeholder='Name'/>

                            <br></br>

                        <label className="label"><strong>Email: </strong></label>
                        <input className="input" type="email" name="email" placeholder='Email'/>

                            <br></br>

                        <label className="label move-left"><strong>Subject: </strong></label>
                        <input className="input" type="text" name="subject" placeholder='Subject'/>

                            <br></br>

                        <label className="label move-left2"><strong>Message: </strong></label>
                        <textarea className="input is-email-message" name="message" placeholder='Message' cols="25" rows="8"></textarea>

                            <br></br>

                        <button className='is-btn is-send-btn'>Send!</button>
                    </div>
                </form>
            </section >
        </div>
    )
}

export default Contact