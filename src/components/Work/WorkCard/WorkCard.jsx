import React from 'react';
import './WorkCard.css';

const WorkCard = ({details}) => {
  return (
    <div className="work-experience-card">
        <h6>{details.responsabilities}</h6>

        <div className="work-duration">{details.date}</div>

        <div className="school">
          {details.title}
        </div>
    </div>
  ); 
};

export default WorkCard;