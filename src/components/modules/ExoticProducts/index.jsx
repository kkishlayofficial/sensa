import React, { useState } from "react";
import { Container } from "reactstrap";
import "./index.scss";
import Slider from "react-slick";
import { ProductList } from "../../../data";
import Card from "../../elements/Card";
import { SampleNextArrow, SamplePrevArrow } from "../../elements/ArrowButton";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { Fade } from "react-reveal";

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

  const settingsModal = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [modal, setModal] = useState(false);
  const [productDesc, setProductDesc] = useState("");
  const toggle = () => setModal(!modal);
  const args = {
    backdrop: true,
    centered: true,
    fade: true,
    fullscreen: "md",
    size: "lg",
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

                    item?.image && (
                      <Fade bottom>
                        <div
                          className='cards-container'
                          onClick={() => {
                            toggle();
                            setProductDesc(item);
                          }}
                        >
                          <Card
                            img={item.image}
                            title={item.name}
                            subTitle={item.category}
                            height={"200px"}
                            width={100}
                            type='white'
                            className='categoryCard'
                          />
                        </div>
                      </Fade>
                    )
                  );
                })}
            </Slider>
          </div>
        </div>
      </Container>
      <div>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>
            {productDesc && productDesc.name}
          </ModalHeader>
          <ModalBody>
            <div className='modal-desc'>
              {productDesc && productDesc.image[0] && (
                <div className="productImg">
                  <img
                    src={productDesc && productDesc.image[0]}
                    height={"200px"}
                    width={100}
                    alt={productDesc.name}
                  />
                </div>
              )}
              {productDesc && productDesc.desc && (
                <>
                  <p className='product-desc'>
                    {productDesc && productDesc.desc}
                  </p>
                </>
              )}
            </div>
            <div className='modal-spec'>
              {productDesc && productDesc.category && (
                <div className='category'>
                  <h4 className='categoryTitle'>Category :</h4>{" "}
                  <p className='categorySubTitle'>{productDesc.category}</p>
                </div>
              )}
              {productDesc && productDesc.ingredients && (
                <div className='ingredient'>
                  <h4 className='ingredientsTitle'>Ingredients :</h4>{" "}
                  <p className='ingredientsSubTitle'>
                    {productDesc.ingredients}
                  </p>
                </div>
              )}
              {productDesc && productDesc.applications && (
                <div className='application'>
                  <h4 className='applicationTitle'>Applications :</h4>{" "}
                  <p className='applicationSubTitle'>
                    {productDesc.applications}
                  </p>
                </div>
              )}
              {productDesc && productDesc.quantity && (
                <div className='quantity'>
                  <h4 className='quantityTitle'>Quantity :</h4>{" "}
                  <p className='quantitySubTitle'>{productDesc.quantity}</p>
                </div>
              )}
            </div>
            <div className='similarProducts'>
              <Slider {...settingsModal}>
                {ProductList.filter((item) => item.exotic)
                  .filter((item) => item !== productDesc)
                  .map((item) => {
                    return (
                      item.image && <div onClick={() => {setProductDesc(item);}}>
                        <Card
                        img={item.image}
                        title={item.name}
                        subTitle={item.category}
                        height={"120px"}
                        width={"70px"}
                        type='grey'
                        className='similarProduct'
                      />
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default ExoticProducts;
