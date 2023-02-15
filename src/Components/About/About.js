import React, { useEffect } from 'react'
import './About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function About() {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <div className='about'>
      <div className='row' data-aos='fade-left'>
        <h2 className='about-title'>About Me</h2>
        <p className='about-text col-md-6 mt-3 mt-md-0'>
          I am a driven software engineer with a passion for creating
          cutting-edge technology. With a background in web development, embaded
          development, embaded-linux, and machine learning, I bring a
          well-rounded skill set to every project I undertake. I am a problem
          solver at heart and enjoy the challenge of finding creative solutions
          to complex technical problems. As a soon-to-be graduate from the
          Faculty of Engineering at Alexandria University with a Bachelor's
          degree in Computer and Communication Engineering, I am eager to bring
          my expertise and enthusiasm to new and exciting opportunities in the
          field.
        </p>

        <div
          className='about-image col-md-6 mt-3 mt-md-0'
          data-aos='fade-right'
        >
          <img src='Mostafa.jpg' alt='' border='0' />
        </div>
      </div>
    </div>
  )
}

export default About
