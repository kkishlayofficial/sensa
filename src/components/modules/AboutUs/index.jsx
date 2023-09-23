import React from "react";
import { Container } from "reactstrap";
import AboutUsGroup from "../../../images/AboutUsGroup.svg";
import Fade from "react-reveal/Fade";
import "./index.scss";
const AboutUs = () => {
  return (
    <div className='aboutUs' id='about'>
      <Container>
        <div className='aboutUsSection'>
          <div className='title'>About Us</div>
          <div className='subtitle'>
            <Fade bottom>
              <p>
                Sensa, founded in 2004, is committed to nurturing India's
                burgeoning food service industry. Recognizing the industry's
                rapid growth, we embarked on a mission to provide innovative
                food solutions. We prioritize the Hospitality, Restaurant, and
                Catering (HORECA) sector's prosperity by offering tailored,
                top-quality solutions that address specific needs.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                Our diverse product portfolio addresses key industry challenges,
                simplifying the lives of end consumers.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                We're committed to tailored solutions, driving your business
                goals and fueling India's food solutions industry. With a
                passion for taste, quality, and innovation, we keep you
                competitive.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                Here are some of the company&#39;s notable achievements as of
                2023:
              </p>
            </Fade>
            <Fade bottom>
              <ul>
                <li className="achievements">40+ SKU&#39;s being offered</li>
                <li className="achievements">100+ channel partner associations</li>
                <li className="achievements">Serving over 1400+ HORECA partners</li>
                <li className="achievements">Presence in 5+ states</li>
              </ul>
            </Fade>
            <Fade bottom>
              <p>
                Join us in reshaping the food service industry and creating a
                brighter future.
              </p>
            </Fade>
          </div>
        </div>
        <Fade bottom>
          <div className='imgGroup'>
            <img src={AboutUsGroup} />
          </div>
        </Fade>
      </Container>
    </div>
  );
};

export default AboutUs;
