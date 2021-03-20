import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import WebIcon from '@material-ui/icons/Web';
import AndroidIcon from '@material-ui/icons/Android';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
// import { colors } from '@material-ui/core';

let iconStyles = {
  fontSize: '75px',
  
};

const Service = () => {
  return (
    <div className='servicestyle' id='section3'>


      <div className="container Service">
        <div className="service-heading">
          <h1>Service</h1>
        </div>
        <div className="my-skills">
          <div className="skill" data-aos="fade-in" data-aos-delay="200">
            <div className="icon-container">
              <WebIcon style={iconStyles} />
            </div>
            <h3>Software Engineer</h3>
            <p>
              Am a full stack developer, I have experience working with Jaascript,python, C# Asp.net Core
              programming language, works with newest jaascript front-end frameworks like React and Nextjs with 
              the most reliable back-end like Node js,firebase 
              and both relational database MySql and non-relational database Mongodb
            </p>
          </div>
          <div className="skill" data-aos="fade-in" data-aos-delay="100">
            <div className="icon-container">
            <AndroidIcon style={iconStyles} /> 
            </div>
            <h3>Android Developer & ios Developer</h3>
            <p>
              Experience using flutter for Android and ios application development
            </p>
          </div>
          <div className="skill" data-aos="fade-in" data-aos-delay="100">
            <div className="icon-container">
           <PhoneIphoneIcon style={iconStyles} />
            </div>
            <h3>Digital Marketer</h3>
            <p>
              Am a digital marketer,brand, and  new business strategist across music,social media and entertainment industries am skilled in evaluating needs and implementing policies that have positive influence on the organisation marketing strategies
              <p>Additional Skills</p>
              <li>Digital Data analytics/marketing: Facebook insight, instagram insight
                Google analytics,Mailchimp,get revue.
              </li>
              <li>Adobe Illustrator, inkscape, Adobe PhotoShop</li>
              <li>Microsoft office packages</li>
            </p>
          </div>
        </div>
      </div>

    </div>


  )
}
export default Service;