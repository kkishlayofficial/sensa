import React from "react";
import { Container } from "reactstrap";
import "./index.scss";
import Slider from "react-slick";
import { ProductList } from "../../../data";
import Card from "../../elements/Card";
import { SampleNextArrow, SamplePrevArrow } from "../../elements/ArrowButton";

const ExoticProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='exotic-products' id='exotic-products'>
      <Container>
        <div className='exotic-products-section'>
          <div className='title'>Exotic Products</div>
          <div className='products-list'>
            <Slider {...settings}>
              {ProductList.filter((item) => item.exotic)
                .filter((item) => item.image)
                .map((item) => {
                  return (
                    <Card
                      img={item.image}
                      title={item.name}
                      subTitle={item.category}
                      height={"200px"}
                      width={100}
                      type='white'
                      className='categoryCard'
                    />
                  );
                })}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExoticProducts;
