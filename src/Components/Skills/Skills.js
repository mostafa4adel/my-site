import React, { useEffect } from 'react'
import './Skills.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])
  return (
    <div className='skills'>
      <div className='row' data-aos='fade-left'>
        <h2 className='skills-title'>Skills</h2>
        {/* <div className="row" data-aos="fade-left"> */}
        <div className='col-md-6 mt-3 mt-md-0'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Programming Languages</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                C, C++, Java, Python, JavaScript, PHP
              </h6>
            </div>
          </div>
        </div>

        <div className='col-md-6 mt-3 mt-md-0'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Frontend</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                HTML, CSS, JavaScript, React.js, Bootstrap
              </h6>
            </div>
          </div>
        </div>
        <div className='col-md-6 mt-3 mt-md-0'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Backend</h5>

              <h6 className='card-subtitle mb-2 text-muted'>
                Node.js, Express.js, MySQL, PostgreSQL, PHP
              </h6>
            </div>
          </div>
        </div>

        <div className='col-md-6 mt-3 mt-md-0'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Embedded Development</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                Embedded C, AutoSar, ARM development, ROS
              </h6>
            </div>
          </div>
        </div>

        <div className='col-md-6 mt-3 mt-md-0'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Machine Learning</h5>

              <h6 className='card-subtitle mb-2 text-muted'>
                Python, Tensorflow, Keras, OpenCV
              </h6>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Skills
