import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Contact.css'
function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <div className='contact' data-aos='fade-up'>
      <h2 className='contact-title'>Get in touch</h2>
      <h6 className='contact-subtitle'>
        If you know of any positions available, have any questions, or just want
        to say hi, please feel free to email me at,
      </h6>
      <a className='contact-email' href='mailto:mostafaadel2171@gmail.com'>
        mostafaadel2171@gmail.com
      </a>
    </div>
  )
}

export default Contact
