import React from 'react'
import logo from '../../../images/logo.png'
import { AiOutlineMail } from "react-icons/ai"
import { BiPhoneCall } from "react-icons/bi"
import { CategoryList } from '../../../data'
import './index.scss'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="info">
        <a href='/' className='logo'>
          <img src={logo} alt='logo' />
        </a>
        <div className="companyInfo subtitle">
          <p>Manufactured by :</p>
          <p>NANDINI INTERNATIONAL</p>
          <p>An ISO 9001:2015 Certified Co.</p>
          <p>467, Food Park, Rai Indl. Estate,</p>
          <p>Sec. 38, Distt. Sonipat, Haryana-131029</p>
        </div>
      </div>
      <div className='products'>
        <Link to={`/products?category=All`}>
          <div className="title">Our Products</div>
        </Link>   
        <div className="productList">
          {CategoryList.map(item => {
            return (
              <Link to={`/products?category=${item.name}`}>
                <div className='subtitle'>{ item.name }</div>
              </Link>
            )
          })}
      </div>
      </div>
      <div className="contact">
        <div className="title">Contact Us</div>
        <div className="subtitle">For any queries mail us at</div>
        <div className="subtitle"><a className='mail' href="mailto:nandiniinternational@gmail.com"><AiOutlineMail size={30} />nandiniinternational@gmail.com</a></div>
        <div className="subtitle">Call at</div>
        <div className="title"><a className="call" href="tel:9810565200" title="CLICK TO DIAL - Mobile Only"><BiPhoneCall size={30} className='buzz-out-on-hover wave'/>9810565200</a></div>
        <div className="title"><a className="call" href="tel:8826406306" title="CLICK TO DIAL - Mobile Only"><BiPhoneCall size={30} className='buzz-out-on-hover wave'/>8826406306</a></div>
      </div>
    </div>
  )
}

export default Footer