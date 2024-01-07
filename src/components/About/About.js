import React from "react";
import "./About.css";
import {Link} from "react-router-dom";
import { FaFacebook,FaInstagram  } from "react-icons/fa";

import { TiSocialLinkedin } from "react-icons/ti";
import { MdEmail } from "react-icons/md";


const About = () => {
  return (
    <div className="bgCont">
      <div className="mainCont">
        <nav>
          <h2>Thanmai</h2>

          <div className="divNav">
          <Link className="underLine" to="/">      <h3>Home</h3></Link>
           <Link className="underLine" to="/about"> <h3>About</h3></Link>
           <Link to="/testimonials"  className="underLine"> <h3>Clients</h3></Link>
           <Link to="/services"  className="underLine"> <h3>Services</h3></Link>
           <Link to="/contact"  className="underLine"> <h3>Contact</h3></Link>
           
          </div>
        </nav>
       <div className="NameSubCont">
       <div className="nameCont" >
<h1>Hi, I'am Thanmai Ganji</h1>
<h4> Senior Executive Engineer</h4>
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
        {/* pic cont */}
        <div className="picCont" >
<p className="paraAbout">
Graduating with distinction from VNR Vignana Jyothi Institute of Engineering and Technology (VNRVJIET) with a Bachelor of Technology - BTech in Mechanical Engineering has laid the foundation for my dynamic career in the field. Joining Blue Star Limited as a Senior Executive Engineer in April 2021 marked an exciting phase where I lead comprehensive engineering initiatives. Situated in Hyderabad, Telangana, India, I play a pivotal role in steering full-scale projects, harnessing my technical prowess to ensure the seamless execution of innovative solutions.
<br/> 
<br/>This journey fuels my passion for continuous learning and propels me towards driving impactful advancements within the realm of engineering.

<br/>
<br/> Commencing my professional voyage in Bangalore, Karnataka, for a span of two years presented an invaluable opportunity to immerse myself in diverse projects and expand my horizons. During my tenure, I not only honed my engineering expertise but also embraced the local culture by learning Kannada, fostering deeper connections within the community. As a Tertiary Lead, my role evolved to encompass sales and comprehensive customer service for a wide spectrum of air conditioning units. This multifaceted experience equipped me with a holistic understanding of the industry, blending technical acumen with a customer-centric approach, fostering relationships, and driving business growth
</p>
       
       <div className="icons">
       <a href="https://www.facebook.com/thanmai.ganji.9?mibextid=ZbWKwL" target="_blank">    <FaFacebook className="iconSingle"/></a>
   <a href="https://www.instagram.com/thanmaiganji?igsh=dzFzNTd5ZHJuYmdy" target="_blank">    <FaInstagram className="iconSingle"/></a>
   <a href="https://www.linkedin.com/in/thanmai-ganji-0b2394213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">    <TiSocialLinkedin className="iconSingle"/></a>
   <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">    < MdEmail className="iconSingle"/></a>
       </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default About;
