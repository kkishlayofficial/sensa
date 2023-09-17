import React from 'react'
import logo from '../../../images/logo.png'
import { AiOutlineMail } from "react-icons/ai"
import { BiPhoneCall } from "react-icons/bi"
import { ProductList } from '../../../data/data'
import './index.scss'
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
        <div className="title">Our Products</div>
          <div className="productList">
            {ProductList.map(item => {
              return (
                <div className='subtitle'>{ item }</div>
              )
            })}
        </div>
      </div>
      <div className="contact">
        <div className="title">Contact Us</div>
        <div className="subtitle">For any queries mail us at</div>
        <div className="subtitle"><a className='mail' href="mailto:nandiniinternational@gmail.com"><AiOutlineMail size={30} />nandiniinternational@gmail.com</a></div>
        <div className="subtitle">Call at</div>
        <div className="title"><a class="call" href="tel:9810565200" title="CLICK TO DIAL - Mobile Only"><BiPhoneCall size={30} />9810565200</a></div>
        <div className="title"><a class="call" href="tel:8826406306" title="CLICK TO DIAL - Mobile Only"><BiPhoneCall size={30} />8826406306</a></div>
      </div>
    </div>
  )
}

export default Footer