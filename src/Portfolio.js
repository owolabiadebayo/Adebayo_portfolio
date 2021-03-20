import React from 'react'
import webDevelop from './Images/web.png'
import Android from './Images/android.png'
import IOS from './Images/ios.png'

import {DiJavascript,DiMongodb} from 'react-icons/di'
import {FaPython,FaReact,FaNodeJs} from 'react-icons/fa'
import {SiFirebase} from 'react-icons/si'
import twi from './Images/twit.png'
import net from './Images/Netflix.png'
import tra from './Images/tra.png'

const Portfolio = () => {
  return (
    <>
    <section className='portfoliostyle' id='section4'>
      <div className="portfolio-heading">
        <h1>Portfolio</h1>
        <div
          className="portfolio-item"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <div className="portfolio-img has-margin-right">
            <img src={webDevelop} height='250px' alt="" />
          </div>
          <div className="portfolio-description">
            <h6>Software Engineer/instructor</h6>
            <h2>GMTSoftware solutions, Abuja</h2>
            <p>
              Worked as the dev team lead work with both front-end and back-end development team
              <p>Tech Stack used</p> 
              <div className="tech"><DiJavascript size={25} style={{color:'yellow'}}/> <FaNodeJs size={25}/> <DiMongodb style={{color:'green'}} size={25}/><FaReact size={50} style={{color:'blue', background:'white' }} /><SiFirebase size={50} style={{color:'blue', background:'white' }} />  <span>Email.js</span> </div>
            </p>
          <ul>
            <li> <a href="https:gmtsoftware.tech">Click here to go to website</a></li>
            <li> <em>github.com/owolabiadebayo/GMTsoftware-React-Web-App/</em> </li>
          </ul>
          </div>
        </div>
        <div
          className="portfolio-item"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div className="portfolio-description has-margin-right" style={{marginLeft: 20}}>
            <h6>Freelance Software Development</h6>
            <h2>Glade.ng</h2>
            <p>
              Fullstack Web for annual webinar for managing school portals in modern world
            </p>
          <ul>
            <li> <a href='https://elegant-goldberg-6d7943.netlify.app'>Click here to go to website</a></li>
            <li> <em>github.com/owolabiadebayo</em> </li>
          </ul>
          </div>
          <div className="portfolio-img">
            <img src={Android} height='250' alt="" />
          </div>
        </div>
       
        <div
          className="portfolio-item"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="portfolio-img has-margin-right">
            <img src={IOS} height='250' alt="" />
          </div>
          <div className="portfolio-description">
            <h6>Freelance Web development</h6>
            <h2>E-commerce for FoodtribeUk</h2>
            <p>
              E-commerce with stripe payment system for a UK client 
            </p>
             <p>Tech Stack used</p> 
              <div className="tech"><DiJavascript size={25} style={{color:'yellow'}}/> <FaNodeJs size={25}/> <DiMongodb style={{color:'green'}} size={25}/><FaReact size={50} style={{color:'blue',background:'white' }} /> <span>Email.js</span> </div>
             <ul>
            <li> <a href='foodtribe'>Click here to go to website</a></li>
          </ul>
          </div>
        </div>
         <div
          className="portfolio-item"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div className="portfolio-description has-margin-right" style={{marginLeft: 20}}>
            <h6>Software Engineering Internship</h6>
            <h2>JPMORGAN & CHASE</h2>
            <p>
              <p>Task 1: interfacing with stock price feed</p>
              <p>Task 2: Use JpMorgan Chase framework and tools to query data</p>
              <p>**Note**: Api from jpmorgan has been blocked for security purpose if you want to access the site</p>
              <p>Tech Stack used</p> 
              <div className="tech"><DiJavascript size={25} style={{color:'yellow'}}/> <FaNodeJs size={25}/> <FaReact size={50} style={{color:'blue', background:'white' }} /><FaPython size={50} style={{color:'blue', background:'yellow' }}  /> </div>
            
            </p>
          <ul>
            <li> <a href='https://serene-einstein-bab799.netlify.app'>Click here to go to website</a></li>
            <li> <em>github.com/owolabiadebayoJP-MORGAN-SOFTWARE-ENGINEERING-VIRTUAL-INTERNSHIP/</em> </li>
          </ul>
          </div>
          <div className="portfolio-img">
            <img src={tra} height='250px' alt="" />
          </div>
        </div>
        <div
          className="portfolio-item"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <div className="portfolio-img has-margin-right">
            <img src={net} height='250' alt="" />
          </div>
          <div className="portfolio-description">
            <h6>Freelance Web development</h6>
            <h2>NetFlix Clone</h2>
            <p>
              Clone Netflix using Reactjs 
            </p>
             <p>Tech Stack used</p> 
              <div className="tech"><DiJavascript size={25} style={{color:'yellow'}}/> <FaNodeJs size={25}/> <DiMongodb style={{color:'green'}} size={25}/><FaReact size={50} style={{color:'blue',background:'white' }} />  </div>
             <ul>
            <li> <a href='https://keen-mcclintock-277386.netlify.app'>Click here to go to website</a></li>
            <li> <em>github.com/owolabiadebayo/Movie_application-using-react</em> </li>
          </ul>
          </div>
        </div>
        <div
          className="portfolio-item"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div className="portfolio-description has-margin-right" style={{marginLeft: 20}}>
            <h6>Freelance Software Development</h6>
            <h2>Twitter Clone</h2>
            <p>
              Twitter Clone Using React, React-use-effect to clone the create,read,write and delete feature of 
              a life tweeter feed 
            </p>
          <ul>
            <li> <a href='https://adoring-mcnulty-6fc62e.netlify.app'>Click here to go to website</a></li>
            <li> <em>github.com/owolabiadebayo/Twitter_clone</em> </li>
          </ul>
          </div>
          <div className="portfolio-img">
            <img src={twi} height='250' alt="netflix" />
          </div>
        </div>
        
      </div>
    
    </section>
     </>
  )
}
export default Portfolio;