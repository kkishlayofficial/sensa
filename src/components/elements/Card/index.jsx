import React from 'react'
import './index.scss'
const Card = (props) => {
  const { img, title, height, width,subTitle, className, type } = props;
  return (
    <div className={`card ${className ? className : ''} ${type ? type : ''}`}>
      {img && <div className="imgContainer">
        <img src={img} height={height} width={width} alt={title} />
      </div>}
      <div className="titleContainer">
        <p>{ title }</p>
      </div>
      {subTitle && 
        <div className="subTitleContainer">
          <p>{ subTitle }</p>
        </div>
      }
    </div>
  )
}

export default Card