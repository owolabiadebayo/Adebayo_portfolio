import React from "react";
import webDevelop from "./Images/web.png";
import Android from "./Images/android.png";
import IOS from "./Images/Annotation.png";

import {
  DiDart,
  DiDjango,
  DiJavascript,
  DiMongodb,
  DiMysql,
} from "react-icons/di";
import { FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { SiFirebase, SiTypescript } from "react-icons/si";
import twi from "./Images/twit.png";
import net from "./Images/Netflix.png";
import tra from "./Images/tra.png";
import POLL from "./Images/poll.png";
import dash from "./Images/dashboard.png";
import newsline from "./Images/newsline.png";
import typescript from "./Images/typescript.png";
import typescript2 from "./Images/typescript2.png";
import imagerize from "./Images/imagerize.png";
import weather from "./Images/weather.jpg";
import BMI from "./Images/bmicalculator.jpg";
import quiz from "./Images/quiz.jpg";
import cart from "./Images/cart.jpg";
import dashboard from "./Images/dashboard.jpg";
import login from "./Images/login.jpg";
import frontpage from "./Images/frontpage.jpg";

const Portfolio = () => {
  return (
    <>
      <section className="portfoliostyle" id="section4">
        <div className="portfolio-heading">
          <h1>Web Portfolio</h1>
          <div
            className="portfolio-item"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="portfolio-img has-margin-right">
              <img src={webDevelop} height="250px" alt="" />
            </div>
            <div className="portfolio-description">
              <p>GMTSoftware solution</p>
              <p>
                <h6>Front-End: React-js, Bootstrap</h6>
                <h6>Server-side: Nodejs</h6>
                <h6>Database: Mongo-db</h6>
                <h6>Mailing: Email.js</h6>
                <p>Tech Stack used</p>
                <div className="tech">
                  <DiJavascript size={25} style={{ color: "yellow" }} />{" "}
                  <FaNodeJs size={25} />{" "}
                  <DiMongodb style={{ color: "green" }} size={25} />
                  <FaReact
                    size={50}
                    style={{ color: "blue", background: "white" }}
                  />
                  <SiFirebase
                    size={50}
                    style={{ color: "blue", background: "white" }}
                  />{" "}
                  <span>Email.js</span>{" "}
                </div>
              </p>
              <ul>
                <li>
                  {" "}
                  <a href="https://gmtsoftware.tech">
                    Click here to go to website
                  </a>
                </li>
                <li>
                  <a href="https://github.com/owolabiadebayo/GMTsoftware-React-Web-App">
                    Click here to go to{" "}
                    <em>github.com/owolabiadebayo/GMTsoftware-React-Web-App</em>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="portfolio-item"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div
              className="portfolio-description has-margin-right"
              style={{ marginLeft: 20 }}
            >
              <h6>Freelance Software Development</h6>
              <h2>Glade.ng</h2>
              <p>
                Fullstack Web for annual webinar for managing school portals in
                modern world
              </p>
              <ul>
                <li>
                  {" "}
                  <a href="https://elegant-goldberg-6d7943.netlify.app">
                    Click here to go to website
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://elegant-goldberg-6d7943.netlify.app">
                    Click here to go to <em>github.com/owolabiadebayo</em>
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="portfolio-img">
              <img src={Android} height="250" alt="" />
            </div>
          </div>

          <div
            className="portfolio-item"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="portfolio-img has-margin-right">
              <img src={IOS} height="250" alt="" />
            </div>
            <div className="portfolio-description">
              <p>JaskExpress E-commerce</p>
              <h6>Front-End: React-js, Bootstrap</h6>
              <h6>Server-side: Nodejs</h6>
              <h6>React Context</h6>
              <h6>Payment integration: Paystack</h6>
              <p>Tech Stack used</p>
              <div className="tech">
                <DiJavascript size={25} style={{ color: "yellow" }} />{" "}
                <FaNodeJs size={25} style={{ color: "white" }} />{" "}
                <DiMongodb style={{ color: "green" }} size={25} />
                <FaReact
                  size={50}
                  style={{ color: "blue", background: "white" }}
                />{" "}
              </div>
              <ul>
                <li>
                  {" "}
                  <a href="https://jaskecommerce.herokuapp.com">
                    Click here to go to website
                  </a>
                </li>
                <li>
                  <a href="https://github.com/owolabiadebayo/JackExpress-React-Ecommerce">
                    Click here to go to{" "}
                    <em>
                      github.com/owolabiadebayo/JackExpress-React-Ecommerce
                    </em>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="portfolio-item"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div
              className="portfolio-description has-margin-right"
              style={{ marginLeft: 20 }}
            >
              <p> Full Stack (Python&Django) APP </p>
              <h6>Front-End: React-js, Bootstrap</h6>
              <h6>Server-side:Python(Django) </h6>
              <h6>RestFull Api: Django Restfull framework</h6>
              <h6>Database: MySQL</h6>
              <p>Tech Stacked Used</p>
              <div className="tech">
                <DiDjango size={25} style={{ color: "white" }} />{" "}
                <FaPython size={25} style={{ color: "yellow" }} />{" "}
                <DiMysql style={{ color: "green" }} size={25} />
                <FaReact
                  size={50}
                  style={{ color: "blue", background: "white" }}
                />{" "}
              </div>
              <ul>
                <li>
                  {" "}
                  <a href="https://github.com/owolabiadebayo/Authors-Dashboard-Using-React-Django-Restfull-Framework">
                    Click here to go
                    github.com/owolabiadebayo/Authors-Dashboard-Using-React-Django-Restfull-Framework
                  </a>
                </li>
              </ul>
            </div>
            <div className="portfolio-img">
              <img src={dash} height="250" alt="" />
            </div>
          </div>
          <div
            className="portfolio-item"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="portfolio-img has-margin-right">
              <img src={POLL} height="250" alt="" />
            </div>
            <div className="portfolio-description">
              <p> POLL APP </p>
              <h6>Front-End Webmark: HTML, CSS</h6>
              <h6>Client-side: Python (Django)</h6>
              <h6>Server-side:Python(Django) </h6>
              <h6>Database: MySQL</h6>
              <p>Tech Stack used</p>
              <div className="tech">
                <FaPython size={25} style={{ color: "yellow" }} />{" "}
              </div>
              <ul>
                <li>
                  {" "}
                  <a href="https://github.com/owolabiadebayo/poll-app-using-Python-Django">
                    Click here to go to
                    github.com/owolabiadebayo/poll-app-using-Python-Django
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="portfolio-item"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div
              className="portfolio-description has-margin-right"
              style={{ marginLeft: 20 }}
            >
              <p> WebScrapping </p>
              <h6>Front-End Webmark: Bootstrap, CSS</h6>
              <h6>Client-side: Python (Django)</h6>
              <h6>Web-Scrapping:Python(Beautiful Soup) </h6>

              <ul>
                <li>
                  {" "}
                  <a href="https://canews.herokuapp.com/">
                    Click here to go to App
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://github.com/owolabiadebayo/NewsLine-Using-Python-Web-Scraping-">
                    Click here to go to{" "}
                    <em>
                      github.com/owolabiadebayo/NewsLine-Using-Python-Web-Scraping-
                    </em>{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="portfolio-img">
              <img src={newsline} height="250" alt="" />
            </div>
          </div>
          <div
            className="portfolio-item"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="portfolio-img has-margin-right">
              <img src={typescript} height="250" alt="" />
            </div>
            <div className="portfolio-description">
              <p> Quiz App</p>
              <h6>Front-End WebMark: Bootstrap, CSS,</h6>
              <h6>Client_side_rendering:TypeScript & Reactjs</h6>
              <h6>Api: TriviaApi </h6>

              <p>Tech Stack used</p>
              <div className="tech">
                <SiTypescript size={25} style={{ color: "yellow" }} />{" "}
                <FaReact
                  size={50}
                  style={{ color: "blue", background: "white" }}
                />{" "}
              </div>
              <ul>
                <li>
                  <a href="https://stephenquizapp.netlify.app/">
                    Click here to go to webapp
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="https://github.com/owolabiadebayo/Quiz-App-Using-React-Typescript-and-trivia-Api">
                    Click here to go to git repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="portfolio-item"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div
              className="portfolio-description has-margin-right"
              style={{ marginLeft: 20 }}
            >
              <p> ShoppingCart App</p>
              <h6>Front-End WebMark: Bootstrap, CSS,</h6>
              <h6>Client_side_rendering:TypeScript & Reactjs</h6>

              <p>Tech Stack used</p>
              <div className="tech">
                <SiTypescript size={25} style={{ color: "yellow" }} />{" "}
                <FaReact
                  size={50}
                  style={{ color: "blue", background: "white" }}
                />{" "}
              </div>
              <ul>
                <li>
                  {" "}
                  <a href="https://github.com/owolabiadebayo/React-typescript-stephenShoppingCart">
                    Click here to go to
                    github.com/owolabiadebayo/React-typescript-stephenShoppingCart
                  </a>
                </li>
                <li>
                  <a href="https://stephenshoppingcart.netlify.app/">
                    Click here to go to webapp
                  </a>
                </li>
              </ul>
            </div>
            <div className="portfolio-img">
              <img src={typescript2} height="250" alt="" />
            </div>
          </div>
          <div
            className="portfolio-item"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="portfolio-img has-margin-right">
              <img src={imagerize} height="250" alt="" />
            </div>
            <div className="portfolio-description">
              <p> Image manipulation</p>
              <h6>Front-End WebMark: Bootstrap, CSS,</h6>
              <h6>Client_side_rendering:Python</h6>
              <h6>OpenCv</h6>

              <p>Tech Stack used</p>
              <div className="tech">
                <FaPython
                  size={50}
                  style={{ color: "blue", background: "white" }}
                />{" "}
              </div>
              <ul>
                <li>
                  <a href="https://ca-imagerize.herokuapp.com/">
                    Click here to go to webapp
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="hhttps://github.com/owolabiadebayo/image-manipulation-using-python">
                    Click here to go to git repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="portfolio-item"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div
              className="portfolio-description has-margin-right"
              style={{ marginLeft: 20 }}
            >
              <h5>JPMORGAN & CHASE</h5>
              <p>
                <p>Task 1: interfacing with stock price feed</p>
                <p>
                  Task 2: Use JpMorgan Chase framework and tools to query data
                </p>
                <p>
                  **Note**: Api from jpmorgan has been blocked for security
                  purpose if you want to access the site
                </p>
                <p>Tech Stack used</p>
                <div className="tech">
                  <DiJavascript size={25} style={{ color: "yellow" }} />{" "}
                  <FaNodeJs size={25} />{" "}
                  <FaReact
                    size={50}
                    style={{ color: "blue", background: "white" }}
                  />
                  <FaPython
                    size={50}
                    style={{ color: "blue", background: "yellow" }}
                  />{" "}
                </div>
              </p>
              <ul>
                <li>
                  {" "}
                  <a href="https://serene-einstein-bab799.netlify.app">
                    Click here to go to website
                  </a>
                </li>
                <li>
                  {" "}
                  <em>
                    github.com/owolabiadebayoJP-MORGAN-SOFTWARE-ENGINEERING-VIRTUAL-INTERNSHIP/
                  </em>{" "}
                </li>
              </ul>
            </div>
            <div className="portfolio-img">
              <img src={tra} height="250px" alt="" />
            </div>
          </div>
          <div
            className="portfolio-item"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="portfolio-img has-margin-right">
              <img src={net} height="250" alt="" />
            </div>
            <div className="portfolio-description">
              <p>Clone Netflix using Reactjs</p>
              <p>Tech Stack used</p>
              <div className="tech">
                <DiJavascript size={25} style={{ color: "yellow" }} />{" "}
                <FaNodeJs size={25} />{" "}
                <DiMongodb style={{ color: "green" }} size={25} />
                <FaReact
                  size={50}
                  style={{ color: "blue", background: "white" }}
                />{" "}
              </div>
              <ul>
                <li>
                  {" "}
                  <a href="https://keen-mcclintock-277386.netlify.app">
                    Click here to go to website
                  </a>
                </li>
                <li>
                  {" "}
                  <em>
                    github.com/owolabiadebayo/Movie_application-using-react
                  </em>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div
            className="portfolio-item"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div
              className="portfolio-description has-margin-right"
              style={{ marginLeft: 20 }}
            >
              <h5>Twitter Clone</h5>
              <p>
                Twitter Clone Using React, React-use-effect to clone the
                create,read,write and delete feature of a life tweeter feed
              </p>
              <ul>
                <li>
                  {" "}
                  <a href="https://adoring-mcnulty-6fc62e.netlify.app">
                    Click here to go to website
                  </a>
                </li>
                <li>
                  {" "}
                  <em>github.com/owolabiadebayo/Twitter_clone</em>{" "}
                </li>
              </ul>
            </div>
            <div className="portfolio-img">
              <img src={twi} height="250" alt="netflix" />
            </div>
          </div>
        </div>
      </section>
      <section className="portfoliostyle" id="section4">
        <div className="portfolio-heading">
          <h1>Flutter Portfolio</h1>
          <div
            className="portfolio-item"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="portfolio-img has-margin-right">
              <img src={BMI} height="250" alt="" />
            </div>
            <div className="portfolio-description">
              <p>Build a bmi calculator using Flutter</p>
              <p>Tech Stack used</p>
              <div className="tech">
                <DiDart
                  size={50}
                  style={{ color: "blue", background: "white" }}
                />{" "}
              </div>
              <ul>
                <li>
                  {" "}
                  <a href="https://github.com/owolabiadebayo/BMIcalculator-Using-Flutter-Dart-">
                    Click here to go to github repository
                  </a>
                </li>
                <li>
                  {" "}
                  <em>
                    https://github.com/owolabiadebayo/BMIcalculator-Using-Flutter-Dart-
                  </em>{" "}
                </li>
              </ul>
            </div>
          </div>

          <div
            className="portfolio-item"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div
              className="portfolio-description has-margin-right"
              style={{ marginLeft: 20 }}
            >
              <p>Quiz App Using Flutter and Trivia Api for Questions</p>
              <ul>
                <li>
                  {" "}
                  <a href="https://github.com/owolabiadebayo/QuizApp-Flutter">
                    Click here to go to github repository
                  </a>
                </li>
                <li>
                  {" "}
                  <em>
                    https://github.com/owolabiadebayo/QuizApp-Flutter
                  </em>{" "}
                </li>
              </ul>
            </div>
            <div className="portfolio-img">
              <img src={quiz} height="250" alt="netflix" />
            </div>
          </div>
          <div
            className="portfolio-item"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="portfolio-img has-margin-right">
              <img src={weather} height="250" alt="" />
            </div>
            <div className="portfolio-description">
              <p>WeatherApp Using Flutter and OpenweatherApi</p>
              <p>Tech Stack used</p>
              <div className="tech">
                <DiDart
                  size={50}
                  style={{ color: "blue", background: "white" }}
                />{" "}
              </div>
              <ul>
                <li>
                  {" "}
                  <a href="https://github.com/owolabiadebayo/WeatherApplication-Using-Flutter">
                    Click here to go to github repository
                  </a>
                </li>
                <li>
                  {" "}
                  <em>
                    https://github.com/owolabiadebayo/WeatherApplication-Using-Flutter
                  </em>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div
            className="portfolio-item"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div
              className="portfolio-description has-margin-right"
              style={{ marginLeft: 20 }}
            >
              <p>JaskExpress Application Using Flutter </p>
              <p>
                Backend: Firebase(Authentication, Real-time Database, Cloud
                database, cloud storage, cloud messaging, cloud function)
              </p>
              <ul>
                <li>
                  {" "}
                  <a href="https://github.com/owolabiadebayo/JaskExpress-App-Using-Flutter">
                    Click here to go to git repository
                  </a>
                </li>
                <li>
                  {" "}
                  <em>
                    https://github.com/owolabiadebayo/JaskExpress-App-Using-Flutter
                  </em>{" "}
                </li>
              </ul>
            </div>
            <div className="portfolio-img">
              <img src={dashboard} height="250" alt="netflix" />
            </div>
          </div>
        </div>
      </section>
      <section className="portfoliostyle" id="section5">
        <div className="portfolio-img2">
          <img src={cart} height="250" alt="netflix" />
        </div>
        <div className="portfolio-img2">
          <img src={login} height="250" alt="netflix" />
        </div>
        <div className="portfolio-img2">
          <img src={frontpage} height="250" alt="netflix" />
        </div>
      </section>
    </>
  );
};
export default Portfolio;
