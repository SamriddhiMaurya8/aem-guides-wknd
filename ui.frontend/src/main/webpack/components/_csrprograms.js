// let index = 0;
// const galleryItemsWrapper = document.querySelector('.gallery-items-wrapper');
// const galleryItems = document.querySelectorAll('.gallery-item');
// const totalSlides = Math.ceil(galleryItems.length / 4);
// const prevButton = document.querySelector('.navigation__nav-button--prev');
// const nextButton = document.querySelector('.navigation__nav-button--next');

// const mainImage = document.querySelector('.contentSection__content--image-wrapper .image');
// const mainParagraph = document.querySelector('.contentSection__content--data-wrapper__paragraph');
// const  mainTitle = document.querySelector('.contentSection__content--data-wrapper__heading');


// function updateButtonState() {
//     prevButton.disabled = index === 0; 
//     nextButton.disabled = index === totalSlides - 1; 
// }

// updateButtonState();

// prevButton.addEventListener('click', function() {
//     if (index > 0) {
//         index--;
//         galleryItemsWrapper.style.transform = `translateX(-${index * 100}%)`;
//         updateButtonState();
//     }
// });

// nextButton.addEventListener('click', function() {
//     if (index < totalSlides - 1) {
//         index++;
//         galleryItemsWrapper.style.transform = `translateX(-${index * 100}%)`;
//         updateButtonState(); 
//     }
// });

// galleryItems.forEach(item => {
//     const image = item.querySelector('.gallery-item__image');
//     const desc = item.querySelector('.gallery-item__desc');
//     const title = item.querySelector('.gallery-item__caption');

//     image.addEventListener('click', () => {
//         mainImage.src = image.src;
//         mainImage.alt = image.alt;

//         mainParagraph.textContent = desc.textContent;
//         mainTitle.textContent = title.textContent ; 
//     });
// });




(function() {
    function initGallery() {
        let galleryIndex = 0;
        const galleryItemsWrapper = document.querySelector('.gallery-items-wrapper');
        const galleryItems = document.querySelectorAll('.gallery-item');
        const totalSlides = Math.ceil(galleryItems.length / 4);
        const prevButton = document.querySelector('.navigation__nav-button--prev');
        const nextButton = document.querySelector('.navigation__nav-button--next');
        
        const mainImage = document.querySelector('.contentSection__content--image-wrapper .image');
        const mainParagraph = document.querySelector('.contentSection__content--data-wrapper__paragraph');
        const mainTitle = document.querySelector('.contentSection__content--data-wrapper__heading');
        
        function updateButtonState() {
            prevButton.disabled = galleryIndex === 0;
            nextButton.disabled = galleryIndex === totalSlides - 1;
        }
        
        updateButtonState();
        
        prevButton.addEventListener('click', function() {
            if (galleryIndex > 0) {
                galleryIndex--;
                galleryItemsWrapper.style.transform = `translateX(-${galleryIndex * 100}%)`;
                updateButtonState();
            }
        });
        
        nextButton.addEventListener('click', function() {
            if (galleryIndex < totalSlides - 1) {
                galleryIndex++;
                galleryItemsWrapper.style.transform = `translateX(-${galleryIndex * 100}%)`;
                updateButtonState();
            }
        });
        
        galleryItems.forEach(item => {
            const image = item.querySelector('.gallery-item__image');
            const desc = item.querySelector('.gallery-item__desc');
            const title = item.querySelector('.gallery-item__caption');
            
            image.addEventListener('click', () => {
                mainImage.src = image.src;
                mainImage.alt = image.alt;
                mainParagraph.textContent = desc.textContent;
                mainTitle.textContent = title.textContent;
            });
        });
    }
    
    document.addEventListener('DOMContentLoaded', initGallery);
})();