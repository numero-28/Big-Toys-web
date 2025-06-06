// document.addEventListener('DOMContentLoaded', () => {
//   console.log("DOM listo");

//   const colIzq = document.querySelector('.col-izq');
//   const colDer = document.querySelector('.col-der');
//   const slideHeight = window.innerHeight * 1.05;

//   let lastScrollY = window.scrollY;

//   window.addEventListener('scroll', () => {
//     const scrollingDown = window.scrollY > lastScrollY;
//     lastScrollY = window.scrollY;

//     [colIzq, colDer].forEach(col => {
//       const slides = Array.from(col.children);
//       if (slides.length === 0) return;

//       const firstSlide = slides[0];
//       const lastSlide = slides[slides.length - 1];

//       const firstRect = firstSlide.getBoundingClientRect();
//       const lastRect = lastSlide.getBoundingClientRect();

//       if (scrollingDown) {
//         if (firstRect.bottom < 0) {
//           // mueve el primero al final
//           col.appendChild(firstSlide);
//           // reajusta scroll general
//           window.scrollBy(0, -slideHeight);
//         }
//       } else {
//         if (lastRect.top > window.innerHeight) {
//           // mueve el último al principio
//           col.insertBefore(lastSlide, firstSlide);
//           // reajusta scroll general
//           window.scrollBy(0, slideHeight);
//         }
//       }
//     });
//   });
// });

$(document).ready(function () {
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
  });
});