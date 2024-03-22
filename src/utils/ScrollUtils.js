
export const scrollLeft = (contentRef, scrollAmount) => {
    if (contentRef.current) {
      contentRef.current.scrollBy({
        left: -scrollAmount.current,
        behavior: 'smooth'
      });
    }
  };
  
  export const scrollRight = (contentRef, scrollAmount) => {
    if (contentRef.current) {
      contentRef.current.scrollBy({
        left: scrollAmount.current,
        behavior: 'smooth'
      });
    }
  };