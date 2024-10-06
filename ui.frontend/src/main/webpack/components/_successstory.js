

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