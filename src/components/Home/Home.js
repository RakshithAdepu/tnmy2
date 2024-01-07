import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import { TiSocialLinkedin } from "react-icons/ti";
import { MdEmail } from "react-icons/md";

const Home = () => {
  return (
    <div className="bgCont">
      <div className="mainCont">
        <nav>
          <h2>Thanmai</h2>

          <div className="divNav">
            <Link to="/" className="underLine">
              {" "}
              <h3>Home</h3>
            </Link>
            <Link to="/about" className="underLine">
              {" "}
              <h3>About</h3>
            </Link>
            <Link to="/testimonials" className="underLine">
              {" "}
              <h3>Clients</h3>
            </Link>
            <Link to="/services" className="underLine">
              {" "}
              <h3>Services</h3>
            </Link>
            <Link to="/contact" className="underLine">
              {" "}
              <h3>Contact</h3>
            </Link>
          </div>
        </nav>
        <div className="NameSubCont">
          <div className="nameCont">
            <h1>Hi, I'am Thanmai Ganji</h1>
            <h4>Senior Executive Engineer</h4>
            <p className="para">
              Seasoned Senior Executive Engineer with a proven track record in
              directing and overseeing intricate engineering ventures.
              Proficient in strategic planning, team leadership, and maintaining
              stringent quality standards for optimal project outcomes.
              Dedicated to driving innovation and cultivating collaborative
              environments to ensure successful project delivery.
            </p>

           <Link to="/services"> <button className="buttonWork">My works</button></Link>
          </div>
          <div className="picCont">
            {/* https://mail.google.com/mail/u/0/#inbox*/}
            <img
              className="img"
              src={process.env.PUBLIC_URL + "/images/T2.jpeg"}
              alt="pic"
            />
            <div className="icons">
              <a
                href="https://www.facebook.com/thanmai.ganji.9?mibextid=ZbWKwL"
                target="_blank"
              >
                {" "}
                <FaFacebook className="iconSingle" />
              </a>
              <a
                href="https://www.instagram.com/thanmaiganji?igsh=dzFzNTd5ZHJuYmdy"
                target="_blank"
              >
                {" "}
                <FaInstagram className="iconSingle" />
              </a>
              <a
                href="https://www.linkedin.com/in/thanmai-ganji-0b2394213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                {" "}
                <TiSocialLinkedin className="iconSingle" />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                {" "}
                <MdEmail className="iconSingle" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
