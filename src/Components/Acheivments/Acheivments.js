import React, { useEffect } from 'react'
import './Acheivment.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Acheivment() {
  useEffect(() => {
    AOS.init({ duration: 1500 })
  }, [])

  return (
    // make a grid for the experience work in the companies
    <div className='acheivment'>
      <div className='row' data-aos='fade-right'>
        <h2 className='acheivment-title'>Acheivments</h2>
        <div className='col-md-6 mt-3 mt-md-0 '>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>3RD Place - Alamein Robotics</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                Egyptian Telecommunication Institute
              </h6>
              <p className='card-subtitle mb-2 text-muted'>April 2022</p>
            </div>
          </div>
        </div>

        <div className='col-md-6 mt-3 mt-md-0'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>MateROV Participation</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                Mate Regional ROV
              </h6>
              <p className='card-subtitle mb-2 text-muted'>May 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Acheivment
