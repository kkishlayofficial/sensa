import React, { useEffect, useState, useMemo } from "react";
import { ProductList } from "../../../data";
import "./index.scss";
import CategoryFilter from "../Filter";
import Card from "../../elements/Card";
import { CategoryList } from "../../../data";
import { useLocation } from "react-router-dom";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fade } from "react-reveal";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../../elements/ArrowButton";
import { Helmet } from "react-helmet";

const Products = () => {
  const location = useLocation();

  const queryParameters = useMemo(() => {
    const queryParams = new URLSearchParams(location.search);
    const params = {};
    for (const [key, value] of queryParams.entries()) {
      params[key] = value;
    }
    return params;
  }, [location.search]);

  const [filteredCategory, setFilteredCategory] = useState(
    queryParameters.category
  );
  const [modal, setModal] = useState(false);
  const [productDesc, setProductDesc] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setFilteredCategory(queryParameters.category);
  }, [queryParameters]);

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
    updateCategory(category);
  };

  const filteredItems =
    filteredCategory === "All"
      ? ProductList
      : ProductList.filter((item) => item.category === filteredCategory);

  const updateCategory = (newCategory) => {
    queryParameters.category = newCategory;
    const updatedUrl = `${location.pathname}?${new URLSearchParams(
      queryParameters
    ).toString()}`;
    window.history.replaceState({}, "", updatedUrl);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
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

  const toggle = () => setModal(!modal);
  const args = {
    backdrop: true,
    centered: true,
    fade: true,
    fullscreen: "md",
    size: "lg",
  };

  const [content, setContent] = useState("");

  useEffect(() => {
    CategoryList.map((item) => {
      if (item.name === filteredCategory) setContent(item.products);
    });
  }, [filteredCategory]);

  return (
    <div>
      <Helmet>
        <title>{`Sensa-${
          filteredCategory === "All" ? "All Products" : filteredCategory
        }`}</title>
        <meta name='description' content={content} />
        <meta name='keyword' content={content} />
        <link rel='canonical' href={window.location.href} />
      </Helmet>
      <div className='product-container'>
        <div className='filter-container'>
          <CategoryFilter
            categories={CategoryList}
            onFilterChange={handleFilterChange}
          />
        </div>
        <div>
          <div className='selectedCategory'>
            <h1
              title={
                filteredCategory === "All" ? "All Products" : filteredCategory
              }
            >
              {filteredCategory === "All" ? "All Products" : filteredCategory}
            </h1>
          </div>
          <div className='products'>
            {filteredItems.map((item) => {
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
                        type='grey'
                        className='categoryCard'
                      />
                    </div>
                  </Fade>
                )
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          <ModalHeader toggle={toggle}>
            {productDesc && productDesc.name}
          </ModalHeader>
          <ModalBody>
            <div className='modal-desc'>
              {productDesc && productDesc.image[0] && (
                <div className='productImg'>
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
                  <h4 className='categoryTitle' title='Category'>
                    Category :
                  </h4>{" "}
                  <p className='categorySubTitle'>{productDesc.category}</p>
                </div>
              )}
              {productDesc && productDesc.ingredients && (
                <div className='ingredient'>
                  <h4 className='ingredientsTitle' title='Ingredients'>
                    Ingredients :
                  </h4>{" "}
                  <p className='ingredientsSubTitle'>
                    {productDesc.ingredients}
                  </p>
                </div>
              )}
              {productDesc && productDesc.applications && (
                <div className='application'>
                  <h4 className='applicationTitle' title='Applications'>
                    Applications :
                  </h4>{" "}
                  <p className='applicationSubTitle'>
                    {productDesc.applications}
                  </p>
                </div>
              )}
              {productDesc && productDesc.quantity && (
                <div className='quantity'>
                  <h4 className='quantityTitle' title='Quantity'>
                    Quantity :
                  </h4>{" "}
                  <p className='quantitySubTitle'>{productDesc.quantity}</p>
                </div>
              )}
            </div>
            <div className='similarProducts'>
              <Slider {...settings}>
                {filteredItems
                  .filter((item) => item.category === productDesc.category)
                  .filter((item) => item !== productDesc)
                  .map((item) => {
                    return (
                      item.image && (
                        <div
                          onClick={() => {
                            setProductDesc(item);
                          }}
                        >
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
                      )
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

export default Products;
