document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.galleryContainer__item');
    galleryItems.forEach((item, index) => {
        
        if (index === 0) item.classList.add('row1');
        else if (index === 1) item.classList.add('row2');
        else if (index === 2) item.classList.add('row3');
        else if (index === 4) item.classList.add('card5');
        else if (index === 5) item.classList.add('card6');
        else if (index === 6) item.classList.add('row3-1');
    });
});
