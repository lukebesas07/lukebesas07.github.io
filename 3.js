  const images = [
    'gallery_img/nationals.JPG',
    'gallery_img/worlds.jpg',
    'gallery_img/academics.jpeg',
    'gallery_img/quizbee.jpeg',
  ];

  let currentIndex = 0;
  const backgroundDiv = document.querySelector('.background-image');

  let loopInterval = null;
  let isPaused = false;
  let pausedIndex = null;
  const featureCards = document.querySelectorAll('.feature-box');

  function startLoop() {
    if (loopInterval) clearInterval(loopInterval);
    loopInterval = setInterval(() => {
      if (!isPaused) {
        backgroundDiv.classList.add('fade');
        setTimeout(() => {
          backgroundDiv.style.backgroundImage = `url("${images[currentIndex]}")`;
          backgroundDiv.classList.remove('fade');
          currentIndex = (currentIndex + 1) % 4;
        }, 1000);
      }
    }, 5000);
  }

  function pauseLoopAndShowImage(imageIndex) {
    isPaused = true;
    pausedIndex = imageIndex;
    backgroundDiv.style.backgroundImage = `url("${images[imageIndex]}")`;
  }

  function resumeLoop() {
    isPaused = false;
    if (pausedIndex == currentIndex) {
      currentIndex = (currentIndex + 1) % 4;
      pausedIndex = null;
    }
  }

  // Event listeners for feature boxes
  featureCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
      pauseLoopAndShowImage(index);
    });
    card.addEventListener('mouseleave', () => {
      resumeLoop();
    });
  });


  startLoop();
