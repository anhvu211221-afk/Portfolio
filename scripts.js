function toggleFullscreen(image) {
  if (!document.fullscreenElement) {
      // Enter fullscreen
      image.requestFullscreen();
  } else {
      // Exit fullscreen
      document.exitFullscreen();
  }
}