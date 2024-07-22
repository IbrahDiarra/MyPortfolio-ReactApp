import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './project.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const project = () => {
    
  return (
    <section className="blogs project-container">
        <h5>Projets</h5>
        <div className="box-container">
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={'auto'}
        slidesPerView={'auto'}
        spaceBetween={-24}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div class="box">
                <div className='boxs'>
                    <div class="image">
                        <h3><i class="fas fa-calendar"></i> 21st may, 2021</h3>
                        <img src="./assets/images/blog-1.jpeg" alt=""/>
                    </div>
                    <div class="content">
                        <div class="tags">
                            <span><i class="fas fa-tag"></i> food</span>
                            <span><i class="fas fa-tag"></i> burgger</span>
                            <span><i class="fas fa-tag"></i> pizza</span>
                        </div>

                        <h3>blog title goes here ..</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, quam voluptatibus! Numquam architecto necessitatibus</p>
                        <button className="contact-btn" onClick={() => {}}>
                            Voir plus
                        </button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="box">
                <div className='boxs'>
                    <div class="image">
                        <h3><i class="fas fa-calendar"></i> 21st may, 2021</h3>
                        <img src="./assets/images/blog-2.jpeg" alt=""/>
                    </div>
                    <div class="content">
                        <div class="tags">
                            <span><i class="fas fa-tag"></i> food</span>
                            <span><i class="fas fa-tag"></i> burgger</span>
                            <span><i class="fas fa-tag"></i> pizza</span>
                        </div>

                        <h3>blog title goes here ..</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, quam voluptatibus! Numquam architecto necessitatibus</p>
                        <button className="contact-btn" onClick={() => {}}>
                            Voir plus
                        </button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="box">
                <div className='boxs'>
                    <div class="image">
                        <h3><i class="fas fa-calendar"></i> 21st may, 2021</h3>
                        <img src="./assets/images/blog-3.jpeg" alt=""/>
                    </div>
                    <div class="content">
                        <div class="tags">
                            <span><i class="fas fa-tag"></i> food</span>
                            <span><i class="fas fa-tag"></i> burgger</span>
                            <span><i class="fas fa-tag"></i> pizza</span>
                        </div>

                        <h3>blog title goes here ..</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, quam voluptatibus! Numquam architecto necessitatibus</p>
                        <button className="contact-btn" onClick={() => {}}>
                            Voir plus
                        </button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="box">
                <div className='boxs'>
                    <div class="image">
                        <h3><i class="fas fa-calendar"></i> 21st may, 2021</h3>
                        <img src="./assets/images/blog-1.jpeg" alt=""/>
                    </div>
                    <div class="content">
                        <div class="tags">
                            <span><i class="fas fa-tag"></i> food</span>
                            <span><i class="fas fa-tag"></i> burgger</span>
                            <span><i class="fas fa-tag"></i> pizza</span>
                        </div>

                        <h3>blog title goes here ..</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, quam voluptatibus! Numquam architecto necessitatibus</p>
                        <button className="contact-btn" onClick={() => {}}>
                            Voir plus
                        </button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
           
           
        </div>

    </section>
  )
}

export default project