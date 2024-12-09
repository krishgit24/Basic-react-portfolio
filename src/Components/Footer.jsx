import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer" id="Footer">
      <h1>Let's work together...</h1>
      <div className="icons3">
        <div className="contactway">
          <i className="fa fa-linkedin">
            <span className="names"><a href="https://www.linkedin.com/in/krish-dambir-1701a2289/" target="main">Linkedin</a></span>
          </i>
        </div>
        <i className="fa fa-twitter">
          <span className="names"><a href="https://x.com/Krish_dambir_27" target="main">Twitter</a></span>
        </i>
        <span className="names">@send Email</span>
      </div>
      <div className="iconsnext">
        <i className="fa fa-github">
          <span className="names"><a href="https://github.com/krishgit24" target="main">Github</a></span>
        </i>
        <i className="fa fa-mobile">
          <span className="names">Call</span>
        </i>
      </div>
    </div>
  );
};

export default Footer;
