import React from 'react';
import './Hero.css';

export const Hero = () => {
  return (
    <section id='about' className="hero-container">
        <div className="hero-content">
            <h2>Bienvenue sur mon portfolio !</h2>
            <div className="hero-descrip">
                <p>J'suis <span>Ibrahim DIARRASSOUBA,</span></p>
                <p>
                    Étudiant ingénieur en informatique à l'INP-HB passionné par le développement web et mobile, 
                    ainsi que le web design et le UI design. En tant que développeur freelance, 
                    j'offre des solutions sur mesure en utilisant des technologies comme JavaScript, Angular, ReactJs,Flutter, Laravel etc...
                </p>
                <p><br />
                    N'hésitez pas à explorer mes projets récents et à me contacter si vous souhaitez collaborer !
                </p>
            </div>
        </div>

        <div className="hero-img">
            <div>
                <div className='tech-icons'>
                    <div className="tech-icon">
                        <img src="./assets/images/img01.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/angular.png" alt="" />
                    </div>
                </div>
                <img src="./assets/images/img11.png" alt="" className='img-hero' />
            </div>

            <div>
                <div className="tech-icon">
                    <img src="./assets/images/img02.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/img03.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/img04.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/laravel.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/django.png" alt="" />
                </div>
            </div>
        </div>
       
    </section>
  )
}
