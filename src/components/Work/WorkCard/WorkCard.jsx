import React from 'react';
import './WorkCard.css';

const WorkCard = ({details}) => {
  return (
    <div className="work-experience-card">
        <h6>{details.title}</h6>

        <div className="work-duration">{details.date}</div>

        <ul>
            <li>{details.responsabilities}</li>
        </ul>
    </div>
  ); 
};

export default WorkCard;