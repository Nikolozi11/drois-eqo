const galleryContainer = document.querySelector('.video-gallery');
  const popup = document.getElementById('video-popup');
  const popupVideo = popup.querySelector('video');
  const closeBtn = document.getElementById('popup-close');

  galleryContainer.addEventListener('click', e => {
    if (e.target.classList.contains('video-thumb')) {
      popupVideo.src = e.target.currentSrc || e.target.src;
      popup.style.display = 'flex';
      popupVideo.play();
    }
  });

  closeBtn.addEventListener('click', () => {
    popupVideo.pause();
    popupVideo.src = '';
    popup.style.display = 'none';
  });

  popup.addEventListener('click', e => {
    if (e.target === popup) {
      popupVideo.pause();
      popupVideo.src = '';
      popup.style.display = 'none';
    }
  });