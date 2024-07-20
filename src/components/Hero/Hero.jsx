import React from 'react';
import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Ibrahim DIARRASSOUBA</h2>
            <p>
            Élève Ingénieur en 
            3ème année
            Science et Technologie de
            l’Information et de la
            Communication (STIC) à l’INPHB,
            passionné par les nouvelles
            technologies. Rigoureux, organisé
            et doté d'un esprit d’équipe, je
            suis à la recherche d'un stage
            enrichissant pour approfondir mes
            compétences et contribuer à la
            réussite de votre entreprise.
            </p>
        </div>

        <div className="hero-img">
            <div>
                <div className='tech-icons'>
                    <div className="tech-icon">
                        <img src="./assets/images/img01.png" alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/img01.png" alt="" />
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
                    <img src="./assets/images/img04.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img src="./assets/images/img04.png" alt="" />
                </div>
            </div>
        </div>
       
    </section>
  )
}
