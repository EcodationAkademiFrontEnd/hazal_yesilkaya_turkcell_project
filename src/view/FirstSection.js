import React from 'react';

export const FirstSection = () => {
  return (
    <section className="masthead d-flex justify-content-center" style={{height: "auto"}}>
      <div className="container px-4 px-lg-5 text-center">
        <div id="carouselExample" className="carousel slide mb-5" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <picture>
                <source media="(max-width: 900px)" srcSet="https://s.turkcell.com.tr/SiteAssets/LandingPage/diger/afettedbirleri/assets/images/afet-durumu-turkcell_Mobil_optimize.png"/>
                <img src="https://s.turkcell.com.tr/SiteAssets/LandingPage/diger/afettedbirleri/assets/images/afet-durumu-turkcell-01p24.png" className="d-block mx-auto img-fluid" alt="Afet Durumu Turkcell" style={{height: "auto", maxWidth: "100%"}} />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
