



// document.addEventListener('DOMContentLoaded', () => {
//     const carouselProfileElements = document.querySelectorAll('.carouselContainer__carousel--profile');
//     const carouselPreviousButton = document.querySelector('.previousBtn');
//     const carouselNextButton = document.querySelector('.nextBtn');
  
//     let carouselProfileHTMLArray = Array.from(carouselProfileElements).map(profileElement => profileElement.innerHTML);
  
//     function updateCarouselProfiles() {
//         carouselProfileElements.forEach((carouselProfileElement, profileIndex) => {
//             carouselProfileElement.innerHTML = carouselProfileHTMLArray[profileIndex];
//             carouselProfileElement.classList.toggle('midProfile', profileIndex === 2);  
//         });
//     }
  
//     function shiftCarouselProfileArray(direction) {
//         if (direction === 'next') {
//             carouselProfileHTMLArray.push(carouselProfileHTMLArray.shift());
//         } else if (direction === 'prev') {
//             carouselProfileHTMLArray.unshift(carouselProfileHTMLArray.pop());
//         }
//         updateCarouselProfiles();
//     }
  
//     function handleCarouselPreviousButtonClick() {
//         console.log("Prev clicked");
//         shiftCarouselProfileArray('prev');
//     }
  
//     function handleCarouselNextButtonClick() {
//         console.log(" clicked");
//         shiftCarouselProfileArray('next');
//     }
  
//     if (carouselPreviousButton) {
//         carouselPreviousButton.addEventListener('click', handleCarouselPreviousButtonClick);
//     } else {
//         console.error("Previous button not found");
//     }
  
//     if (carouselNextButton) {
//         carouselNextButton.addEventListener('click', handleCarouselNextButtonClick);
//     } else {
//         console.error("Next button not found");
//     }
  
//     updateCarouselProfiles();
//   });
  


//two

// (function() {
//     document.addEventListener('DOMContentLoaded', () => {
//         const carouselProfileElements = document.querySelectorAll('.carouselContainer__carousel--profile');
//         const carouselPreviousButton = document.querySelector('.previousBtn');
//         const carouselNextButton = document.querySelector('.nextBtn');
//         let carouselProfileHTMLArray = Array.from(carouselProfileElements).map(profileElement => profileElement.innerHTML);

//         function updateCarouselProfiles() {
//             carouselProfileElements.forEach((carouselProfileElement, profileIndex) => {
//                 carouselProfileElement.innerHTML = carouselProfileHTMLArray[profileIndex];
//                 carouselProfileElement.classList.toggle('midProfile', profileIndex === 2);
//             });
//         }

//         function shiftCarouselProfileArray(direction) {
//             if (direction === 'next') {
//                 carouselProfileHTMLArray.push(carouselProfileHTMLArray.shift());
//             } else if (direction === 'prev') {
//                 carouselProfileHTMLArray.unshift(carouselProfileHTMLArray.pop());
//             }
//             updateCarouselProfiles();
//         }

//         function handleCarouselPreviousButtonClick() {
//             shiftCarouselProfileArray('prev');
//         }

//         function handleCarouselNextButtonClick() {
//             shiftCarouselProfileArray('next');
//         }

//         if (carouselPreviousButton) {
//             carouselPreviousButton.addEventListener('click', handleCarouselPreviousButtonClick);
//         }

//         if (carouselNextButton) {
//             carouselNextButton.addEventListener('click', handleCarouselNextButtonClick);
//         }

//         updateCarouselProfiles();
//     });
// })();  






//three


// profile-carousel.js
(function() {
    function initProfileCarousel() {
      const profileElements = document.querySelectorAll('.carouselContainer__carousel--profile');
      const backwardButton = document.querySelector('.previousBtn');
      const forwardButton = document.querySelector('.nextBtn');
  
      let profileHTMLArray = Array.from(profileElements).map(profileElement => profileElement.innerHTML);
  
      function renderProfiles() {
        profileElements.forEach((profileElement, index) => {
          profileElement.innerHTML = profileHTMLArray[index];
          profileElement.classList.toggle('active', index === 2);
        });
      }
  
      function shiftProfileArray(direction) {
        if (direction === 'next') {
          profileHTMLArray.push(profileHTMLArray.shift());
        } else if (direction === 'prev') {
          profileHTMLArray.unshift(profileHTMLArray.pop());
        }
        renderProfiles();
      }
  
      function handleBackwardButtonClick() {
        console.log("Backward button clicked");
        shiftProfileArray('prev');
      }
  
      function handleForwardButtonClick() {
        console.log("Forward button clicked");
        shiftProfileArray('next');
      }
  
      if (backwardButton) {
        backwardButton.addEventListener('click', handleBackwardButtonClick);
      } else {
        console.error("Backward button not found");
      }
  
      if (forwardButton) {
        forwardButton.addEventListener('click', handleForwardButtonClick);
      } else {
        console.error("Forward button not found");
      }
  
      renderProfiles();
    }
  
    document.addEventListener('DOMContentLoaded', initProfileCarousel);
  })();