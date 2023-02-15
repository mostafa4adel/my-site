import React, { useEffect } from 'react'
import './Experience.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])

  return (
    // make a grid for the experience work in the companies
    <div className='experience'>
      <div className='row' data-aos='fade-right'>
        <h2 className='experience-title'>Training</h2>
        <div className='col-md-6 mt-3 mt-md-0 '>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Cloud Computing and Cybersecurity</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                Palo Alto Networks and Cybersecurity Academy
              </h6>
              <p className='card-subtitle mb-2 text-muted'>October 2021</p>
            </div>
          </div>
        </div>

        <div className='col-md-6 mt-3 mt-md-0'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Advanced Arm Development</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                ITI Information Technology Intitute
              </h6>
              <p className='card-subtitle mb-2 text-muted'>July 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
