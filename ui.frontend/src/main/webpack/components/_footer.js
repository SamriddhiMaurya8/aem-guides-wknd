// document.querySelectorAll('.footerBottom__menu--column--strong').forEach(header => {
//     const accButton = header.querySelector('.accordion-button');
//     const accContent = header.nextElementSibling;

//     header.addEventListener('click', () => {
//         accContent.classList.toggle('open');
//         // accContent.classList.toggle('open');
//     });
// });





document.querySelectorAll('.footerBottom__menu--column--strong').forEach(header => {
    const accButton = header.querySelector('.accordion-button');
    const accContent = header.nextElementSibling;

    header.addEventListener('click', () => {
        accContent.classList.toggle('open');
        
        
        if (accContent.classList.contains('open')) {
            accButton.textContent = '-';
        } else {
            accButton.textContent = '+';
        }
    });
});
