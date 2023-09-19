import React from 'react'
import { CategoryList } from '../../../data';
import ProductImg from '../../../images/AboutUsGroup.svg'

const Categories = () => {
  return (
    <div className='categories' id='categories'>
      <div className="title">Categories</div>
      <div className="categoryList">
        {CategoryList.map((item, idx) => {
          return(
            <div key={idx}>
              <div className="imgContainer">
                <img src={ProductImg} alt={item}/>
              </div>
              <div className="categoryName">
                {item}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Categories