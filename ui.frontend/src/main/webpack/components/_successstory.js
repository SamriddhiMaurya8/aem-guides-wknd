const profiles = document.querySelectorAll('.carouselContainer__carousel--profile');

profiles.forEach(profile => {
  profile.classList.remove('active');
});

if (profiles[2]) {
  profiles[2].classList.add('active');
}




