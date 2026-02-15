import React from 'react';

const ServiceCard = ({ title, icon, isImage, svgIcon, description, color }) => {
  return (
    <div 
      className="service-card" 
      role="button" 
      tabIndex={0}
      aria-label={`View ${title} services`}
    >
      <div className={`card-icon${isImage ? ' card-icon-has-img' : ''}`} style={!isImage ? { backgroundColor: `${color}15` } : {}}>
        {isImage && icon ? (
          <img 
            src={icon} 
            alt={title} 
            className="card-icon-img"
          />
        ) : svgIcon ? (
          svgIcon
        ) : (
          <span style={{ color }}>{icon}</span>
        )}
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
    </div>
  );
};

export default ServiceCard;
