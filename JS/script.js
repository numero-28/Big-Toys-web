document.addEventListener('DOMContentLoaded', () => {
    // console.log("DOM listo");
  
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

    const $izqOriginal = $colIzq.children().clone();
    const $derOriginal = $colDer.children().clone();

    $colIzq.append($izqOriginal);
    $colDer.append($derOriginal);

    $colIzq.on('mouseenter', function () {
        $colIzq.css('overflow-y', 'auto');
        $colDer.css('overflow-y', 'hidden');
    });

    $colDer.on('mouseenter', function () {
        $colDer.css('overflow-y', 'auto');
        $colIzq.css('overflow-y', 'hidden');
    });

    function setupInfiniteScroll($col) {
      const originalHeight = $col[0].scrollHeight / 2;
  
      // Empieza en el centro (parte duplicada)
      $col.scrollTop(originalHeight);
  
      $col.on('scroll', function () {
          const scrollTop = $col.scrollTop();
  
          // Cuando llegas al final visual (parte duplicada completa), vuelve al centro
          if (scrollTop >= originalHeight * 1.5) {
              $col.scrollTop(scrollTop - originalHeight);
          }
  
          // Cuando llegas al principio visual, vuelve al centro
          if (scrollTop <= originalHeight * 0.5) {
              $col.scrollTop(scrollTop + originalHeight);
          }
      });
  }

    setupInfiniteScroll($colIzq);
    setupInfiniteScroll($colDer);
  });
  