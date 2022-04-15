import React from 'react'
import './testimonials.css'
import Avatar from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"    modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      <SwiperSlide className="testimonial" >
          <div className="client__avatar">
            <img src={Avatar} alt="avatar1" />

            
          </div>

          <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est quos id rem vel ad, voluptas vitae quidem! Sint laborum quis similique eligendi blanditiis aliquam odit non voluptates quo? Ullam.</small>
        </SwiperSlide>
      
        <SwiperSlide className="testimonial" >
          <div className="client__avatar">
            <img src={Avatar} alt="avatar1" />

            
          </div>

          <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est quos id rem vel ad, voluptas vitae quidem! Sint laborum quis similique eligendi blanditiis aliquam odit non voluptates quo? Ullam.</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial" >
          <div className="client__avatar">
            <img src={Avatar} alt="avatar1" />

            
          </div>

          <h5 className='client__name'>Ernest Achiever</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est quos id rem vel ad, voluptas vitae quidem! Sint laborum quis similique eligendi blanditiis aliquam odit non voluptates quo? Ullam.</small>
        </SwiperSlide>
      
      </Swiper>
    </section>
  )
}

export default Testimonials