function initVideoLazyLoad() {
    const video = document.getElementById('experience-video');
    const placeholder = document.getElementById('video-placeholder');
  
    video.addEventListener('canplaythrough', () => {
      placeholder.classList.add('hidden');
      video.classList.remove('hidden');
      video.play();
    });
  
    video.load();
  }