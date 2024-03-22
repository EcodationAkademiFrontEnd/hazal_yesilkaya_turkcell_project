import React, { useRef, useEffect, useState } from 'react';
import servicesData from '../resources/planning.json';
import { scrollLeft, scrollRight } from '../utils/ScrollUtils';
import { LeftButton, RightButton } from '../components/ScrollButtons';
import { handleMouseDown, handleMouseMove, handleMouseUp } from '../utils/DragScroll';

export const Planning = () => {
  const contentRef = useRef(null);
  const scrollAmount = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  useEffect(() => {
    const getContainerWidth = () => {
      if (contentRef.current) {
        return contentRef.current.offsetWidth;
      }
      return 0;
    };
    scrollAmount.current = getContainerWidth() * 0.25;
  }, []);

  return (
    <section className="content-section d-flex justify-content-center" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="container px-4 px-lg-5 text-center">
        <div>
          <h3 className="text-color titles mb-0">Afet Öncesinde<br/>Planlama</h3>
        </div>
        <div className="arrows text-end">
        <LeftButton onClick={() => scrollLeft(contentRef, scrollAmount)} /> 
        <RightButton onClick={() => scrollRight(contentRef, scrollAmount)} /> 
        </div>
        <div className="row justify-content-center" style={{display: "grid"}}>
          <div className="scroll-container" ref={contentRef}
           onMouseDown={handleMouseDown(contentRef, setIsDragging, setStartX, setScrollLeftStart)}
           onMouseMove={handleMouseMove(contentRef, isDragging, startX, scrollLeftStart)}
           onMouseUp={handleMouseUp(setIsDragging)}
           onMouseLeave={handleMouseUp(setIsDragging)}
           style={{ overflowX: 'hidden', display: 'flex',position: 'inline-block' }}
           >
            {servicesData.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <img src={service.img} alt={service.title} className="img-fluid rounded-circle mx-auto mb-3 service-image" style={{ width: '285px', height: '285px' }} />
                <h4 className="text-color bold_title service-description pt-1"><strong>{service.title}</strong></h4>
                <p className="text-color description service-description mb-0 pt-1">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-12 pt-5">
          <p className="text-center description text-color"><strong>Diğer ipuçları ve bilgiler için AFAD web sitesini ziyaret edin.</strong></p>
          <a className="turcellBtn Bg" href="https://www.afad.gov.tr" target="_blank" rel="noopener noreferrer">www.afad.gov.tr</a>
        </div>
      </div>
    </section>
  );
};
