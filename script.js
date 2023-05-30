const slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.style.display = 'none';

const infoSection = document.querySelector('section');
infoSection.style.display = 'none';

function showSlideshow() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.style.display = 'block';
  
    const infoSection = document.querySelector('section');
    infoSection.style.display = 'none';
  }
  
  function showInfo() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.style.display = 'none';
  
    const infoSection = document.querySelector('section');
    infoSection.style.display = 'block';
  }
  
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link, index) => {
    if (index < 4) {
      link.addEventListener('click', showSlideshow);
    } else if (index === 4) {
      link.addEventListener('click', showInfo);
    }
  });
  