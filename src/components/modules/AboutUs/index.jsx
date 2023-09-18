import React from 'react'
import { Container } from 'reactstrap'
import AboutUsGroup from '../../../images/AboutUsGroup.svg'
import './index.scss';
const AboutUs = () => {
  return (
    <div className="aboutUs" id='about'>
      <Container>
        <div className="aboutUsSection">
          <div className="title">About Us</div>
          <div className="subtitle">
            <p>
            Sensa, founded in 2004, is committed to nurturing India's burgeoning food service industry. Recognizing the industry's rapid growth, we embarked on a mission to provide innovative food solutions. We prioritize the Hospitality, Restaurant, and Catering (HORECA) sector's prosperity by offering tailored, top-quality solutions that address specific needs.
            </p>
            <p>
            Our diverse product portfolio addresses key industry challenges, simplifying the lives of end consumers.
            </p>
            <p>
            We're committed to tailored solutions, driving your business goals and fueling India's food solutions industry. With a passion for taste, quality, and innovation, we keep you competitive.
            </p>
            <p>
            Here are some of the company&#39;s notable achievements as of 2023:
          </p>
            <ul>
            <li>40+ SKU&#39;s being offered</li>
            <li>100+ channel partner associations</li>
            <li>Serving over 1400+ HORECA partners</li>
            </ul>
            <p>
            Join us in reshaping the food service industry and creating a brighter future.
            </p>
          </div>
        </div>
        <div className="imgGroup">
          <img src={AboutUsGroup} />
        </div>
      </Container>
    </div>
  )
}

export default AboutUs;