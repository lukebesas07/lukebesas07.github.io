function expandBox(id) {
  const overlay = document.getElementById('overlay');
  const contentBox = document.getElementById('contentBox');
  const boxTitle = document.getElementById('boxTitle');
  const boxText = document.getElementById('boxText');
  const downloadLink = document.getElementById('downloadLink');

  // Set content based on which box was clicked
  if (id === 'box1') {
    boxTitle.textContent = 'Music Research';
    boxText.value = 'Details about music research...';
    downloadLink.href = 'path/to/music-file.mp3'; // Replace with actual file path
  } else if (id === 'box2') {
    boxTitle.textContent = 'Video Research';
    boxText.value = 'Details about video research...';
    downloadLink.href = 'path/to/video-file.mp4'; // Replace with actual file path
  }

  overlay.style.display = 'flex';
}

// Function to close the overlay
function closeBox() {
  document.getElementById('overlay').style.display = 'none';
}