document.addEventListener('DOMContentLoaded', () => {
<<<<<<< Updated upstream
    console.log("DOM listo");
  
    // const colIzq = document.querySelector('.col-izq');
    // const colDer = document.querySelector('.col-der');
    // const slideHeight = window.innerHeight * 1.05;
  
    // let lastScrollY = window.scrollY;
  
    // window.addEventListener('scroll', () => {
    //   const scrollingDown = window.scrollY > lastScrollY;
    //   lastScrollY = window.scrollY;
  
    //   [colIzq, colDer].forEach(col => {
    //     const slides = Array.from(col.children);
    //     if (!slides.length) return;
  
    //     if (scrollingDown) {
    //       const firstSlide = slides[0];
    //       const rect = firstSlide.getBoundingClientRect();
    //       console.log("Scrolling down. firstSlide bottom:", rect.bottom);
  
    //       if (rect.bottom < 0) {
    //         col.appendChild(firstSlide);
    //         window.scrollBy(0, -slideHeight);
    //       }
  
    //     } else {
    //       const lastSlide = slides[slides.length - 1];
    //       const rect = lastSlide.getBoundingClientRect();
    //       console.log("Scrolling up. lastSlide top:", rect.top);
  
    //       if (rect.top > window.innerHeight) {
    //         col.insertBefore(lastSlide, slides[0]);
    //         window.scrollBy(0, slideHeight);
    //       }
    //     }
    //   });
    // });

    const $colIzq = $('.col-izq');
    const $colDer = $('.col-der');

    $colIzq.on('mouseenter', function () {
        $colIzq.css('overflow-y', 'auto');
        $colDer.css('overflow-y', 'hidden');
    });

    $colDer.on('mouseenter', function () {
        $colDer.css('overflow-y', 'auto');
        $colIzq.css('overflow-y', 'hidden');
    });

    $colIzq.on('mouseleave', function () {
        $colIzq.css('overflow-y', 'hidden');
    });

    $colDer.on('mouseleave', function () {
        $colDer.css('overflow-y', 'hidden');
=======
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
      if (slides.length === 0) return;

      const firstSlide = slides[0];
      const lastSlide = slides[slides.length - 1];

      const firstRect = firstSlide.getBoundingClientRect();
      const lastRect = lastSlide.getBoundingClientRect();

      if (scrollingDown) {
        if (firstRect.bottom < 0) {
          // mueve el primero al final
          col.appendChild(firstSlide);
          // reajusta scroll general
          window.scrollBy(0, -slideHeight);
        }
      } else {
        if (lastRect.top > window.innerHeight) {
          // mueve el último al principio
          col.insertBefore(lastSlide, firstSlide);
          // reajusta scroll general
          window.scrollBy(0, slideHeight);
        }
      }
>>>>>>> Stashed changes
    });
  });
});
