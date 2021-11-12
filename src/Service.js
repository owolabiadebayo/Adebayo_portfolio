import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import WebIcon from "@material-ui/icons/Web";
import AndroidIcon from "@material-ui/icons/Android";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
// import { colors } from '@material-ui/core';

let iconStyles = {
  fontSize: "75px",
};

const Service = () => {
  return (
    <div className="servicestyle" id="section3">
      <div className="container Service">
        <div className="service-heading">
          <h1>Technical Skills</h1>
        </div>
        <div className="my-skills">
          <div className="skill" data-aos="fade-in" data-aos-delay="200">
            <div className="icon-container">
              <WebIcon style={iconStyles} />
            </div>
            <h3>Full-Stack Software Developer</h3>
            <p>
              Am a full stack developer, I have experience working{" "}
              <span>
                ●Web Markup: Figma/PSD/XD to pixel perfect HTML5 & CSS3, SASS
              </span>{" "}
              <h6>
                {" "}
                ●Client-side Scripting: React and Typescript, javascript(ES6),
                Redux, Django
              </h6>{" "}
              <h6>
                ●Redux, Recoil, React-query, Redux logging, Redux thunk, Storing
                authentication details at Application level State with Redux
                store, React hook, React Context.
              </h6>{" "}
              <h6>
                ●Backend: Django RestFull Framework for API(back-end), Nodejs
              </h6>
              <h6>
                {" "}
                ●Firebase(Authentication, Real-time Database, Cloud database,
                cloud storage, cloud messaging, cloud function){" "}
              </h6>
              <h6>● Cloud development and deployment: Aws Amplify cli</h6>
              <h6>● Database: MongoDB, Mysql, PostSql,sqlite</h6>
              <h6>
                {" "}
                ● Component libraries: Material UI, React-bootstrap, Tailwind
                CSS
              </h6>
              <h6>
                {" "}
                ● Tooling: Webpack, Eslint, NPM yarn ●Mobile Application: Dart
                (flutter App)
              </h6>
              <h6> ● Machine Learning: Numpy, Panda, Scikit-learn</h6>
              <h6>● Continuous deployment and Continuous Delivery using AWS</h6>
              <h6> ● Collaboration: Github, kanban(trello,jira), Slack </h6>
              <h6> ● Payment integration: Paystack,Flutterwave, Stripe</h6>
            </p>
          </div>
          <div className="skill" data-aos="fade-in" data-aos-delay="100">
            <div className="icon-container">
              <AndroidIcon style={iconStyles} />
            </div>
            <h3>Android Developer & ios Developer</h3>
            <p>
              Experience using flutter for Android and ios application
              development
              <h6>Application Interface: Flutter</h6>
              <h6>
                BackEnd:Firebase(Authentication, Real-time Database, Cloud
                database, cloud storage, cloud messaging, cloud function){" "}
              </h6>
              <h6>RestFull Api: Django RestFull Framework</h6>
            </p>
          </div>
          <div className="skill" data-aos="fade-in" data-aos-delay="100">
            <div className="icon-container">
              <PhoneIphoneIcon style={iconStyles} />
            </div>
            <h3>Digital Marketer</h3>
            <p>
              Am a digital marketer,brand, and new business strategist across
              music,social media and entertainment industries am skilled in
              evaluating needs and implementing policies that have positive
              influence on the organisation marketing strategies
              <p>Additional Skills</p>
              <li>
                Digital Data analytics/marketing: Facebook insight, instagram
                insight Google analytics,Mailchimp,get revue.
              </li>
              <li>Adobe Illustrator, inkscape, Adobe PhotoShop</li>
              <li>Microsoft office packages</li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
