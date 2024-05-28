import React from 'react';
import './UserProfileCard.css';

export const UserProfileCard = ({ name, description1, description2, email, imageSrc }) => {
  return (
    <div className='upc'>
        <div className="gradient"></div>
        <div className="profile-down">
            <img src={imageSrc} alt={`${name} profile`} />
            <div className="profile-down-text">{name}</div>
            <div className="profile-description">
                {description1}
            </div>
            <div className="profile-description">
                {description2}
            </div>
        </div>
        <div className="profile-button">
            <a href={`mailto:${email}`}>Contact Me</a>
        </div>
    </div>
  );
}

export default UserProfileCard;
