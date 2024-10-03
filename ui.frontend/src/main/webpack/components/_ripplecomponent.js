

// const items = document.querySelectorAll('.rippleEffect__rippleCarousel--rippleItem');
// const leftButton = document.querySelector('.control-left');
// const rightButton = document.querySelector('.control-right');
// let currentIndex = 0;

// function updateCarousel() {
//   items.forEach((item, index) => {
//     if (index < currentIndex || index >= currentIndex + 4) {
//       item.classList.add('hidden');
//     } else {
//       item.classList.remove('hidden');


//       if (index % 2 === 0) {
//         item.style.transform = 'translateY(50px)'; 
//       } else {
//         item.style.transform = 'translateY(-50px)'; 
//       }
//     }
//   });

//   leftButton.disabled = currentIndex === 0;
//   rightButton.disabled = currentIndex + 4 >= items.length;
// }

// leftButton.addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex -= 1;
//     updateCarousel();
//   }
// });

// rightButton.addEventListener('click', () => {
//   if (currentIndex + 4 < items.length) {
//     currentIndex += 1;
//     updateCarousel();
//   }
// });


// updateCarousel();
