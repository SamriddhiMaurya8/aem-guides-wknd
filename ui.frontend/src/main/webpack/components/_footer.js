document.querySelectorAll('.footerBottom__menu--column--strong').forEach(header => {
    const accButton = header.querySelector('.accordion-button');
    const accContent = header.nextElementSibling;

    header.addEventListener('click', () => {
        accContent.classList.toggle('open');
        accContent.classList.toggle('open');
    });
});

