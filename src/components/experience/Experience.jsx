import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
        <h5>Frontend Developmnet</h5>
        <div className="experience__content">
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>Wordpress</h4>
            <small className='text-light'>Intermediate</small>
           </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
         <div>
         <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
         </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>React</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
         <div>   <h4>SCSS</h4>
            <small className='text-light'>Experienced</small></div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div> <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small></div>
          </article>
        </div>
        </div>

        <div className="experience__backend">
        <div className="experience__content">
        <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>Node JS</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>MongoDb</h4>
            <small className='text-light'>Intermediate</small>
           </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>Firebase</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>SQL</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>ExpressJS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience