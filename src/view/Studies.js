import React, { useRef, useEffect,useState } from 'react';
import servicesData from '../resources/studies.json';
import { scrollLeft, scrollRight } from '../utils/ScrollUtils';
import { LeftButton, RightButton } from '../components/ScrollButtons'; 
import { handleMouseDown, handleMouseMove, handleMouseUp } from '../utils/DragScroll';

export const Studies = () => {
  const scrollContainerRef = useRef(null);
  const scrollAmount = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  useEffect(() => {
    const getContainerWidth = () => {
      if (scrollContainerRef.current) {
        return scrollContainerRef.current.offsetWidth;
      }
      return 0;
    };
    scrollAmount.current = getContainerWidth() * 0.25;
  }, []);

  return (
    <section className="content-section d-flex justify-content-center" style={{ backgroundColor: '#FFCD00' }}>
      <div className="container px-4 px-lg-5 text-center">
        <div>
          <h3 className="text-color mb-0">Turkcell’den Afet Çalışmaları</h3>
        </div>
        <div className="arrows text-end">
          <LeftButton onClick={() => scrollLeft(scrollContainerRef, scrollAmount)} /> {/* Yeni sol buton bileşenini kullan */}
          <RightButton onClick={() => scrollRight(scrollContainerRef, scrollAmount)} /> {/* Yeni sağ buton bileşenini kullan */}
        </div>
        <div className="row justify-content-center" style={{display: "grid",}}>
          <div 
          className="scroll-container" 
          
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown(scrollContainerRef, setIsDragging, setStartX, setScrollLeftStart)}
          onMouseMove={handleMouseMove(scrollContainerRef, isDragging, startX, scrollLeftStart)}
          onMouseUp={handleMouseUp(setIsDragging)}
          onMouseLeave={handleMouseUp(setIsDragging)}
          onDragStart={(e) => e.preventDefault()}>
            {servicesData.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <a href={service.href} target="_blank" rel="noopener noreferrer">
                <img src={service.img} alt={service.title} className="img-fluid mx-auto mb-3 service-image2" style={{ width: '260px', height: '290px', borderRadius: '15px' }} />
                <h4 className="text-color bold_title service-description pt-4"  style={{ textAlign: 'left' }}><strong>{service.title}</strong></h4>
                <p className="text-color description service-description mb-0 pt-2" style={{ textAlign: 'left' }}>{service.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
