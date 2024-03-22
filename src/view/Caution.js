import React, { useRef, useEffect, useState } from 'react';
import servicesData from '../resources/caution.json';
import { scrollLeft, scrollRight } from '../utils/ScrollUtils';
import { handleMouseDown, handleMouseMove, handleMouseUp } from '../utils/DragScroll';

export const Caution = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const container = scrollContainerRef.current;
      if (container) {
        setShowScrollButtons(container.scrollWidth > container.clientWidth && window.innerWidth <= 1400);
        setScrollEnabled(window.innerWidth <= 1400);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on initial render
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section className="masthead d-flex justify-content-center">
      <div className="container px-4 px-lg-5 text-center">
        <div>
          <h3 className="title_color titles mb-0 p-0">Turkcell'den<br/>Afet Tedbirleri</h3>
          <div className='space3'></div>
          <p className="text-white description mb-5"> <br/>Türkiye’nin Turkcell’i olarak iyi günde olduğu gibi kötü günlerde de insanımızın yanında olmayı görev bildik. 
              <br/>
              Bu yüzden afet anında teknolojilerimizle hızla aksiyon alıyor, yaralarımızı birlikte sarıyoruz.
          </p>
        </div>
        <div className="row justify-content-center pt-4 text-center" style={{ display: 'grid' }}>
          {showScrollButtons && (
            <div className="arrows text-end">
              <button className= "button1" onClick={() => scrollLeft(scrollContainerRef, { current: 250 })}>&#10094;</button>
              <button className= "button1" onClick={() => scrollRight(scrollContainerRef, { current: 250 })}>&#10095;</button>
            </div>
          )}
          <div
            className="scroll-container"
            style={{ overflowX: 'hidden', WebkitOverflowScrolling: 'touch' }}
            ref={scrollContainerRef}
            onMouseDown={scrollEnabled ? handleMouseDown(scrollContainerRef, setIsDragging, setStartX, setScrollLeftStart): null}
            onMouseMove={scrollEnabled ? handleMouseMove(scrollContainerRef, isDragging, startX, scrollLeftStart): null}
            onMouseUp={scrollEnabled ? handleMouseUp(setIsDragging): null}
            onMouseLeave={scrollEnabled ? handleMouseUp(setIsDragging): null}
          >
            {servicesData.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <img src={service.img} alt={service.title} className="img-fluid rounded-circle mx-auto mb-3 service-image" style={{ width: '285px', height: '285px' }} />
                <h4 className='text-white title pt-3'><strong>{service.title}</strong></h4>
                <p className="text-white description mb-0 pt-3">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
