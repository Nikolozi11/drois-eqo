
const gallery = document.querySelector('.gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('img');

  gallery.addEventListener('click', e => {
    if(e.target.tagName === 'IMG'){
      const largeSrc = e.target.getAttribute('data-large');
      lightboxImg.src = largeSrc;
      lightbox.style.display = 'flex';
    }
  });

  lightbox.addEventListener('click', e => {
    if(e.target !== lightboxImg){
      lightbox.style.display = 'none';
      lightboxImg.src = '';
    }
  });