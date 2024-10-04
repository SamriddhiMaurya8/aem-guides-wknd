// let topSlide = 0;
// const slides = document.querySelectorAll('.mainCarousel__slide');
// const dots = document.querySelectorAll('.mainCarousel__navigation--dots-dot');
// let autoSlideInterval;


// function resetActiveClasses() {
//     slides.forEach(slide => slide.classList.remove('active'));
//     dots.forEach(dot => dot.classList.remove('active'));
// }


// function showSlide(n) {
//     resetActiveClasses();
//     topSlide = (n + slides.length) % slides.length;
//     slides[topSlide].classList.add('active');
//     dots[topSlide].classList.add('active');
// }

// function debounce(func, wait) {
//     let timeout;
//     return function executedFunction(...args) {
//         const later = () => {
//             clearTimeout(timeout);
//             func(...args);
//         };
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//     };
// }

// const changeSlide = debounce((n) => {
//     showSlide(topSlide + n);
// }, 250); 

// function goToSlide(n) {
//     showSlide(n);
// }

// function startAutoSlide() {
//     autoSlideInterval = setInterval(() => changeSlide(1), 5000);
// }

// function stopAutoSlide() {
//     clearInterval(autoSlideInterval);
// }

// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         stopAutoSlide();
//         goToSlide(index);
//         setTimeout(startAutoSlide, 1000);
//     });
// });

// document.querySelectorAll('.mainCarousel__navigation--nav-button').forEach((button, index) => {
//     button.addEventListener('click', () => {
//         stopAutoSlide();
//         const direction = index === 0 ? -1 : 1;
//         changeSlide(direction);
//         setTimeout(startAutoSlide, 1000); 
//     });
// });

// showSlide(0);

// startAutoSlide();








//two



// (function() {
//     let topSlide = 0;
//     const slides = document.querySelectorAll('.mainCarousel__slide');
//     const dots = document.querySelectorAll('.mainCarousel__navigation--dots-dot');
//     let autoSlideInterval;

//     function resetActiveClasses() {
//         slides.forEach(slide => slide.classList.remove('active'));
//         dots.forEach(dot => dot.classList.remove('active'));
//     }

//     function showSlide(n) {
//         resetActiveClasses();
//         topSlide = (n + slides.length) % slides.length;
//         slides[topSlide].classList.add('active');
//         dots[topSlide].classList.add('active');
//     }

//     function debounce(func, wait) {
//         let timeout;
//         return function executedFunction(...args) {
//             const later = () => {
//                 clearTimeout(timeout);
//                 func(...args);
//             };
//             clearTimeout(timeout);
//             timeout = setTimeout(later, wait);
//         };
//     }

//     const changeSlide = debounce((n) => {
//         showSlide(topSlide + n);
//     }, 100);

//     function goToSlide(n) {
//         showSlide(n);
//     }

//     function startAutoSlide() {
//         autoSlideInterval = setInterval(() => changeSlide(1), 5000);
//     }

//     function stopAutoSlide() {
//         clearInterval(autoSlideInterval);
//     }

//     dots.forEach((dot, index) => {
//         dot.addEventListener('click', () => {
//             stopAutoSlide();
//             goToSlide(index);
//             setTimeout(startAutoSlide, 1000);
//         });
//     });

//     document.querySelectorAll('.mainCarousel__navigation--nav-button').forEach((button, index) => {
//         button.addEventListener('click', () => {
//             stopAutoSlide();
//             const direction = index === 0 ? -1 : 1;
//             changeSlide(direction);
//             setTimeout(startAutoSlide, 1000);
//         });
//     });

//     showSlide(0);
//     startAutoSlide();
// })();  








//three
// main-carousel.js
(function() {
    let topSlide = 0;
    let autoSlideInterval;
  
    function initMainCarousel() {
      const slides = document.querySelectorAll('.mainCarousel__slide');
      const dots = document.querySelectorAll('.mainCarousel__navigation--dots-dot');
  
      function resetActiveClasses() {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
      }
  
      function showSlide(n) {
        resetActiveClasses();
        topSlide = (n + slides.length) % slides.length;
        slides[topSlide].classList.add('active');
        dots[topSlide].classList.add('active');
      }
  
      function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
          const later = () => {
            clearTimeout(timeout);
            func(...args);
          };
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
        };
      }
  
      const changeSlide = debounce((n) => {
        showSlide(topSlide + n);
      }, 250);
  
      function goToSlide(n) {
        showSlide(n);
      }
  
      function startAutoSlide() {
        autoSlideInterval = setInterval(() => changeSlide(1), 5000);
      }
  
      function stopAutoSlide() {
        clearInterval(autoSlideInterval);
      }
  
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          stopAutoSlide();
          goToSlide(index);
          setTimeout(startAutoSlide, 1000);
        });
      });
  
      document.querySelectorAll('.mainCarousel__navigation--nav-button').forEach((button, index) => {
        button.addEventListener('click', () => {
          stopAutoSlide();
          const direction = index === 0 ? -1 : 1;
          changeSlide(direction);
          setTimeout(startAutoSlide, 1000);
        });
      });
  
      showSlide(0);
      startAutoSlide();
    }
  
    document.addEventListener('DOMContentLoaded', initMainCarousel);
  })();