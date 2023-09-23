import React from "react";
import { CategoryList } from "../../../data";
import Card from "../../elements/Card";
import "./index.scss";
import { Fade } from "react-reveal";
import { HashLink as Link } from "react-router-hash-link"; // Import HashLink

const Categories = () => {
  return (
    <div className='categories' id='categories'>
      <div className='title'>Categories</div>
      <div className='categoryList'>
        {CategoryList.map((item, idx) => {
          return (
            <Fade bottom>
              <div key={idx}>
                <Link to={`/products?category=${item.name}`}>
                  <Card
                    img={item.image}
                    title={item.name}
                    height={"200px"}
                    width={"100%"}
                    type='grey'
                    className={`categoryCard ${item.name}`}
                  />
                </Link>
              </div>
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
