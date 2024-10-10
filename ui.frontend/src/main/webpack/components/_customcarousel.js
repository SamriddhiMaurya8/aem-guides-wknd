

//three

// (function() {
//     let topSlide = 0;
//     let autoSlideInterval;
  
//     function initMainCarousel() {
//       const slides = document.querySelectorAll('.mainCarousel__slide');
//       const dots = document.querySelectorAll('.mainCarousel__navigation--dots-dot');
  
//       function resetActiveClasses() {
//         slides.forEach(slide => slide.classList.remove('active'));
//         dots.forEach(dot => dot.classList.remove('active'));
//       }
  
//       function showSlide(n) {
//         resetActiveClasses();
//         topSlide = (n + slides.length) % slides.length;
//         slides[topSlide].classList.add('active');
//         dots[topSlide].classList.add('active');
//       }
  
//       function debounce(func, wait) {
//         let timeout;
//         return function executedFunction(...args) {
//           const later = () => {
//             clearTimeout(timeout);
//             func(...args);
//           };
//           clearTimeout(timeout);
//           timeout = setTimeout(later, wait);
//         };
//       }
  
//       const changeSlide = debounce((n) => {
//         showSlide(topSlide + n);
//       }, 250);
  
//       function goToSlide(n) {
//         showSlide(n);
//       }
  
//       function startAutoSlide() {
//         autoSlideInterval = setInterval(() => changeSlide(1), 5000);
//       }
  
//       function stopAutoSlide() {
//         clearInterval(autoSlideInterval);
//       }
  
//       dots.forEach((dot, index) => {
//         dot.addEventListener('click', () => {
//           stopAutoSlide();
//           goToSlide(index);
//           setTimeout(startAutoSlide, 1000);
//         });
//       });
  
//       document.querySelectorAll('.mainCarousel__navigation--nav-button').forEach((button, index) => {
//         button.addEventListener('click', () => {
//           stopAutoSlide();
//           const direction = index === 0 ? -1 : 1;
//           changeSlide(direction);
//           setTimeout(startAutoSlide, 1000);
//         });
//       });
  
//       showSlide(0);
//       startAutoSlide();
//     }
  
//     document.addEventListener('DOMContentLoaded', initMainCarousel);
//   })();

(function() {
  let topSlide = 0;
  let autoSlideInterval;

  function initMainCarousel() {
    const slides = document.querySelectorAll('.mainCarousel__slide');
    const dots = document.querySelectorAll('.mainCarousel__navigation--dots-dot');

    // Function to reset the active classes for slides and dots
    function resetActiveClasses() {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));
    }

    // Function to show the desired slide
    function showSlide(n) {
      resetActiveClasses();
      topSlide = (n + slides.length) % slides.length; // Wrap the slide index
      slides[topSlide].classList.add('active');
      dots[topSlide].classList.add('active');
    }

    // Directly change slide (no debounce)
    function changeSlide(n) {
      showSlide(topSlide + n);  // Directly update the slide
    }

    // Go to a specific slide (for dots)
    function goToSlide(n) {
      showSlide(n);
    }

    // Start the automatic sliding
    function startAutoSlide() {
      autoSlideInterval = setInterval(() => changeSlide(1), 5000); // 5 seconds interval
    }

    // Stop the automatic sliding
    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    // Add event listeners to navigation dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        stopAutoSlide();
        goToSlide(index); // Go to the clicked dot slide
        startAutoSlide(); // Restart auto slide immediately
      });
    });

    // Add event listeners to the previous and next buttons
    document.querySelectorAll('.mainCarousel__navigation--nav-button').forEach((button, index) => {
      button.addEventListener('click', () => {
        stopAutoSlide();
        const direction = index === 0 ? -1 : 1; // Determine if prev or next
        changeSlide(direction); // Move slide in the desired direction
        startAutoSlide(); // Restart auto slide immediately
      });
    });

    // Initialize the first slide and start auto sliding
    showSlide(0);
    startAutoSlide();
  }

  document.addEventListener('DOMContentLoaded', initMainCarousel);
})();
