import React from "react";

export default function Footer() {
  return (
    <footer style={{footerStyle, background: "White"}}>
      <div className="container">
        <div className="row">
          <div className="col-3 col-sm-4">
            <h5>Links</h5>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-3 col-sm-4">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road<br />
              Clear Water Bay, Kowloon<br />
              HONG KONG<br />
              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
              <i className="fa fa-envelope fa-lg"></i>:
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-3 col-sm-4">
            <div className="text-center">
              <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
              <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
              <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
              <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
              <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
              <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
            </div>
          </div>
          <div className="col-3 col-sm-4">
            <p>© Copyright 2018 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  textAlign: 'center',
  padding: '20px 0',
};
