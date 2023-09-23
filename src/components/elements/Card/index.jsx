import React from 'react'
import './index.scss'
const Card = (props) => {
  const { img, title, height, width,subTitle, className, type } = props;
  return (
    <div className={`cards ${className ? className : ""} ${type ? type : ""}`}>
      <div className="imgContainer">
        {img?.map((item, index) => {
          return (
            <img
              key={index}
              src={item}
              alt={title}
              height={height}
              width={width}
            />
          );
        })}
      </div>
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