import React from 'react'
import profPic from './Images/pic.jpg'
import {GiLaptop,GiDart} from 'react-icons/gi'
import {DiJavascript,DiMongodb,DiPostgresql} from 'react-icons/di'
import {FaPython,FaReact,FaNodeJs} from 'react-icons/fa'
import {SiFirebase,SiMysql} from 'react-icons/si'
import pdf from './files/Adebayo.pdf'


const About = () => {
  return (
    <div className='aboutstyle' id="section2">

      {/* <section className="about"> */}

      <div className="container" data-aos="fade-right">

        <div className="profpic">
          <img src={profPic} height="350px" className="img-responsive" alt="profile"/>

        </div>
        <div className="about-heading">
          <h1 id='section2'>About</h1>
        </div>

        <p>
          Hello! I'm Adebayo, a software engineer based in Abuja, Full Stack software
          Developer with Proven ability in optimizing web,android and ios functionality that improve data
          retrieval and workflow efficiencies using programming languages. <br />
          <br /> Am passionate about joining an organisation where i can leverage 
          my drive to contribute to innovation and drive.
          </p>
        <br />
        <p>
          Programming language with few technologies I've been working with recently
          <div className=" pt-3"><DiJavascript size={50} style={{color:'yellow'}}/> <FaPython size={50} style={{color:'blue', background:'yellow' }}  /> <GiDart  size={50} style={{color:'red'}} /> <FaReact size={50} style={{color:'blue', background:'white' }} /> <FaNodeJs  size={50} style={{color:'blue', background:'green' }} /> <SiFirebase size={50} style={{color:'blue', background:'yellow' }} /> <span>C# Asp.net</span> <DiMongodb style={{color:'green'}} size={50}/> <SiMysql style={{color:'white'}} size={50}/> <DiPostgresql style={{color:'white'}} size={50}/></div>
        </p>


      </div>

      

      {/* </section> */}
    <h5><GiLaptop size={100}/></h5>
    
    <h3 id='git pt-3'> OWOLABI ADEBAYO STEPHEN | Github.com/owolabiadebayo </h3>

      <div className="landing-text"> 
        
        {/* <img src={logo} alt="aitsam ahad logo" className="logo" /> */}
        <h6>SOFTWARE ENGINEER | <a href={pdf} className='btn btn-primary btn-md'>Download Resume</a></h6> 
      </div>

    </div>
  )
}
export default About;
