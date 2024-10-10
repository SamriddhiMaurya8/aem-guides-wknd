




// (function() {
//     function initGallery() {
//         let galleryIndex = 0;
//         const galleryItemsWrapper = document.querySelector('.gallery-items-wrapper');
//         const galleryItems = document.querySelectorAll('.gallery-item');
//         const totalSlides = Math.ceil(galleryItems.length / 4);
//         const prevButton = document.querySelector('.navigation__nav-button--prev');
//         const nextButton = document.querySelector('.navigation__nav-button--next');
        
//         const mainImage = document.querySelector('.contentSection__content--image-wrapper .image');
//         const mainParagraph = document.querySelector('.contentSection__content--data-wrapper__paragraph');
//         const mainTitle = document.querySelector('.contentSection__content--data-wrapper__heading');
        
//         function updateButtonState() {
//             prevButton.disabled = galleryIndex === 0;
//             nextButton.disabled = galleryIndex === totalSlides - 1;
//         }
        
//         updateButtonState();
        
//         prevButton.addEventListener('click', function() {
//             if (galleryIndex > 0) {
//                 galleryIndex--;
//                 galleryItemsWrapper.style.transform = `translateX(-${galleryIndex * 100}%)`;
//                 updateButtonState();
//             }
//         });
        
//         nextButton.addEventListener('click', function() {
//             if (galleryIndex < totalSlides - 1) {
//                 galleryIndex++;
//                 galleryItemsWrapper.style.transform = `translateX(-${galleryIndex * 100}%)`;
//                 updateButtonState();
//             }
//         });
        
//         galleryItems.forEach(item => {
//             const image = item.querySelector('.gallery-item__image');
//             const desc = item.querySelector('.gallery-item__desc');
//             const title = item.querySelector('.gallery-item__caption');
            
//             image.addEventListener('click', () => {
//                 mainImage.src = image.src;
//                 mainImage.alt = image.alt;
//                 mainParagraph.textContent = desc.textContent;
//                 mainTitle.textContent = title.textContent;
//             });
//         });
//     }
    
//     document.addEventListener('DOMContentLoaded', initGallery);
// })();



(function() {
    function initGallery() {
        let galleryIndex = 0;
        const galleryItemsWrapper = document.querySelector('.gallery-items-wrapper');
        const galleryItems = document.querySelectorAll('.gallery-item');
        const totalItems = galleryItems.length;
        const prevButton = document.querySelector('.navigation__nav-button--prev');
        const nextButton = document.querySelector('.navigation__nav-button--next');
        
        const mainImage = document.querySelector('.contentSection__content--image-wrapper .image');
        const mainParagraph = document.querySelector('.contentSection__content--data-wrapper__paragraph');
        const mainTitle = document.querySelector('.contentSection__content--data-wrapper__heading');
        
        function updateButtonState() {
            prevButton.disabled = galleryIndex === 0;
            nextButton.disabled = galleryIndex === totalItems - 1;
        }
        
        function updateGalleryItem() {
            // Translate gallery wrapper to show only one item at a time
            galleryItemsWrapper.style.transform = `translateX(-${galleryIndex * 100}%)`;
            
            // Update the content based on the currently active gallery item
            const currentItem = galleryItems[galleryIndex];
            if (currentItem) {
                const image = currentItem.querySelector('.gallery-item__image');
                const desc = currentItem.querySelector('.gallery-item__desc');
                const title = currentItem.querySelector('.gallery-item__caption');
                
                mainImage.src = image.src;
                mainImage.alt = image.alt;
                mainParagraph.textContent = desc.textContent;
                mainTitle.textContent = title.textContent;
            }
            
            updateButtonState();
        }

        updateButtonState(); // Initialize button state
        
        prevButton.addEventListener('click', function() {
            if (galleryIndex > 0) {
                galleryIndex--;
                updateGalleryItem();
            }
        });
        
        nextButton.addEventListener('click', function() {
            if (galleryIndex < totalItems - 1) {
                galleryIndex++;
                updateGalleryItem();
            }
        });
        
        galleryItems.forEach((item, index) => {
            const image = item.querySelector('.gallery-item__image');
            const desc = item.querySelector('.gallery-item__desc');
            const title = item.querySelector('.gallery-item__caption');
            
            // On click, update the main content
            image.addEventListener('click', () => {
                mainImage.src = image.src;
                mainImage.alt = image.alt;
                mainParagraph.textContent = desc.textContent;
                mainTitle.textContent = title.textContent;
                
                // Set the clicked item as the active item
                galleryIndex = index;
                updateButtonState();
            });
        });
    }
    
    document.addEventListener('DOMContentLoaded', initGallery);
})();
