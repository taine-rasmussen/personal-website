import React from 'react'
import { sendForm } from 'emailjs-com'

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault()
        sendForm("service_vfkw5ts", "contact_form", e.target, "user_07A1Lkmj3NdwJpVweNfNQ")
          .then(result => {
            console.log('Email sent successfully!')
          }, error => {
            console.log(error.text)
          })
      }

      // header above
      // contact form on the left
      // social links on the right



    return(
      
        <section className='contact-container'>
            <div>
                <h1 className='contact-header'
                data-aos='fade-down'
                data-aos-duration={1500}
                data-aos-delay={100}>Get in touch!</h1>
            </div>

            <div>
                <form onSubmit={sendEmail}>

                    <label className="label">Name</label>
                    <input type="text" name="contact_number" />

                        <br></br>

                    <label className="label">Email</label>
                    <input className="input" type="email" name="user_email"/>

                        <br></br>

                    <label className="label">Message</label>
                    <textarea className="textarea" name="message"></textarea>

                        <br></br>

                    <button>Submit</button>
                </form>
            </div>


 

        </section>
    
    )
}

export default Contact