import React from 'react'
import { CategoryList } from '../../../data';
import ProductImg from '../../../images/AboutUsGroup.svg'
import Card from '../../elements/Card';
import './index.scss';
import { Fade } from 'react-reveal';

const Categories = () => {
  return (
    <div className='categories' id='categories'>
      <div className="title">Categories</div>
      <div className="categoryList">
        {CategoryList.map((item, idx) => {
          return(
            <Fade bottom>
              <div key={idx}>
              <Card img={[ProductImg]} title={item} height={'200px'} width={'100%'} type='grey' className='categoryCard'/>
            </div>
            </Fade>
          )
        })}
      </div>
    </div>
  )
}

export default Categories