import React, { useState, useRef, useEffect } from 'react';
import servicesData from '../resources/communication.json';
import { scrollLeft, scrollRight } from '../utils/./ScrollUtils';
import { LeftButton, RightButton } from '../components/ScrollButtons';
import { handleMouseDown, handleMouseMove, handleMouseUp } from '../utils/DragScroll';
export const Communication = () => {
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
    <section className="content-section d-flex justify-content-center" style={{ height: "48rem" }}>
      <div className="container px-4 px-lg-5 text-center">
        <div>
          <h3 className="text-color titles mb-0">Afet Sırasında İletişim</h3>
          <h5 className="text-color description mb-5"> <br/>Afetlerde ve acil durumlarda iletişimin kesintisiz sürdürülmesi hayati önem taşır.</h5>
        </div>
        <div className="row justify-content-center pt-4" style={{display: "grid"}}> 
          {showScrollButtons && (
            <div className="arrows text-end">
              <LeftButton className= "left" onClick={() => scrollLeft(scrollContainerRef, { current: 250 })}/>
              <RightButton className= "right" onClick={() => scrollRight(scrollContainerRef, { current: 250 })}/>
            </div>
          )}
          <div
            className="scroll-container"
            style={{ overflowX:'hidden', WebkitOverflowScrolling: 'touch' }}
            ref={scrollContainerRef}
            onMouseDown={scrollEnabled ? handleMouseDown(scrollContainerRef, setIsDragging, setStartX, setScrollLeftStart): null}
            onMouseMove={scrollEnabled ? handleMouseMove(scrollContainerRef, isDragging, startX, scrollLeftStart): null}
            onMouseUp={scrollEnabled ? handleMouseUp(setIsDragging): null}
            onMouseLeave={scrollEnabled ? handleMouseUp(setIsDragging): null}
          >
            {servicesData.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <img src={service.img} alt={service.title} className="img-fluid rounded-circle mx-auto mb-3 service-image" style={{ width: '285px', height: '285px' }} />
                <h4 className="text-color title pt-3"><strong>{service.title}</strong></h4>
                <p className="text-color description mb-0 pt-3">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Communication;
