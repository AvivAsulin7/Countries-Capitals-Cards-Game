import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Additional Links</h4>
            <ul>
              <li>
                <a href="/">about us</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">our services</a>
              </li>
              <li>
                <a href="/">Game Credits</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal Information</h4>
            <ul>
              <li>
                <a href="/">Terms of Service</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/aviv.asulin.9">
                <FaFacebookF />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/avivasulin7/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
