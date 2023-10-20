import { Component } from "react";

export default function Footer() {
  const footerStyle = {
    textAlign: 'center', // Căn giữa theo chiều ngang
    padding: '20px 0', // Thêm khoảng cách từ trên và dưới
  };

  return (
    <footer className="footer" style={footerStyle}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div>
              <p>© Copyright 2018 Ristorante Con Fusion</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
