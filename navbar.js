    const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");
const previewBox = document.querySelector(".preview-box"); 
const categoryName = previewBox.querySelector(".title p");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".close-preview");
const shadow = document.querySelector(".shadow");

// Navbar Now Playing
const nowPlaying = document.getElementById("nowPlaying");

// Single audio object
let currentAudio = new Audio();
currentAudio.crossOrigin = "anonymous";

const audioMap = {
  "gallery_img/epic wolf.jpg": "music/IV OF SPADES - Aura (Official Lyric Video).mp3"
};

window.onload = () => {
  // Filter system
  filterItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains("item")) {
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      const filterName = selectedItem.target.getAttribute("data-name");

      filterImg.forEach((image) => {
        const imageCategory = image.getAttribute("data-name");
        if (imageCategory === filterName || filterName === "all") {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  };

  // Click image -> open preview
  document.querySelectorAll(".gallery .image img").forEach(img => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("src");
      const track = audioMap[src];

      if (track) {
        // Stop old audio if playing
        if (!currentAudio.paused) {
          currentAudio.pause();
          currentAudio.currentTime = 0;
        }
        currentAudio.src = track;

        // Preview box UI
        categoryName.textContent = "Now Playing: " + src.split("/").pop();
        previewImg.src = src;
        previewImg.style.display = "block";
        previewBox.classList.add("show");
        shadow.classList.add("show");
        document.body.style.overflow = "hidden";

        // Remove previous preview audio element if any
        previewBox.querySelector(".player-container")?.remove();
        const player = document.createElement("div");
        player.classList.add("player-container");
        player.innerHTML = `<audio controls autoplay src="${track}"></audio>`;
        previewBox.appendChild(player);

        // Update navbar
        nowPlaying.textContent = "🎵 " + src.split("/").pop();

        // Play only currentAudio
        currentAudio.play().catch(err => console.log("Audio error:", err));
      }
    });
  });
};

// Stop audio if preview is closed
function stopAudioIfClosed() {
  if (!previewBox.classList.contains("show")) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    nowPlaying.textContent = "🎵 No song playing";
  }
}

// Close Preview Box
closeIcon.onclick = () => {
  previewBox.classList.remove("show");
  shadow.classList.remove("show");
  document.body.style.overflow = "auto";
  stopAudioIfClosed();
};

// Shadow click
shadow.onclick = () => {
  previewBox.classList.remove("show");
  shadow.classList.remove("show");
  document.body.style.overflow = "auto";
  stopAudioIfClosed();
};

    function toggleMenu(el) {
      el.classList.toggle('active');
      document.querySelector('.navbar ul').classList.toggle('active');
      document.querySelector('.overlay').classList.toggle('active');
    }
