import React, { useRef} from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Project.css';
import { PROJ } from '../../utils/data';

const Project = () => {
    const swiperRef = useRef();

    const swiperRight = () => {
          swiperRef.current.swiper.slideNext();
        
      };
    
      const swiperLeft = () => {
          swiperRef.current.swiper.slidePrev();
      };
    
  return (
    <section id="portfolio" className="blogs project-container">
        <h5>Mes Projets</h5>
        <div className="lesbtn">
            <div className="arrows-left" onClick={swiperLeft}>
                <i className="ri-arrow-left-s-line"></i>
            </div>
            <div className="arrows-right" onClick={swiperRight}>
                 <i className="ri-arrow-right-s-line"></i>
            </div>
        </div>
        <div className="">
            <Swiper
                ref={swiperRef}
                loop={true}
                spaceBetween={16}
                grabCursor={true}
                slidesPerView={'auto'}
                centeredSlides={true}
                breakpoints={{
                900: {
                    slidesPerView: 3,
                    centeredSlides: false,
                },
                550: {
                    slidesPerView: 2,
                    centeredSlides: false,
                },
                }}
                modules={[Navigation]}
                className="box-container"
                > 
                {PROJ.map((item) =>(
                    <SwiperSlide key={item.titre} className="box">
                        <div className='boxs'>
                            <div class="image">   
                                <img src={item.imge} alt=""/>
                            </div>
                            <div class="content">
                                <div class="tags">
                                    {item.techno.map((item) =>
                                        <span key={item}><i class="fas fa-tag"></i> {item}</span>
                                    )}
                                </div>

                                <h3>{item.titre}</h3>
                                <p>{item.description}</p>
                                <button className="contact-btn" onClick={() => {}}>
                                    Voir plus
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>    
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default Project