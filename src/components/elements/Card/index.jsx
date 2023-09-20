import React from 'react'
import './index.scss'
const Card = (props) => {
  const { img, title, height, width,subTitle, className, type } = props;
  return (
    <div className={`card ${className ? className : ""} ${type ? type : ""}`}>
      {img?.map((item, index) => {
        return (
          <img
            key={index}
            src={item}
            alt={title}
            height={height}
            width={width}
            // className="card-image"
          />
        );
      })}
      <div className="titleContainer">
        <p>{title}</p>
      </div>
      {subTitle && (
        <div className="subTitleContainer">
          <p>{subTitle}</p>
        </div>
      )}
    </div>
  );
}

export default Card