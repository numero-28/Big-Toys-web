document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM listo");
  
    const colIzq = document.querySelector('.col-izq');
    const colDer = document.querySelector('.col-der');
    const slideHeight = window.innerHeight * 1.05;
  
    let lastScrollY = window.scrollY;
  
    window.addEventListener('scroll', () => {
      const scrollingDown = window.scrollY > lastScrollY;
      lastScrollY = window.scrollY;
  
      [colIzq, colDer].forEach(col => {
        const slides = Array.from(col.children);
        if (!slides.length) return;
  
        if (scrollingDown) {
          const firstSlide = slides[0];
          const rect = firstSlide.getBoundingClientRect();
          console.log("Scrolling down. firstSlide bottom:", rect.bottom);
  
          if (rect.bottom < 0) {
            col.appendChild(firstSlide);
            window.scrollBy(0, -slideHeight);
          }
  
        } else {
          const lastSlide = slides[slides.length - 1];
          const rect = lastSlide.getBoundingClientRect();
          console.log("Scrolling up. lastSlide top:", rect.top);
  
          if (rect.top > window.innerHeight) {
            col.insertBefore(lastSlide, slides[0]);
            window.scrollBy(0, slideHeight);
          }
        }
      });
    });
  });
  