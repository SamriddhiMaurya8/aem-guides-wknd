







document.addEventListener('DOMContentLoaded', () => {
    const leftCardItems = document.querySelectorAll('.cardsContainer__cards--wrapper-itemLeft');
    const rightCardItems = document.querySelectorAll('.cardsContainer__cards--wrapper-itemRight');
    
    leftCardItems.forEach((leftCard, cardIndex) => {
      leftCard.classList.add(`delay-${cardIndex + 1}`);
    });
  
    rightCardItems.forEach((rightCard, cardIndex) => {
      rightCard.classList.add(`delay-${cardIndex + 1}`);
    });
  });
  
  