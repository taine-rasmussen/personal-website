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
        <section className='contact-container'>
            <div>
                <h1 className='contact-header'
                data-aos='fade-down'
                data-aos-duration={1500}
                data-aos-delay={100}>Get in touch!</h1>
            </div>

            <section className='email-container'>
                <form onSubmit={sendEmail}>

                    <label className="label">Name</label>
                    <input type="text" name="name" placeholder='Name'/>

                        <br></br>

                    <label className="label">Email</label>
                    <input className="input" type="email" name="email" placeholder='Email'/>

                        <br></br>

                    <label className="label">Subject</label>
                    <input className="input" type="text" name="subject" placeholder='Subject'/>

                        <br></br>

                    <label className="label">Message</label>
                    <textarea className="textarea" name="message" placeholder='Message'></textarea>

                        <br></br>

                    <button>Submit</button>
                </form>
            </section >

            <div className='contact-socail-container'>
                <Footer />
            </div>

        </section>
    
    )
}

export default Contact