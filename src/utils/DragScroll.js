
export const handleMouseDown = (contentRef, setIsDragging, setStartX, setScrollLeftStart) => (event) => {
    setIsDragging(true);
    setStartX(event.pageX - contentRef.current.offsetLeft);
    setScrollLeftStart(contentRef.current.scrollLeft);
  };
  
  export const handleMouseMove = (contentRef, isDragging, startX, scrollLeftStart) => (event) => {
    if (!isDragging) return;
    const x = event.pageX - contentRef.current.offsetLeft;
    const walk = (x - startX) * 1.6; // Hızlı kaydırma için bir katsayı
    contentRef.current.scrollLeft = scrollLeftStart - walk;
  };
  
  export const handleMouseUp = (setIsDragging) => () => {
    setIsDragging(false);
  };
  