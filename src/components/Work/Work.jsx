import React, { useRef } from 'react';
import './Work.css';
import { WORK_EXPERIENCE } from '../../utils/data';
import WorkCard from './WorkCard/WorkCard';
import Slider from 'react-slick';


const Work = () => {
    const sliderRef = useRef();

    const settings ={
        dots:false,
        infinite:true,
        speed:500,
        slidesToShow:2,
        slidesToScroll:1,
        arrows:false,
        responsive:[
            {
                breakpoint:769,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ],
    };

    const slideRight = () =>{
        sliderRef.current.slickNext();
    };

    const slideLeft = () =>{
        sliderRef.current.slickPrev();
    };

  return (
    <section id='formations' className="experience-container">
        <h5>Formations</h5>

        <div className="experience-content">

            <div className="arrow-left" onClick={slideLeft}>
                  <i className="ri-arrow-left-s-line"></i>
            </div>

            <div className="arrow-right" onClick={slideRight}>
                 <i className="ri-arrow-right-s-line"></i>
            </div>

            


            <Slider ref={sliderRef} {...settings}>
                {WORK_EXPERIENCE.map((item) =>(
                    <WorkCard key={item.title} details={item}/>
                ))}
            </Slider>
        </div>
    </section>
  );
};

export default Work;