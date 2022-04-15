import React from 'react'
import './about.css'
import ME from '../../assets/photo.jpg'
import {FiAward} from 'react-icons/fi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
     <h5>Get To Know</h5>
     <h2>About me</h2>

     <div className="container about__container">
    <div className="about__me">
    <img src={ME} alt="About Image"/>
    </div>
    <div className="about__content">
      <div className="about__cards">
        <article className="about__card">
          <FiAward className='about__icon'/>
        <h5>Experience</h5>
        <small>3+ Years Working</small>
        </article>
        <article className="about__card">
          <FiUsers className='about__icon'/>
        <h5>Clients</h5>
        <small>200+ Worldwide</small>
        </article>
        <article className="about__card">
          <VscFolderLibrary className='about__icon'/>
        <h5>Experience</h5>
        <small>80+ Completed Projects</small>
        </article>
     
      </div>

      <p>FRONT END developer with 3 years experience, I follow the news and study everything related to
the web.
Experience in building application architecture from scratch.
Knowledge in programming: data structures, algorithms, server-client interactions.
</p>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
     </div>
    </section>
  )
}

export default About