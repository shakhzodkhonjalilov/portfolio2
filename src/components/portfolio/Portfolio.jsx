import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Untitled.jpg'
import IMG2 from '../../assets/Untitled2.jpg'
import IMG3 from '../../assets/Untitled3.jpg'
import IMG4 from '../../assets/Untitled4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
        My Recent Work
      </h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt=''/>
          </div>
            <h3>Project 1</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/shakhzodkhonjalilov" className='btn' target='_blank'>GitHub</a>
            <a href="https://gracegarden.uz/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG2} alt=''/>
          </div>
            <h3>Project 2</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/shakhzodkhonjalilov" className='btn' target='_blank'>GitHub</a>
            <a href="https://mces.uz/ru/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG3} alt=''/>
          </div>
            <h3>Project 3</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/shakhzodkhonjalilov" className='btn' target='_blank'>GitHub</a>
            <a href="http://greenwillfund.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG4} alt=''/>
          </div>
            <h3>Project 4</h3>
          <div className="portfolio__item-cta">
          <a href="https://diymrktg.com/" className='btn' target='_blank'>GitHub</a>
            <a href="https://github.com/shakhzodkhonjalilov" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        
        </article>
       
       
      </div>
    </section>
  )
}

export default Portfolio