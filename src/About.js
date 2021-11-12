import React from "react";
import profPic from "./Images/pic.jpg";
import { GiLaptop, GiDart } from "react-icons/gi";
import { DiJavascript, DiMongodb, DiPostgresql } from "react-icons/di";
import { FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { SiFirebase, SiMysql } from "react-icons/si";
import pdf from "./files/Adebayo.pdf";

const About = () => {
  return (
    <div className="aboutstyle" id="section2">
      {/* <section className="about"> */}

      <div className="container" data-aos="fade-right">
        <div className="profpic">
          <img
            src={profPic}
            height="300px"
            className="img-responsive"
            alt="profile"
          />
        </div>
        <div className="about-heading">
          <h1 id="section2">About</h1>
        </div>

        <h5>
          I am a Professional Full Stack Developer | React-Js/Typescript
          Engineer| Flutter Developer | Python Developer, Data Science and
          Machine Learning Enthusiast with over 2 years’ experience providing
          programming and database expertise Forward-thinking problem
          identification, research, analysis and resolution. Also spearhead
          full-life cycle project development and innovatively manages quality
          assurance. <br />
          <br /> Am passionate about joining an organisation where i can
          leverage my drive to contribute to innovation and drive.
        </h5>
        <br />
        <p>
          Technical Skill
          <div className=" pt-3">
            <DiJavascript size={50} style={{ color: "yellow" }} />{" "}
            <FaPython
              size={50}
              style={{ color: "blue", background: "yellow" }}
            />{" "}
            <GiDart size={50} style={{ color: "red" }} />{" "}
            <FaReact size={50} style={{ color: "blue", background: "white" }} />{" "}
            <FaNodeJs
              size={50}
              style={{ color: "blue", background: "green" }}
            />{" "}
            <SiFirebase
              size={50}
              style={{ color: "blue", background: "yellow" }}
            />{" "}
            <span>Typescript</span>{" "}
            <DiMongodb style={{ color: "green" }} size={50} />{" "}
            <SiMysql style={{ color: "white" }} size={50} />{" "}
            <DiPostgresql style={{ color: "white" }} size={50} />
          </div>
        </p>
      </div>

      {/* </section> */}
      <h5 className="lap">
        <GiLaptop size={100} />
      </h5>

      <h3 id="git">
        {" "}
        OWOLABI ADEBAYO STEPHEN <br /> Github.com/owolabiadebayo |
        owolabiadebayo78@gmail.com{" "}
      </h3>

      <div className="landing-text">
        {/* <img src={logo} alt="aitsam ahad logo" className="logo" /> */}
        <h6>
          FULL STACK SOFTWARE DEVELOPER |{" "}
          <a href={pdf} className="btn btn-primary btn-md">
            Download Resume
          </a>
        </h6>
      </div>
    </div>
  );
};
export default About;
