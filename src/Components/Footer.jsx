import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer" id="Footer">
      <h1>Let's work together...</h1>
      <div className="icons3">
        <div className="contactway">
          <i className="fa fa-linkedin">
            <span className="names">Linkedin</span>
          </i>
        </div>
        <i className="fa fa-twitter">
          <span className="names">Twitter</span>
        </i>
        <span className="names">@send Email</span>
      </div>
      <div className="iconsnext">
        <i className="fa fa-github">
          <span className="names">Github</span>
        </i>
        <i className="fa fa-mobile">
          <span className="names">Call</span>
        </i>
      </div>
    </div>
  );
};

export default Footer;
