import React from 'react'
import './NavBar.css'

function NavBar() {
  const scrollTo = (id) => {
    // console.log('scrolling to about');
    // console.log(document.getElementsByClassName('about'));
    document
      .getElementsByClassName(id)[0]
      .scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='container'>
      <nav className='navbar  navbar-expand-lg navbar-dark bg-transparent'>
        <a className='navbar-brand' href='#'>
          Mostafa.
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item active' onClick={() => scrollTo('about')}>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item' onClick={() => scrollTo('experience')}>
              <a className='nav-link' href='#experience'>
                Training
              </a>
            </li>
            <li className='nav-item' onClick={() => scrollTo('acheivment')}>
              <a className='nav-link' href='#acheivment'>
                Acheivments
              </a>
            </li>
            <li className='nav-item' onClick={() => scrollTo('skills')}>
              <a className='nav-link' href='#skills'>
                Skills
              </a>
            </li>
            <li className='nav-item' onClick={() => scrollTo('projects')}>
              <a className='nav-link' href='#projects'>
                Projects
              </a>
            </li>
            <li className='nav-item' onClick={() => scrollTo('contact')}>
              <a className='nav-link' href='#contact'>
                Contact
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='https://drive.google.com/file/d/1aAChfI0yrP8PLnSYcpwIamX6J3shmCKH/view?usp=sharing'
                target='_blank'
                rel='noreferrer'
              >
                <button className='bg-transparent'>Resume</button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
