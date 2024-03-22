import React from 'react';

export const Logo = () => {
  return (
    <header style={{ backgroundColor: '#07377E', paddingTop: '25px' }}>
      <div className="container col-11">
        <div className="row">
          <div className="col-xs-5 col-md-4">
            <div className="top-links">
              <a href="https://www.turkcell.com.tr/kurumsal" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>
                <i className="arrow-left" style={{ fontSize: '18px', color: 'white' }}></i><strong>turkcell.com.tr</strong>
              </a>
            </div>
          </div>
          <div className="col-xs-7 col-md-4 text-center">
            <a data-link="external?link" href="https://www.turkcell.com.tr/" target="_blank" rel="noopener noreferrer">
              <img src="https://s.turkcell.com.tr/SiteAssets/LandingPage/diger/afettedbirleri/assets/images/turkcell_logo.png" alt="Afet Destek" className="logo" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Logo;
