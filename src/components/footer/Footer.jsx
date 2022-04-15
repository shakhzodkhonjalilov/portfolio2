import React from 'react'
import './footer.css'
import {BsInstagram, BsTelegram, BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer id='footer'>
      
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonial'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://instagram.com"><BsInstagram/></a>
      <a href="https://telegram.org"><BsTelegram/></a>
      <a href="https://twitter.com"><BsTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Shakhzodkhon Jalilov. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer