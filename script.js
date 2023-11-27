document.addEventListener('DOMContentLoaded', function () {
  const enlargeButton = document.getElementById('enlargeButton');
  const resetButton = document.getElementById('resetButton');
  const images = document.querySelectorAll('.image-container img');

  enlargeButton.addEventListener('click', function () {
      images.forEach(img => {
          img.classList.add('enlarged');
      });
  });

  resetButton.addEventListener('click', function () {
      images.forEach(img => {
          img.classList.remove('enlarged');
      });
  });
});



