import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './AccountsLinks.css'

function AccountsLinks() {
  return (
    <div className='icons-container'>
      <ul className='icons'>
        <li>
          <a
            href='https://www.linkedin.com/in/mostafa-adel-5687b51b1/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='bi bi-linkedin text-secondary'></i>
          </a>
        </li>
        <li>
          <a
            href='https://www.github.com/mostafa4adel'
            target='_blank'
            rel='noreferrer'
          >
            <i className='bi bi-github text-secondary'></i>
          </a>
        </li>
        <li>
          <a
            href='mailto:mostafaadel2171@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <i className='bi bi-envelope text-secondary'></i>
          </a>
        </li>
      </ul>
    </div>
  )
}
export default AccountsLinks
