import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container col-10 px-3 px-lg-5">
        <div className="row justify-content-between align-items-center">
          <div className="col-6 text-start">
            <p className="text-white medium mb-0" style={{paddingLeft: "35px"}}>&copy; 2023 Turkcell</p>
          </div>
          <div className="col-6">
            <ul className="list-inline mb-1 text-end pt-1" style={{paddingRight: "35px"}}>
              <li className="list-inline-item">
                <a className="social-link text-white" href="https://www.twitter.com/Turkcell"><i className="fab fa-twitter"></i></a>
              </li>
              <li className="list-inline-item">
                <a className="social-link text-white " href="https://www.facebook.com/Turkcell"><i className="fab fa-facebook-f"></i></a>
              </li>
              <li className="list-inline-item">
                <a className="social-link text-white" href="https://www.instagram.com/turkcell/?hl=tr%e2%80%8e"><i className="fab fa-instagram"></i></a>
              </li>
              <li className="list-inline-item">
                <a className="social-link text-white" href="https://www.youtube.com/Turkcell"><i className="fab fa-youtube"></i></a>
              </li>
              <li className="list-inline-item">
                <a className="social-link  text-white" href="https://tr.linkedin.com/company/turkcell"><i className="fab fa-linkedin-in"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
