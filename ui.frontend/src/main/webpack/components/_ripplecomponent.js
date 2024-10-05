const rippleItems = document.querySelectorAll('.rippleEffect__rippleCarousel--rippleItem');
const controlLeft = document.querySelector('.control-left');
const controlRight = document.querySelector('.control-right');
let currentRippleIndex = 0;

function updateRippleCarousel() {
  rippleItems.forEach((rippleItem, index) => {
    if (index < currentRippleIndex || index >= currentRippleIndex + 4) {
      rippleItem.classList.add('hidden');
    } else {
      rippleItem.classList.remove('hidden');

      if (index % 2 === 0) {
        rippleItem.style.transform = 'translateY(50px)';
      } else {
        rippleItem.style.transform = 'translateY(-50px)';
      }
    }
  });

  controlLeft.disabled = currentRippleIndex === 0;
  controlRight.disabled = currentRippleIndex + 4 >= rippleItems.length;
}

controlLeft.addEventListener('click', () => {
  if (currentRippleIndex > 0) {
    currentRippleIndex -= 1;
    updateRippleCarousel();
  }
});

controlRight.addEventListener('click', () => {
  if (currentRippleIndex + 4 < rippleItems.length) {
    currentRippleIndex += 1;
    updateRippleCarousel();
  }
});

updateRippleCarousel();
