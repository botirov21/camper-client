import React from "react";
import {
  Contact,
  Footerdiv,
  Servicesdiv,
  SocialMedia,
  Writings,
} from "./style";
import youtube from "../../assets/youteube.png";
import insta from "../../assets/insta.png";
import naver from "../../assets/naver.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Footerdiv>
        <h1>Camper</h1>
        <Servicesdiv>
          <h1>Services</h1>
          <Writings>
            <p>Camping</p>
            <p>Lodging</p>
            <p>Harbour</p>
            <p>Day Use</p>
          </Writings>
        </Servicesdiv>
        <Servicesdiv>
          <h1>Menu</h1>
          <Writings>
            <p>About</p>
            <p>Services</p>
            <p>Booking</p>
            <p>Blog</p>
          </Writings>
        </Servicesdiv>
        <Contact>
          <h1 style={{ fontSize: `20xp`, fontFamily: `monospace` }}>Contact</h1>
          <SocialMedia>
            <Link>
              <img src={youtube}  alt="none" />
            </Link>
            <Link to="https://www.instagram.com/botirov.21/">
           
              <img src={insta} alt="none" />
            </Link>
            <Link to="">
        
              <img src={naver} alt="none" />
            </Link>
          </SocialMedia>
          <p style={{ color: `white` }}>021 Korea Seul, LA</p>
          <p style={{ color: `white` }}>Camper@example.com</p>
          <p style={{ color: `white` }}>(021) 345-6789-99</p>
        </Contact>
      </Footerdiv>
    </div>
  );
};

export default Footer;
