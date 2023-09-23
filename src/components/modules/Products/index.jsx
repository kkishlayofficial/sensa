import React, { useEffect, useState, useMemo } from 'react';
import { ProductList } from '../../../data'
import './index.scss'
import CategoryFilter from '../Filter';
import Card from '../../elements/Card';
import { CategoryList } from '../../../data';
import { useLocation } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  const [filteredCategory, setFilteredCategory] = useState(queryParameters.category);
  const [modal, setModal] = useState(false);
  const [productDesc, setProductDesc] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setFilteredCategory(queryParameters.category);
  }, [queryParameters]);

  const handleFilterChange = (category) => {
    setFilteredCategory(category);
    updateCategory(category);
  };

  const filteredItems = filteredCategory === 'All'
    ? ProductList
    : ProductList.filter((item) => item.category === filteredCategory);

  const updateCategory = (newCategory) => {
    queryParameters.category = newCategory;
    const updatedUrl = `${location.pathname}?${new URLSearchParams(queryParameters).toString()}`;
    window.history.replaceState({}, '', updatedUrl);
  };

  const toggle = () => setModal(!modal);
  const args = {
    backdrop: true,
    centered: true,
    fade: true,
    fullscreen:'md',
    size: 'lg'
  }

  return (
    <div>
    <div className='product-container'>
      <div className="filter-container">
        <CategoryFilter categories={CategoryList} onFilterChange={handleFilterChange} />
      </div>
     <div>
     <div>
        <h1>{filteredCategory === 'All' ? 'All Products': filteredCategory}</h1>
      </div>
      <div className="products">
        {filteredItems.map((item) => {
          return (
            item?.image && <div className='cards-container' key={item.id} onClick={()=>{toggle(); setProductDesc(item)}}>
              <Card img={item.image} title={item.name} subTitle ={item.category} height={'200px'} width={100} type='grey' className='categoryCard' />
            </div>
          )
        })}
      </div>
     </div>
    </div>
    <div>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>{productDesc && productDesc.name}</ModalHeader>
        <ModalBody>
          <div className = 'modal-desc'>
          {productDesc && productDesc.image[0] && <><img src={productDesc && productDesc.image[0]} height={'200px'} width={100}/></>}
          {productDesc && productDesc.desc && <><p className = 'product-desc'>{productDesc && productDesc.desc}</p></>}
          </div>
          <div className = 'modal-spec'>
          {productDesc && productDesc.category && <><h4>Category :</h4> <p>{productDesc.category}</p></>}
          {productDesc && productDesc.ingredients && <><h4>Ingredients :</h4> <p>{productDesc.ingredients}</p></>}
          {productDesc && productDesc.applications && <><h4>Applications :</h4> <p>{productDesc.applications}</p></>}
          {productDesc && productDesc.quantity && <><h4>Quantity :</h4> <p>{productDesc.quantity}</p></>}
          </div>
        </ModalBody>
      </Modal>
    </div>
    </div>
  )
}

export default Products;